import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { vi } from 'vitest';

import { NotificationService, NotificationState } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;
  let http: HttpTestingController;
  let testSocket: { onmessage: ((event: MessageEvent) => void) | null; close(): void } | null;

  beforeEach(() => {
    testSocket = null;
    vi.stubGlobal('WebSocket', class {
      static readonly OPEN = 1;
      readonly readyState = 0;
      onopen: ((event: Event) => void) | null = null;
      onmessage: ((event: MessageEvent) => void) | null = null;
      onerror: ((event: Event) => void) | null = null;
      onclose: ((event: CloseEvent) => void) | null = null;
      constructor() {
        testSocket = this;
      }
      close(): void {}
      send(): void {}
    });

    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(NotificationService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    service.stop();
    http.verify();
    vi.unstubAllGlobals();
  });

  it('routes a legacy all marker to the mark-all endpoint', async () => {
    const starting = service.start('test-token');
    http.expectOne(request => request.url === 'http://127.0.0.1:8000/api/notifications').flush({
      items: [],
      total: 0,
      unread_count: 0
    });
    http.expectOne(request => request.url === 'http://127.0.0.1:8000/api/notifications/leave-requests').flush({
      items: [],
      total: 0,
      unread_count: 0
    });
    await starting;

    const marking = service.markRead('all');
    const admissionRequest = http.expectOne('http://127.0.0.1:8000/api/notifications/read-all');
    const leaveRequest = http.expectOne('http://127.0.0.1:8000/api/notifications/leave-requests/read-all');
    expect(admissionRequest.request.method).toBe('POST');
    expect(leaveRequest.request.method).toBe('POST');
    admissionRequest.flush({ marked_read: 0 });
    leaveRequest.flush({ marked_read: 0 });
    await marking;
  });

  it('receives and deduplicates leave-request websocket events without fetching admission notifications', async () => {
    const received: string[] = [];
    service.leaveArrivals$.subscribe(notification => received.push(notification.id));
    const starting = service.start('test-token', false);
    http.expectOne(request => request.url === 'http://127.0.0.1:8000/api/notifications/leave-requests').flush({
      items: [],
      total: 0,
      unread_count: 0
    });
    await starting;
    expect(testSocket).not.toBeNull();

    const event = {
      type: 'leave_request',
      notification: {
        id: 'leave-1',
        leave_request_id: 'request-1',
        student_name: 'Student One',
        class_name: 'Nursery',
        start_date: '2026-10-31',
        end_date: '2026-11-01',
        created_at: '2026-10-30T10:00:00Z',
        status: 'pending',
        read_at: null
      }
    };
    const message = { data: JSON.stringify(event) } as MessageEvent;
    testSocket?.onmessage?.(message);
    testSocket?.onmessage?.(message);

    expect(received).toEqual(['leave-1']);
    http.expectNone(request => request.url === 'http://127.0.0.1:8000/api/notifications');
  });

  it('loads persistent school-note notifications and deduplicates live events', async () => {
    const received: string[] = [];
    let currentState: NotificationState | undefined;
    service.state$.subscribe(value => currentState = value);
    service.schoolNoteArrivals$.subscribe(notification => received.push(notification.note_id));
    const starting = service.start('test-token', false, true);
    http.expectOne(request => request.url === 'http://127.0.0.1:8000/api/notifications/leave-requests').flush({
      items: [],
      total: 0,
      unread_count: 0
    });
    http.expectOne(request => request.url === 'http://127.0.0.1:8000/api/notifications/school-notes').flush({
      items: [],
      total: 0,
      unread_count: 0
    });
    await starting;

    const event = {
      type: 'school_note',
      notification: {
        id: 'note-1',
        note_id: 'note-1',
        title: 'Bring your workbook',
        content: 'Please bring it tomorrow.',
        category: 'homework',
        visibility: 'class',
        class_option_id: 'class-1',
        class_name: 'Nursery',
        student_id: null,
        student_name: null,
        created_by_name: 'Teacher One',
        created_at: '2026-10-30T12:00:00Z',
        read_at: null
      }
    };
    const message = { data: JSON.stringify(event) } as MessageEvent;
    testSocket?.onmessage?.(message);
    testSocket?.onmessage?.(message);

    expect(received).toEqual(['note-1']);
    expect(currentState?.schoolNoteItems.map(item => item.note_id)).toEqual(['note-1']);
    expect(currentState?.schoolNotesUnreadCount).toBe(1);
    expect(currentState?.unreadCount).toBe(1);
    expect(currentState?.total).toBe(1);
    http.expectNone(request => request.url === 'http://127.0.0.1:8000/api/notifications');
  });

  it('removes deleted leave requests from live notification state', async () => {
    let leaveItems: string[] = [];
    let leaveUnreadCount = -1;
    let unreadCount = -1;
    let total = -1;
    service.state$.subscribe(state => {
      leaveItems = state.leaveItems.map(item => item.id);
      leaveUnreadCount = state.leaveUnreadCount;
      unreadCount = state.unreadCount;
      total = state.total;
    });
    const starting = service.start('test-token', false);
    http.expectOne(request => request.url === 'http://127.0.0.1:8000/api/notifications/leave-requests').flush({
      items: [{
        id: 'leave-1',
        leave_request_id: 'request-1',
        student_name: 'Student One',
        class_name: 'Nursery',
        start_date: '2026-10-31',
        end_date: '2026-11-01',
        created_at: '2026-10-30T10:00:00Z',
        status: 'pending',
        read_at: null
      }],
      total: 1,
      unread_count: 1
    });
    await starting;

    testSocket?.onmessage?.({
      data: JSON.stringify({
        type: 'leave_request_deleted',
        leave_request_id: 'request-1',
        notification_count: 1,
        unread_count: 1
      })
    } as MessageEvent);

    expect(leaveItems).toEqual([]);
    expect(leaveUnreadCount).toBe(0);
    expect(unreadCount).toBe(0);
    expect(total).toBe(0);
  });
});
