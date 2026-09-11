import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface SiteContent {
  id?: string;
  email: string | null;
  phone: string | null;
  address: string | null;
  school_days: string | null;
  school_hours: string | null;
}

const FALLBACK_CONTENT: SiteContent = {
  email: 'hello@tinytarapreschool.com',
  phone: '+91 XXXXX XXXXX',
  address: 'Your Preschool Address, Patna, Bihar, India',
  school_days: 'Monday - Friday',
  school_hours: '9:00 AM - 2:00 PM'
};

@Injectable({ providedIn: 'root' })
export class SiteContentService {
  private readonly apiUrl = 'http://127.0.0.1:8000/api';
  private readonly content = signal<SiteContent>(FALLBACK_CONTENT);
  private loaded = false;

  constructor(
    private readonly http: HttpClient,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {}

  value(): SiteContent {
    return this.content();
  }

  async load(): Promise<void> {
    if (this.loaded || !isPlatformBrowser(this.platformId)) {
      return;
    }
    this.loaded = true;
    try {
      const response = await firstValueFrom(this.http.get<SiteContent | null>(`${this.apiUrl}/site-content`));
      if (response) {
        this.content.set({
          email: response.email || FALLBACK_CONTENT.email,
          phone: response.phone || FALLBACK_CONTENT.phone,
          address: response.address || FALLBACK_CONTENT.address,
          school_days: response.school_days || FALLBACK_CONTENT.school_days,
          school_hours: response.school_hours || FALLBACK_CONTENT.school_hours
        });
      }
    } catch {
      // Keep the public site usable while the API is unavailable.
    }
  }
}
