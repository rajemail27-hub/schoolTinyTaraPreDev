import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideClientHydration,
  provideRouter
} from "./chunk-DZ7GDGF3.js";
import {
  SiteContentService
} from "./chunk-QZLDSCZI.js";
import {
  provideHttpClient
} from "./chunk-6QXTDYKH.js";
import "./chunk-UVVJPUY3.js";
import {
  Component,
  inject,
  provideBrowserGlobalErrorListeners,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-45E64ND3.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "dashboard",
    title: "Admin Dashboard | Tiny Tara Preschool",
    loadComponent: () => import("./chunk-TOZLWKAV.js").then((m) => m.Dashboard)
  },
  {
    path: "",
    title: "Tiny Tara Preschool | Learn, Play & Shine",
    loadComponent: () => import("./chunk-TCRAHLY4.js").then((m) => m.Home)
  },
  {
    path: "parents",
    title: "For Parents | Tiny Tara Preschool",
    loadComponent: () => import("./chunk-OPAJ2R6H.js").then((m) => m.Parents)
  },
  {
    path: "about",
    title: "About Tiny Tara Preschool",
    loadComponent: () => import("./chunk-DG3IRRXY.js").then((m) => m.About)
  },
  {
    path: "contact",
    title: "Contact Tiny Tara Preschool",
    loadComponent: () => import("./chunk-I6LMGM6G.js").then((m) => m.Contact)
  },
  {
    path: "kids-gallery-activity",
    title: "Kids Activities Gallery | Tiny Tara Preschool",
    loadComponent: () => import("./chunk-NNWVY6YS.js").then((m) => m.KidsGalleryActivity)
  },
  {
    path: "**",
    redirectTo: ""
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient()
  ]
};

