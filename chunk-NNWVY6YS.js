import {
  CommonModule,
  NgClass,
  NgForOf
} from "./chunk-UVVJPUY3.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-45E64ND3.js";

// src/app/pages/kids-gallery-activity/kids-gallery-activity.ts
function KidsGalleryActivity_article_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 10)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", item_r1.accent);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.emoji);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.description);
  }
}
var KidsGalleryActivity = class _KidsGalleryActivity {
  activities = [
    {
      title: "Rainbow Painting",
      emoji: "\u{1F3A8}",
      description: "Children explore colour, brush strokes and creativity through joyful painting.",
      accent: "pink"
    },
    {
      title: "Story Circle",
      emoji: "\u{1F4DA}",
      description: "Listening, imagination and language skills grow through shared story time.",
      accent: "yellow"
    },
    {
      title: "Music & Movement",
      emoji: "\u{1F3B5}",
      description: "Rhythm, dancing and movement help children build confidence and coordination.",
      accent: "blue"
    },
    {
      title: "Sensory Play",
      emoji: "\u{1F9E9}",
      description: "Hands-on activities encourage discovery, experimentation and problem solving.",
      accent: "green"
    },
    {
      title: "Nature Walk",
      emoji: "\u{1F33F}",
      description: "Outdoor exploration sparks curiosity and helps children connect with nature.",
      accent: "purple"
    },
    {
      title: "Build & Create",
      emoji: "\u{1F9F1}",
      description: "Blocks, shapes and building games support thinking, planning and creativity.",
      accent: "orange"
    }
  ];
  static \u0275fac = function KidsGalleryActivity_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KidsGalleryActivity)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KidsGalleryActivity, selectors: [["app-kids-gallery-activity"]], decls: 38, vars: 1, consts: [[1, "page-banner"], [1, "banner-content"], [1, "banner-icon"], [1, "gallery-section"], [1, "section-heading"], [1, "activity-grid"], ["class", "activity-card", 4, "ngFor", "ngForOf"], [1, "moments-section"], [1, "moment-box"], [1, "moment-icon"], [1, "activity-card"], [1, "activity-emoji", 3, "ngClass"]], template: function KidsGalleryActivity_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "\u{1F308}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Kids Activities Gallery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Little hands, big imaginations, and joyful learning every day.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "section", 3)(9, "div", 4)(10, "span");
      \u0275\u0275text(11, "OUR CREATIVE MOMENTS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "h2");
      \u0275\u0275text(13, "Fun activities that make children glow with joy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 5);
      \u0275\u0275template(15, KidsGalleryActivity_article_15_Template, 7, 4, "article", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "section", 7)(17, "div", 8)(18, "div", 9);
      \u0275\u0275text(19, "\u2728");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "h3");
      \u0275\u0275text(21, "Curiosity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23, "Children ask questions, explore ideas and discover the world with wonder.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 8)(25, "div", 9);
      \u0275\u0275text(26, "\u{1F4AB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "h3");
      \u0275\u0275text(28, "Confidence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p");
      \u0275\u0275text(30, "Each activity helps little learners feel brave, capable and proud of their effort.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 8)(32, "div", 9);
      \u0275\u0275text(33, "\u{1F31F}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "h3");
      \u0275\u0275text(35, "Joy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p");
      \u0275\u0275text(37, "Playful experiences keep learning happy, meaningful and full of laughter.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275property("ngForOf", ctx.activities);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  color: #1f2940;\n  background:\n    linear-gradient(\n      180deg,\n      #fffaf8 0%,\n      #fff 100%);\n}\n.page-banner[_ngcontent-%COMP%] {\n  padding: 6rem 1.5rem 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      #fff2b3,\n      #ffd3e8 40%,\n      #d8f5ff 100%);\n}\n.banner-content[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  text-align: center;\n}\n.banner-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n.page-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2.2rem, 4vw, 4rem);\n  color: #2e2a72;\n}\n.page-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  max-width: 700px;\n  margin: 0.9rem auto 0;\n  color: #4c5075;\n}\n.gallery-section[_ngcontent-%COMP%], \n.moments-section[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 4rem 1.5rem;\n}\n.section-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2.5rem;\n}\n.section-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #ff7aa2;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.18rem;\n  margin-bottom: 0.8rem;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2rem, 3vw, 3rem);\n  color: #1d2947;\n}\n.activity-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1.5rem;\n}\n.activity-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #f2d9e6;\n  border-radius: 24px;\n  padding: 1.5rem;\n  text-align: center;\n  box-shadow: 0 10px 30px rgba(97, 73, 140, 0.08);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n.activity-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 18px 38px rgba(97, 73, 140, 0.12);\n}\n.activity-emoji[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  margin: 0 auto 1rem;\n  display: grid;\n  place-items: center;\n  font-size: 2.3rem;\n  border-radius: 20px;\n}\n.activity-emoji.pink[_ngcontent-%COMP%] {\n  background: #ffe3ef;\n}\n.activity-emoji.yellow[_ngcontent-%COMP%] {\n  background: #fff1b0;\n}\n.activity-emoji.blue[_ngcontent-%COMP%] {\n  background: #dff3ff;\n}\n.activity-emoji.green[_ngcontent-%COMP%] {\n  background: #dffae5;\n}\n.activity-emoji.purple[_ngcontent-%COMP%] {\n  background: #efe4ff;\n}\n.activity-emoji.orange[_ngcontent-%COMP%] {\n  background: #ffe7d1;\n}\n.activity-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.8rem;\n  color: #2a3057;\n  font-size: 1.3rem;\n}\n.activity-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #58617d;\n  line-height: 1.7;\n}\n.moments-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1.5rem;\n  padding-top: 0;\n}\n.moment-box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fff7fc 0%,\n      #f3f8ff 100%);\n  border-radius: 22px;\n  padding: 1.5rem;\n  text-align: center;\n  border: 1px solid #ecedf9;\n}\n.moment-icon[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  margin-bottom: 0.8rem;\n}\n.moment-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  color: #2b2d4d;\n}\n.moment-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #5a607b;\n  line-height: 1.7;\n}\n@media (max-width: 600px) {\n  .page-banner[_ngcontent-%COMP%] {\n    padding-top: 5rem;\n  }\n  .gallery-section[_ngcontent-%COMP%], \n   .moments-section[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KidsGalleryActivity, [{
    type: Component,
    args: [{ selector: "app-kids-gallery-activity", standalone: true, imports: [CommonModule], template: '<section class="page-banner">\n  <div class="banner-content">\n    <div class="banner-icon">\u{1F308}</div>\n    <h1>Kids Activities Gallery</h1>\n    <p>Little hands, big imaginations, and joyful learning every day.</p>\n  </div>\n</section>\n\n<section class="gallery-section">\n  <div class="section-heading">\n    <span>OUR CREATIVE MOMENTS</span>\n    <h2>Fun activities that make children glow with joy</h2>\n  </div>\n\n  <div class="activity-grid">\n    <article class="activity-card" *ngFor="let item of activities">\n      <div class="activity-emoji" [ngClass]="item.accent">{{ item.emoji }}</div>\n      <h3>{{ item.title }}</h3>\n      <p>{{ item.description }}</p>\n    </article>\n  </div>\n</section>\n\n<section class="moments-section">\n  <div class="moment-box">\n    <div class="moment-icon">\u2728</div>\n    <h3>Curiosity</h3>\n    <p>Children ask questions, explore ideas and discover the world with wonder.</p>\n  </div>\n\n  <div class="moment-box">\n    <div class="moment-icon">\u{1F4AB}</div>\n    <h3>Confidence</h3>\n    <p>Each activity helps little learners feel brave, capable and proud of their effort.</p>\n  </div>\n\n  <div class="moment-box">\n    <div class="moment-icon">\u{1F31F}</div>\n    <h3>Joy</h3>\n    <p>Playful experiences keep learning happy, meaningful and full of laughter.</p>\n  </div>\n</section>\n', styles: ["/* src/app/pages/kids-gallery-activity/kids-gallery-activity.css */\n:host {\n  display: block;\n  color: #1f2940;\n  background:\n    linear-gradient(\n      180deg,\n      #fffaf8 0%,\n      #fff 100%);\n}\n.page-banner {\n  padding: 6rem 1.5rem 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      #fff2b3,\n      #ffd3e8 40%,\n      #d8f5ff 100%);\n}\n.banner-content {\n  max-width: 1100px;\n  margin: 0 auto;\n  text-align: center;\n}\n.banner-icon {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n.page-banner h1 {\n  margin: 0;\n  font-size: clamp(2.2rem, 4vw, 4rem);\n  color: #2e2a72;\n}\n.page-banner p {\n  font-size: 1.1rem;\n  max-width: 700px;\n  margin: 0.9rem auto 0;\n  color: #4c5075;\n}\n.gallery-section,\n.moments-section {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 4rem 1.5rem;\n}\n.section-heading {\n  text-align: center;\n  margin-bottom: 2.5rem;\n}\n.section-heading span {\n  display: inline-block;\n  color: #ff7aa2;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.18rem;\n  margin-bottom: 0.8rem;\n}\n.section-heading h2 {\n  margin: 0;\n  font-size: clamp(2rem, 3vw, 3rem);\n  color: #1d2947;\n}\n.activity-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1.5rem;\n}\n.activity-card {\n  background: #fff;\n  border: 1px solid #f2d9e6;\n  border-radius: 24px;\n  padding: 1.5rem;\n  text-align: center;\n  box-shadow: 0 10px 30px rgba(97, 73, 140, 0.08);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n.activity-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 18px 38px rgba(97, 73, 140, 0.12);\n}\n.activity-emoji {\n  width: 72px;\n  height: 72px;\n  margin: 0 auto 1rem;\n  display: grid;\n  place-items: center;\n  font-size: 2.3rem;\n  border-radius: 20px;\n}\n.activity-emoji.pink {\n  background: #ffe3ef;\n}\n.activity-emoji.yellow {\n  background: #fff1b0;\n}\n.activity-emoji.blue {\n  background: #dff3ff;\n}\n.activity-emoji.green {\n  background: #dffae5;\n}\n.activity-emoji.purple {\n  background: #efe4ff;\n}\n.activity-emoji.orange {\n  background: #ffe7d1;\n}\n.activity-card h3 {\n  margin: 0 0 0.8rem;\n  color: #2a3057;\n  font-size: 1.3rem;\n}\n.activity-card p {\n  margin: 0;\n  color: #58617d;\n  line-height: 1.7;\n}\n.moments-section {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1.5rem;\n  padding-top: 0;\n}\n.moment-box {\n  background:\n    linear-gradient(\n      180deg,\n      #fff7fc 0%,\n      #f3f8ff 100%);\n  border-radius: 22px;\n  padding: 1.5rem;\n  text-align: center;\n  border: 1px solid #ecedf9;\n}\n.moment-icon {\n  font-size: 2.2rem;\n  margin-bottom: 0.8rem;\n}\n.moment-box h3 {\n  margin: 0 0 0.75rem;\n  color: #2b2d4d;\n}\n.moment-box p {\n  margin: 0;\n  color: #5a607b;\n  line-height: 1.7;\n}\n@media (max-width: 600px) {\n  .page-banner {\n    padding-top: 5rem;\n  }\n  .gallery-section,\n  .moments-section {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KidsGalleryActivity, { className: "KidsGalleryActivity", filePath: "src/app/pages/kids-gallery-activity/kids-gallery-activity.ts", lineNumber: 11 });
})();
export {
  KidsGalleryActivity
};
