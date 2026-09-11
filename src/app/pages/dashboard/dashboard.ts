import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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
  email: string;
  role: string;
  is_active: boolean;
}

interface ClassOption { id: string; name: string; min_age: number; max_age: number; display_order: number; is_active: boolean; }
interface StudentRecord { id: string; student_id: string; first_name: string; last_name: string; parent_mobile: string; date_of_birth: string; age: number; class_option_id: string; class_option: ClassOption; status: string; }
interface AttendancePunch { id: string; student_id: string; student_name: string; class_name: string; parent_mobile: string; direction: string; punched_at: string; }

type StaffRole = 'admin' | 'teacher' | 'clerk' | 'security';

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
  readonly activeView = signal<'overview' | 'pages' | 'contact' | 'gallery' | 'staff' | 'students' | 'attendance' | 'profile'>('overview');
  readonly classOptions = signal<ClassOption[]>([]);
  readonly students = signal<StudentRecord[]>([]);
  readonly attendanceStudents = signal<StudentRecord[]>([]);
  readonly selectedPage = signal('home');
  readonly editingContentId = signal<string | null>(null);
  readonly loading = signal(false);
  readonly error = signal('');
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
  studentForm = { first_name: '', last_name: '', email: '', password: '', parent_mobile: '', date_of_birth: '', class_option_id: '' };
  attendanceStudentId = '';
  attendanceDirection: 'in' | 'out' = 'in';

  loginForm = { email: 'admin@tinytara.com', password: 'ChangeMe123!' };
  contentForm = this.emptyContentForm();
  staffForm: { name: string; email: string; password: string; role: StaffRole } = {
    name: '',
    email: '',
    password: '',
    role: 'teacher'
  };
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
      this.profileName = profile.name;
      await Promise.all([this.loadPageContents(), this.loadSiteContent(), this.loadUsers(), this.loadClasses(), this.loadAttendanceStudents(), this.loadStudents()]);
    } catch (error) {
      this.error.set(this.errorMessage(error, 'The dashboard could not load its data.'));
      if (error instanceof HttpErrorResponse && error.status === 401) {
        this.logout();
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
    return this.user()?.role === 'super_admin' || this.user()?.role === 'admin';
  }

  canManageStudents(): boolean {
    return ['super_admin', 'admin', 'clerk'].includes(this.user()?.role ?? '');
  }

  canRecordAttendance(): boolean {
    return ['super_admin', 'admin', 'teacher'].includes(this.user()?.role ?? '');
  }

  async recordStaffAttendance(): Promise<void> {
    if (!this.attendanceStudentId) {
      this.error.set('Select a student first.');
      return;
    }
    this.setBusy();
    try {
      const result = await firstValueFrom(this.http.post<AttendancePunch>(`${this.apiUrl}/attendance/punch`, { student_id: this.attendanceStudentId, direction: this.attendanceDirection }, { headers: this.authHeaders() }));
      const punchedAt = new Date(result.punched_at);
      const date = punchedAt.toLocaleDateString('en-IN');
      const day = punchedAt.toLocaleDateString('en-IN', { weekday: 'long' });
      const time = punchedAt.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      const message = `Tiny Tara Preschool\nStudent Name: ${result.student_name}\nStudent ID: ${result.student_id}\nClass: ${result.class_name}\nDate: ${date}\nDay: ${day}\nTime: ${time}\nStatus: School ${result.direction}`;
      const phone = result.parent_mobile.replace(/\D/g, '');
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
      this.notice.set(`School ${result.direction} recorded. WhatsApp opened for manual sending.`);
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to record school attendance.'));
    } finally { this.loading.set(false); }
  }

  startStudentForm(): void {
    this.studentForm = { first_name: '', last_name: '', email: '', password: '', parent_mobile: '', date_of_birth: '', class_option_id: this.classOptions()[0]?.id ?? '' };
    this.activeView.set('students');
    this.clearMessages();
  }

  async createStudent(): Promise<void> {
    this.setBusy();
    try {
      await firstValueFrom(this.http.post(`${this.apiUrl}/admin/students`, this.studentForm, { headers: this.authHeaders() }));
      this.notice.set('Student registered as an inactive account. Activate it from Staff accounts when ready.');
      await this.loadStudents();
      this.startStudentForm();
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to register this student.'));
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

  selectedClass(): ClassOption | undefined {
    return this.classOptions().find(option => option.id === this.studentForm.class_option_id);
  }

  isSuperAdmin(): boolean {
    return this.user()?.role === 'super_admin';
  }

  isProtectedAccount(member: UserRecord): boolean {
    return member.role === 'super_admin';
  }

  startStaffForm(): void {
    this.staffForm = { name: '', email: '', password: '', role: this.isSuperAdmin() ? 'admin' : 'teacher' };
    this.activeView.set('staff');
    this.clearMessages();
  }

  async createStaffAccount(): Promise<void> {
    if (!this.canManageStaff()) {
      this.error.set('Only super admins and admins can create staff accounts.');
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.post<UserRecord>(`${this.apiUrl}/admin/users`, this.staffForm, { headers: this.authHeaders() }));
      this.notice.set(`${this.staffForm.role} account created.`);
      this.staffForm = { name: '', email: '', password: '', role: this.isSuperAdmin() ? 'admin' : 'teacher' };
      await this.loadUsers(1);
    } catch (error) {
      this.error.set(this.errorMessage(error, 'Unable to create this staff account.'));
    } finally {
      this.loading.set(false);
    }
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
      this.classOptions.set(await firstValueFrom(this.http.get<ClassOption[]>(`${this.apiUrl}/admin/classes`, { headers: this.authHeaders() })));
    } catch { this.classOptions.set([]); }
  }

  private async loadAttendanceStudents(): Promise<void> {
    try {
      this.attendanceStudents.set(await firstValueFrom(this.http.get<StudentRecord[]>(`${this.apiUrl}/attendance/students`, { headers: this.authHeaders() })));
    } catch { this.attendanceStudents.set([]); }
  }

  private async loadStudents(): Promise<void> {
    try {
      this.students.set(await firstValueFrom(this.http.get<StudentRecord[]>(`${this.apiUrl}/admin/students`, { headers: this.authHeaders() })));
    } catch { this.students.set([]); }
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
    if (error instanceof HttpErrorResponse && typeof error.error?.detail === 'string') {
      return error.error.detail;
    }
    return fallback;
  }
}
