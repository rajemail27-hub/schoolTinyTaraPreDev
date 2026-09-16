import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';

interface TokenResponse {
  access_token: string;
  token_type: string;
}

interface UserProfile {
  id: string;
  staff_id: string;
  name: string;
  middle_name: string | null;
  email: string;
  role: string;
}

interface PageContent {
  id: string;
  page_name: string;
  section_name: string;
  content_type: string;
  title: string | null;
  body: string | null;
  image_url: string | null;
  link_url: string | null;
  display_order: number;
  is_published: boolean;
  created_by_id: string;
  created_at: string;
  updated_at: string;
}

interface SiteContent {
  id?: string;
  email: string | null;
  phone: string | null;
  address: string | null;
  school_days: string | null;
  school_hours: string | null;
}

interface UserRecord {
  id: string;
  staff_id: string;
  name: string;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  email: string;
  mobile: string;
  address_line1: string;
  colony: string;
  city: string;
  state: string;
  pin_code: string;
  blood_group: string | null;
  role: string;
  is_active: boolean;
}

interface ClassOption { id: string; name: string; min_age: number; max_age: number; monthly_tuition: string; display_order: number; is_active: boolean; }
interface ClassSection { id: string; class_option_id: string; name: string; display_order: number; is_active: boolean; }
interface StudentRecord { id: string; student_id: string; user_id: string; first_name: string; middle_name: string | null; last_name: string; email: string; parent_mobile: string; mobile: string; address_line1: string; colony: string; city: string; state: string; pin_code: string; blood_group: string | null; father_name: string | null; mother_name: string | null; guardian_one_name: string | null; guardian_two_name: string | null; date_of_birth: string; age: number; age_detail: string; class_option_id: string; class_option: ClassOption; section_id: string | null; section: ClassSection | null; status: string; }
interface AttendancePunch { id: string; student_id: string; student_name: string; class_name: string; parent_mobile: string; direction: string; punched_at: string; }
interface PunchHistoryRow { id: string; student_name: string; student_id: string; email: string; class_name: string; direction: string; punched_at: string; }
interface PunchHistoryResponse { items: PunchHistoryRow[]; page: number; page_size: number; total: number; total_pages: number; }
interface DailyAttendanceRow { student_id: string; student_name: string; student_code: string; class_name: string; section_name: string | null; attendance_date: string; status: 'present' | 'absent' | 'late' | 'leave' | 'holiday' | null; note: string | null; }
interface Holiday { id: string; holiday_date: string; name: string; }
interface MyAttendanceRow { attendance_date: string; status: 'present' | 'absent' | 'late' | 'leave' | 'holiday' | null; note: string | null; is_holiday: boolean; }
interface MyPunchRow { id: string; direction: string; punched_at: string; }
interface DiaryEntry { id: string; class_option_id: string; class_name: string; section_id: string | null; section_name: string | null; student_id: string | null; student_name: string | null; entry_date: string; teacher_id: string; teacher_name: string; task_details: string | null; remarks: string | null; book_names: string | null; syllabus_topic: string | null; holiday_task: string | null; created_at: string; updated_at: string; }
interface TuitionFee { id: string | null; receipt_number: string | null; student_id: string; student_code: string; student_name: string; email: string; parent_mobile: string; class_name: string; section_name: string | null; fee_year: number; fee_month: number; amount_due: string; amount_paid: string; balance_due: string; payment_date: string | null; payment_method: string | null; payment_reference: string | null; note: string | null; recorded_at: string | null; status: 'not_recorded' | 'partially_paid' | 'paid'; }
interface TuitionReport { items: TuitionFee[]; page: number; page_size: number; total: number; total_pages: number; total_due: string; total_paid: string; total_balance: string; }
interface ClassTuition { id: string; class_option_id: string; fee_year: number; amount: string; }

interface RolePermissionEntry { resource: string; action: 'read' | 'create' | 'update' | 'delete'; }
interface RolePermissionSummary { role: string; permissions: RolePermissionEntry[]; }

