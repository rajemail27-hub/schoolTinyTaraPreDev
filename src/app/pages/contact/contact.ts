import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

import { SiteContentService } from '../../services/site-content.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  readonly siteContent = inject(SiteContentService);
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://127.0.0.1:8000/api';
  submitted = false;
  sending = false;
  submitError = '';
  enquiryForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.enquiryForm = this.fb.group({
      parentName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      childName: ['', [Validators.required, Validators.minLength(2)]],
      childAge: ['', Validators.required],
      message: ['']
    });
  }

  ngOnInit(): void {
    void this.siteContent.load();
  }

  async submitForm(): Promise<void> {
    this.submitted = true;
    this.submitError = '';

    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      return;
    }

    const value = this.enquiryForm.value;
    this.sending = true;
    try {
      await firstValueFrom(this.http.post(`${this.apiUrl}/admission-enquiries`, {
        parent_name: value.parentName,
        phone: value.phone,
        email: value.email,
        child_name: value.childName,
        child_age: value.childAge,
        message: value.message || null
      }));
      alert('Thank you! Your enquiry has been submitted successfully. We will contact you soon.');
      this.enquiryForm.reset({ parentName: '', phone: '', email: '', childName: '', childAge: '', message: '' });
      this.submitted = false;
    } catch {
      this.submitError = 'We could not send your enquiry right now. Please try again or call us.';
    } finally {
      this.sending = false;
    }
  }

  isInvalid(fieldName: string): boolean {
    const field = this.enquiryForm.get(fieldName);

    return !!(
      field &&
      field.invalid &&
      (field.touched || this.submitted)
    );
  }
}
