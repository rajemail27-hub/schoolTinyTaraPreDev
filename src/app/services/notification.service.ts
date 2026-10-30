import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Subject, firstValueFrom } from 'rxjs';
import { API_URL } from './api-url';

export interface AdmissionEnquiryNotification {
  id: string;
  enquiry_id: string;
  child_name: string;
  parent_name: string;
  child_age: string;
  created_at: string;
  read_at: string | null;
}

export interface LeaveRequestNotification {
  id: string;
  leave_request_id: string;
  student_name: string;
  class_name: string;
  start_date: string;
  end_date: string;
  created_at: string;
  status: 'pending' | 'approved' | 'rejected' | 'cancelled';
  read_at: string | null;
}

export interface SchoolNoteNotification {
  id: string;
  note_id: string;
  title: string;
  content: string;
  category: string;
  visibility: 'individual' | 'class';
  class_option_id: string;
  class_name: string;
  student_id: string | null;
  student_name: string | null;
  created_by_name: string;
  created_at: string;
  read_at: string | null;
}

interface NotificationPage {
  items: AdmissionEnquiryNotification[];
  total: number;
  unread_count: number;
}

interface LeaveRequestNotificationPage {
  items: LeaveRequestNotification[];
  total: number;
  unread_count: number;
}

interface SchoolNoteNotificationPage {
  items: SchoolNoteNotification[];
  total: number;
  unread_count: number;
}

export interface NotificationState {
  items: AdmissionEnquiryNotification[];
  leaveItems: LeaveRequestNotification[];
  schoolNoteItems: SchoolNoteNotification[];
  admissionUnreadCount: number;
  leaveUnreadCount: number;
  schoolNotesUnreadCount: number;
  unreadCount: number;
  admissionTotal: number;
  leaveTotal: number;
  schoolNotesTotal: number;
  total: number;
  hasMore: boolean;
  connected: boolean;
  error: string;
}

const PAGE_SIZE = 30;
const INITIAL_STATE: NotificationState = {
  items: [],
  leaveItems: [],
  schoolNoteItems: [],
  admissionUnreadCount: 0,
  leaveUnreadCount: 0,
  schoolNotesUnreadCount: 0,
  unreadCount: 0,
  admissionTotal: 0,
  leaveTotal: 0,
  schoolNotesTotal: 0,
  total: 0,
  hasMore: false,
  connected: false,
  error: ''
};

function isNotification(value: unknown): value is AdmissionEnquiryNotification {
  if (typeof value !== 'object' || value === null) return false;
  const record = value as Record<string, unknown>;
  return typeof record['id'] === 'string'
    && typeof record['enquiry_id'] === 'string'
    && typeof record['child_name'] === 'string'
    && typeof record['parent_name'] === 'string'
    && typeof record['child_age'] === 'string'
    && typeof record['created_at'] === 'string'
    && (typeof record['read_at'] === 'string' || record['read_at'] === null);
}

function isLeaveRequestNotification(value: unknown): value is LeaveRequestNotification {
  if (typeof value !== 'object' || value === null) return false;
  const record = value as Record<string, unknown>;
  return typeof record['id'] === 'string'
    && typeof record['leave_request_id'] === 'string'
    && typeof record['student_name'] === 'string'
    && typeof record['class_name'] === 'string'
    && typeof record['start_date'] === 'string'
    && typeof record['end_date'] === 'string'
    && typeof record['created_at'] === 'string'
    && ['pending', 'approved', 'rejected', 'cancelled'].includes(String(record['status']))
    && (typeof record['read_at'] === 'string' || record['read_at'] === null);
}

