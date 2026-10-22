import {
  HttpClient
} from "./chunk-6QXTDYKH.js";
import {
  isPlatformBrowser
} from "./chunk-UVVJPUY3.js";
import {
  Inject,
  Injectable,
  PLATFORM_ID,
  firstValueFrom,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-45E64ND3.js";

// src/app/services/site-content.service.ts
var FALLBACK_CONTENT = {
  email: "hello@tinytarapreschool.com",
  phone: "+91 XXXXX XXXXX",
  address: "Your Preschool Address, Patna, Bihar, India",
  school_days: "Monday - Friday",
  school_hours: "9:00 AM - 2:00 PM"
};
var SiteContentService = class _SiteContentService {
  constructor(http, platformId) {
    this.http = http;
    this.platformId = platformId;
  }
  http;
  platformId;
  apiUrl = "http://127.0.0.1:8000/api";
  content = signal(
    FALLBACK_CONTENT,
    ...ngDevMode ? [{ debugName: "content" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loaded = false;
  value() {
    return this.content();
  }
  async load() {
    if (this.loaded || !isPlatformBrowser(this.platformId)) {
      return;
    }
    this.loaded = true;
    try {
      const response = await firstValueFrom(this.http.get(`${this.apiUrl}/site-content`));
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
    }
  }
  static \u0275fac = function SiteContentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SiteContentService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SiteContentService, factory: _SiteContentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteContentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();

export {
  SiteContentService
};
