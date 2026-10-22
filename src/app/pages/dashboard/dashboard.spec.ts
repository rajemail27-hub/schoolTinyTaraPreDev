import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { Dashboard } from './dashboard';

describe('Dashboard', () => {
  let fixture: ComponentFixture<Dashboard>;
  let component: Dashboard;

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

  it('shows unread admission-enquiry counts on the enquiries tab', () => {
    component.unreadCounts.set({ school_notes: 0, leave_requests: 0, admission_enquiries: 5 });
    fixture.detectChanges();

    const enquiryTab = Array.from(fixture.nativeElement.querySelectorAll('nav button') as NodeListOf<HTMLButtonElement>)
      .find(button => button.textContent?.includes('Admission enquiries'));
    expect(enquiryTab?.querySelector('.notify-badge')?.textContent).toContain('5');
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
