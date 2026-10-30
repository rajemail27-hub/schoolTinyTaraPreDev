import { CommonModule } from '@angular/common';
import { Component, DestroyRef, EventEmitter, OnDestroy, OnInit, Output, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AdmissionEnquiryNotification, LeaveRequestNotification, NotificationService, NotificationState, SchoolNoteNotification } from '../../services/notification.service';

type NotificationEntry =
  | { type: 'admission'; notification: AdmissionEnquiryNotification }
  | { type: 'leave'; notification: LeaveRequestNotification }
  | { type: 'school-note'; notification: SchoolNoteNotification };

@Component({
  selector: 'app-notification-center',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notification-center.html',
  styleUrl: './notification-center.css'
})
export class NotificationCenter implements OnInit, OnDestroy {
  private readonly notifications = inject(NotificationService);
  private readonly destroyRef = inject(DestroyRef);
  private toastTimer: number | null = null;
  private audioContext: AudioContext | null = null;

  @Output() notificationSelected = new EventEmitter<AdmissionEnquiryNotification>();
  @Output() leaveRequestSelected = new EventEmitter<LeaveRequestNotification>();
  @Output() schoolNoteSelected = new EventEmitter<SchoolNoteNotification>();
  @Output() notificationsChanged = new EventEmitter<void>();

  readonly state$ = this.notifications.state$;
  readonly toast = signal<AdmissionEnquiryNotification | null>(null);
  readonly leaveToast = signal<LeaveRequestNotification | null>(null);
  readonly schoolNoteToast = signal<SchoolNoteNotification | null>(null);
  readonly open = signal(false);
  readonly viewAll = signal(false);
  readonly error = signal('');
  soundEnabled = false;

  ngOnInit(): void {
    this.notifications.arrivals$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(notification => {
        this.toast.set(notification);
        this.leaveToast.set(null);
        this.schoolNoteToast.set(null);
        this.notificationsChanged.emit();
        if (typeof window !== 'undefined') {
          if (this.toastTimer !== null) window.clearTimeout(this.toastTimer);
          this.toastTimer = window.setTimeout(() => this.toast.set(null), 6_000);
        }
        if (this.soundEnabled) this.playSound();
      });
    this.notifications.leaveArrivals$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(notification => {
        this.leaveToast.set(notification);
        this.toast.set(null);
        this.schoolNoteToast.set(null);
        this.notificationsChanged.emit();
        if (typeof window !== 'undefined') {
          if (this.toastTimer !== null) window.clearTimeout(this.toastTimer);
          this.toastTimer = window.setTimeout(() => this.leaveToast.set(null), 6_000);
        }
        if (this.soundEnabled) this.playSound();
      });
    this.notifications.schoolNoteArrivals$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(notification => {
        this.schoolNoteToast.set(notification);
        this.toast.set(null);
        this.leaveToast.set(null);
        this.notificationsChanged.emit();
        if (typeof window !== 'undefined') {
          if (this.toastTimer !== null) window.clearTimeout(this.toastTimer);
          this.toastTimer = window.setTimeout(() => this.schoolNoteToast.set(null), 6_000);
        }
        if (this.soundEnabled) this.playSound();
      });
    this.notifications.deletedLeaveRequests$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(requestId => {
        if (this.leaveToast()?.leave_request_id === requestId) this.leaveToast.set(null);
      });
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined' && this.toastTimer !== null) window.clearTimeout(this.toastTimer);
    if (this.audioContext) void this.audioContext.close();
  }

  setSoundEnabled(enabled: boolean): void {
    this.soundEnabled = enabled;
    this.error.set('');
    if (!enabled || typeof window === 'undefined') return;
    const AudioContextConstructor = window.AudioContext;
    if (!AudioContextConstructor) {
      this.error.set('Notification sound is not supported by this browser.');
      this.soundEnabled = false;
      return;
    }
    this.audioContext ??= new AudioContextConstructor();
    void this.audioContext.resume().catch(() => {
      this.error.set('Allow audio playback in your browser to hear notification sounds.');
      this.soundEnabled = false;
    });
  }