function isSchoolNoteNotification(value: unknown): value is SchoolNoteNotification {
  if (typeof value !== 'object' || value === null) return false;
  const record = value as Record<string, unknown>;
  return typeof record['id'] === 'string'
    && typeof record['note_id'] === 'string'
    && typeof record['title'] === 'string'
    && typeof record['content'] === 'string'
    && typeof record['category'] === 'string'
    && ['individual', 'class'].includes(String(record['visibility']))
    && typeof record['class_option_id'] === 'string'
    && typeof record['class_name'] === 'string'
    && (typeof record['student_id'] === 'string' || record['student_id'] === null)
    && (typeof record['student_name'] === 'string' || record['student_name'] === null)
    && typeof record['created_by_name'] === 'string'
    && typeof record['created_at'] === 'string'
    && (typeof record['read_at'] === 'string' || record['read_at'] === null);
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly http = inject(HttpClient);
  private readonly stateSubject = new BehaviorSubject<NotificationState>(INITIAL_STATE);
  private readonly arrivalSubject = new Subject<AdmissionEnquiryNotification>();
  private readonly leaveArrivalSubject = new Subject<LeaveRequestNotification>();
  private readonly schoolNoteArrivalSubject = new Subject<SchoolNoteNotification>();
  private readonly deletedLeaveRequestSubject = new Subject<string>();
  private readonly receivedLeaveRequestIds = new Set<string>();
  private readonly removedLeaveRequestIds = new Set<string>();
  private readonly receivedSchoolNoteIds = new Set<string>();
  private token: string | null = null;
  private socket: WebSocket | null = null;
  private reconnectTimer: number | null = null;
  private heartbeatTimer: number | null = null;
  private reconnectAttempt = 0;
  private generation = 0;
  private leaveTotal = 0;
  private leaveUnreadCount = 0;
  private schoolNotesTotal = 0;
  private schoolNotesUnreadCount = 0;

  readonly state$ = this.stateSubject.asObservable();
  readonly arrivals$ = this.arrivalSubject.asObservable();
  readonly leaveArrivals$ = this.leaveArrivalSubject.asObservable();
  readonly schoolNoteArrivals$ = this.schoolNoteArrivalSubject.asObservable();
  readonly deletedLeaveRequests$ = this.deletedLeaveRequestSubject.asObservable();

  async start(token: string, includeAdmissionNotifications = true, includeSchoolNotes = false): Promise<void> {
    this.stop();
    this.token = token;
    this.includeAdmissionNotifications = includeAdmissionNotifications;
    this.includeSchoolNotes = includeSchoolNotes;
    const generation = this.generation;
    const [page, leavePage, schoolNotePage] = await Promise.all([
      includeAdmissionNotifications ? this.fetchPage(0, token) : Promise.resolve(null),
      this.fetchLeavePage(0, token),
      includeSchoolNotes ? this.fetchSchoolNotePage(0, token) : Promise.resolve(null)
    ]);
    if (generation !== this.generation) return;
    if (page) this.applyPage(page, false);
    this.applyLeavePage(leavePage, false);
    if (schoolNotePage) this.applySchoolNotePage(schoolNotePage, false);
    this.connect(generation);
  }

  private includeAdmissionNotifications = true;
  private includeSchoolNotes = false;

  stop(): void {
    this.generation += 1;
    this.token = null;
    this.includeAdmissionNotifications = true;
    this.includeSchoolNotes = false;
    this.reconnectAttempt = 0;
    this.leaveTotal = 0;
    this.leaveUnreadCount = 0;
    this.schoolNotesTotal = 0;
    this.schoolNotesUnreadCount = 0;
    this.receivedLeaveRequestIds.clear();
    this.receivedSchoolNoteIds.clear();
    if (typeof window !== 'undefined') {
      if (this.reconnectTimer !== null) window.clearTimeout(this.reconnectTimer);
      if (this.heartbeatTimer !== null) window.clearInterval(this.heartbeatTimer);
    }
    this.reconnectTimer = null;
    this.heartbeatTimer = null;
    if (this.socket) {
      this.socket.onclose = null;
      this.socket.onerror = null;
      this.socket.onmessage = null;
      this.socket.onopen = null;
      this.socket.close();
      this.socket = null;
    }
    this.stateSubject.next({ ...INITIAL_STATE });
  }

  async markRead(notificationId: string): Promise<void> {
    if (notificationId === 'all') {
      await this.markAllRead();
      return;
    }
    const headers = this.authHeaders();
    await firstValueFrom(this.http.post<{ marked_read: number }>(
      `${API_URL}/notifications/${notificationId}/read`,
      null,
      { headers }
    ));
    const state = this.stateSubject.value;
    const item = state.items.find(notification => notification.id === notificationId);
    if (item && !item.read_at) {
      this.updateState({
        items: state.items.map(notification => notification.id === notificationId
          ? { ...notification, read_at: new Date().toISOString() }
          : notification),
        admissionUnreadCount: Math.max(0, state.admissionUnreadCount - 1),
        unreadCount: Math.max(0, state.unreadCount - 1)
      });
    }
  }

  async markLeaveRead(notificationId: string): Promise<void> {
    const headers = this.authHeaders();
    await firstValueFrom(this.http.post<{ marked_read: number }>(
      `${API_URL}/notifications/leave-requests/${notificationId}/read`,
      null,
      { headers }
    ));
    const state = this.stateSubject.value;
    const item = state.leaveItems.find(notification => notification.id === notificationId);
    if (item && !item.read_at) {
      this.leaveUnreadCount = Math.max(0, this.leaveUnreadCount - 1);
      this.updateState({
        leaveItems: state.leaveItems.map(notification => notification.id === notificationId
          ? { ...notification, read_at: new Date().toISOString() }
          : notification),
        leaveUnreadCount: this.leaveUnreadCount,
        unreadCount: Math.max(0, state.unreadCount - 1)
      });
    }
  }

  async markSchoolNoteRead(notificationId: string): Promise<void> {
    const headers = this.authHeaders();
    await firstValueFrom(this.http.post<{ marked_read: number }>(
      `${API_URL}/notifications/school-notes/${notificationId}/read`,
      null,
      { headers }
    ));
    const state = this.stateSubject.value;
    const item = state.schoolNoteItems.find(notification => notification.note_id === notificationId);
    if (item && !item.read_at) {
      this.schoolNotesUnreadCount = Math.max(0, this.schoolNotesUnreadCount - 1);
      this.updateState({
        schoolNoteItems: state.schoolNoteItems.map(notification => notification.note_id === notificationId
          ? { ...notification, read_at: new Date().toISOString() }
          : notification),
        schoolNotesUnreadCount: this.schoolNotesUnreadCount,
        unreadCount: Math.max(0, state.unreadCount - 1)
      });
    }
  }

  async markAllRead(): Promise<void> {
    const headers = this.authHeaders();
    await Promise.all([
      this.includeAdmissionNotifications
        ? firstValueFrom(this.http.post<{ marked_read: number }>(`${API_URL}/notifications/read-all`, null, { headers }))
        : Promise.resolve({ marked_read: 0 }),
      firstValueFrom(this.http.post<{ marked_read: number }>(
        `${API_URL}/notifications/leave-requests/read-all`,
        null,
        { headers }
      )),
      this.includeSchoolNotes
        ? firstValueFrom(this.http.post<{ marked_read: number }>(
          `${API_URL}/notifications/school-notes/read-all`,
          null,
          { headers }
        ))
        : Promise.resolve({ marked_read: 0 })
    ]);
    this.leaveUnreadCount = 0;
    this.schoolNotesUnreadCount = 0;
    this.updateState({
      items: this.stateSubject.value.items.map(notification => ({
        ...notification,
        read_at: notification.read_at ?? new Date().toISOString()
      })),
      leaveItems: this.stateSubject.value.leaveItems.map(notification => ({
        ...notification,
        read_at: notification.read_at ?? new Date().toISOString()
      })),
      schoolNoteItems: this.stateSubject.value.schoolNoteItems.map(notification => ({
        ...notification,
        read_at: notification.read_at ?? new Date().toISOString()
      })),
      admissionUnreadCount: 0,
      leaveUnreadCount: 0,
      schoolNotesUnreadCount: 0,
      unreadCount: 0
    });
  }

  async loadMore(): Promise<void> {
    const state = this.stateSubject.value;
    if (!state.hasMore || !this.token) return;
    const generation = this.generation;
    const [page, leavePage, schoolNotePage] = await Promise.all([
      this.includeAdmissionNotifications && state.items.length < this.stateSubject.value.admissionTotal
        ? this.fetchPage(state.items.length, this.token)
        : Promise.resolve(null),
      state.leaveItems.length < this.leaveTotal
        ? this.fetchLeavePage(state.leaveItems.length, this.token)
        : Promise.resolve(null),
      this.includeSchoolNotes && state.schoolNoteItems.length < this.schoolNotesTotal
        ? this.fetchSchoolNotePage(state.schoolNoteItems.length, this.token)
        : Promise.resolve(null)
    ]);
    if (generation !== this.generation) return;
    if (page) this.applyPage(page, true);
    if (leavePage) this.applyLeavePage(leavePage, true);
    if (schoolNotePage) this.applySchoolNotePage(schoolNotePage, true);
  }

  async refreshLeaveNotifications(): Promise<void> {
    if (!this.token) return;
    const generation = this.generation;
    const page = await this.fetchLeavePage(0, this.token);
    if (generation === this.generation) this.applyLeavePage(page, false);
  }

  private async refreshSchoolNoteNotifications(generation: number): Promise<void> {
    if (!this.token || !this.includeSchoolNotes) return;
    try {
      const page = await this.fetchSchoolNotePage(0, this.token);
      if (generation === this.generation) this.applySchoolNotePage(page, false);
    } catch (error) {
      if (generation === this.generation) this.updateState({ error: this.errorMessage(error) });
    }
  }

  private connect(generation: number): void {
    if (typeof window === 'undefined' || !this.token || generation !== this.generation) return;
    const wsUrl = `${API_URL.replace(/^http/, 'ws')}/notifications/ws`;
    const socket = new WebSocket(wsUrl, ['tt-notifications.v1', `tt-auth.${this.token}`]);
    this.socket = socket;

    socket.onopen = () => {
      if (!this.isCurrent(socket, generation)) return;
      this.reconnectAttempt = 0;
      this.updateState({ connected: true, error: '' });
      this.heartbeatTimer = window.setInterval(() => {
        if (socket.readyState === WebSocket.OPEN) socket.send('ping');
      }, 25_000);
      if (this.includeAdmissionNotifications) void this.refresh(generation);
      void this.refreshLeave(generation);
      if (this.includeSchoolNotes) void this.refreshSchoolNoteNotifications(generation);
    };
    socket.onmessage = event => {
      if (!this.isCurrent(socket, generation)) return;
      if (event.data === 'pong') return;
      this.receiveEvent(event.data);
    };
    socket.onerror = () => {
      if (this.isCurrent(socket, generation)) this.updateState({ connected: false });
    };
    socket.onclose = event => {
      if (!this.isCurrent(socket, generation)) return;
      this.socket = null;
      if (this.heartbeatTimer !== null) window.clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
      this.updateState({ connected: false });
      if (event.code === 4401 || event.code === 4403 || event.code === 1008) {
        this.updateState({ error: 'Notification access was rejected. Sign in again to reconnect.' });
        return;
      }
      const delay = Math.min(30_000, 1_000 * (2 ** Math.min(this.reconnectAttempt, 5)));
      this.reconnectAttempt += 1;
      this.reconnectTimer = window.setTimeout(() => this.connect(generation), delay);
    };
  }

  private receiveEvent(data: unknown): void {
    let event: unknown;
    try {
      event = JSON.parse(String(data));
    } catch (error) {
      console.error('Received malformed notification event.', error);
      this.updateState({ error: 'A malformed notification was received.' });
      return;
    }
    if (typeof event !== 'object' || event === null) {
      this.updateState({ error: 'A malformed notification was received.' });
      return;
    }
    const payload = event as Record<string, unknown>;
    if (
      payload['type'] === 'leave_request_deleted'
      && typeof payload['leave_request_id'] === 'string'
      && typeof payload['notification_count'] === 'number'
      && typeof payload['unread_count'] === 'number'
    ) {
      if (this.removedLeaveRequestIds.has(payload['leave_request_id'])) return;
      this.removedLeaveRequestIds.add(payload['leave_request_id']);
      const state = this.stateSubject.value;
      const notificationCount = Math.max(0, payload['notification_count']);
      const leaveItems = state.leaveItems.filter(item => item.leave_request_id !== payload['leave_request_id']);
      this.leaveTotal = Math.max(0, this.leaveTotal - notificationCount);
      this.leaveUnreadCount = Math.max(0, this.leaveUnreadCount - payload['unread_count']);
      this.updateState({
        leaveItems,
        leaveTotal: this.leaveTotal,
        total: state.admissionTotal + this.leaveTotal + state.schoolNotesTotal,
        unreadCount: state.admissionUnreadCount + this.leaveUnreadCount + state.schoolNotesUnreadCount,
        leaveUnreadCount: this.leaveUnreadCount,
        hasMore: state.items.length < state.admissionTotal
          || leaveItems.length < this.leaveTotal
          || state.schoolNoteItems.length < state.schoolNotesTotal
      });
      this.deletedLeaveRequestSubject.next(payload['leave_request_id']);
      return;
    }
    if (payload['type'] === 'leave_request' && isLeaveRequestNotification(payload['notification'])) {
      const notification = payload['notification'];
      if (this.receivedLeaveRequestIds.has(notification.id)) return;
      this.receivedLeaveRequestIds.add(notification.id);
      const state = this.stateSubject.value;
      if (state.leaveItems.some(item => item.id === notification.id)) return;
      this.leaveTotal += 1;
      if (!notification.read_at) this.leaveUnreadCount += 1;
      this.updateState({
        leaveItems: [notification, ...state.leaveItems],
        leaveTotal: this.leaveTotal,
        total: state.total + 1,
        unreadCount: state.unreadCount + (notification.read_at ? 0 : 1),
        leaveUnreadCount: this.leaveUnreadCount,
        hasMore: state.items.length + state.leaveItems.length + 1 < state.total + 1
      });
      this.leaveArrivalSubject.next(notification);
      return;
    }
    if (payload['type'] === 'school_note' && isSchoolNoteNotification(payload['notification'])) {
      const notification = payload['notification'];
      if (this.receivedSchoolNoteIds.has(notification.note_id)) return;
      this.receivedSchoolNoteIds.add(notification.note_id);
      const state = this.stateSubject.value;
      if (state.schoolNoteItems.some(item => item.note_id === notification.note_id)) return;
      this.schoolNotesTotal += 1;
      if (!notification.read_at) this.schoolNotesUnreadCount += 1;
      this.updateState({
        schoolNoteItems: [notification, ...state.schoolNoteItems],
        schoolNotesTotal: this.schoolNotesTotal,
        schoolNotesUnreadCount: this.schoolNotesUnreadCount,
        total: state.total + 1,
        unreadCount: state.unreadCount + (notification.read_at ? 0 : 1),
        hasMore: state.items.length + state.leaveItems.length + state.schoolNoteItems.length + 1 < state.total + 1
      });
      this.schoolNoteArrivalSubject.next(notification);
      return;
    }
    if (payload['type'] !== 'admission_enquiry' || !isNotification(payload['notification'])) {
      this.updateState({ error: 'A malformed notification was received.' });
      return;
    }
    const notification = payload['notification'];
    const state = this.stateSubject.value;
    if (state.items.some(item => item.id === notification.id)) return;
    this.updateState({
      items: [notification, ...state.items],
      total: state.total + 1,
      admissionUnreadCount: state.admissionUnreadCount + 1,
      unreadCount: state.unreadCount + 1,
      admissionTotal: state.admissionTotal + 1,
      hasMore: state.items.length + 1 < state.total + 1
    });
    this.arrivalSubject.next(notification);
  }

  private async refresh(generation: number): Promise<void> {
    if (!this.token) return;
    try {
      const page = await this.fetchPage(0, this.token);
      if (generation === this.generation) this.applyPage(page, false);
    } catch (error) {
      if (generation === this.generation) this.updateState({ error: this.errorMessage(error) });
    }
  }

  private async refreshLeave(generation: number): Promise<void> {
    if (!this.token) return;
    try {
      const page = await this.fetchLeavePage(0, this.token);
      if (generation === this.generation) this.applyLeavePage(page, false);
    } catch (error) {
      if (generation === this.generation) this.updateState({ error: this.errorMessage(error) });
    }
  }

  private async fetchPage(offset: number, token: string): Promise<NotificationPage> {
    const params = new HttpParams().set('limit', PAGE_SIZE).set('offset', offset);
    return firstValueFrom(this.http.get<NotificationPage>(`${API_URL}/notifications`, {
      headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      params
    }));
  }

  private async fetchLeavePage(offset: number, token: string): Promise<LeaveRequestNotificationPage> {
    const params = new HttpParams().set('limit', PAGE_SIZE).set('offset', offset);
    return firstValueFrom(this.http.get<LeaveRequestNotificationPage>(`${API_URL}/notifications/leave-requests`, {
      headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      params
    }));
  }

  private async fetchSchoolNotePage(offset: number, token: string): Promise<SchoolNoteNotificationPage> {
    const params = new HttpParams().set('limit', PAGE_SIZE).set('offset', offset);
    return firstValueFrom(this.http.get<SchoolNoteNotificationPage>(`${API_URL}/notifications/school-notes`, {
      headers: new HttpHeaders({ Authorization: ['Bearer', token].join(' ') }),
      params
    }));
  }

  private applyPage(page: NotificationPage, append: boolean): void {
    const previous = this.stateSubject.value;
    const items = append
      ? [...previous.items, ...page.items.filter(item => !previous.items.some(existing => existing.id === item.id))]
      : [...page.items, ...previous.items.filter(item => !page.items.some(incoming => incoming.id === item.id))];
    items.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
    this.updateState({
      items,
      admissionTotal: page.total,
      admissionUnreadCount: page.unread_count,
      total: page.total + this.leaveTotal + this.schoolNotesTotal,
      unreadCount: page.unread_count + this.leaveUnreadCount + this.schoolNotesUnreadCount,
      hasMore: items.length < page.total
        || this.stateSubject.value.leaveItems.length < this.leaveTotal
        || this.stateSubject.value.schoolNoteItems.length < this.schoolNotesTotal
    });
  }

  private applyLeavePage(page: LeaveRequestNotificationPage, append: boolean): void {
    const previous = this.stateSubject.value;
    const leaveItems = append
      ? [...previous.leaveItems, ...page.items.filter(item => !previous.leaveItems.some(existing => existing.id === item.id))]
      : [...page.items, ...previous.leaveItems.filter(item => !page.items.some(incoming => incoming.id === item.id))];
    leaveItems.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
    this.leaveTotal = Math.max(page.total, leaveItems.length);
    this.leaveUnreadCount = page.unread_count;
    this.updateState({
      leaveItems,
      leaveTotal: this.leaveTotal,
      leaveUnreadCount: this.leaveUnreadCount,
      total: previous.admissionTotal + this.leaveTotal + this.schoolNotesTotal,
      unreadCount: previous.admissionUnreadCount + this.leaveUnreadCount + this.schoolNotesUnreadCount,
      hasMore: previous.items.length < previous.admissionTotal
        || leaveItems.length < this.leaveTotal
        || previous.schoolNoteItems.length < this.schoolNotesTotal
    });
  }

  private applySchoolNotePage(page: SchoolNoteNotificationPage, append: boolean): void {
    const previous = this.stateSubject.value;
    const schoolNoteItems = append
      ? [...previous.schoolNoteItems, ...page.items.filter(item => !previous.schoolNoteItems.some(existing => existing.note_id === item.note_id))]
      : [...page.items, ...previous.schoolNoteItems.filter(item => !page.items.some(incoming => incoming.note_id === item.note_id))];
    schoolNoteItems.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
    this.schoolNotesTotal = Math.max(page.total, schoolNoteItems.length);
    this.schoolNotesUnreadCount = page.unread_count;
    this.updateState({
      schoolNoteItems,
      schoolNotesTotal: this.schoolNotesTotal,
      schoolNotesUnreadCount: this.schoolNotesUnreadCount,
      total: previous.admissionTotal + this.leaveTotal + this.schoolNotesTotal,
      unreadCount: previous.admissionUnreadCount + this.leaveUnreadCount + this.schoolNotesUnreadCount,
      hasMore: previous.items.length < previous.admissionTotal
        || previous.leaveItems.length < this.leaveTotal
        || schoolNoteItems.length < this.schoolNotesTotal
    });
  }

  private authHeaders(): HttpHeaders {
    if (!this.token) throw new Error('You must be signed in to manage notifications.');
    return new HttpHeaders({ Authorization: `Bearer ${this.token}` });
  }

  private isCurrent(socket: WebSocket, generation: number): boolean {
    return this.socket === socket && generation === this.generation;
  }

  private updateState(update: Partial<NotificationState>): void {
    this.stateSubject.next({ ...this.stateSubject.value, ...update });
  }

  private errorMessage(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      return typeof error.error?.detail === 'string' ? error.error.detail : 'Unable to load notifications.';
    }
    return error instanceof Error ? error.message : 'Unable to load notifications.';
  }
}
