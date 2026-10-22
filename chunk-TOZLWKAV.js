import {
  Router,
  RouterLink
} from "./chunk-DZ7GDGF3.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinLengthValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DN7BYG6D.js";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams
} from "./chunk-6QXTDYKH.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  TitleCasePipe
} from "./chunk-UVVJPUY3.js";
import {
  Component,
  __objRest,
  __spreadProps,
  __spreadValues,
  computed,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵarrowFunction,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtextInterpolate5,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-45E64ND3.js";

// src/app/pages/dashboard/dashboard.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var _c1 = () => [];
var _forTrack0 = ($index, $item) => $item.view;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.id ?? $item.student_id;
var arrowFn0 = (ctx, view) => (item) => {
  const fee_r54 = \u0275\u0275restoreView(view).$implicit;
  return \u0275\u0275resetView(item.id === fee_r54.class_option_id);
};
var arrowFn1 = (ctx, view) => (item) => {
  const fee_r55 = \u0275\u0275restoreView(view).$implicit;
  return \u0275\u0275resetView(item.id === fee_r55.class_option_id);
};
var arrowFn2 = (ctx, view) => (item) => {
  const fee_r56 = \u0275\u0275restoreView(view).$implicit;
  return \u0275\u0275resetView(item.id === fee_r56.class_option_id);
};
var _forTrack3 = ($index, $item) => $item.attendance_date;
var _forTrack4 = ($index, $item) => $item.academic_year;
var _forTrack5 = ($index, $item) => $item.year + "-" + $item.month_number;
var _forTrack6 = ($index, $item) => $item.value;
var _forTrack7 = ($index, $item) => $item.student_id;
function Dashboard_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function Dashboard_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 0)(1, "section", 2)(2, "div", 3)(3, "span", 4);
    \u0275\u0275text(4, "TT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "span", 5);
    \u0275\u0275text(7, "Tiny Tara Preschool");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h1");
    \u0275\u0275text(9, "Studio dashboard");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "p", 6);
    \u0275\u0275text(11, "A quiet control room for the pages, contact details, and gallery your families see.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "form", 7);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_0_Template_form_ngSubmit_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.login());
    });
    \u0275\u0275elementStart(13, "label");
    \u0275\u0275text(14, " Email ");
    \u0275\u0275elementStart(15, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_0_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.loginForm.email, $event) || (ctx_r1.loginForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label");
    \u0275\u0275text(17, " Password ");
    \u0275\u0275elementStart(18, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_0_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.loginForm.password, $event) || (ctx_r1.loginForm.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 10);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, Dashboard_Conditional_0_Conditional_21_Template, 2, 1, "p", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "aside", 12);
    \u0275\u0275element(23, "div", 13)(24, "div", 14);
    \u0275\u0275elementStart(25, "span", 15);
    \u0275\u0275text(26, "Admin workspace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "h2");
    \u0275\u0275text(28, "Make every little detail feel cared for.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, "Shape what families discover before they ever walk through the door.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 16);
    \u0275\u0275text(32, "Content is published section by section, with a clear preview path for every page.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.loginForm.email);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.loginForm.password);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? "Signing in\u2026" : "Enter dashboard", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.error() ? 21 : -1);
  }
}
function Dashboard_Conditional_1_For_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("title", ctx_r1.tabUnreadCount(tab_r5.view) + " unread");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F514} ", ctx_r1.tabUnreadCount(tab_r5.view));
  }
}
function Dashboard_Conditional_1_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_For_15_Template_button_click_0_listener() {
      const tab_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo(tab_r5.view));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, Dashboard_Conditional_1_For_15_Conditional_5_Template, 2, 2, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const \u0275$index_84_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.activeView() === tab_r5.view);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((\u0275$index_84_r6 + 1).toString().padStart(2, "0"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r5.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tabUnreadCount(tab_r5.view) > 0 ? 5 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function Dashboard_Conditional_1_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.notice());
  }
}
function Dashboard_Conditional_1_Conditional_46_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_46_For_4_Template_button_click_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateTo(item_r8.view));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r8.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.count);
  }
}
function Dashboard_Conditional_1_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 31)(1, "strong");
    \u0275\u0275text(2, "\u26A0 Needs attention");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, Dashboard_Conditional_1_Conditional_46_For_4_Template, 4, 2, "button", 36, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.pendingItems());
  }
}
function Dashboard_Conditional_1_Conditional_47_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No classes have been assigned to your account. Please contact the administrator.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_47_Conditional_7_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classOption_r10 = ctx.$implicit;
    \u0275\u0275property("value", classOption_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classOption_r10.name);
  }
}
function Dashboard_Conditional_1_Conditional_47_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "Assigned class");
    \u0275\u0275elementStart(2, "select", 40);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_47_Conditional_7_Template_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedTeacherClassId.set($event));
    });
    \u0275\u0275elementStart(3, "option", 41);
    \u0275\u0275text(4, "Select a class");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, Dashboard_Conditional_1_Conditional_47_Conditional_7_For_6_Template, 2, 2, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 43)(8, "button", 44);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_47_Conditional_7_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.enterTeacherClass());
    });
    \u0275\u0275text(9, "Enter class");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.selectedTeacherClassId());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.teacherClasses());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.selectedTeacherClassId());
  }
}
function Dashboard_Conditional_1_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 32)(1, "div", 38)(2, "span", 39);
    \u0275\u0275text(3, "Teacher workspace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Select a class");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, Dashboard_Conditional_1_Conditional_47_Conditional_6_Template, 2, 0, "p")(7, Dashboard_Conditional_1_Conditional_47_Conditional_7_Template, 10, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!ctx_r1.teacherClasses().length ? 6 : 7);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 45)(1, "div")(2, "span", 39);
    \u0275\u0275text(3, "Selected class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.changeTeacherClass());
    });
    \u0275\u0275text(7, "Change class");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedTeacherClass()?.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 45)(1, "div")(2, "span", 39);
    \u0275\u0275text(3, "Teacher workspace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Today\u2019s classroom roll call.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "People and records are read-only. Attendance is the only editable area.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 52);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateTo("attendance"));
    });
    \u0275\u0275text(9, "Open attendance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "section", 53)(11, "article", 54)(12, "span");
    \u0275\u0275text(13, "Teachers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "article", 55)(17, "span");
    \u0275\u0275text(18, "Clerks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "article", 56)(22, "span");
    \u0275\u0275text(23, "Security");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "article", 55)(27, "span");
    \u0275\u0275text(28, "Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r1.roleCounts()["teacher"] || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.roleCounts()["clerk"] || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.roleCounts()["security"] || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.roleCounts()["student"] || 0);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openNoteForm());
    });
    \u0275\u0275text(1, "Add note");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_9_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classOption_r16 = ctx.$implicit;
    \u0275\u0275property("value", classOption_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classOption_r16.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 76);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_9_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.noteClassFilter.set($event);
      ctx_r1.loadNoteStudents();
      return \u0275\u0275resetView(ctx_r1.loadNotes());
    });
    \u0275\u0275elementStart(1, "option", 41);
    \u0275\u0275text(2, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_9_For_4_Template, 2, 2, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", ctx_r1.noteClassFilter());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.classOptions());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_2_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r17 = ctx.$implicit;
    \u0275\u0275property("value", student_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", student_r17.first_name, " ", student_r17.last_name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_2_For_35_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_2_For_35_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const note_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editNote(note_r19));
    });
    \u0275\u0275text(1, "\u270E");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_2_For_35_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_2_For_35_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const note_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteNote(note_r19));
    });
    \u0275\u0275text(1, "\u{1F5D1}");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_2_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 72)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 77);
    \u0275\u0275conditionalCreate(12, Dashboard_Conditional_1_Conditional_48_Conditional_2_For_35_Conditional_12_Template, 2, 0, "button", 78);
    \u0275\u0275conditionalCreate(13, Dashboard_Conditional_1_Conditional_48_Conditional_2_For_35_Conditional_13_Template, 2, 0, "button", 79);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(note_r19.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", note_r19.class_name, " \xB7 ", note_r19.category, " \xB7 ", note_r19.visibility === "individual" ? note_r19.student_name : "Entire class");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(note_r19.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(10, 9, note_r19.created_at, "mediumDate"), " ", note_r19.due_date ? "\xB7 Due " + note_r19.due_date : "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.can("notes", "update") ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can("notes", "delete") ? 13 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_2_ForEmpty_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, "No notes match these filters.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classOption_r22 = ctx.$implicit;
    \u0275\u0275property("value", classOption_r22.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classOption_r22.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_Conditional_40_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r24 = ctx.$implicit;
    \u0275\u0275property("value", student_r24.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", student_r24.first_name, " ", student_r24.last_name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "Student");
    \u0275\u0275elementStart(2, "select", 93);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_Conditional_40_Template_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.noteForm.student_id, $event) || (ctx_r1.noteForm.student_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(3, "option", 41);
    \u0275\u0275text(4, "Select student");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_Conditional_40_For_6_Template, 2, 3, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.noteForm.student_id);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.noteStudents());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "form", 82);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveNote());
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "School notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "label");
    \u0275\u0275text(9, "Title");
    \u0275\u0275elementStart(10, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.noteForm.title, $event) || (ctx_r1.noteForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 84)(12, "label");
    \u0275\u0275text(13, "Class");
    \u0275\u0275elementStart(14, "select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.noteForm.class_option_id, $event) || (ctx_r1.noteForm.class_option_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_Template_select_ngModelChange_14_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.loadNoteStudents());
    });
    \u0275\u0275repeaterCreate(15, Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_For_16_Template, 2, 2, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "label");
    \u0275\u0275text(18, "Category");
    \u0275\u0275elementStart(19, "select", 86);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.noteForm.category, $event) || (ctx_r1.noteForm.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 62);
    \u0275\u0275text(21, "Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 63);
    \u0275\u0275text(23, "Class task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 64);
    \u0275\u0275text(25, "Homework");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 65);
    \u0275\u0275text(27, "Announcement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 66);
    \u0275\u0275text(29, "General");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 67);
    \u0275\u0275text(31, "Other");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 84)(33, "label");
    \u0275\u0275text(34, "Audience");
    \u0275\u0275elementStart(35, "select", 87);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_Template_select_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.noteForm.visibility, $event) || (ctx_r1.noteForm.visibility = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(36, "option", 88);
    \u0275\u0275text(37, "Entire class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 89);
    \u0275\u0275text(39, "Individual student");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(40, Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_Conditional_40_Template, 7, 1, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "label");
    \u0275\u0275text(42, "Content");
    \u0275\u0275elementStart(43, "textarea", 90);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_Template_textarea_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.noteForm.content, $event) || (ctx_r1.noteForm.content = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "label");
    \u0275\u0275text(45, "Due date");
    \u0275\u0275elementStart(46, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.noteForm.due_date, $event) || (ctx_r1.noteForm.due_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 43)(48, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.noteFormOpen.set(false));
    });
    \u0275\u0275text(49, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 92);
    \u0275\u0275text(51, "Save note");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.editingNoteId() ? "Edit note" : "Add note");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.noteForm.title);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.noteForm.class_option_id);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.classOptions());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.noteForm.category);
    \u0275\u0275control();
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.noteForm.visibility);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.noteForm.visibility === "individual" ? 40 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.noteForm.content);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.noteForm.due_date);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading() || !ctx_r1.can(ctx_r1.editingNoteId() ? "notes" : "notes", ctx_r1.editingNoteId() ? "update" : "create"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 47)(1, "div", 57)(2, "div")(3, "span", 39);
    \u0275\u0275text(4, "Teacher notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Class notes");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_7_Template, 2, 0, "button", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 59);
    \u0275\u0275conditionalCreate(9, Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_9_Template, 5, 1, "select", 60);
    \u0275\u0275elementStart(10, "select", 61);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_2_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.noteCategoryFilter.set($event);
      return \u0275\u0275resetView(ctx_r1.loadNotes());
    });
    \u0275\u0275elementStart(11, "option", 41);
    \u0275\u0275text(12, "All categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 62);
    \u0275\u0275text(14, "Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 63);
    \u0275\u0275text(16, "Class task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 64);
    \u0275\u0275text(18, "Homework");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 65);
    \u0275\u0275text(20, "Announcement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 66);
    \u0275\u0275text(22, "General");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 67);
    \u0275\u0275text(24, "Other");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(25, "select", 68);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_2_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.noteStudentFilter.set($event);
      return \u0275\u0275resetView(ctx_r1.loadNotes());
    });
    \u0275\u0275elementStart(26, "option", 41);
    \u0275\u0275text(27, "All students");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(28, Dashboard_Conditional_1_Conditional_48_Conditional_2_For_29_Template, 2, 3, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(30, "input", 69);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_2_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.noteDateFilter.set($event);
      return \u0275\u0275resetView(ctx_r1.loadNotes());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(31, "button", 70);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_2_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.noteCategoryFilter.set("");
      ctx_r1.noteStudentFilter.set("");
      ctx_r1.noteDateFilter.set("");
      return \u0275\u0275resetView(ctx_r1.loadNotes());
    });
    \u0275\u0275text(32, "Clear filters");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 71);
    \u0275\u0275repeaterCreate(34, Dashboard_Conditional_1_Conditional_48_Conditional_2_For_35_Template, 14, 12, "article", 72, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_2_ForEmpty_36_Template, 2, 0, "div", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(37, Dashboard_Conditional_1_Conditional_48_Conditional_2_Conditional_37_Template, 52, 9, "div", 74);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.can("notes", "create") ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isTeacher() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.noteCategoryFilter());
    \u0275\u0275control();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngModel", ctx_r1.noteStudentFilter());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.noteStudents());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.noteDateFilter());
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.notes());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.noteFormOpen() ? 37 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_3_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const teacher_r26 = ctx.$implicit;
    \u0275\u0275property("value", teacher_r26.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", teacher_r26.name, " \xB7 ", teacher_r26.staff_id);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_3_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 96)(1, "input", 99);
    \u0275\u0275listener("change", function Dashboard_Conditional_1_Conditional_48_Conditional_3_For_17_Template_input_change_1_listener($event) {
      const classOption_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleClassAccess(classOption_r28.id, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const classOption_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.classAccessClassIds().includes(classOption_r28.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(classOption_r28.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_3_ForEmpty_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, "No active classes are available.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_3_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classOption_r29 = ctx.$implicit;
    \u0275\u0275property("value", classOption_r29.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classOption_r29.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_3_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const teacher_r30 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(teacher_r30.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(teacher_r30.staff_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(teacher_r30.email);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_3_ForEmpty_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, "No teachers are assigned to this class.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 46)(1, "form", 94);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_3_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveClassAccess());
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "Teacher permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Assign classes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "label");
    \u0275\u0275text(9, "Teacher");
    \u0275\u0275elementStart(10, "select", 95);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_3_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadClassAccess($event));
    });
    \u0275\u0275elementStart(11, "option", 41);
    \u0275\u0275text(12, "Select a teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, Dashboard_Conditional_1_Conditional_48_Conditional_3_For_14_Template, 2, 3, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 71);
    \u0275\u0275repeaterCreate(16, Dashboard_Conditional_1_Conditional_48_Conditional_3_For_17_Template, 4, 2, "label", 96, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_3_ForEmpty_18_Template, 2, 0, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 43)(20, "button", 92);
    \u0275\u0275text(21, "Save class access");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 48)(23, "div", 57)(24, "div")(25, "span", 39);
    \u0275\u0275text(26, "Access audit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "h3");
    \u0275\u0275text(28, "Teachers assigned to a class");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "label");
    \u0275\u0275text(30, "Class");
    \u0275\u0275elementStart(31, "select", 97);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_3_Template_select_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadClassTeachers($event));
    });
    \u0275\u0275elementStart(32, "option", 41);
    \u0275\u0275text(33, "Select a class");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(34, Dashboard_Conditional_1_Conditional_48_Conditional_3_For_35_Template, 2, 2, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 71);
    \u0275\u0275repeaterCreate(37, Dashboard_Conditional_1_Conditional_48_Conditional_3_For_38_Template, 7, 3, "div", 98, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_3_ForEmpty_39_Template, 2, 0, "div", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngModel", ctx_r1.classAccessTeacherId());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.teacherAccounts());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.classOptions());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading() || !ctx_r1.classAccessTeacherId());
    \u0275\u0275advance(11);
    \u0275\u0275property("ngModel", ctx_r1.classAccessAuditClassId());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.classOptions());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.classAccessTeachers());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_4_For_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 77)(1, "button", 102);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_4_For_12_Conditional_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r31);
      const holiday_r32 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editHoliday(holiday_r32));
    });
    \u0275\u0275text(2, "\u270E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 103);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_4_For_12_Conditional_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r31);
      const holiday_r32 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteHoliday(holiday_r32));
    });
    \u0275\u0275text(4, "\u{1F5D1}");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_4_For_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_4_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, Dashboard_Conditional_1_Conditional_48_Conditional_4_For_12_Conditional_5_Template, 5, 0, "span", 77)(6, Dashboard_Conditional_1_Conditional_48_Conditional_4_For_12_Conditional_6_Template, 1, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const holiday_r32 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(holiday_r32.holiday_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(holiday_r32.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canManageHolidays() ? 5 : 6);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_4_ForEmpty_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, "No holidays added.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_4_Conditional_14_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_4_Conditional_14_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.cancelHolidayEdit());
    });
    \u0275\u0275text(1, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_4_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 94);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_4_Conditional_14_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.addHoliday());
    });
    \u0275\u0275elementStart(1, "div", 57)(2, "div")(3, "span", 39);
    \u0275\u0275text(4, "School calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "label");
    \u0275\u0275text(8, "Date");
    \u0275\u0275elementStart(9, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_4_Conditional_14_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.holidayForm.holiday_date, $event) || (ctx_r1.holidayForm.holiday_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label");
    \u0275\u0275text(11, "Holiday name");
    \u0275\u0275elementStart(12, "input", 105);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_4_Conditional_14_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.holidayForm.name, $event) || (ctx_r1.holidayForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 43);
    \u0275\u0275conditionalCreate(14, Dashboard_Conditional_1_Conditional_48_Conditional_4_Conditional_14_Conditional_14_Template, 2, 0, "button", 106);
    \u0275\u0275elementStart(15, "button", 92);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.editingHolidayId() ? "Edit holiday" : "Add holiday");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.holidayForm.holiday_date);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.holidayForm.name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.editingHolidayId() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editingHolidayId() ? "Update holiday" : "Add holiday");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_4_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 38)(1, "span", 39);
    \u0275\u0275text(2, "Teacher view");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Calendar details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "School holidays are read-only for teachers.");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 46)(1, "div", 48)(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "School calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Upcoming holidays");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 100);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 71);
    \u0275\u0275repeaterCreate(11, Dashboard_Conditional_1_Conditional_48_Conditional_4_For_12_Template, 7, 3, "div", 98, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_4_ForEmpty_13_Template, 2, 0, "div", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, Dashboard_Conditional_1_Conditional_48_Conditional_4_Conditional_14_Template, 17, 6, "form", 101)(15, Dashboard_Conditional_1_Conditional_48_Conditional_4_Conditional_15_Template, 7, 0, "aside", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r1.holidays().length, " dates");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.holidays());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.canManageHolidays() ? 14 : 15);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_5_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classOption_r36 = ctx.$implicit;
    \u0275\u0275property("value", classOption_r36.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classOption_r36.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_5_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r37 = ctx.$implicit;
    \u0275\u0275property("value", month_r37);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(month_r37);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_5_For_76_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_5_For_76_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const fee_r39 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.downloadTuitionSlip(fee_r39));
    });
    \u0275\u0275text(1, "PDF slip");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_5_For_76_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_5_For_76_Conditional_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r40);
      const fee_r39 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openTuitionFormForStudent(fee_r39));
    });
    \u0275\u0275text(1, "Record deposit");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_5_For_76_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_5_For_76_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r41);
      const fee_r39 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openTuitionBalancePayment(fee_r39));
    });
    \u0275\u0275text(1, "Collect balance");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_5_For_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275conditionalCreate(31, Dashboard_Conditional_1_Conditional_48_Conditional_5_For_76_Conditional_31_Template, 2, 0, "button", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td");
    \u0275\u0275conditionalCreate(33, Dashboard_Conditional_1_Conditional_48_Conditional_5_For_76_Conditional_33_Template, 2, 0, "button", 115)(34, Dashboard_Conditional_1_Conditional_48_Conditional_5_For_76_Conditional_34_Template, 2, 0, "button", 115);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fee_r39 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(fee_r39.student_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", fee_r39.student_code, " | ", fee_r39.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", fee_r39.class_name, "", fee_r39.section_name ? " (" + fee_r39.section_name + ")" : "", " | ", fee_r39.parent_mobile);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fee_r39.status === "not_recorded" ? "Not recorded" : fee_r39.status === "partially_paid" ? "Partially paid" : "Paid");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", fee_r39.fee_month, "/", fee_r39.fee_year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 21, fee_r39.assessed_amount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 24, fee_r39.discount_amount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 27, fee_r39.adjustment_amount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 30, fee_r39.amount_due, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 33, fee_r39.amount_paid, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", +fee_r39.balance_due > 0 ? "#c62828" : null)("font-weight", +fee_r39.balance_due > 0 ? "900" : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 36, fee_r39.balance_due, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(fee_r39.id ? 31 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(fee_r39.status === "not_recorded" ? 33 : +fee_r39.balance_due > 0 ? 34 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_5_ForEmpty_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 116)(2, "div", 73);
    \u0275\u0275text(3, "No enrolled students match these filters.");
    \u0275\u0275elementEnd()()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114)(1, "button", 117);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_78_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changeTuitionPage(ctx_r1.tuitionPage() - 1));
    });
    \u0275\u0275text(2, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 117);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_78_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changeTuitionPage(ctx_r1.tuitionPage() + 1));
    });
    \u0275\u0275text(6, "Next");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.tuitionPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("Page ", ctx_r1.tuitionReport().page, " of ", ctx_r1.tuitionReport().total_pages, " \xB7 ", ctx_r1.tuitionReport().total, " records");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.tuitionPage() === ctx_r1.tuitionReport().total_pages);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_79_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tuitionBalancePaymentError());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_79_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.tuitionBalancePaymentTarget.set(null));
    });
    \u0275\u0275elementStart(1, "form", 119);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_79_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.collectTuitionBalance());
    })("click", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_79_Template_form_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "Outstanding balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Collect balance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_79_Conditional_8_Template, 2, 1, "p", 120);
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 84)(15, "label");
    \u0275\u0275text(16, "Payment amount");
    \u0275\u0275elementStart(17, "input", 121);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_79_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionBalancePaymentForm.amount, $event) || (ctx_r1.tuitionBalancePaymentForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label");
    \u0275\u0275text(19, "Payment date");
    \u0275\u0275elementStart(20, "input", 122);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_79_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionBalancePaymentForm.payment_date, $event) || (ctx_r1.tuitionBalancePaymentForm.payment_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 84)(22, "label");
    \u0275\u0275text(23, "Method");
    \u0275\u0275elementStart(24, "select", 123);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_79_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionBalancePaymentForm.payment_method, $event) || (ctx_r1.tuitionBalancePaymentForm.payment_method = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(25, "option", 124);
    \u0275\u0275text(26, "Cash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 125);
    \u0275\u0275text(28, "UPI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 126);
    \u0275\u0275text(30, "Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 127);
    \u0275\u0275text(32, "Bank transfer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 128);
    \u0275\u0275text(34, "Cheque");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "label");
    \u0275\u0275text(36, "Reference");
    \u0275\u0275elementStart(37, "input", 129);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_79_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionBalancePaymentForm.payment_reference, $event) || (ctx_r1.tuitionBalancePaymentForm.payment_reference = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "label");
    \u0275\u0275text(39, "Note");
    \u0275\u0275elementStart(40, "textarea", 130);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_79_Template_textarea_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionBalancePaymentForm.note, $event) || (ctx_r1.tuitionBalancePaymentForm.note = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 43)(42, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_79_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.tuitionBalancePaymentTarget.set(null));
    });
    \u0275\u0275text(43, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 92);
    \u0275\u0275text(45, "Save payment");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const fee_r44 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.tuitionBalancePaymentError() ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", fee_r44.student_name, " \xB7 ", fee_r44.fee_month, "/", fee_r44.fee_year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Remaining balance: ", \u0275\u0275pipeBind2(13, 12, fee_r44.balance_due, "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionBalancePaymentForm.amount);
    \u0275\u0275property("max", fee_r44.balance_due);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionBalancePaymentForm.payment_date);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionBalancePaymentForm.payment_method);
    \u0275\u0275control();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionBalancePaymentForm.payment_reference);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionBalancePaymentForm.note);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tuitionFormError());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r46 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("value", ctx_r1.tuitionStudentLabel(student_r46));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", student_r46.class_option.name, " \xB7 ", student_r46.parent_mobile);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classOption_r47 = ctx.$implicit;
    \u0275\u0275property("value", classOption_r47.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classOption_r47.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r48 = ctx.$implicit;
    \u0275\u0275property("value", month_r48);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(month_r48);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.tuitionFormOpen.set(false));
    });
    \u0275\u0275elementStart(1, "form", 131);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.recordTuitionFee());
    })("click", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_form_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "Monthly ledger");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Record a deposit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Conditional_8_Template, 2, 1, "p", 120);
    \u0275\u0275elementStart(9, "div", 84)(10, "label");
    \u0275\u0275text(11, "Student");
    \u0275\u0275elementStart(12, "input", 132);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionStudentSearch, $event) || (ctx_r1.tuitionStudentSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_input_ngModelChange_12_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectTuitionStudentFromSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(13, "datalist", 133);
    \u0275\u0275repeaterCreate(14, Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_For_15_Template, 2, 3, "option", 42, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "label");
    \u0275\u0275text(17, "Class");
    \u0275\u0275elementStart(18, "select", 134);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionStudentClassFilter, $event) || (ctx_r1.tuitionStudentClassFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_select_ngModelChange_18_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changeTuitionStudentClass());
    });
    \u0275\u0275elementStart(19, "option", 41);
    \u0275\u0275text(20, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_For_22_Template, 2, 2, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 84)(24, "label");
    \u0275\u0275text(25, "Month");
    \u0275\u0275elementStart(26, "select", 135);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionForm.fee_month, $event) || (ctx_r1.tuitionForm.fee_month = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(27, Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_For_28_Template, 2, 2, "option", 42, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "label");
    \u0275\u0275text(30, "Year");
    \u0275\u0275elementStart(31, "input", 136);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionForm.fee_year, $event) || (ctx_r1.tuitionForm.fee_year = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_input_ngModelChange_31_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateTuitionDue());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 84)(33, "label");
    \u0275\u0275text(34, "Fees assessed");
    \u0275\u0275elementStart(35, "input", 137);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionForm.amount_due, $event) || (ctx_r1.tuitionForm.amount_due = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "label");
    \u0275\u0275text(37, "Discount");
    \u0275\u0275elementStart(38, "input", 138);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionForm.discount_amount, $event) || (ctx_r1.tuitionForm.discount_amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 84)(40, "label");
    \u0275\u0275text(41, "Adjustment");
    \u0275\u0275elementStart(42, "input", 139);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionForm.adjustment_amount, $event) || (ctx_r1.tuitionForm.adjustment_amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "label");
    \u0275\u0275text(44, "Due date");
    \u0275\u0275elementStart(45, "input", 140);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionForm.due_date, $event) || (ctx_r1.tuitionForm.due_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 84)(47, "label");
    \u0275\u0275text(48, "Deposit received");
    \u0275\u0275elementStart(49, "input", 141);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionForm.amount_paid, $event) || (ctx_r1.tuitionForm.amount_paid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "label");
    \u0275\u0275text(51, "Payment date");
    \u0275\u0275elementStart(52, "input", 142);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionForm.payment_date, $event) || (ctx_r1.tuitionForm.payment_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 84)(54, "label");
    \u0275\u0275text(55, "Method");
    \u0275\u0275elementStart(56, "select", 143);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_select_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionForm.payment_method, $event) || (ctx_r1.tuitionForm.payment_method = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(57, "option", 124);
    \u0275\u0275text(58, "Cash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "option", 125);
    \u0275\u0275text(60, "UPI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 126);
    \u0275\u0275text(62, "Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "option", 127);
    \u0275\u0275text(64, "Bank transfer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "option", 128);
    \u0275\u0275text(66, "Cheque");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "label");
    \u0275\u0275text(68, "Reference");
    \u0275\u0275elementStart(69, "input", 144);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_input_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionForm.payment_reference, $event) || (ctx_r1.tuitionForm.payment_reference = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "label");
    \u0275\u0275text(71, "Note");
    \u0275\u0275elementStart(72, "textarea", 145);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_textarea_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionForm.note, $event) || (ctx_r1.tuitionForm.note = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 43)(74, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.tuitionFormOpen.set(false));
    });
    \u0275\u0275text(75, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "button", 92);
    \u0275\u0275text(77, "Save tuition");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.tuitionFormError() ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionStudentSearch);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filteredTuitionStudents());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionStudentClassFilter);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.classOptions());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionForm.fee_month);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(15, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionForm.fee_year);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionForm.amount_due);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionForm.discount_amount);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionForm.adjustment_amount);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionForm.due_date);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionForm.amount_paid);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionForm.payment_date);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionForm.payment_method);
    \u0275\u0275control();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionForm.payment_reference);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionForm.note);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 47)(1, "div", 57)(2, "div")(3, "span", 39);
    \u0275\u0275text(4, "Paid and due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Tuition report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 77)(8, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadTuitionReport("xlsx"));
    });
    \u0275\u0275text(9, "Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadTuitionReport("pdf"));
    });
    \u0275\u0275text(11, "PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 75);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openTuitionForm());
    });
    \u0275\u0275text(13, "Record deposit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 59)(15, "input", 107);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionSearch, $event) || (ctx_r1.tuitionSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Template_input_keyup_enter_15_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.searchTuitionReport());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(16, "select", 108);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionClassFilter, $event) || (ctx_r1.tuitionClassFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Template_select_change_16_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.searchTuitionReport());
    });
    \u0275\u0275elementStart(17, "option", 41);
    \u0275\u0275text(18, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, Dashboard_Conditional_1_Conditional_48_Conditional_5_For_20_Template, 2, 2, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(21, "select", 109);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionMonth, $event) || (ctx_r1.tuitionMonth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Template_select_change_21_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.searchTuitionReport());
    });
    \u0275\u0275repeaterCreate(22, Dashboard_Conditional_1_Conditional_48_Conditional_5_For_23_Template, 2, 2, "option", 42, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(24, "input", 110);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.tuitionYear, $event) || (ctx_r1.tuitionYear = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Template_input_change_24_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.searchTuitionReport());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(25, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.searchTuitionReport());
    });
    \u0275\u0275text(26, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 70);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_5_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearTuitionFilters());
    });
    \u0275\u0275text(28, "Reset");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 111)(30, "div")(31, "span");
    \u0275\u0275text(32, "Due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div")(37, "span");
    \u0275\u0275text(38, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div")(43, "span");
    \u0275\u0275text(44, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "strong");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 112)(49, "table", 113)(50, "thead")(51, "tr")(52, "th");
    \u0275\u0275text(53, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th");
    \u0275\u0275text(55, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th");
    \u0275\u0275text(57, "Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th");
    \u0275\u0275text(59, "Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th");
    \u0275\u0275text(61, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "th");
    \u0275\u0275text(63, "Adjustment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "th");
    \u0275\u0275text(65, "Net due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "th");
    \u0275\u0275text(67, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "th");
    \u0275\u0275text(69, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "th");
    \u0275\u0275text(71, "Receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "th");
    \u0275\u0275text(73, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "tbody");
    \u0275\u0275repeaterCreate(75, Dashboard_Conditional_1_Conditional_48_Conditional_5_For_76_Template, 35, 39, "tr", null, _forTrack2, false, Dashboard_Conditional_1_Conditional_48_Conditional_5_ForEmpty_77_Template, 4, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(78, Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_78_Template, 7, 5, "div", 114);
    \u0275\u0275conditionalCreate(79, Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_79_Template, 46, 15, "div", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(80, Dashboard_Conditional_1_Conditional_48_Conditional_5_Conditional_80_Template, 78, 16, "div", 74);
  }
  if (rf & 2) {
    let tmp_19_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionSearch);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionClassFilter);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.classOptions());
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionMonth);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(22, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tuitionYear);
    \u0275\u0275control();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 13, ctx_r1.tuitionReport().total_due, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 16, ctx_r1.tuitionReport().total_paid, "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("color", +ctx_r1.tuitionReport().total_balance > 0 ? "#c62828" : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 19, ctx_r1.tuitionReport().total_balance, "1.2-2"));
    \u0275\u0275advance(29);
    \u0275\u0275repeater(ctx_r1.tuitionReport().items);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.tuitionReport().total_pages > 1 ? 78 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_19_0 = ctx_r1.tuitionBalancePaymentTarget()) ? 79 : -1, tmp_19_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tuitionFormOpen() ? 80 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelClassEdit());
    });
    \u0275\u0275text(1, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_6_For_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "button", 153);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_6_For_40_Template_button_click_8_listener() {
      const classOption_r52 = \u0275\u0275restoreView(_r51).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editClass(classOption_r52));
    });
    \u0275\u0275text(9, "\u270E");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const classOption_r52 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(classOption_r52.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Ages ", classOption_r52.min_age, " - ", classOption_r52.max_age, " Years");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(classOption_r52.display_order);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_6_ForEmpty_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 154)(2, "div", 73);
    \u0275\u0275text(3, "No classes have been added.");
    \u0275\u0275elementEnd()()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_54_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "button", 156);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_54_For_20_Template_button_click_11_listener() {
      const fee_r58 = \u0275\u0275restoreView(_r57).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.editClassTuition(fee_r58));
    });
    \u0275\u0275text(12, "\u270E");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const fee_r58 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.classOptions().find(\u0275\u0275arrowFunction(5, arrowFn0, ctx))?.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Ages ", ctx_r1.classOptions().find(\u0275\u0275arrowFunction(6, arrowFn1, ctx))?.min_age, " - ", ctx_r1.classOptions().find(\u0275\u0275arrowFunction(7, arrowFn2, ctx))?.max_age, " Years");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fee_r58.fee_year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 8, fee_r58.amount, "1.2-2"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_54_ForEmpty_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 157)(2, "div", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("No class fees have been configured for ", ctx_r1.classFeeDetailsYear, ".");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "label");
    \u0275\u0275text(2, "Fee year");
    \u0275\u0275elementStart(3, "input", 155);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_54_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r53);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.classFeeDetailsYear, $event) || (ctx_r1.classFeeDetailsYear = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_54_Template_input_change_3_listener() {
      \u0275\u0275restoreView(_r53);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changeClassFeeDetailsYear());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 112)(5, "table", 113)(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Age group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Monthly fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_54_For_20_Template, 13, 11, "tr", null, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_54_ForEmpty_21_Template, 4, 1, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.classFeeDetailsYear);
    \u0275\u0275control();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.orderedClassTuitions());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_6_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classOption_r59 = ctx.$implicit;
    \u0275\u0275property("value", classOption_r59.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classOption_r59.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_68_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_68_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.cancelSectionEdit());
    });
    \u0275\u0275text(1, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_68_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "button", 161);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_68_For_18_Template_button_click_6_listener() {
      const section_r63 = \u0275\u0275restoreView(_r62).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.editSection(section_r63));
    });
    \u0275\u0275text(7, "\u270E");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r63 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r63.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r63.display_order);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_68_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 162)(2, "div", 73);
    \u0275\u0275text(3, "No sections have been added for this class.");
    \u0275\u0275elementEnd()()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 158);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_68_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveSection());
    });
    \u0275\u0275elementStart(1, "input", 159);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_68_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.sectionForm.name, $event) || (ctx_r1.sectionForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(2, "input", 160);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_68_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.sectionForm.display_order, $event) || (ctx_r1.sectionForm.display_order = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(3, Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_68_Conditional_3_Template, 2, 0, "button", 106);
    \u0275\u0275elementStart(4, "button", 92);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 112)(7, "table", 113)(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "Section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Display order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_68_For_18_Template, 8, 2, "tr", null, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_68_ForEmpty_19_Template, 4, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sectionForm.name);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sectionForm.display_order);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editingSectionId() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editingSectionId() ? "Update section" : "Add section");
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.classSections());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_69_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.classTuitionFormError());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_69_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classOption_r65 = ctx.$implicit;
    \u0275\u0275property("value", classOption_r65.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classOption_r65.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_69_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r64);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.classTuitionFormOpen.set(false));
    });
    \u0275\u0275elementStart(1, "form", 119);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_69_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r64);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveClassTuition());
    })("click", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_69_Template_form_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "Class fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_69_Conditional_8_Template, 2, 1, "p", 120);
    \u0275\u0275elementStart(9, "label");
    \u0275\u0275text(10, "Class");
    \u0275\u0275elementStart(11, "select", 163);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_69_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r64);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.classTuitionForm.class_option_id, $event) || (ctx_r1.classTuitionForm.class_option_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 152);
    \u0275\u0275text(13, "Select class");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_69_For_15_Template, 2, 2, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 84)(17, "label");
    \u0275\u0275text(18, "Year");
    \u0275\u0275elementStart(19, "input", 164);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_69_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r64);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.classTuitionForm.fee_year, $event) || (ctx_r1.classTuitionForm.fee_year = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label");
    \u0275\u0275text(21, "Monthly fee");
    \u0275\u0275elementStart(22, "input", 165);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_69_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r64);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.classTuitionForm.amount, $event) || (ctx_r1.classTuitionForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 43)(24, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_69_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r64);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.classTuitionFormOpen.set(false));
    });
    \u0275\u0275text(25, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 92);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.editingClassTuitionId() ? "Edit monthly fee" : "Set monthly fee");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.classTuitionFormError() ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.classTuitionForm.class_option_id);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.classOptions());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.classTuitionForm.fee_year);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.classTuitionForm.amount);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editingClassTuitionId() ? "Update fee" : "Save fee");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 32)(1, "form", 94);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.createClass());
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "Class directory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 84)(9, "label");
    \u0275\u0275text(10, "Class name");
    \u0275\u0275elementStart(11, "input", 146);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.classForm.name, $event) || (ctx_r1.classForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label");
    \u0275\u0275text(13, "Display order");
    \u0275\u0275elementStart(14, "input", 147);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.classForm.display_order, $event) || (ctx_r1.classForm.display_order = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 84)(16, "label");
    \u0275\u0275text(17, "Minimum age");
    \u0275\u0275elementStart(18, "input", 148);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.classForm.min_age, $event) || (ctx_r1.classForm.min_age = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label");
    \u0275\u0275text(20, "Maximum age");
    \u0275\u0275elementStart(21, "input", 149);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.classForm.max_age, $event) || (ctx_r1.classForm.max_age = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 43);
    \u0275\u0275conditionalCreate(23, Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_23_Template, 2, 0, "button", 106);
    \u0275\u0275elementStart(24, "button", 92);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 150)(27, "table", 113)(28, "thead")(29, "tr")(30, "th");
    \u0275\u0275text(31, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Age group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Display order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "tbody");
    \u0275\u0275repeaterCreate(39, Dashboard_Conditional_1_Conditional_48_Conditional_6_For_40_Template, 10, 4, "tr", null, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_6_ForEmpty_41_Template, 4, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 48)(43, "div", 57)(44, "div")(45, "span", 39);
    \u0275\u0275text(46, "Class fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "h3");
    \u0275\u0275text(48, "Monthly fees");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 77)(50, "button", 75);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openClassTuitionForm());
    });
    \u0275\u0275text(51, "Set monthly fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleClassFeeDetails());
    });
    \u0275\u0275text(53, "Fee details");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(54, Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_54_Template, 22, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 48)(56, "div", 57)(57, "div")(58, "span", 39);
    \u0275\u0275text(59, "Class sections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "h3");
    \u0275\u0275text(61, "Sections");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 59)(63, "select", 151);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_6_Template_select_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectSectionsClass($event));
    });
    \u0275\u0275elementStart(64, "option", 152);
    \u0275\u0275text(65, "Select class");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(66, Dashboard_Conditional_1_Conditional_48_Conditional_6_For_67_Template, 2, 2, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(68, Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_68_Template, 20, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(69, Dashboard_Conditional_1_Conditional_48_Conditional_6_Conditional_69_Template, 28, 7, "div", 74);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.editingClassId() ? "Edit class" : "Add class");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.classForm.name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.classForm.display_order);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.classForm.min_age);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.classForm.max_age);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.editingClassId() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editingClassId() ? "Update class" : "Add class");
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.classOptions());
    \u0275\u0275advance(15);
    \u0275\u0275conditional(ctx_r1.classFeeDetailsVisible() ? 54 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", ctx_r1.sectionsClassId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.classOptions());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.sectionsClassId() ? 68 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.classTuitionFormOpen() ? 69 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_39_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Today's task / homework");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r67 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r67.task_details);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_39_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Book names");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r67 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r67.book_names);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_39_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Syllabus covered");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r67 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r67.syllabus_topic);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_39_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r67 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r67.remarks);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_39_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Holiday task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r67 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r67.holiday_task);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_39_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168)(1, "div", 169)(2, "div")(3, "dt");
    \u0275\u0275text(4, "Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dd");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_39_For_2_Conditional_7_Template, 5, 1, "div");
    \u0275\u0275conditionalCreate(8, Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_39_For_2_Conditional_8_Template, 5, 1, "div");
    \u0275\u0275conditionalCreate(9, Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_39_For_2_Conditional_9_Template, 5, 1, "div");
    \u0275\u0275conditionalCreate(10, Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_39_For_2_Conditional_10_Template, 5, 1, "div");
    \u0275\u0275conditionalCreate(11, Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_39_For_2_Conditional_11_Template, 5, 1, "div");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r67 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(entry_r67.teacher_name);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r67.task_details ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r67.book_names ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r67.syllabus_topic ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r67.remarks ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r67.holiday_task ? 11 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275repeaterCreate(1, Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_39_For_2_Template, 12, 6, "div", 168, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.myDiaryEntries());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "strong");
    \u0275\u0275text(2, "No diary entry yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Your teacher hasn't posted a diary update for this date.");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_48_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const punch_r68 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(punch_r68.direction);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, punch_r68.punched_at, "shortTime"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275repeaterCreate(1, Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_48_For_2_Template, 7, 5, "div", 98, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.myPunches());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "strong");
    \u0275\u0275text(2, "No punches recorded today.");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_56_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 170);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r69 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r69.attendance_date);
    \u0275\u0275advance();
    \u0275\u0275classProp("status-inactive", row_r69.status === "absent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r69.status || "Not marked");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r69.note);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275repeaterCreate(1, Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_56_For_2_Template, 7, 5, "div", 98, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.myAttendance());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "strong");
    \u0275\u0275text(2, "No attendance recorded yet this month.");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const holiday_r70 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(holiday_r70.holiday_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(holiday_r70.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_ForEmpty_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, "No holidays added.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 45)(1, "div")(2, "span", 39);
    \u0275\u0275text(3, "Student dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Your attendance, School IN/OUT, and today's diary from your teacher.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "section", 53)(9, "article", 55)(10, "span");
    \u0275\u0275text(11, "Class & section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "small");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "article", 54)(17, "span");
    \u0275\u0275text(18, "Present days this month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "small");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "article", 56)(24, "span");
    \u0275\u0275text(25, "Student ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "small");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "section", 46)(31, "div", 48)(32, "div", 57)(33, "div")(34, "span", 39);
    \u0275\u0275text(35, "Daily diary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "h3");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "input", 166);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_7_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r66);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.changeMyDiaryDate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(39, Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_39_Template, 3, 0, "div", 71)(40, Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_40_Template, 5, 0, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 48)(42, "div", 57)(43, "div")(44, "span", 39);
    \u0275\u0275text(45, "Today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "h3");
    \u0275\u0275text(47, "School IN / OUT");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(48, Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_48_Template, 3, 0, "div", 71)(49, Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_49_Template, 3, 0, "div", 73);
    \u0275\u0275elementStart(50, "div", 167)(51, "div")(52, "span", 39);
    \u0275\u0275text(53, "This month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "h3");
    \u0275\u0275text(55, "Attendance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(56, Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_56_Template, 3, 0, "div", 71)(57, Dashboard_Conditional_1_Conditional_48_Conditional_7_Conditional_57_Template, 3, 0, "div", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "section", 48)(59, "div", 57)(60, "div")(61, "span", 39);
    \u0275\u0275text(62, "School calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "h3");
    \u0275\u0275text(64, "Upcoming holidays");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 71);
    \u0275\u0275repeaterCreate(66, Dashboard_Conditional_1_Conditional_48_Conditional_7_For_67_Template, 6, 2, "div", 98, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_7_ForEmpty_68_Template, 2, 0, "div", 73);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Hello, ", ctx_r1.myStudent()?.first_name || ctx_r1.user()?.name, "!");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.myStudent()?.class_option?.name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.myStudent()?.section?.name ? "Section " + ctx_r1.myStudent()?.section?.name : "No section assigned");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.myAttendancePresentCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("out of ", ctx_r1.myAttendance().length, " recorded days");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.myStudent()?.student_id || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.myStudent()?.status);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.myDiaryDate === ctx_r1.today() ? "Today's diary" : "Diary for " + ctx_r1.myDiaryDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.myDiaryDate);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.myDiaryEntries().length ? 39 : 40);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.myPunches().length ? 48 : 49);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.myAttendance().length ? 56 : 57);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r1.holidays());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_10_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r72 = ctx.$implicit;
    \u0275\u0275property("value", child_r72.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", child_r72.first_name, " ", child_r72.last_name, " \xB7 ", child_r72.class_option.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "Child");
    \u0275\u0275elementStart(2, "select", 172);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_10_Template_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r71);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectParentChild($event));
    });
    \u0275\u0275elementStart(3, "option", 41);
    \u0275\u0275text(4, "Select a child");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_10_For_6_Template, 2, 4, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.selectedNoteChildId());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.noteChildren());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "strong");
    \u0275\u0275text(2, "No children are linked to this account.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Please contact the school administrator.");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_22_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r73 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Due ", \u0275\u0275pipeBind2(2, 1, note_r73.due_date, "mediumDate"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 173)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_22_For_2_Conditional_9_Template, 3, 4, "small");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r73 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(note_r73.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", \u0275\u0275pipeBind1(5, 7, note_r73.category), " \xB7 ", note_r73.class_name, " \xB7 ", note_r73.created_by_name, " \xB7 ", \u0275\u0275pipeBind2(6, 9, note_r73.created_at, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(note_r73.content);
    \u0275\u0275advance();
    \u0275\u0275conditional(note_r73.due_date ? 9 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_22_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "strong");
    \u0275\u0275text(2, "No school notes yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Your teacher\u2019s updates and reminders will appear here.");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275repeaterCreate(1, Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_22_For_2_Template, 10, 12, "article", 173, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_22_ForEmpty_3_Template, 5, 0, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.recipientNotes());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 94);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_23_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r74);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.submitLeaveRequest());
    });
    \u0275\u0275elementStart(1, "div", 57)(2, "div")(3, "span", 39);
    \u0275\u0275text(4, "Student services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Apply for leave");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "p", 174);
    \u0275\u0275text(8, "Send an absence request to your class teacher. You\u2019ll see its status here after it has been reviewed.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 84)(10, "label");
    \u0275\u0275text(11, "First day away");
    \u0275\u0275elementStart(12, "input", 175);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_23_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r74);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.leaveForm.start_date, $event) || (ctx_r1.leaveForm.start_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label");
    \u0275\u0275text(14, "Last day away");
    \u0275\u0275elementStart(15, "input", 176);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_23_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r74);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.leaveForm.end_date, $event) || (ctx_r1.leaveForm.end_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "label");
    \u0275\u0275text(17, "Reason for leave");
    \u0275\u0275elementStart(18, "textarea", 177);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_23_Template_textarea_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r74);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.leaveForm.reason, $event) || (ctx_r1.leaveForm.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 43)(20, "button", 92);
    \u0275\u0275text(21, "Submit application");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.leaveForm.start_date);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.leaveForm.end_date);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.leaveForm.reason);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_24_For_11_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const request_r75 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", request_r75.reviewed_by_name, " ");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_24_For_11_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small")(1, "strong");
    \u0275\u0275text(2, "School remarks:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_24_For_11_Conditional_10_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r75 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", request_r75.remarks);
    \u0275\u0275advance();
    \u0275\u0275conditional(request_r75.reviewed_by_name ? 4 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_24_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 72)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 170);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_24_For_11_Conditional_10_Template, 5, 2, "small");
    \u0275\u0275elementStart(11, "small");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r75 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(3, 8, request_r75.start_date, "mediumDate"), " \u2013 ", \u0275\u0275pipeBind2(4, 11, request_r75.end_date, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("status-inactive", request_r75.status !== "approved");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 14, request_r75.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(request_r75.reason);
    \u0275\u0275advance();
    \u0275\u0275conditional(request_r75.remarks ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Submitted ", \u0275\u0275pipeBind2(13, 16, request_r75.created_at, "mediumDate"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_24_ForEmpty_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "strong");
    \u0275\u0275text(2, "No leave applications yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Submitted requests and review decisions will appear here.");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 48)(1, "div", 57)(2, "div")(3, "span", 39);
    \u0275\u0275text(4, "Your records");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Leave applications");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 100);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 71);
    \u0275\u0275repeaterCreate(10, Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_24_For_11_Template, 14, 19, "article", 72, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_24_ForEmpty_12_Template, 5, 0, "div", 73);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.leaveRequests().length, " applications");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.leaveRequests());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 45)(1, "div")(2, "span", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Stay connected to your class.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 4);
    \u0275\u0275text(9, "TT");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_10_Template, 7, 1, "label");
    \u0275\u0275elementStart(11, "section")(12, "div", 48)(13, "div", 57)(14, "div")(15, "span", 39);
    \u0275\u0275text(16, "From your teachers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h3");
    \u0275\u0275text(18, "School notes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "span", 171);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_21_Template, 5, 0, "div", 73)(22, Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_22_Template, 4, 1, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_23_Template, 22, 4, "form", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, Dashboard_Conditional_1_Conditional_48_Conditional_8_Conditional_24_Template, 13, 2, "section", 48);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isStudent() ? "Student portal \xB7 " + (ctx_r1.myStudent()?.class_option?.name || "Your classroom") : "Family portal");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isStudent() ? "Read the latest updates from your teachers and keep your school absence requests in one place." : "Read the latest updates from your children\u2019s teachers.");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isParent() && ctx_r1.noteChildren().length > 1 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("overview-grid", ctx_r1.isStudent())("single-panel-wrap", ctx_r1.isParent());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.recipientNotes().length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isParent() && !ctx_r1.noteChildren().length ? 21 : 22);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isStudent() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isStudent() ? 24 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_9_For_11_Conditional_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const request_r76 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" \xB7 Reviewed by ", request_r76.reviewed_by_name, " ");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_9_For_11_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small")(1, "strong");
    \u0275\u0275text(2, "Remarks:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, Dashboard_Conditional_1_Conditional_48_Conditional_9_For_11_Conditional_16_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r76 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", request_r76.remarks);
    \u0275\u0275advance();
    \u0275\u0275conditional(request_r76.reviewed_by_name ? 4 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_9_For_11_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 178)(1, "label");
    \u0275\u0275text(2, "Remarks ");
    \u0275\u0275elementStart(3, "span", 179);
    \u0275\u0275text(4, "optional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 180);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_9_For_11_Conditional_17_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r77);
      const request_r76 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.leaveRemarks[request_r76.id], $event) || (ctx_r1.leaveRemarks[request_r76.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 43)(7, "button", 117);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_9_For_11_Conditional_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r77);
      const request_r76 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.decideLeaveRequest(request_r76, "rejected"));
    });
    \u0275\u0275text(8, "Decline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 44);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_9_For_11_Conditional_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r77);
      const request_r76 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.decideLeaveRequest(request_r76, "approved"));
    });
    \u0275\u0275text(10, "Approve leave");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const request_r76 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275property("name", "leaveRemarks-" + request_r76.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.leaveRemarks[request_r76.id]);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_9_For_11_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r76 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Reviewed ", \u0275\u0275pipeBind2(2, 1, request_r76.reviewed_at, "mediumDate"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_9_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 173)(1, "div", 57)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 170);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, Dashboard_Conditional_1_Conditional_48_Conditional_9_For_11_Conditional_16_Template, 5, 2, "small");
    \u0275\u0275conditionalCreate(17, Dashboard_Conditional_1_Conditional_48_Conditional_9_For_11_Conditional_17_Template, 11, 4, "div", 178)(18, Dashboard_Conditional_1_Conditional_48_Conditional_9_For_11_Conditional_18_Template, 3, 4, "small");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r76 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(request_r76.student_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", request_r76.student_code, " \xB7 ", request_r76.class_name);
    \u0275\u0275advance();
    \u0275\u0275classProp("status-inactive", request_r76.status !== "approved");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, request_r76.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(12, 13, request_r76.start_date, "mediumDate"), " \u2013 ", \u0275\u0275pipeBind2(13, 16, request_r76.end_date, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(request_r76.reason);
    \u0275\u0275advance();
    \u0275\u0275conditional(request_r76.remarks ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(request_r76.status === "pending" ? 17 : 18);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_9_ForEmpty_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "strong");
    \u0275\u0275text(2, "No leave requests to review.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "New student applications will appear here.");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 47)(1, "div", 57)(2, "div")(3, "span", 39);
    \u0275\u0275text(4, "Student services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Leave applications");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 100);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 71);
    \u0275\u0275repeaterCreate(10, Dashboard_Conditional_1_Conditional_48_Conditional_9_For_11_Template, 19, 19, "article", 173, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_9_ForEmpty_12_Template, 5, 0, "div", 73);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.leaveRequests().length, " requests");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.leaveRequests());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_10_For_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 170);
    \u0275\u0275text(1, "New");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_10_For_11_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const enquiry_r78 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(enquiry_r78.message);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_10_For_11_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 117);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_10_For_11_Conditional_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r79);
      const enquiry_r78 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setEnquiryStatus(enquiry_r78, "new"));
    });
    \u0275\u0275text(2, "Mark new");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 117);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_10_For_11_Conditional_21_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r79);
      const enquiry_r78 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setEnquiryStatus(enquiry_r78, "contacted"));
    });
    \u0275\u0275text(4, "Mark contacted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 44);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_10_For_11_Conditional_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r79);
      const enquiry_r78 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setEnquiryStatus(enquiry_r78, "closed"));
    });
    \u0275\u0275text(6, "Close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const enquiry_r78 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading() || enquiry_r78.status === "new");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading() || enquiry_r78.status === "contacted");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading() || enquiry_r78.status === "closed");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_10_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 173)(1, "div", 57)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275conditionalCreate(8, Dashboard_Conditional_1_Conditional_48_Conditional_10_For_11_Conditional_8_Template, 2, 0, "span", 170);
    \u0275\u0275elementStart(9, "span", 170);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "small")(13, "a", 181);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " \xB7 ");
    \u0275\u0275elementStart(16, "a", 181);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, Dashboard_Conditional_1_Conditional_48_Conditional_10_For_11_Conditional_20_Template, 2, 1, "p");
    \u0275\u0275conditionalCreate(21, Dashboard_Conditional_1_Conditional_48_Conditional_10_For_11_Conditional_21_Template, 7, 3, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const enquiry_r78 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(enquiry_r78.child_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Parent: ", enquiry_r78.parent_name, " \xB7 Age group: ", ctx_r1.enquiryAgeLabel(enquiry_r78.child_age));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(enquiry_r78.is_unread ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("status-inactive", enquiry_r78.status !== "contacted");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, enquiry_r78.status));
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "tel:" + enquiry_r78.phone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(enquiry_r78.phone);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "mailto:" + enquiry_r78.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(enquiry_r78.email);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Received ", \u0275\u0275pipeBind2(19, 16, enquiry_r78.created_at, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(enquiry_r78.message ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canUpdateEnquiries() ? 21 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_10_ForEmpty_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "strong");
    \u0275\u0275text(2, "No admission enquiries yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Enquiries submitted from the Contact page will appear here.");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 47)(1, "div", 57)(2, "div")(3, "span", 39);
    \u0275\u0275text(4, "Admissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Admission enquiries");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 100);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 71);
    \u0275\u0275repeaterCreate(10, Dashboard_Conditional_1_Conditional_48_Conditional_10_For_11_Template, 22, 19, "article", 173, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_10_ForEmpty_12_Template, 5, 0, "div", 73);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.enquiries().length, " enquiries");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.enquiries());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_11_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const academicYear_r81 = ctx.$implicit;
    \u0275\u0275property("value", academicYear_r81);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(academicYear_r81);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, "No children are linked to this account. Please contact the administrator.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, "Select a child above to view fee details.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, "Loading fee information\u2026");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2, "Total fees assessed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "span");
    \u0275\u0275text(8, "Total amount paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const summary_r82 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(5, 2, summary_r82.total_fees_assessed, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(11, 5, summary_r82.total_amount_paid, "1.2-2"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_For_9_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "div")(2, "span");
    \u0275\u0275text(3, "Fees assessed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "span");
    \u0275\u0275text(9, "Amount paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const year_r83 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(6, 2, year_r83.total_fees_assessed, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(12, 5, year_r83.total_amount_paid, "1.2-2"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_For_9_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Fee amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "th");
    \u0275\u0275text(3, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5, "Adjustment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Net payable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Amount paid");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_For_9_For_26_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r84 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(2, 5, month_r84.fee_amount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(5, 8, month_r84.discount_amount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(8, 11, month_r84.adjustment_amount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(11, 14, month_r84.net_payable, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(14, 17, month_r84.amount_paid, "1.2-2"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_For_9_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 170);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_For_9_For_26_Conditional_13_Template, 15, 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r84 = ctx.$implicit;
    const summary_r82 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", month_r84.month, " ", month_r84.year);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("status-inactive", month_r84.status === "unpaid" || month_r84.status === "overdue");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(month_r84.status === "not_due" ? "Not due" : \u0275\u0275pipeBind1(6, 8, month_r84.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(9, 10, month_r84.outstanding_due, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 13, month_r84.due_date, "mediumDate"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(summary_r82.can_view_amounts ? 13 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_For_9_ForEmpty_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 73);
    \u0275\u0275text(3, "No fee schedule is available for this academic year.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const summary_r82 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", summary_r82.can_view_amounts ? 9 : 4);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div")(2, "span", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_For_9_Conditional_10_Template, 13, 8, "div", 111);
    \u0275\u0275elementStart(11, "div", 112)(12, "table", 113)(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Payment status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Outstanding due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Due date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_For_9_Conditional_23_Template, 10, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275repeaterCreate(25, Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_For_9_For_26_Template, 14, 16, "tr", null, _forTrack5, false, Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_For_9_ForEmpty_27_Template, 4, 1, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const year_r83 = ctx.$implicit;
    const summary_r82 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Academic year ", year_r83.academic_year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(year_r83.overall_status === "not_due" ? "Not due" : \u0275\u0275pipeBind1(6, 6, year_r83.overall_status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Due \u20B9", \u0275\u0275pipeBind2(9, 8, year_r83.total_outstanding_due, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(summary_r82.can_view_amounts ? 10 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(summary_r82.can_view_amounts ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(year_r83.months);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_ForEmpty_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, "No academic-year fees are available for this student.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "div")(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_Conditional_7_Template, 12, 8);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_For_9_Template, 28, 11, null, null, _forTrack4, false, Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_ForEmpty_10_Template, 2, 0, "div", 73);
  }
  if (rf & 2) {
    const summary_r82 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parentFeeAcademicYear() === "all" ? "Outstanding due across academic years" : "Outstanding due for " + ctx_r1.parentFeeAcademicYear());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(6, 4, summary_r82.total_outstanding_due, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(summary_r82.can_view_amounts ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(summary_r82.academic_years);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, "Fee information could not be loaded.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 48)(1, "div", 57)(2, "div")(3, "span", 39);
    \u0275\u0275text(4, "Fee summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "label", 182);
    \u0275\u0275text(8, "Academic year");
    \u0275\u0275elementStart(9, "select", 183);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_11_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r80);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.changeParentFeeAcademicYear($event));
    });
    \u0275\u0275elementStart(10, "option", 184);
    \u0275\u0275text(11, "All Academic Years");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, Dashboard_Conditional_1_Conditional_48_Conditional_11_For_13_Template, 2, 2, "option", 42, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_14_Template, 2, 0, "div", 73)(15, Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_15_Template, 2, 0, "div", 73)(16, Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_16_Template, 2, 0, "div", 73)(17, Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_17_Template, 11, 7)(18, Dashboard_Conditional_1_Conditional_48_Conditional_11_Conditional_18_Template, 2, 0, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.parentFeeSummary()?.student_name || "Linked child");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.parentFeeAcademicYear());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.parentFeeSummary()?.academic_year_options ?? \u0275\u0275pureFunction0(3, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.noteChildren().length ? 14 : !ctx_r1.selectedNoteChildId() && ctx_r1.noteChildren().length > 1 ? 15 : ctx_r1.parentFeeLoading() ? 16 : (tmp_7_0 = ctx_r1.parentFeeSummary()) ? 17 : 18, tmp_7_0);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_12_Conditional_84_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 190);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_12_Conditional_84_For_2_Template_button_click_0_listener() {
      const content_r87 = \u0275\u0275restoreView(_r86).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.editContent(content_r87));
    });
    \u0275\u0275elementStart(1, "span", 191);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "span", 192);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r87 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, content_r87.display_order, "2.0"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(content_r87.section_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(content_r87.title || "Untitled section");
    \u0275\u0275advance();
    \u0275\u0275classProp("offline", !content_r87.is_published);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_12_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275repeaterCreate(1, Dashboard_Conditional_1_Conditional_48_Conditional_12_Conditional_84_For_2_Template, 10, 8, "button", 189, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.pageContents().slice(0, 4));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_12_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "strong");
    \u0275\u0275text(2, "Your first section is waiting.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Add a hero, mission, or welcome block for Home.");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 45)(1, "div")(2, "span", 39);
    \u0275\u0275text(3, "Today at the preschool");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Keep the welcome warm.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Update the pieces families notice first, then let the public pages do the talking.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 52);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_12_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r85);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.activeView.set("pages");
      return \u0275\u0275resetView(ctx_r1.startNewContent());
    });
    \u0275\u0275text(9, "Add page section ");
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "\uFF0B");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "section", 53)(13, "article", 54)(14, "span");
    \u0275\u0275text(15, "Published sections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "small");
    \u0275\u0275text(19, "ready for families");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "article", 55)(21, "span");
    \u0275\u0275text(22, "Pages touched");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "small");
    \u0275\u0275text(26, "with managed content");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "article", 56)(28, "span");
    \u0275\u0275text(29, "Team accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "small");
    \u0275\u0275text(33, "staff accounts, excluding students");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "section", 185)(35, "div", 57)(36, "div")(37, "span", 39);
    \u0275\u0275text(38, "People at Tiny Tara");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "h3");
    \u0275\u0275text(40, "Accounts by role");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "button", 186);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_12_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r85);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startStaffForm());
    });
    \u0275\u0275text(42, "Open staff directory \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 111)(44, "div")(45, "strong");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48, "Super Admin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div")(50, "strong");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53, "Admin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div")(55, "strong");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58, "Teacher");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div")(60, "strong");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span");
    \u0275\u0275text(63, "Clerk");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div")(65, "strong");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68, "Security");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div")(70, "strong");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span");
    \u0275\u0275text(73, "Student");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(74, "section", 46)(75, "div", 187)(76, "div", 57)(77, "div")(78, "span", 39);
    \u0275\u0275text(79, "Quick look");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "h3");
    \u0275\u0275text(81, "Home page sections");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "button", 186);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_12_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r85);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.activeView.set("pages");
      return \u0275\u0275resetView(ctx_r1.selectPage("home"));
    });
    \u0275\u0275text(83, "Manage all \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(84, Dashboard_Conditional_1_Conditional_48_Conditional_12_Conditional_84_Template, 3, 0, "div", 71)(85, Dashboard_Conditional_1_Conditional_48_Conditional_12_Conditional_85_Template, 5, 0, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 38)(87, "span", 39);
    \u0275\u0275text(88, "Editorial note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "h3");
    \u0275\u0275text(90, "Small edits, visible difference.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "p");
    \u0275\u0275text(92, "Use short section names like ");
    \u0275\u0275elementStart(93, "em");
    \u0275\u0275text(94, "hero");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, ", ");
    \u0275\u0275elementStart(96, "em");
    \u0275\u0275text(97, "mission");
    \u0275\u0275elementEnd();
    \u0275\u0275text(98, ", and ");
    \u0275\u0275elementStart(99, "em");
    \u0275\u0275text(100, "contact_links");
    \u0275\u0275elementEnd();
    \u0275\u0275text(101, ". The public site receives only published sections.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "button", 188);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_12_Template_button_click_102_listener() {
      \u0275\u0275restoreView(_r85);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.activeView.set("contact"));
    });
    \u0275\u0275text(103, "Review contact details");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r1.publishedCount());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.pageCount());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.staffAccountCount() || "\u2014");
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r1.roleCounts()["super_admin"] || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.roleCounts()["admin"] || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.roleCounts()["teacher"] || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.roleCounts()["clerk"] || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.roleCounts()["security"] || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.roleCounts()["student"] || 0);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r1.pageContents().length ? 84 : 85);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_13_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r89 = ctx.$implicit;
    \u0275\u0275property("value", student_r89.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4("", student_r89.first_name, " ", student_r89.last_name, " \xB7 ", student_r89.class_option.name, " \xB7 ", student_r89.student_id);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_13_Conditional_18_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r92 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r92.new_value ? "Granted" : "Revoked");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r92.changed_by_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 3, entry_r92.changed_at, "medium"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_13_Conditional_18_ForEmpty_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, "No permission changes recorded.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_13_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Current access: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 43)(5, "button", 44);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_13_Conditional_18_Template_button_click_5_listener() {
      const visibility_r91 = \u0275\u0275restoreView(_r90);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setStudentFeeVisibility(!visibility_r91.can_view_amounts));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h4");
    \u0275\u0275text(8, "Change history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 71);
    \u0275\u0275repeaterCreate(10, Dashboard_Conditional_1_Conditional_48_Conditional_13_Conditional_18_For_11_Template, 8, 6, "div", 98, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_13_Conditional_18_ForEmpty_12_Template, 2, 0, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const visibility_r91 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(visibility_r91.can_view_amounts ? "Amounts visible" : "Amounts hidden");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.feeVisibilitySaving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.feeVisibilitySaving() ? "Saving\u2026" : visibility_r91.can_view_amounts ? "Revoke amount access" : "Grant amount access");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(visibility_r91.audit);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 46)(1, "div", 101)(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "Student-specific disclosure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Parent fee amounts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "label");
    \u0275\u0275text(9, "Search student");
    \u0275\u0275elementStart(10, "input", 193);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_13_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r88);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.searchFeeVisibilityStudents($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "label");
    \u0275\u0275text(12, "Student");
    \u0275\u0275elementStart(13, "select", 194);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_13_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r88);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadStudentFeeVisibility($event));
    });
    \u0275\u0275elementStart(14, "option", 41);
    \u0275\u0275text(15, "Select a student");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, Dashboard_Conditional_1_Conditional_48_Conditional_13_For_17_Template, 2, 5, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, Dashboard_Conditional_1_Conditional_48_Conditional_13_Conditional_18_Template, 13, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "aside", 38)(20, "span", 39);
    \u0275\u0275text(21, "Parent dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "h3");
    \u0275\u0275text(23, "Amounts stay private by default");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25, "Grants apply to this student only. Statuses and outstanding due remain visible to linked parents.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngModel", ctx_r1.feeVisibilitySearch);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.feeVisibilityStudentId());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.familyStudents());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_8_0 = ctx_r1.studentFeeVisibility()) ? 18 : -1, tmp_8_0);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_14_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_14_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r94);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.startParentForm());
    });
    \u0275\u0275text(1, "Add parent account");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_14_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parent_r95 = ctx.$implicit;
    \u0275\u0275property("value", parent_r95.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", parent_r95.name, " \xB7 ", parent_r95.email);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_14_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 96)(1, "input", 196);
    \u0275\u0275listener("change", function Dashboard_Conditional_1_Conditional_48_Conditional_14_For_18_Template_input_change_1_listener($event) {
      const student_r97 = \u0275\u0275restoreView(_r96).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleParentStudent(student_r97.id, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const student_r97 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.parentAccessStudentIds().includes(student_r97.id))("disabled", !ctx_r1.parentAccessParentId());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", student_r97.first_name, " ", student_r97.last_name, " \xB7 ", student_r97.class_option.name, " \xB7 ", student_r97.student_id);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_14_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, "No students are available.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 46)(1, "div", 101)(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "Authenticated relationships");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Link a parent account");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, Dashboard_Conditional_1_Conditional_48_Conditional_14_Conditional_8_Template, 2, 0, "button", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label");
    \u0275\u0275text(10, "Parent account");
    \u0275\u0275elementStart(11, "select", 195);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_14_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r93);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadParentAccess($event));
    });
    \u0275\u0275elementStart(12, "option", 41);
    \u0275\u0275text(13, "Select a parent");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, Dashboard_Conditional_1_Conditional_48_Conditional_14_For_15_Template, 2, 3, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 71);
    \u0275\u0275repeaterCreate(17, Dashboard_Conditional_1_Conditional_48_Conditional_14_For_18_Template, 4, 6, "label", 96, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_14_ForEmpty_19_Template, 2, 0, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 43)(21, "button", 44);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_14_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r93);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveParentAccess());
    });
    \u0275\u0275text(22, "Save family access");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "aside", 38)(24, "span", 39);
    \u0275\u0275text(25, "Family access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "h3");
    \u0275\u0275text(27, "Linked children only");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29, "Parent note access is derived from these saved relationships and checked by the API on every request.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.can("users", "create") ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.parentAccessParentId());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.parentAccounts());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.familyStudents());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.parentAccessParentId() || ctx_r1.loading() || !ctx_r1.can("students", "update"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_15_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_15_For_3_Template_button_click_0_listener() {
      const page_r100 = \u0275\u0275restoreView(_r99).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectPage(page_r100.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r100 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r1.selectedPage() === page_r100.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r100.label);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r101 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r101);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.startNewContent());
    });
    \u0275\u0275text(1, "New section ");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\uFF0B");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_15_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 221);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_15_For_2_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r104);
      const content_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.deleteContent(content_r103));
    });
    \u0275\u0275text(1, "\u{1F5D1}");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 216)(1, "button", 217);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_15_For_2_Template_button_click_1_listener() {
      const content_r103 = \u0275\u0275restoreView(_r102).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.editContent(content_r103));
    });
    \u0275\u0275elementStart(2, "span", 218);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 219);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_15_For_2_Conditional_12_Template, 2, 0, "button", 220);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r103 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("selected", ctx_r1.editingContentId() === content_r103.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 9, content_r103.display_order, "2.0"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(content_r103.section_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(content_r103.title || "No title");
    \u0275\u0275advance();
    \u0275\u0275classProp("unpublished", !content_r103.is_published);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(content_r103.is_published ? "Live" : "Draft");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can("page_content", "delete") ? 12 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 202);
    \u0275\u0275repeaterCreate(1, Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_15_For_2_Template, 13, 12, "article", 215, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.pageContents());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "strong");
    \u0275\u0275text(2, "No sections yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Create the first block for this page.");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r105 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "label");
    \u0275\u0275text(2, "Page");
    \u0275\u0275elementStart(3, "select", 222);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_24_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r105);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.contentForm.page_name, $event) || (ctx_r1.contentForm.page_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 223);
    \u0275\u0275text(5, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 224);
    \u0275\u0275text(7, "About Us");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 225);
    \u0275\u0275text(9, "Header");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 226);
    \u0275\u0275text(11, "Footer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 227);
    \u0275\u0275text(13, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 228);
    \u0275\u0275text(15, "Activities");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label");
    \u0275\u0275text(17, "Section key");
    \u0275\u0275elementStart(18, "input", 229);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_24_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r105);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.contentForm.section_name, $event) || (ctx_r1.contentForm.section_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contentForm.page_name);
    \u0275\u0275control();
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contentForm.section_name);
    \u0275\u0275control();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_60_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r106);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.startNewContent());
    });
    \u0275\u0275text(2, "Clear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 92);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loading() ? "Saving\u2026" : "Save section");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 197)(1, "div", 198);
    \u0275\u0275repeaterCreate(2, Dashboard_Conditional_1_Conditional_48_Conditional_15_For_3_Template, 2, 3, "button", 21, _forTrack6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_4_Template, 4, 0, "button", 199);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "section", 200)(6, "div", 201)(7, "div", 57)(8, "div")(9, "span", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3");
    \u0275\u0275text(12, "Sections");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 171);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_15_Template, 3, 0, "div", 202)(16, Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_16_Template, 5, 0, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "form", 203);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_15_Template_form_ngSubmit_17_listener() {
      \u0275\u0275restoreView(_r98);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveContent());
    });
    \u0275\u0275elementStart(18, "div", 57)(19, "div")(20, "span", 39);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "h3");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(24, Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_24_Template, 19, 2, "div", 84);
    \u0275\u0275elementStart(25, "div", 84)(26, "label");
    \u0275\u0275text(27, "Content type");
    \u0275\u0275elementStart(28, "select", 204);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_15_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r98);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.contentForm.content_type, $event) || (ctx_r1.contentForm.content_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "option", 205);
    \u0275\u0275text(30, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 206);
    \u0275\u0275text(32, "Hero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 207);
    \u0275\u0275text(34, "Link group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 208);
    \u0275\u0275text(36, "Image");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "label");
    \u0275\u0275text(38, "Display order");
    \u0275\u0275elementStart(39, "input", 209);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_15_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r98);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.contentForm.display_order, $event) || (ctx_r1.contentForm.display_order = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "label");
    \u0275\u0275text(41, "Title");
    \u0275\u0275elementStart(42, "input", 210);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_15_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r98);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.contentForm.title, $event) || (ctx_r1.contentForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "label");
    \u0275\u0275text(44, "Body");
    \u0275\u0275elementStart(45, "textarea", 211);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_15_Template_textarea_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r98);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.contentForm.body, $event) || (ctx_r1.contentForm.body = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 84)(47, "label");
    \u0275\u0275text(48, "Image URL");
    \u0275\u0275elementStart(49, "input", 212);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_15_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r98);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.contentForm.image_url, $event) || (ctx_r1.contentForm.image_url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "label");
    \u0275\u0275text(51, "Link URL");
    \u0275\u0275elementStart(52, "input", 213);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_15_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r98);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.contentForm.link_url, $event) || (ctx_r1.contentForm.link_url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "label", 96)(54, "input", 214);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_15_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r98);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.contentForm.is_published, $event) || (ctx_r1.contentForm.is_published = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(55, "span")(56, "strong");
    \u0275\u0275text(57, "Publish this section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "small");
    \u0275\u0275text(59, "Visible on the public page");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(60, Dashboard_Conditional_1_Conditional_48_Conditional_15_Conditional_60_Template, 5, 2, "div", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.pageOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can("page_content", "create") ? 4 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedPage(), " page");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.pageContents().length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pageContents().length ? 15 : 16);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.editingContentId() ? "Edit section" : "New section");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editingContentId() ? ctx_r1.contentForm.section_name : "Build a page block");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.editingContentId() ? 24 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contentForm.content_type);
    \u0275\u0275control();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contentForm.display_order);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contentForm.title);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contentForm.body);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contentForm.image_url);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contentForm.link_url);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contentForm.is_published);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.can(ctx_r1.editingContentId() ? "page_content" : "page_content", ctx_r1.editingContentId() ? "update" : "create") ? 60 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_16_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 92);
    \u0275\u0275text(2, "Save contact details");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r107 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 32)(1, "form", 230);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_16_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r107);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveSiteContent());
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "Public contact block");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Make it easy to reach Tiny Tara.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 100);
    \u0275\u0275text(9, "Live site details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 84)(11, "label");
    \u0275\u0275text(12, "Email");
    \u0275\u0275elementStart(13, "input", 231);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_16_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r107);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateSiteField("email", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label");
    \u0275\u0275text(15, "Phone");
    \u0275\u0275elementStart(16, "input", 232);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_16_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r107);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateSiteField("phone", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "label");
    \u0275\u0275text(18, "Address");
    \u0275\u0275elementStart(19, "textarea", 233);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_16_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r107);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateSiteField("address", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 84)(21, "label");
    \u0275\u0275text(22, "School days");
    \u0275\u0275elementStart(23, "input", 234);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_16_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r107);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateSiteField("school_days", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "label");
    \u0275\u0275text(25, "School hours");
    \u0275\u0275elementStart(26, "input", 235);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_16_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r107);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateSiteField("school_hours", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(27, Dashboard_Conditional_1_Conditional_48_Conditional_16_Conditional_27_Template, 3, 1, "div", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngModel", ctx_r1.siteContent().email);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.siteContent().phone);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.siteContent().address);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.siteContent().school_days);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.siteContent().school_hours);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can("site_content", "update") ? 27 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_17_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 92);
    \u0275\u0275text(2, "Upload image ");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u2191");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading() || !ctx_r1.galleryFile);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r108 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 32)(1, "form", 236);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_17_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r108);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.uploadGallery());
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "Media library");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Put a real moment on the page.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 100);
    \u0275\u0275text(9, "JPG \xB7 PNG \xB7 WebP");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 237)(11, "span", 238);
    \u0275\u0275text(12, "\u2191");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "small");
    \u0275\u0275text(16, "Maximum file size 10 MB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 239);
    \u0275\u0275listener("change", function Dashboard_Conditional_1_Conditional_48_Conditional_17_Template_input_change_17_listener($event) {
      \u0275\u0275restoreView(_r108);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onGalleryFile($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label");
    \u0275\u0275text(19, "Page name");
    \u0275\u0275elementStart(20, "select", 240);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_17_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r108);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.galleryPageName, $event) || (ctx_r1.galleryPageName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(21, "option", 223);
    \u0275\u0275text(22, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 224);
    \u0275\u0275text(24, "About Us");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 228);
    \u0275\u0275text(26, "Activities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 227);
    \u0275\u0275text(28, "Contact");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, Dashboard_Conditional_1_Conditional_48_Conditional_17_Conditional_29_Template, 5, 1, "div", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.galleryFile?.name || "Choose a gallery image");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.galleryPageName);
    \u0275\u0275control();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.can("gallery", "create") ? 29 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_18_For_27_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 96)(1, "input", 99);
    \u0275\u0275listener("change", function Dashboard_Conditional_1_Conditional_48_Conditional_18_For_27_For_5_Template_input_change_1_listener() {
      const action_r111 = \u0275\u0275restoreView(_r110).$implicit;
      const resource_r112 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.togglePermission(ctx_r1.selectedPermissionRole(), resource_r112, action_r111));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r111 = ctx.$implicit;
    const resource_r112 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.permissionEnabled(ctx_r1.selectedPermissionRole(), resource_r112, action_r111));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r111);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_18_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 248)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 249);
    \u0275\u0275repeaterCreate(4, Dashboard_Conditional_1_Conditional_48_Conditional_18_For_27_For_5_Template, 4, 2, "label", 96, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const resource_r112 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(resource_r112);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.permissionActions());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r109 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 49)(1, "div", 57)(2, "div")(3, "span", 39);
    \u0275\u0275text(4, "Access management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Role permissions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 100);
    \u0275\u0275text(8, "Super admin only");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 84)(10, "label");
    \u0275\u0275text(11, "Role ");
    \u0275\u0275elementStart(12, "select", 40);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_18_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r109);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedPermissionRole.set($event));
    });
    \u0275\u0275elementStart(13, "option", 241);
    \u0275\u0275text(14, "Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 242);
    \u0275\u0275text(16, "Clerk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 243);
    \u0275\u0275text(18, "Security");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 244);
    \u0275\u0275text(20, "Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 245);
    \u0275\u0275text(22, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 246);
    \u0275\u0275text(24, "Parent");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 247);
    \u0275\u0275repeaterCreate(26, Dashboard_Conditional_1_Conditional_48_Conditional_18_For_27_Template, 6, 1, "div", 248, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 43)(29, "button", 44);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_18_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r109);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.savePermissions());
    });
    \u0275\u0275text(30, "Save permissions");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngModel", ctx_r1.selectedPermissionRole());
    \u0275\u0275control();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.permissionResources());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r114 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r114);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.isParentsView() ? ctx_r1.startParentForm() : ctx_r1.startStaffForm());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.isParentsView() ? "Add parent" : "Add staff");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r115 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 258);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_15_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r115);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onStaffRoleChange($event));
    });
    \u0275\u0275elementStart(1, "option", 41);
    \u0275\u0275text(2, "All staff roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 259);
    \u0275\u0275text(4, "Super Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 244);
    \u0275\u0275text(6, "Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 241);
    \u0275\u0275text(8, "Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 242);
    \u0275\u0275text(10, "Clerk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 243);
    \u0275\u0275text(12, "Security");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", ctx_r1.staffRole);
    \u0275\u0275control();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r117 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 265);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Conditional_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r117);
      const member_r118 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.viewStaff(member_r118));
    });
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r118 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r118.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r118 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(member_r118.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r119 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 266);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r119);
      const member_r118 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editStaff(member_r118));
    });
    \u0275\u0275text(1, "\u270E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 267);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Conditional_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r119);
      const member_r118 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.startPasswordChange(member_r118));
    });
    \u0275\u0275text(3, "Change password");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r120 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 268);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r120);
      const member_r118 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleAccount(member_r118));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r118 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(member_r118.is_active ? "Deactivate" : "Activate");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r121 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 269);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r121);
      const member_r118 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteAccount(member_r118));
    });
    \u0275\u0275text(1, "\u{1F5D1}");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r116 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Conditional_2_Template, 3, 1, "a", 260)(3, Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Conditional_3_Template, 2, 1, "strong");
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 170);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 261)(14, "button", 262);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Template_button_click_14_listener() {
      const member_r118 = \u0275\u0275restoreView(_r116).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.viewStaff(member_r118));
    });
    \u0275\u0275text(15, "\u{1F441}");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Conditional_16_Template, 4, 0);
    \u0275\u0275conditionalCreate(17, Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Conditional_17_Template, 2, 1, "button", 263);
    \u0275\u0275conditionalCreate(18, Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Conditional_18_Template, 2, 0, "button", 264);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r118 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(member_r118.role === "parent" ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r118.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r118.staff_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r118.role);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("status-inactive", !member_r118.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(member_r118.is_active ? "Active" : "Inactive");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.can("users", "update") ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isProtectedAccount(member_r118) && ctx_r1.can("users", "update") ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isProtectedAccount(member_r118) && ctx_r1.can("users", "delete") ? 18 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_ForEmpty_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 157)(2, "div", 73)(3, "strong");
    \u0275\u0275text(4, "No accounts loaded.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Create the first team member above.");
    \u0275\u0275elementEnd()()()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r122 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114)(1, "button", 117);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_41_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r122);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changeStaffPage(ctx_r1.staffPage() - 1));
    });
    \u0275\u0275text(2, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 117);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_41_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r122);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changeStaffPage(ctx_r1.staffPage() + 1));
    });
    \u0275\u0275text(6, "Next");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.staffPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.staffPage(), " of ", ctx_r1.staffTotalPages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.staffPage() === ctx_r1.staffTotalPages());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("first name"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("email"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("mobile"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 246);
    \u0275\u0275text(1, "Parent");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_46_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 244);
    \u0275\u0275text(1, "Admin");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_46_Conditional_0_Template, 2, 0, "option", 244);
    \u0275\u0275elementStart(1, "option", 241);
    \u0275\u0275text(2, "Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 242);
    \u0275\u0275text(4, "Clerk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 243);
    \u0275\u0275text(6, "Security");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional(ctx_r1.isSuperAdmin() ? 0 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("role"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_For_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r124 = ctx.$implicit;
    \u0275\u0275property("value", group_r124);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r124);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_55_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("password"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r125 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "Temporary password ");
    \u0275\u0275elementStart(2, "span", 272);
    \u0275\u0275text(3, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 285);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_55_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r125);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.staffForm.password, $event) || (ctx_r1.staffForm.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(5, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_55_Conditional_5_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.staffForm.password);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("password") ? 5 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("address_line1"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("colony"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("city"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("state"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("pin code"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r123);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.staffFormOpen.set(false));
    });
    \u0275\u0275elementStart(1, "form", 270);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r123);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.createStaffAccount());
    })("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template_form_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "Restricted workspace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 100);
    \u0275\u0275text(9, "Admin only");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_10_Template, 2, 1, "p", 120);
    \u0275\u0275elementStart(11, "p", 174);
    \u0275\u0275text(12, "Create an account for a teacher, clerk, or security team member. Their permissions are assigned automatically by role.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 271)(14, "label");
    \u0275\u0275text(15, "First name ");
    \u0275\u0275elementStart(16, "span", 272);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 273);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r123);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.staffForm.first_name, $event) || (ctx_r1.staffForm.first_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(19, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_19_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label");
    \u0275\u0275text(21, "Middle name");
    \u0275\u0275elementStart(22, "input", 275);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r123);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.staffForm.middle_name, $event) || (ctx_r1.staffForm.middle_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "label");
    \u0275\u0275text(24, "Last name");
    \u0275\u0275elementStart(25, "input", 276);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r123);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.staffForm.last_name, $event) || (ctx_r1.staffForm.last_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 84)(27, "label");
    \u0275\u0275text(28, "Email ");
    \u0275\u0275elementStart(29, "span", 272);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 277);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r123);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.staffForm.email, $event) || (ctx_r1.staffForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(32, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_32_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "label");
    \u0275\u0275text(34, "Mobile number ");
    \u0275\u0275elementStart(35, "span", 272);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 278);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r123);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.staffForm.mobile, $event) || (ctx_r1.staffForm.mobile = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(38, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_38_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 84)(40, "label");
    \u0275\u0275text(41, "Role ");
    \u0275\u0275elementStart(42, "span", 272);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "select", 258);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template_select_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r123);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.staffForm.role, $event) || (ctx_r1.staffForm.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275conditionalCreate(45, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_45_Template, 2, 0, "option", 246)(46, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_46_Template, 7, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(47, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_47_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "label");
    \u0275\u0275text(49, "Blood group");
    \u0275\u0275elementStart(50, "select", 279);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template_select_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r123);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.staffForm.blood_group, $event) || (ctx_r1.staffForm.blood_group = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(51, "option", 41);
    \u0275\u0275text(52, "Prefer not to say");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(53, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_For_54_Template, 2, 2, "option", 42, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(55, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_55_Template, 6, 2, "label");
    \u0275\u0275elementStart(56, "label");
    \u0275\u0275text(57, "Address line 1 ");
    \u0275\u0275elementStart(58, "span", 272);
    \u0275\u0275text(59, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "input", 280);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template_input_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r123);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.staffForm.address_line1, $event) || (ctx_r1.staffForm.address_line1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(61, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_61_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 84)(63, "label");
    \u0275\u0275text(64, "Colony/Mohalla ");
    \u0275\u0275elementStart(65, "span", 272);
    \u0275\u0275text(66, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "input", 281);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template_input_ngModelChange_67_listener($event) {
      \u0275\u0275restoreView(_r123);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.staffForm.colony, $event) || (ctx_r1.staffForm.colony = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(68, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_68_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "label");
    \u0275\u0275text(70, "City ");
    \u0275\u0275elementStart(71, "span", 272);
    \u0275\u0275text(72, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "input", 282);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template_input_ngModelChange_73_listener($event) {
      \u0275\u0275restoreView(_r123);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.staffForm.city, $event) || (ctx_r1.staffForm.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(74, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_74_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 84)(76, "label");
    \u0275\u0275text(77, "State ");
    \u0275\u0275elementStart(78, "span", 272);
    \u0275\u0275text(79, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "input", 283);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template_input_ngModelChange_80_listener($event) {
      \u0275\u0275restoreView(_r123);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.staffForm.state, $event) || (ctx_r1.staffForm.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(81, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_81_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "label");
    \u0275\u0275text(83, "Pin code ");
    \u0275\u0275elementStart(84, "span", 272);
    \u0275\u0275text(85, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "input", 284);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template_input_ngModelChange_86_listener($event) {
      \u0275\u0275restoreView(_r123);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.staffForm.pin_code, $event) || (ctx_r1.staffForm.pin_code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(87, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Conditional_87_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 43)(89, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template_button_click_89_listener() {
      \u0275\u0275restoreView(_r123);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.staffFormOpen.set(false));
    });
    \u0275\u0275text(90, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "button", 92);
    \u0275\u0275text(92);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.editingStaffId() ? "Edit team member" : "Add a team member");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.error() ? 10 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.staffForm.first_name);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("first name") ? 19 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.staffForm.middle_name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.staffForm.last_name);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.staffForm.email);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("email") ? 32 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.staffForm.mobile);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("mobile") ? 38 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.staffForm.role);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isParentsView() ? 45 : 46);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.fieldError("role") ? 47 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.staffForm.blood_group);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.bloodGroups);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.editingStaffId() ? 55 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.staffForm.address_line1);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("address_line1") ? 61 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.staffForm.colony);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("colony") ? 68 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.staffForm.city);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("city") ? 74 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.staffForm.state);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("state") ? 81 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.staffForm.pin_code);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("pin code") ? 87 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loading() ? "Saving\u2026" : ctx_r1.editingStaffId() ? "Update staff" : "Create account");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Conditional_42_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, "Loading students\u2026");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Conditional_42_Conditional_3_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 170);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r127 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", child_r127.first_name, " ", child_r127.middle_name ? child_r127.middle_name + " " : "", "", child_r127.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r127.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r127.student_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r127.class_option.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r127.section?.name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", child_r127.date_of_birth, " \xB7 ", child_r127.age_detail);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("status-inactive", child_r127.status !== "active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(child_r127.status);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Conditional_42_Conditional_3_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 288)(2, "div", 73);
    \u0275\u0275text(3, "No students are linked to this parent.");
    \u0275\u0275elementEnd()()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Conditional_42_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "table", 113)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Student ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "DOB / Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Conditional_42_Conditional_3_For_18_Template, 17, 12, "tr", null, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Conditional_42_Conditional_3_ForEmpty_19_Template, 4, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.selectedParentStudents());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, "Linked students");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Conditional_42_Conditional_2_Template, 2, 0, "div", 73)(3, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Conditional_42_Conditional_3_Template, 20, 1, "div", 112);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.parentStudentsLoading() ? 2 : 3);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 266);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Conditional_44_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r128);
      const detail_r129 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editStaff(detail_r129));
    });
    \u0275\u0275text(1, "\u270E");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r126 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r126);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectedStaff.set(null));
    });
    \u0275\u0275elementStart(1, "div", 286);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "span", 39);
    \u0275\u0275text(3, "Staff profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "dl", 169)(7, "div")(8, "dt");
    \u0275\u0275text(9, "Staff ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "dd");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "dt");
    \u0275\u0275text(14, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "dt");
    \u0275\u0275text(19, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "dt");
    \u0275\u0275text(24, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dd");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "dt");
    \u0275\u0275text(29, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "dd");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "dt");
    \u0275\u0275text(34, "Blood group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "dd");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div")(38, "dt");
    \u0275\u0275text(39, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "dd");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(42, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Conditional_42_Template, 4, 1);
    \u0275\u0275elementStart(43, "div", 43);
    \u0275\u0275conditionalCreate(44, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Conditional_44_Template, 2, 0, "button", 287);
    \u0275\u0275elementStart(45, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r126);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectedStaff.set(null));
    });
    \u0275\u0275text(46, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const detail_r129 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3("", detail_r129.first_name, " ", detail_r129.middle_name ? detail_r129.middle_name + " " : "", "", detail_r129.last_name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(detail_r129.staff_id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(detail_r129.role);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(detail_r129.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(detail_r129.mobile);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate5("", detail_r129.address_line1, ", ", detail_r129.colony, ", ", detail_r129.city, ", ", detail_r129.state, " - ", detail_r129.pin_code);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(detail_r129.blood_group || "Not provided");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(detail_r129.is_active ? "Active" : "Inactive");
    \u0275\u0275advance();
    \u0275\u0275conditional(detail_r129.role === "parent" ? 42 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can("users", "update") ? 44 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r130 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "form", 289);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_44_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r130);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateUserPassword());
    });
    \u0275\u0275elementStart(2, "span", 39);
    \u0275\u0275text(3, "Admin credential control");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Change password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Set a new password for ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "label");
    \u0275\u0275text(12, "New password");
    \u0275\u0275elementStart(13, "input", 290);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_44_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r130);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.passwordValue, $event) || (ctx_r1.passwordValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 43)(15, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_44_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r130);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelPasswordChange());
    });
    \u0275\u0275text(16, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 92);
    \u0275\u0275text(18, "Update password");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.passwordTarget()?.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.passwordValue);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 250)(1, "div", 57)(2, "div")(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 251)(8, "span", 171);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_10_Template, 2, 1, "button", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 59)(12, "input", 252);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r113);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onStaffSearchChange($event));
    })("keyup.enter", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Template_input_keyup_enter_12_listener() {
      \u0275\u0275restoreView(_r113);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.searchStaff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(13, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r113);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.searchStaff());
    });
    \u0275\u0275text(14, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_15_Template, 13, 1, "select", 253);
    \u0275\u0275elementStart(16, "select", 254);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_19_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r113);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onStaffStatusChange($event));
    });
    \u0275\u0275elementStart(17, "option", 41);
    \u0275\u0275text(18, "All accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 255);
    \u0275\u0275text(20, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 256);
    \u0275\u0275text(22, "Inactive");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 112)(24, "table", 257)(25, "thead")(26, "tr")(27, "th");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "tbody");
    \u0275\u0275repeaterCreate(38, Dashboard_Conditional_1_Conditional_48_Conditional_19_For_39_Template, 19, 10, "tr", null, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_19_ForEmpty_40_Template, 7, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(41, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_41_Template, 7, 4, "div", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(42, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_42_Template, 93, 27, "div", 74);
    \u0275\u0275conditionalCreate(43, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_43_Template, 47, 16, "div", 74);
    \u0275\u0275conditionalCreate(44, Dashboard_Conditional_1_Conditional_48_Conditional_19_Conditional_44_Template, 19, 3, "div", 74);
  }
  if (rf & 2) {
    let tmp_18_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isParentsView() ? "Family directory" : "Team directory");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isParentsView() ? "Parent accounts" : "Staff accounts");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.staffTotal());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can("users", "create") ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.staffSearch)("placeholder", ctx_r1.isParentsView() ? "Search name, email, or parent ID" : "Search name, email, or staff ID");
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.isParentsView() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.staffStatus);
    \u0275\u0275control();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.isParentsView() ? "Parent" : "Staff");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isParentsView() ? "Parent ID" : "Staff ID");
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.users());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.staffTotalPages() > 1 ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.staffFormOpen() ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_18_0 = ctx_r1.selectedStaff()) ? 43 : -1, tmp_18_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.passwordTarget() ? 44 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r132 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r132);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.startStudentForm());
    });
    \u0275\u0275text(1, "Add student");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classOption_r133 = ctx.$implicit;
    \u0275\u0275property("value", classOption_r133.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classOption_r133.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_For_38_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r136 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 295);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_For_38_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r136);
      const student_r135 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editStudent(student_r135));
    });
    \u0275\u0275text(1, "\u270E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 268);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_For_38_Conditional_18_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r136);
      const student_r135 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleStudentStatus(student_r135));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 267);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_For_38_Conditional_18_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r136);
      const student_r135 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.startStudentPasswordChange(student_r135));
    });
    \u0275\u0275text(5, "Change password");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r135 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(student_r135.status === "active" ? "Deactivate" : "Activate");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_For_38_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r137 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 296);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_For_38_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r137);
      const student_r135 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteStudent(student_r135));
    });
    \u0275\u0275text(1, "\u{1F5D1}");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_For_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r134 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 170);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 261)(16, "button", 293);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_For_38_Template_button_click_16_listener() {
      const student_r135 = \u0275\u0275restoreView(_r134).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.viewStudent(student_r135));
    });
    \u0275\u0275text(17, "\u{1F441}");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, Dashboard_Conditional_1_Conditional_48_Conditional_20_For_38_Conditional_18_Template, 6, 1);
    \u0275\u0275conditionalCreate(19, Dashboard_Conditional_1_Conditional_48_Conditional_20_For_38_Conditional_19_Template, 2, 0, "button", 294);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const student_r135 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", student_r135.first_name, " ", student_r135.middle_name ? student_r135.middle_name + " " : "", "", student_r135.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", student_r135.email, " \xB7 ", student_r135.parent_mobile);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(student_r135.student_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(student_r135.age_detail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", student_r135.class_option.name, "", student_r135.section?.name ? " (" + student_r135.section.name + ")" : "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("status-inactive", student_r135.status !== "active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(student_r135.status);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.can("students", "update") ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can("students", "delete") ? 19 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_ForEmpty_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 288)(2, "div", 73)(3, "strong");
    \u0275\u0275text(4, "No students registered.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Add the first student above.");
    \u0275\u0275elementEnd()()()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r138 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114)(1, "button", 117);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_40_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r138);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changeStudentPage(ctx_r1.studentPage() - 1));
    });
    \u0275\u0275text(2, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 117);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_40_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r138);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changeStudentPage(ctx_r1.studentPage() + 1));
    });
    \u0275\u0275text(6, "Next");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.studentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.studentPage(), " of ", ctx_r1.studentTotalPages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.studentPage() === ctx_r1.studentTotalPages());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("first name"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("date of birth"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 301);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Age: ", ctx_r1.studentAgeDetail());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r140 = ctx.$implicit;
    \u0275\u0275property("value", group_r140);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r140);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classOption_r141 = ctx.$implicit;
    \u0275\u0275property("value", classOption_r141.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", classOption_r141.name, " (", classOption_r141.min_age, "\u2013", classOption_r141.max_age, " years)");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("class option id"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r142 = ctx.$implicit;
    \u0275\u0275property("value", section_r142.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(section_r142.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 305);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", ctx_r1.selectedClass()?.name, " is intended for ages ", ctx_r1.selectedClass()?.min_age, "\u2013", ctx_r1.selectedClass()?.max_age, " years.");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("email"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("parent mobile"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("guardian one name"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_93_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("password"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r143 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "Temporary password ");
    \u0275\u0275elementStart(2, "span", 272);
    \u0275\u0275text(3, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 320);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_93_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r143);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.password, $event) || (ctx_r1.studentForm.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(5, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_93_Conditional_5_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.password);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("password") ? 5 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("address_line1"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("colony"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("city"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("state"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldError("pin code"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("disabled", ctx_r1.loading() || !ctx_r1.classOptions().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editingStudentId() ? "Update student" : "Register student");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r139 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.studentFormOpen.set(false));
    });
    \u0275\u0275elementStart(1, "form", 270);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.createStudent());
    })("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_form_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "Student registration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 100);
    \u0275\u0275text(9, "Inactive until activated");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_10_Template, 2, 1, "p", 120);
    \u0275\u0275elementStart(11, "div", 271)(12, "label");
    \u0275\u0275text(13, "First name ");
    \u0275\u0275elementStart(14, "span", 272);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 297);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.first_name, $event) || (ctx_r1.studentForm.first_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(17, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_17_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label");
    \u0275\u0275text(19, "Middle name");
    \u0275\u0275elementStart(20, "input", 298);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.middle_name, $event) || (ctx_r1.studentForm.middle_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label");
    \u0275\u0275text(22, "Last name");
    \u0275\u0275elementStart(23, "input", 299);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.last_name, $event) || (ctx_r1.studentForm.last_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 84)(25, "label");
    \u0275\u0275text(26, "Date of birth ");
    \u0275\u0275elementStart(27, "span", 272);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 300);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.date_of_birth, $event) || (ctx_r1.studentForm.date_of_birth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(30, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_30_Template, 2, 1, "small", 274);
    \u0275\u0275conditionalCreate(31, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_31_Template, 2, 1, "small", 301);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label");
    \u0275\u0275text(33, "Blood group");
    \u0275\u0275elementStart(34, "select", 302);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.blood_group, $event) || (ctx_r1.studentForm.blood_group = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(35, "option", 41);
    \u0275\u0275text(36, "Prefer not to say");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(37, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_For_38_Template, 2, 2, "option", 42, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 84)(40, "label");
    \u0275\u0275text(41, "Class ");
    \u0275\u0275elementStart(42, "span", 272);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "select", 303);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_select_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onStudentFormClassChange($event));
    });
    \u0275\u0275elementStart(45, "option", 152);
    \u0275\u0275text(46, "Select class");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(47, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_For_48_Template, 2, 4, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(49, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_49_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "label");
    \u0275\u0275text(51, "Section");
    \u0275\u0275elementStart(52, "select", 304);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_select_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.section_id, $event) || (ctx_r1.studentForm.section_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(53, "option", 41);
    \u0275\u0275text(54, "No section");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(55, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_For_56_Template, 2, 2, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(57, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_57_Template, 2, 3, "p", 305);
    \u0275\u0275elementStart(58, "div", 84)(59, "label");
    \u0275\u0275text(60, "Parent Email ");
    \u0275\u0275elementStart(61, "span", 272);
    \u0275\u0275text(62, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "input", 306);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.email, $event) || (ctx_r1.studentForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(64, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_64_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "label");
    \u0275\u0275text(66, "Parent mobile ");
    \u0275\u0275elementStart(67, "span", 272);
    \u0275\u0275text(68, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "input", 307);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_input_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.parent_mobile, $event) || (ctx_r1.studentForm.parent_mobile = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(70, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_70_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 84)(72, "label");
    \u0275\u0275text(73, "Father name");
    \u0275\u0275elementStart(74, "input", 308);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_input_ngModelChange_74_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.father_name, $event) || (ctx_r1.studentForm.father_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "label");
    \u0275\u0275text(76, "Mother name");
    \u0275\u0275elementStart(77, "input", 309);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_input_ngModelChange_77_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.mother_name, $event) || (ctx_r1.studentForm.mother_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 310)(79, "strong");
    \u0275\u0275text(80, "Approved guardians");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span", 311);
    \u0275\u0275text(82, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 84)(84, "label");
    \u0275\u0275text(85, "Guardian 1 name ");
    \u0275\u0275elementStart(86, "span", 272);
    \u0275\u0275text(87, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "input", 312);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_input_ngModelChange_88_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.guardian_one_name, $event) || (ctx_r1.studentForm.guardian_one_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(89, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_89_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "label");
    \u0275\u0275text(91, "Guardian 2 name");
    \u0275\u0275elementStart(92, "input", 313);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_input_ngModelChange_92_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.guardian_two_name, $event) || (ctx_r1.studentForm.guardian_two_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(93, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_93_Template, 6, 2, "label");
    \u0275\u0275elementStart(94, "div", 314)(95, "label");
    \u0275\u0275text(96, "Address line 1 ");
    \u0275\u0275elementStart(97, "span", 272);
    \u0275\u0275text(98, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "input", 315);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_input_ngModelChange_99_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.address_line1, $event) || (ctx_r1.studentForm.address_line1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(100, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_100_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 84)(102, "label");
    \u0275\u0275text(103, "Colony/Mohalla ");
    \u0275\u0275elementStart(104, "span", 272);
    \u0275\u0275text(105, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "input", 316);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_input_ngModelChange_106_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.colony, $event) || (ctx_r1.studentForm.colony = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(107, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_107_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "label");
    \u0275\u0275text(109, "City ");
    \u0275\u0275elementStart(110, "span", 272);
    \u0275\u0275text(111, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "input", 317);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_input_ngModelChange_112_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.city, $event) || (ctx_r1.studentForm.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(113, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_113_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 84)(115, "label");
    \u0275\u0275text(116, "State ");
    \u0275\u0275elementStart(117, "span", 272);
    \u0275\u0275text(118, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "input", 318);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_input_ngModelChange_119_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.state, $event) || (ctx_r1.studentForm.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(120, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_120_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "label");
    \u0275\u0275text(122, "Pin code ");
    \u0275\u0275elementStart(123, "span", 272);
    \u0275\u0275text(124, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "input", 319);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_input_ngModelChange_125_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentForm.pin_code, $event) || (ctx_r1.studentForm.pin_code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(126, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_126_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(127, "div", 43)(128, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template_button_click_128_listener() {
      \u0275\u0275restoreView(_r139);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.studentFormOpen.set(false));
    });
    \u0275\u0275text(129, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(130, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Conditional_130_Template, 2, 2, "button", 92);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.editingStudentId() ? "Edit student" : "Register a new student");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.error() ? 10 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.first_name);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("first name") ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.middle_name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.last_name);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.date_of_birth);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("date of birth") ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.studentAgeDetail() ? 31 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.blood_group);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.bloodGroups);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r1.studentForm.class_option_id);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.classOptions());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.fieldError("class option id") ? 49 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.section_id);
    \u0275\u0275property("disabled", !ctx_r1.studentFormSections().length);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.studentFormSections());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectedClass() ? 57 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.email);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("email") ? 64 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.parent_mobile);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("parent mobile") ? 70 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.father_name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.mother_name);
    \u0275\u0275control();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.guardian_one_name);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("guardian one name") ? 89 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.guardian_two_name);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.editingStudentId() ? 93 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.address_line1);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("address_line1") ? 100 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.colony);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("colony") ? 107 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.city);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("city") ? 113 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.state);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("state") ? 120 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentForm.pin_code);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldError("pin code") ? 126 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.can("students", ctx_r1.editingStudentId() ? "update" : "create") ? 130 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_42_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r145 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 268);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_42_Conditional_71_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r145);
      const detail_r146 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleStudentStatus(detail_r146));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 295);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_42_Conditional_71_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r145);
      const detail_r146 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editStudent(detail_r146));
    });
    \u0275\u0275text(3, "\u270E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_42_Conditional_71_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r145);
      const detail_r146 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.startStudentPasswordChange(detail_r146));
    });
    \u0275\u0275text(5, "Change password");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const detail_r146 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(detail_r146.status === "active" ? "Deactivate" : "Activate");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_42_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r147 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 296);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_42_Conditional_72_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r147);
      const detail_r146 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteStudent(detail_r146));
    });
    \u0275\u0275text(1, "\u{1F5D1}");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r144 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_42_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r144);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.closeStudentDetail());
    });
    \u0275\u0275elementStart(1, "div", 286);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_42_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "span", 39);
    \u0275\u0275text(3, "Student profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "dl", 169)(7, "div")(8, "dt");
    \u0275\u0275text(9, "Student ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "dd");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "dt");
    \u0275\u0275text(14, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "dt");
    \u0275\u0275text(19, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "dt");
    \u0275\u0275text(24, "Date of birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dd");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "dt");
    \u0275\u0275text(29, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "dd");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "dt");
    \u0275\u0275text(34, "Parent mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "dd");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div")(38, "dt");
    \u0275\u0275text(39, "Father name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "dd");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div")(43, "dt");
    \u0275\u0275text(44, "Mother name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "dd");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div")(48, "dt");
    \u0275\u0275text(49, "Approved guardians");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "dd");
    \u0275\u0275text(51);
    \u0275\u0275element(52, "br");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div")(55, "dt");
    \u0275\u0275text(56, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "dd");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div")(60, "dt");
    \u0275\u0275text(61, "Blood group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "dd");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div")(65, "dt");
    \u0275\u0275text(66, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "dd")(68, "span", 170);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(70, "div", 43);
    \u0275\u0275conditionalCreate(71, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_42_Conditional_71_Template, 6, 1);
    \u0275\u0275conditionalCreate(72, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_42_Conditional_72_Template, 2, 0, "button", 294);
    \u0275\u0275elementStart(73, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_42_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r144);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.closeStudentDetail());
    });
    \u0275\u0275text(74, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const detail_r146 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3("", detail_r146.first_name, " ", detail_r146.middle_name ? detail_r146.middle_name + " " : "", "", detail_r146.last_name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(detail_r146.student_id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", detail_r146.class_option.name, "", detail_r146.section?.name ? " (" + detail_r146.section.name + ")" : "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(detail_r146.age_detail);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(detail_r146.date_of_birth);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(detail_r146.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(detail_r146.parent_mobile);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(detail_r146.father_name || "Not provided");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(detail_r146.mother_name || "Not provided");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(detail_r146.guardian_one_name || "Not provided");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(detail_r146.guardian_two_name || "Not provided");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate5("", detail_r146.address_line1, ", ", detail_r146.colony, ", ", detail_r146.city, ", ", detail_r146.state, " - ", detail_r146.pin_code);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(detail_r146.blood_group || "Not provided");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("status-inactive", detail_r146.status !== "active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(detail_r146.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can("students", "update") ? 71 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can("students", "delete") ? 72 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r148 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "form", 289);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_43_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r148);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateStudentPassword());
    });
    \u0275\u0275elementStart(2, "span", 39);
    \u0275\u0275text(3, "Student credential control");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Change password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Set a new password for ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "label");
    \u0275\u0275text(12, "New password");
    \u0275\u0275elementStart(13, "input", 321);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_43_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r148);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentPasswordValue, $event) || (ctx_r1.studentPasswordValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 43)(15, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_43_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r148);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelStudentPasswordChange());
    });
    \u0275\u0275text(16, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 92);
    \u0275\u0275text(18, "Update password");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const passwordTarget_r149 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", passwordTarget_r149.first_name, " ", passwordTarget_r149.last_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentPasswordValue);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r131 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 250)(1, "div", 57)(2, "div")(3, "span", 39);
    \u0275\u0275text(4, "Student directory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Registered students");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 251)(8, "span", 171);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_10_Template, 2, 0, "button", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 59)(12, "input", 291);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r131);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onStudentSearchChange($event));
    })("keyup.enter", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Template_input_keyup_enter_12_listener() {
      \u0275\u0275restoreView(_r131);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.searchStudents());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(13, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r131);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.searchStudents());
    });
    \u0275\u0275text(14, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 292);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_20_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r131);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onStudentClassFilterChange($event));
    });
    \u0275\u0275elementStart(16, "option", 41);
    \u0275\u0275text(17, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, Dashboard_Conditional_1_Conditional_48_Conditional_20_For_19_Template, 2, 2, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 112)(21, "table", 257)(22, "thead")(23, "tr")(24, "th");
    \u0275\u0275text(25, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Student ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "tbody");
    \u0275\u0275repeaterCreate(37, Dashboard_Conditional_1_Conditional_48_Conditional_20_For_38_Template, 20, 14, "tr", null, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_20_ForEmpty_39_Template, 7, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(40, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_40_Template, 7, 4, "div", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(41, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_41_Template, 131, 36, "div", 74);
    \u0275\u0275conditionalCreate(42, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_42_Template, 75, 25, "div", 74);
    \u0275\u0275conditionalCreate(43, Dashboard_Conditional_1_Conditional_48_Conditional_20_Conditional_43_Template, 19, 4, "div", 74);
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.studentTotal());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can("students", "create") ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.studentSearch);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.studentClassFilter);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.classOptions());
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.students());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.studentTotalPages() > 1 ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.studentFormOpen() ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_13_0 = ctx_r1.selectedStudent()) ? 42 : -1, tmp_13_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_14_0 = ctx_r1.studentPasswordTarget()) ? 43 : -1, tmp_14_0);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classOption_r151 = ctx.$implicit;
    \u0275\u0275property("value", classOption_r151.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classOption_r151.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r152 = ctx.$implicit;
    \u0275\u0275property("value", section_r152.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(section_r152.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r153 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 44);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_Conditional_27_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r153);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.saveAllDailyAttendance());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.pendingAttendanceCount(), " pending changes");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.pendingAttendanceCount() || ctx_r1.attendanceBulkSaving() || !ctx_r1.canEditAttendanceDate());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.attendanceBulkSaving() ? "Saving\u2026" : "Save all attendance");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Holiday: ", ctx.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_For_46_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r156 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_For_46_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r156);
      const row_r155 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.saveDailyAttendance(row_r155, row_r155.status || ""));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r155 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275styleProp("background", ctx_r1.isAttendanceSaved(row_r155) ? "#2e7d32" : null);
    \u0275\u0275property("disabled", row_r155.status === "holiday" || !ctx_r1.canEditAttendanceDate() || !row_r155.status || !ctx_r1.isAttendanceModified(row_r155) || !!row_r155.saving || ctx_r1.attendanceBulkSaving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r155.saving ? "Saving\u2026" : ctx_r1.isAttendanceSaved(row_r155) ? "Saved" : "Save");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_For_46_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r155 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r155.saveError);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_For_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r154 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "select", 328);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_For_46_Template_select_ngModelChange_11_listener($event) {
      const row_r155 = \u0275\u0275restoreView(_r154).$implicit;
      return \u0275\u0275resetView(row_r155.status = $event);
    });
    \u0275\u0275elementStart(12, "option", 41);
    \u0275\u0275text(13, "Not marked");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 329);
    \u0275\u0275text(15, "Present");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 330);
    \u0275\u0275text(17, "Absent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 331);
    \u0275\u0275text(19, "Late");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 332);
    \u0275\u0275text(21, "Half day");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 62);
    \u0275\u0275text(23, "Leave");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "input", 333);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_For_46_Template_input_ngModelChange_25_listener($event) {
      const row_r155 = \u0275\u0275restoreView(_r154).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.attendanceNote[row_r155.student_id] = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275conditionalCreate(27, Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_For_46_Conditional_27_Template, 2, 4, "button", 334);
    \u0275\u0275conditionalCreate(28, Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_For_46_Conditional_28_Template, 2, 1, "small", 274);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r155 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r155.student_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r155.student_code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r155.class_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r155.section_name || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", row_r155.status || "")("disabled", !ctx_r1.can("attendance", "create") || row_r155.status === "holiday" || !ctx_r1.canEditAttendanceDate() || !!row_r155.saving);
    \u0275\u0275control();
    \u0275\u0275advance(14);
    \u0275\u0275property("ngModel", ctx_r1.attendanceNote[row_r155.student_id] ?? row_r155.note ?? "")("disabled", !ctx_r1.can("attendance", "create") || row_r155.status === "holiday" || !ctx_r1.canEditAttendanceDate() || !!row_r155.saving);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can("attendance", "create") ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r155.saveError ? 28 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_ForEmpty_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 288)(2, "div", 73)(3, "strong");
    \u0275\u0275text(4, "No active students.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "The daily sheet is empty.");
    \u0275\u0275elementEnd()()()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 327)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const holiday_r157 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(holiday_r157.holiday_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(holiday_r157.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_ForEmpty_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1, "No holidays have been added.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r150 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 322)(1, "div", 48)(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "Daily roll call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Student attendance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "label", 182);
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementStart(10, "input", 323);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r150);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changeAttendanceDate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "label", 182);
    \u0275\u0275text(12, "Class");
    \u0275\u0275elementStart(13, "select", 324);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r150);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changeAttendanceClassFilter($event));
    });
    \u0275\u0275elementStart(14, "option", 41);
    \u0275\u0275text(15, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_For_17_Template, 2, 2, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label", 182);
    \u0275\u0275text(19, "Section");
    \u0275\u0275elementStart(20, "select", 325);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r150);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changeAttendanceSectionFilter($event));
    });
    \u0275\u0275elementStart(21, "option", 41);
    \u0275\u0275text(22, "All sections");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(23, Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_For_24_Template, 2, 2, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "p", 174);
    \u0275\u0275text(26, "Today is editable. Past dates are read-only for teachers. Holidays are locked by administration.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_Conditional_27_Template, 5, 3, "div", 43);
    \u0275\u0275conditionalCreate(28, Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_Conditional_28_Template, 2, 1, "p", 120);
    \u0275\u0275elementStart(29, "table", 257)(30, "thead")(31, "tr")(32, "th");
    \u0275\u0275text(33, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th");
    \u0275\u0275text(41, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "tbody");
    \u0275\u0275repeaterCreate(45, Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_For_46_Template, 29, 10, "tr", null, _forTrack7, false, Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_ForEmpty_47_Template, 7, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "aside", 326)(49, "div", 57)(50, "div")(51, "span", 39);
    \u0275\u0275text(52, "School calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "h3");
    \u0275\u0275text(54, "Upcoming holidays");
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(55, Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_For_56_Template, 5, 2, "div", 327, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_ForEmpty_57_Template, 2, 0, "p", 73);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngModel", ctx_r1.attendanceDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.attendanceClassFilter)("disabled", ctx_r1.isTeacher());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.classOptions());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.attendanceSectionFilter)("disabled", !ctx_r1.attendanceFilterSections().length);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.attendanceFilterSections());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.can("attendance", "create") ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_15_0 = ctx_r1.selectedHoliday()) ? 28 : -1, tmp_15_0);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.dailyAttendance());
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r1.holidays());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_1_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r159 = ctx.$implicit;
    \u0275\u0275property("value", student_r159.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate5("", student_r159.first_name, " ", student_r159.last_name, " \xB7 ", student_r159.student_id, " \xB7 ", student_r159.class_option.name, "", student_r159.section?.name ? " (" + student_r159.section.name + ")" : "");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r158 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 32)(1, "form", 335);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_1_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r158);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.recordStaffAttendance());
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "School movement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Record student attendance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 100);
    \u0275\u0275text(9, "WhatsApp click-to-chat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 174);
    \u0275\u0275text(11, "Select School IN or OUT. WhatsApp will open with the parent number and message pre-filled. You will click Send manually.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label");
    \u0275\u0275text(13, "Student");
    \u0275\u0275elementStart(14, "select", 336);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_1_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r158);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.attendanceStudentId, $event) || (ctx_r1.attendanceStudentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 152);
    \u0275\u0275text(16, "Select student");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_1_For_18_Template, 2, 6, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 337)(20, "button", 37);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_1_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r158);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.attendanceDirection = "in");
    });
    \u0275\u0275text(21, "School IN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 37);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_1_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r158);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.attendanceDirection = "out");
    });
    \u0275\u0275text(23, "School OUT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 43)(25, "button", 92);
    \u0275\u0275text(26, "Record and open WhatsApp");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.attendanceStudentId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.attendanceStudents());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("selected", ctx_r1.attendanceDirection === "in");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ctx_r1.attendanceDirection === "out");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.loading() || !ctx_r1.attendanceStudents().length);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_0_Template, 58, 9, "section", 322)(1, Dashboard_Conditional_1_Conditional_48_Conditional_21_Conditional_1_Template, 27, 6, "section", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.canManageClassAttendance() ? 0 : 1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_22_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r161 = ctx.$implicit;
    \u0275\u0275property("value", student_r161.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate5("", student_r161.first_name, " ", student_r161.last_name, " \xB7 ", student_r161.student_id, " \xB7 ", student_r161.class_option.name, "", student_r161.section?.name ? " (" + student_r161.section.name + ")" : "");
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_22_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classOption_r162 = ctx.$implicit;
    \u0275\u0275property("value", classOption_r162.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classOption_r162.name);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_22_For_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const punch_r163 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(punch_r163.student_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(punch_r163.student_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(punch_r163.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(punch_r163.class_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(punch_r163.direction);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 6, punch_r163.punched_at, "dd MMM yyyy, hh:mm a"));
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_22_ForEmpty_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 288)(2, "div", 73)(3, "strong");
    \u0275\u0275text(4, "No punch records found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Try another date or filter.");
    \u0275\u0275elementEnd()()()();
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_22_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r164 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114)(1, "button", 117);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_22_Conditional_80_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r164);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changePunchHistoryPage(ctx_r1.punchHistoryPage() - 1));
    });
    \u0275\u0275text(2, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 117);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_22_Conditional_80_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r164);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changePunchHistoryPage(ctx_r1.punchHistoryPage() + 1));
    });
    \u0275\u0275text(6, "Next");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.punchHistoryPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.punchHistoryPage(), " of ", ctx_r1.punchHistoryTotalPages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.punchHistoryPage() === ctx_r1.punchHistoryTotalPages());
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r160 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 32)(1, "form", 335);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_22_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r160);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.recordStaffAttendance());
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "School movement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Punch In/OUT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 100);
    \u0275\u0275text(9, "WhatsApp click-to-chat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 174);
    \u0275\u0275text(11, "Record a student's arrival or departure and open WhatsApp with the parent message prepared.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label");
    \u0275\u0275text(13, "Student");
    \u0275\u0275elementStart(14, "select", 338);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_22_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r160);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.attendanceStudentId, $event) || (ctx_r1.attendanceStudentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 152);
    \u0275\u0275text(16, "Select student");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, Dashboard_Conditional_1_Conditional_48_Conditional_22_For_18_Template, 2, 6, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 337)(20, "button", 37);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_22_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r160);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.attendanceDirection = "in");
    });
    \u0275\u0275text(21, "Punch In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 37);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_22_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r160);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.attendanceDirection = "out");
    });
    \u0275\u0275text(23, "Punch OUT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 43)(25, "button", 117);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_22_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r160);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.recordStaffAttendance(false));
    });
    \u0275\u0275text(26, "Record only");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 92);
    \u0275\u0275text(28, "Record and open WhatsApp");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "section", 339)(30, "div", 57)(31, "div")(32, "span", 39);
    \u0275\u0275text(33, "Punch register");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "h3");
    \u0275\u0275text(35, "Punch In/OUT details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "span", 100);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "form", 340);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_22_Template_form_ngSubmit_38_listener() {
      \u0275\u0275restoreView(_r160);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.searchPunchHistory());
    });
    \u0275\u0275elementStart(39, "label");
    \u0275\u0275text(40, "Search student");
    \u0275\u0275elementStart(41, "input", 341);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_22_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r160);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPunchSearchChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "label");
    \u0275\u0275text(43, "Date");
    \u0275\u0275elementStart(44, "input", 342);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_22_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r160);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.punchDate, $event) || (ctx_r1.punchDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "label");
    \u0275\u0275text(46, "Class");
    \u0275\u0275elementStart(47, "select", 343);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_22_Template_select_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r160);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.punchClassId, $event) || (ctx_r1.punchClassId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(48, "option", 41);
    \u0275\u0275text(49, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(50, Dashboard_Conditional_1_Conditional_48_Conditional_22_For_51_Template, 2, 2, "option", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "label", 344)(53, "input", 345);
    \u0275\u0275listener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_22_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r160);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePendingCheckoutFilter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275text(54, "Punched IN, not OUT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 43)(56, "button", 346);
    \u0275\u0275text(57, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 51);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Conditional_48_Conditional_22_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r160);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearPunchFilters());
    });
    \u0275\u0275text(59, "Clear");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 112)(61, "table", 347)(62, "thead")(63, "tr")(64, "th");
    \u0275\u0275text(65, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "th");
    \u0275\u0275text(67, "Student ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "th");
    \u0275\u0275text(69, "Email ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "th");
    \u0275\u0275text(71, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "th");
    \u0275\u0275text(73, "Direction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "th");
    \u0275\u0275text(75, "Date and time");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "tbody");
    \u0275\u0275repeaterCreate(77, Dashboard_Conditional_1_Conditional_48_Conditional_22_For_78_Template, 15, 9, "tr", null, _forTrack1, false, Dashboard_Conditional_1_Conditional_48_Conditional_22_ForEmpty_79_Template, 7, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(80, Dashboard_Conditional_1_Conditional_48_Conditional_22_Conditional_80_Template, 7, 4, "div", 114);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.attendanceStudentId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.attendanceStudents());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("selected", ctx_r1.attendanceDirection === "in");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ctx_r1.attendanceDirection === "out");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.loading() || !ctx_r1.attendanceStudents().length);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading() || !ctx_r1.attendanceStudents().length);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r1.punchHistoryTotal(), " records");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.punchSearch);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.punchDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.punchClassId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.punchClasses());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.punchPendingCheckoutOnly);
    \u0275\u0275control();
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx_r1.punchHistory());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.punchHistoryTotalPages() > 1 ? 80 : -1);
  }
}
function Dashboard_Conditional_1_Conditional_48_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r165 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 50)(1, "form", 94);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_23_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r165);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateProfile());
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div")(4, "span", 39);
    \u0275\u0275text(5, "Personal details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Your profile");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 100);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label");
    \u0275\u0275text(11, "Full name");
    \u0275\u0275elementStart(12, "input", 348);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_23_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r165);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.profileName, $event) || (ctx_r1.profileName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label");
    \u0275\u0275text(14, "Email");
    \u0275\u0275element(15, "input", 349);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label");
    \u0275\u0275text(17, "Role");
    \u0275\u0275element(18, "input", 349);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 43)(20, "button", 92);
    \u0275\u0275text(21, "Save name");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "form", 94);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_1_Conditional_48_Conditional_23_Template_form_ngSubmit_22_listener() {
      \u0275\u0275restoreView(_r165);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateMyPassword());
    });
    \u0275\u0275elementStart(23, "div", 57)(24, "div")(25, "span", 39);
    \u0275\u0275text(26, "Account security");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "h3");
    \u0275\u0275text(28, "Update password");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "p", 174);
    \u0275\u0275text(30, "Choose a password with at least 8 characters.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "label");
    \u0275\u0275text(32, "New password");
    \u0275\u0275elementStart(33, "input", 350);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_1_Conditional_48_Conditional_23_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r165);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.profilePassword, $event) || (ctx_r1.profilePassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 43)(35, "button", 92);
    \u0275\u0275text(36, "Update password");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.user()?.staff_id);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.profileName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.user()?.email);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.user()?.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.profilePassword);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function Dashboard_Conditional_1_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Dashboard_Conditional_1_Conditional_48_Conditional_0_Template, 8, 1, "section", 45);
    \u0275\u0275conditionalCreate(1, Dashboard_Conditional_1_Conditional_48_Conditional_1_Template, 31, 4);
    \u0275\u0275conditionalCreate(2, Dashboard_Conditional_1_Conditional_48_Conditional_2_Template, 38, 7);
    \u0275\u0275conditionalCreate(3, Dashboard_Conditional_1_Conditional_48_Conditional_3_Template, 40, 5, "section", 46);
    \u0275\u0275conditionalCreate(4, Dashboard_Conditional_1_Conditional_48_Conditional_4_Template, 16, 3, "section", 46);
    \u0275\u0275conditionalCreate(5, Dashboard_Conditional_1_Conditional_48_Conditional_5_Template, 81, 23);
    \u0275\u0275conditionalCreate(6, Dashboard_Conditional_1_Conditional_48_Conditional_6_Template, 70, 13);
    \u0275\u0275conditionalCreate(7, Dashboard_Conditional_1_Conditional_48_Conditional_7_Template, 69, 13);
    \u0275\u0275conditionalCreate(8, Dashboard_Conditional_1_Conditional_48_Conditional_8_Template, 25, 11);
    \u0275\u0275conditionalCreate(9, Dashboard_Conditional_1_Conditional_48_Conditional_9_Template, 13, 2, "section", 47);
    \u0275\u0275conditionalCreate(10, Dashboard_Conditional_1_Conditional_48_Conditional_10_Template, 13, 2, "section", 47);
    \u0275\u0275conditionalCreate(11, Dashboard_Conditional_1_Conditional_48_Conditional_11_Template, 19, 4, "section", 48);
    \u0275\u0275conditionalCreate(12, Dashboard_Conditional_1_Conditional_48_Conditional_12_Template, 104, 10);
    \u0275\u0275conditionalCreate(13, Dashboard_Conditional_1_Conditional_48_Conditional_13_Template, 26, 3, "section", 46);
    \u0275\u0275conditionalCreate(14, Dashboard_Conditional_1_Conditional_48_Conditional_14_Template, 30, 4, "section", 46);
    \u0275\u0275conditionalCreate(15, Dashboard_Conditional_1_Conditional_48_Conditional_15_Template, 61, 15);
    \u0275\u0275conditionalCreate(16, Dashboard_Conditional_1_Conditional_48_Conditional_16_Template, 28, 6, "section", 32);
    \u0275\u0275conditionalCreate(17, Dashboard_Conditional_1_Conditional_48_Conditional_17_Template, 30, 3, "section", 32);
    \u0275\u0275conditionalCreate(18, Dashboard_Conditional_1_Conditional_48_Conditional_18_Template, 31, 2, "section", 49);
    \u0275\u0275conditionalCreate(19, Dashboard_Conditional_1_Conditional_48_Conditional_19_Template, 45, 15);
    \u0275\u0275conditionalCreate(20, Dashboard_Conditional_1_Conditional_48_Conditional_20_Template, 44, 9);
    \u0275\u0275conditionalCreate(21, Dashboard_Conditional_1_Conditional_48_Conditional_21_Template, 2, 1);
    \u0275\u0275conditionalCreate(22, Dashboard_Conditional_1_Conditional_48_Conditional_22_Template, 81, 14);
    \u0275\u0275conditionalCreate(23, Dashboard_Conditional_1_Conditional_48_Conditional_23_Template, 37, 7, "section", 50);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.isTeacher() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "overview" && ctx_r1.isTeacher() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "notes" && ctx_r1.can("notes", "read") ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "class-access" && ctx_r1.canManageClassAccess() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "holidays" && ctx_r1.canViewHolidays() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "tuition" && ctx_r1.canManageTuition() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "classes" && ctx_r1.canManageClasses() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "my-dashboard" && ctx_r1.isStudent() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "school-notes" && (ctx_r1.isStudent() || ctx_r1.isParent()) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "leave-requests" && ctx_r1.canReviewLeaveRequests() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "enquiries" && ctx_r1.canViewEnquiries() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "my-dashboard" && ctx_r1.isParent() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "overview" && !ctx_r1.isTeacher() && !ctx_r1.isStudent() && !ctx_r1.isParent() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "fee-visibility" && ctx_r1.canManageFeeVisibility() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "family-links" && ctx_r1.canView("family-links") ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "pages" && ctx_r1.can("page_content", "read") ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "contact" && ctx_r1.can("site_content", "read") ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "gallery" && ctx_r1.can("gallery", "read") ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "permissions" && ctx_r1.isSuperAdmin() ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.activeView() === "staff" || ctx_r1.activeView() === "parents") && ctx_r1.canViewStaff() ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "students" && ctx_r1.canViewStudents() ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "attendance" && ctx_r1.canManageClassAttendance() ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "punch-attendance" && ctx_r1.canManagePunchAttendance() ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeView() === "profile" ? 23 : -1);
  }
}
function Dashboard_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "aside", 17)(2, "a", 18)(3, "span", 4);
    \u0275\u0275text(4, "TT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span")(6, "strong");
    \u0275\u0275text(7, "Tiny Tara");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9, "Studio");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(10, "div", 19);
    \u0275\u0275elementStart(11, "p", 20);
    \u0275\u0275text(12, "Workspace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "nav");
    \u0275\u0275repeaterCreate(14, Dashboard_Conditional_1_For_15_Template, 6, 5, "button", 21, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 22)(17, "div", 23)(18, "span", 24);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span")(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "small");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "button", 25);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateTo("profile"));
    });
    \u0275\u0275text(26, "My profile ");
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "\u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 26);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(30, "Sign out ");
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "\u2197");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "main", 27)(34, "header", 28)(35, "div")(36, "span", 5);
    \u0275\u0275text(37, "Tiny Tara / Control room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "h1");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "a", 29);
    \u0275\u0275text(41, "View public site ");
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43, "\u2197");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(44, Dashboard_Conditional_1_Conditional_44_Template, 2, 1, "p", 11);
    \u0275\u0275conditionalCreate(45, Dashboard_Conditional_1_Conditional_45_Template, 2, 1, "p", 30);
    \u0275\u0275conditionalCreate(46, Dashboard_Conditional_1_Conditional_46_Template, 5, 0, "section", 31);
    \u0275\u0275conditionalCreate(47, Dashboard_Conditional_1_Conditional_47_Template, 8, 1, "section", 32)(48, Dashboard_Conditional_1_Conditional_48_Template, 24, 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.dashboardTabs());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.user()?.name?.charAt(0) ?? "A");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.user()?.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.user()?.role);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r1.viewTitle());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.error() ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.notice() ? 45 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pendingItems().length ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isTeacher() && !ctx_r1.teacherClassEntered() ? 47 : 48);
  }
}
var Dashboard = class _Dashboard {
  http = inject(HttpClient);
  router = inject(Router);
  apiUrl = "http://127.0.0.1:8000/api";
  token = signal(
    null,
    ...ngDevMode ? [{ debugName: "token" }] : (
      /* istanbul ignore next */
      []
    )
  );
  user = signal(
    null,
    ...ngDevMode ? [{ debugName: "user" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dashboardTabs = computed(
    () => {
      const tabs = [];
      const add = (visible, view, label) => {
        if (visible)
          tabs.push({ view, label });
      };
      add(this.isStudent() || this.isParent(), "my-dashboard", "My Dashboard");
      add(!this.isStudent() && !this.isParent(), "overview", "Overview");
      add(this.isStudent() || this.isParent(), "school-notes", "School notes");
      add(this.canReviewLeaveRequests(), "leave-requests", "Leave requests");
      add(this.canViewEnquiries(), "enquiries", "Admission enquiries");
      add(this.can("page_content", "read"), "pages", "Page content");
      add(this.can("site_content", "read"), "contact", "Contact details");
      add(this.can("gallery", "read"), "gallery", "Gallery upload");
      add(this.canViewHolidays(), "holidays", "Holidays");
      add(this.isSuperAdmin(), "permissions", "Access control");
      add(this.canManagePunchAttendance(), "punch-attendance", "Punch In/OUT");
      add(this.canManageClassAttendance(), "attendance", "Attendance");
      add(this.canManageTuition(), "tuition", "Tuition fees");
      add(this.canManageFeeVisibility(), "fee-visibility", "Parent fee access");
      add(this.canManageClasses(), "classes", "Classes");
      add(this.canManageClassAccess(), "class-access", "Class access");
      add(this.canView("family-links"), "family-links", "Family access");
      add(this.can("notes", "read") && !this.isStudent() && !this.isParent(), "notes", "School notes");
      add(this.canViewStaff(), "staff", "Staff accounts");
      add(this.canViewStaff(), "parents", "Parent accounts");
      add(this.canViewStudents() && !this.isTeacher(), "students", "Students");
      return tabs;
    },
    ...ngDevMode ? [{ debugName: "dashboardTabs" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageContents = signal(
    [],
    ...ngDevMode ? [{ debugName: "pageContents" }] : (
      /* istanbul ignore next */
      []
    )
  );
  users = signal(
    [],
    ...ngDevMode ? [{ debugName: "users" }] : (
      /* istanbul ignore next */
      []
    )
  );
  siteContent = signal(
    { email: "", phone: "", address: "", school_days: "", school_hours: "" },
    ...ngDevMode ? [{ debugName: "siteContent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  activeView = signal(
    "overview",
    ...ngDevMode ? [{ debugName: "activeView" }] : (
      /* istanbul ignore next */
      []
    )
  );
  classOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "classOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  teacherClasses = signal(
    [],
    ...ngDevMode ? [{ debugName: "teacherClasses" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedTeacherClassId = signal(
    "",
    ...ngDevMode ? [{ debugName: "selectedTeacherClassId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  teacherClassEntered = signal(
    false,
    ...ngDevMode ? [{ debugName: "teacherClassEntered" }] : (
      /* istanbul ignore next */
      []
    )
  );
  classAccessTeacherId = signal(
    "",
    ...ngDevMode ? [{ debugName: "classAccessTeacherId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  classAccessClassIds = signal(
    [],
    ...ngDevMode ? [{ debugName: "classAccessClassIds" }] : (
      /* istanbul ignore next */
      []
    )
  );
  classAccessAuditClassId = signal(
    "",
    ...ngDevMode ? [{ debugName: "classAccessAuditClassId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  classAccessTeachers = signal(
    [],
    ...ngDevMode ? [{ debugName: "classAccessTeachers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  attendanceBulkSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "attendanceBulkSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  unreadCounts = signal(
    null,
    ...ngDevMode ? [{ debugName: "unreadCounts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  notes = signal(
    [],
    ...ngDevMode ? [{ debugName: "notes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  noteStudents = signal(
    [],
    ...ngDevMode ? [{ debugName: "noteStudents" }] : (
      /* istanbul ignore next */
      []
    )
  );
  noteFormOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "noteFormOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editingNoteId = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingNoteId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  noteCategoryFilter = signal(
    "",
    ...ngDevMode ? [{ debugName: "noteCategoryFilter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  noteStudentFilter = signal(
    "",
    ...ngDevMode ? [{ debugName: "noteStudentFilter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  noteDateFilter = signal(
    "",
    ...ngDevMode ? [{ debugName: "noteDateFilter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedNoteChildId = signal(
    "",
    ...ngDevMode ? [{ debugName: "selectedNoteChildId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  noteChildren = signal(
    [],
    ...ngDevMode ? [{ debugName: "noteChildren" }] : (
      /* istanbul ignore next */
      []
    )
  );
  recipientNotes = signal(
    [],
    ...ngDevMode ? [{ debugName: "recipientNotes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  leaveRequests = signal(
    [],
    ...ngDevMode ? [{ debugName: "leaveRequests" }] : (
      /* istanbul ignore next */
      []
    )
  );
  enquiries = signal(
    [],
    ...ngDevMode ? [{ debugName: "enquiries" }] : (
      /* istanbul ignore next */
      []
    )
  );
  parentFeeSummary = signal(
    null,
    ...ngDevMode ? [{ debugName: "parentFeeSummary" }] : (
      /* istanbul ignore next */
      []
    )
  );
  parentFeeLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "parentFeeLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  parentFeeAcademicYear = signal(
    "all",
    ...ngDevMode ? [{ debugName: "parentFeeAcademicYear" }] : (
      /* istanbul ignore next */
      []
    )
  );
  familyStudents = signal(
    [],
    ...ngDevMode ? [{ debugName: "familyStudents" }] : (
      /* istanbul ignore next */
      []
    )
  );
  feeVisibilityStudentId = signal(
    "",
    ...ngDevMode ? [{ debugName: "feeVisibilityStudentId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  studentFeeVisibility = signal(
    null,
    ...ngDevMode ? [{ debugName: "studentFeeVisibility" }] : (
      /* istanbul ignore next */
      []
    )
  );
  feeVisibilitySaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "feeVisibilitySaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  feeVisibilitySearch = "";
  parentAccessParentId = signal(
    "",
    ...ngDevMode ? [{ debugName: "parentAccessParentId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  parentAccessStudentIds = signal(
    [],
    ...ngDevMode ? [{ debugName: "parentAccessStudentIds" }] : (
      /* istanbul ignore next */
      []
    )
  );
  noteClassFilter = signal(
    "",
    ...ngDevMode ? [{ debugName: "noteClassFilter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  noteForm = this.emptyNoteForm();
  students = signal(
    [],
    ...ngDevMode ? [{ debugName: "students" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tuitionStudents = signal(
    [],
    ...ngDevMode ? [{ debugName: "tuitionStudents" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tuitionReport = signal(
    { items: [], page: 1, page_size: 10, total: 0, total_pages: 1, total_due: "0", total_paid: "0", total_balance: "0" },
    ...ngDevMode ? [{ debugName: "tuitionReport" }] : (
      /* istanbul ignore next */
      []
    )
  );
  classTuitions = signal(
    [],
    ...ngDevMode ? [{ debugName: "classTuitions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  classFeeDetailsVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "classFeeDetailsVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  classTuitionFormOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "classTuitionFormOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  classTuitionFormError = signal(
    "",
    ...ngDevMode ? [{ debugName: "classTuitionFormError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editingClassTuitionId = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingClassTuitionId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editingClassId = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingClassId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  attendanceStudents = signal(
    [],
    ...ngDevMode ? [{ debugName: "attendanceStudents" }] : (
      /* istanbul ignore next */
      []
    )
  );
  punchHistory = signal(
    [],
    ...ngDevMode ? [{ debugName: "punchHistory" }] : (
      /* istanbul ignore next */
      []
    )
  );
  punchHistoryTotal = signal(
    0,
    ...ngDevMode ? [{ debugName: "punchHistoryTotal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  punchHistoryPage = signal(
    1,
    ...ngDevMode ? [{ debugName: "punchHistoryPage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  punchHistoryTotalPages = signal(
    1,
    ...ngDevMode ? [{ debugName: "punchHistoryTotalPages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dailyAttendance = signal(
    [],
    ...ngDevMode ? [{ debugName: "dailyAttendance" }] : (
      /* istanbul ignore next */
      []
    )
  );
  holidays = signal(
    [],
    ...ngDevMode ? [{ debugName: "holidays" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editingHolidayId = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingHolidayId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  myStudent = signal(
    null,
    ...ngDevMode ? [{ debugName: "myStudent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  myAttendance = signal(
    [],
    ...ngDevMode ? [{ debugName: "myAttendance" }] : (
      /* istanbul ignore next */
      []
    )
  );
  myPunches = signal(
    [],
    ...ngDevMode ? [{ debugName: "myPunches" }] : (
      /* istanbul ignore next */
      []
    )
  );
  myDiaryEntries = signal(
    [],
    ...ngDevMode ? [{ debugName: "myDiaryEntries" }] : (
      /* istanbul ignore next */
      []
    )
  );
  myDiaryDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  sectionsClassId = signal(
    "",
    ...ngDevMode ? [{ debugName: "sectionsClassId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  classSections = signal(
    [],
    ...ngDevMode ? [{ debugName: "classSections" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editingSectionId = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingSectionId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  attendanceFilterSections = signal(
    [],
    ...ngDevMode ? [{ debugName: "attendanceFilterSections" }] : (
      /* istanbul ignore next */
      []
    )
  );
  studentFormSections = signal(
    [],
    ...ngDevMode ? [{ debugName: "studentFormSections" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rolePermissions = signal(
    {},
    ...ngDevMode ? [{ debugName: "rolePermissions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  permissionsLoaded = signal(
    false,
    ...ngDevMode ? [{ debugName: "permissionsLoaded" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedPermissionRole = signal(
    "teacher",
    ...ngDevMode ? [{ debugName: "selectedPermissionRole" }] : (
      /* istanbul ignore next */
      []
    )
  );
  permissionResources = signal(
    ["users", "students", "classes", "site_content", "page_content", "gallery", "attendance", "holidays", "syllabus", "diary", "notes", "leave_requests", "admission_enquiries", "access_punches", "tuition_fees"],
    ...ngDevMode ? [{ debugName: "permissionResources" }] : (
      /* istanbul ignore next */
      []
    )
  );
  permissionActions = signal(
    ["read", "create", "update", "delete"],
    ...ngDevMode ? [{ debugName: "permissionActions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  studentTotal = signal(
    0,
    ...ngDevMode ? [{ debugName: "studentTotal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  studentPage = signal(
    1,
    ...ngDevMode ? [{ debugName: "studentPage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  studentTotalPages = signal(
    1,
    ...ngDevMode ? [{ debugName: "studentTotalPages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedStudent = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedStudent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedStaff = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedStaff" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedParentStudents = signal(
    [],
    ...ngDevMode ? [{ debugName: "selectedParentStudents" }] : (
      /* istanbul ignore next */
      []
    )
  );
  parentStudentsLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "parentStudentsLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  staffFormOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "staffFormOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  studentFormOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "studentFormOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tuitionFormOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "tuitionFormOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tuitionBalancePaymentTarget = signal(
    null,
    ...ngDevMode ? [{ debugName: "tuitionBalancePaymentTarget" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tuitionFormError = signal(
    "",
    ...ngDevMode ? [{ debugName: "tuitionFormError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tuitionBalancePaymentError = signal(
    "",
    ...ngDevMode ? [{ debugName: "tuitionBalancePaymentError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editingStudentId = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingStudentId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editingStaffId = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingStaffId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  studentPasswordTarget = signal(
    null,
    ...ngDevMode ? [{ debugName: "studentPasswordTarget" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedPage = signal(
    "home",
    ...ngDevMode ? [{ debugName: "selectedPage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editingContentId = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingContentId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  error = signal(
    "",
    ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  fieldErrors = signal(
    {},
    ...ngDevMode ? [{ debugName: "fieldErrors" }] : (
      /* istanbul ignore next */
      []
    )
  );
  notice = signal(
    "",
    ...ngDevMode ? [{ debugName: "notice" }] : (
      /* istanbul ignore next */
      []
    )
  );
  staffTotal = signal(
    0,
    ...ngDevMode ? [{ debugName: "staffTotal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  staffPage = signal(
    1,
    ...ngDevMode ? [{ debugName: "staffPage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  staffTotalPages = signal(
    1,
    ...ngDevMode ? [{ debugName: "staffTotalPages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  roleCounts = signal(
    {},
    ...ngDevMode ? [{ debugName: "roleCounts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  passwordTarget = signal(
    null,
    ...ngDevMode ? [{ debugName: "passwordTarget" }] : (
      /* istanbul ignore next */
      []
    )
  );
  passwordValue = "";
  profileName = "";
  profilePassword = "";
  staffSearch = "";
  staffRole = "";
  staffStatus = "";
  studentForm = this.emptyStudentForm();
  studentSearch = "";
  studentClassFilter = "";
  studentPasswordValue = "";
  attendanceStudentId = "";
  attendanceDirection = "in";
  punchDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  punchSearch = "";
  punchClassId = "";
  punchPendingCheckoutOnly = false;
  attendanceDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  attendanceClassFilter = "";
  attendanceSectionFilter = "";
  attendanceNote = {};
  holidayForm = { holiday_date: "", name: "" };
  leaveForm = { start_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), end_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), reason: "" };
  leaveRemarks = {};
  sectionForm = { name: "", display_order: 0 };
  tuitionSearch = "";
  tuitionClassFilter = "";
  tuitionMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
  tuitionYear = (/* @__PURE__ */ new Date()).getFullYear();
  tuitionStudentSearch = "";
  tuitionStudentClassFilter = "";
  tuitionBalancePaymentForm = this.emptyTuitionBalancePaymentForm();
  classTuitionForm = { class_option_id: "", fee_year: (/* @__PURE__ */ new Date()).getFullYear(), amount: "" };
  classFeeDetailsYear = (/* @__PURE__ */ new Date()).getFullYear();
  classForm = { name: "", min_age: 2, max_age: 6, display_order: 0 };
  tuitionPage = signal(
    1,
    ...ngDevMode ? [{ debugName: "tuitionPage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tuitionForm = this.emptyTuitionForm();
  loginForm = { email: "", password: "" };
  contentForm = this.emptyContentForm();
  staffForm = {
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "teacher",
    mobile: "",
    address_line1: "",
    colony: "",
    city: "",
    state: "",
    pin_code: "",
    blood_group: ""
  };
  bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  galleryPageName = "home";
  galleryFile = null;
  pageOptions = [
    { value: "home", label: "Home" },
    { value: "about", label: "About Us" },
    { value: "header", label: "Header" },
    { value: "footer", label: "Footer" },
    { value: "contact", label: "Contact" },
    { value: "activities", label: "Activities" }
  ];
  ngOnInit() {
    if (typeof window === "undefined") {
      return;
    }
    const savedToken = window.localStorage.getItem("tiny-tara-dashboard-token");
    if (savedToken) {
      this.token.set(savedToken);
      void this.loadWorkspace();
    }
  }
  async login() {
    this.clearMessages();
    this.loading.set(true);
    try {
      const response = await firstValueFrom(this.http.post(`${this.apiUrl}/auth/login`, this.loginForm));
      this.token.set(response.access_token);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("tiny-tara-dashboard-token", response.access_token);
      }
      await this.loadWorkspace();
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to sign in. Check the API and credentials."));
      this.token.set(null);
    } finally {
      this.loading.set(false);
    }
  }
  logout() {
    this.token.set(null);
    this.user.set(null);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("tiny-tara-dashboard-token");
    }
  }
  async loadWorkspace() {
    this.clearMessages();
    try {
      const headers = this.authHeaders();
      const profile = await firstValueFrom(this.http.get(`${this.apiUrl}/auth/me`, { headers }));
      this.user.set(profile);
      await this.loadMyPermissions();
      if (profile.role === "teacher") {
        this.activeView.set("overview");
      } else if (profile.role === "student") {
        this.activeView.set("my-dashboard");
      } else if (profile.role === "parent") {
        this.activeView.set("my-dashboard");
      }
      this.profileName = profile.name;
      if (this.isTeacher()) {
        const classes = await firstValueFrom(this.http.get(`${this.apiUrl}/admin/teacher/classes`, { headers }));
        this.teacherClasses.set(classes);
        this.classOptions.set(classes);
        const savedClassId = window.localStorage.getItem(`tiny-tara-teacher-class-${profile.id}`) ?? "";
        if (classes.some((classOption) => classOption.id === savedClassId)) {
          this.selectedTeacherClassId.set(savedClassId);
          this.teacherClassEntered.set(true);
          this.attendanceClassFilter = savedClassId;
          await Promise.all([this.loadDailyAttendance(), this.loadHolidays()]);
        } else {
          this.selectedTeacherClassId.set("");
          this.teacherClassEntered.set(false);
          this.dailyAttendance.set([]);
        }
      } else if (profile.role === "security") {
        await Promise.all([this.loadAttendanceStudents(), this.loadPunchHistory()]);
      } else if (profile.role === "student") {
        await this.loadMyDashboard();
      } else if (profile.role === "parent") {
        await this.loadParentNotes();
      } else {
        await Promise.all([this.loadPageContents(), this.loadSiteContent(), this.loadUsers(), this.loadClasses(), this.loadAttendanceStudents(), this.loadDailyAttendance(), this.loadStudents(), this.loadHolidays()]);
      }
      await this.loadUnreadCounts();
    } catch (error) {
      this.error.set(this.errorMessage(error, "The dashboard could not load its data."));
      if (error instanceof HttpErrorResponse && error.status === 401) {
        this.logout();
      }
    }
  }
  async navigateTo(view) {
    if (!this.canView(view)) {
      return;
    }
    this.clearMessages();
    this.activeView.set(view);
    if (view === "overview") {
      if (!this.isTeacher())
        await Promise.all([this.loadUsers(), this.loadStudents()]);
    } else if (view === "staff" || view === "parents") {
      this.staffRole = "";
      this.staffSearch = "";
      this.staffStatus = "";
      await this.loadUsers(1);
    } else if (view === "students") {
      await this.loadStudents(1);
    } else if (view === "attendance") {
      this.attendanceClassFilter = this.isTeacher() ? this.selectedTeacherClassId() : "";
      this.attendanceSectionFilter = "";
      this.attendanceFilterSections.set([]);
      await Promise.all([this.loadDailyAttendance(), this.loadHolidays()]);
    } else if (view === "punch-attendance") {
      await Promise.all([this.loadAttendanceStudents(), this.loadPunchHistory()]);
    } else if (view === "my-dashboard") {
      if (this.isParent())
        await this.loadParentNotes();
      else
        await this.loadMyDashboard();
    } else if (view === "school-notes") {
      if (this.isParent())
        await this.loadParentNotes();
      else
        await Promise.all([this.loadRecipientNotes(), this.loadMyLeaveRequests()]);
    } else if (view === "leave-requests") {
      await this.loadLeaveRequests();
    } else if (view === "enquiries") {
      await this.loadEnquiries();
    } else if (view === "tuition") {
      await Promise.all([this.loadTuitionStudents(), this.loadTuitionReport(), this.loadClassTuitions()]);
    } else if (view === "classes") {
      await this.loadClasses();
    } else if (view === "pages") {
      await this.loadPageContents();
    } else if (view === "holidays") {
      await this.loadHolidays();
    } else if (view === "permissions") {
      if (this.isSuperAdmin()) {
        await this.loadRolePermissions();
      }
    } else if (view === "class-access") {
      this.staffRole = "teacher";
      await Promise.all([this.loadUsers(1, 100), this.loadClasses()]);
    } else if (view === "family-links") {
      this.staffRole = "parent";
      await Promise.all([this.loadUsers(1, 100), this.loadFamilyStudents()]);
    } else if (view === "fee-visibility") {
      await this.loadFamilyStudents();
    } else if (view === "notes") {
      await Promise.all([this.loadClasses(), this.loadNoteStudents(), this.loadNotes()]);
    }
  }
  async updateProfile() {
    this.setBusy();
    try {
      const profile = await firstValueFrom(this.http.put(`${this.apiUrl}/auth/me`, { name: this.profileName }, { headers: this.authHeaders() }));
      this.user.set(profile);
      this.notice.set("Profile name updated.");
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to update your profile."));
    } finally {
      this.loading.set(false);
    }
  }
  async updateMyPassword() {
    if (this.profilePassword.length < 8) {
      this.error.set("Password must be at least 8 characters.");
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.put(`${this.apiUrl}/auth/me/password`, { password: this.profilePassword }, { headers: this.authHeaders() }));
      this.profilePassword = "";
      this.notice.set("Your password was updated.");
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to update your password."));
    } finally {
      this.loading.set(false);
    }
  }
  async selectPage(pageName) {
    this.selectedPage.set(pageName);
    await this.loadPageContents();
  }
  canManageStaff() {
    return this.can("users", "create");
  }
  canViewStaff() {
    return this.can("users", "read");
  }
  isParentsView() {
    return this.activeView() === "parents";
  }
  canViewStudents() {
    return this.can("students", "read");
  }
  canManageStudents() {
    return this.can("students", "create") || this.can("students", "update") || this.can("students", "delete");
  }
  canRecordAttendance() {
    return this.can("attendance", "create");
  }
  canManageClassAttendance() {
    return this.can("attendance", "read");
  }
  canManagePunchAttendance() {
    return this.can("access_punches", "read");
  }
  canManageTuition() {
    return this.can("tuition_fees", "read") && this.can("tuition_fees", "create");
  }
  async loadTuitionReport() {
    if (!this.canManageTuition())
      return;
    let params = new HttpParams().set("fee_month", this.tuitionMonth).set("fee_year", this.tuitionYear).set("page", this.tuitionPage()).set("page_size", 10);
    if (this.tuitionSearch.trim())
      params = params.set("search", this.tuitionSearch.trim());
    if (this.tuitionClassFilter)
      params = params.set("class_option_id", this.tuitionClassFilter);
    try {
      this.tuitionReport.set(await firstValueFrom(this.http.get(`${this.apiUrl}/tuition-fees/report`, { headers: this.authHeaders(), params })));
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to load the tuition report."));
    }
  }
  async recordTuitionFee() {
    if (!this.can("tuition_fees", "create"))
      return this.denyPermission();
    await this.selectTuitionStudentFromSearch();
    if (!this.tuitionForm.student_id || !this.tuitionForm.amount_due) {
      this.tuitionFormError.set("Select a student with a configured class fee.");
      return;
    }
    const amountDue = Number(this.tuitionForm.amount_due);
    const amountPaid = Number(this.tuitionForm.amount_paid || 0);
    const discountAmount = Number(this.tuitionForm.discount_amount || 0);
    const adjustmentAmount = Number(this.tuitionForm.adjustment_amount || 0);
    const netPayable = amountDue - discountAmount + adjustmentAmount;
    if (!Number.isFinite(amountDue) || amountDue <= 0 || !Number.isFinite(discountAmount) || discountAmount < 0 || !Number.isFinite(adjustmentAmount) || !Number.isFinite(netPayable) || netPayable < 0 || !Number.isFinite(amountPaid) || amountPaid < 0 || amountPaid > netPayable) {
      this.tuitionFormError.set("Enter valid amounts. The deposit cannot exceed net payable after discounts and adjustments.");
      return;
    }
    if (amountPaid > 0 && (!this.tuitionForm.payment_date || !this.tuitionForm.payment_method)) {
      this.tuitionFormError.set("A payment date and method are required when recording a deposit.");
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.post(`${this.apiUrl}/tuition-fees`, __spreadProps(__spreadValues({}, this.tuitionForm), {
        amount_due: amountDue,
        discount_amount: discountAmount,
        adjustment_amount: adjustmentAmount,
        due_date: this.tuitionForm.due_date || null,
        amount_paid: amountPaid,
        payment_date: amountPaid > 0 ? this.tuitionForm.payment_date : null,
        payment_method: amountPaid > 0 ? this.tuitionForm.payment_method : null,
        payment_reference: this.tuitionForm.payment_reference || null,
        note: this.tuitionForm.note || null
      }), { headers: this.authHeaders() }));
      this.tuitionForm = this.emptyTuitionForm();
      this.tuitionFormOpen.set(false);
      await this.loadTuitionReport();
      this.notice.set("Tuition record saved. Download the receipt from the report.");
    } catch (error) {
      this.tuitionFormError.set(this.errorMessage(error, "Unable to save the tuition record."));
    } finally {
      this.loading.set(false);
    }
  }
  openTuitionBalancePayment(fee) {
    this.tuitionBalancePaymentForm = this.emptyTuitionBalancePaymentForm(fee.balance_due);
    this.tuitionBalancePaymentError.set("");
    this.tuitionBalancePaymentTarget.set(fee);
    this.clearMessages();
  }
  async collectTuitionBalance() {
    if (!this.can("tuition_fees", "create"))
      return this.denyPermission();
    const fee = this.tuitionBalancePaymentTarget();
    const amount = Number(this.tuitionBalancePaymentForm.amount);
    if (!fee || !Number.isFinite(amount) || amount <= 0 || amount > Number(fee.balance_due)) {
      this.tuitionBalancePaymentError.set("Enter a payment amount that does not exceed the remaining balance.");
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.post(`${this.apiUrl}/tuition-fees/${fee.id}/balance-payment`, __spreadProps(__spreadValues({}, this.tuitionBalancePaymentForm), {
        amount,
        payment_reference: this.tuitionBalancePaymentForm.payment_reference || null,
        note: this.tuitionBalancePaymentForm.note || null
      }), { headers: this.authHeaders() }));
      this.tuitionBalancePaymentTarget.set(null);
      await this.loadTuitionReport();
      this.notice.set("Balance payment recorded.");
    } catch (error) {
      this.tuitionBalancePaymentError.set(this.errorMessage(error, "Unable to record the balance payment."));
    } finally {
      this.loading.set(false);
    }
  }
  clearTuitionFilters() {
    this.tuitionSearch = "";
    this.tuitionClassFilter = "";
    this.tuitionMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
    this.tuitionYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.tuitionPage.set(1);
    void this.loadTuitionReport();
  }
  openTuitionForm() {
    this.tuitionForm = this.emptyTuitionForm();
    this.tuitionStudentSearch = "";
    this.tuitionStudentClassFilter = "";
    this.tuitionFormError.set("");
    this.tuitionFormOpen.set(true);
    this.clearMessages();
  }
  openTuitionFormForStudent(fee) {
    this.openTuitionForm();
    this.tuitionStudentClassFilter = this.classOptions().find((option) => option.name === fee.class_name)?.id ?? "";
    this.tuitionStudentSearch = `${fee.student_name} (${fee.student_code})`;
    this.tuitionForm.student_id = fee.student_id;
    this.tuitionForm.fee_month = fee.fee_month;
    this.tuitionForm.fee_year = fee.fee_year;
    this.tuitionForm.amount_due = fee.assessed_amount;
  }
  async updateTuitionDue() {
    const student = this.tuitionStudents().find((item) => item.id === this.tuitionForm.student_id);
    const feeYear = this.tuitionForm.fee_year;
    const findFee = (items) => items.find((item) => item.class_option_id === student?.class_option_id && item.fee_year === feeYear);
    let classTuition = findFee(this.classTuitions());
    if (!classTuition && student) {
      try {
        classTuition = findFee(await firstValueFrom(this.http.get(`${this.apiUrl}/admin/classes/tuition`, { headers: this.authHeaders(), params: { fee_year: feeYear } })));
      } catch {
      }
    }
    this.tuitionForm.amount_due = classTuition?.amount ?? "";
  }
  async saveClassTuition() {
    if (!this.can("classes", this.editingClassTuitionId() ? "update" : "create"))
      return this.denyPermission();
    const amount = Number(this.classTuitionForm.amount);
    const classOption = this.classOptions().find((item) => item.id === this.classTuitionForm.class_option_id);
    if (!classOption || !Number.isFinite(amount) || amount <= 0) {
      this.classTuitionFormError.set("Monthly fee must be greater than zero.");
      return;
    }
    this.setBusy();
    try {
      const request = this.editingClassTuitionId() ? this.http.put(`${this.apiUrl}/admin/classes/${classOption.id}/tuition`, { fee_year: this.classTuitionForm.fee_year, amount }, { headers: this.authHeaders() }) : this.http.post(`${this.apiUrl}/admin/classes/${classOption.id}/tuition`, { fee_year: this.classTuitionForm.fee_year, amount }, { headers: this.authHeaders() });
      await firstValueFrom(request);
      await this.loadClassTuitions();
      await this.loadTuitionReport();
      this.editingClassTuitionId.set(null);
      this.classTuitionForm.amount = "";
      this.classTuitionFormOpen.set(false);
      this.notice.set(`${classOption.name} tuition updated for ${this.classTuitionForm.fee_year}.`);
    } catch (error) {
      this.classTuitionFormError.set(this.errorMessage(error, "Unable to update the class tuition."));
    } finally {
      this.loading.set(false);
    }
  }
  async createClass() {
    if (!this.can("classes", this.editingClassId() ? "update" : "create"))
      return this.denyPermission();
    if (this.classForm.min_age > this.classForm.max_age) {
      this.error.set("Minimum age cannot exceed maximum age.");
      return;
    }
    this.setBusy();
    try {
      const classId = this.editingClassId();
      const request = classId ? this.http.put(`${this.apiUrl}/admin/classes/${classId}`, this.classForm, { headers: this.authHeaders() }) : this.http.post(`${this.apiUrl}/admin/classes`, this.classForm, { headers: this.authHeaders() });
      await firstValueFrom(request);
      this.classForm = { name: "", min_age: 2, max_age: 6, display_order: 0 };
      this.editingClassId.set(null);
      await this.loadClasses();
      this.notice.set(classId ? "Class updated." : "Class added.");
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to add the class."));
    } finally {
      this.loading.set(false);
    }
  }
  editClass(classOption) {
    this.classForm = { name: classOption.name, min_age: classOption.min_age, max_age: classOption.max_age, display_order: classOption.display_order };
    this.editingClassId.set(classOption.id);
    this.clearMessages();
  }
  cancelClassEdit() {
    this.classForm = { name: "", min_age: 2, max_age: 6, display_order: 0 };
    this.editingClassId.set(null);
    this.clearMessages();
  }
  orderedClassTuitions() {
    const displayOrder = new Map(this.classOptions().map((classOption) => [classOption.id, classOption.display_order]));
    return [...this.classTuitions()].sort((first, second) => (displayOrder.get(first.class_option_id) ?? Number.MAX_SAFE_INTEGER) - (displayOrder.get(second.class_option_id) ?? Number.MAX_SAFE_INTEGER) || first.fee_year - second.fee_year);
  }
  async toggleClassFeeDetails() {
    const visible = !this.classFeeDetailsVisible();
    this.classFeeDetailsVisible.set(visible);
    if (visible)
      await this.loadClassTuitions(this.classFeeDetailsYear);
  }
  async changeClassFeeDetailsYear() {
    await this.loadClassTuitions(this.classFeeDetailsYear);
  }
  openClassTuitionForm() {
    this.classTuitionForm = { class_option_id: "", fee_year: (/* @__PURE__ */ new Date()).getFullYear(), amount: "" };
    this.editingClassTuitionId.set(null);
    this.classTuitionFormError.set("");
    this.classTuitionFormOpen.set(true);
  }
  editClassTuition(fee) {
    this.classTuitionForm = { class_option_id: fee.class_option_id, fee_year: fee.fee_year, amount: fee.amount };
    this.editingClassTuitionId.set(fee.id);
    this.classTuitionFormError.set("");
    this.classTuitionFormOpen.set(true);
  }
  changeTuitionPage(page) {
    if (page < 1 || page > this.tuitionReport().total_pages)
      return;
    this.tuitionPage.set(page);
    void this.loadTuitionReport();
  }
  searchTuitionReport() {
    this.tuitionPage.set(1);
    void this.loadTuitionReport();
  }
  downloadTuitionReport(format) {
    let params = new HttpParams().set("fee_month", this.tuitionMonth).set("fee_year", this.tuitionYear);
    if (this.tuitionSearch.trim())
      params = params.set("search", this.tuitionSearch.trim());
    if (this.tuitionClassFilter)
      params = params.set("class_option_id", this.tuitionClassFilter);
    void this.downloadFile(`${this.apiUrl}/tuition-fees/report.${format}`, `tuition-report.${format}`, params);
  }
  downloadTuitionSlip(fee) {
    void this.downloadFile(`${this.apiUrl}/tuition-fees/${fee.id}/slip.pdf`, `${fee.receipt_number}.pdf`);
  }
  isTeacher() {
    return this.user()?.role === "teacher";
  }
  selectedTeacherClass() {
    return this.teacherClasses().find((classOption) => classOption.id === this.selectedTeacherClassId());
  }
  async enterTeacherClass() {
    const classId = this.selectedTeacherClassId();
    if (!this.isTeacher() || !this.teacherClasses().some((classOption) => classOption.id === classId))
      return;
    this.teacherClassEntered.set(true);
    if (typeof window !== "undefined") {
      const userId = this.user()?.id;
      if (userId)
        window.localStorage.setItem(`tiny-tara-teacher-class-${userId}`, classId);
    }
    this.attendanceClassFilter = classId;
    await Promise.all([this.loadDailyAttendance(), this.loadHolidays()]);
  }
  changeTeacherClass() {
    const userId = this.user()?.id;
    if (typeof window !== "undefined" && userId)
      window.localStorage.removeItem(`tiny-tara-teacher-class-${userId}`);
    this.selectedTeacherClassId.set("");
    this.teacherClassEntered.set(false);
    this.dailyAttendance.set([]);
    this.attendanceNote = {};
    this.holidays.set([]);
    this.activeView.set("overview");
  }
  isStudent() {
    return this.user()?.role === "student";
  }
  isParent() {
    return this.user()?.role === "parent";
  }
  canReviewLeaveRequests() {
    const role = this.user()?.role ?? "";
    return ["teacher", "clerk", "admin", "super_admin"].includes(role) && (role !== "teacher" || this.teacherClassEntered()) && this.can("leave_requests", "read") && this.can("leave_requests", "update");
  }
  viewTitle() {
    const titles = {
      overview: "Good morning, editor.",
      pages: "Page content",
      contact: "Contact details",
      gallery: "Gallery upload",
      staff: "Staff accounts",
      parents: "Parent accounts",
      students: "Students",
      classes: "Classes",
      "class-access": "Class access",
      "family-links": "Family access",
      notes: "School notes",
      holidays: "School holidays",
      "fee-visibility": "Parent fee visibility",
      "school-notes": "School notes",
      "leave-requests": "Leave requests",
      enquiries: "Admission enquiries",
      attendance: "Attendance",
      "punch-attendance": "Punch In/OUT",
      tuition: "Tuition fees",
      profile: "My profile",
      permissions: "Access control",
      "my-dashboard": "My Dashboard"
    };
    return titles[this.activeView()];
  }
  today() {
    return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  }
  async loadMyDashboard() {
    try {
      this.myStudent.set(await firstValueFrom(this.http.get(`${this.apiUrl}/students/me`, { headers: this.authHeaders() })));
    } catch {
      this.myStudent.set(null);
    }
    const today = /* @__PURE__ */ new Date();
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().slice(0, 10);
    const todayStr = today.toISOString().slice(0, 10);
    try {
      const params = new HttpParams().set("from_date", monthStart).set("to_date", todayStr);
      this.myAttendance.set(await firstValueFrom(this.http.get(`${this.apiUrl}/attendance/me`, { headers: this.authHeaders(), params })));
    } catch {
      this.myAttendance.set([]);
    }
    try {
      const params = new HttpParams().set("punched_date", todayStr);
      this.myPunches.set(await firstValueFrom(this.http.get(`${this.apiUrl}/access-punches/me`, { headers: this.authHeaders(), params })));
    } catch {
      this.myPunches.set([]);
    }
    await this.loadHolidays();
    await this.loadMyDiary();
  }
  async loadMyDiary() {
    try {
      const params = new HttpParams().set("entry_date", this.myDiaryDate);
      this.myDiaryEntries.set(await firstValueFrom(this.http.get(`${this.apiUrl}/diary/me`, { headers: this.authHeaders(), params })));
    } catch {
      this.myDiaryEntries.set([]);
    }
  }
  async changeMyDiaryDate(value) {
    this.myDiaryDate = value;
    await this.loadMyDiary();
  }
  async loadParentNotes() {
    try {
      const children = await firstValueFrom(this.http.get(`${this.apiUrl}/parents/me/children`, { headers: this.authHeaders() }));
      this.noteChildren.set(children);
      if (!children.some((child) => child.id === this.selectedNoteChildId())) {
        this.selectedNoteChildId.set(children.length === 1 ? children[0].id : "");
      }
      if (!children.length)
        this.parentFeeSummary.set(null);
      await Promise.all([this.loadRecipientNotes(), this.loadParentFeeSummary()]);
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to load linked children."));
      this.noteChildren.set([]);
      this.recipientNotes.set([]);
    }
  }
  async loadRecipientNotes() {
    if (this.isParent() && !this.selectedNoteChildId() && this.noteChildren().length !== 1) {
      this.recipientNotes.set([]);
      return;
    }
    try {
      let params = new HttpParams();
      if (this.isParent()) {
        const childId = this.selectedNoteChildId() || this.noteChildren()[0]?.id;
        if (!childId)
          return;
        params = params.set("student_id", childId);
      }
      this.recipientNotes.set(await firstValueFrom(this.http.get(`${this.apiUrl}/notes/me`, { headers: this.authHeaders(), params })));
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to load notes."));
      this.recipientNotes.set([]);
      return;
    }
    if (this.activeView() === "school-notes") {
      await this.markRecipientNotesRead();
    }
  }
  async loadUnreadCounts() {
    try {
      this.unreadCounts.set(await firstValueFrom(this.http.get(`${this.apiUrl}/notifications/unread-counts`, { headers: this.authHeaders() })));
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to load unread message counts."));
    }
  }
  async markRecipientNotesRead() {
    try {
      let params = new HttpParams();
      if (this.isParent()) {
        const studentId = this.selectedNoteChildId() || (this.noteChildren().length === 1 ? this.noteChildren()[0].id : "");
        if (!studentId)
          return;
        params = params.set("student_id", studentId);
      }
      await firstValueFrom(this.http.post(`${this.apiUrl}/notifications/school-notes/read`, null, { headers: this.authHeaders(), params }));
      await this.loadUnreadCounts();
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to mark school notes as read."));
    }
  }
  async loadMyLeaveRequests() {
    if (!this.isStudent())
      return;
    try {
      this.leaveRequests.set(await firstValueFrom(this.http.get(`${this.apiUrl}/leave-requests/me`, { headers: this.authHeaders() })));
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to load your leave requests."));
      this.leaveRequests.set([]);
    }
  }
  async submitLeaveRequest() {
    if (!this.isStudent())
      return this.denyPermission();
    if (!this.leaveForm.start_date || !this.leaveForm.end_date || this.leaveForm.end_date < this.leaveForm.start_date || !this.leaveForm.reason.trim()) {
      this.error.set("Enter a valid leave date range and reason.");
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.post(`${this.apiUrl}/leave-requests`, {
        start_date: this.leaveForm.start_date,
        end_date: this.leaveForm.end_date,
        reason: this.leaveForm.reason.trim()
      }, { headers: this.authHeaders() }));
      this.leaveForm = { start_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), end_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), reason: "" };
      await this.loadMyLeaveRequests();
      this.notice.set("Your leave application has been submitted.");
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to submit your leave application."));
    } finally {
      this.loading.set(false);
    }
  }
  tabUnreadCount(view) {
    const counts = this.unreadCounts();
    if (view === "school-notes")
      return counts?.school_notes ?? 0;
    if (view === "leave-requests")
      return counts?.leave_requests ?? 0;
    if (view === "enquiries")
      return counts?.admission_enquiries ?? 0;
    return 0;
  }
  pendingItems() {
    const counts = this.unreadCounts();
    const items = [
      { view: "leave-requests", label: "Pending leave requests", count: this.canReviewLeaveRequests() ? counts?.pending_leave_requests ?? 0 : 0 },
      { view: "enquiries", label: "New admission enquiries", count: this.canViewEnquiries() ? counts?.pending_admission_enquiries ?? 0 : 0 }
    ];
    return items.filter((item) => item.count > 0);
  }
  canViewEnquiries() {
    return !this.isStudent() && !this.isParent() && !this.isTeacher() && this.can("admission_enquiries", "read");
  }
  canUpdateEnquiries() {
    return this.can("admission_enquiries", "update");
  }
  enquiryAgeLabel(age) {
    const labels = { "2-3": "Play Group (2 \u2013 3 Years)", "3-4": "Nursery (3 \u2013 4 Years)", "4-5": "LKG (4 \u2013 5 Years)", "5-6": "UKG (5 \u2013 6 Years)" };
    return labels[age] ?? age;
  }
  async loadEnquiries() {
    if (!this.canViewEnquiries())
      return;
    try {
      this.enquiries.set(await firstValueFrom(this.http.get(`${this.apiUrl}/admission-enquiries`, { headers: this.authHeaders() })));
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to load admission enquiries."));
      this.enquiries.set([]);
      return;
    }
    if (this.activeView() === "enquiries") {
      try {
        await firstValueFrom(this.http.post(`${this.apiUrl}/notifications/admission-enquiries/read`, null, { headers: this.authHeaders() }));
        await this.loadUnreadCounts();
      } catch (error) {
        this.error.set(this.errorMessage(error, "Unable to mark admission enquiries as read."));
      }
    }
  }
  async setEnquiryStatus(enquiry, status) {
    if (!this.canUpdateEnquiries())
      return this.denyPermission();
    if (enquiry.status === status)
      return;
    this.setBusy();
    try {
      const updated = await firstValueFrom(this.http.patch(`${this.apiUrl}/admission-enquiries/${enquiry.id}`, { status }, { headers: this.authHeaders() }));
      this.enquiries.update((items) => items.map((item) => item.id === updated.id ? __spreadProps(__spreadValues({}, updated), { is_unread: false }) : item));
      this.notice.set("Enquiry status updated.");
      await this.loadUnreadCounts();
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to update this enquiry."));
    } finally {
      this.loading.set(false);
    }
  }
  async loadLeaveRequests() {
    if (!this.canReviewLeaveRequests())
      return;
    try {
      this.leaveRequests.set(await firstValueFrom(this.http.get(`${this.apiUrl}/leave-requests`, { headers: this.authHeaders() })));
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to load leave requests."));
      this.leaveRequests.set([]);
      return;
    }
    if (this.activeView() === "leave-requests") {
      try {
        await firstValueFrom(this.http.post(`${this.apiUrl}/notifications/leave-requests/read`, null, { headers: this.authHeaders() }));
        await this.loadUnreadCounts();
      } catch (error) {
        this.error.set(this.errorMessage(error, "Unable to mark leave requests as read."));
      }
    }
  }
  async decideLeaveRequest(request, status) {
    if (!this.canReviewLeaveRequests())
      return this.denyPermission();
    if (request.status !== "pending")
      return;
    this.setBusy();
    try {
      await firstValueFrom(this.http.patch(`${this.apiUrl}/leave-requests/${request.id}`, {
        status,
        remarks: this.leaveRemarks[request.id]?.trim() || null
      }, { headers: this.authHeaders() }));
      await this.loadLeaveRequests();
      await this.loadUnreadCounts();
      this.notice.set(`Leave request ${status}.`);
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to review this leave request."));
    } finally {
      this.loading.set(false);
    }
  }
  async selectParentChild(studentId) {
    if (!this.noteChildren().some((child) => child.id === studentId))
      return;
    this.selectedNoteChildId.set(studentId);
    this.parentFeeSummary.set(null);
    await Promise.all([this.loadRecipientNotes(), this.loadParentFeeSummary()]);
  }
  async loadParentFeeSummary() {
    const studentId = this.selectedNoteChildId() || (this.noteChildren().length === 1 ? this.noteChildren()[0].id : "");
    if (!this.isParent() || !studentId || !this.noteChildren().some((child) => child.id === studentId)) {
      this.parentFeeSummary.set(null);
      this.parentFeeLoading.set(false);
      return;
    }
    this.parentFeeLoading.set(true);
    try {
      const params = new HttpParams().set("academic_year", this.parentFeeAcademicYear());
      const summary = await firstValueFrom(this.http.get(`${this.apiUrl}/parents/me/children/${studentId}/fees`, { headers: this.authHeaders(), params }));
      if (summary.student_id === studentId && (this.selectedNoteChildId() === studentId || this.noteChildren().length === 1)) {
        this.parentFeeSummary.set(summary);
      }
    } catch (error) {
      this.parentFeeSummary.set(null);
      this.error.set(this.errorMessage(error, "Unable to load fee information."));
    } finally {
      this.parentFeeLoading.set(false);
    }
  }
  async changeParentFeeAcademicYear(academicYear) {
    this.parentFeeAcademicYear.set(academicYear);
    await this.loadParentFeeSummary();
  }
  async loadNotes() {
    if (!this.can("notes", "read"))
      return;
    let params = new HttpParams();
    const classId = this.isTeacher() ? this.selectedTeacherClassId() : this.noteClassFilter();
    if (classId)
      params = params.set("class_option_id", classId);
    if (this.noteCategoryFilter())
      params = params.set("category", this.noteCategoryFilter());
    if (this.noteStudentFilter())
      params = params.set("student_id", this.noteStudentFilter());
    if (this.noteDateFilter())
      params = params.set("created_date", this.noteDateFilter());
    try {
      this.notes.set(await firstValueFrom(this.http.get(`${this.apiUrl}/notes`, { headers: this.authHeaders(), params })));
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to load notes."));
      this.notes.set([]);
    }
  }
  async loadNoteStudents() {
    let params = new HttpParams().set("page", 1).set("page_size", 100);
    if (this.isTeacher())
      params = params.set("class_option_id", this.selectedTeacherClassId());
    else if (this.noteClassFilter())
      params = params.set("class_option_id", this.noteClassFilter());
    try {
      const response = await firstValueFrom(this.http.get(`${this.apiUrl}/admin/students`, { headers: this.authHeaders(), params }));
      this.noteStudents.set(response.items);
    } catch {
      this.noteStudents.set([]);
    }
  }
  async changeNoteClassFilter(classId) {
    this.noteClassFilter.set(classId);
    this.noteStudentFilter.set("");
    await Promise.all([this.loadNoteStudents(), this.loadNotes()]);
  }
  openNoteForm() {
    this.editingNoteId.set(null);
    this.noteForm = this.emptyNoteForm();
    this.noteForm.class_option_id = this.isTeacher() ? this.selectedTeacherClassId() : this.noteClassFilter();
    this.noteFormOpen.set(true);
  }
  editNote(note) {
    this.editingNoteId.set(note.id);
    this.noteForm = { title: note.title, content: note.content, category: note.category, visibility: note.visibility, class_option_id: note.class_option_id, student_id: note.student_id ?? "", due_date: note.due_date ?? "" };
    this.noteFormOpen.set(true);
  }
  async saveNote() {
    const editingId = this.editingNoteId();
    if (!this.can("notes", editingId ? "update" : "create"))
      return this.denyPermission();
    if (!this.noteForm.class_option_id || !this.noteForm.title.trim() || !this.noteForm.content.trim() || this.noteForm.visibility === "individual" && !this.noteForm.student_id) {
      this.error.set("Complete the title, content, class, and individual recipient fields.");
      return;
    }
    this.setBusy();
    try {
      const payload = __spreadProps(__spreadValues({}, this.noteForm), { student_id: this.noteForm.visibility === "individual" ? this.noteForm.student_id : null, due_date: this.noteForm.due_date || null });
      if (editingId)
        await firstValueFrom(this.http.put(`${this.apiUrl}/notes/${editingId}`, payload, { headers: this.authHeaders() }));
      else
        await firstValueFrom(this.http.post(`${this.apiUrl}/notes`, payload, { headers: this.authHeaders() }));
      this.noteFormOpen.set(false);
      this.notice.set(editingId ? "Note updated." : "Note published.");
      await this.loadNotes();
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to save the note."));
    } finally {
      this.loading.set(false);
    }
  }
  async deleteNote(note) {
    if (!this.can("notes", "delete"))
      return this.denyPermission();
    if (typeof window !== "undefined" && !window.confirm(`Delete \u201C${note.title}\u201D?`))
      return;
    try {
      await firstValueFrom(this.http.delete(`${this.apiUrl}/notes/${note.id}`, { headers: this.authHeaders() }));
      this.notice.set("Note deleted.");
      await this.loadNotes();
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to delete the note."));
    }
  }
  async loadFamilyStudents(search = "") {
    try {
      const params = { page: 1, page_size: 100 };
      if (search.trim())
        params["search"] = search.trim();
      const response = await firstValueFrom(this.http.get(`${this.apiUrl}/admin/students`, { headers: this.authHeaders(), params }));
      this.familyStudents.set(response.items);
    } catch {
      this.familyStudents.set([]);
    }
  }
  searchFeeVisibilityStudents(value) {
    this.feeVisibilitySearch = value;
    this.feeVisibilityStudentId.set("");
    this.studentFeeVisibility.set(null);
    void this.loadFamilyStudents(value);
  }
  async loadParentAccess(parentId) {
    this.parentAccessParentId.set(parentId);
    if (!parentId) {
      this.parentAccessStudentIds.set([]);
      return;
    }
    try {
      const response = await firstValueFrom(this.http.get(`${this.apiUrl}/admin/parent-access/${parentId}`, { headers: this.authHeaders() }));
      this.parentAccessStudentIds.set(response.student_ids);
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to load linked students."));
    }
  }
  canManageFeeVisibility() {
    return this.can("tuition_fees", "read") && this.can("tuition_fees", "update") && this.can("students", "read");
  }
  async loadStudentFeeVisibility(studentId) {
    this.feeVisibilityStudentId.set(studentId);
    this.studentFeeVisibility.set(null);
    if (!studentId || !this.canManageFeeVisibility())
      return;
    try {
      const visibility = await firstValueFrom(this.http.get(`${this.apiUrl}/admin/students/${studentId}/parent-fee-visibility`, { headers: this.authHeaders() }));
      this.studentFeeVisibility.set(visibility);
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to load parent fee visibility."));
    }
  }
  async setStudentFeeVisibility(canViewAmounts) {
    if (!this.canManageFeeVisibility())
      return this.denyPermission();
    const studentId = this.feeVisibilityStudentId();
    if (!studentId)
      return;
    this.feeVisibilitySaving.set(true);
    try {
      const result = await firstValueFrom(this.http.put(`${this.apiUrl}/admin/students/${studentId}/parent-fee-visibility`, { can_view_amounts: canViewAmounts }, { headers: this.authHeaders() }));
      this.studentFeeVisibility.set(result);
      this.notice.set(canViewAmounts ? "Parent fee amounts are now visible for this student." : "Parent fee amounts are hidden for this student.");
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to update parent fee visibility."));
    } finally {
      this.feeVisibilitySaving.set(false);
    }
  }
  toggleParentStudent(studentId, enabled) {
    const selected = new Set(this.parentAccessStudentIds());
    if (enabled)
      selected.add(studentId);
    else
      selected.delete(studentId);
    this.parentAccessStudentIds.set(Array.from(selected));
  }
  parentAccounts() {
    return this.users().filter((member) => member.role === "parent");
  }
  startParentForm() {
    this.staffForm = __spreadProps(__spreadValues({}, this.emptyStaffForm()), { role: "parent" });
    this.editingStaffId.set(null);
    this.staffFormOpen.set(true);
    this.activeView.set("parents");
    this.staffRole = "";
    void this.loadUsers(1);
  }
  async saveParentAccess() {
    if (!this.can("students", "update"))
      return this.denyPermission();
    const parentId = this.parentAccessParentId();
    if (!parentId)
      return;
    this.setBusy();
    try {
      await firstValueFrom(this.http.put(`${this.apiUrl}/admin/parent-access/${parentId}`, { student_ids: this.parentAccessStudentIds() }, { headers: this.authHeaders() }));
      this.notice.set("Parent-child access updated.");
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to update parent-child access."));
    } finally {
      this.loading.set(false);
    }
  }
  myAttendancePresentCount() {
    return this.myAttendance().filter((row) => row.status === "present" || row.status === "late").length;
  }
  canManageClasses() {
    return this.can("classes", "read") && this.can("classes", "create") && this.can("classes", "update") && this.can("tuition_fees", "create");
  }
  canManageClassAccess() {
    return this.can("classes", "read") && this.can("classes", "update");
  }
  canViewHolidays() {
    return this.can("holidays", "read");
  }
  canManageHolidays() {
    return this.can("holidays", "create");
  }
  punchClasses() {
    const classes = new Map(this.attendanceStudents().map((student) => [student.class_option.id, student.class_option]));
    return Array.from(classes.values()).sort((a, b) => a.display_order - b.display_order || a.name.localeCompare(b.name));
  }
  async loadPunchHistory() {
    if (!this.canManagePunchAttendance())
      return;
    let params = new HttpParams();
    if (this.punchDate)
      params = params.set("punched_date", this.punchDate);
    if (this.punchSearch.trim())
      params = params.set("search", this.punchSearch.trim());
    if (this.punchClassId)
      params = params.set("class_option_id", this.punchClassId);
    if (this.punchPendingCheckoutOnly)
      params = params.set("pending_checkout", "true");
    params = params.set("page", this.punchHistoryPage());
    params = params.set("page_size", 10);
    try {
      const response = await firstValueFrom(this.http.get(`${this.apiUrl}/access-punches`, { headers: this.authHeaders(), params }));
      this.punchHistory.set(response.items);
      this.punchHistoryTotal.set(response.total);
      this.punchHistoryPage.set(response.page);
      this.punchHistoryTotalPages.set(response.total_pages);
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to load Punch In/OUT history."));
    }
  }
  clearPunchFilters() {
    this.punchDate = "";
    this.punchSearch = "";
    this.punchClassId = "";
    this.punchPendingCheckoutOnly = false;
    this.punchHistoryPage.set(1);
    void this.loadPunchHistory();
  }
  togglePendingCheckoutFilter(value) {
    this.punchPendingCheckoutOnly = value;
    this.punchHistoryPage.set(1);
    void this.loadPunchHistory();
  }
  async onPunchSearchChange(value) {
    this.punchSearch = value;
    if (!value.trim()) {
      this.punchHistoryPage.set(1);
      await this.loadPunchHistory();
    }
  }
  searchPunchHistory() {
    this.punchHistoryPage.set(1);
    void this.loadPunchHistory();
  }
  changePunchHistoryPage(page) {
    if (page < 1 || page > this.punchHistoryTotalPages())
      return;
    this.punchHistoryPage.set(page);
    void this.loadPunchHistory();
  }
  async recordStaffAttendance(sendWhatsApp = true) {
    if (!this.attendanceStudentId) {
      this.error.set("Select a student first.");
      return;
    }
    this.setBusy();
    try {
      const result = await firstValueFrom(this.http.post(`${this.apiUrl}/attendance/punch`, { student_id: this.attendanceStudentId, direction: this.attendanceDirection }, { headers: this.authHeaders() }));
      if (sendWhatsApp) {
        const punchedAt = new Date(result.punched_at);
        const date = punchedAt.toLocaleDateString("en-IN");
        const day = punchedAt.toLocaleDateString("en-IN", { weekday: "long" });
        const time = punchedAt.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
        const message = `Tiny Tara Preschool
Student Name: ${result.student_name}
Student ID: ${result.student_id}
Class: ${result.class_name}
Date: ${date}
Day: ${day}
Time: ${time}
Status: School ${result.direction}`;
        const phone = result.parent_mobile.replace(/\D/g, "");
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
        this.notice.set(`School ${result.direction} recorded. WhatsApp opened for manual sending.`);
      } else {
        this.notice.set(`School ${result.direction} recorded.`);
      }
      await this.loadPunchHistory();
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to record school attendance."));
    } finally {
      this.loading.set(false);
    }
  }
  async loadDailyAttendance() {
    if (this.isTeacher() && (!this.selectedTeacherClassId() || !this.teacherClassEntered())) {
      this.dailyAttendance.set([]);
      return;
    }
    try {
      let params = new HttpParams().set("attendance_date", this.attendanceDate);
      const classId = this.isTeacher() ? this.selectedTeacherClassId() : this.attendanceClassFilter;
      if (classId)
        params = params.set("class_option_id", classId);
      if (this.attendanceSectionFilter)
        params = params.set("section_id", this.attendanceSectionFilter);
      const rows = await firstValueFrom(this.http.get(`${this.apiUrl}/attendance/daily`, { headers: this.authHeaders(), params }));
      this.attendanceNote = {};
      rows.forEach((row) => {
        row.savedStatus = row.status;
        row.savedNote = row.note;
        this.attendanceNote[row.student_id] = row.note ?? "";
      });
      this.dailyAttendance.set(rows);
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to load daily attendance."));
    }
  }
  async changeAttendanceDate(date) {
    this.attendanceDate = date;
    await this.loadDailyAttendance();
  }
  async changeAttendanceClassFilter(classOptionId) {
    this.attendanceClassFilter = classOptionId;
    this.attendanceSectionFilter = "";
    this.attendanceFilterSections.set(classOptionId ? await this.fetchClassSections(classOptionId) : []);
    await this.loadDailyAttendance();
  }
  async changeAttendanceSectionFilter(sectionId) {
    this.attendanceSectionFilter = sectionId;
    await this.loadDailyAttendance();
  }
  isAttendanceToday() {
    return this.attendanceDate === (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  }
  canEditAttendanceDate() {
    return this.isAttendanceToday() || !this.isTeacher() && ["admin", "super_admin"].includes(this.user()?.role ?? "");
  }
  selectedHoliday() {
    return this.holidays().find((holiday) => holiday.holiday_date === this.attendanceDate);
  }
  async saveDailyAttendance(row, status) {
    if (!this.can("attendance", "create"))
      return this.denyPermission();
    if (!status || row.status === "holiday" || row.saving || !this.isAttendanceModified(row))
      return;
    row.saving = true;
    row.saveError = "";
    try {
      await firstValueFrom(this.http.put(`${this.apiUrl}/attendance/daily`, { student_id: row.student_id, attendance_date: this.attendanceDate, status, note: this.attendanceNote[row.student_id] || null }, { headers: this.authHeaders() }));
      row.status = status;
      row.savedStatus = row.status;
      row.savedNote = this.attendanceNote[row.student_id] || null;
      row.saved = true;
      this.dailyAttendance.set([...this.dailyAttendance()]);
      this.notice.set(`${row.student_name}'s attendance was saved.`);
    } catch (error) {
      row.saveError = this.errorMessage(error, "Unable to save attendance.");
      this.error.set(row.saveError);
    } finally {
      row.saving = false;
      this.dailyAttendance.set([...this.dailyAttendance()]);
    }
  }
  isAttendanceModified(row) {
    return row.status !== row.savedStatus || (this.attendanceNote[row.student_id] || null) !== (row.savedNote ?? null);
  }
  async saveAllDailyAttendance() {
    if (!this.can("attendance", "create"))
      return this.denyPermission();
    const pending = this.dailyAttendance().filter((row) => this.isAttendanceModified(row) && row.status && row.status !== "holiday" && !row.saving);
    if (!pending.length) {
      this.notice.set("No attendance changes to save.");
      return;
    }
    if (this.attendanceBulkSaving())
      return;
    this.attendanceBulkSaving.set(true);
    pending.forEach((row) => {
      row.saving = true;
      row.saveError = "";
    });
    try {
      const groups = /* @__PURE__ */ new Map();
      pending.forEach((row) => groups.set(row.class_option_id, [...groups.get(row.class_option_id) ?? [], row]));
      const groupEntries = Array.from(groups.entries());
      const settled = await Promise.allSettled(groupEntries.map(async ([classId, rows]) => ({ result: await firstValueFrom(this.http.post(`${this.apiUrl}/attendance/daily/bulk`, {
        class_option_id: classId,
        attendance_date: this.attendanceDate,
        items: rows.map((row) => ({ student_id: row.student_id, attendance_date: this.attendanceDate, status: row.status, note: this.attendanceNote[row.student_id] || null }))
      }, { headers: this.authHeaders() })) })));
      const saved = /* @__PURE__ */ new Set();
      const failures = /* @__PURE__ */ new Map();
      settled.forEach((result, index) => {
        if (result.status === "fulfilled") {
          result.value.result.saved_student_ids.forEach((studentId) => saved.add(studentId));
          result.value.result.failed.forEach((item) => failures.set(item.student_id, item.detail));
        } else {
          const message = this.errorMessage(result.reason, "Unable to save attendance.");
          groupEntries[index][1].forEach((row) => failures.set(row.student_id, message));
        }
      });
      pending.forEach((row) => {
        if (saved.has(row.student_id)) {
          row.savedStatus = row.status;
          row.savedNote = this.attendanceNote[row.student_id] || null;
          row.saved = true;
        } else {
          row.saveError = failures.get(row.student_id) ?? "Unable to save attendance.";
        }
      });
      this.notice.set(`${saved.size} attendance record${saved.size === 1 ? "" : "s"} saved${failures.size ? `; ${failures.size} failed` : ""}.`);
    } catch (error) {
      const message = this.errorMessage(error, "Unable to save attendance.");
      pending.forEach((row) => {
        row.saveError = message;
      });
      this.error.set(message);
    } finally {
      pending.forEach((row) => {
        row.saving = false;
      });
      this.attendanceBulkSaving.set(false);
      this.dailyAttendance.set([...this.dailyAttendance()]);
    }
  }
  async loadClassAccess(teacherId) {
    this.classAccessTeacherId.set(teacherId);
    if (!teacherId) {
      this.classAccessClassIds.set([]);
      return;
    }
    try {
      const response = await firstValueFrom(this.http.get(`${this.apiUrl}/admin/teacher-class-access/${teacherId}`, { headers: this.authHeaders() }));
      this.classAccessClassIds.set(response.class_option_ids);
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to load class access."));
    }
  }
  async loadClassTeachers(classId) {
    this.classAccessAuditClassId.set(classId);
    if (!classId) {
      this.classAccessTeachers.set([]);
      return;
    }
    try {
      const teachers = await firstValueFrom(this.http.get(`${this.apiUrl}/admin/classes/${classId}/teachers`, { headers: this.authHeaders() }));
      this.classAccessTeachers.set(teachers);
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to load teachers for this class."));
    }
  }
  toggleClassAccess(classId, enabled) {
    const selected = new Set(this.classAccessClassIds());
    if (enabled)
      selected.add(classId);
    else
      selected.delete(classId);
    this.classAccessClassIds.set(Array.from(selected));
  }
  teacherAccounts() {
    return this.users().filter((member) => member.role === "teacher");
  }
  pendingAttendanceCount() {
    return this.dailyAttendance().filter((row) => this.isAttendanceModified(row) && !!row.status && row.status !== "holiday").length;
  }
  isAttendanceSaved(row) {
    return !!row.saved && !this.isAttendanceModified(row);
  }
  async saveClassAccess() {
    if (!this.can("classes", "update"))
      return this.denyPermission();
    const teacherId = this.classAccessTeacherId();
    if (!teacherId)
      return;
    this.setBusy();
    try {
      await firstValueFrom(this.http.put(`${this.apiUrl}/admin/teacher-class-access/${teacherId}`, { class_option_ids: this.classAccessClassIds() }, { headers: this.authHeaders() }));
      this.notice.set("Teacher class access updated.");
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to update teacher class access."));
    } finally {
      this.loading.set(false);
    }
  }
  async addHoliday() {
    if (!this.can("holidays", this.editingHolidayId() ? "update" : "create"))
      return this.denyPermission();
    if (!this.holidayForm.holiday_date || !this.holidayForm.name.trim()) {
      this.error.set("Enter a holiday date and name.");
      return;
    }
    this.setBusy();
    try {
      const holidayId = this.editingHolidayId();
      const request = holidayId ? this.http.put(`${this.apiUrl}/admin/holidays/${holidayId}`, this.holidayForm, { headers: this.authHeaders() }) : this.http.post(`${this.apiUrl}/admin/holidays`, this.holidayForm, { headers: this.authHeaders() });
      await firstValueFrom(request);
      this.holidayForm = { holiday_date: "", name: "" };
      this.editingHolidayId.set(null);
      await this.loadHolidays();
      this.notice.set(holidayId ? "Holiday updated." : "Holiday added.");
    } catch (error) {
      this.error.set(this.errorMessage(error, this.editingHolidayId() ? "Unable to update holiday." : "Unable to add holiday."));
    } finally {
      this.loading.set(false);
    }
  }
  editHoliday(holiday) {
    this.editingHolidayId.set(holiday.id);
    this.holidayForm = { holiday_date: holiday.holiday_date, name: holiday.name };
    this.clearMessages();
  }
  cancelHolidayEdit() {
    this.editingHolidayId.set(null);
    this.holidayForm = { holiday_date: "", name: "" };
  }
  async deleteHoliday(holiday) {
    if (!this.can("holidays", "delete"))
      return this.denyPermission();
    if (!window.confirm(`Delete ${holiday.name} on ${holiday.holiday_date}?`))
      return;
    this.setBusy();
    try {
      await firstValueFrom(this.http.delete(`${this.apiUrl}/admin/holidays/${holiday.id}`, { headers: this.authHeaders() }));
      if (this.editingHolidayId() === holiday.id)
        this.cancelHolidayEdit();
      await this.loadHolidays();
      this.notice.set("Holiday deleted.");
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to delete holiday."));
    } finally {
      this.loading.set(false);
    }
  }
  startStudentForm() {
    this.editingStudentId.set(null);
    this.studentForm = this.emptyStudentForm();
    this.studentFormSections.set([]);
    this.studentFormOpen.set(true);
    this.activeView.set("students");
    this.clearMessages();
  }
  async createStudent() {
    if (!this.can("students", this.editingStudentId() ? "update" : "create"))
      return this.denyPermission();
    const missing = this.missingFields(this.studentForm, ["first_name", "email", "parent_mobile", "address_line1", "colony", "city", "state", "pin_code", "date_of_birth", "class_option_id", "guardian_one_name"]);
    if (!this.editingStudentId() && !this.studentForm.password.trim())
      missing.push("password");
    if (missing.length) {
      this.showFieldErrors(missing);
      return;
    }
    if (this.studentForm.first_name.trim().length < 2) {
      this.showFieldErrors([], { "first name": "First name must be at least 2 characters." });
      return;
    }
    if (!this.isValidEmail(this.studentForm.email)) {
      this.showFieldErrors([], { email: "Enter a valid email address, for example name@example.com." });
      return;
    }
    this.setBusy();
    try {
      const id = this.editingStudentId();
      const payload = id ? ((_a) => {
        var _b = _a, { password: _password } = _b, profile = __objRest(_b, ["password"]);
        return __spreadProps(__spreadValues({}, profile), { mobile: this.studentForm.parent_mobile, blood_group: this.studentForm.blood_group || null, section_id: this.studentForm.section_id || null });
      })(this.studentForm) : __spreadProps(__spreadValues({}, this.studentForm), { mobile: this.studentForm.parent_mobile, blood_group: this.studentForm.blood_group || null, section_id: this.studentForm.section_id || null });
      const request = id ? this.http.put(`${this.apiUrl}/admin/students/${id}`, payload, { headers: this.authHeaders() }) : this.http.post(`${this.apiUrl}/admin/students`, payload, { headers: this.authHeaders() });
      await firstValueFrom(request);
      this.notice.set(id ? "Student details updated." : "Student registered as an inactive account. Activate it from the student directory when ready.");
      await this.loadStudents(1);
      this.studentFormOpen.set(false);
      this.startStudentForm();
      this.studentFormOpen.set(false);
    } catch (error) {
      this.setFormError(error, this.editingStudentId() ? "Unable to update this student." : "Unable to register this student.");
    } finally {
      this.loading.set(false);
    }
  }
  async searchStudents() {
    await this.loadStudents(1);
  }
  async onStudentSearchChange(value) {
    this.studentSearch = value;
    if (!value.trim()) {
      await this.loadStudents(1);
    }
  }
  async onStudentClassFilterChange(classOptionId) {
    this.studentClassFilter = classOptionId;
    await this.loadStudents(1);
  }
  async changeStudentPage(page) {
    if (page < 1 || page > this.studentTotalPages())
      return;
    await this.loadStudents(page);
  }
  viewStudent(student) {
    this.selectedStudent.set(student);
  }
  editStudent(student) {
    this.editingStudentId.set(student.id);
    this.studentForm = { first_name: student.first_name, middle_name: student.middle_name ?? "", last_name: student.last_name, email: student.email, password: "", parent_mobile: student.parent_mobile, mobile: student.parent_mobile, address_line1: student.address_line1, colony: student.colony, city: student.city, state: student.state, pin_code: student.pin_code, blood_group: student.blood_group ?? "", father_name: student.father_name ?? "", mother_name: student.mother_name ?? "", guardian_one_name: student.guardian_one_name ?? "", guardian_two_name: student.guardian_two_name ?? "", date_of_birth: student.date_of_birth, class_option_id: student.class_option_id, section_id: student.section_id ?? "" };
    this.studentFormOpen.set(true);
    this.selectedStudent.set(null);
    this.activeView.set("students");
    void this.fetchClassSections(student.class_option_id).then((sections) => this.studentFormSections.set(sections));
  }
  closeStudentDetail() {
    this.selectedStudent.set(null);
  }
  async toggleStudentStatus(student) {
    if (!this.can("students", "update"))
      return this.denyPermission();
    const nextActive = student.status !== "active";
    if (!window.confirm(`${nextActive ? "Activate" : "Deactivate"} ${student.first_name} ${student.last_name}'s account?`)) {
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.patch(`${this.apiUrl}/admin/students/${student.id}/status`, { is_active: nextActive }, { headers: this.authHeaders() }));
      this.notice.set(`Student is now ${nextActive ? "active" : "inactive"}.`);
      await this.loadStudents(this.studentPage());
      if (this.selectedStudent()?.id === student.id)
        this.closeStudentDetail();
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to change student status."));
    } finally {
      this.loading.set(false);
    }
  }
  async deleteStudent(student) {
    if (!this.can("students", "delete"))
      return this.denyPermission();
    if (!window.confirm(`Permanently delete ${student.first_name} ${student.last_name}'s record?`)) {
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.delete(`${this.apiUrl}/admin/students/${student.id}`, { headers: this.authHeaders() }));
      this.notice.set("Student record deleted.");
      this.closeStudentDetail();
      await this.loadStudents(1);
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to delete this student."));
    } finally {
      this.loading.set(false);
    }
  }
  startStudentPasswordChange(student) {
    this.studentPasswordTarget.set(student);
    this.studentPasswordValue = "";
    this.clearMessages();
  }
  cancelStudentPasswordChange() {
    this.studentPasswordTarget.set(null);
    this.studentPasswordValue = "";
  }
  async updateStudentPassword() {
    if (!this.can("students", "update"))
      return this.denyPermission();
    const target = this.studentPasswordTarget();
    if (!target || this.studentPasswordValue.length < 8) {
      this.error.set("Password must be at least 8 characters.");
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.put(`${this.apiUrl}/admin/students/${target.id}/password`, { password: this.studentPasswordValue }, { headers: this.authHeaders() }));
      this.notice.set(`Password updated for ${target.first_name} ${target.last_name}.`);
      this.cancelStudentPasswordChange();
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to update this password."));
    } finally {
      this.loading.set(false);
    }
  }
  studentAge() {
    if (!this.studentForm.date_of_birth)
      return null;
    const birthDate = /* @__PURE__ */ new Date(`${this.studentForm.date_of_birth}T00:00:00`);
    const today = /* @__PURE__ */ new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const birthdayPassed = today.getMonth() > birthDate.getMonth() || today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate();
    if (!birthdayPassed)
      age -= 1;
    return age >= 0 ? age : null;
  }
  studentAgeDetail() {
    if (!this.studentForm.date_of_birth)
      return null;
    const birthDate = /* @__PURE__ */ new Date(`${this.studentForm.date_of_birth}T00:00:00`);
    const today = /* @__PURE__ */ new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    if (days < 0) {
      months -= 1;
      const previousMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += previousMonthDays;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    return `${years} years, ${months} months, ${days} days`;
  }
  selectedClass() {
    return this.classOptions().find((option) => option.id === this.studentForm.class_option_id);
  }
  filteredTuitionStudents() {
    const search = this.tuitionStudentSearch.trim().toLowerCase();
    const idInSearch = search.match(/\(([^)]+)\)\s*$/)?.[1]?.trim();
    return this.tuitionStudents().filter((student) => {
      const matchesClass = !this.tuitionStudentClassFilter || student.class_option_id === this.tuitionStudentClassFilter;
      const matchesSearch = !search || (idInSearch ? student.student_id.toLowerCase() === idInSearch : [this.tuitionStudentLabel(student), student.first_name, student.middle_name, student.last_name, student.student_id, student.parent_mobile].some((value) => value?.toLowerCase().includes(search)));
      return matchesClass && matchesSearch;
    });
  }
  filterTuitionStudents() {
    if (!this.filteredTuitionStudents().some((student) => student.id === this.tuitionForm.student_id)) {
      this.tuitionForm.student_id = "";
    }
  }
  changeTuitionStudentClass() {
    this.tuitionForm.student_id = "";
    this.tuitionStudentSearch = "";
    this.tuitionFormError.set("");
  }
  tuitionStudentLabel(student) {
    const name = [student.first_name, student.middle_name, student.last_name].filter(Boolean).join(" ");
    return `${name} (${student.student_id})`;
  }
  async selectTuitionStudentFromSearch() {
    const search = this.tuitionStudentSearch.trim().toLowerCase();
    const matches = this.filteredTuitionStudents();
    const idInSearch = search.match(/\(([^)]+)\)\s*$/)?.[1]?.trim();
    const selectedStudent = matches.find((student) => student.student_id.toLowerCase() === search || student.student_id.toLowerCase() === idInSearch) ?? matches.find((student) => this.tuitionStudentLabel(student).toLowerCase() === search) ?? (matches.length === 1 ? matches[0] : void 0);
    this.tuitionForm.student_id = selectedStudent?.id ?? "";
    if (selectedStudent) {
      this.tuitionStudentSearch = this.tuitionStudentLabel(selectedStudent);
      await this.updateTuitionDue();
      this.tuitionFormError.set("");
    }
  }
  emptyStudentForm() {
    return { first_name: "", middle_name: "", last_name: "", email: "", password: "", parent_mobile: "", mobile: "", address_line1: "", colony: "", city: "", state: "", pin_code: "", blood_group: "", father_name: "", mother_name: "", guardian_one_name: "", guardian_two_name: "", date_of_birth: "", class_option_id: this.classOptions()[0]?.id ?? "", section_id: "" };
  }
  emptyTuitionForm() {
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    return { student_id: "", fee_year: (/* @__PURE__ */ new Date()).getFullYear(), fee_month: (/* @__PURE__ */ new Date()).getMonth() + 1, amount_due: "", discount_amount: "0", adjustment_amount: "0", due_date: today, amount_paid: "", payment_date: today, payment_method: "cash", payment_reference: "", note: "" };
  }
  emptyTuitionBalancePaymentForm(amount = "") {
    return { amount, payment_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), payment_method: "cash", payment_reference: "", note: "" };
  }
  emptyStaffForm() {
    return { first_name: "", middle_name: "", last_name: "", email: "", password: "", role: this.isSuperAdmin() ? "admin" : "teacher", mobile: "", address_line1: "", colony: "", city: "", state: "", pin_code: "", blood_group: "" };
  }
  emptyNoteForm() {
    return { title: "", content: "", category: "general", visibility: "class", class_option_id: "", student_id: "", due_date: "" };
  }
  missingFields(form, fields) {
    return fields.filter((field) => !form[field]?.trim()).map((field) => field.replaceAll("_", " "));
  }
  fieldError(field) {
    return this.fieldErrors()[field] ?? this.fieldErrors()[field.replaceAll(" ", "_")] ?? this.fieldErrors()[field.replaceAll("_", " ")] ?? "";
  }
  showFieldErrors(fields, customErrors = {}) {
    const errors = __spreadValues(__spreadValues({}, Object.fromEntries(fields.map((field) => [field, `${field.replaceAll("_", " ")} is required.`]))), customErrors);
    this.fieldErrors.set(errors);
    this.error.set(Object.keys(customErrors).length ? "Please correct the highlighted field before submitting." : `Please complete the mandatory field${fields.length > 1 ? "s" : ""} marked below.`);
  }
  isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }
  setFormError(error, fallback) {
    if (error instanceof HttpErrorResponse && Array.isArray(error.error?.detail)) {
      const errors = Object.fromEntries(error.error.detail.map((item) => [item.loc?.at(-1)?.replaceAll("_", " ") ?? "field", item.msg ?? "Invalid value."]));
      this.fieldErrors.set(errors);
      this.error.set("Please correct the highlighted fields before submitting.");
      return;
    }
    this.error.set(this.errorMessage(error, fallback));
  }
  isSuperAdmin() {
    return this.user()?.role === "super_admin";
  }
  can(resource, action) {
    if (this.isSuperAdmin())
      return true;
    return this.permissionsLoaded() && this.permissionEnabled(this.user()?.role ?? "", resource, action);
  }
  denyPermission() {
    this.error.set("You do not have permission to perform this action.");
  }
  canView(view) {
    if (view === "overview" || view === "profile" || view === "my-dashboard")
      return true;
    if (view === "school-notes")
      return (this.isStudent() || this.isParent()) && this.can("notes", "read");
    if (view === "leave-requests" && !this.canReviewLeaveRequests())
      return false;
    if (this.isTeacher() && !this.teacherClassEntered() && view !== "class-access")
      return false;
    if (view === "permissions")
      return this.isSuperAdmin();
    if (view === "class-access")
      return this.canManageClassAccess();
    if (view === "family-links")
      return this.can("students", "read") && this.can("students", "update") && this.can("users", "read");
    if (view === "fee-visibility")
      return this.canManageFeeVisibility();
    const resources = {
      pages: "page_content",
      contact: "site_content",
      gallery: "gallery",
      holidays: "holidays",
      "leave-requests": "leave_requests",
      enquiries: "admission_enquiries",
      "punch-attendance": "access_punches",
      attendance: "attendance",
      tuition: "tuition_fees",
      classes: "classes",
      staff: "users",
      parents: "users",
      students: "students",
      notes: "notes"
    };
    const resource = resources[view];
    return !!resource && this.can(resource, "read");
  }
  async loadMyPermissions() {
    try {
      const summary = await firstValueFrom(this.http.get(`${this.apiUrl}/admin/my-permissions`, { headers: this.authHeaders() }));
      this.rolePermissions.set({ [summary.role]: summary });
      this.permissionsLoaded.set(true);
    } catch (error) {
      this.permissionsLoaded.set(false);
      throw error;
    }
  }
  async loadRolePermissions() {
    if (!this.isSuperAdmin()) {
      return;
    }
    try {
      const response = await firstValueFrom(this.http.get(`${this.apiUrl}/admin/role-permissions`, { headers: this.authHeaders() }));
      const mapped = Object.fromEntries(response.map((item) => [item.role, item]));
      this.rolePermissions.set(mapped);
      if (!mapped[this.selectedPermissionRole()]) {
        this.selectedPermissionRole.set("teacher");
      }
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to load access settings."));
    }
  }
  getSelectedPermissionSummary() {
    return this.rolePermissions()[this.selectedPermissionRole()];
  }
  permissionEnabled(role, resource, action) {
    const entries = this.rolePermissions()[role]?.permissions ?? [];
    return entries.some((entry) => entry.resource === resource && entry.action === action);
  }
  togglePermission(role, resource, action) {
    if (!this.isSuperAdmin()) {
      return;
    }
    const current = this.rolePermissions()[role];
    if (!current) {
      return;
    }
    const permissionSet = new Set(current.permissions.map((item) => `${item.resource}:${item.action}`));
    const key = `${resource}:${action}`;
    if (permissionSet.has(key)) {
      permissionSet.delete(key);
    } else {
      permissionSet.add(key);
    }
    const permissions = Array.from(permissionSet).map((value) => {
      const [entryResource, entryAction] = value.split(":");
      return { resource: entryResource, action: entryAction };
    }).sort((a, b) => a.resource.localeCompare(b.resource) || a.action.localeCompare(b.action));
    this.rolePermissions.set(__spreadProps(__spreadValues({}, this.rolePermissions()), { [role]: __spreadProps(__spreadValues({}, current), { permissions }) }));
  }
  async savePermissions() {
    if (!this.isSuperAdmin()) {
      this.error.set("Only Super Admin can update role access settings.");
      return;
    }
    const role = this.selectedPermissionRole();
    const permissions = this.rolePermissions()[role]?.permissions ?? [];
    this.setBusy();
    try {
      await firstValueFrom(this.http.put(`${this.apiUrl}/admin/role-permissions/${role}`, { permissions }, { headers: this.authHeaders() }));
      this.notice.set(`${role.replace("_", " ")} permissions updated.`);
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to save role access settings."));
    } finally {
      this.loading.set(false);
    }
  }
  isProtectedAccount(member) {
    return member.role === "super_admin";
  }
  startStaffForm() {
    this.editingStaffId.set(null);
    this.staffForm = this.emptyStaffForm();
    this.staffFormOpen.set(true);
    if (this.activeView() !== "parents")
      this.activeView.set("staff");
    this.clearMessages();
  }
  async createStaffAccount() {
    if (!this.can("users", this.editingStaffId() ? "update" : "create"))
      return this.denyPermission();
    if (!this.canManageStaff()) {
      this.error.set("Only super admins and admins can create staff accounts.");
      return;
    }
    const missing = this.missingFields(this.staffForm, ["first_name", "email", "mobile", "address_line1", "colony", "city", "state", "pin_code", "role"]);
    if (!this.editingStaffId() && !this.staffForm.password.trim())
      missing.push("password");
    if (missing.length) {
      this.showFieldErrors(missing);
      return;
    }
    if (!this.isValidEmail(this.staffForm.email)) {
      this.showFieldErrors([], { email: "Enter a valid email address, for example name@example.com." });
      return;
    }
    this.setBusy();
    try {
      const id = this.editingStaffId();
      const profilePayload = __spreadProps(__spreadValues({}, this.staffForm), { blood_group: this.staffForm.blood_group || null });
      if (id) {
        const _a = profilePayload, { password: _password } = _a, profile = __objRest(_a, ["password"]);
        await firstValueFrom(this.http.put(`${this.apiUrl}/admin/users/${id}`, profile, { headers: this.authHeaders() }));
      } else {
        await firstValueFrom(this.http.post(`${this.apiUrl}/admin/users`, profilePayload, { headers: this.authHeaders() }));
      }
      this.notice.set(id ? "Staff details updated." : `${this.staffForm.role} account created.`);
      this.staffForm = this.emptyStaffForm();
      this.editingStaffId.set(null);
      this.staffFormOpen.set(false);
      await this.loadUsers(1);
    } catch (error) {
      this.error.set(this.errorMessage(error, this.editingStaffId() ? "Unable to update this staff account." : "Unable to create this staff account."));
    } finally {
      this.loading.set(false);
    }
  }
  viewStaff(member) {
    this.selectedStaff.set(member);
    this.selectedParentStudents.set([]);
    if (member.role === "parent")
      void this.loadParentStudents(member.id);
  }
  async loadParentStudents(parentId) {
    this.parentStudentsLoading.set(true);
    try {
      const students = await firstValueFrom(this.http.get(`${this.apiUrl}/admin/parent-access/${parentId}/students`, { headers: this.authHeaders() }));
      if (this.selectedStaff()?.id === parentId)
        this.selectedParentStudents.set(students);
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to load linked students."));
    } finally {
      this.parentStudentsLoading.set(false);
    }
  }
  editStaff(member) {
    this.editingStaffId.set(member.id);
    this.staffForm = { first_name: member.first_name, middle_name: member.middle_name ?? "", last_name: member.last_name, email: member.email, password: "", role: member.role, mobile: member.mobile, address_line1: member.address_line1, colony: member.colony, city: member.city, state: member.state, pin_code: member.pin_code, blood_group: member.blood_group ?? "" };
    this.selectedStaff.set(null);
    this.staffFormOpen.set(true);
    this.activeView.set(member.role === "parent" ? "parents" : "staff");
  }
  async searchStaff() {
    await this.loadUsers(1);
  }
  async onStaffSearchChange(value) {
    this.staffSearch = value;
    if (!value.trim()) {
      await this.loadUsers(1);
    }
  }
  async onStaffRoleChange(role) {
    this.staffRole = role;
    await this.loadUsers(1);
  }
  async onStaffStatusChange(status) {
    this.staffStatus = status;
    await this.loadUsers(1);
  }
  async changeStaffPage(page) {
    if (page < 1 || page > this.staffTotalPages())
      return;
    await this.loadUsers(page);
  }
  startPasswordChange(member) {
    this.passwordTarget.set(member);
    this.passwordValue = "";
    this.clearMessages();
  }
  cancelPasswordChange() {
    this.passwordTarget.set(null);
    this.passwordValue = "";
  }
  async updateUserPassword() {
    if (!this.can("users", "update"))
      return this.denyPermission();
    const target = this.passwordTarget();
    if (!target || this.passwordValue.length < 8) {
      this.error.set("Password must be at least 8 characters.");
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.put(`${this.apiUrl}/admin/users/${target.id}/password`, { password: this.passwordValue }, { headers: this.authHeaders() }));
      this.notice.set(`Password updated for ${target.name}.`);
      this.cancelPasswordChange();
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to update this password."));
    } finally {
      this.loading.set(false);
    }
  }
  async toggleAccount(member) {
    if (!this.can("users", "update"))
      return this.denyPermission();
    if (member.id === this.user()?.id) {
      this.error.set("You cannot deactivate your own account.");
      return;
    }
    const action = member.is_active ? "deactivate" : "activate";
    if (!window.confirm(`Are you sure you want to ${action} ${member.name}'s account?`)) {
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.patch(`${this.apiUrl}/admin/users/${member.id}/status`, { is_active: !member.is_active }, { headers: this.authHeaders() }));
      this.notice.set(`${member.name}'s account is now ${member.is_active ? "inactive" : "active"}.`);
      await this.loadUsers();
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to change account status."));
    } finally {
      this.loading.set(false);
    }
  }
  async deleteAccount(member) {
    if (!this.can("users", "delete"))
      return this.denyPermission();
    if (member.id === this.user()?.id) {
      this.error.set("You cannot delete your own account.");
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
      this.error.set(this.errorMessage(error, "This account could not be deleted. Deactivate it instead."));
    } finally {
      this.loading.set(false);
    }
  }
  startNewContent() {
    this.editingContentId.set(null);
    this.contentForm = __spreadProps(__spreadValues({}, this.emptyContentForm()), { page_name: this.selectedPage() });
    this.activeView.set("pages");
    this.clearMessages();
  }
  editContent(content) {
    this.editingContentId.set(content.id);
    this.contentForm = {
      page_name: content.page_name,
      section_name: content.section_name,
      content_type: content.content_type,
      title: content.title ?? "",
      body: content.body ?? "",
      image_url: content.image_url ?? "",
      link_url: content.link_url ?? "",
      display_order: content.display_order,
      is_published: content.is_published
    };
    this.activeView.set("pages");
    this.clearMessages();
  }
  async saveContent() {
    if (!this.can("page_content", this.editingContentId() ? "update" : "create"))
      return this.denyPermission();
    this.setBusy();
    try {
      const headers = this.authHeaders();
      const id = this.editingContentId();
      if (id) {
        await firstValueFrom(this.http.put(`${this.apiUrl}/admin/page-content/${id}`, {
          content_type: this.contentForm.content_type,
          title: this.contentForm.title,
          body: this.contentForm.body,
          image_url: this.contentForm.image_url,
          link_url: this.contentForm.link_url,
          display_order: this.contentForm.display_order,
          is_published: this.contentForm.is_published
        }, { headers }));
        this.notice.set("Page section updated.");
      } else {
        await firstValueFrom(this.http.post(`${this.apiUrl}/admin/page-content`, this.contentForm, { headers }));
        this.notice.set("Page section created.");
      }
      await this.loadPageContents();
      this.editingContentId.set(null);
      this.contentForm = __spreadProps(__spreadValues({}, this.emptyContentForm()), { page_name: this.selectedPage() });
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to save this page section."));
    } finally {
      this.loading.set(false);
    }
  }
  async deleteContent(content) {
    if (!this.can("page_content", "delete"))
      return this.denyPermission();
    if (!window.confirm(`Delete the ${content.section_name} section?`)) {
      return;
    }
    this.setBusy();
    try {
      await firstValueFrom(this.http.delete(`${this.apiUrl}/admin/page-content/${content.id}`, { headers: this.authHeaders() }));
      this.notice.set("Page section deleted.");
      await this.loadPageContents();
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to delete this page section."));
    } finally {
      this.loading.set(false);
    }
  }
  async saveSiteContent() {
    if (!this.can("site_content", "update"))
      return this.denyPermission();
    this.setBusy();
    try {
      await firstValueFrom(this.http.put(`${this.apiUrl}/admin/site-content`, this.siteContent(), { headers: this.authHeaders() }));
      this.notice.set("Contact details saved.");
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to save contact details."));
    } finally {
      this.loading.set(false);
    }
  }
  updateSiteField(field, value) {
    this.siteContent.set(__spreadProps(__spreadValues({}, this.siteContent()), { [field]: value }));
  }
  onGalleryFile(event) {
    const input = event.target;
    this.galleryFile = input.files?.[0] ?? null;
  }
  async uploadGallery() {
    if (!this.can("gallery", "create"))
      return this.denyPermission();
    if (!this.galleryFile) {
      this.error.set("Choose an image before uploading.");
      return;
    }
    this.setBusy();
    try {
      const formData = new FormData();
      formData.append("page_name", this.galleryPageName);
      formData.append("file", this.galleryFile);
      await firstValueFrom(this.http.post(`${this.apiUrl}/admin/gallery`, formData, { headers: this.authHeaders() }));
      this.notice.set("Gallery image uploaded.");
      this.galleryFile = null;
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to upload this image."));
    } finally {
      this.loading.set(false);
    }
  }
  pageCount() {
    return new Set(this.pageContents().map((content) => content.page_name)).size;
  }
  publishedCount() {
    return this.pageContents().filter((content) => content.is_published).length;
  }
  staffAccountCount() {
    return ["super_admin", "admin", "teacher", "clerk", "security"].reduce((total, role) => total + (this.roleCounts()[role] || 0), 0);
  }
  async loadPageContents() {
    const contents = await firstValueFrom(this.http.get(`${this.apiUrl}/admin/page-content`, {
      headers: this.authHeaders(),
      params: { page_name: this.selectedPage() }
    }));
    this.pageContents.set(contents);
  }
  async loadSiteContent() {
    const content = await firstValueFrom(this.http.get(`${this.apiUrl}/admin/site-content`, { headers: this.authHeaders() }));
    this.siteContent.set({ email: content.email ?? "", phone: content.phone ?? "", address: content.address ?? "", school_days: content.school_days ?? "", school_hours: content.school_hours ?? "" });
  }
  async loadUsers(page = this.staffPage(), pageSize = 10) {
    try {
      const params = {
        page,
        page_size: pageSize
      };
      if (this.staffSearch.trim()) {
        params["search"] = this.staffSearch.trim();
      }
      if (this.activeView() === "parents") {
        params["role"] = "parent";
      } else if (this.staffRole) {
        params["role"] = this.staffRole;
      }
      if (this.activeView() === "staff") {
        params["exclude_role"] = "parent";
      }
      if (this.staffStatus) {
        params["is_active"] = this.staffStatus;
      }
      const response = await firstValueFrom(this.http.get(`${this.apiUrl}/admin/users`, {
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
  async loadClasses() {
    try {
      const classOptions = await firstValueFrom(this.http.get(`${this.apiUrl}/admin/classes`, { headers: this.authHeaders() }));
      this.classOptions.set(classOptions);
    } catch {
      this.classOptions.set([]);
    }
  }
  async fetchClassSections(classOptionId) {
    try {
      return await firstValueFrom(this.http.get(`${this.apiUrl}/admin/classes/${classOptionId}/sections`, { headers: this.authHeaders() }));
    } catch {
      return [];
    }
  }
  async selectSectionsClass(classOptionId) {
    this.sectionsClassId.set(classOptionId);
    this.editingSectionId.set(null);
    this.sectionForm = { name: "", display_order: 0 };
    this.classSections.set(classOptionId ? await this.fetchClassSections(classOptionId) : []);
  }
  async saveSection() {
    if (!this.can("classes", this.editingSectionId() ? "update" : "create"))
      return this.denyPermission();
    const classOptionId = this.sectionsClassId();
    if (!classOptionId || !this.sectionForm.name.trim()) {
      this.error.set("Select a class and enter a section name.");
      return;
    }
    this.setBusy();
    try {
      const sectionId = this.editingSectionId();
      const request = sectionId ? this.http.put(`${this.apiUrl}/admin/classes/${classOptionId}/sections/${sectionId}`, this.sectionForm, { headers: this.authHeaders() }) : this.http.post(`${this.apiUrl}/admin/classes/${classOptionId}/sections`, this.sectionForm, { headers: this.authHeaders() });
      await firstValueFrom(request);
      this.sectionForm = { name: "", display_order: 0 };
      this.editingSectionId.set(null);
      this.classSections.set(await this.fetchClassSections(classOptionId));
      this.notice.set(sectionId ? "Section updated." : "Section added.");
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to save this section."));
    } finally {
      this.loading.set(false);
    }
  }
  editSection(section) {
    this.sectionForm = { name: section.name, display_order: section.display_order };
    this.editingSectionId.set(section.id);
    this.clearMessages();
  }
  cancelSectionEdit() {
    this.sectionForm = { name: "", display_order: 0 };
    this.editingSectionId.set(null);
    this.clearMessages();
  }
  async onStudentFormClassChange(classOptionId) {
    this.studentForm.class_option_id = classOptionId;
    this.studentForm.section_id = "";
    this.studentFormSections.set(classOptionId ? await this.fetchClassSections(classOptionId) : []);
  }
  async loadClassTuitions(feeYear) {
    try {
      const params = feeYear ? { fee_year: feeYear } : void 0;
      this.classTuitions.set(await firstValueFrom(this.http.get(`${this.apiUrl}/admin/classes/tuition`, { headers: this.authHeaders(), params })));
    } catch {
      this.classTuitions.set([]);
    }
  }
  async loadAttendanceStudents() {
    try {
      this.attendanceStudents.set(await firstValueFrom(this.http.get(`${this.apiUrl}/attendance/students`, { headers: this.authHeaders() })));
    } catch {
      this.attendanceStudents.set([]);
    }
  }
  async loadStudents(page = this.studentPage()) {
    try {
      const params = { page, page_size: 10 };
      if (this.studentSearch.trim())
        params["search"] = this.studentSearch.trim();
      if (this.studentClassFilter)
        params["class_option_id"] = this.studentClassFilter;
      const response = await firstValueFrom(this.http.get(`${this.apiUrl}/admin/students`, {
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
  async loadTuitionStudents() {
    try {
      const response = await firstValueFrom(this.http.get(`${this.apiUrl}/admin/students`, { headers: this.authHeaders(), params: { page: 1, page_size: 100 } }));
      this.tuitionStudents.set(response.items);
    } catch {
      this.tuitionStudents.set([]);
    }
  }
  async downloadFile(url, fileName, params) {
    try {
      const blob = await firstValueFrom(this.http.get(url, { headers: this.authHeaders(), params, responseType: "blob" }));
      const downloadUrl = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = downloadUrl;
      anchor.download = fileName;
      anchor.click();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      this.error.set(this.errorMessage(error, "Unable to download the requested file."));
    }
  }
  async loadHolidays() {
    try {
      this.holidays.set(await firstValueFrom(this.http.get(`${this.apiUrl}/holidays`, { headers: this.authHeaders() })));
    } catch {
      this.holidays.set([]);
    }
  }
  authHeaders() {
    return new HttpHeaders({ Authorization: `Bearer ${this.token()}` });
  }
  setBusy() {
    this.loading.set(true);
    this.clearMessages();
  }
  clearMessages() {
    this.error.set("");
    this.notice.set("");
    this.fieldErrors.set({});
  }
  emptyContentForm() {
    return {
      page_name: "home",
      section_name: "",
      content_type: "text",
      title: "",
      body: "",
      image_url: "",
      link_url: "",
      display_order: 0,
      is_published: true
    };
  }
  errorMessage(error, fallback) {
    if (error instanceof HttpErrorResponse && error.status === 405) {
      return "Update is not available on the running API. Restart the Tiny Tara API server and try again.";
    }
    if (error instanceof HttpErrorResponse && error.status === 401) {
      this.logout();
      return "Your session has expired. Please sign in again.";
    }
    if (error instanceof HttpErrorResponse && error.status === 403) {
      return typeof error.error?.detail === "string" ? error.error.detail : "Your permissions changed. This action is no longer available.";
    }
    if (error instanceof HttpErrorResponse && typeof error.error?.detail === "string") {
      return error.error.detail;
    }
    if (error instanceof HttpErrorResponse && Array.isArray(error.error?.detail)) {
      return error.error.detail.map((item) => `${item.loc?.at(-1)?.replaceAll("_", " ") ?? "Field"}: ${item.msg ?? "Invalid value"}`).join(" ");
    }
    return fallback;
  }
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 2, vars: 1, consts: [[1, "login-shell"], [1, "dashboard-shell"], [1, "login-panel"], [1, "login-brand"], [1, "brand-mark"], [1, "eyebrow"], [1, "login-intro"], [1, "login-form", 3, "ngSubmit"], ["type", "email", "name", "email", "autocomplete", "username", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "autocomplete", "current-password", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "primary-button", "full-width", 3, "disabled"], [1, "message", "error-message"], [1, "login-aside"], [1, "orbit", "orbit-one"], [1, "orbit", "orbit-two"], [1, "aside-kicker"], [1, "aside-note"], [1, "sidebar"], ["routerLink", "/", 1, "dashboard-logo"], [1, "sidebar-rule"], [1, "nav-label"], [3, "active"], [1, "sidebar-bottom"], [1, "user-chip"], [1, "avatar"], [1, "sign-out", "profile-link", 3, "click"], [1, "sign-out", 3, "click"], [1, "dashboard-main"], [1, "dashboard-header"], ["routerLink", "/", "target", "_blank", 1, "preview-link"], [1, "message", "success-message"], ["role", "alert", 1, "attention-banner"], [1, "single-panel-wrap"], [3, "click"], [1, "tab-label"], [1, "notify-badge"], ["type", "button"], ["type", "button", 3, "click"], [1, "panel", "editorial-panel"], [1, "section-kicker"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "form-actions"], ["type", "button", 1, "primary-button", 3, "click", "disabled"], [1, "welcome-band"], [1, "overview-grid"], [1, "panel", "directory-panel"], [1, "panel"], [1, "panel", "permission-panel"], [1, "profile-layout"], ["type", "button", 1, "outline-button", 3, "click"], [1, "primary-button", 3, "click"], [1, "stat-grid"], [1, "stat-card", "accent-coral"], [1, "stat-card", "accent-blue"], [1, "stat-card", "accent-yellow"], [1, "panel-heading"], ["type", "button", 1, "primary-button"], [1, "staff-search"], ["name", "noteClassFilter", 3, "ngModel"], ["name", "noteCategoryFilter", 3, "ngModelChange", "ngModel"], ["value", "leave"], ["value", "class_task"], ["value", "homework"], ["value", "announcement"], ["value", "general"], ["value", "other"], ["name", "noteStudentFilter", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "noteDateFilter", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "text-button", 3, "click"], [1, "mini-list"], [1, "holiday-list-row", 2, "grid-template-columns", "1fr auto", "align-items", "start"], [1, "empty-state"], [1, "password-dialog-backdrop"], ["type", "button", 1, "primary-button", 3, "click"], ["name", "noteClassFilter", 3, "ngModelChange", "ngModel"], [1, "holiday-actions"], ["type", "button", "title", "Edit note", "aria-label", "Edit note", 1, "icon-button"], ["type", "button", "title", "Delete note", "aria-label", "Delete note", 1, "delete-button"], ["type", "button", "title", "Edit note", "aria-label", "Edit note", 1, "icon-button", 3, "click"], ["type", "button", "title", "Delete note", "aria-label", "Delete note", 1, "delete-button", 3, "click"], [1, "password-dialog", "panel", "profile-form", 3, "ngSubmit"], ["name", "noteTitle", "required", "", 3, "ngModelChange", "ngModel"], [1, "field-grid"], ["name", "noteClass", "required", "", 3, "ngModelChange", "ngModel"], ["name", "noteCategory", 3, "ngModelChange", "ngModel"], ["name", "noteVisibility", 3, "ngModelChange", "ngModel"], ["value", "class"], ["value", "individual"], ["name", "noteContent", "rows", "6", "required", "", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "noteDueDate", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "primary-button", 3, "disabled"], ["name", "noteStudent", "required", "", 3, "ngModelChange", "ngModel"], [1, "panel", "profile-form", 3, "ngSubmit"], ["name", "classAccessTeacher", "required", "", 3, "ngModelChange", "ngModel"], [1, "toggle-field"], ["name", "classAccessAuditClass", 3, "ngModelChange", "ngModel"], [1, "holiday-list-row"], ["type", "checkbox", 3, "change", "checked"], [1, "form-stamp"], [1, "panel", "profile-form"], ["type", "button", "title", "Edit holiday", "aria-label", "Edit holiday", 1, "icon-button", 3, "click"], ["type", "button", "title", "Delete holiday", "aria-label", "Delete holiday", 1, "delete-button", 3, "click"], ["type", "date", "name", "holiday_date", "required", "", 3, "ngModelChange", "ngModel"], ["name", "holiday_name", "placeholder", "Festival or school holiday", "required", "", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "outline-button"], ["name", "tuitionSearch", "placeholder", "Search name, ID, or email", 3, "ngModelChange", "keyup.enter", "ngModel"], ["name", "tuitionClassFilter", 3, "ngModelChange", "change", "ngModel"], ["name", "tuitionReportMonth", 3, "ngModelChange", "change", "ngModel"], ["type", "number", "name", "tuitionReportYear", "min", "2020", "max", "2100", 3, "ngModelChange", "change", "ngModel"], [1, "role-summary-grid"], [1, "student-table-wrap"], [1, "student-table"], [1, "pagination"], ["type", "button", 1, "text-button"], ["colspan", "11"], ["type", "button", 1, "outline-button", 3, "click", "disabled"], [1, "password-dialog-backdrop", 3, "click"], [1, "password-dialog", "panel", "profile-form", 3, "ngSubmit", "click"], [1, "popup-error"], ["type", "number", "name", "tuitionBalanceAmount", "min", "0.01", "step", "0.01", "required", "", 3, "ngModelChange", "ngModel", "max"], ["type", "date", "name", "tuitionBalancePaymentDate", "required", "", 3, "ngModelChange", "ngModel"], ["name", "tuitionBalancePaymentMethod", "required", "", 3, "ngModelChange", "ngModel"], ["value", "cash"], ["value", "upi"], ["value", "card"], ["value", "bank_transfer"], ["value", "cheque"], ["name", "tuitionBalanceReference", "placeholder", "UPI, cheque, or bank reference", 3, "ngModelChange", "ngModel"], ["name", "tuitionBalanceNote", "rows", "2", "placeholder", "Optional payment note", 3, "ngModelChange", "ngModel"], [1, "password-dialog", "panel", "profile-dialog", "profile-form", 3, "ngSubmit", "click"], ["name", "tuitionStudent", "list", "tuition-student-options", "placeholder", "Search and select student", "required", "", 3, "ngModelChange", "ngModel"], ["id", "tuition-student-options"], ["name", "tuitionStudentClass", 3, "ngModelChange", "ngModel"], ["name", "tuitionMonth", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "tuitionYear", "min", "2020", "max", "2100", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "tuitionDue", "readonly", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "tuitionDiscount", "min", "0", "step", "0.01", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "tuitionAdjustment", "step", "0.01", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "tuitionDueDate", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "tuitionPaid", "min", "0", "step", "0.01", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "tuitionPaymentDate", 3, "ngModelChange", "ngModel"], ["name", "tuitionPaymentMethod", 3, "ngModelChange", "ngModel"], ["name", "tuitionReference", "placeholder", "UPI, cheque, or bank reference", 3, "ngModelChange", "ngModel"], ["name", "tuitionNote", "rows", "2", "placeholder", "Optional payment note", 3, "ngModelChange", "ngModel"], ["name", "className", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "classDisplayOrder", "min", "0", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "classMinAge", "min", "0", "max", "18", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "classMaxAge", "min", "0", "max", "18", "required", "", 3, "ngModelChange", "ngModel"], [1, "panel", "student-table-wrap"], ["name", "sectionsClassId", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], ["type", "button", "title", "Edit class", "aria-label", "Edit class", 1, "icon-button", 3, "click"], ["colspan", "4"], ["type", "number", "name", "classFeeDetailsYear", "min", "2020", "max", "2100", 3, "ngModelChange", "change", "ngModel"], ["type", "button", "title", "Edit fee", "aria-label", "Edit fee", 1, "icon-button", 3, "click"], ["colspan", "5"], [1, "staff-search", 3, "ngSubmit"], ["name", "sectionName", "placeholder", "Section name, for example A", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "sectionDisplayOrder", "min", "0", "placeholder", "Display order", 3, "ngModelChange", "ngModel"], ["type", "button", "title", "Edit section", "aria-label", "Edit section", 1, "icon-button", 3, "click"], ["colspan", "3"], ["name", "classTuitionClass", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "classTuitionYear", "min", "2020", "max", "2100", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "classTuitionAmount", "min", "0.01", "step", "0.01", "required", "", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "myDiaryDate", 3, "ngModelChange", "ngModel"], [1, "panel-heading", 2, "margin-top", "22px"], [1, "holiday-list-row", 2, "grid-template-columns", "1fr", "align-items", "start", "gap", "6px"], [1, "student-detail-grid"], [1, "status-tag"], [1, "count-badge"], ["name", "selectedNoteChild", 3, "ngModelChange", "ngModel"], [1, "holiday-list-row", 2, "grid-template-columns", "1fr", "align-items", "start"], [1, "form-help"], ["type", "date", "name", "leaveStartDate", "required", "", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "leaveEndDate", "required", "", 3, "ngModelChange", "ngModel"], ["name", "leaveReason", "rows", "4", "maxlength", "2000", "placeholder", "Please share a short reason for your absence", "required", "", 3, "ngModelChange", "ngModel"], [1, "profile-form"], [1, "optional-label"], ["maxlength", "1000", "placeholder", "Add a note for the student", 3, "ngModelChange", "name", "ngModel"], [3, "href"], [1, "date-field"], ["name", "parentFeeAcademicYear", 3, "ngModelChange", "ngModel"], ["value", "all"], [1, "role-summary", "panel"], [1, "text-button", 3, "click"], [1, "panel", "recent-panel"], [1, "outline-button", 3, "click"], [1, "mini-row"], [1, "mini-row", 3, "click"], [1, "row-index"], [1, "status-dot"], ["name", "feeVisibilitySearch", "placeholder", "Name or student ID", 3, "ngModelChange", "ngModel"], ["name", "feeVisibilityStudent", 3, "ngModelChange", "ngModel"], ["name", "parentAccessParent", 3, "ngModelChange", "ngModel"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "content-toolbar"], [1, "page-tabs"], [1, "primary-button"], [1, "editor-layout"], [1, "panel", "sections-panel"], [1, "section-list"], [1, "panel", "content-form", 3, "ngSubmit"], ["name", "content_type", 3, "ngModelChange", "ngModel"], ["value", "text"], ["value", "hero"], ["value", "link"], ["value", "image"], ["type", "number", "name", "display_order", "min", "0", 3, "ngModelChange", "ngModel"], ["name", "title", "placeholder", "A short, welcoming heading", 3, "ngModelChange", "ngModel"], ["name", "body", "rows", "6", "placeholder", "Write the content families should see...", 3, "ngModelChange", "ngModel"], ["name", "image_url", "placeholder", "/uploads/gallery/...", 3, "ngModelChange", "ngModel"], ["name", "link_url", "placeholder", "/about", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "is_published", 3, "ngModelChange", "ngModel"], [1, "section-row", 3, "selected"], [1, "section-row"], [1, "section-select", 3, "click"], [1, "drag-number"], [1, "publish-pill"], ["title", "Delete section", "aria-label", "Delete section", 1, "delete-button"], ["title", "Delete section", "aria-label", "Delete section", 1, "delete-button", 3, "click"], ["name", "page_name", 3, "ngModelChange", "ngModel"], ["value", "home"], ["value", "about"], ["value", "header"], ["value", "footer"], ["value", "contact"], ["value", "activities"], ["name", "section_name", "placeholder", "hero", "required", "", 3, "ngModelChange", "ngModel"], [1, "panel", "contact-form", 3, "ngSubmit"], ["type", "email", "name", "email", "placeholder", "hello@tinytara.com", 3, "ngModelChange", "ngModel"], ["name", "phone", "placeholder", "+91 ...", 3, "ngModelChange", "ngModel"], ["name", "address", "rows", "5", "placeholder", "School address", 3, "ngModelChange", "ngModel"], ["name", "school_days", "placeholder", "Monday - Friday", 3, "ngModelChange", "ngModel"], ["name", "school_hours", "placeholder", "9:00 AM - 2:00 PM", 3, "ngModelChange", "ngModel"], [1, "panel", "upload-panel", 3, "ngSubmit"], [1, "upload-drop"], [1, "upload-symbol"], ["type", "file", "accept", "image/jpeg,image/png,image/webp", 3, "change"], ["name", "galleryPageName", 3, "ngModelChange", "ngModel"], ["value", "teacher"], ["value", "clerk"], ["value", "security"], ["value", "admin"], ["value", "student"], ["value", "parent"], [1, "permission-grid"], [1, "permission-resource"], [1, "permission-actions"], [1, "directory-panel", "panel"], [1, "directory-heading-actions"], ["name", "staffSearch", 3, "ngModelChange", "keyup.enter", "ngModel", "placeholder"], ["name", "staffRole", 3, "ngModel"], ["name", "staffStatus", 3, "ngModelChange", "ngModel"], ["value", "true"], ["value", "false"], [1, "student-table", "directory-table"], ["name", "staffRole", 3, "ngModelChange", "ngModel"], ["value", "super_admin"], ["href", "javascript:void(0)", 1, "link-button"], [1, "student-row-actions"], ["type", "button", "title", "View staff details", "aria-label", "View staff details", 1, "eye-button", 3, "click"], ["type", "button", 1, "account-button"], ["type", "button", "title", "Delete account", "aria-label", "Delete account", 1, "account-delete"], ["href", "javascript:void(0)", 1, "link-button", 3, "click"], ["type", "button", "title", "Edit staff", "aria-label", "Edit staff", 1, "icon-button", 3, "click"], ["type", "button", 1, "password-button", 3, "click"], ["type", "button", 1, "account-button", 3, "click"], ["type", "button", "title", "Delete account", "aria-label", "Delete account", 1, "account-delete", 3, "click"], ["novalidate", "", 1, "password-dialog", "panel", "profile-dialog", 3, "ngSubmit", "click"], [1, "field-grid", "field-grid-three"], [1, "required-mark"], ["name", "staffFirstName", "minlength", "2", "required", "", 3, "ngModelChange", "ngModel"], [1, "field-error"], ["name", "staffMiddleName", "placeholder", "Optional", 3, "ngModelChange", "ngModel"], ["name", "staffLastName", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "staffEmail", "placeholder", "name@tinytara.com", "required", "", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "staffMobile", "required", "", 3, "ngModelChange", "ngModel"], ["name", "staffBloodGroup", 3, "ngModelChange", "ngModel"], ["name", "staffAddress", "required", "", 3, "ngModelChange", "ngModel"], ["name", "staffColony", "required", "", 3, "ngModelChange", "ngModel"], ["name", "staffCity", "required", "", 3, "ngModelChange", "ngModel"], ["name", "staffState", "required", "", 3, "ngModelChange", "ngModel"], ["name", "staffPin", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "staffPassword", "placeholder", "At least 8 characters", "minlength", "8", "required", "", 3, "ngModelChange", "ngModel"], [1, "password-dialog", "panel", "student-detail-dialog", 3, "click"], ["type", "button", "title", "Edit staff", "aria-label", "Edit staff", 1, "icon-button"], ["colspan", "6"], [1, "password-dialog", "panel", 3, "ngSubmit"], ["type", "password", "name", "newPassword", "minlength", "8", "required", "", "autofocus", "", 3, "ngModelChange", "ngModel"], ["name", "studentSearch", "placeholder", "Search name, parent mobile, email, or student ID", 3, "ngModelChange", "keyup.enter", "ngModel"], ["name", "studentClassFilter", 3, "ngModelChange", "ngModel"], ["type", "button", "title", "View student details", "aria-label", "View student details", 1, "eye-button", 3, "click"], ["type", "button", "title", "Delete student", "aria-label", "Delete student", 1, "account-delete"], ["type", "button", "title", "Edit student", "aria-label", "Edit student", 1, "icon-button", 3, "click"], ["type", "button", "title", "Delete student", "aria-label", "Delete student", 1, "account-delete", 3, "click"], ["name", "first_name", "required", "", 3, "ngModelChange", "ngModel"], ["name", "student_middle_name", 3, "ngModelChange", "ngModel"], ["name", "last_name", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "date_of_birth", "required", "", 3, "ngModelChange", "ngModel"], [1, "age-preview"], ["name", "studentBloodGroup", 3, "ngModelChange", "ngModel"], ["name", "class_option_id", "required", "", 3, "ngModelChange", "ngModel"], ["name", "student_section_id", 3, "ngModelChange", "ngModel", "disabled"], [1, "class-guidance"], ["type", "email", "name", "student_email", "required", "", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "parent_mobile", "placeholder", "919876543210", "required", "", 3, "ngModelChange", "ngModel"], ["name", "father_name", 3, "ngModelChange", "ngModel"], ["name", "mother_name", 3, "ngModelChange", "ngModel"], [1, "guardian-heading"], ["title", "Enter up to two people who are allowed to meet or collect the student from school.", 1, "description-icon"], ["name", "guardian_one_name", "required", "", 3, "ngModelChange", "ngModel"], ["name", "guardian_two_name", 3, "ngModelChange", "ngModel"], [1, "address-fields"], ["name", "studentAddress", "required", "", 3, "ngModelChange", "ngModel"], ["name", "studentColony", "required", "", 3, "ngModelChange", "ngModel"], ["name", "studentCity", "required", "", 3, "ngModelChange", "ngModel"], ["name", "studentState", "required", "", 3, "ngModelChange", "ngModel"], ["name", "studentPin", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "student_password", "minlength", "8", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "studentNewPassword", "minlength", "8", "required", "", "autofocus", "", 3, "ngModelChange", "ngModel"], [1, "attendance-sheet"], ["type", "date", "name", "attendanceDate", 3, "ngModelChange", "ngModel"], ["name", "attendanceClassFilter", 3, "ngModelChange", "ngModel", "disabled"], ["name", "attendanceSectionFilter", 3, "ngModelChange", "ngModel", "disabled"], [1, "panel", "holiday-panel"], [1, "holiday-row"], [3, "ngModelChange", "ngModel", "disabled"], ["value", "present"], ["value", "absent"], ["value", "late"], ["value", "half_day"], ["placeholder", "Optional note", 3, "ngModelChange", "ngModel", "disabled"], ["type", "button", 1, "primary-button", 3, "background", "disabled"], [1, "panel", "attendance-form", 3, "ngSubmit"], ["name", "attendanceStudentId", "required", "", 3, "ngModelChange", "ngModel"], [1, "attendance-mode"], ["name", "punchStudentId", "required", "", 3, "ngModelChange", "ngModel"], [1, "panel", "punch-history-panel"], [1, "punch-filters", 3, "ngSubmit"], ["name", "punchSearch", "placeholder", "Name, student ID, or email", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "punchDate", 3, "ngModelChange", "ngModel"], ["name", "punchClassId", 3, "ngModelChange", "ngModel"], [1, "punch-pending-filter"], ["type", "checkbox", "name", "punchPendingCheckoutOnly", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "primary-button"], [1, "student-table", "punch-history-table"], ["name", "profileName", "minlength", "2", "required", "", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "value"], ["type", "password", "name", "profilePassword", "minlength", "8", "required", "", 3, "ngModelChange", "ngModel"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, Dashboard_Conditional_0_Template, 33, 5, "main", 0)(1, Dashboard_Conditional_1_Template, 49, 8, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.token() ? 0 : 1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, MinValidator, MaxValidator, NgModel, NgForm, RouterLink, DecimalPipe, TitleCasePipe, DatePipe], styles: ['\n.holiday-list-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 1fr auto;\n  align-items: center;\n  gap: 12px;\n}\n.holiday-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n[_nghost-%COMP%] {\n  --%NS%ink: #172b2f;\n  --%NS%muted: #708083;\n  --%NS%line: #dce5e1;\n  --%NS%paper: #f5f7f2;\n  --%NS%white: #ffffff;\n  --%NS%forest: #173c39;\n  --%NS%coral: #ef725e;\n  --%NS%sky: #77b8c6;\n  --%NS%yellow: #f3c75e;\n  display: block;\n  min-height: 100vh;\n  color: var(--%NS%ink);\n  background: var(--%NS%paper);\n  font-family: "Nunito", sans-serif;\n}\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  font: inherit;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: .58;\n}\n.login-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: minmax(360px, 520px) 1fr;\n  background: var(--%NS%paper);\n}\n.login-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 9vw;\n  background: var(--%NS%white);\n}\n.login-brand[_ngcontent-%COMP%], \n.dashboard-logo[_ngcontent-%COMP%], \n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: var(--%NS%coral);\n  color: var(--%NS%white);\n  font: 800 14px/1 "Nunito", sans-serif;\n  letter-spacing: 1px;\n}\n.login-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font: 700 31px/1.05 "Baloo 2", cursive;\n}\n.eyebrow[_ngcontent-%COMP%], \n.section-kicker[_ngcontent-%COMP%], \n.aside-kicker[_ngcontent-%COMP%] {\n  color: var(--%NS%coral);\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  font-size: 10px;\n  font-weight: 900;\n}\n.login-intro[_ngcontent-%COMP%] {\n  max-width: 330px;\n  margin: 32px 0;\n  color: var(--%NS%muted);\n  font-size: 15px;\n  line-height: 1.7;\n}\n.login-form[_ngcontent-%COMP%], \n.content-form[_ngcontent-%COMP%], \n.contact-form[_ngcontent-%COMP%], \n.upload-panel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 17px;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  color: #526568;\n  font-size: 12px;\n  font-weight: 800;\n}\nlabel[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], \nlabel[_ngcontent-%COMP%]    > select[_ngcontent-%COMP%], \nlabel[_ngcontent-%COMP%]    > textarea[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 7px;\n}\n.required-mark[_ngcontent-%COMP%] {\n  display: inline;\n  margin-left: 2px;\n  color: var(--%NS%coral);\n}\n.optional-label[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  color: var(--%NS%muted);\n  font-size: 10px;\n  font-weight: 700;\n}\n.field-grid.field-grid-three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: #b44e43;\n  font-size: 11px;\n  font-weight: 800;\n}\n.popup-error[_ngcontent-%COMP%] {\n  margin: 0 0 15px;\n  padding: 11px 13px;\n  border-left: 3px solid var(--%NS%coral);\n  color: #a34436;\n  background: #fff0ec;\n  font-size: 12px;\n  font-weight: 800;\n}\n.guardian-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-top: 3px;\n  color: var(--%NS%forest);\n  font-size: 13px;\n}\n.description-icon[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 17px;\n  height: 17px;\n  border: 1px solid var(--%NS%sky);\n  border-radius: 50%;\n  color: var(--%NS%sky);\n  font-size: 11px;\n  font-weight: 900;\n  cursor: help;\n}\n.address-fields[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 15px;\n  padding: 15px;\n  border: 1px solid var(--%NS%line);\n  background: #f7faf6;\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--%NS%line);\n  border-radius: 3px;\n  padding: 12px 13px;\n  outline: 0;\n  color: var(--%NS%ink);\n  background: var(--%NS%white);\n  font-size: 14px;\n  font-weight: 600;\n  transition: border-color .2s, box-shadow .2s;\n}\ninput[_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--%NS%coral);\n  box-shadow: 0 0 0 3px rgba(239, 114, 94, .12);\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  line-height: 1.55;\n}\n.primary-button[_ngcontent-%COMP%], \n.outline-button[_ngcontent-%COMP%], \n.text-button[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 12px 17px;\n  border-radius: 3px;\n  font-size: 12px;\n  font-weight: 900;\n}\n.primary-button[_ngcontent-%COMP%] {\n  color: var(--%NS%white);\n  background: var(--%NS%forest);\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  background: #265651;\n}\n.outline-button[_ngcontent-%COMP%] {\n  color: var(--%NS%forest);\n  border: 1px solid #a8beb8;\n  background: transparent;\n}\n.text-button[_ngcontent-%COMP%] {\n  padding: 3px 0;\n  color: var(--%NS%coral);\n  background: transparent;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 5px;\n  padding: 14px;\n}\n.login-aside[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 10%;\n  color: var(--%NS%white);\n  background: var(--%NS%forest);\n}\n.login-aside[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 560px;\n  margin: 14px 0;\n  font: 700 clamp(43px, 5vw, 82px)/.94 "Baloo 2", cursive;\n  letter-spacing: 0;\n}\n.login-aside[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 390px;\n  color: #b9d0c9;\n  font-size: 17px;\n  line-height: 1.6;\n}\n.aside-kicker[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--%NS%yellow);\n}\n.aside-note[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 310px;\n  margin-top: 70px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(255, 255, 255, .25);\n  color: #b9d0c9;\n  font-size: 12px;\n  line-height: 1.6;\n}\n.orbit[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px solid rgba(243, 199, 94, .32);\n  border-radius: 50%;\n}\n.orbit-one[_ngcontent-%COMP%] {\n  width: 540px;\n  height: 540px;\n  right: -180px;\n  top: 12%;\n}\n.orbit-two[_ngcontent-%COMP%] {\n  width: 330px;\n  height: 330px;\n  right: -80px;\n  top: 25%;\n  border-color: rgba(239, 114, 94, .35);\n}\n.dashboard-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 245px 1fr;\n}\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  padding: 30px 21px 24px;\n  color: #d8e7e0;\n  background: var(--%NS%forest);\n}\n.dashboard-logo[_ngcontent-%COMP%] {\n  color: var(--%NS%white);\n  text-decoration: none;\n}\n.dashboard-logo[_ngcontent-%COMP%]   .brand-mark[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: var(--%NS%yellow);\n  color: var(--%NS%forest);\n}\n.dashboard-logo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dashboard-logo[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.user-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.user-chip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.dashboard-logo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.dashboard-logo[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  color: #a7c2b9;\n  font-size: 11px;\n}\n.sidebar-rule[_ngcontent-%COMP%] {\n  height: 1px;\n  margin: 38px 0 28px;\n  background: rgba(255, 255, 255, .15);\n}\n.nav-label[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  color: #7fa49a;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  font-size: 10px;\n  font-weight: 900;\n}\n.sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n}\n.sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 28px 1fr;\n  align-items: center;\n  border: 0;\n  border-radius: 3px;\n  padding: 13px 10px;\n  color: #bdd3cb;\n  text-align: left;\n  background: transparent;\n  font-size: 13px;\n  font-weight: 800;\n}\n.sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #70958b;\n  font-size: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: var(--%NS%white);\n  background: rgba(255, 255, 255, .12);\n}\n.sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--%NS%yellow);\n}\n.sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:has(.notify-badge) {\n  grid-template-columns: 28px 1fr auto;\n}\n.sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .notify-badge[_ngcontent-%COMP%], \n.notify-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 999px;\n  color: #fff;\n  background: #d92d20;\n  font-size: 11px;\n  font-weight: 900;\n}\n.sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]   .notify-badge[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.attention-banner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px 14px;\n  margin-bottom: 18px;\n  padding: 12px 16px;\n  border: 1px solid #f4b4ad;\n  border-left: 5px solid #d92d20;\n  background: #fff1f0;\n  color: #7a1c14;\n}\n.attention-banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #f4b4ad;\n  border-radius: 999px;\n  padding: 6px 12px;\n  color: #7a1c14;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 800;\n  cursor: pointer;\n}\n.sidebar-bottom[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n.user-chip[_ngcontent-%COMP%] {\n  padding: 13px 0 18px;\n  border-top: 1px solid rgba(255, 255, 255, .15);\n}\n.avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 31px;\n  height: 31px;\n  border-radius: 50%;\n  color: var(--%NS%forest);\n  background: var(--%NS%yellow);\n  font-size: 13px;\n  font-weight: 900;\n}\n.user-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  max-width: 145px;\n  overflow: hidden;\n  color: var(--%NS%white);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 12px;\n}\n.user-chip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: #90b1a6;\n  font-size: 10px;\n  text-transform: capitalize;\n}\n.sign-out[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  border: 0;\n  padding: 0;\n  color: #9fbab1;\n  background: transparent;\n  font-size: 12px;\n  font-weight: 800;\n}\n.sign-out[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%white);\n}\n.dashboard-main[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 42px clamp(24px, 5vw, 76px) 70px;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 34px;\n}\n.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font: 700 40px/1 "Baloo 2", cursive;\n}\n.preview-link[_ngcontent-%COMP%] {\n  color: var(--%NS%coral);\n  font-size: 12px;\n  font-weight: 900;\n  text-decoration: none;\n}\n.preview-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.primary-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.message[_ngcontent-%COMP%] {\n  margin: -14px 0 24px;\n  padding: 12px 14px;\n  border-left: 3px solid;\n  font-size: 13px;\n  font-weight: 800;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #a34436;\n  border-color: var(--%NS%coral);\n  background: #fff0ec;\n}\n.success-message[_ngcontent-%COMP%] {\n  color: #387266;\n  border-color: #62a596;\n  background: #eaf6f1;\n}\n.welcome-band[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 28px;\n  padding: 31px 34px;\n  color: var(--%NS%white);\n  background: var(--%NS%coral);\n}\n.welcome-band[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 7px 0 4px;\n  font: 700 34px/1 "Baloo 2", cursive;\n}\n.welcome-band[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 420px;\n  color: #ffe2da;\n  font-size: 13px;\n}\n.welcome-band[_ngcontent-%COMP%]   .section-kicker[_ngcontent-%COMP%] {\n  color: #ffe6a5;\n}\n.welcome-band[_ngcontent-%COMP%]   .primary-button[_ngcontent-%COMP%] {\n  color: var(--%NS%forest);\n  background: var(--%NS%yellow);\n}\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 15px;\n  margin: 17px 0;\n}\n.stat-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 22px 23px;\n  background: var(--%NS%white);\n}\n.stat-card[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: -20px;\n  bottom: -45px;\n  width: 120px;\n  height: 120px;\n  border: 22px solid;\n  border-radius: 50%;\n  content: "";\n  opacity: .15;\n}\n.stat-card.accent-coral[_ngcontent-%COMP%]::after {\n  border-color: var(--%NS%coral);\n}\n.stat-card.accent-blue[_ngcontent-%COMP%]::after {\n  border-color: var(--%NS%sky);\n}\n.stat-card.accent-yellow[_ngcontent-%COMP%]::after {\n  border-color: var(--%NS%yellow);\n}\n.stat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.stat-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--%NS%muted);\n  font-size: 11px;\n  font-weight: 800;\n}\n.stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin: 8px 0 11px;\n  font: 700 15px/1 "Baloo 2", cursive;\n}\n.stat-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n}\n.role-summary[_ngcontent-%COMP%] {\n  margin-bottom: 17px;\n}\n.role-summary[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%] {\n  margin-bottom: 17px;\n}\n.role-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 8px;\n}\n.role-summary-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3px;\n  padding: 13px 10px;\n  border-left: 3px solid var(--%NS%yellow);\n  background: #f7f9f5;\n}\n.role-summary-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--%NS%forest);\n  font: 700 25px/1 "Baloo 2", cursive;\n}\n.role-summary-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--%NS%muted);\n  font-size: 10px;\n  font-weight: 900;\n}\n.overview-grid[_ngcontent-%COMP%], \n.editor-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.1fr) minmax(320px, .9fr);\n  gap: 17px;\n}\n.panel[_ngcontent-%COMP%] {\n  padding: 25px;\n  background: var(--%NS%white);\n}\n.panel-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  gap: 15px;\n  margin-bottom: 22px;\n}\n.panel-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font: 700 25px/1 "Baloo 2", cursive;\n}\n.count-badge[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-width: 27px;\n  height: 27px;\n  border-radius: 50%;\n  color: var(--%NS%forest);\n  background: #edf2ed;\n  font-size: 11px;\n  font-weight: 900;\n}\n.form-stamp[_ngcontent-%COMP%] {\n  color: var(--%NS%muted);\n  font-size: 10px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.mini-list[_ngcontent-%COMP%], \n.section-list[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--%NS%line);\n}\n.mini-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 37px 1fr 10px;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  border: 0;\n  border-bottom: 1px solid var(--%NS%line);\n  padding: 14px 0;\n  color: var(--%NS%ink);\n  text-align: left;\n  background: transparent;\n}\n.mini-row[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%coral);\n}\n.row-index[_ngcontent-%COMP%], \n.drag-number[_ngcontent-%COMP%] {\n  color: var(--%NS%coral);\n  font-size: 10px;\n  font-weight: 900;\n}\n.mini-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.mini-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.section-select[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.section-select[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.mini-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.section-select[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.mini-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.section-select[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: var(--%NS%muted);\n  font-size: 11px;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #63a999;\n}\n.status-dot.offline[_ngcontent-%COMP%] {\n  background: #d3d8d4;\n}\n.editorial-panel[_ngcontent-%COMP%] {\n  color: var(--%NS%white);\n  background: var(--%NS%forest);\n}\n.editorial-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  max-width: 270px;\n  margin: 12px 0;\n  font: 700 29px/1.05 "Baloo 2", cursive;\n}\n.editorial-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 320px;\n  margin-bottom: 29px;\n  color: #b8d0c8;\n  font-size: 13px;\n  line-height: 1.7;\n}\n.editorial-panel[_ngcontent-%COMP%]   .outline-button[_ngcontent-%COMP%] {\n  color: var(--%NS%yellow);\n  border-color: #6e9890;\n}\n.content-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  margin-bottom: 17px;\n}\n.page-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n.page-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--%NS%line);\n  padding: 9px 13px;\n  border-radius: 3px;\n  color: var(--%NS%muted);\n  background: transparent;\n  font-size: 11px;\n  font-weight: 900;\n}\n.page-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-color: var(--%NS%forest);\n  color: var(--%NS%white);\n  background: var(--%NS%forest);\n}\n.editor-layout[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(300px, .8fr) minmax(420px, 1.2fr);\n}\n.section-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  align-items: center;\n  gap: 8px;\n  border-bottom: 1px solid var(--%NS%line);\n}\n.section-row.selected[_ngcontent-%COMP%] {\n  background: #f5f8f3;\n}\n.section-select[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 32px 1fr;\n  gap: 10px;\n  border: 0;\n  padding: 15px 7px;\n  color: var(--%NS%ink);\n  text-align: left;\n  background: transparent;\n}\n.publish-pill[_ngcontent-%COMP%] {\n  padding: 5px 7px;\n  border-radius: 3px;\n  color: #438678;\n  background: #e8f4ee;\n  font-size: 9px;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n.publish-pill.unpublished[_ngcontent-%COMP%] {\n  color: #898f8c;\n  background: #eef0ee;\n}\n.delete-button[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 7px;\n  color: #bd756a;\n  background: transparent;\n  font-size: 20px;\n}\n.field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}\n.toggle-field[_ngcontent-%COMP%] {\n  display: flex;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 11px;\n  padding: 4px 0;\n}\n.toggle-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  accent-color: var(--%NS%coral);\n}\n.toggle-field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  color: var(--%NS%muted);\n  font-weight: 700;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  gap: 9px;\n  margin-top: 3px;\n  padding-top: 17px;\n  border-top: 1px solid var(--%NS%line);\n}\n.single-panel-wrap[_ngcontent-%COMP%] {\n  max-width: 790px;\n}\n.upload-drop[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  justify-items: center;\n  gap: 6px;\n  padding: 48px 20px;\n  border: 1px dashed #b8cbc4;\n  color: var(--%NS%ink);\n  text-align: center;\n  background: #f7faf6;\n}\n.upload-drop[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--%NS%muted);\n  font-size: 11px;\n}\n.upload-symbol[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 42px;\n  height: 42px;\n  margin-bottom: 5px;\n  border-radius: 50%;\n  color: var(--%NS%forest);\n  background: var(--%NS%yellow);\n  font-size: 22px;\n}\n.upload-drop[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n  padding: 32px 0;\n  color: var(--%NS%muted);\n  font-size: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--%NS%ink);\n  font-size: 14px;\n}\n.staff-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(360px, .9fr) minmax(360px, 1.1fr);\n  gap: 17px;\n}\n.form-help[_ngcontent-%COMP%] {\n  margin: -6px 0 4px;\n  color: var(--%NS%muted);\n  font-size: 12px;\n  line-height: 1.6;\n}\n.staff-list[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--%NS%line);\n}\n.staff-search[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.staff-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.staff-search[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 0 0 145px;\n}\n.staff-search[_ngcontent-%COMP%]   .outline-button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.role-counts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 15px;\n}\n.role-counts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border-radius: 3px;\n  color: var(--%NS%muted);\n  background: #f1f4f0;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: capitalize;\n}\n.role-counts[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--%NS%forest);\n  font-size: 12px;\n}\n.staff-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  border-bottom: 1px solid var(--%NS%line);\n  padding: 13px 0;\n}\n.staff-identity[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 11px;\n}\n.staff-identity[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  min-width: 0;\n}\n.staff-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  gap: 12px;\n}\n.small-avatar[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 31px;\n  font-size: 12px;\n}\n.staff-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.staff-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.staff-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 900;\n}\n.staff-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: var(--%NS%muted);\n  font-size: 10px;\n  overflow-wrap: anywhere;\n}\n.staff-row[_ngcontent-%COMP%]   .staff-role-id[_ngcontent-%COMP%] {\n  color: var(--%NS%forest);\n  font-weight: 900;\n  text-transform: capitalize;\n}\n.password-button[_ngcontent-%COMP%] {\n  grid-column: 2 / -1;\n  justify-self: start;\n  border: 0;\n  padding: 0;\n  color: var(--%NS%coral);\n  background: transparent;\n  font-size: 10px;\n  font-weight: 900;\n}\n.password-button[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.account-button[_ngcontent-%COMP%], \n.account-delete[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 0;\n  background: transparent;\n  font-size: 10px;\n  font-weight: 900;\n}\n.account-button[_ngcontent-%COMP%] {\n  color: var(--%NS%forest);\n}\n.account-delete[_ngcontent-%COMP%], \n.delete-button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border: 1px solid var(--%NS%line);\n  border-radius: 50%;\n  padding: 0;\n  color: #b44e43;\n  background: var(--%NS%white);\n  font-size: 15px;\n  line-height: 1;\n  cursor: pointer;\n}\n.account-delete[_ngcontent-%COMP%]:hover, \n.delete-button[_ngcontent-%COMP%]:hover {\n  color: #d33;\n  border-color: #d33;\n}\n.account-button[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.protected-account[_ngcontent-%COMP%] {\n  color: var(--%NS%muted);\n  font-size: 10px;\n  font-weight: 900;\n}\n.inactive-label[_ngcontent-%COMP%] {\n  padding: 5px 7px;\n  border-radius: 3px;\n  color: #9a5d3e;\n  background: #fff0df;\n  font-size: 9px;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding-top: 17px;\n  color: var(--%NS%muted);\n  font-size: 11px;\n  font-weight: 800;\n}\n.pagination[_ngcontent-%COMP%]   .outline-button[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n}\n.profile-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(300px, 1fr));\n  gap: 17px;\n  max-width: 900px;\n}\n.profile-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 17px;\n}\n.attendance-mode[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 9px;\n}\n.attendance-mode[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--%NS%line);\n  padding: 14px;\n  color: var(--%NS%muted);\n  background: #f7f9f5;\n  font-size: 13px;\n  font-weight: 900;\n}\n.attendance-mode[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  border-color: var(--%NS%forest);\n  color: var(--%NS%white);\n  background: var(--%NS%forest);\n}\n.punch-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: end;\n  gap: 12px;\n  margin-bottom: 17px;\n}\n.punch-filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  flex: 1 1 180px;\n  min-width: 150px;\n}\n.punch-filters[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n.punch-filters[_ngcontent-%COMP%]   .punch-pending-filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 6px;\n  flex: 0 0 auto;\n}\n.attendance-sheet[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 280px;\n  gap: 17px;\n}\n.student-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(360px, .85fr) minmax(480px, 1.15fr);\n  gap: 17px;\n}\n.student-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 17px;\n}\n.age-preview[_ngcontent-%COMP%] {\n  color: var(--%NS%coral);\n  font-size: 11px;\n  font-weight: 900;\n}\n.class-guidance[_ngcontent-%COMP%] {\n  margin: -7px 0 0;\n  padding: 10px 12px;\n  color: var(--%NS%forest);\n  background: #edf5eb;\n  font-size: 11px;\n  font-weight: 800;\n}\n.student-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.student-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 11px;\n}\n.student-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 7px;\n  color: var(--%NS%muted);\n  border-bottom: 1px solid var(--%NS%line);\n  text-align: left;\n  text-transform: uppercase;\n  letter-spacing: .7px;\n  font-size: 9px;\n}\n.student-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 7px;\n  border-bottom: 1px solid var(--%NS%line);\n  white-space: nowrap;\n}\n.student-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.student-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.student-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: var(--%NS%muted);\n  font-size: 9px;\n}\n.status-tag[_ngcontent-%COMP%] {\n  padding: 5px 7px;\n  border-radius: 3px;\n  color: #438678;\n  background: #e8f4ee;\n  font-size: 9px;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n.status-inactive[_ngcontent-%COMP%] {\n  color: #9a5d3e;\n  background: #fff0df;\n}\n.link-button[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 0;\n  color: var(--%NS%forest);\n  background: transparent;\n  font-size: 13px;\n  font-weight: 900;\n  text-decoration: underline;\n  text-align: left;\n}\n.link-button[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%coral);\n}\n.eye-button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border: 1px solid var(--%NS%line);\n  border-radius: 50%;\n  padding: 0;\n  color: var(--%NS%forest);\n  background: var(--%NS%white);\n  font-size: 15px;\n  line-height: 1;\n}\n.eye-button[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%coral);\n  border-color: var(--%NS%coral);\n}\n.icon-button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border: 1px solid var(--%NS%line);\n  border-radius: 50%;\n  padding: 0;\n  color: var(--%NS%forest);\n  background: var(--%NS%white);\n  font-size: 16px;\n  line-height: 1;\n}\n.icon-button[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%coral);\n  border-color: var(--%NS%coral);\n}\n.directory-heading-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.directory-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.directory-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n.directory-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.directory-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.profile-dialog[_ngcontent-%COMP%] {\n  width: min(1080px, calc(100vw - 40px));\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n}\n.student-row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  white-space: normal;\n}\n.student-detail-dialog[_ngcontent-%COMP%] {\n  width: min(480px, 100%);\n}\n.student-detail-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 7px 0 15px;\n  font: 700 26px/1.1 "Baloo 2", cursive;\n}\n.student-detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px 16px;\n  margin: 0 0 17px;\n}\n.student-detail-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--%NS%muted);\n  font-size: 9px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n}\n.student-detail-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 3px 0 0;\n  color: var(--%NS%ink);\n  font-size: 13px;\n  font-weight: 700;\n}\n.password-dialog-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 20;\n  display: grid;\n  place-items: center;\n  padding: 20px;\n  background: rgba(23, 60, 57, .62);\n}\n.password-dialog[_ngcontent-%COMP%] {\n  width: min(420px, 100%);\n  box-shadow: 0 20px 70px rgba(0, 0, 0, .22);\n}\n.password-dialog.profile-dialog[_ngcontent-%COMP%] {\n  width: min(1080px, calc(100vw - 40px));\n}\n.password-dialog.student-detail-dialog[_ngcontent-%COMP%] {\n  width: min(760px, calc(100vw - 40px));\n}\n.password-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 7px 0;\n  font: 700 28px/1 "Baloo 2", cursive;\n}\n.password-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: var(--%NS%muted);\n  font-size: 13px;\n}\n@media (max-width: 900px) {\n  .login-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .login-panel[_ngcontent-%COMP%] {\n    min-height: 66vh;\n    padding: 12vw;\n  }\n  .login-aside[_ngcontent-%COMP%] {\n    min-height: 34vh;\n    padding: 10vw;\n  }\n  .login-aside[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n  .aside-note[_ngcontent-%COMP%], \n   .orbit[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .dashboard-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    min-height: auto;\n    padding: 17px 22px;\n  }\n  .sidebar-rule[_ngcontent-%COMP%], \n   .nav-label[_ngcontent-%COMP%], \n   .sidebar-bottom[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    display: flex;\n    overflow-x: auto;\n    margin-top: 19px;\n  }\n  .sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: max-content;\n    padding: 9px 12px;\n  }\n  .sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n    display: none;\n  }\n  .dashboard-main[_ngcontent-%COMP%] {\n    padding: 30px 22px 50px;\n  }\n  .overview-grid[_ngcontent-%COMP%], \n   .editor-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .staff-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .profile-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 1100px) {\n  .student-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .role-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 580px) {\n  .dashboard-header[_ngcontent-%COMP%], \n   .welcome-band[_ngcontent-%COMP%], \n   .content-toolbar[_ngcontent-%COMP%] {\n    align-items: start;\n    flex-direction: column;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .welcome-band[_ngcontent-%COMP%] {\n    padding: 25px;\n  }\n  .stat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 17px;\n  }\n  .field-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .panel[_ngcontent-%COMP%] {\n    padding: 20px 17px;\n  }\n  .page-tabs[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n  .page-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 8px 9px;\n  }\n  .section-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr auto;\n  }\n  .section-row[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%] {\n    grid-column: 2;\n    grid-row: 1;\n  }\n  .publish-pill[_ngcontent-%COMP%] {\n    grid-column: 1;\n    width: max-content;\n    margin: -9px 0 8px 49px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .staff-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 9px;\n  }\n  .staff-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    padding-left: 42px;\n  }\n  .role-pill[_ngcontent-%COMP%] {\n    grid-column: 2;\n    width: max-content;\n  }\n  .password-button[_ngcontent-%COMP%], \n   .account-button[_ngcontent-%COMP%], \n   .account-delete[_ngcontent-%COMP%] {\n    grid-column: 2;\n    justify-self: start;\n  }\n  .staff-search[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .staff-search[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n   .staff-search[_ngcontent-%COMP%]   .outline-button[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-basis: auto;\n  }\n  .role-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `@if (!token()) {
  <main class="login-shell">
    <section class="login-panel">
      <div class="login-brand">
        <span class="brand-mark">TT</span>
        <div>
          <span class="eyebrow">Tiny Tara Preschool</span>
          <h1>Studio dashboard</h1>
        </div>
      </div>
      <p class="login-intro">A quiet control room for the pages, contact details, and gallery your families see.</p>
      <form (ngSubmit)="login()" class="login-form">
        <label>
          Email
          <input type="email" name="email" [(ngModel)]="loginForm.email" autocomplete="username" required>
        </label>
        <label>
          Password
          <input type="password" name="password" [(ngModel)]="loginForm.password" autocomplete="current-password" required>
        </label>
        <button class="primary-button full-width" type="submit" [disabled]="loading()">
          {{ loading() ? 'Signing in\u2026' : 'Enter dashboard' }}
        </button>
      </form>
      @if (error()) {
        <p class="message error-message">{{ error() }}</p>
      }
    </section>
    <aside class="login-aside">
      <div class="orbit orbit-one"></div>
      <div class="orbit orbit-two"></div>
      <span class="aside-kicker">Admin workspace</span>
      <h2>Make every little detail feel cared for.</h2>
      <p>Shape what families discover before they ever walk through the door.</p>
      <div class="aside-note">Content is published section by section, with a clear preview path for every page.</div>
    </aside>
  </main>
} @else {
  <div class="dashboard-shell">
    <aside class="sidebar">
      <a class="dashboard-logo" routerLink="/">
        <span class="brand-mark">TT</span>
        <span><strong>Tiny Tara</strong><small>Studio</small></span>
      </a>
      <div class="sidebar-rule"></div>
      <p class="nav-label">Workspace</p>
      <nav>
        @for (tab of dashboardTabs(); track tab.view; let index = $index) {
          <button [class.active]="activeView() === tab.view" (click)="navigateTo(tab.view)">
            <span>{{ (index + 1).toString().padStart(2, '0') }}</span><span class="tab-label">{{ tab.label }}</span>
            @if (tabUnreadCount(tab.view) > 0) { <span class="notify-badge" [attr.title]="tabUnreadCount(tab.view) + ' unread'">\u{1F514} {{ tabUnreadCount(tab.view) }}</span> }
          </button>
        }
      </nav>
      <div class="sidebar-bottom">
        <div class="user-chip">
          <span class="avatar">{{ user()?.name?.charAt(0) ?? 'A' }}</span>
          <span><strong>{{ user()?.name }}</strong><small>{{ user()?.role }}</small></span>
        </div>
        <button class="sign-out profile-link" (click)="navigateTo('profile')">My profile <span>\u2192</span></button>
        <button class="sign-out" (click)="logout()">Sign out <span>\u2197</span></button>
      </div>
    </aside>

    <main class="dashboard-main">
      <header class="dashboard-header">
        <div>
          <span class="eyebrow">Tiny Tara / Control room</span>
          <h1>{{ viewTitle() }}</h1>
        </div>
        <a class="preview-link" routerLink="/" target="_blank">View public site <span>\u2197</span></a>
      </header>

      @if (error()) { <p class="message error-message">{{ error() }}</p> }
      @if (notice()) { <p class="message success-message">{{ notice() }}</p> }
      @if (pendingItems().length) {
        <section class="attention-banner" role="alert"><strong>\u26A0 Needs attention</strong>
          @for (item of pendingItems(); track item.view) { <button type="button" (click)="navigateTo(item.view)">{{ item.label }} <span class="notify-badge">{{ item.count }}</span></button> }
        </section>
      }

      @if (isTeacher() && !teacherClassEntered()) {
        <section class="single-panel-wrap"><div class="panel editorial-panel"><span class="section-kicker">Teacher workspace</span><h2>Select a class</h2>
          @if (!teacherClasses().length) {
            <p>No classes have been assigned to your account. Please contact the administrator.</p>
          } @else {
            <label>Assigned class<select [ngModel]="selectedTeacherClassId()" (ngModelChange)="selectedTeacherClassId.set($event)"><option value="">Select a class</option>@for (classOption of teacherClasses(); track classOption.id) { <option [value]="classOption.id">{{ classOption.name }}</option> }</select></label>
            <div class="form-actions"><button type="button" class="primary-button" (click)="enterTeacherClass()" [disabled]="!selectedTeacherClassId()">Enter class</button></div>
          }
        </div></section>
      } @else {
      @if (isTeacher()) { <section class="welcome-band"><div><span class="section-kicker">Selected class</span><h2>{{ selectedTeacherClass()?.name }}</h2></div><button type="button" class="outline-button" (click)="changeTeacherClass()">Change class</button></section> }
      @if (activeView() === 'overview' && isTeacher()) {
        <section class="welcome-band"><div><span class="section-kicker">Teacher workspace</span><h2>Today\u2019s classroom roll call.</h2><p>People and records are read-only. Attendance is the only editable area.</p></div><button class="primary-button" (click)="navigateTo('attendance')">Open attendance</button></section>
        <section class="stat-grid"><article class="stat-card accent-coral"><span>Teachers</span><strong>{{ roleCounts()['teacher'] || 0 }}</strong></article><article class="stat-card accent-blue"><span>Clerks</span><strong>{{ roleCounts()['clerk'] || 0 }}</strong></article><article class="stat-card accent-yellow"><span>Security</span><strong>{{ roleCounts()['security'] || 0 }}</strong></article><article class="stat-card accent-blue"><span>Students</span><strong>{{ roleCounts()['student'] || 0 }}</strong></article></section>
      }
      @if (activeView() === 'notes' && can('notes', 'read')) {
        <section class="panel directory-panel"><div class="panel-heading"><div><span class="section-kicker">Teacher notes</span><h3>Class notes</h3></div>@if (can('notes', 'create')) { <button type="button" class="primary-button" (click)="openNoteForm()">Add note</button> }</div>
          <div class="staff-search">@if (!isTeacher()) { <select [ngModel]="noteClassFilter()" (ngModelChange)="noteClassFilter.set($event); loadNoteStudents(); loadNotes()" name="noteClassFilter"><option value="">All classes</option>@for (classOption of classOptions(); track classOption.id) { <option [value]="classOption.id">{{ classOption.name }}</option> }</select> }<select [ngModel]="noteCategoryFilter()" (ngModelChange)="noteCategoryFilter.set($event); loadNotes()" name="noteCategoryFilter"><option value="">All categories</option><option value="leave">Leave</option><option value="class_task">Class task</option><option value="homework">Homework</option><option value="announcement">Announcement</option><option value="general">General</option><option value="other">Other</option></select><select [ngModel]="noteStudentFilter()" (ngModelChange)="noteStudentFilter.set($event); loadNotes()" name="noteStudentFilter"><option value="">All students</option>@for (student of noteStudents(); track student.id) { <option [value]="student.id">{{ student.first_name }} {{ student.last_name }}</option> }</select><input type="date" [ngModel]="noteDateFilter()" (ngModelChange)="noteDateFilter.set($event); loadNotes()" name="noteDateFilter"><button type="button" class="text-button" (click)="noteCategoryFilter.set(''); noteStudentFilter.set(''); noteDateFilter.set(''); loadNotes()">Clear filters</button></div>
          <div class="mini-list">@for (note of notes(); track note.id) { <article class="holiday-list-row" style="grid-template-columns: 1fr auto; align-items: start"><div><strong>{{ note.title }}</strong><span>{{ note.class_name }} \xB7 {{ note.category }} \xB7 {{ note.visibility === 'individual' ? note.student_name : 'Entire class' }}</span><p>{{ note.content }}</p><small>{{ note.created_at | date:'mediumDate' }} {{ note.due_date ? '\xB7 Due ' + note.due_date : '' }}</small></div><span class="holiday-actions">@if (can('notes', 'update')) { <button type="button" class="icon-button" (click)="editNote(note)" title="Edit note" aria-label="Edit note">&#9998;</button> }@if (can('notes', 'delete')) { <button type="button" class="delete-button" (click)="deleteNote(note)" title="Delete note" aria-label="Delete note">&#128465;</button> }</span></article> } @empty { <div class="empty-state">No notes match these filters.</div> }</div>
        </section>
        @if (noteFormOpen()) { <div class="password-dialog-backdrop"><form class="password-dialog panel profile-form" (ngSubmit)="saveNote()"><div class="panel-heading"><div><span class="section-kicker">School notes</span><h3>{{ editingNoteId() ? 'Edit note' : 'Add note' }}</h3></div></div><label>Title<input name="noteTitle" [(ngModel)]="noteForm.title" required></label><div class="field-grid"><label>Class<select name="noteClass" [(ngModel)]="noteForm.class_option_id" (ngModelChange)="loadNoteStudents()" required>@for (classOption of classOptions(); track classOption.id) { <option [value]="classOption.id">{{ classOption.name }}</option> }</select></label><label>Category<select name="noteCategory" [(ngModel)]="noteForm.category"><option value="leave">Leave</option><option value="class_task">Class task</option><option value="homework">Homework</option><option value="announcement">Announcement</option><option value="general">General</option><option value="other">Other</option></select></label></div><div class="field-grid"><label>Audience<select name="noteVisibility" [(ngModel)]="noteForm.visibility"><option value="class">Entire class</option><option value="individual">Individual student</option></select></label>@if (noteForm.visibility === 'individual') { <label>Student<select name="noteStudent" [(ngModel)]="noteForm.student_id" required><option value="">Select student</option>@for (student of noteStudents(); track student.id) { <option [value]="student.id">{{ student.first_name }} {{ student.last_name }}</option> }</select></label> }</div><label>Content<textarea name="noteContent" [(ngModel)]="noteForm.content" rows="6" required></textarea></label><label>Due date<input type="date" name="noteDueDate" [(ngModel)]="noteForm.due_date"></label><div class="form-actions"><button type="button" class="outline-button" (click)="noteFormOpen.set(false)">Cancel</button><button type="submit" class="primary-button" [disabled]="loading() || !can(editingNoteId() ? 'notes' : 'notes', editingNoteId() ? 'update' : 'create')">Save note</button></div></form></div> }
      }
      @if (activeView() === 'class-access' && canManageClassAccess()) {
        <section class="overview-grid"><form class="panel profile-form" (ngSubmit)="saveClassAccess()"><div class="panel-heading"><div><span class="section-kicker">Teacher permissions</span><h3>Assign classes</h3></div></div><label>Teacher<select [ngModel]="classAccessTeacherId()" (ngModelChange)="loadClassAccess($event)" name="classAccessTeacher" required><option value="">Select a teacher</option>@for (teacher of teacherAccounts(); track teacher.id) { <option [value]="teacher.id">{{ teacher.name }} \xB7 {{ teacher.staff_id }}</option> }</select></label><div class="mini-list">@for (classOption of classOptions(); track classOption.id) { <label class="toggle-field"><input type="checkbox" [checked]="classAccessClassIds().includes(classOption.id)" (change)="toggleClassAccess(classOption.id, $any($event.target).checked)"><span>{{ classOption.name }}</span></label> } @empty { <div class="empty-state">No active classes are available.</div> }</div><div class="form-actions"><button class="primary-button" type="submit" [disabled]="loading() || !classAccessTeacherId()">Save class access</button></div></form><div class="panel"><div class="panel-heading"><div><span class="section-kicker">Access audit</span><h3>Teachers assigned to a class</h3></div></div><label>Class<select [ngModel]="classAccessAuditClassId()" (ngModelChange)="loadClassTeachers($event)" name="classAccessAuditClass"><option value="">Select a class</option>@for (classOption of classOptions(); track classOption.id) { <option [value]="classOption.id">{{ classOption.name }}</option> }</select></label><div class="mini-list">@for (teacher of classAccessTeachers(); track teacher.id) { <div class="holiday-list-row"><strong>{{ teacher.name }}</strong><span>{{ teacher.staff_id }}</span><span>{{ teacher.email }}</span></div> } @empty { <div class="empty-state">No teachers are assigned to this class.</div> }</div></div></section>
      }
      @if (activeView() === 'holidays' && canViewHolidays()) { <section class="overview-grid"><div class="panel"><div class="panel-heading"><div><span class="section-kicker">School calendar</span><h3>Upcoming holidays</h3></div><span class="form-stamp">{{ holidays().length }} dates</span></div><div class="mini-list">@for (holiday of holidays(); track holiday.id) { <div class="holiday-list-row"><strong>{{ holiday.holiday_date }}</strong><span>{{ holiday.name }}</span>@if (canManageHolidays()) { <span class="holiday-actions"><button type="button" class="icon-button" (click)="editHoliday(holiday)" title="Edit holiday" aria-label="Edit holiday">&#9998;</button><button type="button" class="delete-button" title="Delete holiday" (click)="deleteHoliday(holiday)" aria-label="Delete holiday">&#128465;</button></span> } @else { <span></span> }</div> } @empty { <div class="empty-state">No holidays added.</div> }</div></div>@if (canManageHolidays()) { <form class="panel profile-form" (ngSubmit)="addHoliday()"><div class="panel-heading"><div><span class="section-kicker">School calendar</span><h3>{{ editingHolidayId() ? 'Edit holiday' : 'Add holiday' }}</h3></div></div><label>Date<input type="date" name="holiday_date" [(ngModel)]="holidayForm.holiday_date" required></label><label>Holiday name<input name="holiday_name" [(ngModel)]="holidayForm.name" placeholder="Festival or school holiday" required></label><div class="form-actions">@if (editingHolidayId()) { <button type="button" class="outline-button" (click)="cancelHolidayEdit()">Cancel</button> }<button class="primary-button" type="submit" [disabled]="loading()">{{ editingHolidayId() ? 'Update holiday' : 'Add holiday' }}</button></div></form> } @else { <aside class="panel editorial-panel"><span class="section-kicker">Teacher view</span><h3>Calendar details</h3><p>School holidays are read-only for teachers.</p></aside> }</section> }
      @if (activeView() === 'tuition' && canManageTuition()) {
        <section class="panel directory-panel">
            <div class="panel-heading"><div><span class="section-kicker">Paid and due</span><h3>Tuition report</h3></div><div class="holiday-actions"><button type="button" class="outline-button" (click)="downloadTuitionReport('xlsx')">Excel</button><button type="button" class="outline-button" (click)="downloadTuitionReport('pdf')">PDF</button><button type="button" class="primary-button" (click)="openTuitionForm()">Record deposit</button></div></div>
            <div class="staff-search"><input name="tuitionSearch" [(ngModel)]="tuitionSearch" (keyup.enter)="searchTuitionReport()" placeholder="Search name, ID, or email"><select name="tuitionClassFilter" [(ngModel)]="tuitionClassFilter" (change)="searchTuitionReport()"><option value="">All classes</option>@for (classOption of classOptions(); track classOption.id) { <option [value]="classOption.id">{{ classOption.name }}</option> }</select><select name="tuitionReportMonth" [(ngModel)]="tuitionMonth" (change)="searchTuitionReport()">@for (month of [1,2,3,4,5,6,7,8,9,10,11,12]; track month) { <option [value]="month">{{ month }}</option> }</select><input type="number" name="tuitionReportYear" [(ngModel)]="tuitionYear" (change)="searchTuitionReport()" min="2020" max="2100"><button type="button" class="outline-button" (click)="searchTuitionReport()">Search</button><button type="button" class="text-button" (click)="clearTuitionFilters()">Reset</button></div>
            <div class="role-summary-grid"><div><span>Due</span><strong>{{ tuitionReport().total_due | number:'1.2-2' }}</strong></div><div><span>Paid</span><strong>{{ tuitionReport().total_paid | number:'1.2-2' }}</strong></div><div><span>Balance</span><strong [style.color]="+tuitionReport().total_balance > 0 ? '#c62828' : null">{{ tuitionReport().total_balance | number:'1.2-2' }}</strong></div></div>
            <div class="student-table-wrap"><table class="student-table"><thead><tr><th>Student</th><th>Status</th><th>Period</th><th>Fee</th><th>Discount</th><th>Adjustment</th><th>Net due</th><th>Paid</th><th>Balance</th><th>Receipt</th><th>Action</th></tr></thead><tbody>@for (fee of tuitionReport().items; track fee.id ?? fee.student_id) { <tr><td><strong>{{ fee.student_name }}</strong><small>{{ fee.student_code }} | {{ fee.email }}</small><small>{{ fee.class_name }}{{ fee.section_name ? ' (' + fee.section_name + ')' : '' }} | {{ fee.parent_mobile }}</small></td><td>{{ fee.status === 'not_recorded' ? 'Not recorded' : fee.status === 'partially_paid' ? 'Partially paid' : 'Paid' }}</td><td>{{ fee.fee_month }}/{{ fee.fee_year }}</td><td>{{ fee.assessed_amount | number:'1.2-2' }}</td><td>{{ fee.discount_amount | number:'1.2-2' }}</td><td>{{ fee.adjustment_amount | number:'1.2-2' }}</td><td>{{ fee.amount_due | number:'1.2-2' }}</td><td>{{ fee.amount_paid | number:'1.2-2' }}</td><td [style.color]="+fee.balance_due > 0 ? '#c62828' : null" [style.font-weight]="+fee.balance_due > 0 ? '900' : null">{{ fee.balance_due | number:'1.2-2' }}</td><td>@if (fee.id) { <button type="button" class="text-button" (click)="downloadTuitionSlip(fee)">PDF slip</button> }</td><td>@if (fee.status === 'not_recorded') { <button type="button" class="text-button" (click)="openTuitionFormForStudent(fee)">Record deposit</button> } @else if (+fee.balance_due > 0) { <button type="button" class="text-button" (click)="openTuitionBalancePayment(fee)">Collect balance</button> }</td></tr> } @empty { <tr><td colspan="11"><div class="empty-state">No enrolled students match these filters.</div></td></tr> }</tbody></table></div>
          @if (tuitionReport().total_pages > 1) { <div class="pagination"><button type="button" class="outline-button" [disabled]="tuitionPage() === 1" (click)="changeTuitionPage(tuitionPage() - 1)">Previous</button><span>Page {{ tuitionReport().page }} of {{ tuitionReport().total_pages }} \xB7 {{ tuitionReport().total }} records</span><button type="button" class="outline-button" [disabled]="tuitionPage() === tuitionReport().total_pages" (click)="changeTuitionPage(tuitionPage() + 1)">Next</button></div> }
        @if (tuitionBalancePaymentTarget(); as fee) { <div class="password-dialog-backdrop" (click)="tuitionBalancePaymentTarget.set(null)"><form class="password-dialog panel profile-form" (ngSubmit)="collectTuitionBalance()" (click)="$event.stopPropagation()"><div class="panel-heading"><div><span class="section-kicker">Outstanding balance</span><h3>Collect balance</h3></div></div>@if (tuitionBalancePaymentError()) { <p class="popup-error">{{ tuitionBalancePaymentError() }}</p> }<p>{{ fee.student_name }} \xB7 {{ fee.fee_month }}/{{ fee.fee_year }}</p><p>Remaining balance: {{ fee.balance_due | number:'1.2-2' }}</p><div class="field-grid"><label>Payment amount<input type="number" name="tuitionBalanceAmount" [(ngModel)]="tuitionBalancePaymentForm.amount" min="0.01" [max]="fee.balance_due" step="0.01" required></label><label>Payment date<input type="date" name="tuitionBalancePaymentDate" [(ngModel)]="tuitionBalancePaymentForm.payment_date" required></label></div><div class="field-grid"><label>Method<select name="tuitionBalancePaymentMethod" [(ngModel)]="tuitionBalancePaymentForm.payment_method" required><option value="cash">Cash</option><option value="upi">UPI</option><option value="card">Card</option><option value="bank_transfer">Bank transfer</option><option value="cheque">Cheque</option></select></label><label>Reference<input name="tuitionBalanceReference" [(ngModel)]="tuitionBalancePaymentForm.payment_reference" placeholder="UPI, cheque, or bank reference"></label></div><label>Note<textarea name="tuitionBalanceNote" [(ngModel)]="tuitionBalancePaymentForm.note" rows="2" placeholder="Optional payment note"></textarea></label><div class="form-actions"><button type="button" class="outline-button" (click)="tuitionBalancePaymentTarget.set(null)">Cancel</button><button class="primary-button" type="submit" [disabled]="loading()">Save payment</button></div></form></div> }
        </section>
        @if (tuitionFormOpen()) { <div class="password-dialog-backdrop" (click)="tuitionFormOpen.set(false)"><form class="password-dialog panel profile-dialog profile-form" (ngSubmit)="recordTuitionFee()" (click)="$event.stopPropagation()"><div class="panel-heading"><div><span class="section-kicker">Monthly ledger</span><h3>Record a deposit</h3></div></div>@if (tuitionFormError()) { <p class="popup-error">{{ tuitionFormError() }}</p> }<div class="field-grid"><label>Student<input name="tuitionStudent" list="tuition-student-options" [(ngModel)]="tuitionStudentSearch" (ngModelChange)="selectTuitionStudentFromSearch()" placeholder="Search and select student" required><datalist id="tuition-student-options">@for (student of filteredTuitionStudents(); track student.id) { <option [value]="tuitionStudentLabel(student)">{{ student.class_option.name }} \xB7 {{ student.parent_mobile }}</option> }</datalist></label><label>Class<select name="tuitionStudentClass" [(ngModel)]="tuitionStudentClassFilter" (ngModelChange)="changeTuitionStudentClass()"><option value="">All classes</option>@for (classOption of classOptions(); track classOption.id) { <option [value]="classOption.id">{{ classOption.name }}</option> }</select></label></div><div class="field-grid"><label>Month<select name="tuitionMonth" [(ngModel)]="tuitionForm.fee_month">@for (month of [1,2,3,4,5,6,7,8,9,10,11,12]; track month) { <option [value]="month">{{ month }}</option> }</select></label><label>Year<input type="number" name="tuitionYear" [(ngModel)]="tuitionForm.fee_year" (ngModelChange)="updateTuitionDue()" min="2020" max="2100" required></label></div><div class="field-grid"><label>Fees assessed<input type="number" name="tuitionDue" [(ngModel)]="tuitionForm.amount_due" readonly></label><label>Discount<input type="number" name="tuitionDiscount" [(ngModel)]="tuitionForm.discount_amount" min="0" step="0.01"></label></div><div class="field-grid"><label>Adjustment<input type="number" name="tuitionAdjustment" [(ngModel)]="tuitionForm.adjustment_amount" step="0.01"></label><label>Due date<input type="date" name="tuitionDueDate" [(ngModel)]="tuitionForm.due_date" required></label></div><div class="field-grid"><label>Deposit received<input type="number" name="tuitionPaid" [(ngModel)]="tuitionForm.amount_paid" min="0" step="0.01"></label><label>Payment date<input type="date" name="tuitionPaymentDate" [(ngModel)]="tuitionForm.payment_date"></label></div><div class="field-grid"><label>Method<select name="tuitionPaymentMethod" [(ngModel)]="tuitionForm.payment_method"><option value="cash">Cash</option><option value="upi">UPI</option><option value="card">Card</option><option value="bank_transfer">Bank transfer</option><option value="cheque">Cheque</option></select></label><label>Reference<input name="tuitionReference" [(ngModel)]="tuitionForm.payment_reference" placeholder="UPI, cheque, or bank reference"></label></div><label>Note<textarea name="tuitionNote" [(ngModel)]="tuitionForm.note" rows="2" placeholder="Optional payment note"></textarea></label><div class="form-actions"><button type="button" class="outline-button" (click)="tuitionFormOpen.set(false)">Cancel</button><button class="primary-button" type="submit" [disabled]="loading()">Save tuition</button></div></form></div> }
      }
      @if (activeView() === 'classes' && canManageClasses()) { <section class="single-panel-wrap"><form class="panel profile-form" (ngSubmit)="createClass()"><div class="panel-heading"><div><span class="section-kicker">Class directory</span><h3>{{ editingClassId() ? 'Edit class' : 'Add class' }}</h3></div></div><div class="field-grid"><label>Class name<input name="className" [(ngModel)]="classForm.name" required></label><label>Display order<input type="number" name="classDisplayOrder" [(ngModel)]="classForm.display_order" min="0"></label></div><div class="field-grid"><label>Minimum age<input type="number" name="classMinAge" [(ngModel)]="classForm.min_age" min="0" max="18" required></label><label>Maximum age<input type="number" name="classMaxAge" [(ngModel)]="classForm.max_age" min="0" max="18" required></label></div><div class="form-actions">@if (editingClassId()) { <button type="button" class="outline-button" (click)="cancelClassEdit()">Cancel</button> }<button class="primary-button" type="submit" [disabled]="loading()">{{ editingClassId() ? 'Update class' : 'Add class' }}</button></div></form><div class="panel student-table-wrap"><table class="student-table"><thead><tr><th>Class</th><th>Age group</th><th>Display order</th><th>Action</th></tr></thead><tbody>@for (classOption of classOptions(); track classOption.id) { <tr><td>{{ classOption.name }}</td><td>Ages {{ classOption.min_age }} - {{ classOption.max_age }} Years</td><td>{{ classOption.display_order }}</td><td><button type="button" class="icon-button" (click)="editClass(classOption)" title="Edit class" aria-label="Edit class">&#9998;</button></td></tr> } @empty { <tr><td colspan="4"><div class="empty-state">No classes have been added.</div></td></tr> }</tbody></table></div><div class="panel"><div class="panel-heading"><div><span class="section-kicker">Class fee</span><h3>Monthly fees</h3></div><div class="holiday-actions"><button type="button" class="primary-button" (click)="openClassTuitionForm()">Set monthly fee</button><button type="button" class="outline-button" (click)="toggleClassFeeDetails()">Fee details</button></div></div>@if (classFeeDetailsVisible()) { <div class="staff-search"><label>Fee year<input type="number" name="classFeeDetailsYear" [(ngModel)]="classFeeDetailsYear" (change)="changeClassFeeDetailsYear()" min="2020" max="2100"></label></div><div class="student-table-wrap"><table class="student-table"><thead><tr><th>Class</th><th>Age group</th><th>Year</th><th>Monthly fee</th><th>Action</th></tr></thead><tbody>@for (fee of orderedClassTuitions(); track fee.id) { <tr><td>{{ classOptions().find(item => item.id === fee.class_option_id)?.name }}</td><td>Ages {{ classOptions().find(item => item.id === fee.class_option_id)?.min_age }} - {{ classOptions().find(item => item.id === fee.class_option_id)?.max_age }} Years</td><td>{{ fee.fee_year }}</td><td>{{ fee.amount | number:'1.2-2' }}</td><td><button type="button" class="icon-button" (click)="editClassTuition(fee)" title="Edit fee" aria-label="Edit fee">&#9998;</button></td></tr> } @empty { <tr><td colspan="5"><div class="empty-state">No class fees have been configured for {{ classFeeDetailsYear }}.</div></td></tr> }</tbody></table></div> }</div><div class="panel"><div class="panel-heading"><div><span class="section-kicker">Class sections</span><h3>Sections</h3></div></div><div class="staff-search"><select name="sectionsClassId" [ngModel]="sectionsClassId" (ngModelChange)="selectSectionsClass($event)"><option value="" disabled>Select class</option>@for (classOption of classOptions(); track classOption.id) { <option [value]="classOption.id">{{ classOption.name }}</option> }</select></div>@if (sectionsClassId()) { <form class="staff-search" (ngSubmit)="saveSection()"><input name="sectionName" [(ngModel)]="sectionForm.name" placeholder="Section name, for example A" required><input type="number" name="sectionDisplayOrder" [(ngModel)]="sectionForm.display_order" min="0" placeholder="Display order">@if (editingSectionId()) { <button type="button" class="outline-button" (click)="cancelSectionEdit()">Cancel</button> }<button class="primary-button" type="submit" [disabled]="loading()">{{ editingSectionId() ? 'Update section' : 'Add section' }}</button></form><div class="student-table-wrap"><table class="student-table"><thead><tr><th>Section</th><th>Display order</th><th>Action</th></tr></thead><tbody>@for (section of classSections(); track section.id) { <tr><td>{{ section.name }}</td><td>{{ section.display_order }}</td><td><button type="button" class="icon-button" (click)="editSection(section)" title="Edit section" aria-label="Edit section">&#9998;</button></td></tr> } @empty { <tr><td colspan="3"><div class="empty-state">No sections have been added for this class.</div></td></tr> }</tbody></table></div> }</div></section>@if (classTuitionFormOpen()) { <div class="password-dialog-backdrop" (click)="classTuitionFormOpen.set(false)"><form class="password-dialog panel profile-form" (ngSubmit)="saveClassTuition()" (click)="$event.stopPropagation()"><div class="panel-heading"><div><span class="section-kicker">Class fee</span><h3>{{ editingClassTuitionId() ? 'Edit monthly fee' : 'Set monthly fee' }}</h3></div></div>@if (classTuitionFormError()) { <p class="popup-error">{{ classTuitionFormError() }}</p> }<label>Class<select name="classTuitionClass" [(ngModel)]="classTuitionForm.class_option_id" required><option value="" disabled>Select class</option>@for (classOption of classOptions(); track classOption.id) { <option [value]="classOption.id">{{ classOption.name }}</option> }</select></label><div class="field-grid"><label>Year<input type="number" name="classTuitionYear" [(ngModel)]="classTuitionForm.fee_year" min="2020" max="2100" required></label><label>Monthly fee<input type="number" name="classTuitionAmount" [(ngModel)]="classTuitionForm.amount" min="0.01" step="0.01" required></label></div><div class="form-actions"><button type="button" class="outline-button" (click)="classTuitionFormOpen.set(false)">Cancel</button><button class="primary-button" type="submit" [disabled]="loading()">{{ editingClassTuitionId() ? 'Update fee' : 'Save fee' }}</button></div></form></div> } }
      @if (activeView() === 'my-dashboard' && isStudent()) {
        <section class="welcome-band"><div><span class="section-kicker">Student dashboard</span><h2>Hello, {{ myStudent()?.first_name || user()?.name }}!</h2><p>Your attendance, School IN/OUT, and today's diary from your teacher.</p></div></section>
        <section class="stat-grid">
          <article class="stat-card accent-blue"><span>Class &amp; section</span><strong>{{ myStudent()?.class_option?.name || '\u2014' }}</strong><small>{{ myStudent()?.section?.name ? 'Section ' + myStudent()?.section?.name : 'No section assigned' }}</small></article>
          <article class="stat-card accent-coral"><span>Present days this month</span><strong>{{ myAttendancePresentCount() }}</strong><small>out of {{ myAttendance().length }} recorded days</small></article>
          <article class="stat-card accent-yellow"><span>Student ID</span><strong>{{ myStudent()?.student_id || '\u2014' }}</strong><small>{{ myStudent()?.status }}</small></article>
        </section>
        <section class="overview-grid">
          <div class="panel">
            <div class="panel-heading"><div><span class="section-kicker">Daily diary</span><h3>{{ myDiaryDate === today() ? "Today's diary" : 'Diary for ' + myDiaryDate }}</h3></div><input type="date" name="myDiaryDate" [ngModel]="myDiaryDate" (ngModelChange)="changeMyDiaryDate($event)"></div>
            @if (myDiaryEntries().length) {
              <div class="mini-list">
                @for (entry of myDiaryEntries(); track entry.id) {
                  <div class="holiday-list-row" style="grid-template-columns: 1fr; align-items: start; gap: 6px;">
                    <div class="student-detail-grid">
                      <div><dt>Teacher</dt><dd>{{ entry.teacher_name }}</dd></div>
                      @if (entry.task_details) { <div><dt>Today's task / homework</dt><dd>{{ entry.task_details }}</dd></div> }
                      @if (entry.book_names) { <div><dt>Book names</dt><dd>{{ entry.book_names }}</dd></div> }
                      @if (entry.syllabus_topic) { <div><dt>Syllabus covered</dt><dd>{{ entry.syllabus_topic }}</dd></div> }
                      @if (entry.remarks) { <div><dt>Remarks</dt><dd>{{ entry.remarks }}</dd></div> }
                      @if (entry.holiday_task) { <div><dt>Holiday task</dt><dd>{{ entry.holiday_task }}</dd></div> }
                    </div>
                  </div>
                }
              </div>
            } @else {
              <div class="empty-state"><strong>No diary entry yet.</strong><span>Your teacher hasn't posted a diary update for this date.</span></div>
            }
          </div>
          <div class="panel">
            <div class="panel-heading"><div><span class="section-kicker">Today</span><h3>School IN / OUT</h3></div></div>
            @if (myPunches().length) {
              <div class="mini-list">
                @for (punch of myPunches(); track punch.id) {
                  <div class="holiday-list-row"><strong>{{ punch.direction }}</strong><span>{{ punch.punched_at | date:'shortTime' }}</span><span></span></div>
                }
              </div>
            } @else {
              <div class="empty-state"><strong>No punches recorded today.</strong></div>
            }
            <div class="panel-heading" style="margin-top: 22px;"><div><span class="section-kicker">This month</span><h3>Attendance</h3></div></div>
            @if (myAttendance().length) {
              <div class="mini-list">
                @for (row of myAttendance(); track row.attendance_date) {
                  <div class="holiday-list-row"><strong>{{ row.attendance_date }}</strong><span class="status-tag" [class.status-inactive]="row.status === 'absent'">{{ row.status || 'Not marked' }}</span><span>{{ row.note }}</span></div>
                }
              </div>
            } @else {
              <div class="empty-state"><strong>No attendance recorded yet this month.</strong></div>
            }
          </div>
        </section>
        <section class="panel">
          <div class="panel-heading"><div><span class="section-kicker">School calendar</span><h3>Upcoming holidays</h3></div></div>
          <div class="mini-list">
            @for (holiday of holidays(); track holiday.id) { <div class="holiday-list-row"><strong>{{ holiday.holiday_date }}</strong><span>{{ holiday.name }}</span><span></span></div> } @empty { <div class="empty-state">No holidays added.</div> }
          </div>
        </section>
      }
      @if (activeView() === 'school-notes' && (isStudent() || isParent())) {
        <section class="welcome-band">
          <div><span class="section-kicker">{{ isStudent() ? 'Student portal \xB7 ' + (myStudent()?.class_option?.name || 'Your classroom') : 'Family portal' }}</span><h2>Stay connected to your class.</h2><p>{{ isStudent() ? 'Read the latest updates from your teachers and keep your school absence requests in one place.' : 'Read the latest updates from your children\u2019s teachers.' }}</p></div>
          <span class="brand-mark">TT</span>
        </section>
        @if (isParent() && noteChildren().length > 1) { <label>Child<select [ngModel]="selectedNoteChildId()" (ngModelChange)="selectParentChild($event)" name="selectedNoteChild"><option value="">Select a child</option>@for (child of noteChildren(); track child.id) { <option [value]="child.id">{{ child.first_name }} {{ child.last_name }} \xB7 {{ child.class_option.name }}</option> }</select></label> }
        <section [class.overview-grid]="isStudent()" [class.single-panel-wrap]="isParent()">
          <div class="panel">
            <div class="panel-heading"><div><span class="section-kicker">From your teachers</span><h3>School notes</h3></div><span class="count-badge">{{ recipientNotes().length }}</span></div>
            @if (isParent() && !noteChildren().length) { <div class="empty-state"><strong>No children are linked to this account.</strong><span>Please contact the school administrator.</span></div> }
            @else { <div class="mini-list">
              @for (note of recipientNotes(); track note.id) {
                <article class="holiday-list-row" style="grid-template-columns: 1fr; align-items: start">
                  <strong>{{ note.title }}</strong>
                  <span>{{ note.category | titlecase }} \xB7 {{ note.class_name }} \xB7 {{ note.created_by_name }} \xB7 {{ note.created_at | date:'mediumDate' }}</span>
                  <p>{{ note.content }}</p>
                  @if (note.due_date) { <small>Due {{ note.due_date | date:'mediumDate' }}</small> }
                </article>
              } @empty { <div class="empty-state"><strong>No school notes yet.</strong><span>Your teacher\u2019s updates and reminders will appear here.</span></div> }
            </div> }
          </div>
          @if (isStudent()) { <form class="panel profile-form" (ngSubmit)="submitLeaveRequest()">
            <div class="panel-heading"><div><span class="section-kicker">Student services</span><h3>Apply for leave</h3></div></div>
            <p class="form-help">Send an absence request to your class teacher. You\u2019ll see its status here after it has been reviewed.</p>
            <div class="field-grid">
              <label>First day away<input type="date" name="leaveStartDate" [(ngModel)]="leaveForm.start_date" required></label>
              <label>Last day away<input type="date" name="leaveEndDate" [(ngModel)]="leaveForm.end_date" required></label>
            </div>
            <label>Reason for leave<textarea name="leaveReason" [(ngModel)]="leaveForm.reason" rows="4" maxlength="2000" placeholder="Please share a short reason for your absence" required></textarea></label>
            <div class="form-actions"><button class="primary-button" type="submit" [disabled]="loading()">Submit application</button></div>
          </form> }
        </section>
        @if (isStudent()) { <section class="panel">
          <div class="panel-heading"><div><span class="section-kicker">Your records</span><h3>Leave applications</h3></div><span class="form-stamp">{{ leaveRequests().length }} applications</span></div>
          <div class="mini-list">
            @for (request of leaveRequests(); track request.id) {
              <article class="holiday-list-row" style="grid-template-columns: 1fr auto; align-items: start">
                <strong>{{ request.start_date | date:'mediumDate' }} \u2013 {{ request.end_date | date:'mediumDate' }}</strong>
                <span class="status-tag" [class.status-inactive]="request.status !== 'approved'">{{ request.status | titlecase }}</span>
                <p>{{ request.reason }}</p>
                @if (request.remarks) { <small><strong>School remarks:</strong> {{ request.remarks }}@if (request.reviewed_by_name) { \xB7 {{ request.reviewed_by_name }} }</small> }
                <small>Submitted {{ request.created_at | date:'mediumDate' }}</small>
              </article>
            } @empty { <div class="empty-state"><strong>No leave applications yet.</strong><span>Submitted requests and review decisions will appear here.</span></div> }
          </div>
        </section> }
      }
      @if (activeView() === 'leave-requests' && canReviewLeaveRequests()) {
        <section class="panel directory-panel">
          <div class="panel-heading"><div><span class="section-kicker">Student services</span><h3>Leave applications</h3></div><span class="form-stamp">{{ leaveRequests().length }} requests</span></div>
          <div class="mini-list">
            @for (request of leaveRequests(); track request.id) {
              <article class="holiday-list-row" style="grid-template-columns: 1fr; align-items: start">
                <div class="panel-heading"><div><strong>{{ request.student_name }}</strong><span>{{ request.student_code }} \xB7 {{ request.class_name }}</span></div><span class="status-tag" [class.status-inactive]="request.status !== 'approved'">{{ request.status | titlecase }}</span></div>
                <strong>{{ request.start_date | date:'mediumDate' }} \u2013 {{ request.end_date | date:'mediumDate' }}</strong>
                <p>{{ request.reason }}</p>
                @if (request.remarks) { <small><strong>Remarks:</strong> {{ request.remarks }}@if (request.reviewed_by_name) { \xB7 Reviewed by {{ request.reviewed_by_name }} }</small> }
                @if (request.status === 'pending') {
                  <div class="profile-form">
                    <label>Remarks <span class="optional-label">optional</span><input [name]="'leaveRemarks-' + request.id" [(ngModel)]="leaveRemarks[request.id]" maxlength="1000" placeholder="Add a note for the student"></label>
                    <div class="form-actions"><button type="button" class="outline-button" [disabled]="loading()" (click)="decideLeaveRequest(request, 'rejected')">Decline</button><button type="button" class="primary-button" [disabled]="loading()" (click)="decideLeaveRequest(request, 'approved')">Approve leave</button></div>
                  </div>
                } @else { <small>Reviewed {{ request.reviewed_at | date:'mediumDate' }}</small> }
              </article>
            } @empty { <div class="empty-state"><strong>No leave requests to review.</strong><span>New student applications will appear here.</span></div> }
          </div>
        </section>
      }
      @if (activeView() === 'enquiries' && canViewEnquiries()) {
        <section class="panel directory-panel">
          <div class="panel-heading"><div><span class="section-kicker">Admissions</span><h3>Admission enquiries</h3></div><span class="form-stamp">{{ enquiries().length }} enquiries</span></div>
          <div class="mini-list">
            @for (enquiry of enquiries(); track enquiry.id) {
              <article class="holiday-list-row" style="grid-template-columns: 1fr; align-items: start">
                <div class="panel-heading"><div><strong>{{ enquiry.child_name }}</strong><span>Parent: {{ enquiry.parent_name }} \xB7 Age group: {{ enquiryAgeLabel(enquiry.child_age) }}</span></div><span>@if (enquiry.is_unread) { <span class="status-tag">New</span> } <span class="status-tag" [class.status-inactive]="enquiry.status !== 'contacted'">{{ enquiry.status | titlecase }}</span></span></div>
                <small><a [href]="'tel:' + enquiry.phone">{{ enquiry.phone }}</a> \xB7 <a [href]="'mailto:' + enquiry.email">{{ enquiry.email }}</a> \xB7 Received {{ enquiry.created_at | date:'medium' }}</small>
                @if (enquiry.message) { <p>{{ enquiry.message }}</p> }
                @if (canUpdateEnquiries()) {
                  <div class="form-actions">
                    <button type="button" class="outline-button" [disabled]="loading() || enquiry.status === 'new'" (click)="setEnquiryStatus(enquiry, 'new')">Mark new</button>
                    <button type="button" class="outline-button" [disabled]="loading() || enquiry.status === 'contacted'" (click)="setEnquiryStatus(enquiry, 'contacted')">Mark contacted</button>
                    <button type="button" class="primary-button" [disabled]="loading() || enquiry.status === 'closed'" (click)="setEnquiryStatus(enquiry, 'closed')">Close</button>
                  </div>
                }
              </article>
            } @empty { <div class="empty-state"><strong>No admission enquiries yet.</strong><span>Enquiries submitted from the Contact page will appear here.</span></div> }
          </div>
        </section>
      }
      @if (activeView() === 'my-dashboard' && isParent()) {
        <section class="panel"><div class="panel-heading"><div><span class="section-kicker">Fee summary</span><h3>{{ parentFeeSummary()?.student_name || 'Linked child' }}</h3></div><label class="date-field">Academic year<select [ngModel]="parentFeeAcademicYear()" (ngModelChange)="changeParentFeeAcademicYear($event)" name="parentFeeAcademicYear"><option value="all">All Academic Years</option>@for (academicYear of parentFeeSummary()?.academic_year_options ?? []; track academicYear) { <option [value]="academicYear">{{ academicYear }}</option> }</select></label></div>
          @if (!noteChildren().length) { <div class="empty-state">No children are linked to this account. Please contact the administrator.</div> }
          @else if (!selectedNoteChildId() && noteChildren().length > 1) { <div class="empty-state">Select a child above to view fee details.</div> }
          @else if (parentFeeLoading()) { <div class="empty-state">Loading fee information\u2026</div> }
          @else if (parentFeeSummary(); as summary) {
            <div class="role-summary-grid"><div><span>{{ parentFeeAcademicYear() === 'all' ? 'Outstanding due across academic years' : 'Outstanding due for ' + parentFeeAcademicYear() }}</span><strong>\u20B9{{ summary.total_outstanding_due | number:'1.2-2' }}</strong></div>@if (summary.can_view_amounts) { <div><span>Total fees assessed</span><strong>\u20B9{{ summary.total_fees_assessed | number:'1.2-2' }}</strong></div><div><span>Total amount paid</span><strong>\u20B9{{ summary.total_amount_paid | number:'1.2-2' }}</strong></div> }</div>
            @for (year of summary.academic_years; track year.academic_year) {
              <div class="panel-heading"><div><span class="section-kicker">Academic year {{ year.academic_year }}</span><h3>{{ year.overall_status === 'not_due' ? 'Not due' : year.overall_status | titlecase }}</h3></div><strong>Due \u20B9{{ year.total_outstanding_due | number:'1.2-2' }}</strong></div>
              @if (summary.can_view_amounts) { <div class="role-summary-grid"><div><span>Fees assessed</span><strong>\u20B9{{ year.total_fees_assessed | number:'1.2-2' }}</strong></div><div><span>Amount paid</span><strong>\u20B9{{ year.total_amount_paid | number:'1.2-2' }}</strong></div></div> }
              <div class="student-table-wrap"><table class="student-table"><thead><tr><th>Month</th><th>Payment status</th><th>Outstanding due</th><th>Due date</th>@if (summary.can_view_amounts) { <th>Fee amount</th><th>Discount</th><th>Adjustment</th><th>Net payable</th><th>Amount paid</th> }</tr></thead><tbody>@for (month of year.months; track month.year + '-' + month.month_number) { <tr><td>{{ month.month }} {{ month.year }}</td><td><span class="status-tag" [class.status-inactive]="month.status === 'unpaid' || month.status === 'overdue'">{{ month.status === 'not_due' ? 'Not due' : month.status | titlecase }}</span></td><td>\u20B9{{ month.outstanding_due | number:'1.2-2' }}</td><td>{{ month.due_date | date:'mediumDate' }}</td>@if (summary.can_view_amounts) { <td>\u20B9{{ month.fee_amount | number:'1.2-2' }}</td><td>\u20B9{{ month.discount_amount | number:'1.2-2' }}</td><td>\u20B9{{ month.adjustment_amount | number:'1.2-2' }}</td><td>\u20B9{{ month.net_payable | number:'1.2-2' }}</td><td>\u20B9{{ month.amount_paid | number:'1.2-2' }}</td> }</tr> } @empty { <tr><td [attr.colspan]="summary.can_view_amounts ? 9 : 4"><div class="empty-state">No fee schedule is available for this academic year.</div></td></tr> }</tbody></table></div>
            } @empty { <div class="empty-state">No academic-year fees are available for this student.</div> }
          } @else { <div class="empty-state">Fee information could not be loaded.</div> }
        </section>
      }
      @if (activeView() === 'overview' && !isTeacher() && !isStudent() && !isParent()) {
        <section class="welcome-band">
          <div>
            <span class="section-kicker">Today at the preschool</span>
            <h2>Keep the welcome warm.</h2>
            <p>Update the pieces families notice first, then let the public pages do the talking.</p>
          </div>
          <button class="primary-button" (click)="activeView.set('pages'); startNewContent()">Add page section <span>\uFF0B</span></button>
        </section>
        <section class="stat-grid">
          <article class="stat-card accent-coral"><span>Published sections</span><strong>{{ publishedCount() }}</strong><small>ready for families</small></article>
          <article class="stat-card accent-blue"><span>Pages touched</span><strong>{{ pageCount() }}</strong><small>with managed content</small></article>
          <article class="stat-card accent-yellow"><span>Team accounts</span><strong>{{ staffAccountCount() || '\u2014' }}</strong><small>staff accounts, excluding students</small></article>
        </section>
        <section class="role-summary panel">
          <div class="panel-heading"><div><span class="section-kicker">People at Tiny Tara</span><h3>Accounts by role</h3></div><button class="text-button" (click)="startStaffForm()">Open staff directory \u2192</button></div>
          <div class="role-summary-grid">
            <div><strong>{{ roleCounts()['super_admin'] || 0 }}</strong><span>Super Admin</span></div>
            <div><strong>{{ roleCounts()['admin'] || 0 }}</strong><span>Admin</span></div>
            <div><strong>{{ roleCounts()['teacher'] || 0 }}</strong><span>Teacher</span></div>
            <div><strong>{{ roleCounts()['clerk'] || 0 }}</strong><span>Clerk</span></div>
            <div><strong>{{ roleCounts()['security'] || 0 }}</strong><span>Security</span></div>
            <div><strong>{{ roleCounts()['student'] || 0 }}</strong><span>Student</span></div>
          </div>
        </section>
        <section class="overview-grid">
          <div class="panel recent-panel">
            <div class="panel-heading"><div><span class="section-kicker">Quick look</span><h3>Home page sections</h3></div><button class="text-button" (click)="activeView.set('pages'); selectPage('home')">Manage all \u2192</button></div>
            @if (pageContents().length) {
              <div class="mini-list">
                @for (content of pageContents().slice(0, 4); track content.id) {
                  <button class="mini-row" (click)="editContent(content)"><span class="row-index">{{ content.display_order | number:'2.0' }}</span><span><strong>{{ content.section_name }}</strong><small>{{ content.title || 'Untitled section' }}</small></span><span class="status-dot" [class.offline]="!content.is_published"></span></button>
                }
              </div>
            } @else {
              <div class="empty-state"><strong>Your first section is waiting.</strong><span>Add a hero, mission, or welcome block for Home.</span></div>
            }
          </div>
          <div class="panel editorial-panel"><span class="section-kicker">Editorial note</span><h3>Small edits, visible difference.</h3><p>Use short section names like <em>hero</em>, <em>mission</em>, and <em>contact_links</em>. The public site receives only published sections.</p><button class="outline-button" (click)="activeView.set('contact')">Review contact details</button></div>
        </section>
      }
      @if (activeView() === 'fee-visibility' && canManageFeeVisibility()) {
        <section class="overview-grid"><div class="panel profile-form"><div class="panel-heading"><div><span class="section-kicker">Student-specific disclosure</span><h3>Parent fee amounts</h3></div></div><label>Search student<input name="feeVisibilitySearch" [ngModel]="feeVisibilitySearch" (ngModelChange)="searchFeeVisibilityStudents($event)" placeholder="Name or student ID"></label><label>Student<select [ngModel]="feeVisibilityStudentId()" (ngModelChange)="loadStudentFeeVisibility($event)" name="feeVisibilityStudent"><option value="">Select a student</option>@for (student of familyStudents(); track student.id) { <option [value]="student.id">{{ student.first_name }} {{ student.last_name }} \xB7 {{ student.class_option.name }} \xB7 {{ student.student_id }}</option> }</select></label>
          @if (studentFeeVisibility(); as visibility) { <p>Current access: <strong>{{ visibility.can_view_amounts ? 'Amounts visible' : 'Amounts hidden' }}</strong></p><div class="form-actions"><button type="button" class="primary-button" (click)="setStudentFeeVisibility(!visibility.can_view_amounts)" [disabled]="feeVisibilitySaving()">{{ feeVisibilitySaving() ? 'Saving\u2026' : visibility.can_view_amounts ? 'Revoke amount access' : 'Grant amount access' }}</button></div><h4>Change history</h4><div class="mini-list">@for (entry of visibility.audit; track entry.id) { <div class="holiday-list-row"><strong>{{ entry.new_value ? 'Granted' : 'Revoked' }}</strong><span>{{ entry.changed_by_name }}</span><span>{{ entry.changed_at | date:'medium' }}</span></div> } @empty { <div class="empty-state">No permission changes recorded.</div> }</div> }
        </div><aside class="panel editorial-panel"><span class="section-kicker">Parent dashboard</span><h3>Amounts stay private by default</h3><p>Grants apply to this student only. Statuses and outstanding due remain visible to linked parents.</p></aside></section>
      }
      @if (activeView() === 'family-links' && canView('family-links')) {
        <section class="overview-grid"><div class="panel profile-form"><div class="panel-heading"><div><span class="section-kicker">Authenticated relationships</span><h3>Link a parent account</h3></div>@if (can('users', 'create')) { <button type="button" class="primary-button" (click)="startParentForm()">Add parent account</button> }</div><label>Parent account<select [ngModel]="parentAccessParentId()" (ngModelChange)="loadParentAccess($event)" name="parentAccessParent"><option value="">Select a parent</option>@for (parent of parentAccounts(); track parent.id) { <option [value]="parent.id">{{ parent.name }} \xB7 {{ parent.email }}</option> }</select></label><div class="mini-list">@for (student of familyStudents(); track student.id) { <label class="toggle-field"><input type="checkbox" [checked]="parentAccessStudentIds().includes(student.id)" (change)="toggleParentStudent(student.id, $any($event.target).checked)" [disabled]="!parentAccessParentId()"><span>{{ student.first_name }} {{ student.last_name }} \xB7 {{ student.class_option.name }} \xB7 {{ student.student_id }}</span></label> } @empty { <div class="empty-state">No students are available.</div> }</div><div class="form-actions"><button type="button" class="primary-button" (click)="saveParentAccess()" [disabled]="!parentAccessParentId() || loading() || !can('students', 'update')">Save family access</button></div></div><aside class="panel editorial-panel"><span class="section-kicker">Family access</span><h3>Linked children only</h3><p>Parent note access is derived from these saved relationships and checked by the API on every request.</p></aside></section>
      }

      @if (activeView() === 'pages' && can('page_content', 'read')) {
        <section class="content-toolbar">
          <div class="page-tabs">
            @for (page of pageOptions; track page.value) {
              <button [class.active]="selectedPage() === page.value" (click)="selectPage(page.value)">{{ page.label }}</button>
            }
          </div>
          @if (can('page_content', 'create')) { <button class="primary-button" (click)="startNewContent()">New section <span>\uFF0B</span></button> }
        </section>
        <section class="editor-layout">
          <div class="panel sections-panel">
            <div class="panel-heading"><div><span class="section-kicker">{{ selectedPage() }} page</span><h3>Sections</h3></div><span class="count-badge">{{ pageContents().length }}</span></div>
            @if (pageContents().length) {
              <div class="section-list">
                @for (content of pageContents(); track content.id) {
                  <article class="section-row" [class.selected]="editingContentId() === content.id">
                    <button class="section-select" (click)="editContent(content)"><span class="drag-number">{{ content.display_order | number:'2.0' }}</span><span><strong>{{ content.section_name }}</strong><small>{{ content.title || 'No title' }}</small></span></button>
                    <span class="publish-pill" [class.unpublished]="!content.is_published">{{ content.is_published ? 'Live' : 'Draft' }}</span>
                    @if (can('page_content', 'delete')) { <button class="delete-button" title="Delete section" (click)="deleteContent(content)" aria-label="Delete section">&#128465;</button> }
                  </article>
                }
              </div>
            } @else {
              <div class="empty-state"><strong>No sections yet.</strong><span>Create the first block for this page.</span></div>
            }
          </div>
          <form class="panel content-form" (ngSubmit)="saveContent()">
            <div class="panel-heading"><div><span class="section-kicker">{{ editingContentId() ? 'Edit section' : 'New section' }}</span><h3>{{ editingContentId() ? contentForm.section_name : 'Build a page block' }}</h3></div></div>
            @if (!editingContentId()) {
              <div class="field-grid">
                <label>Page<select name="page_name" [(ngModel)]="contentForm.page_name"><option value="home">Home</option><option value="about">About Us</option><option value="header">Header</option><option value="footer">Footer</option><option value="contact">Contact</option><option value="activities">Activities</option></select></label>
                <label>Section key<input name="section_name" [(ngModel)]="contentForm.section_name" placeholder="hero" required></label>
              </div>
            }
            <div class="field-grid"><label>Content type<select name="content_type" [(ngModel)]="contentForm.content_type"><option value="text">Text</option><option value="hero">Hero</option><option value="link">Link group</option><option value="image">Image</option></select></label><label>Display order<input type="number" name="display_order" [(ngModel)]="contentForm.display_order" min="0"></label></div>
            <label>Title<input name="title" [(ngModel)]="contentForm.title" placeholder="A short, welcoming heading"></label>
            <label>Body<textarea name="body" [(ngModel)]="contentForm.body" rows="6" placeholder="Write the content families should see..."></textarea></label>
            <div class="field-grid"><label>Image URL<input name="image_url" [(ngModel)]="contentForm.image_url" placeholder="/uploads/gallery/..." /></label><label>Link URL<input name="link_url" [(ngModel)]="contentForm.link_url" placeholder="/about" /></label></div>
            <label class="toggle-field"><input type="checkbox" name="is_published" [(ngModel)]="contentForm.is_published"><span><strong>Publish this section</strong><small>Visible on the public page</small></span></label>
            @if (can(editingContentId() ? 'page_content' : 'page_content', editingContentId() ? 'update' : 'create')) { <div class="form-actions"><button type="button" class="outline-button" (click)="startNewContent()">Clear</button><button class="primary-button" type="submit" [disabled]="loading()">{{ loading() ? 'Saving\u2026' : 'Save section' }}</button></div> }
          </form>
        </section>
      }

      @if (activeView() === 'contact' && can('site_content', 'read')) {
        <section class="single-panel-wrap"><form class="panel contact-form" (ngSubmit)="saveSiteContent()"><div class="panel-heading"><div><span class="section-kicker">Public contact block</span><h3>Make it easy to reach Tiny Tara.</h3></div><span class="form-stamp">Live site details</span></div><div class="field-grid"><label>Email<input type="email" [ngModel]="siteContent().email" (ngModelChange)="updateSiteField('email', $event)" name="email" placeholder="hello@tinytara.com"></label><label>Phone<input [ngModel]="siteContent().phone" (ngModelChange)="updateSiteField('phone', $event)" name="phone" placeholder="+91 ..."></label></div><label>Address<textarea [ngModel]="siteContent().address" (ngModelChange)="updateSiteField('address', $event)" name="address" rows="5" placeholder="School address"></textarea></label><div class="field-grid"><label>School days<input [ngModel]="siteContent().school_days" (ngModelChange)="updateSiteField('school_days', $event)" name="school_days" placeholder="Monday - Friday"></label><label>School hours<input [ngModel]="siteContent().school_hours" (ngModelChange)="updateSiteField('school_hours', $event)" name="school_hours" placeholder="9:00 AM - 2:00 PM"></label></div>@if (can('site_content', 'update')) { <div class="form-actions"><button class="primary-button" type="submit" [disabled]="loading()">Save contact details</button></div> }</form></section>
      }

      @if (activeView() === 'gallery' && can('gallery', 'read')) {
        <section class="single-panel-wrap"><form class="panel upload-panel" (ngSubmit)="uploadGallery()"><div class="panel-heading"><div><span class="section-kicker">Media library</span><h3>Put a real moment on the page.</h3></div><span class="form-stamp">JPG \xB7 PNG \xB7 WebP</span></div><div class="upload-drop"><span class="upload-symbol">\u2191</span><strong>{{ galleryFile?.name || 'Choose a gallery image' }}</strong><small>Maximum file size 10 MB</small><input type="file" accept="image/jpeg,image/png,image/webp" (change)="onGalleryFile($event)"></div><label>Page name<select name="galleryPageName" [(ngModel)]="galleryPageName"><option value="home">Home</option><option value="about">About Us</option><option value="activities">Activities</option><option value="contact">Contact</option></select></label>@if (can('gallery', 'create')) { <div class="form-actions"><button class="primary-button" type="submit" [disabled]="loading() || !galleryFile">Upload image <span>\u2191</span></button></div> }</form></section>
      }

      @if (activeView() === 'permissions' && isSuperAdmin()) {
        <section class="panel permission-panel">
          <div class="panel-heading"><div><span class="section-kicker">Access management</span><h3>Role permissions</h3></div><span class="form-stamp">Super admin only</span></div>
          <div class="field-grid">
            <label>Role
              <select [ngModel]="selectedPermissionRole()" (ngModelChange)="selectedPermissionRole.set($event)">
                <option value="teacher">Teacher</option>
                <option value="clerk">Clerk</option>
                <option value="security">Security</option>
                <option value="admin">Admin</option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
              </select>
            </label>
          </div>
          <div class="permission-grid">
            @for (resource of permissionResources(); track resource) {
              <div class="permission-resource">
                <strong>{{ resource }}</strong>
                <div class="permission-actions">
                  @for (action of permissionActions(); track action) {
                    <label class="toggle-field">
                      <input type="checkbox" [checked]="permissionEnabled(selectedPermissionRole(), resource, action)" (change)="togglePermission(selectedPermissionRole(), resource, action)">
                      <span>{{ action }}</span>
                    </label>
                  }
                </div>
              </div>
            }
          </div>
          <div class="form-actions"><button class="primary-button" type="button" (click)="savePermissions()" [disabled]="loading()">Save permissions</button></div>
        </section>
      }

      @if ((activeView() === 'staff' || activeView() === 'parents') && canViewStaff()) {
        <section class="directory-panel panel">
          <div class="panel-heading"><div><span class="section-kicker">{{ isParentsView() ? 'Family directory' : 'Team directory' }}</span><h3>{{ isParentsView() ? 'Parent accounts' : 'Staff accounts' }}</h3></div><div class="directory-heading-actions"><span class="count-badge">{{ staffTotal() }}</span>@if (can('users', 'create')) { <button type="button" class="primary-button" (click)="isParentsView() ? startParentForm() : startStaffForm()">{{ isParentsView() ? 'Add parent' : 'Add staff' }}</button> }</div></div>
          <div class="staff-search"><input name="staffSearch" [ngModel]="staffSearch" (ngModelChange)="onStaffSearchChange($event)" (keyup.enter)="searchStaff()" [placeholder]="isParentsView() ? 'Search name, email, or parent ID' : 'Search name, email, or staff ID'"><button type="button" class="outline-button" (click)="searchStaff()">Search</button>@if (!isParentsView()) { <select name="staffRole" [ngModel]="staffRole" (ngModelChange)="onStaffRoleChange($event)"><option value="">All staff roles</option><option value="super_admin">Super Admin</option><option value="admin">Admin</option><option value="teacher">Teacher</option><option value="clerk">Clerk</option><option value="security">Security</option></select> }<select name="staffStatus" [ngModel]="staffStatus" (ngModelChange)="onStaffStatusChange($event)"><option value="">All accounts</option><option value="true">Active</option><option value="false">Inactive</option></select></div>
          <div class="student-table-wrap">
            <table class="student-table directory-table">
              <thead><tr><th>{{ isParentsView() ? 'Parent' : 'Staff' }}</th><th>{{ isParentsView() ? 'Parent ID' : 'Staff ID' }}</th><th>Role</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>
                @for (member of users(); track member.id) {
                  <tr><td>@if (member.role === 'parent') { <a href="javascript:void(0)" class="link-button" (click)="viewStaff(member)"><strong>{{ member.name }}</strong></a> } @else { <strong>{{ member.name }}</strong> }<small>{{ member.email }}</small></td><td>{{ member.staff_id }}</td><td>{{ member.role }}</td><td><span class="status-tag" [class.status-inactive]="!member.is_active">{{ member.is_active ? 'Active' : 'Inactive' }}</span></td><td class="student-row-actions"><button type="button" class="eye-button" (click)="viewStaff(member)" title="View staff details" aria-label="View staff details">&#128065;</button>@if (can('users', 'update')) { <button type="button" class="icon-button" (click)="editStaff(member)" title="Edit staff" aria-label="Edit staff">&#9998;</button><button type="button" class="password-button" (click)="startPasswordChange(member)">Change password</button> }@if (!isProtectedAccount(member) && can('users', 'update')) { <button type="button" class="account-button" (click)="toggleAccount(member)">{{ member.is_active ? 'Deactivate' : 'Activate' }}</button> }@if (!isProtectedAccount(member) && can('users', 'delete')) { <button type="button" class="account-delete" (click)="deleteAccount(member)" title="Delete account" aria-label="Delete account">&#128465;</button> }</td></tr>
                } @empty { <tr><td colspan="5"><div class="empty-state"><strong>No accounts loaded.</strong><span>Create the first team member above.</span></div></td></tr> }
              </tbody>
            </table>
          </div>
          @if (staffTotalPages() > 1) { <div class="pagination"><button type="button" class="outline-button" [disabled]="staffPage() === 1" (click)="changeStaffPage(staffPage() - 1)">Previous</button><span>Page {{ staffPage() }} of {{ staffTotalPages() }}</span><button type="button" class="outline-button" [disabled]="staffPage() === staffTotalPages()" (click)="changeStaffPage(staffPage() + 1)">Next</button></div> }
        </section>
        @if (staffFormOpen()) { <div class="password-dialog-backdrop" (click)="staffFormOpen.set(false)"><form class="password-dialog panel profile-dialog" (ngSubmit)="createStaffAccount()" (click)="$event.stopPropagation()" novalidate>
            <div class="panel-heading"><div><span class="section-kicker">Restricted workspace</span><h3>{{ editingStaffId() ? 'Edit team member' : 'Add a team member' }}</h3></div><span class="form-stamp">Admin only</span></div>
            @if (error()) { <p class="popup-error">{{ error() }}</p> }
            <p class="form-help">Create an account for a teacher, clerk, or security team member. Their permissions are assigned automatically by role.</p>
            <div class="field-grid field-grid-three"><label>First name <span class="required-mark">*</span><input name="staffFirstName" [(ngModel)]="staffForm.first_name" minlength="2" required>@if (fieldError('first name')) { <small class="field-error">{{ fieldError('first name') }}</small> }</label><label>Middle name<input name="staffMiddleName" [(ngModel)]="staffForm.middle_name" placeholder="Optional"></label><label>Last name<input name="staffLastName" [(ngModel)]="staffForm.last_name"></label></div>
            <div class="field-grid"><label>Email <span class="required-mark">*</span><input type="email" name="staffEmail" [(ngModel)]="staffForm.email" placeholder="name@tinytara.com" required>@if (fieldError('email')) { <small class="field-error">{{ fieldError('email') }}</small> }</label><label>Mobile number <span class="required-mark">*</span><input type="tel" name="staffMobile" [(ngModel)]="staffForm.mobile" required>@if (fieldError('mobile')) { <small class="field-error">{{ fieldError('mobile') }}</small> }</label></div>
            <div class="field-grid"><label>Role <span class="required-mark">*</span><select name="staffRole" [(ngModel)]="staffForm.role">@if (isParentsView()) { <option value="parent">Parent</option> } @else { @if (isSuperAdmin()) { <option value="admin">Admin</option> }<option value="teacher">Teacher</option><option value="clerk">Clerk</option><option value="security">Security</option> }</select>@if (fieldError('role')) { <small class="field-error">{{ fieldError('role') }}</small> }</label><label>Blood group<select name="staffBloodGroup" [(ngModel)]="staffForm.blood_group"><option value="">Prefer not to say</option>@for (group of bloodGroups; track group) { <option [value]="group">{{ group }}</option> }</select></label></div>
            @if (!editingStaffId()) { <label>Temporary password <span class="required-mark">*</span><input type="password" name="staffPassword" [(ngModel)]="staffForm.password" placeholder="At least 8 characters" minlength="8" required>@if (fieldError('password')) { <small class="field-error">{{ fieldError('password') }}</small> }</label> }
            <label>Address line 1 <span class="required-mark">*</span><input name="staffAddress" [(ngModel)]="staffForm.address_line1" required>@if (fieldError('address_line1')) { <small class="field-error">{{ fieldError('address_line1') }}</small> }</label>
            <div class="field-grid"><label>Colony/Mohalla <span class="required-mark">*</span><input name="staffColony" [(ngModel)]="staffForm.colony" required>@if (fieldError('colony')) { <small class="field-error">{{ fieldError('colony') }}</small> }</label><label>City <span class="required-mark">*</span><input name="staffCity" [(ngModel)]="staffForm.city" required>@if (fieldError('city')) { <small class="field-error">{{ fieldError('city') }}</small> }</label></div>
            <div class="field-grid"><label>State <span class="required-mark">*</span><input name="staffState" [(ngModel)]="staffForm.state" required>@if (fieldError('state')) { <small class="field-error">{{ fieldError('state') }}</small> }</label><label>Pin code <span class="required-mark">*</span><input name="staffPin" [(ngModel)]="staffForm.pin_code" required>@if (fieldError('pin code')) { <small class="field-error">{{ fieldError('pin code') }}</small> }</label></div>
            <div class="form-actions"><button type="button" class="outline-button" (click)="staffFormOpen.set(false)">Cancel</button><button class="primary-button" type="submit" [disabled]="loading()">{{ loading() ? 'Saving\u2026' : (editingStaffId() ? 'Update staff' : 'Create account') }}</button></div>
          </form></div> }
        <!-- obsolete inline staff list retained below only as source reference
        <div class="panel staff-list-panel">
            <div class="panel-heading"><div><span class="section-kicker">Team directory</span><h3>Staff accounts</h3></div><span class="count-badge">{{ staffTotal() }}</span></div>
            <div class="staff-search"><input name="staffSearch" [ngModel]="staffSearch" (ngModelChange)="onStaffSearchChange($event)" (keyup.enter)="searchStaff()" placeholder="Search name, email, or staff ID"><button type="button" class="outline-button" (click)="searchStaff()">Search</button><select name="staffRole" [ngModel]="staffRole" (ngModelChange)="onStaffRoleChange($event)"><option value="">All staff roles</option><option value="super_admin">Super Admin</option><option value="admin">Admin</option><option value="teacher">Teacher</option><option value="clerk">Clerk</option><option value="security">Security</option></select><select name="staffStatus" [ngModel]="staffStatus" (ngModelChange)="onStaffStatusChange($event)"><option value="">All accounts</option><option value="true">Active</option><option value="false">Inactive</option></select></div>
            <div class="staff-list">
              @for (member of users(); track member.id) {
                <div class="staff-row"><div class="staff-identity"><span class="avatar small-avatar">{{ member.name.charAt(0) }}</span><span><strong>{{ member.name }}</strong><small class="staff-role-id">{{ member.role }} \xB7 {{ member.staff_id }}</small><small>{{ member.email }}</small></span></div><div class="staff-actions"><button type="button" class="eye-button" (click)="viewStaff(member)" title="View staff details" aria-label="View staff details">&#128065;</button><button type="button" class="icon-button" (click)="editStaff(member)" title="Edit staff" aria-label="Edit staff">&#9998;</button>@if (!member.is_active) { <span class="inactive-label">Inactive</span> }<button type="button" class="password-button" (click)="startPasswordChange(member)">Change password</button>@if (isProtectedAccount(member)) { <span class="protected-account">Protected</span> } @else { <button type="button" class="account-button" (click)="toggleAccount(member)">{{ member.is_active ? 'Deactivate' : 'Activate' }}</button><button type="button" class="account-delete" (click)="deleteAccount(member)" title="Delete account" aria-label="Delete account">&#128465;</button> }</div></div>
              } @empty {
                <div class="empty-state"><strong>No accounts loaded.</strong><span>Create the first team member above.</span></div>
              }
            </div>
            @if (staffTotalPages() > 1) { <div class="pagination"><button type="button" class="outline-button" [disabled]="staffPage() === 1" (click)="changeStaffPage(staffPage() - 1)">Previous</button><span>Page {{ staffPage() }} of {{ staffTotalPages() }}</span><button type="button" class="outline-button" [disabled]="staffPage() === staffTotalPages()" (click)="changeStaffPage(staffPage() + 1)">Next</button></div> }
          </div> -->
        @if (selectedStaff(); as detail) {
          <div class="password-dialog-backdrop" (click)="selectedStaff.set(null)">
            <div class="password-dialog panel student-detail-dialog" (click)="$event.stopPropagation()">
              <span class="section-kicker">Staff profile</span>
              <h3>{{ detail.first_name }} {{ detail.middle_name ? detail.middle_name + ' ' : '' }}{{ detail.last_name }}</h3>
              <dl class="student-detail-grid">
                <div><dt>Staff ID</dt><dd>{{ detail.staff_id }}</dd></div><div><dt>Role</dt><dd>{{ detail.role }}</dd></div><div><dt>Email</dt><dd>{{ detail.email }}</dd></div><div><dt>Mobile</dt><dd>{{ detail.mobile }}</dd></div><div><dt>Address</dt><dd>{{ detail.address_line1 }}, {{ detail.colony }}, {{ detail.city }}, {{ detail.state }} - {{ detail.pin_code }}</dd></div><div><dt>Blood group</dt><dd>{{ detail.blood_group || 'Not provided' }}</dd></div><div><dt>Status</dt><dd>{{ detail.is_active ? 'Active' : 'Inactive' }}</dd></div>
              </dl>
              @if (detail.role === 'parent') {
                <h4>Linked students</h4>
                @if (parentStudentsLoading()) { <div class="empty-state">Loading students\u2026</div> }
                @else {
                  <div class="student-table-wrap"><table class="student-table">
                    <thead><tr><th>Student</th><th>Student ID</th><th>Class</th><th>Section</th><th>DOB / Age</th><th>Status</th></tr></thead>
                    <tbody>
                      @for (child of selectedParentStudents(); track child.id) {
                        <tr><td><strong>{{ child.first_name }} {{ child.middle_name ? child.middle_name + ' ' : '' }}{{ child.last_name }}</strong><small>{{ child.email }}</small></td><td>{{ child.student_id }}</td><td>{{ child.class_option.name }}</td><td>{{ child.section?.name || '\u2014' }}</td><td>{{ child.date_of_birth }} \xB7 {{ child.age_detail }}</td><td><span class="status-tag" [class.status-inactive]="child.status !== 'active'">{{ child.status }}</span></td></tr>
                      } @empty { <tr><td colspan="6"><div class="empty-state">No students are linked to this parent.</div></td></tr> }
                    </tbody>
                  </table></div>
                }
              }
              <div class="form-actions">@if (can('users', 'update')) { <button type="button" class="icon-button" (click)="editStaff(detail)" title="Edit staff" aria-label="Edit staff">&#9998;</button> }<button type="button" class="outline-button" (click)="selectedStaff.set(null)">Close</button></div>
            </div>
          </div>
        }
        @if (passwordTarget()) {
          <div class="password-dialog-backdrop">
            <form class="password-dialog panel" (ngSubmit)="updateUserPassword()">
              <span class="section-kicker">Admin credential control</span>
              <h3>Change password</h3>
              <p>Set a new password for <strong>{{ passwordTarget()?.name }}</strong>.</p>
              <label>New password<input type="password" name="newPassword" [(ngModel)]="passwordValue" minlength="8" required autofocus></label>
              <div class="form-actions"><button type="button" class="outline-button" (click)="cancelPasswordChange()">Cancel</button><button type="submit" class="primary-button" [disabled]="loading()">Update password</button></div>
            </form>
          </div>
        }
      }

      @if (activeView() === 'students' && canViewStudents()) {
        <section class="directory-panel panel">
          <div class="panel-heading"><div><span class="section-kicker">Student directory</span><h3>Registered students</h3></div><div class="directory-heading-actions"><span class="count-badge">{{ studentTotal() }}</span>@if (can('students', 'create')) { <button type="button" class="primary-button" (click)="startStudentForm()">Add student</button> }</div></div>
          <div class="staff-search">
            <input name="studentSearch" [ngModel]="studentSearch" (ngModelChange)="onStudentSearchChange($event)" (keyup.enter)="searchStudents()" placeholder="Search name, parent mobile, email, or student ID">
            <button type="button" class="outline-button" (click)="searchStudents()">Search</button>
            <select name="studentClassFilter" [ngModel]="studentClassFilter" (ngModelChange)="onStudentClassFilterChange($event)"><option value="">All classes</option>@for (classOption of classOptions(); track classOption.id) { <option [value]="classOption.id">{{ classOption.name }}</option> }</select>
          </div>
          <div class="student-table-wrap">
            <table class="student-table directory-table">
              <thead><tr><th>Student</th><th>Student ID</th><th>Age</th><th>Class</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>
                @for (student of students(); track student.id) {
                    <tr><td><strong>{{ student.first_name }} {{ student.middle_name ? student.middle_name + ' ' : '' }}{{ student.last_name }}</strong><small>{{ student.email }} \xB7 {{ student.parent_mobile }}</small></td><td>{{ student.student_id }}</td><td>{{ student.age_detail }}</td><td>{{ student.class_option.name }}{{ student.section?.name ? ' (' + student.section.name + ')' : '' }}</td><td><span class="status-tag" [class.status-inactive]="student.status !== 'active'">{{ student.status }}</span></td><td class="student-row-actions"><button type="button" class="eye-button" (click)="viewStudent(student)" title="View student details" aria-label="View student details">&#128065;</button>@if (can('students', 'update')) { <button type="button" class="icon-button" (click)="editStudent(student)" title="Edit student" aria-label="Edit student">&#9998;</button><button type="button" class="account-button" (click)="toggleStudentStatus(student)">{{ student.status === 'active' ? 'Deactivate' : 'Activate' }}</button><button type="button" class="password-button" (click)="startStudentPasswordChange(student)">Change password</button> }@if (can('students', 'delete')) { <button type="button" class="account-delete" (click)="deleteStudent(student)" title="Delete student" aria-label="Delete student">&#128465;</button> }</td></tr>
                } @empty { <tr><td colspan="6"><div class="empty-state"><strong>No students registered.</strong><span>Add the first student above.</span></div></td></tr> }
              </tbody>
            </table>
          </div>
          @if (studentTotalPages() > 1) { <div class="pagination"><button type="button" class="outline-button" [disabled]="studentPage() === 1" (click)="changeStudentPage(studentPage() - 1)">Previous</button><span>Page {{ studentPage() }} of {{ studentTotalPages() }}</span><button type="button" class="outline-button" [disabled]="studentPage() === studentTotalPages()" (click)="changeStudentPage(studentPage() + 1)">Next</button></div> }
        </section>
        @if (studentFormOpen()) { <div class="password-dialog-backdrop" (click)="studentFormOpen.set(false)"><form class="password-dialog panel profile-dialog" (ngSubmit)="createStudent()" (click)="$event.stopPropagation()" novalidate>
            <div class="panel-heading"><div><span class="section-kicker">Student registration</span><h3>{{ editingStudentId() ? 'Edit student' : 'Register a new student' }}</h3></div><span class="form-stamp">Inactive until activated</span></div>
          @if (error()) { <p class="popup-error">{{ error() }}</p> }
          <div class="field-grid field-grid-three"><label>First name <span class="required-mark">*</span><input name="first_name" [(ngModel)]="studentForm.first_name" required>@if (fieldError('first name')) { <small class="field-error">{{ fieldError('first name') }}</small> }</label><label>Middle name<input name="student_middle_name" [(ngModel)]="studentForm.middle_name"></label><label>Last name<input name="last_name" [(ngModel)]="studentForm.last_name"></label></div>
          <div class="field-grid"><label>Date of birth <span class="required-mark">*</span><input type="date" name="date_of_birth" [(ngModel)]="studentForm.date_of_birth" required>@if (fieldError('date of birth')) { <small class="field-error">{{ fieldError('date of birth') }}</small> }@if (studentAgeDetail()) { <small class="age-preview">Age: {{ studentAgeDetail() }}</small> }</label><label>Blood group<select name="studentBloodGroup" [(ngModel)]="studentForm.blood_group"><option value="">Prefer not to say</option>@for (group of bloodGroups; track group) { <option [value]="group">{{ group }}</option> }</select></label></div>
          <div class="field-grid"><label>Class <span class="required-mark">*</span><select name="class_option_id" [ngModel]="studentForm.class_option_id" (ngModelChange)="onStudentFormClassChange($event)" required><option value="" disabled>Select class</option>@for (classOption of classOptions(); track classOption.id) { <option [value]="classOption.id">{{ classOption.name }} ({{ classOption.min_age }}\u2013{{ classOption.max_age }} years)</option> }</select>@if (fieldError('class option id')) { <small class="field-error">{{ fieldError('class option id') }}</small> }</label><label>Section<select name="student_section_id" [(ngModel)]="studentForm.section_id" [disabled]="!studentFormSections().length"><option value="">No section</option>@for (section of studentFormSections(); track section.id) { <option [value]="section.id">{{ section.name }}</option> }</select></label></div>
          @if (selectedClass()) { <p class="class-guidance">{{ selectedClass()?.name }} is intended for ages {{ selectedClass()?.min_age }}\u2013{{ selectedClass()?.max_age }} years.</p> }
          <div class="field-grid"><label>Parent Email <span class="required-mark">*</span><input type="email" name="student_email" [(ngModel)]="studentForm.email" required>@if (fieldError('email')) { <small class="field-error">{{ fieldError('email') }}</small> }</label><label>Parent mobile <span class="required-mark">*</span><input type="tel" name="parent_mobile" [(ngModel)]="studentForm.parent_mobile" placeholder="919876543210" required>@if (fieldError('parent mobile')) { <small class="field-error">{{ fieldError('parent mobile') }}</small> }</label></div>
          <div class="field-grid"><label>Father name<input name="father_name" [(ngModel)]="studentForm.father_name"></label><label>Mother name<input name="mother_name" [(ngModel)]="studentForm.mother_name"></label></div>
          <div class="guardian-heading"><strong>Approved guardians</strong><span class="description-icon" title="Enter up to two people who are allowed to meet or collect the student from school.">i</span></div>
          <div class="field-grid"><label>Guardian 1 name <span class="required-mark">*</span><input name="guardian_one_name" [(ngModel)]="studentForm.guardian_one_name" required>@if (fieldError('guardian one name')) { <small class="field-error">{{ fieldError('guardian one name') }}</small> }</label><label>Guardian 2 name<input name="guardian_two_name" [(ngModel)]="studentForm.guardian_two_name"></label></div>
          @if (!editingStudentId()) { <label>Temporary password <span class="required-mark">*</span><input type="password" name="student_password" [(ngModel)]="studentForm.password" minlength="8" required>@if (fieldError('password')) { <small class="field-error">{{ fieldError('password') }}</small> }</label> }
          <div class="address-fields"><label>Address line 1 <span class="required-mark">*</span><input name="studentAddress" [(ngModel)]="studentForm.address_line1" required>@if (fieldError('address_line1')) { <small class="field-error">{{ fieldError('address_line1') }}</small> }</label>
          <div class="field-grid"><label>Colony/Mohalla <span class="required-mark">*</span><input name="studentColony" [(ngModel)]="studentForm.colony" required>@if (fieldError('colony')) { <small class="field-error">{{ fieldError('colony') }}</small> }</label><label>City <span class="required-mark">*</span><input name="studentCity" [(ngModel)]="studentForm.city" required>@if (fieldError('city')) { <small class="field-error">{{ fieldError('city') }}</small> }</label></div>
          <div class="field-grid"><label>State <span class="required-mark">*</span><input name="studentState" [(ngModel)]="studentForm.state" required>@if (fieldError('state')) { <small class="field-error">{{ fieldError('state') }}</small> }</label><label>Pin code <span class="required-mark">*</span><input name="studentPin" [(ngModel)]="studentForm.pin_code" required>@if (fieldError('pin code')) { <small class="field-error">{{ fieldError('pin code') }}</small> }</label></div></div>
            <div class="form-actions"><button type="button" class="outline-button" (click)="studentFormOpen.set(false)">Cancel</button>@if (can('students', editingStudentId() ? 'update' : 'create')) { <button class="primary-button" type="submit" [disabled]="loading() || !classOptions().length">{{ editingStudentId() ? 'Update student' : 'Register student' }}</button> }</div>
          </form></div> }
        <!-- obsolete inline student list retained below only as source reference
        <div class="panel student-list-panel">
            <div class="panel-heading"><div><span class="section-kicker">Student directory</span><h3>Registered students</h3></div><span class="count-badge">{{ studentTotal() }}</span></div>
            <div class="staff-search">
              <input name="studentSearch" [ngModel]="studentSearch" (ngModelChange)="onStudentSearchChange($event)" (keyup.enter)="searchStudents()" placeholder="Search name, mobile, email, or student ID">
              <button type="button" class="outline-button" (click)="searchStudents()">Search</button>
              <select name="studentClassFilter" [ngModel]="studentClassFilter" (ngModelChange)="onStudentClassFilterChange($event)">
                <option value="">All classes</option>
                @for (classOption of classOptions(); track classOption.id) { <option [value]="classOption.id">{{ classOption.name }}</option> }
              </select>
            </div>
            <div class="student-table-wrap">
              <table class="student-table">
                <thead><tr><th>Student</th><th>Student ID</th><th>Age</th><th>Class</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                  @for (student of students(); track student.id) {
                    <tr>
                      <td><button type="button" class="link-button" (click)="viewStudent(student)"><strong>{{ student.first_name }} {{ student.middle_name ? student.middle_name + ' ' : '' }}{{ student.last_name }}</strong></button><small>{{ student.email }} \xB7 {{ student.mobile }}</small></td>
                      <td><button type="button" class="link-button" (click)="viewStudent(student)">{{ student.student_id }}</button></td>
                      <td>{{ student.age }}</td>
                      <td>{{ student.class_option.name }}</td>
                      <td><span class="status-tag" [class.status-inactive]="student.status !== 'active'">{{ student.status }}</span></td>
                      <td class="student-row-actions">
                        <button type="button" class="eye-button" (click)="viewStudent(student)" title="View student details" aria-label="View student details">&#128065;</button><button type="button" class="icon-button" (click)="editStudent(student)" title="Edit student" aria-label="Edit student">&#9998;</button><button type="button" class="account-button" (click)="toggleStudentStatus(student)">{{ student.status === 'active' ? 'Deactivate' : 'Activate' }}</button>
                        <button type="button" class="password-button" (click)="startStudentPasswordChange(student)">Change password</button>
                        <button type="button" class="account-delete"                         (click)="deleteStudent(student)" title="Delete student" aria-label="Delete student">&#128465;</button>                      </td>
                    </tr>
                  }
                </tbody>
              </table>
              @if (!students().length) { <div class="empty-state"><strong>No students registered.</strong><span>Register the first student using the form.</span></div> }
            </div>
            @if (studentTotalPages() > 1) { <div class="pagination"><button type="button" class="outline-button" [disabled]="studentPage() === 1" (click)="changeStudentPage(studentPage() - 1)">Previous</button><span>Page {{ studentPage() }} of {{ studentTotalPages() }}</span><button type="button" class="outline-button" [disabled]="studentPage() === studentTotalPages()" (click)="changeStudentPage(studentPage() + 1)">Next</button></div> }
          </div> -->

        @if (selectedStudent(); as detail) {
          <div class="password-dialog-backdrop" (click)="closeStudentDetail()">
            <div class="password-dialog panel student-detail-dialog" (click)="$event.stopPropagation()">
              <span class="section-kicker">Student profile</span>
              <h3>{{ detail.first_name }} {{ detail.middle_name ? detail.middle_name + ' ' : '' }}{{ detail.last_name }}</h3>
              <dl class="student-detail-grid">
                <div><dt>Student ID</dt><dd>{{ detail.student_id }}</dd></div>
                <div><dt>Class</dt><dd>{{ detail.class_option.name }}{{ detail.section?.name ? ' (' + detail.section.name + ')' : '' }}</dd></div>
                <div><dt>Age</dt><dd>{{ detail.age_detail }}</dd></div>
                <div><dt>Date of birth</dt><dd>{{ detail.date_of_birth }}</dd></div>
                <div><dt>Email</dt><dd>{{ detail.email }}</dd></div>
                <div><dt>Parent mobile</dt><dd>{{ detail.parent_mobile }}</dd></div>
                <div><dt>Father name</dt><dd>{{ detail.father_name || 'Not provided' }}</dd></div>
                <div><dt>Mother name</dt><dd>{{ detail.mother_name || 'Not provided' }}</dd></div>
                <div><dt>Approved guardians</dt><dd>{{ detail.guardian_one_name || 'Not provided' }}<br>{{ detail.guardian_two_name || 'Not provided' }}</dd></div>
                <div><dt>Address</dt><dd>{{ detail.address_line1 }}, {{ detail.colony }}, {{ detail.city }}, {{ detail.state }} - {{ detail.pin_code }}</dd></div>
                <div><dt>Blood group</dt><dd>{{ detail.blood_group || 'Not provided' }}</dd></div>
                <div><dt>Status</dt><dd><span class="status-tag" [class.status-inactive]="detail.status !== 'active'">{{ detail.status }}</span></dd></div>
              </dl>
              <div class="form-actions">
                @if (can('students', 'update')) { <button type="button" class="account-button" (click)="toggleStudentStatus(detail)">{{ detail.status === 'active' ? 'Deactivate' : 'Activate' }}</button><button type="button" class="icon-button" (click)="editStudent(detail)" title="Edit student" aria-label="Edit student">&#9998;</button><button type="button" class="outline-button" (click)="startStudentPasswordChange(detail)">Change password</button> }
                @if (can('students', 'delete')) { <button type="button" class="account-delete" (click)="deleteStudent(detail)" title="Delete student" aria-label="Delete student">&#128465;</button> }
                <button type="button" class="outline-button" (click)="closeStudentDetail()">Close</button>
              </div>
            </div>
          </div>
        }

        @if (studentPasswordTarget(); as passwordTarget) {
          <div class="password-dialog-backdrop">
            <form class="password-dialog panel" (ngSubmit)="updateStudentPassword()">
              <span class="section-kicker">Student credential control</span>
              <h3>Change password</h3>
              <p>Set a new password for <strong>{{ passwordTarget.first_name }} {{ passwordTarget.last_name }}</strong>.</p>
              <label>New password<input type="password" name="studentNewPassword" [(ngModel)]="studentPasswordValue" minlength="8" required autofocus></label>
              <div class="form-actions"><button type="button" class="outline-button" (click)="cancelStudentPasswordChange()">Cancel</button><button type="submit" class="primary-button" [disabled]="loading()">Update password</button></div>
            </form>
          </div>
        }
      }

      @if (activeView() === 'attendance' && canManageClassAttendance()) {
        @if (canManageClassAttendance()) {
          <section class="attendance-sheet"><div class="panel"><div class="panel-heading"><div><span class="section-kicker">Daily roll call</span><h3>Student attendance</h3></div><label class="date-field">Date<input type="date" name="attendanceDate" [ngModel]="attendanceDate" (ngModelChange)="changeAttendanceDate($event)"></label><label class="date-field">Class<select name="attendanceClassFilter" [ngModel]="attendanceClassFilter" (ngModelChange)="changeAttendanceClassFilter($event)" [disabled]="isTeacher()"><option value="">All classes</option>@for (classOption of classOptions(); track classOption.id) { <option [value]="classOption.id">{{ classOption.name }}</option> }</select></label><label class="date-field">Section<select name="attendanceSectionFilter" [ngModel]="attendanceSectionFilter" (ngModelChange)="changeAttendanceSectionFilter($event)" [disabled]="!attendanceFilterSections().length"><option value="">All sections</option>@for (section of attendanceFilterSections(); track section.id) { <option [value]="section.id">{{ section.name }}</option> }</select></label></div><p class="form-help">Today is editable. Past dates are read-only for teachers. Holidays are locked by administration.</p>@if (can('attendance', 'create')) { <div class="form-actions"><span>{{ pendingAttendanceCount() }} pending changes</span><button type="button" class="primary-button" (click)="saveAllDailyAttendance()" [disabled]="!pendingAttendanceCount() || attendanceBulkSaving() || !canEditAttendanceDate()">{{ attendanceBulkSaving() ? 'Saving\u2026' : 'Save all attendance' }}</button></div> }@if (selectedHoliday(); as holiday) { <p class="popup-error">Holiday: {{ holiday.name }}</p> }<table class="student-table directory-table"><thead><tr><th>Student</th><th>Class</th><th>Section</th><th>Status</th><th>Note</th><th>Action</th></tr></thead><tbody>@for (row of dailyAttendance(); track row.student_id) { <tr><td><strong>{{ row.student_name }}</strong><small>{{ row.student_code }}</small></td><td>{{ row.class_name }}</td><td>{{ row.section_name || '-' }}</td><td><select [ngModel]="row.status || ''" (ngModelChange)="row.status = $event" [disabled]="!can('attendance', 'create') || row.status === 'holiday' || !canEditAttendanceDate() || !!row.saving"><option value="">Not marked</option><option value="present">Present</option><option value="absent">Absent</option><option value="late">Late</option><option value="half_day">Half day</option><option value="leave">Leave</option></select></td><td><input [ngModel]="attendanceNote[row.student_id] ?? row.note ?? ''" (ngModelChange)="attendanceNote[row.student_id] = $event" [disabled]="!can('attendance', 'create') || row.status === 'holiday' || !canEditAttendanceDate() || !!row.saving" placeholder="Optional note"></td><td>@if (can('attendance', 'create')) { <button type="button" class="primary-button" [style.background]="isAttendanceSaved(row) ? '#2e7d32' : null" (click)="saveDailyAttendance(row, row.status || '')" [disabled]="row.status === 'holiday' || !canEditAttendanceDate() || !row.status || !isAttendanceModified(row) || !!row.saving || attendanceBulkSaving()">{{ row.saving ? 'Saving\u2026' : isAttendanceSaved(row) ? 'Saved' : 'Save' }}</button> }@if (row.saveError) { <small class="field-error">{{ row.saveError }}</small> }</td></tr>} @empty { <tr><td colspan="6"><div class="empty-state"><strong>No active students.</strong><span>The daily sheet is empty.</span></div></td></tr>}</tbody></table></div><aside class="panel holiday-panel"><div class="panel-heading"><div><span class="section-kicker">School calendar</span><h3>Upcoming holidays</h3></div></div>@for (holiday of holidays(); track holiday.id) { <div class="holiday-row"><strong>{{ holiday.holiday_date }}</strong><span>{{ holiday.name }}</span></div> } @empty { <p class="empty-state">No holidays have been added.</p>}</aside></section>
        } @else {
          <section class="single-panel-wrap"><form class="panel attendance-form" (ngSubmit)="recordStaffAttendance()"><div class="panel-heading"><div><span class="section-kicker">School movement</span><h3>Record student attendance</h3></div><span class="form-stamp">WhatsApp click-to-chat</span></div><p class="form-help">Select School IN or OUT. WhatsApp will open with the parent number and message pre-filled. You will click Send manually.</p><label>Student<select name="attendanceStudentId" [(ngModel)]="attendanceStudentId" required><option value="" disabled>Select student</option>@for (student of attendanceStudents(); track student.id) { <option [value]="student.id">{{ student.first_name }} {{ student.last_name }} \xB7 {{ student.student_id }} \xB7 {{ student.class_option.name }}{{ student.section?.name ? ' (' + student.section.name + ')' : '' }}</option> }</select></label><div class="attendance-mode"><button type="button" [class.selected]="attendanceDirection === 'in'" (click)="attendanceDirection = 'in'">School IN</button><button type="button" [class.selected]="attendanceDirection === 'out'" (click)="attendanceDirection = 'out'">School OUT</button></div><div class="form-actions"><button class="primary-button" type="submit" [disabled]="loading() || !attendanceStudents().length">Record and open WhatsApp</button></div></form></section>
        }
      }

      @if (activeView() === 'punch-attendance' && canManagePunchAttendance()) {
        <section class="single-panel-wrap"><form class="panel attendance-form" (ngSubmit)="recordStaffAttendance()"><div class="panel-heading"><div><span class="section-kicker">School movement</span><h3>Punch In/OUT</h3></div><span class="form-stamp">WhatsApp click-to-chat</span></div><p class="form-help">Record a student's arrival or departure and open WhatsApp with the parent message prepared.</p><label>Student<select name="punchStudentId" [(ngModel)]="attendanceStudentId" required><option value="" disabled>Select student</option>@for (student of attendanceStudents(); track student.id) { <option [value]="student.id">{{ student.first_name }} {{ student.last_name }} \xB7 {{ student.student_id }} \xB7 {{ student.class_option.name }}{{ student.section?.name ? ' (' + student.section.name + ')' : '' }}</option> }</select></label><div class="attendance-mode"><button type="button" [class.selected]="attendanceDirection === 'in'" (click)="attendanceDirection = 'in'">Punch In</button><button type="button" [class.selected]="attendanceDirection === 'out'" (click)="attendanceDirection = 'out'">Punch OUT</button></div><div class="form-actions"><button class="outline-button" type="button" (click)="recordStaffAttendance(false)" [disabled]="loading() || !attendanceStudents().length">Record only</button><button class="primary-button" type="submit" [disabled]="loading() || !attendanceStudents().length">Record and open WhatsApp</button></div></form></section>
        <section class="panel punch-history-panel"><div class="panel-heading"><div><span class="section-kicker">Punch register</span><h3>Punch In/OUT details</h3></div><span class="form-stamp">{{ punchHistoryTotal() }} records</span></div><form class="punch-filters" (ngSubmit)="searchPunchHistory()"><label>Search student<input name="punchSearch" [ngModel]="punchSearch" (ngModelChange)="onPunchSearchChange($event)" placeholder="Name, student ID, or email"></label><label>Date<input type="date" name="punchDate" [(ngModel)]="punchDate"></label><label>Class<select name="punchClassId" [(ngModel)]="punchClassId"><option value="">All classes</option>@for (classOption of punchClasses(); track classOption.id) { <option [value]="classOption.id">{{ classOption.name }}</option> }</select></label><label class="punch-pending-filter"><input type="checkbox" name="punchPendingCheckoutOnly" [ngModel]="punchPendingCheckoutOnly" (ngModelChange)="togglePendingCheckoutFilter($event)">Punched IN, not OUT</label><div class="form-actions"><button class="primary-button" type="submit">Search</button><button class="outline-button" type="button" (click)="clearPunchFilters()">Clear</button></div></form><div class="student-table-wrap"><table class="student-table punch-history-table"><thead><tr><th>Student</th><th>Student ID</th><th>Email ID</th><th>Class</th><th>Direction</th><th>Date and time</th></tr></thead><tbody>@for (punch of punchHistory(); track punch.id) { <tr><td><strong>{{ punch.student_name }}</strong></td><td>{{ punch.student_id }}</td><td>{{ punch.email }}</td><td>{{ punch.class_name }}</td><td>{{ punch.direction }}</td><td>{{ punch.punched_at | date:'dd MMM yyyy, hh:mm a' }}</td></tr> } @empty { <tr><td colspan="6"><div class="empty-state"><strong>No punch records found.</strong><span>Try another date or filter.</span></div></td></tr>}</tbody></table></div>@if (punchHistoryTotalPages() > 1) { <div class="pagination"><button type="button" class="outline-button" [disabled]="punchHistoryPage() === 1" (click)="changePunchHistoryPage(punchHistoryPage() - 1)">Previous</button><span>Page {{ punchHistoryPage() }} of {{ punchHistoryTotalPages() }}</span><button type="button" class="outline-button" [disabled]="punchHistoryPage() === punchHistoryTotalPages()" (click)="changePunchHistoryPage(punchHistoryPage() + 1)">Next</button></div> }</section>
      }

      @if (activeView() === 'profile') {
        <section class="profile-layout"><form class="panel profile-form" (ngSubmit)="updateProfile()"><div class="panel-heading"><div><span class="section-kicker">Personal details</span><h3>Your profile</h3></div><span class="form-stamp">{{ user()?.staff_id }}</span></div><label>Full name<input name="profileName" [(ngModel)]="profileName" minlength="2" required></label><label>Email<input [value]="user()?.email" disabled></label><label>Role<input [value]="user()?.role" disabled></label><div class="form-actions"><button class="primary-button" type="submit" [disabled]="loading()">Save name</button></div></form><form class="panel profile-form" (ngSubmit)="updateMyPassword()"><div class="panel-heading"><div><span class="section-kicker">Account security</span><h3>Update password</h3></div></div><p class="form-help">Choose a password with at least 8 characters.</p><label>New password<input type="password" name="profilePassword" [(ngModel)]="profilePassword" minlength="8" required></label><div class="form-actions"><button class="primary-button" type="submit" [disabled]="loading()">Update password</button></div></form></section>
      }
      }
    </main>
  </div>
}`, styles: ['/* src/app/pages/dashboard/dashboard.css */\n.holiday-list-row {\n  display: grid;\n  grid-template-columns: 120px 1fr auto;\n  align-items: center;\n  gap: 12px;\n}\n.holiday-actions {\n  display: flex;\n  gap: 8px;\n}\n:host {\n  --ink: #172b2f;\n  --muted: #708083;\n  --line: #dce5e1;\n  --paper: #f5f7f2;\n  --white: #ffffff;\n  --forest: #173c39;\n  --coral: #ef725e;\n  --sky: #77b8c6;\n  --yellow: #f3c75e;\n  display: block;\n  min-height: 100vh;\n  color: var(--ink);\n  background: var(--paper);\n  font-family: "Nunito", sans-serif;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n}\nbutton {\n  cursor: pointer;\n}\nbutton:disabled {\n  cursor: wait;\n  opacity: .58;\n}\n.login-shell {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: minmax(360px, 520px) 1fr;\n  background: var(--paper);\n}\n.login-panel {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 9vw;\n  background: var(--white);\n}\n.login-brand,\n.dashboard-logo,\n.user-chip {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.brand-mark {\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: var(--coral);\n  color: var(--white);\n  font: 800 14px/1 "Nunito", sans-serif;\n  letter-spacing: 1px;\n}\n.login-brand h1 {\n  margin: 2px 0 0;\n  font: 700 31px/1.05 "Baloo 2", cursive;\n}\n.eyebrow,\n.section-kicker,\n.aside-kicker {\n  color: var(--coral);\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  font-size: 10px;\n  font-weight: 900;\n}\n.login-intro {\n  max-width: 330px;\n  margin: 32px 0;\n  color: var(--muted);\n  font-size: 15px;\n  line-height: 1.7;\n}\n.login-form,\n.content-form,\n.contact-form,\n.upload-panel {\n  display: grid;\n  gap: 17px;\n}\nlabel {\n  display: block;\n  color: #526568;\n  font-size: 12px;\n  font-weight: 800;\n}\nlabel > input,\nlabel > select,\nlabel > textarea {\n  display: block;\n  margin-top: 7px;\n}\n.required-mark {\n  display: inline;\n  margin-left: 2px;\n  color: var(--coral);\n}\n.optional-label {\n  margin-left: 6px;\n  color: var(--muted);\n  font-size: 10px;\n  font-weight: 700;\n}\n.field-grid.field-grid-three {\n  grid-template-columns: repeat(3, 1fr);\n}\n.field-error {\n  display: block;\n  margin-top: 5px;\n  color: #b44e43;\n  font-size: 11px;\n  font-weight: 800;\n}\n.popup-error {\n  margin: 0 0 15px;\n  padding: 11px 13px;\n  border-left: 3px solid var(--coral);\n  color: #a34436;\n  background: #fff0ec;\n  font-size: 12px;\n  font-weight: 800;\n}\n.guardian-heading {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-top: 3px;\n  color: var(--forest);\n  font-size: 13px;\n}\n.description-icon {\n  display: inline-grid;\n  place-items: center;\n  width: 17px;\n  height: 17px;\n  border: 1px solid var(--sky);\n  border-radius: 50%;\n  color: var(--sky);\n  font-size: 11px;\n  font-weight: 900;\n  cursor: help;\n}\n.address-fields {\n  display: grid;\n  gap: 15px;\n  padding: 15px;\n  border: 1px solid var(--line);\n  background: #f7faf6;\n}\ninput,\nselect,\ntextarea {\n  width: 100%;\n  border: 1px solid var(--line);\n  border-radius: 3px;\n  padding: 12px 13px;\n  outline: 0;\n  color: var(--ink);\n  background: var(--white);\n  font-size: 14px;\n  font-weight: 600;\n  transition: border-color .2s, box-shadow .2s;\n}\ninput:focus,\nselect:focus,\ntextarea:focus {\n  border-color: var(--coral);\n  box-shadow: 0 0 0 3px rgba(239, 114, 94, .12);\n}\ntextarea {\n  resize: vertical;\n  line-height: 1.55;\n}\n.primary-button,\n.outline-button,\n.text-button {\n  border: 0;\n  padding: 12px 17px;\n  border-radius: 3px;\n  font-size: 12px;\n  font-weight: 900;\n}\n.primary-button {\n  color: var(--white);\n  background: var(--forest);\n}\n.primary-button:hover {\n  background: #265651;\n}\n.outline-button {\n  color: var(--forest);\n  border: 1px solid #a8beb8;\n  background: transparent;\n}\n.text-button {\n  padding: 3px 0;\n  color: var(--coral);\n  background: transparent;\n}\n.full-width {\n  width: 100%;\n  margin-top: 5px;\n  padding: 14px;\n}\n.login-aside {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 10%;\n  color: var(--white);\n  background: var(--forest);\n}\n.login-aside h2 {\n  position: relative;\n  max-width: 560px;\n  margin: 14px 0;\n  font: 700 clamp(43px, 5vw, 82px)/.94 "Baloo 2", cursive;\n  letter-spacing: 0;\n}\n.login-aside p {\n  position: relative;\n  max-width: 390px;\n  color: #b9d0c9;\n  font-size: 17px;\n  line-height: 1.6;\n}\n.aside-kicker {\n  position: relative;\n  color: var(--yellow);\n}\n.aside-note {\n  position: relative;\n  max-width: 310px;\n  margin-top: 70px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(255, 255, 255, .25);\n  color: #b9d0c9;\n  font-size: 12px;\n  line-height: 1.6;\n}\n.orbit {\n  position: absolute;\n  border: 1px solid rgba(243, 199, 94, .32);\n  border-radius: 50%;\n}\n.orbit-one {\n  width: 540px;\n  height: 540px;\n  right: -180px;\n  top: 12%;\n}\n.orbit-two {\n  width: 330px;\n  height: 330px;\n  right: -80px;\n  top: 25%;\n  border-color: rgba(239, 114, 94, .35);\n}\n.dashboard-shell {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 245px 1fr;\n}\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  padding: 30px 21px 24px;\n  color: #d8e7e0;\n  background: var(--forest);\n}\n.dashboard-logo {\n  color: var(--white);\n  text-decoration: none;\n}\n.dashboard-logo .brand-mark {\n  width: 38px;\n  height: 38px;\n  background: var(--yellow);\n  color: var(--forest);\n}\n.dashboard-logo strong,\n.dashboard-logo small,\n.user-chip strong,\n.user-chip small {\n  display: block;\n}\n.dashboard-logo strong {\n  font-size: 15px;\n}\n.dashboard-logo small {\n  margin-top: 2px;\n  color: #a7c2b9;\n  font-size: 11px;\n}\n.sidebar-rule {\n  height: 1px;\n  margin: 38px 0 28px;\n  background: rgba(255, 255, 255, .15);\n}\n.nav-label {\n  margin-bottom: 12px;\n  color: #7fa49a;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  font-size: 10px;\n  font-weight: 900;\n}\n.sidebar nav {\n  display: grid;\n  gap: 5px;\n}\n.sidebar nav button {\n  display: grid;\n  grid-template-columns: 28px 1fr;\n  align-items: center;\n  border: 0;\n  border-radius: 3px;\n  padding: 13px 10px;\n  color: #bdd3cb;\n  text-align: left;\n  background: transparent;\n  font-size: 13px;\n  font-weight: 800;\n}\n.sidebar nav button span {\n  color: #70958b;\n  font-size: 10px;\n}\n.sidebar nav button:hover,\n.sidebar nav button.active {\n  color: var(--white);\n  background: rgba(255, 255, 255, .12);\n}\n.sidebar nav button.active span {\n  color: var(--yellow);\n}\n.sidebar nav button:has(.notify-badge) {\n  grid-template-columns: 28px 1fr auto;\n}\n.sidebar nav button .notify-badge,\n.notify-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 999px;\n  color: #fff;\n  background: #d92d20;\n  font-size: 11px;\n  font-weight: 900;\n}\n.sidebar nav button.active .notify-badge {\n  color: #fff;\n}\n.attention-banner {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px 14px;\n  margin-bottom: 18px;\n  padding: 12px 16px;\n  border: 1px solid #f4b4ad;\n  border-left: 5px solid #d92d20;\n  background: #fff1f0;\n  color: #7a1c14;\n}\n.attention-banner button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #f4b4ad;\n  border-radius: 999px;\n  padding: 6px 12px;\n  color: #7a1c14;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 800;\n  cursor: pointer;\n}\n.sidebar-bottom {\n  margin-top: auto;\n}\n.user-chip {\n  padding: 13px 0 18px;\n  border-top: 1px solid rgba(255, 255, 255, .15);\n}\n.avatar {\n  display: grid;\n  place-items: center;\n  width: 31px;\n  height: 31px;\n  border-radius: 50%;\n  color: var(--forest);\n  background: var(--yellow);\n  font-size: 13px;\n  font-weight: 900;\n}\n.user-chip strong {\n  max-width: 145px;\n  overflow: hidden;\n  color: var(--white);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 12px;\n}\n.user-chip small {\n  margin-top: 3px;\n  color: #90b1a6;\n  font-size: 10px;\n  text-transform: capitalize;\n}\n.sign-out {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  border: 0;\n  padding: 0;\n  color: #9fbab1;\n  background: transparent;\n  font-size: 12px;\n  font-weight: 800;\n}\n.sign-out:hover {\n  color: var(--white);\n}\n.dashboard-main {\n  min-width: 0;\n  padding: 42px clamp(24px, 5vw, 76px) 70px;\n}\n.dashboard-header {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 34px;\n}\n.dashboard-header h1 {\n  margin: 5px 0 0;\n  font: 700 40px/1 "Baloo 2", cursive;\n}\n.preview-link {\n  color: var(--coral);\n  font-size: 12px;\n  font-weight: 900;\n  text-decoration: none;\n}\n.preview-link span,\n.primary-button span {\n  margin-left: 8px;\n}\n.message {\n  margin: -14px 0 24px;\n  padding: 12px 14px;\n  border-left: 3px solid;\n  font-size: 13px;\n  font-weight: 800;\n}\n.error-message {\n  color: #a34436;\n  border-color: var(--coral);\n  background: #fff0ec;\n}\n.success-message {\n  color: #387266;\n  border-color: #62a596;\n  background: #eaf6f1;\n}\n.welcome-band {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 28px;\n  padding: 31px 34px;\n  color: var(--white);\n  background: var(--coral);\n}\n.welcome-band h2 {\n  margin: 7px 0 4px;\n  font: 700 34px/1 "Baloo 2", cursive;\n}\n.welcome-band p {\n  max-width: 420px;\n  color: #ffe2da;\n  font-size: 13px;\n}\n.welcome-band .section-kicker {\n  color: #ffe6a5;\n}\n.welcome-band .primary-button {\n  color: var(--forest);\n  background: var(--yellow);\n}\n.stat-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 15px;\n  margin: 17px 0;\n}\n.stat-card {\n  position: relative;\n  overflow: hidden;\n  padding: 22px 23px;\n  background: var(--white);\n}\n.stat-card::after {\n  position: absolute;\n  right: -20px;\n  bottom: -45px;\n  width: 120px;\n  height: 120px;\n  border: 22px solid;\n  border-radius: 50%;\n  content: "";\n  opacity: .15;\n}\n.stat-card.accent-coral::after {\n  border-color: var(--coral);\n}\n.stat-card.accent-blue::after {\n  border-color: var(--sky);\n}\n.stat-card.accent-yellow::after {\n  border-color: var(--yellow);\n}\n.stat-card span,\n.stat-card small {\n  display: block;\n  color: var(--muted);\n  font-size: 11px;\n  font-weight: 800;\n}\n.stat-card strong {\n  display: block;\n  margin: 8px 0 11px;\n  font: 700 15px/1 "Baloo 2", cursive;\n}\n.stat-card small {\n  font-size: 10px;\n  font-weight: 700;\n}\n.role-summary {\n  margin-bottom: 17px;\n}\n.role-summary .panel-heading {\n  margin-bottom: 17px;\n}\n.role-summary-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 8px;\n}\n.role-summary-grid div {\n  display: grid;\n  gap: 3px;\n  padding: 13px 10px;\n  border-left: 3px solid var(--yellow);\n  background: #f7f9f5;\n}\n.role-summary-grid strong {\n  color: var(--forest);\n  font: 700 25px/1 "Baloo 2", cursive;\n}\n.role-summary-grid span {\n  color: var(--muted);\n  font-size: 10px;\n  font-weight: 900;\n}\n.overview-grid,\n.editor-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.1fr) minmax(320px, .9fr);\n  gap: 17px;\n}\n.panel {\n  padding: 25px;\n  background: var(--white);\n}\n.panel-heading {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  gap: 15px;\n  margin-bottom: 22px;\n}\n.panel-heading h3 {\n  margin: 6px 0 0;\n  font: 700 25px/1 "Baloo 2", cursive;\n}\n.count-badge {\n  display: grid;\n  place-items: center;\n  min-width: 27px;\n  height: 27px;\n  border-radius: 50%;\n  color: var(--forest);\n  background: #edf2ed;\n  font-size: 11px;\n  font-weight: 900;\n}\n.form-stamp {\n  color: var(--muted);\n  font-size: 10px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.mini-list,\n.section-list {\n  border-top: 1px solid var(--line);\n}\n.mini-row {\n  display: grid;\n  grid-template-columns: 37px 1fr 10px;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  border: 0;\n  border-bottom: 1px solid var(--line);\n  padding: 14px 0;\n  color: var(--ink);\n  text-align: left;\n  background: transparent;\n}\n.mini-row:hover {\n  color: var(--coral);\n}\n.row-index,\n.drag-number {\n  color: var(--coral);\n  font-size: 10px;\n  font-weight: 900;\n}\n.mini-row strong,\n.mini-row small,\n.section-select strong,\n.section-select small {\n  display: block;\n}\n.mini-row strong,\n.section-select strong {\n  font-size: 13px;\n}\n.mini-row small,\n.section-select small {\n  margin-top: 3px;\n  color: var(--muted);\n  font-size: 11px;\n}\n.status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #63a999;\n}\n.status-dot.offline {\n  background: #d3d8d4;\n}\n.editorial-panel {\n  color: var(--white);\n  background: var(--forest);\n}\n.editorial-panel h3 {\n  max-width: 270px;\n  margin: 12px 0;\n  font: 700 29px/1.05 "Baloo 2", cursive;\n}\n.editorial-panel p {\n  max-width: 320px;\n  margin-bottom: 29px;\n  color: #b8d0c8;\n  font-size: 13px;\n  line-height: 1.7;\n}\n.editorial-panel .outline-button {\n  color: var(--yellow);\n  border-color: #6e9890;\n}\n.content-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  margin-bottom: 17px;\n}\n.page-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n.page-tabs button {\n  border: 1px solid var(--line);\n  padding: 9px 13px;\n  border-radius: 3px;\n  color: var(--muted);\n  background: transparent;\n  font-size: 11px;\n  font-weight: 900;\n}\n.page-tabs button.active {\n  border-color: var(--forest);\n  color: var(--white);\n  background: var(--forest);\n}\n.editor-layout {\n  grid-template-columns: minmax(300px, .8fr) minmax(420px, 1.2fr);\n}\n.section-row {\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  align-items: center;\n  gap: 8px;\n  border-bottom: 1px solid var(--line);\n}\n.section-row.selected {\n  background: #f5f8f3;\n}\n.section-select {\n  display: grid;\n  grid-template-columns: 32px 1fr;\n  gap: 10px;\n  border: 0;\n  padding: 15px 7px;\n  color: var(--ink);\n  text-align: left;\n  background: transparent;\n}\n.publish-pill {\n  padding: 5px 7px;\n  border-radius: 3px;\n  color: #438678;\n  background: #e8f4ee;\n  font-size: 9px;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n.publish-pill.unpublished {\n  color: #898f8c;\n  background: #eef0ee;\n}\n.delete-button {\n  border: 0;\n  padding: 7px;\n  color: #bd756a;\n  background: transparent;\n  font-size: 20px;\n}\n.field-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}\n.toggle-field {\n  display: flex;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 11px;\n  padding: 4px 0;\n}\n.toggle-field input {\n  width: 17px;\n  height: 17px;\n  accent-color: var(--coral);\n}\n.toggle-field small {\n  display: block;\n  margin-top: 3px;\n  color: var(--muted);\n  font-weight: 700;\n}\n.form-actions {\n  display: flex;\n  justify-content: end;\n  gap: 9px;\n  margin-top: 3px;\n  padding-top: 17px;\n  border-top: 1px solid var(--line);\n}\n.single-panel-wrap {\n  max-width: 790px;\n}\n.upload-drop {\n  position: relative;\n  display: grid;\n  justify-items: center;\n  gap: 6px;\n  padding: 48px 20px;\n  border: 1px dashed #b8cbc4;\n  color: var(--ink);\n  text-align: center;\n  background: #f7faf6;\n}\n.upload-drop small {\n  color: var(--muted);\n  font-size: 11px;\n}\n.upload-symbol {\n  display: grid;\n  place-items: center;\n  width: 42px;\n  height: 42px;\n  margin-bottom: 5px;\n  border-radius: 50%;\n  color: var(--forest);\n  background: var(--yellow);\n  font-size: 22px;\n}\n.upload-drop input {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n.empty-state {\n  display: grid;\n  gap: 5px;\n  padding: 32px 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n.empty-state strong {\n  color: var(--ink);\n  font-size: 14px;\n}\n.staff-layout {\n  display: grid;\n  grid-template-columns: minmax(360px, .9fr) minmax(360px, 1.1fr);\n  gap: 17px;\n}\n.form-help {\n  margin: -6px 0 4px;\n  color: var(--muted);\n  font-size: 12px;\n  line-height: 1.6;\n}\n.staff-list {\n  border-top: 1px solid var(--line);\n}\n.staff-search {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.staff-search input {\n  flex: 1;\n}\n.staff-search select {\n  flex: 0 0 145px;\n}\n.staff-search .outline-button {\n  flex: 0 0 auto;\n}\n.role-counts {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 15px;\n}\n.role-counts span {\n  padding: 6px 8px;\n  border-radius: 3px;\n  color: var(--muted);\n  background: #f1f4f0;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: capitalize;\n}\n.role-counts strong {\n  color: var(--forest);\n  font-size: 12px;\n}\n.staff-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  border-bottom: 1px solid var(--line);\n  padding: 13px 0;\n}\n.staff-identity {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 11px;\n}\n.staff-identity > span:last-child {\n  min-width: 0;\n}\n.staff-actions {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  gap: 12px;\n}\n.small-avatar {\n  width: 31px;\n  height: 31px;\n  font-size: 12px;\n}\n.staff-row strong,\n.staff-row small {\n  display: block;\n}\n.staff-row strong {\n  font-size: 13px;\n  font-weight: 900;\n}\n.staff-row small {\n  margin-top: 3px;\n  color: var(--muted);\n  font-size: 10px;\n  overflow-wrap: anywhere;\n}\n.staff-row .staff-role-id {\n  color: var(--forest);\n  font-weight: 900;\n  text-transform: capitalize;\n}\n.password-button {\n  grid-column: 2 / -1;\n  justify-self: start;\n  border: 0;\n  padding: 0;\n  color: var(--coral);\n  background: transparent;\n  font-size: 10px;\n  font-weight: 900;\n}\n.password-button:hover {\n  text-decoration: underline;\n}\n.account-button,\n.account-delete {\n  border: 0;\n  padding: 0;\n  background: transparent;\n  font-size: 10px;\n  font-weight: 900;\n}\n.account-button {\n  color: var(--forest);\n}\n.account-delete,\n.delete-button {\n  display: inline-grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border: 1px solid var(--line);\n  border-radius: 50%;\n  padding: 0;\n  color: #b44e43;\n  background: var(--white);\n  font-size: 15px;\n  line-height: 1;\n  cursor: pointer;\n}\n.account-delete:hover,\n.delete-button:hover {\n  color: #d33;\n  border-color: #d33;\n}\n.account-button:hover {\n  text-decoration: underline;\n}\n.protected-account {\n  color: var(--muted);\n  font-size: 10px;\n  font-weight: 900;\n}\n.inactive-label {\n  padding: 5px 7px;\n  border-radius: 3px;\n  color: #9a5d3e;\n  background: #fff0df;\n  font-size: 9px;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding-top: 17px;\n  color: var(--muted);\n  font-size: 11px;\n  font-weight: 800;\n}\n.pagination .outline-button {\n  padding: 8px 10px;\n}\n.profile-layout {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(300px, 1fr));\n  gap: 17px;\n  max-width: 900px;\n}\n.profile-form {\n  display: grid;\n  gap: 17px;\n}\n.attendance-mode {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 9px;\n}\n.attendance-mode button {\n  border: 1px solid var(--line);\n  padding: 14px;\n  color: var(--muted);\n  background: #f7f9f5;\n  font-size: 13px;\n  font-weight: 900;\n}\n.attendance-mode button.selected {\n  border-color: var(--forest);\n  color: var(--white);\n  background: var(--forest);\n}\n.punch-filters {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: end;\n  gap: 12px;\n  margin-bottom: 17px;\n}\n.punch-filters label {\n  flex: 1 1 180px;\n  min-width: 150px;\n}\n.punch-filters .form-actions {\n  flex: 0 0 auto;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n.punch-filters .punch-pending-filter {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 6px;\n  flex: 0 0 auto;\n}\n.attendance-sheet {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 280px;\n  gap: 17px;\n}\n.student-layout {\n  display: grid;\n  grid-template-columns: minmax(360px, .85fr) minmax(480px, 1.15fr);\n  gap: 17px;\n}\n.student-form {\n  display: grid;\n  gap: 17px;\n}\n.age-preview {\n  color: var(--coral);\n  font-size: 11px;\n  font-weight: 900;\n}\n.class-guidance {\n  margin: -7px 0 0;\n  padding: 10px 12px;\n  color: var(--forest);\n  background: #edf5eb;\n  font-size: 11px;\n  font-weight: 800;\n}\n.student-table-wrap {\n  overflow-x: auto;\n}\n.student-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 11px;\n}\n.student-table th {\n  padding: 9px 7px;\n  color: var(--muted);\n  border-bottom: 1px solid var(--line);\n  text-align: left;\n  text-transform: uppercase;\n  letter-spacing: .7px;\n  font-size: 9px;\n}\n.student-table td {\n  padding: 12px 7px;\n  border-bottom: 1px solid var(--line);\n  white-space: nowrap;\n}\n.student-table td strong,\n.student-table td small {\n  display: block;\n}\n.student-table td small {\n  margin-top: 3px;\n  color: var(--muted);\n  font-size: 9px;\n}\n.status-tag {\n  padding: 5px 7px;\n  border-radius: 3px;\n  color: #438678;\n  background: #e8f4ee;\n  font-size: 9px;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n.status-inactive {\n  color: #9a5d3e;\n  background: #fff0df;\n}\n.link-button {\n  border: 0;\n  padding: 0;\n  color: var(--forest);\n  background: transparent;\n  font-size: 13px;\n  font-weight: 900;\n  text-decoration: underline;\n  text-align: left;\n}\n.link-button:hover {\n  color: var(--coral);\n}\n.eye-button {\n  display: inline-grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border: 1px solid var(--line);\n  border-radius: 50%;\n  padding: 0;\n  color: var(--forest);\n  background: var(--white);\n  font-size: 15px;\n  line-height: 1;\n}\n.eye-button:hover {\n  color: var(--coral);\n  border-color: var(--coral);\n}\n.icon-button {\n  display: inline-grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border: 1px solid var(--line);\n  border-radius: 50%;\n  padding: 0;\n  color: var(--forest);\n  background: var(--white);\n  font-size: 16px;\n  line-height: 1;\n}\n.icon-button:hover {\n  color: var(--coral);\n  border-color: var(--coral);\n}\n.directory-heading-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.directory-panel {\n  min-width: 0;\n}\n.directory-table td {\n  white-space: normal;\n}\n.directory-table td strong,\n.directory-table td small {\n  display: block;\n}\n.profile-dialog {\n  width: min(1080px, calc(100vw - 40px));\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n}\n.student-row-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  white-space: normal;\n}\n.student-detail-dialog {\n  width: min(480px, 100%);\n}\n.student-detail-dialog h3 {\n  margin: 7px 0 15px;\n  font: 700 26px/1.1 "Baloo 2", cursive;\n}\n.student-detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px 16px;\n  margin: 0 0 17px;\n}\n.student-detail-grid dt {\n  color: var(--muted);\n  font-size: 9px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n}\n.student-detail-grid dd {\n  margin: 3px 0 0;\n  color: var(--ink);\n  font-size: 13px;\n  font-weight: 700;\n}\n.password-dialog-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 20;\n  display: grid;\n  place-items: center;\n  padding: 20px;\n  background: rgba(23, 60, 57, .62);\n}\n.password-dialog {\n  width: min(420px, 100%);\n  box-shadow: 0 20px 70px rgba(0, 0, 0, .22);\n}\n.password-dialog.profile-dialog {\n  width: min(1080px, calc(100vw - 40px));\n}\n.password-dialog.student-detail-dialog {\n  width: min(760px, calc(100vw - 40px));\n}\n.password-dialog h3 {\n  margin: 7px 0;\n  font: 700 28px/1 "Baloo 2", cursive;\n}\n.password-dialog p {\n  margin: 0 0 8px;\n  color: var(--muted);\n  font-size: 13px;\n}\n@media (max-width: 900px) {\n  .login-shell {\n    grid-template-columns: 1fr;\n  }\n  .login-panel {\n    min-height: 66vh;\n    padding: 12vw;\n  }\n  .login-aside {\n    min-height: 34vh;\n    padding: 10vw;\n  }\n  .login-aside h2 {\n    font-size: 48px;\n  }\n  .aside-note,\n  .orbit {\n    display: none;\n  }\n  .dashboard-shell {\n    grid-template-columns: 1fr;\n  }\n  .sidebar {\n    min-height: auto;\n    padding: 17px 22px;\n  }\n  .sidebar-rule,\n  .nav-label,\n  .sidebar-bottom {\n    display: none;\n  }\n  .sidebar nav {\n    display: flex;\n    overflow-x: auto;\n    margin-top: 19px;\n  }\n  .sidebar nav button {\n    min-width: max-content;\n    padding: 9px 12px;\n  }\n  .sidebar nav button > span:first-child {\n    display: none;\n  }\n  .dashboard-main {\n    padding: 30px 22px 50px;\n  }\n  .overview-grid,\n  .editor-layout {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .staff-layout {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .profile-layout {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 1100px) {\n  .student-layout {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .role-summary-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 580px) {\n  .dashboard-header,\n  .welcome-band,\n  .content-toolbar {\n    align-items: start;\n    flex-direction: column;\n  }\n  .dashboard-header h1 {\n    font-size: 34px;\n  }\n  .welcome-band {\n    padding: 25px;\n  }\n  .stat-grid {\n    grid-template-columns: 1fr;\n  }\n  .stat-card {\n    padding: 17px;\n  }\n  .field-grid {\n    grid-template-columns: 1fr;\n  }\n  .panel {\n    padding: 20px 17px;\n  }\n  .page-tabs {\n    gap: 4px;\n  }\n  .page-tabs button {\n    padding: 8px 9px;\n  }\n  .section-row {\n    grid-template-columns: 1fr auto;\n  }\n  .section-row .delete-button {\n    grid-column: 2;\n    grid-row: 1;\n  }\n  .publish-pill {\n    grid-column: 1;\n    width: max-content;\n    margin: -9px 0 8px 49px;\n  }\n  .form-actions {\n    justify-content: stretch;\n  }\n  .form-actions button {\n    flex: 1;\n  }\n  .staff-row {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 9px;\n  }\n  .staff-actions {\n    flex-wrap: wrap;\n    padding-left: 42px;\n  }\n  .role-pill {\n    grid-column: 2;\n    width: max-content;\n  }\n  .password-button,\n  .account-button,\n  .account-delete {\n    grid-column: 2;\n    justify-self: start;\n  }\n  .staff-search {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .staff-search select,\n  .staff-search .outline-button {\n    width: 100%;\n    flex-basis: auto;\n  }\n  .role-summary-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/pages/dashboard/dashboard.ts", lineNumber: 105 });
})();
export {
  Dashboard
};