  async selectNotification(notification: AdmissionEnquiryNotification): Promise<void> {
    this.error.set('');
    try {
      if (!notification.read_at) await this.notifications.markRead(notification.id);
      this.open.set(false);
      this.toast.set(null);
      this.notificationSelected.emit(notification);
      this.notificationsChanged.emit();
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Unable to mark the notification as read.');
    }
  }

  async markRead(notification: AdmissionEnquiryNotification, event: Event): Promise<void> {
    event.stopPropagation();
    this.error.set('');
    try {
      await this.notifications.markRead(notification.id);
      this.notificationsChanged.emit();
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Unable to mark the notification as read.');
    }
  }

  async markAllRead(): Promise<void> {
    this.error.set('');
    try {
      await this.notifications.markAllRead();
      this.notificationsChanged.emit();
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Unable to mark all notifications as read.');
    }
  }

  async selectLeaveRequest(notification: LeaveRequestNotification): Promise<void> {
    this.error.set('');
    try {
      if (!notification.read_at) await this.notifications.markLeaveRead(notification.id);
      this.open.set(false);
      this.leaveToast.set(null);
      this.leaveRequestSelected.emit(notification);
      this.notificationsChanged.emit();
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Unable to mark the leave notification as read.');
    }
  }

  async markLeaveRead(notification: LeaveRequestNotification, event: Event): Promise<void> {
    event.stopPropagation();
    this.error.set('');
    try {
      await this.notifications.markLeaveRead(notification.id);
      this.notificationsChanged.emit();
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Unable to mark the leave notification as read.');
    }
  }

  async selectSchoolNote(notification: SchoolNoteNotification): Promise<void> {
    this.error.set('');
    try {
      if (!notification.read_at) await this.notifications.markSchoolNoteRead(notification.note_id);
      this.open.set(false);
      this.schoolNoteToast.set(null);
      this.schoolNoteSelected.emit(notification);
      this.notificationsChanged.emit();
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Unable to mark the school-note notification as read.');
    }
  }

  async markSchoolNoteRead(notification: SchoolNoteNotification, event: Event): Promise<void> {
    event.stopPropagation();
    this.error.set('');
    try {
      await this.notifications.markSchoolNoteRead(notification.note_id);
      this.notificationsChanged.emit();
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Unable to mark the school-note notification as read.');
    }
  }

  async loadMore(): Promise<void> {
    this.error.set('');
    try {
      await this.notifications.loadMore();
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Unable to load more notifications.');
    }
  }

  visibleNotifications(state: NotificationState): NotificationEntry[] {
    const notifications: NotificationEntry[] = [
      ...state.items.map(notification => ({ type: 'admission' as const, notification })),
      ...state.leaveItems.map(notification => ({ type: 'leave' as const, notification })),
      ...state.schoolNoteItems.map(notification => ({ type: 'school-note' as const, notification }))
    ];
    notifications.sort((a, b) => Date.parse(b.notification.created_at) - Date.parse(a.notification.created_at));
    return this.viewAll() ? notifications : notifications.slice(0, 5);
  }

  leaveStatusLabel(status: LeaveRequestNotification['status']): string {
    if (status === 'rejected') return 'declined';
    if (status === 'cancelled') return 'cancelled';
    return status;
  }

  private playSound(): void {
    if (!this.audioContext || this.audioContext.state !== 'running') return;
    const oscillator = this.audioContext.createOscillator();
    const volume = this.audioContext.createGain();
    oscillator.frequency.value = 880;
    volume.gain.setValueAtTime(0.12, this.audioContext.currentTime);
    volume.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.18);
    oscillator.connect(volume);
    volume.connect(this.audioContext.destination);
    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.18);
  }
}
