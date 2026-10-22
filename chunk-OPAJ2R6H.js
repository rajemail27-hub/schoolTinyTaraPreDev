import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-45E64ND3.js";

// src/app/pages/parents/parents.ts
function Parents_Conditional_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 23)(1, "p");
    \u0275\u0275text(2, " Tiny Tara Preschool offers programs designed for children according to their age and developmental needs, including Play Group for ages 2 \u2013 3, Nursery for ages 3 \u2013 4, LKG for ages 4 \u2013 5 and UKG for ages 5 \u2013 6. ");
    \u0275\u0275domElementEnd()();
  }
}
function Parents_Conditional_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 23)(1, "p");
    \u0275\u0275text(2, " You can contact Tiny Tara Preschool directly or submit an enquiry through our Contact Us page. ");
    \u0275\u0275domElementEnd()();
  }
}
function Parents_Conditional_160_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 23)(1, "p");
    \u0275\u0275text(2, " Parents receive regular communication about school activities and their child's learning journey. ");
    \u0275\u0275domElementEnd()();
  }
}
function Parents_Conditional_167_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 23)(1, "p");
    \u0275\u0275text(2, " Yes. Parents can contact us to arrange a visit and learn more about Tiny Tara Preschool. ");
    \u0275\u0275domElementEnd()();
  }
}
var Parents = class _Parents {
  activeFaq = null;
  toggleFaq(index) {
    this.activeFaq = this.activeFaq === index ? null : index;
  }
  static \u0275fac = function Parents_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Parents)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Parents, selectors: [["app-parents"]], decls: 176, vars: 16, consts: [[1, "page-banner"], [1, "banner-content"], [1, "banner-icon"], [1, "section"], [1, "section-heading"], [1, "parent-grid"], [1, "info-card"], [1, "feature-icon"], [1, "routine-section"], [1, "routine"], [1, "routine-item"], [1, "routine-number"], [1, "routine-icon"], [1, "partnership-section"], [1, "partnership-visual"], [1, "visual-card"], [1, "family-icons"], [1, "partnership-content"], [1, "faq-section"], [1, "faq-container"], [1, "faq-item"], ["type", "button", 1, "faq-question", 3, "click"], [1, "faq-symbol"], [1, "faq-answer"], [1, "parent-cta"], ["href", "/contact", 1, "cta-button"]], template: function Parents_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h1");
      \u0275\u0275text(5, "For Parents");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p");
      \u0275\u0275text(7, " Together, we help your child learn, grow and shine. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(8, "section", 3)(9, "div", 4)(10, "span");
      \u0275\u0275text(11, "FOR PARENTS");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "h2");
      \u0275\u0275text(13, " Partners in Your ");
      \u0275\u0275domElementStart(14, "span");
      \u0275\u0275text(15, "Child's Journey");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(16, "p");
      \u0275\u0275text(17, " At Tiny Tara Preschool, we believe that parents and teachers work together to create the best learning experience for every child. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(18, "div", 5)(19, "div", 6)(20, "div", 7);
      \u0275\u0275text(21, " \u{1F393} ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "h3");
      \u0275\u0275text(23, "Our Learning Approach");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "p");
      \u0275\u0275text(25, " We use a play-based learning approach that encourages curiosity, creativity and independent thinking. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(26, "div", 6)(27, "div", 7);
      \u0275\u0275text(28, " \u{1F552} ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "h3");
      \u0275\u0275text(30, "Daily Routine");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "p");
      \u0275\u0275text(32, " A balanced day including learning, play, storytelling, music, activities and rest. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(33, "div", 6)(34, "div", 7);
      \u0275\u0275text(35, " \u{1F34E} ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "h3");
      \u0275\u0275text(37, "Health & Wellbeing");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(38, "p");
      \u0275\u0275text(39, " We encourage healthy habits, cleanliness and a safe environment for every child. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(40, "div", 6)(41, "div", 7);
      \u0275\u0275text(42, " \u{1F4AC} ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(43, "h3");
      \u0275\u0275text(44, "Parent Communication");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "p");
      \u0275\u0275text(46, " Regular communication keeps parents connected with their child's progress and activities. ");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(47, "section", 8)(48, "div", 4)(49, "span");
      \u0275\u0275text(50, "A DAY AT TINY TARA");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "h2");
      \u0275\u0275text(52, " Learn \u2022 Play \u2022 Explore \u2022 ");
      \u0275\u0275domElementStart(53, "span");
      \u0275\u0275text(54, "Grow");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(55, "p");
      \u0275\u0275text(56, " Every day is designed to give children a balance of learning, creativity, movement and fun. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(57, "div", 9)(58, "div", 10)(59, "span", 11);
      \u0275\u0275text(60, " 01 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(61, "div", 12);
      \u0275\u0275text(62, " \u{1F44B} ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(63, "h3");
      \u0275\u0275text(64, "Welcome Time");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(65, "p");
      \u0275\u0275text(66, " Warm greetings and free play with friends. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(67, "div", 10)(68, "span", 11);
      \u0275\u0275text(69, " 02 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(70, "div", 12);
      \u0275\u0275text(71, " \u{1F4DA} ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(72, "h3");
      \u0275\u0275text(73, "Learning Time");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(74, "p");
      \u0275\u0275text(75, " Fun activities and guided learning. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(76, "div", 10)(77, "span", 11);
      \u0275\u0275text(78, " 03 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(79, "div", 12);
      \u0275\u0275text(80, " \u{1F3A8} ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(81, "h3");
      \u0275\u0275text(82, "Creative Play");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(83, "p");
      \u0275\u0275text(84, " Art, music, stories and imagination. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(85, "div", 10)(86, "span", 11);
      \u0275\u0275text(87, " 04 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(88, "div", 12);
      \u0275\u0275text(89, " \u26BD ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(90, "h3");
      \u0275\u0275text(91, "Outdoor Fun");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(92, "p");
      \u0275\u0275text(93, " Movement, games and exploration. ");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(94, "section", 13)(95, "div", 14)(96, "div", 15)(97, "div", 16);
      \u0275\u0275text(98, " \u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466} ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(99, "h3");
      \u0275\u0275text(100, "Growing Together");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(101, "p");
      \u0275\u0275text(102, " Parents + Teachers + Children ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(103, "div", 17)(104, "span");
      \u0275\u0275text(105, "WORKING TOGETHER");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(106, "h2");
      \u0275\u0275text(107, " Parents Are An Important Part Of Our ");
      \u0275\u0275domElementStart(108, "span");
      \u0275\u0275text(109, "Family");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(110, "p");
      \u0275\u0275text(111, " A child's learning journey becomes stronger when parents and teachers work together. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(112, "p");
      \u0275\u0275text(113, " We value open communication and encourage parents to stay connected with their child's experiences, progress and achievements. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(114, "ul")(115, "li")(116, "span");
      \u0275\u0275text(117, "\u2713");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(118, " Regular updates and communication ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(119, "li")(120, "span");
      \u0275\u0275text(121, "\u2713");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(122, " Parent-teacher interaction ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(123, "li")(124, "span");
      \u0275\u0275text(125, "\u2713");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(126, " Updates about school activities ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(127, "li")(128, "span");
      \u0275\u0275text(129, "\u2713");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(130, " Support for your child's development ");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(131, "section", 18)(132, "div", 4)(133, "span");
      \u0275\u0275text(134, "FAQ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(135, "h2");
      \u0275\u0275text(136, " Frequently Asked ");
      \u0275\u0275domElementStart(137, "span");
      \u0275\u0275text(138, "Questions");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(139, "div", 19)(140, "div", 20)(141, "button", 21);
      \u0275\u0275domListener("click", function Parents_Template_button_click_141_listener() {
        return ctx.toggleFaq(0);
      });
      \u0275\u0275domElementStart(142, "span");
      \u0275\u0275text(143, " What age groups do you accept? ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(144, "span", 22);
      \u0275\u0275text(145);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(146, Parents_Conditional_146_Template, 3, 0, "div", 23);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(147, "div", 20)(148, "button", 21);
      \u0275\u0275domListener("click", function Parents_Template_button_click_148_listener() {
        return ctx.toggleFaq(1);
      });
      \u0275\u0275domElementStart(149, "span");
      \u0275\u0275text(150, " How can I apply for admission? ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(151, "span", 22);
      \u0275\u0275text(152);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(153, Parents_Conditional_153_Template, 3, 0, "div", 23);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(154, "div", 20)(155, "button", 21);
      \u0275\u0275domListener("click", function Parents_Template_button_click_155_listener() {
        return ctx.toggleFaq(2);
      });
      \u0275\u0275domElementStart(156, "span");
      \u0275\u0275text(157, " How do parents receive updates? ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(158, "span", 22);
      \u0275\u0275text(159);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(160, Parents_Conditional_160_Template, 3, 0, "div", 23);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(161, "div", 20)(162, "button", 21);
      \u0275\u0275domListener("click", function Parents_Template_button_click_162_listener() {
        return ctx.toggleFaq(3);
      });
      \u0275\u0275domElementStart(163, "span");
      \u0275\u0275text(164, " Can parents visit the preschool? ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(165, "span", 22);
      \u0275\u0275text(166);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(167, Parents_Conditional_167_Template, 3, 0, "div", 23);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(168, "section", 24)(169, "div")(170, "h2");
      \u0275\u0275text(171, " Ready To Begin Your Child's Journey? \u{1F31F} ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(172, "p");
      \u0275\u0275text(173, " We'd love to welcome you and your little one to the Tiny Tara family. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(174, "a", 25);
      \u0275\u0275text(175, " Contact Us Today ");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(140);
      \u0275\u0275classProp("active", ctx.activeFaq === 0);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.activeFaq === 0 ? "\u2212" : "+", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeFaq === 0 ? 146 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeFaq === 1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.activeFaq === 1 ? "\u2212" : "+", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeFaq === 1 ? 153 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeFaq === 2);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.activeFaq === 2 ? "\u2212" : "+", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeFaq === 2 ? 160 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeFaq === 3);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.activeFaq === 3 ? "\u2212" : "+", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeFaq === 3 ? 167 : -1);
    }
  }, styles: ['\n.page-banner[_ngcontent-%COMP%] {\n  padding: 100px 20px;\n  text-align: center;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #f66f92,\n      #6c63ff);\n}\n.banner-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 55px;\n  margin-bottom: 10px;\n}\n.page-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 55px;\n  font-family: "Baloo 2", cursive;\n}\n.page-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 19px;\n}\n.section[_ngcontent-%COMP%] {\n  padding: 90px 8%;\n}\n.section-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 750px;\n  margin: 0 auto 60px;\n}\n.section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #f66f92;\n  font-weight: 800;\n  letter-spacing: 2px;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Baloo 2", cursive;\n  font-size: 45px;\n  margin: 15px 0;\n  line-height: 1.2;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6c63ff;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.7;\n}\n.parent-grid[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 30px;\n}\n.info-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 40px 30px;\n  border-radius: 25px;\n  text-align: center;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);\n  transition: 0.3s;\n}\n.info-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  margin-bottom: 15px;\n}\n.info-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Baloo 2", cursive;\n  font-size: 25px;\n  margin-bottom: 12px;\n}\n.info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.7;\n}\n.routine-section[_ngcontent-%COMP%] {\n  padding: 90px 8%;\n  background: #eef8ff;\n}\n.routine[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 25px;\n}\n.routine-item[_ngcontent-%COMP%] {\n  background: white;\n  padding: 35px 25px;\n  border-radius: 25px;\n  text-align: center;\n  position: relative;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);\n  transition: 0.3s;\n}\n.routine-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n}\n.routine-number[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 18px;\n  color: #f66f92;\n  font-weight: 800;\n  font-size: 14px;\n}\n.routine-icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  margin-bottom: 15px;\n}\n.routine-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Baloo 2", cursive;\n  font-size: 23px;\n  margin-bottom: 8px;\n}\n.routine-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n}\n.partnership-section[_ngcontent-%COMP%] {\n  padding: 100px 8%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 80px;\n}\n.partnership-visual[_ngcontent-%COMP%] {\n  min-height: 420px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #ffe4ed,\n      #e5e1ff);\n  border-radius: 40px;\n}\n.visual-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 55px 40px;\n  border-radius: 35px;\n  text-align: center;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);\n  transform: rotate(-2deg);\n}\n.family-icons[_ngcontent-%COMP%] {\n  font-size: 80px;\n  margin-bottom: 20px;\n}\n.visual-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Baloo 2", cursive;\n  font-size: 30px;\n  color: #f66f92;\n}\n.visual-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #777;\n}\n.partnership-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #f66f92;\n  font-weight: 800;\n  letter-spacing: 2px;\n}\n.partnership-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Baloo 2", cursive;\n  font-size: 45px;\n  margin: 15px 0;\n}\n.partnership-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6c63ff;\n}\n.partnership-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.8;\n  margin-bottom: 15px;\n}\n.partnership-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin-top: 25px;\n}\n.partnership-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-weight: 700;\n}\n.partnership-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: #f66f92;\n  color: white;\n}\n.faq-section[_ngcontent-%COMP%] {\n  padding: 90px 8%;\n  background: #fff7f9;\n}\n.faq-container[_ngcontent-%COMP%] {\n  max-width: 850px;\n  margin: auto;\n}\n.faq-item[_ngcontent-%COMP%] {\n  background: white;\n  margin-bottom: 18px;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  transition: 0.3s;\n}\n.faq-question[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 22px 25px;\n  border: none;\n  background: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 17px;\n  font-weight: 800;\n  color: #2f2f45;\n  cursor: pointer;\n  text-align: left;\n}\n.faq-symbol[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #f66f92;\n}\n.faq-answer[_ngcontent-%COMP%] {\n  padding: 0 25px 25px;\n  color: #666;\n  line-height: 1.7;\n}\n.parent-cta[_ngcontent-%COMP%] {\n  padding: 90px 20px;\n  text-align: center;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #f66f92,\n      #6c63ff);\n}\n.parent-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Baloo 2", cursive;\n  font-size: 45px;\n  margin-bottom: 15px;\n}\n.parent-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 30px;\n}\n.cta-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 15px 30px;\n  background: white;\n  color: #f66f92;\n  border-radius: 30px;\n  font-weight: 800;\n  text-decoration: none;\n  transition: 0.3s;\n}\n.cta-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n@media (max-width: 900px) {\n  .routine[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .partnership-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 700px) {\n  .page-banner[_ngcontent-%COMP%] {\n    padding: 70px 20px;\n  }\n  .page-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .section[_ngcontent-%COMP%] {\n    padding: 70px 20px;\n  }\n  .routine-section[_ngcontent-%COMP%], \n   .faq-section[_ngcontent-%COMP%] {\n    padding: 70px 20px;\n  }\n  .parent-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .routine[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .partnership-section[_ngcontent-%COMP%] {\n    padding: 70px 20px;\n  }\n  .partnership-visual[_ngcontent-%COMP%] {\n    min-height: 320px;\n  }\n  .visual-card[_ngcontent-%COMP%] {\n    padding: 40px 25px;\n  }\n  .family-icons[_ngcontent-%COMP%] {\n    font-size: 60px;\n  }\n  .section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .partnership-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .parent-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Parents, [{
    type: Component,
    args: [{ selector: "app-parents", standalone: true, template: `<!-- PAGE BANNER -->
<section class="page-banner">

  <div class="banner-content">

    <span class="banner-icon">\u{1F468}\u200D\u{1F469}\u200D\u{1F467}</span>

    <h1>For Parents</h1>

    <p>
      Together, we help your child learn, grow and shine.
    </p>

  </div>

</section>


<!-- INTRODUCTION -->
<section class="section">

  <div class="section-heading">

    <span>FOR PARENTS</span>

    <h2>
      Partners in Your
      <span>Child's Journey</span>
    </h2>

    <p>
      At Tiny Tara Preschool, we believe that parents and
      teachers work together to create the best learning
      experience for every child.
    </p>

  </div>


  <!-- PARENT INFORMATION CARDS -->
  <div class="parent-grid">


    <div class="info-card">

      <div class="feature-icon">
        \u{1F393}
      </div>

      <h3>Our Learning Approach</h3>

      <p>
        We use a play-based learning approach that encourages
        curiosity, creativity and independent thinking.
      </p>

    </div>


    <div class="info-card">

      <div class="feature-icon">
        \u{1F552}
      </div>

      <h3>Daily Routine</h3>

      <p>
        A balanced day including learning, play,
        storytelling, music, activities and rest.
      </p>

    </div>


    <div class="info-card">

      <div class="feature-icon">
        \u{1F34E}
      </div>

      <h3>Health & Wellbeing</h3>

      <p>
        We encourage healthy habits, cleanliness and
        a safe environment for every child.
      </p>

    </div>


    <div class="info-card">

      <div class="feature-icon">
        \u{1F4AC}
      </div>

      <h3>Parent Communication</h3>

      <p>
        Regular communication keeps parents connected
        with their child's progress and activities.
      </p>

    </div>


  </div>

</section>


<!-- DAILY ROUTINE -->
<section class="routine-section">

  <div class="section-heading">

    <span>A DAY AT TINY TARA</span>

    <h2>
      Learn \u2022 Play \u2022 Explore \u2022
      <span>Grow</span>
    </h2>

    <p>
      Every day is designed to give children a balance
      of learning, creativity, movement and fun.
    </p>

  </div>


  <div class="routine">


    <div class="routine-item">

      <span class="routine-number">
        01
      </span>

      <div class="routine-icon">
        \u{1F44B}
      </div>

      <h3>Welcome Time</h3>

      <p>
        Warm greetings and free play with friends.
      </p>

    </div>


    <div class="routine-item">

      <span class="routine-number">
        02
      </span>

      <div class="routine-icon">
        \u{1F4DA}
      </div>

      <h3>Learning Time</h3>

      <p>
        Fun activities and guided learning.
      </p>

    </div>


    <div class="routine-item">

      <span class="routine-number">
        03
      </span>

      <div class="routine-icon">
        \u{1F3A8}
      </div>

      <h3>Creative Play</h3>

      <p>
        Art, music, stories and imagination.
      </p>

    </div>


    <div class="routine-item">

      <span class="routine-number">
        04
      </span>

      <div class="routine-icon">
        \u26BD
      </div>

      <h3>Outdoor Fun</h3>

      <p>
        Movement, games and exploration.
      </p>

    </div>


  </div>

</section>


<!-- PARENT PARTNERSHIP -->
<section class="partnership-section">

  <div class="partnership-visual">

    <div class="visual-card">

      <div class="family-icons">
        \u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}
      </div>

      <h3>Growing Together</h3>

      <p>
        Parents + Teachers + Children
      </p>

    </div>

  </div>


  <div class="partnership-content">

    <span>WORKING TOGETHER</span>

    <h2>
      Parents Are An Important
      Part Of Our <span>Family</span>
    </h2>

    <p>
      A child's learning journey becomes stronger when
      parents and teachers work together.
    </p>

    <p>
      We value open communication and encourage parents
      to stay connected with their child's experiences,
      progress and achievements.
    </p>


    <ul>

      <li>
        <span>\u2713</span>
        Regular updates and communication
      </li>

      <li>
        <span>\u2713</span>
        Parent-teacher interaction
      </li>

      <li>
        <span>\u2713</span>
        Updates about school activities
      </li>

      <li>
        <span>\u2713</span>
        Support for your child's development
      </li>

    </ul>

  </div>

</section>


<!-- FAQ -->
<section class="faq-section">

  <div class="section-heading">

    <span>FAQ</span>

    <h2>
      Frequently Asked
      <span>Questions</span>
    </h2>

  </div>


  <div class="faq-container">


    <!-- FAQ 1 -->
    <div
      class="faq-item"
      [class.active]="activeFaq === 0"
    >

      <button
        type="button"
        class="faq-question"
        (click)="toggleFaq(0)"
      >

        <span>
          What age groups do you accept?
        </span>

        <span class="faq-symbol">
          {{ activeFaq === 0 ? '\u2212' : '+' }}
        </span>

      </button>


      @if (activeFaq === 0) {

        <div class="faq-answer">

          <p>
            Tiny Tara Preschool offers programs designed
            for children according to their age and developmental
            needs, including Play Group for ages 2 \u2013 3, Nursery for
            ages 3 \u2013 4, LKG for ages 4 \u2013 5 and UKG for ages 5 \u2013 6.
          </p>

        </div>

      }

    </div>


    <!-- FAQ 2 -->
    <div
      class="faq-item"
      [class.active]="activeFaq === 1"
    >

      <button
        type="button"
        class="faq-question"
        (click)="toggleFaq(1)"
      >

        <span>
          How can I apply for admission?
        </span>

        <span class="faq-symbol">
          {{ activeFaq === 1 ? '\u2212' : '+' }}
        </span>

      </button>


      @if (activeFaq === 1) {

        <div class="faq-answer">

          <p>
            You can contact Tiny Tara Preschool directly
            or submit an enquiry through our Contact Us page.
          </p>

        </div>

      }

    </div>


    <!-- FAQ 3 -->
    <div
      class="faq-item"
      [class.active]="activeFaq === 2"
    >

      <button
        type="button"
        class="faq-question"
        (click)="toggleFaq(2)"
      >

        <span>
          How do parents receive updates?
        </span>

        <span class="faq-symbol">
          {{ activeFaq === 2 ? '\u2212' : '+' }}
        </span>

      </button>


      @if (activeFaq === 2) {

        <div class="faq-answer">

          <p>
            Parents receive regular communication about
            school activities and their child's learning journey.
          </p>

        </div>

      }

    </div>


    <!-- FAQ 4 -->
    <div
      class="faq-item"
      [class.active]="activeFaq === 3"
    >

      <button
        type="button"
        class="faq-question"
        (click)="toggleFaq(3)"
      >

        <span>
          Can parents visit the preschool?
        </span>

        <span class="faq-symbol">
          {{ activeFaq === 3 ? '\u2212' : '+' }}
        </span>

      </button>


      @if (activeFaq === 3) {

        <div class="faq-answer">

          <p>
            Yes. Parents can contact us to arrange a visit
            and learn more about Tiny Tara Preschool.
          </p>

        </div>

      }

    </div>


  </div>

</section>


<!-- CALL TO ACTION -->
<section class="parent-cta">

  <div>

    <h2>
      Ready To Begin Your Child's Journey? \u{1F31F}
    </h2>

    <p>
      We'd love to welcome you and your little one
      to the Tiny Tara family.
    </p>

    <a
      href="/contact"
      class="cta-button"
    >
      Contact Us Today
    </a>

  </div>

</section>`, styles: ['/* src/app/pages/parents/parents.css */\n.page-banner {\n  padding: 100px 20px;\n  text-align: center;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #f66f92,\n      #6c63ff);\n}\n.banner-icon {\n  display: block;\n  font-size: 55px;\n  margin-bottom: 10px;\n}\n.page-banner h1 {\n  margin: 0;\n  font-size: 55px;\n  font-family: "Baloo 2", cursive;\n}\n.page-banner p {\n  margin-top: 10px;\n  font-size: 19px;\n}\n.section {\n  padding: 90px 8%;\n}\n.section-heading {\n  text-align: center;\n  max-width: 750px;\n  margin: 0 auto 60px;\n}\n.section-heading > span {\n  color: #f66f92;\n  font-weight: 800;\n  letter-spacing: 2px;\n}\n.section-heading h2 {\n  font-family: "Baloo 2", cursive;\n  font-size: 45px;\n  margin: 15px 0;\n  line-height: 1.2;\n}\n.section-heading h2 span {\n  color: #6c63ff;\n}\n.section-heading p {\n  color: #666;\n  line-height: 1.7;\n}\n.parent-grid {\n  max-width: 1100px;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 30px;\n}\n.info-card {\n  background: white;\n  padding: 40px 30px;\n  border-radius: 25px;\n  text-align: center;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);\n  transition: 0.3s;\n}\n.info-card:hover {\n  transform: translateY(-8px);\n}\n.feature-icon {\n  font-size: 50px;\n  margin-bottom: 15px;\n}\n.info-card h3 {\n  font-family: "Baloo 2", cursive;\n  font-size: 25px;\n  margin-bottom: 12px;\n}\n.info-card p {\n  color: #666;\n  line-height: 1.7;\n}\n.routine-section {\n  padding: 90px 8%;\n  background: #eef8ff;\n}\n.routine {\n  max-width: 1200px;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 25px;\n}\n.routine-item {\n  background: white;\n  padding: 35px 25px;\n  border-radius: 25px;\n  text-align: center;\n  position: relative;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);\n  transition: 0.3s;\n}\n.routine-item:hover {\n  transform: translateY(-8px);\n}\n.routine-number {\n  position: absolute;\n  top: 15px;\n  left: 18px;\n  color: #f66f92;\n  font-weight: 800;\n  font-size: 14px;\n}\n.routine-icon {\n  font-size: 50px;\n  margin-bottom: 15px;\n}\n.routine-item h3 {\n  font-family: "Baloo 2", cursive;\n  font-size: 23px;\n  margin-bottom: 8px;\n}\n.routine-item p {\n  color: #666;\n  line-height: 1.6;\n}\n.partnership-section {\n  padding: 100px 8%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 80px;\n}\n.partnership-visual {\n  min-height: 420px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #ffe4ed,\n      #e5e1ff);\n  border-radius: 40px;\n}\n.visual-card {\n  background: white;\n  padding: 55px 40px;\n  border-radius: 35px;\n  text-align: center;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);\n  transform: rotate(-2deg);\n}\n.family-icons {\n  font-size: 80px;\n  margin-bottom: 20px;\n}\n.visual-card h3 {\n  font-family: "Baloo 2", cursive;\n  font-size: 30px;\n  color: #f66f92;\n}\n.visual-card p {\n  color: #777;\n}\n.partnership-content > span {\n  color: #f66f92;\n  font-weight: 800;\n  letter-spacing: 2px;\n}\n.partnership-content h2 {\n  font-family: "Baloo 2", cursive;\n  font-size: 45px;\n  margin: 15px 0;\n}\n.partnership-content h2 span {\n  color: #6c63ff;\n}\n.partnership-content p {\n  color: #666;\n  line-height: 1.8;\n  margin-bottom: 15px;\n}\n.partnership-content ul {\n  list-style: none;\n  padding: 0;\n  margin-top: 25px;\n}\n.partnership-content li {\n  margin-bottom: 15px;\n  font-weight: 700;\n}\n.partnership-content li span {\n  display: inline-flex;\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: #f66f92;\n  color: white;\n}\n.faq-section {\n  padding: 90px 8%;\n  background: #fff7f9;\n}\n.faq-container {\n  max-width: 850px;\n  margin: auto;\n}\n.faq-item {\n  background: white;\n  margin-bottom: 18px;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  transition: 0.3s;\n}\n.faq-question {\n  width: 100%;\n  padding: 22px 25px;\n  border: none;\n  background: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 17px;\n  font-weight: 800;\n  color: #2f2f45;\n  cursor: pointer;\n  text-align: left;\n}\n.faq-symbol {\n  font-size: 28px;\n  color: #f66f92;\n}\n.faq-answer {\n  padding: 0 25px 25px;\n  color: #666;\n  line-height: 1.7;\n}\n.parent-cta {\n  padding: 90px 20px;\n  text-align: center;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #f66f92,\n      #6c63ff);\n}\n.parent-cta h2 {\n  font-family: "Baloo 2", cursive;\n  font-size: 45px;\n  margin-bottom: 15px;\n}\n.parent-cta p {\n  font-size: 18px;\n  margin-bottom: 30px;\n}\n.cta-button {\n  display: inline-block;\n  padding: 15px 30px;\n  background: white;\n  color: #f66f92;\n  border-radius: 30px;\n  font-weight: 800;\n  text-decoration: none;\n  transition: 0.3s;\n}\n.cta-button:hover {\n  transform: translateY(-3px);\n}\n@media (max-width: 900px) {\n  .routine {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .partnership-section {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 700px) {\n  .page-banner {\n    padding: 70px 20px;\n  }\n  .page-banner h1 {\n    font-size: 40px;\n  }\n  .section {\n    padding: 70px 20px;\n  }\n  .routine-section,\n  .faq-section {\n    padding: 70px 20px;\n  }\n  .parent-grid {\n    grid-template-columns: 1fr;\n  }\n  .routine {\n    grid-template-columns: 1fr;\n  }\n  .partnership-section {\n    padding: 70px 20px;\n  }\n  .partnership-visual {\n    min-height: 320px;\n  }\n  .visual-card {\n    padding: 40px 25px;\n  }\n  .family-icons {\n    font-size: 60px;\n  }\n  .section-heading h2,\n  .partnership-content h2,\n  .parent-cta h2 {\n    font-size: 35px;\n  }\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Parents, { className: "Parents", filePath: "src/app/pages/parents/parents.ts", lineNumber: 9 });
})();
export {
  Parents
};
