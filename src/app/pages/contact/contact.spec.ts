import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact } from './contact';
import { SiteContentService } from '../../services/site-content.service';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [provideHttpClient(), provideHttpClientTesting(), {
        provide: SiteContentService,
        useValue: {
          load: async () => undefined,
          value: () => ({
            email: 'hello@example.com',
            phone: '1234567890',
            address: 'School address',
            school_days: 'Monday - Friday',
            school_hours: '9:00 AM - 2:00 PM',
          }),
        },
      }],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('lists the Kindergarten LKG and UKG age ranges', () => {
    const options = Array.from(
      fixture.nativeElement.querySelectorAll('#childAge option') as NodeListOf<HTMLOptionElement>,
    );

    expect(options.map(option => option.textContent?.trim())).toContain('LKG (4 – 5 Years)');
    expect(options.map(option => option.textContent?.trim())).toContain('UKG (5 – 6 Years)');
    expect(options.find(option => option.textContent?.includes('UKG'))?.value).toBe('5-6');
  });

  it('labels the younger age options with their program names', () => {
    const labels = Array.from(
      fixture.nativeElement.querySelectorAll('#childAge option') as NodeListOf<HTMLOptionElement>,
    ).map(option => option.textContent?.trim());

    expect(labels).toContain('Play Group (2 – 3 Years)');
    expect(labels).toContain('Nursery (3 – 4 Years)');
  });

  it('posts a valid enquiry to the API', async () => {
    const http = TestBed.inject(HttpTestingController);
    vi.spyOn(window, 'alert').mockImplementation(() => undefined);
    component.enquiryForm.setValue({ parentName: 'Asha Rao', phone: '9876543210', email: 'asha@example.com', childName: 'Tara', childAge: '3-4', message: '' });

    const pending = component.submitForm();
    const request = http.expectOne('http://127.0.0.1:8000/api/admission-enquiries');
    expect(request.request.body).toEqual({ parent_name: 'Asha Rao', phone: '9876543210', email: 'asha@example.com', child_name: 'Tara', child_age: '3-4', message: null });
    request.flush({});
    await pending;

    expect(component.submitError).toBe('');
    expect(component.enquiryForm.value.parentName).toBe('');
  });
});
