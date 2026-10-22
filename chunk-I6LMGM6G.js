import {
  SiteContentService
} from "./chunk-QZLDSCZI.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DN7BYG6D.js";
import {
  HttpClient
} from "./chunk-6QXTDYKH.js";
import "./chunk-UVVJPUY3.js";
import {
  Component,
  firstValueFrom,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-45E64ND3.js";

// src/app/pages/contact/contact.ts
function Contact_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 23);
    \u0275\u0275text(1, "Please enter your name.");
    \u0275\u0275elementEnd();
  }
}
function Contact_Conditional_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 23);
    \u0275\u0275text(1, "Please enter a valid 10 digit mobile number.");
    \u0275\u0275elementEnd();
  }
}
function Contact_Conditional_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 23);
    \u0275\u0275text(1, "Please enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function Contact_Conditional_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 23);
    \u0275\u0275text(1, "Please enter your child's name.");
    \u0275\u0275elementEnd();
  }
}
function Contact_Conditional_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 23);
    \u0275\u0275text(1, "Please select your child's age.");
    \u0275\u0275elementEnd();
  }
}
function Contact_Conditional_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.submitError);
  }
}
var Contact = class _Contact {
  constructor(fb) {
    this.fb = fb;
    this.enquiryForm = this.fb.group({
      parentName: ["", [Validators.required, Validators.minLength(2)]],
      phone: ["", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ["", [Validators.required, Validators.email]],
      childName: ["", [Validators.required, Validators.minLength(2)]],
      childAge: ["", Validators.required],
      message: [""]
    });
  }
  fb;
  siteContent = inject(SiteContentService);
  http = inject(HttpClient);
  apiUrl = "http://127.0.0.1:8000/api";
  submitted = false;
  sending = false;
  submitError = "";
  enquiryForm;
  ngOnInit() {
    void this.siteContent.load();
  }
  async submitForm() {
    this.submitted = true;
    this.submitError = "";
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
      alert("Thank you! Your enquiry has been submitted successfully. We will contact you soon.");
      this.enquiryForm.reset({ parentName: "", phone: "", email: "", childName: "", childAge: "", message: "" });
      this.submitted = false;
    } catch {
      this.submitError = "We could not send your enquiry right now. Please try again or call us.";
    } finally {
      this.sending = false;
    }
  }
  isInvalid(fieldName) {
    const field = this.enquiryForm.get(fieldName);
    return !!(field && field.invalid && (field.touched || this.submitted));
  }
  static \u0275fac = function Contact_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Contact)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Contact, selectors: [["app-contact"]], decls: 160, vars: 27, consts: [[1, "page-banner"], [1, "banner-content"], [1, "banner-icon"], [1, "contact-info-section"], [1, "section-heading"], [1, "contact-info-grid"], [1, "contact-info-card"], [1, "contact-icon"], [1, "contact-detail"], [3, "href"], [1, "contact-section"], [1, "contact-wrapper"], [1, "contact-content"], [1, "contact-features"], [1, "contact-feature"], [1, "feature-check"], [1, "contact-illustration"], [1, "form-card"], [1, "form-description"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "parentName"], ["id", "parentName", "type", "text", "formControlName", "parentName", "placeholder", "Enter your name"], [1, "error-message"], ["for", "phone"], ["id", "phone", "type", "tel", "formControlName", "phone", "placeholder", "10 digit mobile number"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "Enter your email"], ["for", "childName"], ["id", "childName", "type", "text", "formControlName", "childName", "placeholder", "Enter child's name"], ["for", "childAge"], ["id", "childAge", "formControlName", "childAge"], ["value", ""], ["value", "2-3"], ["value", "3-4"], ["value", "4-5"], ["value", "5-6"], ["for", "message"], ["id", "message", "rows", "4", "formControlName", "message", "placeholder", "Tell us anything you would like to know..."], ["type", "submit", 1, "submit-button", 3, "disabled"], [1, "visit-cta"], [1, "cta-icon"], [1, "cta-button", 3, "href"]], template: function Contact_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "\u{1F4DE}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Contact Tiny Tara");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "We'd love to hear from you and welcome your little one.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "section", 3)(9, "div", 4)(10, "span");
      \u0275\u0275text(11, "GET IN TOUCH");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "h2");
      \u0275\u0275text(13, " Let's Start A Beautiful ");
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15, "Journey Together");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "p");
      \u0275\u0275text(17, " Have questions about Tiny Tara Preschool or admissions? Our team would be happy to help you. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 5)(19, "div", 6)(20, "div", 7);
      \u0275\u0275text(21, "\u{1F4CD}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "h3");
      \u0275\u0275text(23, "Visit Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p");
      \u0275\u0275text(25, "Tiny Tara Preschool");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p", 8);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 6)(29, "div", 7);
      \u0275\u0275text(30, "\u{1F4DE}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "h3");
      \u0275\u0275text(32, "Call Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p");
      \u0275\u0275text(34, "Speak with our team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p", 8)(36, "a", 9);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 6)(39, "div", 7);
      \u0275\u0275text(40, "\u2709\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "h3");
      \u0275\u0275text(42, "Email Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p");
      \u0275\u0275text(44, "Send us your questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p", 8)(46, "a", 9);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 6)(49, "div", 7);
      \u0275\u0275text(50, "\u{1F552}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "h3");
      \u0275\u0275text(52, "School Hours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p");
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p", 8);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "section", 10)(58, "div", 11)(59, "div", 12)(60, "span");
      \u0275\u0275text(61, "ADMISSION ENQUIRY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "h2");
      \u0275\u0275text(63, " Tell Us About ");
      \u0275\u0275elementStart(64, "span");
      \u0275\u0275text(65, "Your Little Star");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "p");
      \u0275\u0275text(67, " Fill out the form and our Tiny Tara team will get in touch with you to answer your questions and guide you through the admission process. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 13)(69, "div", 14)(70, "span", 15);
      \u0275\u0275text(71, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div")(73, "h4");
      \u0275\u0275text(74, "Friendly Guidance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "p");
      \u0275\u0275text(76, "Our team will guide you through the admission process.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "div", 14)(78, "span", 15);
      \u0275\u0275text(79, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div")(81, "h4");
      \u0275\u0275text(82, "Quick Response");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "p");
      \u0275\u0275text(84, "We will respond to your enquiry as soon as possible.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "div", 14)(86, "span", 15);
      \u0275\u0275text(87, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div")(89, "h4");
      \u0275\u0275text(90, "School Visit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "p");
      \u0275\u0275text(92, "You can arrange a visit and explore Tiny Tara Preschool.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(93, "div", 16)(94, "span");
      \u0275\u0275text(95, "\u{1F308}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "span");
      \u0275\u0275text(97, "\u2B50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "span");
      \u0275\u0275text(99, "\u{1F9F8}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "span");
      \u0275\u0275text(101, "\u{1F388}");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 17)(103, "h3");
      \u0275\u0275text(104, "Admission Enquiry Form");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "p", 18);
      \u0275\u0275text(106, "Please share your details and we will contact you.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "form", 19);
      \u0275\u0275listener("ngSubmit", function Contact_Template_form_ngSubmit_107_listener() {
        return ctx.submitForm();
      });
      \u0275\u0275elementStart(108, "div", 20)(109, "label", 21);
      \u0275\u0275text(110, "Parent / Guardian Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(111, "input", 22);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(112, Contact_Conditional_112_Template, 2, 0, "small", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 20)(114, "label", 24);
      \u0275\u0275text(115, "Mobile Number *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(116, "input", 25);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(117, Contact_Conditional_117_Template, 2, 0, "small", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "div", 20)(119, "label", 26);
      \u0275\u0275text(120, "Email Address *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(121, "input", 27);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(122, Contact_Conditional_122_Template, 2, 0, "small", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 20)(124, "label", 28);
      \u0275\u0275text(125, "Child's Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(126, "input", 29);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(127, Contact_Conditional_127_Template, 2, 0, "small", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "div", 20)(129, "label", 30);
      \u0275\u0275text(130, "Child's Age *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "select", 31)(132, "option", 32);
      \u0275\u0275text(133, "Select age");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "option", 33);
      \u0275\u0275text(135, "Play Group (2 \u2013 3 Years)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "option", 34);
      \u0275\u0275text(137, "Nursery (3 \u2013 4 Years)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "option", 35);
      \u0275\u0275text(139, "LKG (4 \u2013 5 Years)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "option", 36);
      \u0275\u0275text(141, "UKG (5 \u2013 6 Years)");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(142, Contact_Conditional_142_Template, 2, 0, "small", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "div", 20)(144, "label", 37);
      \u0275\u0275text(145, "Message");
      \u0275\u0275elementEnd();
      \u0275\u0275element(146, "textarea", 38);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(147, Contact_Conditional_147_Template, 2, 1, "small", 23);
      \u0275\u0275elementStart(148, "button", 39);
      \u0275\u0275text(149);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(150, "section", 40)(151, "div")(152, "span", 41);
      \u0275\u0275text(153, "\u{1F3EB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "h2");
      \u0275\u0275text(155, "Come And Visit Tiny Tara");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "p");
      \u0275\u0275text(157, "See our learning environment and meet our friendly team.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "a", 42);
      \u0275\u0275text(159, "Call To Arrange A Visit");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(27);
      \u0275\u0275textInterpolate(ctx.siteContent.value().address);
      \u0275\u0275advance(9);
      \u0275\u0275property("href", "tel:" + ctx.siteContent.value().phone, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.siteContent.value().phone);
      \u0275\u0275advance(9);
      \u0275\u0275property("href", "mailto:" + ctx.siteContent.value().email, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.siteContent.value().email);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.siteContent.value().school_days);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.siteContent.value().school_hours);
      \u0275\u0275advance(51);
      \u0275\u0275property("formGroup", ctx.enquiryForm);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ctx.isInvalid("parentName"));
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("parentName") ? 112 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ctx.isInvalid("phone"));
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("phone") ? 117 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ctx.isInvalid("email"));
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("email") ? 122 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ctx.isInvalid("childName"));
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("childName") ? 127 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ctx.isInvalid("childAge"));
      \u0275\u0275control();
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.isInvalid("childAge") ? 142 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submitError ? 147 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.sending);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.sending ? "Sending\u2026" : "Send Admission Enquiry \u2728");
      \u0275\u0275advance(9);
      \u0275\u0275property("href", "tel:" + ctx.siteContent.value().phone, \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n.page-banner[_ngcontent-%COMP%] {\n  padding: 100px 20px;\n  text-align: center;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #f66f92,\n      #6c63ff);\n}\n.banner-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin-bottom: 10px;\n}\n.page-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: "Baloo 2", cursive;\n  font-size: 55px;\n}\n.page-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 19px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  max-width: 750px;\n  margin: 0 auto 60px;\n  text-align: center;\n}\n.section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #f66f92;\n  font-weight: 800;\n  letter-spacing: 2px;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  font-family: "Baloo 2", cursive;\n  font-size: 45px;\n  line-height: 1.2;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6c63ff;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.7;\n}\n.contact-info-section[_ngcontent-%COMP%] {\n  padding: 90px 8%;\n}\n.contact-info-grid[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 25px;\n}\n.contact-info-card[_ngcontent-%COMP%] {\n  padding: 35px 20px;\n  border-radius: 25px;\n  text-align: center;\n  background: white;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);\n  transition: 0.3s;\n}\n.contact-info-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n}\n.contact-icon[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-size: 50px;\n}\n.contact-info-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-family: "Baloo 2", cursive;\n  font-size: 25px;\n}\n.contact-info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  color: #777;\n  line-height: 1.6;\n}\n.contact-detail[_ngcontent-%COMP%] {\n  color: #f66f92 !important;\n  font-weight: 800;\n}\n.contact-section[_ngcontent-%COMP%] {\n  padding: 100px 8%;\n  background:\n    linear-gradient(\n      135deg,\n      #fff5f8,\n      #f2f0ff);\n}\n.contact-wrapper[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 70px;\n}\n.contact-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #f66f92;\n  font-weight: 800;\n  letter-spacing: 2px;\n}\n.contact-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  font-family: "Baloo 2", cursive;\n  font-size: 48px;\n  line-height: 1.2;\n}\n.contact-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6c63ff;\n}\n.contact-content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.8;\n}\n.contact-features[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.contact-feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n  margin-bottom: 22px;\n}\n.feature-check[_ngcontent-%COMP%] {\n  display: flex;\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: #f66f92;\n  color: white;\n  font-weight: bold;\n}\n.contact-feature[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-size: 18px;\n}\n.contact-feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  line-height: 1.6;\n}\n.contact-illustration[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  display: flex;\n  gap: 20px;\n  font-size: 40px;\n}\n.form-card[_ngcontent-%COMP%] {\n  padding: 45px;\n  border-radius: 30px;\n  background: white;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);\n}\n.form-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-family: "Baloo 2", cursive;\n  font-size: 32px;\n  color: #2f2f45;\n}\n.form-description[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  color: #777;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #333;\n  font-size: 14px;\n  font-weight: 800;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 14px 15px;\n  border: 2px solid #eeeeee;\n  border-radius: 12px;\n  outline: none;\n  font-family: inherit;\n  font-size: 15px;\n  transition: 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #6c63ff;\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.invalid[_ngcontent-%COMP%] {\n  border-color: #e74c3c !important;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  color: #e74c3c;\n  font-size: 13px;\n}\n.submit-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  border: none;\n  border-radius: 30px;\n  background:\n    linear-gradient(\n      135deg,\n      #f66f92,\n      #6c63ff);\n  color: white;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 800;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.submit-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 25px rgba(108, 99, 255, 0.3);\n}\n.visit-cta[_ngcontent-%COMP%] {\n  padding: 90px 20px;\n  text-align: center;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #f66f92,\n      #6c63ff);\n}\n.cta-icon[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  font-size: 55px;\n}\n.visit-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 15px;\n  font-family: "Baloo 2", cursive;\n  font-size: 45px;\n}\n.visit-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-size: 18px;\n}\n.cta-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 15px 30px;\n  border-radius: 30px;\n  background: white;\n  color: #f66f92;\n  text-decoration: none;\n  font-weight: 800;\n  transition: 0.3s;\n}\n.cta-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n@media (max-width: 1000px) {\n  .contact-info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .contact-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 50px;\n  }\n}\n@media (max-width: 700px) {\n  .page-banner[_ngcontent-%COMP%] {\n    padding: 70px 20px;\n  }\n  .page-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .contact-info-section[_ngcontent-%COMP%], \n   .contact-section[_ngcontent-%COMP%] {\n    padding: 70px 20px;\n  }\n  .contact-info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .contact-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .visit-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n  .form-card[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n  }\n  .contact-illustration[_ngcontent-%COMP%] {\n    font-size: 30px;\n    flex-wrap: wrap;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Contact, [{
    type: Component,
    args: [{ selector: "app-contact", standalone: true, imports: [ReactiveFormsModule], template: `<!-- PAGE BANNER -->

<section class="page-banner">
  <div class="banner-content">
    <div class="banner-icon">\u{1F4DE}</div>
    <h1>Contact Tiny Tara</h1>
    <p>We'd love to hear from you and welcome your little one.</p>
  </div>
</section>

<!-- CONTACT INFORMATION -->
<section class="contact-info-section">
  <div class="section-heading">
    <span>GET IN TOUCH</span>
    <h2>
      Let's Start A Beautiful
      <span>Journey Together</span>
    </h2>
    <p>
      Have questions about Tiny Tara Preschool or admissions?
      Our team would be happy to help you.
    </p>
  </div>

  <div class="contact-info-grid">
    <div class="contact-info-card">
      <div class="contact-icon">\u{1F4CD}</div>
      <h3>Visit Us</h3>
      <p>Tiny Tara Preschool</p>
      <p class="contact-detail">{{ siteContent.value().address }}</p>
    </div>

    <div class="contact-info-card">
      <div class="contact-icon">\u{1F4DE}</div>
      <h3>Call Us</h3>
      <p>Speak with our team</p>
      <p class="contact-detail"><a [href]="'tel:' + siteContent.value().phone">{{ siteContent.value().phone }}</a></p>
    </div>

    <div class="contact-info-card">
      <div class="contact-icon">\u2709\uFE0F</div>
      <h3>Email Us</h3>
      <p>Send us your questions</p>
      <p class="contact-detail"><a [href]="'mailto:' + siteContent.value().email">{{ siteContent.value().email }}</a></p>
    </div>

    <div class="contact-info-card">
      <div class="contact-icon">\u{1F552}</div>
      <h3>School Hours</h3>
      <p>{{ siteContent.value().school_days }}</p>
      <p class="contact-detail">{{ siteContent.value().school_hours }}</p>
    </div>
  </div>
</section>

<!-- CONTACT FORM -->
<section class="contact-section">
  <div class="contact-wrapper">
    <div class="contact-content">
      <span>ADMISSION ENQUIRY</span>
      <h2>
        Tell Us About
        <span>Your Little Star</span>
      </h2>
      <p>
        Fill out the form and our Tiny Tara team will get in touch with you to answer your questions and guide you through the admission process.
      </p>

      <div class="contact-features">
        <div class="contact-feature">
          <span class="feature-check">\u2713</span>
          <div>
            <h4>Friendly Guidance</h4>
            <p>Our team will guide you through the admission process.</p>
          </div>
        </div>

        <div class="contact-feature">
          <span class="feature-check">\u2713</span>
          <div>
            <h4>Quick Response</h4>
            <p>We will respond to your enquiry as soon as possible.</p>
          </div>
        </div>

        <div class="contact-feature">
          <span class="feature-check">\u2713</span>
          <div>
            <h4>School Visit</h4>
            <p>You can arrange a visit and explore Tiny Tara Preschool.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-illustration">
      <span>\u{1F308}</span>
      <span>\u2B50</span>
      <span>\u{1F9F8}</span>
      <span>\u{1F388}</span>
    </div>

    <div class="form-card">
      <h3>Admission Enquiry Form</h3>
      <p class="form-description">Please share your details and we will contact you.</p>

      <form [formGroup]="enquiryForm" (ngSubmit)="submitForm()">
        <div class="form-group">
          <label for="parentName">Parent / Guardian Name *</label>
          <input
            id="parentName"
            type="text"
            formControlName="parentName"
            placeholder="Enter your name"
            [class.invalid]="isInvalid('parentName')"
          >
          @if (isInvalid('parentName')) {
            <small class="error-message">Please enter your name.</small>
          }
        </div>

        <div class="form-group">
          <label for="phone">Mobile Number *</label>
          <input
            id="phone"
            type="tel"
            formControlName="phone"
            placeholder="10 digit mobile number"
            [class.invalid]="isInvalid('phone')"
          >
          @if (isInvalid('phone')) {
            <small class="error-message">Please enter a valid 10 digit mobile number.</small>
          }
        </div>

        <div class="form-group">
          <label for="email">Email Address *</label>
          <input
            id="email"
            type="email"
            formControlName="email"
            placeholder="Enter your email"
            [class.invalid]="isInvalid('email')"
          >
          @if (isInvalid('email')) {
            <small class="error-message">Please enter a valid email address.</small>
          }
        </div>

        <div class="form-group">
          <label for="childName">Child's Name *</label>
          <input
            id="childName"
            type="text"
            formControlName="childName"
            placeholder="Enter child's name"
            [class.invalid]="isInvalid('childName')"
          >
          @if (isInvalid('childName')) {
            <small class="error-message">Please enter your child's name.</small>
          }
        </div>

        <div class="form-group">
          <label for="childAge">Child's Age *</label>
          <select id="childAge" formControlName="childAge" [class.invalid]="isInvalid('childAge')">
            <option value="">Select age</option>
            <option value="2-3">Play Group (2 \u2013 3 Years)</option>
            <option value="3-4">Nursery (3 \u2013 4 Years)</option>
            <option value="4-5">LKG (4 \u2013 5 Years)</option>
            <option value="5-6">UKG (5 \u2013 6 Years)</option>
          </select>
          @if (isInvalid('childAge')) {
            <small class="error-message">Please select your child's age.</small>
          }
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            rows="4"
            formControlName="message"
            placeholder="Tell us anything you would like to know..."
          ></textarea>
        </div>

        @if (submitError) {
          <small class="error-message">{{ submitError }}</small>
        }

        <button type="submit" class="submit-button" [disabled]="sending">{{ sending ? 'Sending\u2026' : 'Send Admission Enquiry \u2728' }}</button>
      </form>
    </div>
  </div>
</section>

<!-- FINAL CTA -->
<section class="visit-cta">
  <div>
    <span class="cta-icon">\u{1F3EB}</span>
    <h2>Come And Visit Tiny Tara</h2>
    <p>See our learning environment and meet our friendly team.</p>
    <a [href]="'tel:' + siteContent.value().phone" class="cta-button">Call To Arrange A Visit</a>
  </div>
</section>
`, styles: ['/* src/app/pages/contact/contact.css */\n.page-banner {\n  padding: 100px 20px;\n  text-align: center;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #f66f92,\n      #6c63ff);\n}\n.banner-icon {\n  font-size: 60px;\n  margin-bottom: 10px;\n}\n.page-banner h1 {\n  margin: 0;\n  font-family: "Baloo 2", cursive;\n  font-size: 55px;\n}\n.page-banner p {\n  margin-top: 10px;\n  font-size: 19px;\n}\n.section-heading {\n  max-width: 750px;\n  margin: 0 auto 60px;\n  text-align: center;\n}\n.section-heading > span {\n  color: #f66f92;\n  font-weight: 800;\n  letter-spacing: 2px;\n}\n.section-heading h2 {\n  margin: 15px 0;\n  font-family: "Baloo 2", cursive;\n  font-size: 45px;\n  line-height: 1.2;\n}\n.section-heading h2 span {\n  color: #6c63ff;\n}\n.section-heading p {\n  color: #666;\n  line-height: 1.7;\n}\n.contact-info-section {\n  padding: 90px 8%;\n}\n.contact-info-grid {\n  max-width: 1200px;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 25px;\n}\n.contact-info-card {\n  padding: 35px 20px;\n  border-radius: 25px;\n  text-align: center;\n  background: white;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);\n  transition: 0.3s;\n}\n.contact-info-card:hover {\n  transform: translateY(-8px);\n}\n.contact-icon {\n  margin-bottom: 15px;\n  font-size: 50px;\n}\n.contact-info-card h3 {\n  margin-bottom: 8px;\n  font-family: "Baloo 2", cursive;\n  font-size: 25px;\n}\n.contact-info-card p {\n  margin: 5px 0;\n  color: #777;\n  line-height: 1.6;\n}\n.contact-detail {\n  color: #f66f92 !important;\n  font-weight: 800;\n}\n.contact-section {\n  padding: 100px 8%;\n  background:\n    linear-gradient(\n      135deg,\n      #fff5f8,\n      #f2f0ff);\n}\n.contact-wrapper {\n  max-width: 1200px;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 70px;\n}\n.contact-content > span {\n  color: #f66f92;\n  font-weight: 800;\n  letter-spacing: 2px;\n}\n.contact-content h2 {\n  margin: 15px 0;\n  font-family: "Baloo 2", cursive;\n  font-size: 48px;\n  line-height: 1.2;\n}\n.contact-content h2 span {\n  color: #6c63ff;\n}\n.contact-content > p {\n  color: #666;\n  line-height: 1.8;\n}\n.contact-features {\n  margin-top: 30px;\n}\n.contact-feature {\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n  margin-bottom: 22px;\n}\n.feature-check {\n  display: flex;\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: #f66f92;\n  color: white;\n  font-weight: bold;\n}\n.contact-feature h4 {\n  margin: 0 0 5px;\n  font-size: 18px;\n}\n.contact-feature p {\n  margin: 0;\n  color: #666;\n  line-height: 1.6;\n}\n.contact-illustration {\n  margin-top: 35px;\n  display: flex;\n  gap: 20px;\n  font-size: 40px;\n}\n.form-card {\n  padding: 45px;\n  border-radius: 30px;\n  background: white;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);\n}\n.form-card h3 {\n  margin: 0 0 8px;\n  font-family: "Baloo 2", cursive;\n  font-size: 32px;\n  color: #2f2f45;\n}\n.form-description {\n  margin-bottom: 30px;\n  color: #777;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 8px;\n  color: #333;\n  font-size: 14px;\n  font-weight: 800;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 14px 15px;\n  border: 2px solid #eeeeee;\n  border-radius: 12px;\n  outline: none;\n  font-family: inherit;\n  font-size: 15px;\n  transition: 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  border-color: #6c63ff;\n}\n.form-group textarea {\n  resize: vertical;\n}\n.invalid {\n  border-color: #e74c3c !important;\n}\n.error-message {\n  display: block;\n  margin-top: 6px;\n  color: #e74c3c;\n  font-size: 13px;\n}\n.submit-button {\n  width: 100%;\n  padding: 16px;\n  border: none;\n  border-radius: 30px;\n  background:\n    linear-gradient(\n      135deg,\n      #f66f92,\n      #6c63ff);\n  color: white;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 800;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.submit-button:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 25px rgba(108, 99, 255, 0.3);\n}\n.visit-cta {\n  padding: 90px 20px;\n  text-align: center;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #f66f92,\n      #6c63ff);\n}\n.cta-icon {\n  display: block;\n  margin-bottom: 10px;\n  font-size: 55px;\n}\n.visit-cta h2 {\n  margin: 0 0 15px;\n  font-family: "Baloo 2", cursive;\n  font-size: 45px;\n}\n.visit-cta p {\n  margin-bottom: 30px;\n  font-size: 18px;\n}\n.cta-button {\n  display: inline-block;\n  padding: 15px 30px;\n  border-radius: 30px;\n  background: white;\n  color: #f66f92;\n  text-decoration: none;\n  font-weight: 800;\n  transition: 0.3s;\n}\n.cta-button:hover {\n  transform: translateY(-3px);\n}\n@media (max-width: 1000px) {\n  .contact-info-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .contact-wrapper {\n    grid-template-columns: 1fr;\n    gap: 50px;\n  }\n}\n@media (max-width: 700px) {\n  .page-banner {\n    padding: 70px 20px;\n  }\n  .page-banner h1 {\n    font-size: 40px;\n  }\n  .contact-info-section,\n  .contact-section {\n    padding: 70px 20px;\n  }\n  .contact-info-grid {\n    grid-template-columns: 1fr;\n  }\n  .section-heading h2,\n  .contact-content h2,\n  .visit-cta h2 {\n    font-size: 35px;\n  }\n  .form-card {\n    padding: 30px 20px;\n  }\n  .contact-illustration {\n    font-size: 30px;\n    flex-wrap: wrap;\n  }\n}\n'] }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Contact, { className: "Contact", filePath: "src/app/pages/contact/contact.ts", lineNumber: 15 });
})();
export {
  Contact
};