type StaffRole = 'admin' | 'teacher' | 'clerk' | 'security';
type DashboardView = 'overview' | 'pages' | 'contact' | 'gallery' | 'staff' | 'students' | 'classes' | 'holidays' | 'attendance' | 'punch-attendance' | 'tuition' | 'profile' | 'permissions' | 'my-dashboard';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly apiUrl = 'http://127.0.0.1:8000/api';

  readonly token = signal<string | null>(null);
  readonly user = signal<UserProfile | null>(null);
  readonly pageContents = signal<PageContent[]>([]);
  readonly users = signal<UserRecord[]>([]);
  readonly siteContent = signal<SiteContent>({ email: '', phone: '', address: '', school_days: '', school_hours: '' });
  readonly activeView = signal<DashboardView>('overview');
  readonly classOptions = signal<ClassOption[]>([]);
  readonly students = signal<StudentRecord[]>([]);
  readonly tuitionStudents = signal<StudentRecord[]>([]);
  readonly tuitionReport = signal<TuitionReport>({ items: [], page: 1, page_size: 10, total: 0, total_pages: 1, total_due: '0', total_paid: '0', total_balance: '0' });
  readonly classTuitions = signal<ClassTuition[]>([]);
  readonly classFeeDetailsVisible = signal(false);
  readonly classTuitionFormOpen = signal(false);
  readonly classTuitionFormError = signal('');
  readonly editingClassTuitionId = signal<string | null>(null);
  readonly editingClassId = signal<string | null>(null);
  readonly attendanceStudents = signal<StudentRecord[]>([]);
    readonly punchHistory = signal<PunchHistoryRow[]>([]);
    readonly punchHistoryTotal = signal(0);
    readonly punchHistoryPage = signal(1);
    readonly punchHistoryTotalPages = signal(1);
  readonly dailyAttendance = signal<DailyAttendanceRow[]>([]);
  readonly holidays = signal<Holiday[]>([]);
  readonly editingHolidayId = signal<string | null>(null);
  readonly myStudent = signal<StudentRecord | null>(null);
  readonly myAttendance = signal<MyAttendanceRow[]>([]);
  readonly myPunches = signal<MyPunchRow[]>([]);
  readonly myDiaryEntries = signal<DiaryEntry[]>([]);
  myDiaryDate = new Date().toISOString().slice(0, 10);
  readonly sectionsClassId = signal<string>('');
  readonly classSections = signal<ClassSection[]>([]);
  readonly editingSectionId = signal<string | null>(null);
  readonly attendanceFilterSections = signal<ClassSection[]>([]);
  readonly studentFormSections = signal<ClassSection[]>([]);
  readonly rolePermissions = signal<Record<string, RolePermissionSummary>>({});
  readonly permissionsLoaded = signal(false);
  readonly selectedPermissionRole = signal<string>('teacher');
  readonly permissionResources = signal<string[]>(['users', 'students', 'classes', 'site_content', 'page_content', 'gallery', 'attendance', 'holidays', 'syllabus', 'diary', 'access_punches', 'tuition_fees']);
  readonly permissionActions = signal<Array<'read' | 'create' | 'update' | 'delete'>>(['read', 'create', 'update', 'delete']);
  readonly studentTotal = signal(0);
  readonly studentPage = signal(1);
  readonly studentTotalPages = signal(1);
  readonly selectedStudent = signal<StudentRecord | null>(null);
  readonly selectedStaff = signal<UserRecord | null>(null);
  readonly staffFormOpen = signal(false);
  readonly studentFormOpen = signal(false);
  readonly tuitionFormOpen = signal(false);
  readonly tuitionBalancePaymentTarget = signal<TuitionFee | null>(null);
  readonly tuitionFormError = signal('');
  readonly tuitionBalancePaymentError = signal('');
  readonly editingStudentId = signal<string | null>(null);
  readonly editingStaffId = signal<string | null>(null);
  readonly studentPasswordTarget = signal<StudentRecord | null>(null);
  readonly selectedPage = signal('home');
  readonly editingContentId = signal<string | null>(null);
  readonly loading = signal(false);
  readonly error = signal('');
  readonly fieldErrors = signal<Record<string, string>>({});
  readonly notice = signal('');
  readonly staffTotal = signal(0);
  readonly staffPage = signal(1);
  readonly staffTotalPages = signal(1);
  readonly roleCounts = signal<Record<string, number>>({});
  readonly passwordTarget = signal<UserRecord | null>(null);
  passwordValue = '';
  profileName = '';
  profilePassword = '';
  staffSearch = '';
  staffRole = '';
  staffStatus = '';
  studentForm = this.emptyStudentForm();
  studentSearch = '';
  studentClassFilter = '';
  studentPasswordValue = '';
  attendanceStudentId = '';
  attendanceDirection: 'in' | 'out' = 'in';
    punchDate = new Date().toISOString().slice(0, 10);
    punchSearch = '';
    punchClassId = '';
    punchPendingCheckoutOnly = false;
  attendanceDate = new Date().toISOString().slice(0, 10);
  attendanceClassFilter = '';
  attendanceSectionFilter = '';
  attendanceNote: Record<string, string> = {};
  holidayForm = { holiday_date: '', name: '' };
  sectionForm = { name: '', display_order: 0 };
  tuitionSearch = '';
  tuitionClassFilter = '';
  tuitionMonth = new Date().getMonth() + 1;
  tuitionYear = new Date().getFullYear();
  tuitionStudentSearch = '';
  tuitionStudentClassFilter = '';
  tuitionBalancePaymentForm = this.emptyTuitionBalancePaymentForm();
  classTuitionForm = { class_option_id: '', fee_year: new Date().getFullYear(), amount: '' };
  classFeeDetailsYear = new Date().getFullYear();
  classForm = { name: '', min_age: 2, max_age: 6, display_order: 0 };
  readonly tuitionPage = signal(1);
  tuitionForm = this.emptyTuitionForm();

  loginForm = { email: '', password: '' };
  contentForm = this.emptyContentForm();
  staffForm = {
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    password: '',
    role: 'teacher' as StaffRole,
    mobile: '', address_line1: '', colony: '', city: '', state: '', pin_code: '', blood_group: ''
  };
  readonly bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  galleryPageName = 'home';
  galleryFile: File | null = null;

  readonly pageOptions = [
    { value: 'home', label: 'Home' },
    { value: 'about', label: 'About Us' },
    { value: 'header', label: 'Header' },
    { value: 'footer', label: 'Footer' },
    { value: 'contact', label: 'Contact' },
    { value: 'activities', label: 'Activities' }
  ];

  ngOnInit(): void {
    if (typeof window === 'undefined') {
      return;
    }
    const savedToken = window.localStorage.getItem('tiny-tara-dashboard-token');
    if (savedToken) {
      this.token.set(savedToken);
      void this.loadWorkspace();
    }
  }

  async login(): Promise<void> {
    this.clearMessages();
    this.loading.set(true);
    try {
      const response = await firstValueFrom(this.http.post<TokenResponse>(`${this.apiUrl}/auth/login`, this.loginForm));
      this.token.set(response.access_token);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('tiny-tara-dashboard-token', response.access_token);
      }
      await this.loadWorkspace();
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to sign in. Check the API and credentials.'));
      this.token.set(null);
    } finally {
      this.loading.set(false);
    }
  }

  logout(): void {
    this.token.set(null);
    this.user.set(null);
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('tiny-tara-dashboard-token');
    }
  }

  async loadWorkspace(): Promise<void> {
    this.clearMessages();
    try {
      const headers = this.authHeaders();
      const profile = await firstValueFrom(this.http.get<UserProfile>(`${this.apiUrl}/auth/me`, { headers }));
      this.user.set(profile);
      await this.loadMyPermissions();
      if (profile.role === 'teacher') {
        this.activeView.set('overview');
      } else if (profile.role === 'student') {
        this.activeView.set('my-dashboard');
      }
      this.profileName = profile.name;
      if (this.isTeacher()) {
        await Promise.all([this.loadUsers(), this.loadStudents(), this.loadClasses(), this.loadDailyAttendance(), this.loadHolidays()]);
      } else if (profile.role === 'security') {
        await Promise.all([this.loadAttendanceStudents(), this.loadPunchHistory()]);
      } else if (profile.role === 'student') {
        await this.loadMyDashboard();
      } else {
        await Promise.all([this.loadPageContents(), this.loadSiteContent(), this.loadUsers(), this.loadClasses(), this.loadAttendanceStudents(), this.loadDailyAttendance(), this.loadStudents(), this.loadHolidays()]);
      }
    } catch (error) {
      this.error.set(this.errorMessage(error, 'The dashboard could not load its data.'));
      if (error instanceof HttpErrorResponse && error.status === 401) {
        this.logout();
      }
    }
  }

  async navigateTo(view: DashboardView): Promise<void> {
    if (!this.canView(view)) {
      return;
    }
    this.clearMessages();
    this.activeView.set(view);
    if (view === 'overview') {
      await Promise.all([this.loadUsers(), this.loadStudents()]);
    } else if (view === 'staff') {
      await this.loadUsers(1);
    } else if (view === 'students') {
      await this.loadStudents(1);
    } else if (view === 'attendance') {
      this.attendanceClassFilter = '';
      this.attendanceSectionFilter = '';
      this.attendanceFilterSections.set([]);
      await Promise.all([this.loadDailyAttendance(), this.loadHolidays()]);
    } else if (view === 'punch-attendance') {
      await Promise.all([this.loadAttendanceStudents(), this.loadPunchHistory()]);
    } else if (view === 'my-dashboard') {
      await this.loadMyDashboard();
    } else if (view === 'tuition') {
      await Promise.all([this.loadTuitionStudents(), this.loadTuitionReport(), this.loadClassTuitions()]);
    } else if (view === 'classes') {
      await this.loadClasses();
    } else if (view === 'pages') {
      await this.loadPageContents();
    } else if (view === 'holidays') {
      await this.loadHolidays();
    } else if (view === 'permissions') {
      if (this.isSuperAdmin()) {
        await this.loadRolePermissions();
      }
    }
  }

  async updateProfile(): Promise<void> {
    this.setBusy();
    try {
      const profile = await firstValueFrom(this.http.put<UserProfile>(`${this.apiUrl}/auth/me`, { name: this.profileName }, { headers: this.authHeaders() }));
      this.user.set(profile);
      this.notice.set('Profile name updated.');
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to update your profile.'));
    } finally {
      this.loading.set(false);
    }
  }

  async updateMyPassword(): Promise<void> {
    if (this.profilePassword.length < 8) {
      this.error.set('Password must be at least 8 characters.');
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.put(`${this.apiUrl}/auth/me/password`, { password: this.profilePassword }, { headers: this.authHeaders() }));
      this.profilePassword = '';
      this.notice.set('Your password was updated.');
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to update your password.'));
    } finally {
      this.loading.set(false);
    }
  }

  async selectPage(pageName: string): Promise<void> {
    this.selectedPage.set(pageName);
    await this.loadPageContents();
  }

  canManageStaff(): boolean {
    return this.can('users', 'create');
  }

  canViewStaff(): boolean { return this.can('users', 'read'); }

  canViewStudents(): boolean { return this.can('students', 'read'); }

  canManageStudents(): boolean { return this.can('students', 'create') || this.can('students', 'update') || this.can('students', 'delete'); }

  canRecordAttendance(): boolean {
    return this.can('attendance', 'create');
  }

  canManageClassAttendance(): boolean {
    return this.can('attendance', 'read');
  }

  canManagePunchAttendance(): boolean {
    return this.can('access_punches', 'read');
  }

  canManageTuition(): boolean {
    return this.can('tuition_fees', 'read');
  }

  async loadTuitionReport(): Promise<void> {
    if (!this.canManageTuition()) return;
    let params = new HttpParams().set('fee_month', this.tuitionMonth).set('fee_year', this.tuitionYear).set('page', this.tuitionPage()).set('page_size', 10);
    if (this.tuitionSearch.trim()) params = params.set('search', this.tuitionSearch.trim());
    if (this.tuitionClassFilter) params = params.set('class_option_id', this.tuitionClassFilter);
    try {
      this.tuitionReport.set(await firstValueFrom(this.http.get<TuitionReport>(`${this.apiUrl}/tuition-fees/report`, { headers: this.authHeaders(), params })));
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to load the tuition report.'));
    }
  }

  async recordTuitionFee(): Promise<void> {
    if (!this.can('tuition_fees', 'create')) return this.denyPermission();
    this.selectTuitionStudentFromSearch();
    if (!this.tuitionForm.student_id || !this.tuitionForm.amount_due) {
      this.tuitionFormError.set('Select a student with a configured class fee.');
      return;
    }
    const amountDue = Number(this.tuitionForm.amount_due);
    const amountPaid = Number(this.tuitionForm.amount_paid || 0);
    if (!Number.isFinite(amountDue) || amountDue <= 0 || !Number.isFinite(amountPaid) || amountPaid < 0 || amountPaid > amountDue) {
      this.tuitionFormError.set('Enter valid amounts. The deposit cannot exceed the monthly tuition due.');
      return;
    }
    if (amountPaid > 0 && (!this.tuitionForm.payment_date || !this.tuitionForm.payment_method)) {
      this.tuitionFormError.set('A payment date and method are required when recording a deposit.');
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.post<TuitionFee>(`${this.apiUrl}/tuition-fees`, {
        ...this.tuitionForm,
        amount_due: amountDue,
        amount_paid: amountPaid,
        payment_date: amountPaid > 0 ? this.tuitionForm.payment_date : null,
        payment_method: amountPaid > 0 ? this.tuitionForm.payment_method : null,
        payment_reference: this.tuitionForm.payment_reference || null,
        note: this.tuitionForm.note || null
      }, { headers: this.authHeaders() }));
      this.tuitionForm = this.emptyTuitionForm();
      this.tuitionFormOpen.set(false);
      await this.loadTuitionReport();
      this.notice.set('Tuition record saved. Download the receipt from the report.');
    } catch (error) {
      this.tuitionFormError.set(this.errorMessage(error, 'Unable to save the tuition record.'));
    } finally {
      this.loading.set(false);
    }
  }

  openTuitionBalancePayment(fee: TuitionFee): void {
    this.tuitionBalancePaymentForm = this.emptyTuitionBalancePaymentForm(fee.balance_due);
    this.tuitionBalancePaymentError.set('');
    this.tuitionBalancePaymentTarget.set(fee);
    this.clearMessages();
  }

  async collectTuitionBalance(): Promise<void> {
    if (!this.can('tuition_fees', 'create')) return this.denyPermission();
    const fee = this.tuitionBalancePaymentTarget();
    const amount = Number(this.tuitionBalancePaymentForm.amount);
    if (!fee || !Number.isFinite(amount) || amount <= 0 || amount > Number(fee.balance_due)) {
      this.tuitionBalancePaymentError.set('Enter a payment amount that does not exceed the remaining balance.');
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.post<TuitionFee>(`${this.apiUrl}/tuition-fees/${fee.id}/balance-payment`, {
        ...this.tuitionBalancePaymentForm,
        amount,
        payment_reference: this.tuitionBalancePaymentForm.payment_reference || null,
        note: this.tuitionBalancePaymentForm.note || null
      }, { headers: this.authHeaders() }));
      this.tuitionBalancePaymentTarget.set(null);
      await this.loadTuitionReport();
      this.notice.set('Balance payment recorded.');
    } catch (error) {
      this.tuitionBalancePaymentError.set(this.errorMessage(error, 'Unable to record the balance payment.'));
    } finally {
      this.loading.set(false);
    }
  }

  clearTuitionFilters(): void {
    this.tuitionSearch = '';
    this.tuitionClassFilter = '';
    this.tuitionMonth = new Date().getMonth() + 1;
    this.tuitionYear = new Date().getFullYear();
    this.tuitionPage.set(1);
    void this.loadTuitionReport();
  }

  openTuitionForm(): void {
    this.tuitionForm = this.emptyTuitionForm();
    this.tuitionStudentSearch = '';
    this.tuitionStudentClassFilter = '';
    this.tuitionFormError.set('');
    this.tuitionFormOpen.set(true);
    this.clearMessages();
  }

  openTuitionFormForStudent(fee: TuitionFee): void {
    this.openTuitionForm();
    this.tuitionStudentClassFilter = this.classOptions().find(option => option.name === fee.class_name)?.id ?? '';
    this.tuitionStudentSearch = `${fee.student_name} (${fee.student_code})`;
    this.tuitionForm.student_id = fee.student_id;
    this.tuitionForm.fee_month = fee.fee_month;
    this.tuitionForm.fee_year = fee.fee_year;
    this.tuitionForm.amount_due = fee.amount_due;
  }

  updateTuitionDue(): void {
    const student = this.tuitionStudents().find(item => item.id === this.tuitionForm.student_id);
    const classTuition = this.classTuitions().find(item => item.class_option_id === student?.class_option_id && item.fee_year === this.tuitionForm.fee_year);
    this.tuitionForm.amount_due = classTuition?.amount ?? '';
  }

  async saveClassTuition(): Promise<void> {
    if (!this.can('classes', this.editingClassTuitionId() ? 'update' : 'create')) return this.denyPermission();
    const amount = Number(this.classTuitionForm.amount);
    const classOption = this.classOptions().find(item => item.id === this.classTuitionForm.class_option_id);
    if (!classOption || !Number.isFinite(amount) || amount <= 0) {
      this.classTuitionFormError.set('Monthly fee must be greater than zero.');
      return;
    }
    this.setBusy();
    try {
      const request = this.editingClassTuitionId()
        ? this.http.put<ClassTuition>(`${this.apiUrl}/admin/classes/${classOption.id}/tuition`, { fee_year: this.classTuitionForm.fee_year, amount }, { headers: this.authHeaders() })
        : this.http.post<ClassTuition>(`${this.apiUrl}/admin/classes/${classOption.id}/tuition`, { fee_year: this.classTuitionForm.fee_year, amount }, { headers: this.authHeaders() });
      await firstValueFrom(request);
      await this.loadClassTuitions();
      await this.loadTuitionReport();
      this.editingClassTuitionId.set(null);
      this.classTuitionForm.amount = '';
      this.classTuitionFormOpen.set(false);
      this.notice.set(`${classOption.name} tuition updated for ${this.classTuitionForm.fee_year}.`);
    } catch (error) {
      this.classTuitionFormError.set(this.errorMessage(error, 'Unable to update the class tuition.'));
    } finally {
      this.loading.set(false);
    }
  }

  async createClass(): Promise<void> {
    if (!this.can('classes', this.editingClassId() ? 'update' : 'create')) return this.denyPermission();
    if (this.classForm.min_age > this.classForm.max_age) {
      this.error.set('Minimum age cannot exceed maximum age.');
      return;
    }
    this.setBusy();
    try {
      const classId = this.editingClassId();
      const request = classId
        ? this.http.put<ClassOption>(`${this.apiUrl}/admin/classes/${classId}`, this.classForm, { headers: this.authHeaders() })
        : this.http.post<ClassOption>(`${this.apiUrl}/admin/classes`, this.classForm, { headers: this.authHeaders() });
      await firstValueFrom(request);
      this.classForm = { name: '', min_age: 2, max_age: 6, display_order: 0 };
      this.editingClassId.set(null);
      await this.loadClasses();
      this.notice.set(classId ? 'Class updated.' : 'Class added.');
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to add the class.'));
    } finally {
      this.loading.set(false);
    }
  }

  editClass(classOption: ClassOption): void {
    this.classForm = { name: classOption.name, min_age: classOption.min_age, max_age: classOption.max_age, display_order: classOption.display_order };
    this.editingClassId.set(classOption.id);
    this.clearMessages();
  }

  cancelClassEdit(): void {
    this.classForm = { name: '', min_age: 2, max_age: 6, display_order: 0 };
    this.editingClassId.set(null);
    this.clearMessages();
  }

  orderedClassTuitions(): ClassTuition[] {
    const displayOrder = new Map(this.classOptions().map(classOption => [classOption.id, classOption.display_order]));
    return [...this.classTuitions()].sort((first, second) => (displayOrder.get(first.class_option_id) ?? Number.MAX_SAFE_INTEGER) - (displayOrder.get(second.class_option_id) ?? Number.MAX_SAFE_INTEGER) || first.fee_year - second.fee_year);
  }

  async toggleClassFeeDetails(): Promise<void> {
    const visible = !this.classFeeDetailsVisible();
    this.classFeeDetailsVisible.set(visible);
    if (visible) await this.loadClassTuitions(this.classFeeDetailsYear);
  }

  async changeClassFeeDetailsYear(): Promise<void> {
    await this.loadClassTuitions(this.classFeeDetailsYear);
  }

  openClassTuitionForm(): void {
    this.classTuitionForm = { class_option_id: '', fee_year: new Date().getFullYear(), amount: '' };
    this.editingClassTuitionId.set(null);
    this.classTuitionFormError.set('');
    this.classTuitionFormOpen.set(true);
  }

  editClassTuition(fee: ClassTuition): void {
    this.classTuitionForm = { class_option_id: fee.class_option_id, fee_year: fee.fee_year, amount: fee.amount };
    this.editingClassTuitionId.set(fee.id);
    this.classTuitionFormError.set('');
    this.classTuitionFormOpen.set(true);
  }

  changeTuitionPage(page: number): void {
    if (page < 1 || page > this.tuitionReport().total_pages) return;
    this.tuitionPage.set(page);
    void this.loadTuitionReport();
  }

  searchTuitionReport(): void {
    this.tuitionPage.set(1);
    void this.loadTuitionReport();
  }

  downloadTuitionReport(format: 'pdf' | 'xlsx'): void {
    let params = new HttpParams().set('fee_month', this.tuitionMonth).set('fee_year', this.tuitionYear);
    if (this.tuitionSearch.trim()) params = params.set('search', this.tuitionSearch.trim());
    if (this.tuitionClassFilter) params = params.set('class_option_id', this.tuitionClassFilter);
    void this.downloadFile(`${this.apiUrl}/tuition-fees/report.${format}`, `tuition-report.${format}`, params);
  }

  downloadTuitionSlip(fee: TuitionFee): void {
    void this.downloadFile(`${this.apiUrl}/tuition-fees/${fee.id}/slip.pdf`, `${fee.receipt_number}.pdf`);
  }

  isTeacher(): boolean { return this.user()?.role === 'teacher'; }

  isStudent(): boolean { return this.user()?.role === 'student'; }

  today(): string { return new Date().toISOString().slice(0, 10); }

  async loadMyDashboard(): Promise<void> {
    try {
      this.myStudent.set(await firstValueFrom(this.http.get<StudentRecord>(`${this.apiUrl}/students/me`, { headers: this.authHeaders() })));
    } catch { this.myStudent.set(null); }
    const today = new Date();
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().slice(0, 10);
    const todayStr = today.toISOString().slice(0, 10);
    try {
      const params = new HttpParams().set('from_date', monthStart).set('to_date', todayStr);
      this.myAttendance.set(await firstValueFrom(this.http.get<MyAttendanceRow[]>(`${this.apiUrl}/attendance/me`, { headers: this.authHeaders(), params })));
    } catch { this.myAttendance.set([]); }
    try {
      const params = new HttpParams().set('punched_date', todayStr);
      this.myPunches.set(await firstValueFrom(this.http.get<MyPunchRow[]>(`${this.apiUrl}/access-punches/me`, { headers: this.authHeaders(), params })));
    } catch { this.myPunches.set([]); }
    await this.loadHolidays();
    await this.loadMyDiary();
  }

  async loadMyDiary(): Promise<void> {
    try {
      const params = new HttpParams().set('entry_date', this.myDiaryDate);
      this.myDiaryEntries.set(await firstValueFrom(this.http.get<DiaryEntry[]>(`${this.apiUrl}/diary/me`, { headers: this.authHeaders(), params })));
    } catch { this.myDiaryEntries.set([]); }
  }

  async changeMyDiaryDate(value: string): Promise<void> {
    this.myDiaryDate = value;
    await this.loadMyDiary();
  }

  myAttendancePresentCount(): number {
    return this.myAttendance().filter(row => row.status === 'present' || row.status === 'late').length;
  }

  canManageClasses(): boolean { return this.can('classes', 'read'); }

  canViewHolidays(): boolean { return this.can('holidays', 'read'); }

  canManageHolidays(): boolean { return this.can('holidays', 'create'); }

  punchClasses(): ClassOption[] {
    const classes = new Map(this.attendanceStudents().map(student => [student.class_option.id, student.class_option]));
    return Array.from(classes.values()).sort((a, b) => a.display_order - b.display_order || a.name.localeCompare(b.name));
  }

  async loadPunchHistory(): Promise<void> {
    if (!this.canManagePunchAttendance()) return;
    let params = new HttpParams();
    if (this.punchDate) params = params.set('punched_date', this.punchDate);
    if (this.punchSearch.trim()) params = params.set('search', this.punchSearch.trim());
    if (this.punchClassId) params = params.set('class_option_id', this.punchClassId);
    if (this.punchPendingCheckoutOnly) params = params.set('pending_checkout', 'true');
    params = params.set('page', this.punchHistoryPage());
    params = params.set('page_size', 10);
    try {
      const response = await firstValueFrom(this.http.get<PunchHistoryResponse>(`${this.apiUrl}/access-punches`, { headers: this.authHeaders(), params }));
      this.punchHistory.set(response.items);
      this.punchHistoryTotal.set(response.total);
      this.punchHistoryPage.set(response.page);
      this.punchHistoryTotalPages.set(response.total_pages);
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to load Punch In/OUT history.'));
    }
  }

  clearPunchFilters(): void {
    this.punchDate = '';
    this.punchSearch = '';
    this.punchClassId = '';
    this.punchPendingCheckoutOnly = false;
    this.punchHistoryPage.set(1);
    void this.loadPunchHistory();
  }

  togglePendingCheckoutFilter(value: boolean): void {
    this.punchPendingCheckoutOnly = value;
    this.punchHistoryPage.set(1);
    void this.loadPunchHistory();
  }

  async onPunchSearchChange(value: string): Promise<void> {
    this.punchSearch = value;
    if (!value.trim()) {
      this.punchHistoryPage.set(1);
      await this.loadPunchHistory();
    }
  }

  searchPunchHistory(): void {
    this.punchHistoryPage.set(1);
    void this.loadPunchHistory();
  }

  changePunchHistoryPage(page: number): void {
    if (page < 1 || page > this.punchHistoryTotalPages()) return;
    this.punchHistoryPage.set(page);
    void this.loadPunchHistory();
  }

  async recordStaffAttendance(sendWhatsApp = true): Promise<void> {
    if (!this.attendanceStudentId) {
      this.error.set('Select a student first.');
      return;
    }
    this.setBusy();
    try {
      const result = await firstValueFrom(this.http.post<AttendancePunch>(`${this.apiUrl}/attendance/punch`, { student_id: this.attendanceStudentId, direction: this.attendanceDirection }, { headers: this.authHeaders() }));
      if (sendWhatsApp) {
        const punchedAt = new Date(result.punched_at);
        const date = punchedAt.toLocaleDateString('en-IN');
        const day = punchedAt.toLocaleDateString('en-IN', { weekday: 'long' });
        const time = punchedAt.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
        const message = `Tiny Tara Preschool\nStudent Name: ${result.student_name}\nStudent ID: ${result.student_id}\nClass: ${result.class_name}\nDate: ${date}\nDay: ${day}\nTime: ${time}\nStatus: School ${result.direction}`;
        const phone = result.parent_mobile.replace(/\D/g, '');
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
        this.notice.set(`School ${result.direction} recorded. WhatsApp opened for manual sending.`);
      } else {
        this.notice.set(`School ${result.direction} recorded.`);
      }
      await this.loadPunchHistory();
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to record school attendance.'));
    } finally { this.loading.set(false); }
  }

  async loadDailyAttendance(): Promise<void> {
    try {
      let params = new HttpParams().set('attendance_date', this.attendanceDate);
      if (this.attendanceClassFilter) params = params.set('class_option_id', this.attendanceClassFilter);
      if (this.attendanceSectionFilter) params = params.set('section_id', this.attendanceSectionFilter);
      this.dailyAttendance.set(await firstValueFrom(this.http.get<DailyAttendanceRow[]>(`${this.apiUrl}/attendance/daily`, { headers: this.authHeaders(), params })));
    } catch (error) { this.error.set(this.errorMessage(error, 'Unable to load daily attendance.')); }
  }

  async changeAttendanceDate(date: string): Promise<void> {
    this.attendanceDate = date;
    await this.loadDailyAttendance();
  }

  async changeAttendanceClassFilter(classOptionId: string): Promise<void> {
    this.attendanceClassFilter = classOptionId;
    this.attendanceSectionFilter = '';
    this.attendanceFilterSections.set(classOptionId ? await this.fetchClassSections(classOptionId) : []);
    await this.loadDailyAttendance();
  }

  async changeAttendanceSectionFilter(sectionId: string): Promise<void> {
    this.attendanceSectionFilter = sectionId;
    await this.loadDailyAttendance();
  }

  isAttendanceToday(): boolean { return this.attendanceDate === new Date().toISOString().slice(0, 10); }

  selectedHoliday(): Holiday | undefined { return this.holidays().find(holiday => holiday.holiday_date === this.attendanceDate); }

  async saveDailyAttendance(row: DailyAttendanceRow, status: string): Promise<void> {
    if (!this.can('attendance', 'create')) return this.denyPermission();
    if (!status || row.status === 'holiday') return;
    try {
      await firstValueFrom(this.http.put(`${this.apiUrl}/attendance/daily`, { student_id: row.student_id, attendance_date: this.attendanceDate, status, note: this.attendanceNote[row.student_id] || null }, { headers: this.authHeaders() }));
      row.status = status as DailyAttendanceRow['status'];
      this.dailyAttendance.set([...this.dailyAttendance()]);
      this.notice.set(`${row.student_name}'s attendance was saved.`);
    } catch (error) { this.error.set(this.errorMessage(error, 'Unable to save attendance.')); }
  }

  async addHoliday(): Promise<void> {
    if (!this.can('holidays', this.editingHolidayId() ? 'update' : 'create')) return this.denyPermission();
    if (!this.holidayForm.holiday_date || !this.holidayForm.name.trim()) {
      this.error.set('Enter a holiday date and name.');
      return;
    }
    this.setBusy();
    try {
      const holidayId = this.editingHolidayId();
      const request = holidayId
        ? this.http.put(`${this.apiUrl}/admin/holidays/${holidayId}`, this.holidayForm, { headers: this.authHeaders() })
        : this.http.post(`${this.apiUrl}/admin/holidays`, this.holidayForm, { headers: this.authHeaders() });
      await firstValueFrom(request);
      this.holidayForm = { holiday_date: '', name: '' };
      this.editingHolidayId.set(null);
      await this.loadHolidays();
      this.notice.set(holidayId ? 'Holiday updated.' : 'Holiday added.');
    } catch (error) { this.error.set(this.errorMessage(error, this.editingHolidayId() ? 'Unable to update holiday.' : 'Unable to add holiday.')); }
    finally { this.loading.set(false); }
  }

  editHoliday(holiday: Holiday): void {
    this.editingHolidayId.set(holiday.id);
    this.holidayForm = { holiday_date: holiday.holiday_date, name: holiday.name };
    this.clearMessages();
  }

  cancelHolidayEdit(): void {
    this.editingHolidayId.set(null);
    this.holidayForm = { holiday_date: '', name: '' };
  }

  async deleteHoliday(holiday: Holiday): Promise<void> {
    if (!this.can('holidays', 'delete')) return this.denyPermission();
    if (!window.confirm(`Delete ${holiday.name} on ${holiday.holiday_date}?`)) return;
    this.setBusy();
    try {
      await firstValueFrom(this.http.delete(`${this.apiUrl}/admin/holidays/${holiday.id}`, { headers: this.authHeaders() }));
      if (this.editingHolidayId() === holiday.id) this.cancelHolidayEdit();
      await this.loadHolidays();
      this.notice.set('Holiday deleted.');
    } catch (error) { this.error.set(this.errorMessage(error, 'Unable to delete holiday.')); }
    finally { this.loading.set(false); }
  }

  startStudentForm(): void {
    this.editingStudentId.set(null);
    this.studentForm = this.emptyStudentForm();
    this.studentFormSections.set([]);
    this.studentFormOpen.set(true);
    this.activeView.set('students');
    this.clearMessages();
  }

  async createStudent(): Promise<void> {
    if (!this.can('students', this.editingStudentId() ? 'update' : 'create')) return this.denyPermission();
    const missing = this.missingFields(this.studentForm, ['first_name', 'email', 'parent_mobile', 'address_line1', 'colony', 'city', 'state', 'pin_code', 'date_of_birth', 'class_option_id', 'guardian_one_name']);
    if (!this.editingStudentId() && !this.studentForm.password.trim()) missing.push('password');
    if (missing.length) {
      this.showFieldErrors(missing);
      return;
    }
    if (this.studentForm.first_name.trim().length < 2) {
      this.showFieldErrors([], { 'first name': 'First name must be at least 2 characters.' });
      return;
    }
    if (!this.isValidEmail(this.studentForm.email)) {
      this.showFieldErrors([], { email: 'Enter a valid email address, for example name@example.com.' });
      return;
    }
    this.setBusy();
    try {
      const id = this.editingStudentId();
      const payload = id
        ? (({ password: _password, ...profile }) => ({ ...profile, mobile: this.studentForm.parent_mobile, blood_group: this.studentForm.blood_group || null, section_id: this.studentForm.section_id || null }))(this.studentForm)
        : { ...this.studentForm, mobile: this.studentForm.parent_mobile, blood_group: this.studentForm.blood_group || null, section_id: this.studentForm.section_id || null };
      const request = id
        ? this.http.put(`${this.apiUrl}/admin/students/${id}`, payload, { headers: this.authHeaders() })
        : this.http.post(`${this.apiUrl}/admin/students`, payload, { headers: this.authHeaders() });
      await firstValueFrom(request);
      this.notice.set(id ? 'Student details updated.' : 'Student registered as an inactive account. Activate it from the student directory when ready.');
      await this.loadStudents(1);
      this.studentFormOpen.set(false);
      this.startStudentForm();
      this.studentFormOpen.set(false);
    } catch (error) {
      this.setFormError(error, this.editingStudentId() ? 'Unable to update this student.' : 'Unable to register this student.');
    } finally { this.loading.set(false); }
  }

  async searchStudents(): Promise<void> {
    await this.loadStudents(1);
  }

  async onStudentSearchChange(value: string): Promise<void> {
    this.studentSearch = value;
    if (!value.trim()) {
      await this.loadStudents(1);
    }
  }

  async onStudentClassFilterChange(classOptionId: string): Promise<void> {
    this.studentClassFilter = classOptionId;
    await this.loadStudents(1);
  }

  async changeStudentPage(page: number): Promise<void> {
    if (page < 1 || page > this.studentTotalPages()) return;
    await this.loadStudents(page);
  }

  viewStudent(student: StudentRecord): void {
    this.selectedStudent.set(student);
  }

  editStudent(student: StudentRecord): void {
    this.editingStudentId.set(student.id);
    this.studentForm = { first_name: student.first_name, middle_name: student.middle_name ?? '', last_name: student.last_name, email: student.email, password: '', parent_mobile: student.parent_mobile, mobile: student.parent_mobile, address_line1: student.address_line1, colony: student.colony, city: student.city, state: student.state, pin_code: student.pin_code, blood_group: student.blood_group ?? '', father_name: student.father_name ?? '', mother_name: student.mother_name ?? '', guardian_one_name: student.guardian_one_name ?? '', guardian_two_name: student.guardian_two_name ?? '', date_of_birth: student.date_of_birth, class_option_id: student.class_option_id, section_id: student.section_id ?? '' };
    this.studentFormOpen.set(true);
    this.selectedStudent.set(null);
    this.activeView.set('students');
    void this.fetchClassSections(student.class_option_id).then(sections => this.studentFormSections.set(sections));
  }

  closeStudentDetail(): void {
    this.selectedStudent.set(null);
  }

  async toggleStudentStatus(student: StudentRecord): Promise<void> {
    if (!this.can('students', 'update')) return this.denyPermission();
    const nextActive = student.status !== 'active';
    if (!window.confirm(`${nextActive ? 'Activate' : 'Deactivate'} ${student.first_name} ${student.last_name}'s account?`)) {
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.patch<StudentRecord>(`${this.apiUrl}/admin/students/${student.id}/status`, { is_active: nextActive }, { headers: this.authHeaders() }));
      this.notice.set(`Student is now ${nextActive ? 'active' : 'inactive'}.`);
      await this.loadStudents(this.studentPage());
      if (this.selectedStudent()?.id === student.id) this.closeStudentDetail();
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to change student status.'));
    } finally { this.loading.set(false); }
  }

  async deleteStudent(student: StudentRecord): Promise<void> {
    if (!this.can('students', 'delete')) return this.denyPermission();
    if (!window.confirm(`Permanently delete ${student.first_name} ${student.last_name}'s record?`)) {
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.delete(`${this.apiUrl}/admin/students/${student.id}`, { headers: this.authHeaders() }));
      this.notice.set('Student record deleted.');
      this.closeStudentDetail();
      await this.loadStudents(1);
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to delete this student.'));
    } finally { this.loading.set(false); }
  }

  startStudentPasswordChange(student: StudentRecord): void {
    this.studentPasswordTarget.set(student);
    this.studentPasswordValue = '';
    this.clearMessages();
  }

  cancelStudentPasswordChange(): void {
    this.studentPasswordTarget.set(null);
    this.studentPasswordValue = '';
  }

  async updateStudentPassword(): Promise<void> {
    if (!this.can('students', 'update')) return this.denyPermission();
    const target = this.studentPasswordTarget();
    if (!target || this.studentPasswordValue.length < 8) {
      this.error.set('Password must be at least 8 characters.');
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.put(`${this.apiUrl}/admin/students/${target.id}/password`, { password: this.studentPasswordValue }, { headers: this.authHeaders() }));
      this.notice.set(`Password updated for ${target.first_name} ${target.last_name}.`);
      this.cancelStudentPasswordChange();
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to update this password.'));
    } finally { this.loading.set(false); }
  }

  studentAge(): number | null {
    if (!this.studentForm.date_of_birth) return null;
    const birthDate = new Date(`${this.studentForm.date_of_birth}T00:00:00`);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const birthdayPassed = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    if (!birthdayPassed) age -= 1;
    return age >= 0 ? age : null;
  }

  studentAgeDetail(): string | null {
    if (!this.studentForm.date_of_birth) return null;
    const birthDate = new Date(`${this.studentForm.date_of_birth}T00:00:00`);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    if (days < 0) {
      months -= 1;
      const previousMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += previousMonthDays;
    }
    if (months < 0) { years -= 1; months += 12; }
    return `${years} years, ${months} months, ${days} days`;
  }

  selectedClass(): ClassOption | undefined {
    return this.classOptions().find(option => option.id === this.studentForm.class_option_id);
  }

  filteredTuitionStudents(): StudentRecord[] {
    const search = this.tuitionStudentSearch.trim().toLowerCase();
    return this.tuitionStudents().filter(student => {
      const matchesClass = !this.tuitionStudentClassFilter || student.class_option_id === this.tuitionStudentClassFilter;
      const matchesSearch = !search || [this.tuitionStudentLabel(student), student.first_name, student.middle_name, student.last_name, student.student_id, student.parent_mobile]
        .some(value => value?.toLowerCase().includes(search));
      return matchesClass && matchesSearch;
    });
  }

  filterTuitionStudents(): void {
    if (!this.filteredTuitionStudents().some(student => student.id === this.tuitionForm.student_id)) {
      this.tuitionForm.student_id = '';
    }
  }

  changeTuitionStudentClass(): void {
    this.tuitionForm.student_id = '';
    this.tuitionStudentSearch = '';
    this.tuitionFormError.set('');
  }

  tuitionStudentLabel(student: StudentRecord): string {
    return `${student.first_name} ${student.middle_name ? `${student.middle_name} ` : ''}${student.last_name} (${student.student_id})`;
  }

  selectTuitionStudentFromSearch(): void {
    const search = this.tuitionStudentSearch.trim().toLowerCase();
    const matches = this.filteredTuitionStudents();
    const selectedStudent = matches.find(student => this.tuitionStudentLabel(student).toLowerCase() === search || student.student_id.toLowerCase() === search)
      ?? (matches.length === 1 ? matches[0] : undefined);
    this.tuitionForm.student_id = selectedStudent?.id ?? '';
    if (selectedStudent) {
      this.tuitionStudentSearch = this.tuitionStudentLabel(selectedStudent);
      this.updateTuitionDue();
      this.tuitionFormError.set('');
    }
  }

  private emptyStudentForm() {
    return { first_name: '', middle_name: '', last_name: '', email: '', password: '', parent_mobile: '', mobile: '', address_line1: '', colony: '', city: '', state: '', pin_code: '', blood_group: '', father_name: '', mother_name: '', guardian_one_name: '', guardian_two_name: '', date_of_birth: '', class_option_id: this.classOptions()[0]?.id ?? '', section_id: '' };
  }

  private emptyTuitionForm() {
    const today = new Date().toISOString().slice(0, 10);
    return { student_id: '', fee_year: new Date().getFullYear(), fee_month: new Date().getMonth() + 1, amount_due: '', amount_paid: '', payment_date: today, payment_method: 'cash', payment_reference: '', note: '' };
  }

  private emptyTuitionBalancePaymentForm(amount = '') {
    return { amount, payment_date: new Date().toISOString().slice(0, 10), payment_method: 'cash', payment_reference: '', note: '' };
  }

  private emptyStaffForm() {
    return { first_name: '', middle_name: '', last_name: '', email: '', password: '', role: (this.isSuperAdmin() ? 'admin' : 'teacher') as StaffRole, mobile: '', address_line1: '', colony: '', city: '', state: '', pin_code: '', blood_group: '' };
  }

  private missingFields(form: Partial<Record<string, string>>, fields: string[]): string[] {
    return fields.filter(field => !form[field]?.trim()).map(field => field.replaceAll('_', ' '));
  }

  fieldError(field: string): string {
    return this.fieldErrors()[field] ?? this.fieldErrors()[field.replaceAll(' ', '_')] ?? this.fieldErrors()[field.replaceAll('_', ' ')] ?? '';
  }

  private showFieldErrors(fields: string[], customErrors: Record<string, string> = {}): void {
    const errors = { ...Object.fromEntries(fields.map(field => [field, `${field.replaceAll('_', ' ')} is required.`])), ...customErrors };
    this.fieldErrors.set(errors);
    this.error.set(Object.keys(customErrors).length ? 'Please correct the highlighted field before submitting.' : `Please complete the mandatory field${fields.length > 1 ? 's' : ''} marked below.`);
  }

  private isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  private setFormError(error: unknown, fallback: string): void {
    if (error instanceof HttpErrorResponse && Array.isArray(error.error?.detail)) {
      const errors = Object.fromEntries(error.error.detail.map((item: { loc?: string[]; msg?: string }) => [item.loc?.at(-1)?.replaceAll('_', ' ') ?? 'field', item.msg ?? 'Invalid value.']));
      this.fieldErrors.set(errors);
      this.error.set('Please correct the highlighted fields before submitting.');
      return;
    }
    this.error.set(this.errorMessage(error, fallback));
  }

  isSuperAdmin(): boolean {
    return this.user()?.role === 'super_admin';
  }

  can(resource: string, action: 'read' | 'create' | 'update' | 'delete'): boolean {
    if (this.isSuperAdmin()) return true;
    return this.permissionsLoaded() && this.permissionEnabled(this.user()?.role ?? '', resource, action);
  }

  denyPermission(): void {
    this.error.set('You do not have permission to perform this action.');
  }

  canView(view: DashboardView): boolean {
    if (view === 'overview' || view === 'profile' || view === 'my-dashboard') return true;
    if (view === 'permissions') return this.isSuperAdmin();
    const resources: Partial<Record<DashboardView, string>> = {
      pages: 'page_content', contact: 'site_content', gallery: 'gallery', holidays: 'holidays',
      'punch-attendance': 'access_punches', attendance: 'attendance', tuition: 'tuition_fees',
      classes: 'classes', staff: 'users', students: 'students'
    };
    const resource = resources[view];
    return !!resource && this.can(resource, 'read');
  }

  async loadMyPermissions(): Promise<void> {
    try {
      const summary = await firstValueFrom(this.http.get<RolePermissionSummary>(`${this.apiUrl}/admin/my-permissions`, { headers: this.authHeaders() }));
      this.rolePermissions.set({ [summary.role]: summary });
      this.permissionsLoaded.set(true);
    } catch (error) {
      this.permissionsLoaded.set(false);
      throw error;
    }
  }

  async loadRolePermissions(): Promise<void> {
    if (!this.isSuperAdmin()) {
      return;
    }
    try {
      const response = await firstValueFrom(this.http.get<RolePermissionSummary[]>(`${this.apiUrl}/admin/role-permissions`, { headers: this.authHeaders() }));
      const mapped = Object.fromEntries(response.map(item => [item.role, item]));
      this.rolePermissions.set(mapped);
      if (!mapped[this.selectedPermissionRole()]) {
        this.selectedPermissionRole.set('teacher');
      }
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to load access settings.'));
    }
  }

  getSelectedPermissionSummary(): RolePermissionSummary | undefined {
    return this.rolePermissions()[this.selectedPermissionRole()];
  }

  permissionEnabled(role: string, resource: string, action: 'read' | 'create' | 'update' | 'delete'): boolean {
    const entries = this.rolePermissions()[role]?.permissions ?? [];
    return entries.some(entry => entry.resource === resource && entry.action === action);
  }

  togglePermission(role: string, resource: string, action: 'read' | 'create' | 'update' | 'delete'): void {
    if (!this.isSuperAdmin()) {
      return;
    }
    const current = this.rolePermissions()[role];
    if (!current) {
      return;
    }
    const permissionSet = new Set(current.permissions.map(item => `${item.resource}:${item.action}`));
    const key = `${resource}:${action}`;
    if (permissionSet.has(key)) {
      permissionSet.delete(key);
    } else {
      permissionSet.add(key);
    }
    const permissions = Array.from(permissionSet).map(value => {
      const [entryResource, entryAction] = value.split(':');
      return { resource: entryResource, action: entryAction as RolePermissionEntry['action'] };
    }).sort((a, b) => a.resource.localeCompare(b.resource) || a.action.localeCompare(b.action));
    this.rolePermissions.set({ ...this.rolePermissions(), [role]: { ...current, permissions } });
  }

  async savePermissions(): Promise<void> {
    if (!this.isSuperAdmin()) {
      this.error.set('Only Super Admin can update role access settings.');
      return;
    }
    const role = this.selectedPermissionRole();
    const permissions = this.rolePermissions()[role]?.permissions ?? [];
    this.setBusy();
    try {
      await firstValueFrom(this.http.put<RolePermissionSummary>(`${this.apiUrl}/admin/role-permissions/${role}`, { permissions }, { headers: this.authHeaders() }));
      this.notice.set(`${role.replace('_', ' ')} permissions updated.`);
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to save role access settings.'));
    } finally {
      this.loading.set(false);
    }
  }

  isProtectedAccount(member: UserRecord): boolean {
    return member.role === 'super_admin';
  }

  startStaffForm(): void {
    this.editingStaffId.set(null);
    this.staffForm = this.emptyStaffForm();
    this.staffFormOpen.set(true);
    this.activeView.set('staff');
    this.clearMessages();
  }

  async createStaffAccount(): Promise<void> {
    if (!this.can('users', this.editingStaffId() ? 'update' : 'create')) return this.denyPermission();
    if (!this.canManageStaff()) {
      this.error.set('Only super admins and admins can create staff accounts.');
      return;
    }
    const missing = this.missingFields(this.staffForm, ['first_name', 'email', 'mobile', 'address_line1', 'colony', 'city', 'state', 'pin_code', 'role']);
    if (!this.editingStaffId() && !this.staffForm.password.trim()) missing.push('password');
    if (missing.length) {
      this.showFieldErrors(missing);
      return;
    }
    if (!this.isValidEmail(this.staffForm.email)) {
      this.showFieldErrors([], { email: 'Enter a valid email address, for example name@example.com.' });
      return;
    }
    this.setBusy();
    try {
      const id = this.editingStaffId();
      const profilePayload = { ...this.staffForm, blood_group: this.staffForm.blood_group || null };
      if (id) {
        const { password: _password, ...profile } = profilePayload;
        await firstValueFrom(this.http.put<UserRecord>(`${this.apiUrl}/admin/users/${id}`, profile, { headers: this.authHeaders() }));
      } else {
        await firstValueFrom(this.http.post<UserRecord>(`${this.apiUrl}/admin/users`, profilePayload, { headers: this.authHeaders() }));
      }
      this.notice.set(id ? 'Staff details updated.' : `${this.staffForm.role} account created.`);
      this.staffForm = this.emptyStaffForm();
      this.editingStaffId.set(null);
      this.staffFormOpen.set(false);
      await this.loadUsers(1);
    } catch (error) {
      this.error.set(this.errorMessage(error, this.editingStaffId() ? 'Unable to update this staff account.' : 'Unable to create this staff account.'));
    } finally {
      this.loading.set(false);
    }
  }

  viewStaff(member: UserRecord): void { this.selectedStaff.set(member); }

  editStaff(member: UserRecord): void {
    this.editingStaffId.set(member.id);
    this.staffForm = { first_name: member.first_name, middle_name: member.middle_name ?? '', last_name: member.last_name, email: member.email, password: '', role: member.role as StaffRole, mobile: member.mobile, address_line1: member.address_line1, colony: member.colony, city: member.city, state: member.state, pin_code: member.pin_code, blood_group: member.blood_group ?? '' };
    this.selectedStaff.set(null);
    this.staffFormOpen.set(true);
    this.activeView.set('staff');
  }

  async searchStaff(): Promise<void> {
    await this.loadUsers(1);
  }

  async onStaffSearchChange(value: string): Promise<void> {
    this.staffSearch = value;
    if (!value.trim()) {
      await this.loadUsers(1);
    }
  }

  async onStaffRoleChange(role: string): Promise<void> {
    this.staffRole = role;
    await this.loadUsers(1);
  }

  async onStaffStatusChange(status: string): Promise<void> {
    this.staffStatus = status;
    await this.loadUsers(1);
  }

  async changeStaffPage(page: number): Promise<void> {
    if (page < 1 || page > this.staffTotalPages()) return;
    await this.loadUsers(page);
  }

  startPasswordChange(member: UserRecord): void {
    this.passwordTarget.set(member);
    this.passwordValue = '';
    this.clearMessages();
  }

  cancelPasswordChange(): void {
    this.passwordTarget.set(null);
    this.passwordValue = '';
  }

  async updateUserPassword(): Promise<void> {
    if (!this.can('users', 'update')) return this.denyPermission();
    const target = this.passwordTarget();
    if (!target || this.passwordValue.length < 8) {
      this.error.set('Password must be at least 8 characters.');
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.put<UserRecord>(`${this.apiUrl}/admin/users/${target.id}/password`, { password: this.passwordValue }, { headers: this.authHeaders() }));
      this.notice.set(`Password updated for ${target.name}.`);
      this.cancelPasswordChange();
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to update this password.'));
    } finally {
      this.loading.set(false);
    }
  }

  async toggleAccount(member: UserRecord): Promise<void> {
    if (!this.can('users', 'update')) return this.denyPermission();
    if (member.id === this.user()?.id) {
      this.error.set('You cannot deactivate your own account.');
      return;
    }
    const action = member.is_active ? 'deactivate' : 'activate';
    if (!window.confirm(`Are you sure you want to ${action} ${member.name}'s account?`)) {
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.patch<UserRecord>(`${this.apiUrl}/admin/users/${member.id}/status`, { is_active: !member.is_active }, { headers: this.authHeaders() }));
      this.notice.set(`${member.name}'s account is now ${member.is_active ? 'inactive' : 'active'}.`);
      await this.loadUsers();
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to change account status.'));
    } finally {
      this.loading.set(false);
    }
  }

  async deleteAccount(member: UserRecord): Promise<void> {
    if (!this.can('users', 'delete')) return this.denyPermission();
    if (member.id === this.user()?.id) {
      this.error.set('You cannot delete your own account.');
      return;
    }
    if (!window.confirm(`Permanently delete ${member.name}'s account? Deactivation is safer.`)) {
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.delete(`${this.apiUrl}/admin/users/${member.id}`, { headers: this.authHeaders() }));
      this.notice.set(`${member.name}'s account was deleted.`);
      await this.loadUsers();
    } catch (error) {
      this.error.set(this.errorMessage(error, 'This account could not be deleted. Deactivate it instead.'));
    } finally {
      this.loading.set(false);
    }
  }

  startNewContent(): void {
    this.editingContentId.set(null);
    this.contentForm = { ...this.emptyContentForm(), page_name: this.selectedPage() };
    this.activeView.set('pages');
    this.clearMessages();
  }

  editContent(content: PageContent): void {
    this.editingContentId.set(content.id);
    this.contentForm = {
      page_name: content.page_name,
      section_name: content.section_name,
      content_type: content.content_type,
      title: content.title ?? '',
      body: content.body ?? '',
      image_url: content.image_url ?? '',
      link_url: content.link_url ?? '',
      display_order: content.display_order,
      is_published: content.is_published
    };
    this.activeView.set('pages');
    this.clearMessages();
  }

  async saveContent(): Promise<void> {
    if (!this.can('page_content', this.editingContentId() ? 'update' : 'create')) return this.denyPermission();
    this.setBusy();
    try {
      const headers = this.authHeaders();
      const id = this.editingContentId();
      if (id) {
        await firstValueFrom(this.http.put<PageContent>(`${this.apiUrl}/admin/page-content/${id}`, {
          content_type: this.contentForm.content_type,
          title: this.contentForm.title,
          body: this.contentForm.body,
          image_url: this.contentForm.image_url,
          link_url: this.contentForm.link_url,
          display_order: this.contentForm.display_order,
          is_published: this.contentForm.is_published
        }, { headers }));
        this.notice.set('Page section updated.');
      } else {
        await firstValueFrom(this.http.post<PageContent>(`${this.apiUrl}/admin/page-content`, this.contentForm, { headers }));
        this.notice.set('Page section created.');
      }
      await this.loadPageContents();
      this.editingContentId.set(null);
      this.contentForm = { ...this.emptyContentForm(), page_name: this.selectedPage() };
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to save this page section.'));
    } finally {
      this.loading.set(false);
    }
  }

  async deleteContent(content: PageContent): Promise<void> {
    if (!this.can('page_content', 'delete')) return this.denyPermission();
    if (!window.confirm(`Delete the ${content.section_name} section?`)) {
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.delete(`${this.apiUrl}/admin/page-content/${content.id}`, { headers: this.authHeaders() }));
      this.notice.set('Page section deleted.');
      await this.loadPageContents();
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to delete this page section.'));
    } finally {
      this.loading.set(false);
    }
  }

  async saveSiteContent(): Promise<void> {
    if (!this.can('site_content', 'update')) return this.denyPermission();
    this.setBusy();
    try {
      await firstValueFrom(this.http.put<SiteContent>(`${this.apiUrl}/admin/site-content`, this.siteContent(), { headers: this.authHeaders() }));
      this.notice.set('Contact details saved.');
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to save contact details.'));
    } finally {
      this.loading.set(false);
    }
  }

  updateSiteField(field: keyof SiteContent, value: string): void {
    this.siteContent.set({ ...this.siteContent(), [field]: value });
  }

  onGalleryFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.galleryFile = input.files?.[0] ?? null;
  }

  async uploadGallery(): Promise<void> {
    if (!this.can('gallery', 'create')) return this.denyPermission();
    if (!this.galleryFile) {
      this.error.set('Choose an image before uploading.');
      return;
    }
    this.setBusy();
    try {
      const formData = new FormData();
      formData.append('page_name', this.galleryPageName);
      formData.append('file', this.galleryFile);
      await firstValueFrom(this.http.post(`${this.apiUrl}/admin/gallery`, formData, { headers: this.authHeaders() }));
      this.notice.set('Gallery image uploaded.');
      this.galleryFile = null;
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to upload this image.'));
    } finally {
      this.loading.set(false);
    }
  }

  pageCount(): number {
    return new Set(this.pageContents().map(content => content.page_name)).size;
  }

  publishedCount(): number {
    return this.pageContents().filter(content => content.is_published).length;
  }

  staffAccountCount(): number {
    return ['super_admin', 'admin', 'teacher', 'clerk', 'security']
      .reduce((total, role) => total + (this.roleCounts()[role] || 0), 0);
  }

  private async loadPageContents(): Promise<void> {
    const contents = await firstValueFrom(this.http.get<PageContent[]>(`${this.apiUrl}/admin/page-content`, {
      headers: this.authHeaders(),
      params: { page_name: this.selectedPage() }
    }));
    this.pageContents.set(contents);
  }

  private async loadSiteContent(): Promise<void> {
    const content = await firstValueFrom(this.http.get<SiteContent>(`${this.apiUrl}/admin/site-content`, { headers: this.authHeaders() }));
    this.siteContent.set({ email: content.email ?? '', phone: content.phone ?? '', address: content.address ?? '', school_days: content.school_days ?? '', school_hours: content.school_hours ?? '' });
  }

  private async loadUsers(page = this.staffPage()): Promise<void> {
    try {
      const params: Record<string, string | number> = {
        page,
        page_size: 10
      };
      if (this.staffSearch.trim()) {
        params['search'] = this.staffSearch.trim();
      }
      if (this.staffRole) {
        params['role'] = this.staffRole;
      }
      if (this.staffStatus) {
        params['is_active'] = this.staffStatus;
      }
      const response = await firstValueFrom(this.http.get<{ items: UserRecord[]; page: number; total: number; total_pages: number; role_counts: Record<string, number> }>(`${this.apiUrl}/admin/users`, {
        headers: this.authHeaders(),
        params
      }));
      this.users.set(response.items);
      this.staffPage.set(response.page);
      this.staffTotal.set(response.total);
      this.staffTotalPages.set(response.total_pages);
      this.roleCounts.set(response.role_counts);
    } catch {
      this.users.set([]);
    }
  }

  private async loadClasses(): Promise<void> {
    try {
      const classOptions = await firstValueFrom(this.http.get<ClassOption[]>(`${this.apiUrl}/admin/classes`, { headers: this.authHeaders() }));
      this.classOptions.set(classOptions);
    } catch { this.classOptions.set([]); }
  }

  private async fetchClassSections(classOptionId: string): Promise<ClassSection[]> {
    try {
      return await firstValueFrom(this.http.get<ClassSection[]>(`${this.apiUrl}/admin/classes/${classOptionId}/sections`, { headers: this.authHeaders() }));
    } catch { return []; }
  }

  async selectSectionsClass(classOptionId: string): Promise<void> {
    this.sectionsClassId.set(classOptionId);
    this.editingSectionId.set(null);
    this.sectionForm = { name: '', display_order: 0 };
    this.classSections.set(classOptionId ? await this.fetchClassSections(classOptionId) : []);
  }

  async saveSection(): Promise<void> {
    if (!this.can('classes', this.editingSectionId() ? 'update' : 'create')) return this.denyPermission();
    const classOptionId = this.sectionsClassId();
    if (!classOptionId || !this.sectionForm.name.trim()) {
      this.error.set('Select a class and enter a section name.');
      return;
    }
    this.setBusy();
    try {
      const sectionId = this.editingSectionId();
      const request = sectionId
        ? this.http.put<ClassSection>(`${this.apiUrl}/admin/classes/${classOptionId}/sections/${sectionId}`, this.sectionForm, { headers: this.authHeaders() })
        : this.http.post<ClassSection>(`${this.apiUrl}/admin/classes/${classOptionId}/sections`, this.sectionForm, { headers: this.authHeaders() });
      await firstValueFrom(request);
      this.sectionForm = { name: '', display_order: 0 };
      this.editingSectionId.set(null);
      this.classSections.set(await this.fetchClassSections(classOptionId));
      this.notice.set(sectionId ? 'Section updated.' : 'Section added.');
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to save this section.'));
    } finally {
      this.loading.set(false);
    }
  }

  editSection(section: ClassSection): void {
    this.sectionForm = { name: section.name, display_order: section.display_order };
    this.editingSectionId.set(section.id);
    this.clearMessages();
  }

  cancelSectionEdit(): void {
    this.sectionForm = { name: '', display_order: 0 };
    this.editingSectionId.set(null);
    this.clearMessages();
  }

  async onStudentFormClassChange(classOptionId: string): Promise<void> {
    this.studentForm.class_option_id = classOptionId;
    this.studentForm.section_id = '';
    this.studentFormSections.set(classOptionId ? await this.fetchClassSections(classOptionId) : []);
  }

  private async loadClassTuitions(feeYear?: number): Promise<void> {
    try {
      const params = feeYear ? { fee_year: feeYear } : undefined;
      this.classTuitions.set(await firstValueFrom(this.http.get<ClassTuition[]>(`${this.apiUrl}/admin/classes/tuition`, { headers: this.authHeaders(), params })));
    } catch { this.classTuitions.set([]); }
  }

  private async loadAttendanceStudents(): Promise<void> {
    try {
      this.attendanceStudents.set(await firstValueFrom(this.http.get<StudentRecord[]>(`${this.apiUrl}/attendance/students`, { headers: this.authHeaders() })));
    } catch { this.attendanceStudents.set([]); }
  }

  private async loadStudents(page = this.studentPage()): Promise<void> {
    try {
      const params: Record<string, string | number> = { page, page_size: 10 };
      if (this.studentSearch.trim()) params['search'] = this.studentSearch.trim();
      if (this.studentClassFilter) params['class_option_id'] = this.studentClassFilter;
      const response = await firstValueFrom(this.http.get<{ items: StudentRecord[]; page: number; total: number; total_pages: number }>(`${this.apiUrl}/admin/students`, {
        headers: this.authHeaders(),
        params
      }));
      this.students.set(response.items);
      this.studentPage.set(response.page);
      this.studentTotal.set(response.total);
      this.studentTotalPages.set(response.total_pages);
    } catch {
      this.students.set([]);
    }
  }

  private async loadTuitionStudents(): Promise<void> {
    try {
      const response = await firstValueFrom(this.http.get<{ items: StudentRecord[] }>(`${this.apiUrl}/admin/students`, { headers: this.authHeaders(), params: { page: 1, page_size: 100 } }));
      this.tuitionStudents.set(response.items);
    } catch {
      this.tuitionStudents.set([]);
    }
  }

  private async downloadFile(url: string, fileName: string, params?: HttpParams): Promise<void> {
    try {
      const blob = await firstValueFrom(this.http.get(url, { headers: this.authHeaders(), params, responseType: 'blob' }));
      const downloadUrl = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = downloadUrl;
      anchor.download = fileName;
      anchor.click();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to download the requested file.'));
    }
  }

  private async loadHolidays(): Promise<void> {
    try { this.holidays.set(await firstValueFrom(this.http.get<Holiday[]>(`${this.apiUrl}/holidays`, { headers: this.authHeaders() }))); } catch { this.holidays.set([]); }
  }

  private authHeaders(): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${this.token()}` });
  }

  private setBusy(): void {
    this.loading.set(true);
    this.clearMessages();
  }

  private clearMessages(): void {
    this.error.set('');
    this.notice.set('');
    this.fieldErrors.set({});
  }

  private emptyContentForm() {
    return {
      page_name: 'home',
      section_name: '',
      content_type: 'text',
      title: '',
      body: '',
      image_url: '',
      link_url: '',
      display_order: 0,
      is_published: true
    };
  }

  private errorMessage(error: unknown, fallback: string): string {
    if (error instanceof HttpErrorResponse && error.status === 405) {
      return 'Update is not available on the running API. Restart the Tiny Tara API server and try again.';
    }
    if (error instanceof HttpErrorResponse && typeof error.error?.detail === 'string') {
      return error.error.detail;
    }
    if (error instanceof HttpErrorResponse && Array.isArray(error.error?.detail)) {
      return error.error.detail
        .map((item: { loc?: string[]; msg?: string }) => `${item.loc?.at(-1)?.replaceAll('_', ' ') ?? 'Field'}: ${item.msg ?? 'Invalid value'}`)
        .join(' ');
    }
    return fallback;
  }
}
