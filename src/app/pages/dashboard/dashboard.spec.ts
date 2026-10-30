import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { Dashboard } from './dashboard';

describe('Dashboard', () => {
  let fixture: ComponentFixture<Dashboard>;
  let component: Dashboard;
  let http: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    http = TestBed.inject(HttpTestingController);
    component.token.set('demo-token');
    component.user.set({
      id: 'u1',
      staff_id: 'ST-1',
      name: 'Admin User',
      middle_name: null,
      email: 'admin@tinytara.com',
      role: 'super_admin',
    });
    fixture.detectChanges();
  });

  it('should not display staff or student contact directory entries', () => {
    const text = fixture.nativeElement.textContent as string;
    expect(text).not.toContain('Staff contacts');
    expect(text).not.toContain('Student contacts');
  });

  it('does not show the login site link in the authenticated dashboard', () => {
    expect(fixture.nativeElement.querySelector('.visit-site-link')).toBeNull();
  });

  it('shows the child and school information login description', () => {
    component.token.set(null);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.login-intro')?.textContent).toContain(
      "Log in to access your child's school notes, academic results, attendance records, fee details, and important school updates — all in one place."
    );
  });

  it('toggles login password visibility with an accessible button', () => {
    component.token.set(null);
    fixture.detectChanges();

    const password = fixture.nativeElement.querySelector('input[name="password"]') as HTMLInputElement;
    const toggle = fixture.nativeElement.querySelector('.password-visibility-toggle') as HTMLButtonElement;
    expect(password.type).toBe('password');
    expect(toggle.getAttribute('aria-label')).toBe('Show password');

    toggle.click();
    fixture.detectChanges();
    expect(password.type).toBe('text');
    expect(toggle.getAttribute('aria-label')).toBe('Hide password');

    toggle.click();
    fixture.detectChanges();
    expect(password.type).toBe('password');
  });

  it('keeps content tabs visible on web', () => {
    const labels = Array.from(fixture.nativeElement.querySelectorAll('nav button') as NodeListOf<HTMLButtonElement>)
      .map(button => button.textContent ?? '');

    expect(labels.some(label => label.includes('Page content'))).toBe(true);
    expect(labels.some(label => label.includes('Contact details'))).toBe(true);
    expect(labels.some(label => label.includes('Gallery upload'))).toBe(true);
  });

  it('hides page content, contact details, and gallery tabs in the native app', () => {
    Object.defineProperty(component, 'isNativeApp', { value: true });
    component.user.set({ ...component.user()! });
    fixture.detectChanges();

    const labels = Array.from(fixture.nativeElement.querySelectorAll('nav button') as NodeListOf<HTMLButtonElement>)
      .map(button => button.textContent ?? '');
    expect(labels.some(label => label.includes('Page content'))).toBe(false);
    expect(labels.some(label => label.includes('Contact details'))).toBe(false);
    expect(labels.some(label => label.includes('Gallery upload'))).toBe(false);
  });

  it('shows the Visit Website link in the native app login screen', () => {
    component.token.set(null);
    Object.defineProperty(component, 'isNativeApp', { value: true });
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('.visit-site-link') as HTMLAnchorElement | null;
    expect(link?.textContent).toContain('Visit Website');
  });

  it('shows the Visit Website link in the web login screen', () => {
    component.token.set(null);
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('.visit-site-link') as HTMLAnchorElement | null;
    expect(link?.textContent).toContain('Visit Website');
    expect(link?.getAttribute('href')).toBe('/');
  });

  it('shows the leave application form on its own student-only tab', () => {
    component.user.set({ ...component.user()!, role: 'student' });
    component.activeView.set('apply-leave');
    fixture.detectChanges();

    const tabs = Array.from(fixture.nativeElement.querySelectorAll('nav button') as NodeListOf<HTMLButtonElement>);
    expect(tabs.some(button => button.textContent?.includes('Apply for leave'))).toBe(true);
    expect(fixture.nativeElement.querySelector('form textarea[name="leaveReason"]')).toBeNull();
    const newApplicationButton = Array.from(fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>)
      .find(button => button.textContent?.includes('New application'));
    newApplicationButton?.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[role="dialog"] textarea[name="leaveReason"]')).not.toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Your records');
    expect(component.canView('apply-leave')).toBe(true);

    component.activeView.set('school-notes');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).not.toContain('Your records');

    component.user.set({ ...component.user()!, role: 'parent' });
    expect(component.canView('apply-leave')).toBe(false);
  });

  it('tracks attendance edits against each row saved baseline', () => {
    const row = {
      student_id: 's1',
      class_option_id: 'c1',
      student_name: 'Student One',
      student_code: 'ST-1',
      class_name: 'Nursery',
      section_name: null,
      attendance_date: '2026-10-13',
      status: 'present' as 'present' | 'absent' | 'late' | 'half_day' | 'leave' | 'holiday' | null,
      note: null,
      savedStatus: 'present' as 'present' | 'absent' | 'late' | 'half_day' | 'leave' | 'holiday' | null,
      savedNote: null,
      saved: true,
    };
    component.attendanceNote[row.student_id] = '';

    expect(component.isAttendanceModified(row)).toBe(false);
    row.status = 'absent';
    expect(component.isAttendanceModified(row)).toBe(true);
    row.savedStatus = 'absent';
    expect(component.isAttendanceModified(row)).toBe(false);
  });

  it('does not send a save-all request when attendance has no changes', async () => {
    await component.saveAllDailyAttendance();
    expect(component.notice()).toBe('No attendance changes to save.');
  });

  it('paginates notes and enquiries in pages of ten records', () => {
    component.notes.set(Array.from({ length: 11 }, (_, index) => ({ id: `note-${index}` }) as never));
    expect(component.paginatedNotes()).toHaveLength(10);
    component.changeNotesPage(2);
    expect(component.paginatedNotes().map(note => note.id)).toEqual(['note-10']);

    component.recipientNotes.set(Array.from({ length: 11 }, (_, index) => ({ id: `recipient-${index}` }) as never));
    expect(component.paginatedRecipientNotes()).toHaveLength(10);
    component.changeRecipientNotesPage(2);
    expect(component.paginatedRecipientNotes().map(note => note.id)).toEqual(['recipient-10']);

    const createdAt = new Date().toISOString();
    component.enquiryPeriod.set('year');
    component.enquiries.set(Array.from({ length: 11 }, (_, index) => ({
      id: `enquiry-${index}`,
      created_at: createdAt,
    }) as never));
    expect(component.paginatedEnquiries()).toHaveLength(10);
    component.changeEnquiriesPage(2);
    expect(component.paginatedEnquiries().map(enquiry => enquiry.id)).toEqual(['enquiry-10']);

    component.leaveRequests.set(Array.from({ length: 11 }, (_, index) => ({ id: `leave-${index}` }) as never));
    expect(component.paginatedLeaveRequests()).toHaveLength(10);
    component.changeLeaveRequestsPage(2);
    expect(component.paginatedLeaveRequests().map(request => request.id)).toEqual(['leave-10']);
  });

  it('sorts leave requests newest first and filters and resizes pages', () => {
    const request = {
      student_id: 's1',
      student_name: 'Student One',
      student_code: 'ST-1',
      class_option_id: 'c1',
      class_name: 'Nursery',
      start_date: '2026-10-30',
      end_date: '2026-10-30',
      reason: 'Appointment',
      remarks: null,
      reviewed_by_name: null,
      reviewed_at: null,
      is_active: true,
    };
    component.leaveRequests.set([
      { ...request, id: 'old-approved', status: 'approved', created_at: '2026-10-01T10:00:00Z', updated_at: '2026-10-03T10:00:00Z' },
      { ...request, id: 'new-approved', status: 'approved', created_at: '2026-10-02T10:00:00Z', updated_at: '2026-10-04T10:00:00Z' },
      { ...request, id: 'newer-declined', status: 'rejected', created_at: '2026-10-03T10:00:00Z', updated_at: '2026-10-05T10:00:00Z' },
      { ...request, id: 'cancelled', status: 'cancelled', created_at: '2026-10-06T10:00:00Z', updated_at: '2026-10-06T10:00:00Z' },
    ] as never);

    expect(component.filteredLeaveRequests().map(item => item.id)).toEqual(['cancelled', 'newer-declined', 'new-approved', 'old-approved']);
    component.changeLeaveRequestStatus('approved');
    expect(component.filteredLeaveRequests().map(item => item.id)).toEqual(['new-approved', 'old-approved']);
    component.changeLeaveRequestPageSize(25);
    expect(component.leaveRequestsPageSize()).toBe(25);
    component.changeLeaveRequestPageSize(20);
    expect(component.leaveRequestsPageSize()).toBe(25);
    component.changeLeaveRequestStatus('all');
    expect(component.leaveRequestStatusFilter()).toBe('all');
  });

  it('shows note publishing errors in a dismissible popup', async () => {
    component.noteForm = {
      title: 'Class reminder',
      content: 'Bring a water bottle.',
      category: 'general',
      visibility: 'class',
      class_option_id: 'class-1',
      student_id: '',
      due_date: ''
    };

    const saving = component.saveNote();
    http.expectOne(request => request.method === 'POST' && request.url.endsWith('/notes'))
      .flush({ detail: 'Unable to write the school-note receipt.' }, { status: 500, statusText: 'Internal Server Error' });
    await saving;
    fixture.detectChanges();

    expect(component.noteSaveError()).toBe('Unable to write the school-note receipt. (HTTP 500)');
    expect(fixture.nativeElement.textContent).toContain('Unable to write the school-note receipt.');

    (fixture.nativeElement.querySelector('[aria-label="Dismiss error"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(component.noteSaveError()).toBe('');
    expect(fixture.nativeElement.querySelector('[role="alert"]')).toBeNull();
  });

  it('omits fee and paid columns for a parent without student-specific disclosure', () => {
    component.user.set({ ...component.user()!, role: 'parent' });
    component.activeView.set('my-dashboard');
    component.noteChildren.set([{ id: 'child-1' } as never]);
    component.selectedNoteChildId.set('child-1');
    component.parentFeeSummary.set({
      student_id: 'child-1',
      student_name: 'Student One',
      selected_academic_year: 'all',
      academic_year_options: ['2026-2027'],
      total_outstanding_due: '800.00',
      can_view_amounts: false,
      academic_years: [{
        academic_year: '2026-2027',
        overall_status: 'partial',
        total_outstanding_due: '800.00',
        months: [{ month: 'May', month_number: 5, year: 2026, status: 'partial', outstanding_due: '800.00', due_date: '2026-05-10' }],
      }],
    });
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent as string;
    expect(text).toContain('800.00');
    expect(text).not.toContain('Total fees assessed');
    expect(text).not.toContain('Amount paid');
    expect(text).not.toContain('Fee amount');
  });

  it('renders fee and paid columns only when the API response grants visibility', () => {
    component.user.set({ ...component.user()!, role: 'parent' });
    component.activeView.set('my-dashboard');
    component.noteChildren.set([{ id: 'child-1' } as never]);
    component.selectedNoteChildId.set('child-1');
    component.parentFeeSummary.set({
      student_id: 'child-1',
      student_name: 'Student One',
      selected_academic_year: 'all',
      academic_year_options: ['2026-2027'],
      total_outstanding_due: '800.00',
      can_view_amounts: true,
      total_fees_assessed: '2000.00',
      total_amount_paid: '1200.00',
      academic_years: [{
        academic_year: '2026-2027',
        overall_status: 'partial',
        total_outstanding_due: '800.00',
        total_fees_assessed: '2000.00',
        total_amount_paid: '1200.00',
        months: [{ month: 'May', month_number: 5, year: 2026, status: 'partial', outstanding_due: '800.00', due_date: '2026-05-10', fee_amount: '2000.00', discount_amount: '0.00', adjustment_amount: '0.00', net_payable: '2000.00', amount_paid: '1200.00' }],
      }],
    });
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent as string;
    expect(text).toContain('Total fees assessed');
    expect(text).toContain('Amount paid');
    expect(text).toContain('Fee amount');
  });

  it('asks parents to choose a child on My Dashboard when multiple children are linked', () => {
    component.user.set({ ...component.user()!, role: 'parent' });
    component.activeView.set('my-dashboard');
    component.noteChildren.set([
      { id: 'child-1', first_name: 'Ava', last_name: 'One', class_option: { name: 'Nursery' } } as never,
      { id: 'child-2', first_name: 'Ben', last_name: 'Two', class_option: { name: 'Preschool' } } as never,
    ]);
    component.selectedNoteChildId.set('');
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent as string;
    const childSelector = fixture.nativeElement.querySelector('select[name="dashboardSelectedChild"]') as HTMLSelectElement;
    expect(text).toContain('Which child’s information would you like to see?');
    expect(text).toContain('Choose a child above to view their fee details.');
    expect(childSelector.options.length).toBe(3);
    expect(childSelector.options[1].textContent).toContain('Ava One');
    expect(childSelector.options[2].textContent).toContain('Ben Two');
  });

  it('shows unread school-note counts on the parent tab', () => {
    component.user.set({ ...component.user()!, role: 'parent' });
    component.unreadCounts.set({ school_notes: 3, leave_requests: 0 });
    fixture.detectChanges();

    const notesTab = Array.from(fixture.nativeElement.querySelectorAll('nav button') as NodeListOf<HTMLButtonElement>)
      .find(button => button.textContent?.includes('School notes'));
    expect(notesTab?.querySelector('.notify-badge')?.textContent).toContain('3');
  });

  it('shows unread leave-request counts on the reviewer tab', () => {
    component.unreadCounts.set({ school_notes: 0, leave_requests: 4 });
    fixture.detectChanges();

    const leaveTab = Array.from(fixture.nativeElement.querySelectorAll('nav button') as NodeListOf<HTMLButtonElement>)
      .find(button => button.textContent?.includes('Leave requests'));
    expect(leaveTab?.querySelector('.notify-badge')?.textContent).toContain('4');
  });

  it('opens student leave notifications in Apply for leave and selects the matching request', async () => {
    component.user.set({ ...component.user()!, role: 'student' });
    const navigateSpy = vi.spyOn(component, 'navigateTo').mockResolvedValue();
    const notification = { leave_request_id: 'leave-target' } as never;

    await component.openLeaveRequestNotification(notification);

    expect(navigateSpy).toHaveBeenCalledWith('apply-leave');
    expect(component.selectedLeaveRequestId()).toBe('leave-target');
  });

  it('presents leave requests with clear student, date, reason, and review details', () => {
    component.activeView.set('leave-requests');
    const pendingRequest = {
      id: 'leave-1',
      student_id: 'student-1',
      student_name: 'Student One',
      student_code: 'ST-101',
      class_option_id: 'class-1',
      class_name: 'Nursery',
      start_date: '2026-10-26',
      end_date: '2026-10-27',
      reason: 'Family appointment',
      status: 'pending',
      remarks: null,
      reviewed_by_name: null,
      reviewed_at: null,
      created_at: '2026-10-23T09:00:00Z',
      updated_at: '2026-10-23T09:00:00Z',
    } as const;
    component.leaveRequests.set([
      pendingRequest,
      { ...pendingRequest, id: 'leave-approved', status: 'approved', reviewed_by_name: 'Teacher', reviewed_at: '2026-10-24T09:00:00Z' },
      { ...pendingRequest, id: 'leave-rejected', status: 'rejected', reviewed_by_name: 'Teacher', reviewed_at: '2026-10-24T09:00:00Z' },
      { ...pendingRequest, id: 'leave-cancelled', status: 'cancelled', reviewed_by_name: 'Teacher', reviewed_at: '2026-10-24T09:00:00Z' },
    ]);
    fixture.detectChanges();

    const card = fixture.nativeElement.querySelector('.leave-request-card') as HTMLElement;
    expect(card.textContent).toContain('Student One');
    expect(card.textContent).toContain('ST-101');
    expect(card.textContent).toContain('Nursery');
    expect(card.textContent).toContain('Requested dates');
    expect(card.textContent).toContain('Family appointment');
    expect(card.querySelector('.status-pending')).not.toBeNull();
    expect(card.classList).toContain('leave-request-pending');
    expect(fixture.nativeElement.querySelector('#leave-request-leave-approved')?.classList).toContain('leave-request-approved');
    const declinedCard = fixture.nativeElement.querySelector('#leave-request-leave-rejected') as HTMLElement;
    expect(declinedCard.classList).toContain('leave-request-rejected');
    expect(declinedCard.textContent).toContain('Declined');
    expect(fixture.nativeElement.querySelector('#leave-request-leave-cancelled')?.classList).toContain('leave-request-cancelled');
    expect(fixture.nativeElement.querySelector('#leave-request-leave-cancelled')?.textContent).toContain('Cancelled');
    expect(Array.from(card.querySelectorAll('.leave-request-review button')).map((button: Element) => button.textContent?.trim()))
      .toEqual(['Delete request', 'Decline', 'Approve leave']);
    const approvedCard = fixture.nativeElement.querySelector('#leave-request-leave-approved') as HTMLElement;
    expect(approvedCard.textContent).toContain('Cancel approved leave');
    expect(approvedCard.textContent).toContain('Cancellation remarks');
    expect(approvedCard.textContent).toContain('optional');
    expect(approvedCard.querySelector('textarea[maxlength="1000"]')).not.toBeNull();
  });

  it('offers family actions only while a request is pending or approved', () => {
    const pending = { status: 'pending' } as never;
    const approved = { status: 'approved' } as never;
    const declined = { status: 'rejected' } as never;

    component.user.set({ ...component.user()!, role: 'student' });
    expect(component.canDeleteLeaveRequest(pending)).toBe(true);
    expect(component.canCancelLeaveRequest(approved)).toBe(true);
    expect(component.canDeleteLeaveRequest(declined)).toBe(false);
    expect(component.canCancelLeaveRequest(declined)).toBe(false);

    component.user.set({ ...component.user()!, role: 'parent' });
    expect(component.canDeleteLeaveRequest(pending)).toBe(true);
    expect(component.canCancelLeaveRequest(approved)).toBe(true);
  });

  it('shows unread admission-enquiry counts on the enquiries tab', () => {
    component.unreadCounts.set({ school_notes: 0, leave_requests: 0, admission_enquiries: 5 });
    fixture.detectChanges();

    const enquiryTab = Array.from(fixture.nativeElement.querySelectorAll('nav button') as NodeListOf<HTMLButtonElement>)
      .find(button => button.textContent?.includes('Admission enquiries'));
    expect(enquiryTab?.querySelector('.notify-badge')?.textContent).toContain('5');
  });

  it('filters admission-enquiry counts and cards by the selected period and year', () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const today = new Date(currentYear, now.getMonth(), now.getDate(), 12).toISOString();
    const weekDate = new Date(currentYear, now.getMonth(), now.getDate() - ((now.getDay() + 6) % 7), 12);
    if (weekDate.getDate() === now.getDate() && weekDate.getMonth() === now.getMonth()) weekDate.setDate(weekDate.getDate() + 1);
    const thisWeek = weekDate.toISOString();
    const monthDay = now.getDate() === 1 ? 2 : 1;
    const thisMonth = new Date(currentYear, now.getMonth(), monthDay, 12).toISOString();
    const otherMonth = now.getMonth() === 0 ? 1 : 0;
    const otherMonthDay = now.getMonth() === otherMonth && now.getDate() === 1 ? 2 : 1;
    const thisYearOtherMonth = new Date(currentYear, otherMonth, otherMonthDay, 12).toISOString();
    const lastYear = new Date(currentYear - 1, 0, 2, 12).toISOString();
    component.enquiries.set([
      { id: 'today-new', parent_name: 'Parent One', phone: '111', email: 'one@example.com', child_name: 'Child One', child_age: '5-6', message: null, status: 'new', is_unread: true, created_at: today, updated_at: today },
      { id: 'today-contacted', parent_name: 'Parent Two', phone: '222', email: 'two@example.com', child_name: 'Child Two', child_age: '4-5', message: 'Please call', status: 'contacted', is_unread: false, created_at: today, updated_at: today },
      { id: 'this-week', parent_name: 'Parent Five', phone: '555', email: 'five@example.com', child_name: 'Child Five', child_age: '3-4', message: null, status: 'new', is_unread: false, created_at: thisWeek, updated_at: thisWeek },
      { id: 'this-month', parent_name: 'Parent Six', phone: '666', email: 'six@example.com', child_name: 'Child Six', child_age: '4-5', message: null, status: 'closed', is_unread: false, created_at: thisMonth, updated_at: thisMonth },
      { id: 'other-month', parent_name: 'Parent Three', phone: '333', email: 'three@example.com', child_name: 'Child Three', child_age: '3-4', message: null, status: 'closed', is_unread: false, created_at: thisYearOtherMonth, updated_at: thisYearOtherMonth },
      { id: 'last-year', parent_name: 'Parent Four', phone: '444', email: 'four@example.com', child_name: 'Child Four', child_age: '2-3', message: null, status: 'new', is_unread: false, created_at: lastYear, updated_at: lastYear },
    ]);
    component.activeView.set('enquiries');
    fixture.detectChanges();

    expect(component.enquiryStatusCounts()).toEqual({ new: 1, contacted: 1, closed: 0 });
    expect(component.filteredEnquiries().map(enquiry => enquiry.id)).toEqual(['today-new', 'today-contacted']);
    expect(fixture.nativeElement.querySelector('.school-note-card')?.textContent).toContain('Parent / guardian');
    expect(fixture.nativeElement.querySelector('.stat-grid')?.textContent).toContain('Awaiting follow-up');
    expect(fixture.nativeElement.querySelector('#enquiry-today-new')?.classList).toContain('enquiry-new');
    expect(fixture.nativeElement.querySelector('#enquiry-today-contacted')?.classList).not.toContain('enquiry-new');
    expect(fixture.nativeElement.querySelector('#enquiry-today-contacted')?.classList).toContain('enquiry-contacted');

    component.enquiryPeriod.set('week');
    expect(component.filteredEnquiries().map(enquiry => enquiry.id)).toEqual(expect.arrayContaining(['today-new', 'today-contacted', 'this-week']));

    component.enquiryPeriod.set('month');
    expect(component.enquiryStatusCounts()).toEqual({ new: weekDate.getMonth() === now.getMonth() ? 2 : 1, contacted: 1, closed: 1 });
    expect(component.filteredEnquiries().some(enquiry => enquiry.id === 'other-month')).toBe(false);

    component.enquiryPeriod.set('year');
    fixture.detectChanges();
    expect(component.enquiryStatusCounts()).toEqual({ new: 2, contacted: 1, closed: 2 });
    expect(component.filteredEnquiries()).toHaveLength(5);
    expect(fixture.nativeElement.querySelector('#enquiry-this-month')?.classList).toContain('enquiry-closed');

    component.enquiryYear.set(currentYear - 1);
    fixture.detectChanges();
    expect(component.enquiryStatusCounts()).toEqual({ new: 1, contacted: 0, closed: 0 });
    expect(component.filteredEnquiries().map(enquiry => enquiry.id)).toEqual(['last-year']);
  });

  it('highlights unread tabs with a red bell badge and lists pending items', () => {
    component.unreadCounts.set({ school_notes: 0, leave_requests: 2, admission_enquiries: 5, pending_leave_requests: 3, pending_admission_enquiries: 4 });
    fixture.detectChanges();

    const badges = Array.from(fixture.nativeElement.querySelectorAll('nav .notify-badge') as NodeListOf<HTMLElement>).map(badge => badge.textContent?.trim());
    expect(badges).toEqual(expect.arrayContaining(['🔔 2', '🔔 5']));
    const banner = (fixture.nativeElement.querySelector('.attention-banner') as HTMLElement).textContent;
    expect(banner).toContain('Pending leave requests');
    expect(banner).toContain('New admission enquiries');
  });

  it('numbers the visible dashboard tabs sequentially', () => {
    const tabs = Array.from(fixture.nativeElement.querySelectorAll('nav button') as NodeListOf<HTMLButtonElement>);
    expect(tabs[0].textContent).toContain('01');
    expect(tabs[0].textContent).toContain('Overview');
    const numbers = tabs.map(tab => tab.querySelector('span')?.textContent?.trim());

    expect(numbers).toEqual(tabs.map((_, index) => String(index + 1).padStart(2, '0')));
  });
});
