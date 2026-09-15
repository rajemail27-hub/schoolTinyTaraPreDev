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
});
