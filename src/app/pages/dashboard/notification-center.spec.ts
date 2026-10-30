import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, Subject } from 'rxjs';

import { NotificationCenter } from './notification-center';
import { AdmissionEnquiryNotification, LeaveRequestNotification, NotificationService, NotificationState, SchoolNoteNotification } from '../../services/notification.service';

describe('NotificationCenter', () => {
  let fixture: ComponentFixture<NotificationCenter>;
  let component: NotificationCenter;
  let arrivals: Subject<AdmissionEnquiryNotification>;
  let leaveArrivals: Subject<LeaveRequestNotification>;
  let schoolNoteArrivals: Subject<SchoolNoteNotification>;
  let deletedLeaveRequests: Subject<string>;
  let state: BehaviorSubject<NotificationState>;
  let markReadIds: string[];
  let markAllCount: number;
  const notification: AdmissionEnquiryNotification = {
    id: 'notice-1',
    enquiry_id: 'enquiry-1',
    child_name: 'Tara Rao',
    parent_name: 'Asha Rao',
    child_age: '4-5',
    created_at: '2026-10-30T10:00:00Z',
    read_at: null
  };

  beforeEach(async () => {
    arrivals = new Subject<AdmissionEnquiryNotification>();
    leaveArrivals = new Subject<LeaveRequestNotification>();
    schoolNoteArrivals = new Subject<SchoolNoteNotification>();
    deletedLeaveRequests = new Subject<string>();
    markReadIds = [];
    markAllCount = 0;
    state = new BehaviorSubject<NotificationState>({
      items: [notification],
      leaveItems: [],
      schoolNoteItems: [],
      admissionUnreadCount: 1,
      leaveUnreadCount: 0,
      schoolNotesUnreadCount: 0,
      unreadCount: 1,
      admissionTotal: 1,
      leaveTotal: 0,
      schoolNotesTotal: 0,
      total: 1,
      hasMore: false,
      connected: true,
      error: ''
    });
    const service = {
      state$: state.asObservable(),
      arrivals$: arrivals.asObservable(),
      leaveArrivals$: leaveArrivals.asObservable(),
      schoolNoteArrivals$: schoolNoteArrivals.asObservable(),
      deletedLeaveRequests$: deletedLeaveRequests.asObservable(),
      markRead: async (id: string) => { markReadIds.push(id); },
      markLeaveRead: async (id: string) => { markReadIds.push(id); },
      markSchoolNoteRead: async (id: string) => { markReadIds.push(id); },
      markAllRead: async () => { markAllCount += 1; },
      loadMore: async () => undefined
    };

    await TestBed.configureTestingModule({
      imports: [NotificationCenter],
      providers: [{ provide: NotificationService, useValue: service }]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationCenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shows unread counts and opens the enquiry after marking its notification read', async () => {
    const selected: AdmissionEnquiryNotification[] = [];
    component.notificationSelected.subscribe(item => selected.push(item));

    const bell = fixture.nativeElement.querySelector('.notification-bell') as HTMLButtonElement;
    expect(bell.textContent).toContain('1');
    bell.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Tara Rao');

    await component.selectNotification(notification);
    expect(markReadIds).toEqual(['notice-1']);
    expect(selected).toEqual([notification]);
  });

  it('shows a toast when a new live notification arrives and supports mark all read', async () => {
    arrivals.next(notification);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('New admission enquiry');

    await component.markAllRead();
    expect(markAllCount).toBe(1);
  });

  it('shows a leave-request toast and opens that request when selected', async () => {
    const leaveNotification: LeaveRequestNotification = {
      id: 'leave-1',
      leave_request_id: 'request-1',
      student_name: 'Student One',
      class_name: 'Nursery',
      start_date: '2026-10-31',
      end_date: '2026-11-01',
      created_at: '2026-10-30T10:00:00Z',
      status: 'pending',
      read_at: null
    };
    const selected: LeaveRequestNotification[] = [];
    component.leaveRequestSelected.subscribe(item => selected.push(item));

    leaveArrivals.next(leaveNotification);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('New leave request');
    expect(fixture.nativeElement.textContent).toContain('Student One');
    await component.selectLeaveRequest(leaveNotification);

    expect(selected).toEqual([leaveNotification]);
    expect(component.leaveToast()).toBeNull();
  });

  it('dismisses the live toast when its pending request is deleted', () => {
    const leaveNotification: LeaveRequestNotification = {
      id: 'leave-3',
      leave_request_id: 'request-3',
      student_name: 'Student Three',
      class_name: 'Nursery',
      start_date: '2026-10-31',
      end_date: '2026-10-31',
      created_at: '2026-10-30T10:00:00Z',
      status: 'pending',
      read_at: null
    };
    leaveArrivals.next(leaveNotification);
    deletedLeaveRequests.next('request-3');
    expect(component.leaveToast()).toBeNull();
  });

  it('shows persisted leave notifications in the shared bell list and unread count', () => {
    const leaveNotification: LeaveRequestNotification = {
      id: 'leave-2',
      leave_request_id: 'request-2',
      student_name: 'Student Two',
      class_name: 'UKG',
      start_date: '2026-11-02',
      end_date: '2026-11-02',
      created_at: '2026-10-30T11:00:00Z',
      status: 'approved',
      read_at: null
    };
    state.next({
      ...state.value,
      leaveItems: [leaveNotification],
      leaveUnreadCount: 1,
      unreadCount: 2,
      total: 2
    });
    fixture.detectChanges();

    const bell = fixture.nativeElement.querySelector('.notification-bell') as HTMLButtonElement;
    expect(bell.textContent).toContain('2');
    bell.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.leave-notification-row')?.textContent).toContain('Student Two');
    expect(fixture.nativeElement.querySelector('.leave-notification-row')?.textContent).toContain('approved');
  });

  it('shows a school-note toast and opens the note from the notification list', async () => {
    const schoolNote: SchoolNoteNotification = {
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
    };
    const selected: SchoolNoteNotification[] = [];
    component.schoolNoteSelected.subscribe(item => selected.push(item));

    schoolNoteArrivals.next(schoolNote);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('New school note');
    expect(fixture.nativeElement.textContent).toContain('Bring your workbook');

    await component.selectSchoolNote(schoolNote);

    expect(markReadIds).toContain('note-1');
    expect(selected).toEqual([schoolNote]);
    expect(component.schoolNoteToast()).toBeNull();
  });
});