// src/app/components/navbar/navbar.ts
var _c0 = () => ({ exact: true });
var Navbar = class _Navbar {
  mobileMenuOpen = false;
  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  closeMenu() {
    this.mobileMenuOpen = false;
  }
  static \u0275fac = function Navbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Navbar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Navbar, selectors: [["app-navbar"]], decls: 22, vars: 5, consts: [[1, "site-header"], [1, "navbar"], ["routerLink", "/", 1, "logo", 3, "click"], ["src", "/tiny-tara-logo.svg", "alt", "Tiny Tara", 1, "logo-image"], ["type", "button", "aria-label", "Toggle navigation", 1, "menu-toggle", 3, "click"], [1, "nav-links"], ["routerLink", "/", "routerLinkActive", "active", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/kids-gallery-activity", "routerLinkActive", "active", 3, "click"], ["routerLink", "/parents", "routerLinkActive", "active", 3, "click"], ["routerLink", "/about", "routerLinkActive", "active", 3, "click"], ["routerLink", "/contact", "routerLinkActive", "active", 3, "click"]], template: function Navbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "nav", 1)(2, "a", 2);
      \u0275\u0275listener("click", function Navbar_Template_a_click_2_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function Navbar_Template_button_click_4_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ul", 5)(7, "li")(8, "a", 6);
      \u0275\u0275listener("click", function Navbar_Template_a_click_8_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(9, " Home ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li")(11, "a", 7);
      \u0275\u0275listener("click", function Navbar_Template_a_click_11_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(12, " Kids Activities ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 8);
      \u0275\u0275listener("click", function Navbar_Template_a_click_14_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(15, " For Parents ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "a", 9);
      \u0275\u0275listener("click", function Navbar_Template_a_click_17_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(18, " About Tiny Tara ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "li")(20, "a", 10);
      \u0275\u0275listener("click", function Navbar_Template_a_click_20_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(21, " Contact Us ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.mobileMenuOpen ? "\u2715" : "\u2630", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("show", ctx.mobileMenuOpen);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c0));
    }
  }, dependencies: [
    RouterLink,
    RouterLinkActive
  ], styles: ["\n.site-header[_ngcontent-%COMP%] {\n  background: #ffffff;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);\n}\n.navbar[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: auto;\n  padding: 15px 25px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #2f2f45;\n  text-decoration: none;\n}\n.logo-image[_ngcontent-%COMP%] {\n  display: block;\n  width: 150px;\n  height: auto;\n  object-fit: contain;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 30px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2f2f45;\n  font-weight: 700;\n  text-decoration: none;\n  transition: 0.3s;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #f66f92;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  border: 0;\n  background: transparent;\n  font-size: 28px;\n  cursor: pointer;\n}\n@media (max-width: 700px) {\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n    position: absolute;\n    top: 75px;\n    left: 0;\n    width: 100%;\n    background: #ffffff;\n    flex-direction: column;\n    padding: 25px;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);\n  }\n  .nav-links.show[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Navbar, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [
      RouterLink,
      RouterLinkActive
    ], template: `<header class="site-header">

  <nav class="navbar">

    <a
      routerLink="/"
      class="logo"
      (click)="closeMenu()"
    >
      <img
        src="/tiny-tara-logo.svg"
        alt="Tiny Tara"
        class="logo-image"
      >
    </a>


    <button
      class="menu-toggle"
      type="button"
      (click)="toggleMenu()"
      aria-label="Toggle navigation"
    >
      {{ mobileMenuOpen ? '\u2715' : '\u2630' }}
    </button>


    <ul
      class="nav-links"
      [class.show]="mobileMenuOpen"
    >

      <li>
        <a
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          (click)="closeMenu()"
        >
          Home
        </a>
      </li>

      <li>
        <a
          routerLink="/kids-gallery-activity"
          routerLinkActive="active"
          (click)="closeMenu()"
        >
          Kids Activities
        </a>
      </li>

      <li>
        <a
          routerLink="/parents"
          routerLinkActive="active"
          (click)="closeMenu()"
        >
          For Parents
        </a>
      </li>

      <li>
        <a
          routerLink="/about"
          routerLinkActive="active"
          (click)="closeMenu()"
        >
          About Tiny Tara
        </a>
      </li>

      <li>
        <a
          routerLink="/contact"
          routerLinkActive="active"
          (click)="closeMenu()"
        >
          Contact Us
        </a>
      </li>

    </ul>

  </nav>

</header>`, styles: ["/* src/app/components/navbar/navbar.css */\n.site-header {\n  background: #ffffff;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);\n}\n.navbar {\n  max-width: 1200px;\n  margin: auto;\n  padding: 15px 25px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  color: #2f2f45;\n  text-decoration: none;\n}\n.logo-image {\n  display: block;\n  width: 150px;\n  height: auto;\n  object-fit: contain;\n}\n.nav-links {\n  display: flex;\n  gap: 30px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.nav-links a {\n  color: #2f2f45;\n  font-weight: 700;\n  text-decoration: none;\n  transition: 0.3s;\n}\n.nav-links a:hover,\n.nav-links a.active {\n  color: #f66f92;\n}\n.menu-toggle {\n  display: none;\n  border: 0;\n  background: transparent;\n  font-size: 28px;\n  cursor: pointer;\n}\n@media (max-width: 700px) {\n  .menu-toggle {\n    display: block;\n  }\n  .nav-links {\n    display: none;\n    position: absolute;\n    top: 75px;\n    left: 0;\n    width: 100%;\n    background: #ffffff;\n    flex-direction: column;\n    padding: 25px;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);\n  }\n  .nav-links.show {\n    display: flex;\n  }\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Navbar, { className: "Navbar", filePath: "src/app/components/navbar/navbar.ts", lineNumber: 14 });
})();

// src/app/components/footer/footer.ts
var Footer = class _Footer {
  siteContent = inject(SiteContentService);
  ngOnInit() {
    void this.siteContent.load();
  }
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Footer, selectors: [["app-footer"]], decls: 53, vars: 7, consts: [[1, "footer-container"], [1, "footer-about"], [1, "footer-brand"], ["src", "/tiny-tara-logo.svg", "alt", "Tiny Tara"], [1, "footer-contact"], ["routerLink", "/"], ["routerLink", "/kids-gallery-activity"], ["routerLink", "/parents"], ["routerLink", "/about"], ["routerLink", "/contact"], [1, "contact-line"], [1, "contact-icon"], [3, "href"], [1, "school-hours"], [1, "footer-bottom"]], template: function Footer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer")(1, "div", 0)(2, "div", 1)(3, "div", 2);
      \u0275\u0275element(4, "img", 3);
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "Preschool");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, " A happy place where little minds learn, little hearts grow and little stars shine. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "h3");
      \u0275\u0275text(11, "Quick Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "ul")(13, "li")(14, "a", 5);
      \u0275\u0275text(15, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "a", 6);
      \u0275\u0275text(18, "Kids Activities");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "li")(20, "a", 7);
      \u0275\u0275text(21, "For Parents");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 8);
      \u0275\u0275text(24, "About Tiny Tara");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "li")(26, "a", 9);
      \u0275\u0275text(27, "Contact Us");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div")(29, "h3");
      \u0275\u0275text(30, "Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p", 10)(32, "span", 11);
      \u0275\u0275text(33, "\u{1F4CD}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "p", 10)(37, "span", 11);
      \u0275\u0275text(38, "\u{1F4DE}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "a", 12);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "p", 10)(42, "span", 11);
      \u0275\u0275text(43, "\u2709\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "a", 12);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "p", 13)(47, "span");
      \u0275\u0275text(48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "span");
      \u0275\u0275text(50);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 14);
      \u0275\u0275text(52, " \xA9 2026 Tiny Tara Preschool. All Rights Reserved. ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(35);
      \u0275\u0275textInterpolate(ctx.siteContent.value().address);
      \u0275\u0275advance(4);
      \u0275\u0275property("href", "tel:" + ctx.siteContent.value().phone, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.siteContent.value().phone);
      \u0275\u0275advance(4);
      \u0275\u0275property("href", "mailto:" + ctx.siteContent.value().email, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.siteContent.value().email);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("\u{1F552} ", ctx.siteContent.value().school_days);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.siteContent.value().school_hours);
    }
  }, dependencies: [RouterLink], styles: ['\nfooter[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ef5a9b,\n      #ff9a5d,\n      #f6cf57,\n      #68c77c,\n      #55b7ed,\n      #8b70dc) top / 100% 5px no-repeat,\n    #ffffff;\n  color: #2f2f45;\n}\n.footer-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: auto;\n  padding: 60px 8%;\n  display: grid;\n  grid-template-columns: 2fr 0.9fr 1.15fr;\n  gap: 40px;\n}\nfooter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \nfooter[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Baloo 2", cursive;\n}\nfooter[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #4b3b86;\n}\n.footer-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.footer-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 145px;\n  height: auto;\n}\n.footer-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6d14b7;\n  font-family: "Baloo 2", cursive;\n  font-size: 1.25rem;\n  font-weight: 700;\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px 22px;\n}\nfooter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2f2f45;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.footer-contact[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.footer-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n}\n.contact-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 7px;\n}\n.contact-line[_ngcontent-%COMP%]    > .contact-icon[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  line-height: 1.6;\n}\n.contact-line[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child, \n.contact-line[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n.school-hours[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 8px;\n}\n.school-hours[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #f66f92;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  border-top: 1px solid #e6e8f2;\n}\n@media (max-width: 700px) {\n  .footer-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [RouterLink], template: `<footer>

  <div class="footer-container">

    <div class="footer-about">

      <div class="footer-brand">
        <img
          src="/tiny-tara-logo.svg"
          alt="Tiny Tara"
        >
        <span>Preschool</span>
      </div>

      <p>
        A happy place where little minds learn,
        little hearts grow and little stars shine.
      </p>

    </div>


    <div class="footer-contact">

      <h3>Quick Links</h3>

      <ul>

        <li>
          <a routerLink="/">Home</a>
        </li>

        <li>
          <a routerLink="/kids-gallery-activity">Kids Activities</a>
        </li>

        <li>
          <a routerLink="/parents">For Parents</a>
        </li>

        <li>
          <a routerLink="/about">About Tiny Tara</a>
        </li>

        <li>
          <a routerLink="/contact">Contact Us</a>
        </li>

      </ul>

    </div>


    <div>

      <h3>Contact</h3>

      <p class="contact-line"><span class="contact-icon">\u{1F4CD}</span><span>{{ siteContent.value().address }}</span></p>

      <p class="contact-line"><span class="contact-icon">\u{1F4DE}</span><a [href]="'tel:' + siteContent.value().phone">{{ siteContent.value().phone }}</a></p>

      <p class="contact-line"><span class="contact-icon">\u2709\uFE0F</span><a [href]="'mailto:' + siteContent.value().email">{{ siteContent.value().email }}</a></p>

      <p class="school-hours">
        <span>\u{1F552} {{ siteContent.value().school_days }}</span>
        <span>{{ siteContent.value().school_hours }}</span>
      </p>

    </div>

  </div>


  <div class="footer-bottom">

    \xA9 2026 Tiny Tara Preschool.
    All Rights Reserved.

  </div>

</footer>`, styles: ['/* src/app/components/footer/footer.css */\nfooter {\n  background:\n    linear-gradient(\n      90deg,\n      #ef5a9b,\n      #ff9a5d,\n      #f6cf57,\n      #68c77c,\n      #55b7ed,\n      #8b70dc) top / 100% 5px no-repeat,\n    #ffffff;\n  color: #2f2f45;\n}\n.footer-container {\n  max-width: 1200px;\n  margin: auto;\n  padding: 60px 8%;\n  display: grid;\n  grid-template-columns: 2fr 0.9fr 1.15fr;\n  gap: 40px;\n}\nfooter h2,\nfooter h3 {\n  font-family: "Baloo 2", cursive;\n}\nfooter h3 {\n  color: #4b3b86;\n}\n.footer-brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.footer-brand img {\n  display: block;\n  width: 145px;\n  height: auto;\n}\n.footer-brand span {\n  color: #6d14b7;\n  font-family: "Baloo 2", cursive;\n  font-size: 1.25rem;\n  font-weight: 700;\n}\nfooter ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px 22px;\n}\nfooter li {\n  margin: 0;\n}\nfooter a {\n  color: #2f2f45;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.footer-contact {\n  min-width: 0;\n}\n.footer-contact p {\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n}\n.contact-line {\n  display: flex;\n  align-items: flex-start;\n  gap: 7px;\n}\n.contact-line > .contact-icon {\n  flex: 0 0 auto;\n  line-height: 1.6;\n}\n.contact-line > span:last-child,\n.contact-line > a {\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n.school-hours {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 8px;\n}\n.school-hours span {\n  white-space: nowrap;\n}\nfooter a:hover {\n  color: #f66f92;\n}\n.footer-bottom {\n  text-align: center;\n  padding: 20px;\n  border-top: 1px solid #e6e8f2;\n}\n@media (max-width: 700px) {\n  .footer-container {\n    grid-template-columns: 1fr;\n  }\n  footer ul {\n    flex-direction: column;\n    gap: 10px;\n  }\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Footer, { className: "Footer", filePath: "src/app/components/footer/footer.ts", lineNumber: 13 });
})();

// src/app/app.ts
function App_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
function App_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "main");
    \u0275\u0275element(2, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-footer");
  }
}
var App = class _App {
  constructor(router) {
    this.router = router;
  }
  router;
  isDashboard() {
    return this.router.url.startsWith("/dashboard");
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 2, vars: 1, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, App_Conditional_0_Template, 1, 0, "router-outlet")(1, App_Conditional_1_Template, 4, 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isDashboard() ? 0 : 1);
    }
  }, dependencies: [
    RouterOutlet,
    Navbar,
    Footer
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [
      RouterOutlet,
      Navbar,
      Footer
    ], template: "@if (isDashboard()) {\n  <router-outlet></router-outlet>\n} @else {\n  <app-navbar></app-navbar>\n\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n\n  <app-footer></app-footer>\n}" }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 17 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
