import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
  submitted = false;
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

  submitForm(): void {
    this.submitted = true;

    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      return;
    }

    console.log('Tiny Tara Admission Enquiry:', this.enquiryForm.value);
    alert('Thank you! Your enquiry has been submitted successfully. We will contact you soon.');

    this.enquiryForm.reset();
    this.submitted = false;
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
