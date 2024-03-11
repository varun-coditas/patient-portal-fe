import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  MaxValidator,
  MinValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule
} from "./chunk-ZUSGYINA.js";
import {
  CdkConnectedOverlay,
  CdkFixedSizeVirtualScroll,
  CdkOverlayOrigin,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  Overlay,
  OverlayModule,
  OverlayPositionBuilder,
  ScrollingModule,
  UniqueSelectionDispatcher
} from "./chunk-GA62ZWPK.js";
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  PortalModule,
  TemplatePortal
} from "./chunk-MJZ76BD2.js";
import "./chunk-S7TYYQXC.js";
import "./chunk-BHRCRKM5.js";
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from "./chunk-HNJ5R6PJ.js";
import {
  CommonModule,
  DatePipe,
  FormStyle,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  TranslationWidth,
  UpperCasePipe,
  getLocaleDayNames
} from "./chunk-QLTTG4FW.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NgModule,
  Optional,
  Output,
  QueryList,
  Renderer2,
  SkipSelf,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵpureFunction8,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-ZXXVQFRV.js";
import {
  BehaviorSubject,
  Subject,
  Subscription,
  map,
  noop,
  switchMap,
  take
} from "./chunk-AFRS2OIU.js";
import {
  __async,
  __spreadValues
} from "./chunk-HSNDBVJ3.js";

// node_modules/@angular/cdk/fesm2022/accordion.mjs
var nextId$1 = 0;
var CDK_ACCORDION = new InjectionToken("CdkAccordion");
var _CdkAccordion = class _CdkAccordion {
  constructor() {
    this._stateChanges = new Subject();
    this._openCloseAllActions = new Subject();
    this.id = `cdk-accordion-${nextId$1++}`;
    this.multi = false;
  }
  /** Opens all enabled accordion items in an accordion where multi is enabled. */
  openAll() {
    if (this.multi) {
      this._openCloseAllActions.next(true);
    }
  }
  /** Closes all enabled accordion items. */
  closeAll() {
    this._openCloseAllActions.next(false);
  }
  ngOnChanges(changes) {
    this._stateChanges.next(changes);
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._openCloseAllActions.complete();
  }
};
_CdkAccordion.ɵfac = function CdkAccordion_Factory(t) {
  return new (t || _CdkAccordion)();
};
_CdkAccordion.ɵdir = ɵɵdefineDirective({
  type: _CdkAccordion,
  selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
  inputs: {
    multi: ["multi", "multi", booleanAttribute]
  },
  exportAs: ["cdkAccordion"],
  features: [ɵɵProvidersFeature([{
    provide: CDK_ACCORDION,
    useExisting: _CdkAccordion
  }]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var CdkAccordion = _CdkAccordion;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordion, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion, [cdkAccordion]",
      exportAs: "cdkAccordion",
      providers: [{
        provide: CDK_ACCORDION,
        useExisting: CdkAccordion
      }]
    }]
  }], null, {
    multi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var nextId = 0;
var _CdkAccordionItem = class _CdkAccordionItem {
  /** Whether the AccordionItem is expanded. */
  get expanded() {
    return this._expanded;
  }
  set expanded(expanded) {
    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);
      if (expanded) {
        this.opened.emit();
        const accordionId = this.accordion ? this.accordion.id : this.id;
        this._expansionDispatcher.notify(this.id, accordionId);
      } else {
        this.closed.emit();
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  constructor(accordion, _changeDetectorRef, _expansionDispatcher) {
    this.accordion = accordion;
    this._changeDetectorRef = _changeDetectorRef;
    this._expansionDispatcher = _expansionDispatcher;
    this._openCloseAllSubscription = Subscription.EMPTY;
    this.closed = new EventEmitter();
    this.opened = new EventEmitter();
    this.destroyed = new EventEmitter();
    this.expandedChange = new EventEmitter();
    this.id = `cdk-accordion-child-${nextId++}`;
    this._expanded = false;
    this.disabled = false;
    this._removeUniqueSelectionListener = () => {
    };
    this._removeUniqueSelectionListener = _expansionDispatcher.listen((id, accordionId) => {
      if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
        this.expanded = false;
      }
    });
    if (this.accordion) {
      this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
    }
  }
  /** Emits an event for the accordion item being destroyed. */
  ngOnDestroy() {
    this.opened.complete();
    this.closed.complete();
    this.destroyed.emit();
    this.destroyed.complete();
    this._removeUniqueSelectionListener();
    this._openCloseAllSubscription.unsubscribe();
  }
  /** Toggles the expanded state of the accordion item. */
  toggle() {
    if (!this.disabled) {
      this.expanded = !this.expanded;
    }
  }
  /** Sets the expanded state of the accordion item to false. */
  close() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }
  /** Sets the expanded state of the accordion item to true. */
  open() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }
  _subscribeToOpenCloseAllActions() {
    return this.accordion._openCloseAllActions.subscribe((expanded) => {
      if (!this.disabled) {
        this.expanded = expanded;
      }
    });
  }
};
_CdkAccordionItem.ɵfac = function CdkAccordionItem_Factory(t) {
  return new (t || _CdkAccordionItem)(ɵɵdirectiveInject(CDK_ACCORDION, 12), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(UniqueSelectionDispatcher));
};
_CdkAccordionItem.ɵdir = ɵɵdefineDirective({
  type: _CdkAccordionItem,
  selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
  inputs: {
    expanded: ["expanded", "expanded", booleanAttribute],
    disabled: ["disabled", "disabled", booleanAttribute]
  },
  outputs: {
    closed: "closed",
    opened: "opened",
    destroyed: "destroyed",
    expandedChange: "expandedChange"
  },
  exportAs: ["cdkAccordionItem"],
  features: [ɵɵProvidersFeature([
    // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
    // registering to the same accordion.
    {
      provide: CDK_ACCORDION,
      useValue: void 0
    }
  ]), ɵɵInputTransformsFeature]
});
var CdkAccordionItem = _CdkAccordionItem;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionItem, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion-item, [cdkAccordionItem]",
      exportAs: "cdkAccordionItem",
      providers: [
        // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
        // registering to the same accordion.
        {
          provide: CDK_ACCORDION,
          useValue: void 0
        }
      ]
    }]
  }], () => [{
    type: CdkAccordion,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_ACCORDION]
    }, {
      type: SkipSelf
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: UniqueSelectionDispatcher
  }], {
    closed: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    destroyed: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }],
    expanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _CdkAccordionModule = class _CdkAccordionModule {
};
_CdkAccordionModule.ɵfac = function CdkAccordionModule_Factory(t) {
  return new (t || _CdkAccordionModule)();
};
_CdkAccordionModule.ɵmod = ɵɵdefineNgModule({
  type: _CdkAccordionModule,
  declarations: [CdkAccordion, CdkAccordionItem],
  exports: [CdkAccordion, CdkAccordionItem]
});
_CdkAccordionModule.ɵinj = ɵɵdefineInjector({});
var CdkAccordionModule = _CdkAccordionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionModule, [{
    type: NgModule,
    args: [{
      exports: [CdkAccordion, CdkAccordionItem],
      declarations: [CdkAccordion, CdkAccordionItem]
    }]
  }], null, null);
})();

// node_modules/@coditashq/ng-ada-components/fesm2022/coditashq-ng-ada-components.mjs
var _c0 = [[["", "leadingIcon", ""]], "*", [["", "trailingIcon", ""]]];
var _c1 = ["[leadingIcon]", "*", "[trailingIcon]"];
var _c2 = [[["", "leadingIcon", ""]], "*"];
var _c3 = ["[leadingIcon]", "*"];
var _c4 = ["*"];
function AccordionComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵprojection(1, 2);
    ɵɵelementEnd();
  }
}
function AccordionComponent_div_9_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 3, ["*ngIf", "!isDisable"]);
  }
}
function AccordionComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, AccordionComponent_div_9_ng_content_1_Template, 1, 0, "ng-content", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.isDisable);
  }
}
function AccordionComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 11);
  }
}
function AccordionComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵprojection(1, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("@animation", ctx_r3.expanded)("ngClass", ctx_r3.expanded ? "show" : "none");
  }
}
var _c5 = [[["", "accordion-icon", ""]], [["", "accordion-title", ""]], [["", "accordion-subtitle", ""]], [["", "accordion-badge", ""]], [["", "accordion-content", ""]]];
var _c6 = (a0) => ({
  removeFocus: a0
});
var _c7 = (a0, a1) => ({
  applyBorder: a0,
  noBorder: a1
});
var _c8 = (a0, a1) => ({
  "accordion__expanded-logo": a0,
  "accordion__collapsed-logo": a1
});
var _c9 = ["[accordion-icon]", "[accordion-title]", "[accordion-subtitle]", "[accordion-badge]", "[accordion-content]"];
var _c10 = ["labelRef"];
var _c11 = ["checkBox"];
var _c12 = (a0) => ({
  "checkbox__active-check-mark--disabled": a0
});
function CheckboxComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelement(1, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c12, ctx_r1.isDisable));
  }
}
var _c13 = (a0, a1) => ({
  checkbox__input: a0,
  "checkbox__input--disabled": a1
});
var _c14 = (a0, a1, a2, a3) => ({
  "checkbox__check-mark": a0,
  "checkbox__check-mark--disabled": a1,
  "checkbox__check-mark--checked": a2,
  "checkbox__check-mark--checked--disabled": a3
});
var _c15 = (a0) => ({
  "checkbox__label--disabled": a0
});
var _c16 = (a0, a1) => ({
  radio__description: a0,
  "radio__description--disabled": a1
});
function RadioComponent_label_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 2, 4);
    ɵɵprojection(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("for", ctx_r0.id)("ngClass", ɵɵpureFunction2(2, _c16, !ctx_r0.isDisable, ctx_r0.isDisable));
  }
}
var _c17 = (a0, a1) => ({
  "radio__check-mark": a0,
  "radio__check-mark--disabled": a1
});
var _c18 = (a0, a1) => ({
  "radio__active-check-mark": a0,
  "radio__active-check-mark--disabled": a1
});
var _c19 = ["prefixIcon"];
function ChipsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵlistener("click", function ChipsComponent_div_4_Template_div_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onCrossClick());
    });
    ɵɵelement(1, "img", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("src", ctx_r0.getCrossIconSource(), ɵɵsanitizeUrl);
  }
}
var _c20 = [[["", "prefix", ""]], "*"];
var _c21 = (a0, a1) => ({
  "chip__prefix-icon--flex": a0,
  "chip__prefix-icon--hide": a1
});
var _c22 = ["[prefix]", "*"];
var _c23 = ["myContent"];
function AvatarComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.value, ɵɵsanitizeUrl)("ngClass", ctx_r0.avatar_type);
  }
}
function AvatarComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 0);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.avatar_text_content);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.initials);
  }
}
function AvatarComponent_ada_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ada-badge", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.avatar_notification)("backgroundColor", ctx_r2.colors.RED);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r2.avatar.showBadgeIndicator() ? "" : ctx_r2.notificationCount, " ");
  }
}
function AvatarComponent_ada_badge_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ada-badge", 8);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("backgroundColor", ctx_r3.status === "online" ? ctx_r3.colors.GREEN : ctx_r3.colors.GREY)("ngClass", ctx_r3.avatar_status)("size", ctx_r3.size === "xs" || ctx_r3.size === "xxs" ? "s" : "m");
  }
}
var _c24 = (a0) => ({
  "avatar-wrapper": a0
});
var _c25 = [[["", "avatar", ""]], [["", "title", ""]], [["", "subtitle", ""]], [["", "list-checkbox", ""]]];
var _c26 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({
  "align-right": a0,
  "comfortable-type": a1,
  "compact-type": a2,
  selected: a3,
  "align-top": a4,
  "no-avatar": a5,
  "non-clickable": a6,
  disable: a7
});
var _c27 = ["[avatar]", "[title]", "[subtitle]", "[list-checkbox]"];
function CheckboxIntermediateComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelement(1, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c12, ctx_r1.isDisable));
  }
}
var _c28 = (a0, a1, a2, a3, a4, a5) => ({
  "segment--small": a0,
  "segment--medium": a1,
  "segment--large": a2,
  "segment--disable": a3,
  "segment--active": a4,
  "segment--active--disable": a5
});
var _c29 = (a0, a1, a2, a3) => ({
  "segment__section--small": a0,
  "segment__section--medium": a1,
  "segment__section--large": a2,
  "segment__section--disable": a3
});
var _c30 = ["title"];
function TabComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
var _c31 = [[["", "content", ""]], [["", "title", ""]]];
var _c32 = ["[content]", "[title]"];
function TabsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵprojection(1, 1);
    ɵɵelementEnd();
  }
}
function TabsComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 6);
  }
}
var _c33 = (a0, a1, a2) => ({
  "tab--active": a0,
  "tab--border-bottom-inactive": a1,
  "disabled": a2
});
function TabsComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 7);
    ɵɵlistener("click", function TabsComponent_li_3_Template_li_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r6);
      const tab_r4 = restoredCtx.$implicit;
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(!ctx_r5.isDisabled && (ctx_r5.stopTabs ? ctx_r5.stopChangingTabs(tab_r4) : ctx_r5.selectTab(tab_r4)));
    });
    ɵɵelementContainer(1, 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction3(2, _c33, tab_r4.active, !tab_r4.active, ctx_r2.isDisabled));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", tab_r4.titleRef);
  }
}
function TabsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵprojection(1, 2);
    ɵɵelementEnd();
  }
}
var _c34 = ["*", [["", "left-section", ""]], [["", "right-section", ""]]];
var _c35 = (a0) => ({
  "full--width": a0
});
var _c36 = ["*", "[left-section]", "[right-section]"];
var _c37 = ["textareaElement"];
function TextareaComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵprojection(1, 2);
    ɵɵelementEnd();
  }
}
function TextareaComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵprojection(1, 3);
    ɵɵelementEnd();
  }
}
function TextareaComponent_label_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate2(" ", ctx_r3.totalLengthOfText, "/", ctx_r3.letterLimit, " ");
  }
}
var _c38 = [[["", "label", ""]], [["", "secondary_label", ""]], [["", "hintText", ""]], [["", "errorText", ""]]];
var _c39 = ["[label]", "[secondary_label]", "[hintText]", "[errorText]"];
function InputComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate2(" ", ctx_r0.inputValueCount, "/", ctx_r0.letterLimit, " ");
  }
}
var _c40 = [[["", "label", ""]], [["", "tertiaryLabel", ""]], [["", "inputPrefix", ""]], [["", "inputSuffix", ""]], [["", "secondaryPrefix", ""]], [["", "secondaryLabel", ""]], [["", "secondarySuffix", ""]]];
var _c41 = (a0, a1) => ({
  disabled: a0,
  error: a1
});
var _c42 = ["[label]", "[tertiaryLabel]", "[inputPrefix]", "[inputSuffix]", "[secondaryPrefix]", "[secondaryLabel]", "[secondarySuffix]"];
var _c43 = ["nativeInput"];
function SearchInputComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "div", 7);
    ɵɵelement(2, "img", 8);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("src", ctx_r0.isDisable ? ctx_r0.disabledSearchIcon : ctx_r0.searchIcon, ɵɵsanitizeUrl);
  }
}
function SearchInputComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵlistener("click", function SearchInputComponent_div_4_Template_div_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.clearText());
    });
    ɵɵelementStart(1, "div", 7);
    ɵɵelement(2, "img", 10);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("src", ctx_r1.isDisable ? ctx_r1.disabledCloseIcon : ctx_r1.closeIcon, ɵɵsanitizeUrl);
  }
}
var _c44 = (a0, a1) => ({
  "input__background--active": a0,
  "search__button--small": a1
});
var _c45 = (a0) => ({
  "input__background--active": a0
});
function CalendarHeader_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵpipe(2, "uppercase");
    ɵɵpipe(3, "date");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ɵɵpipeBind2(3, 3, ctx_r0.date, "MMM YYYY")), " ");
  }
}
function CalendarHeader_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.yearRange, " ");
  }
}
function CalendarHeader_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r2.selectedYear, " ");
  }
}
function CalendarHeader_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 11);
  }
}
function CalendarHeader_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 12);
  }
}
var _c46 = (a0, a1) => ({
  "year--selected": a0,
  "year--active": a1
});
function YearMonthListComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "div", 5);
    ɵɵlistener("click", function YearMonthListComponent_div_0_div_1_Template_div_click_1_listener() {
      const restoredCtx = ɵɵrestoreView(_r5);
      const year_r3 = restoredCtx.$implicit;
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.OnYearSelected(year_r3));
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const year_r3 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c46, ctx_r2.isSelectedYear(year_r3), ctx_r2.isActiveYear(year_r3)));
    ɵɵattribute("aria-label", year_r3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", year_r3, " ");
  }
}
function YearMonthListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, YearMonthListComponent_div_0_div_1_Template, 3, 6, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.yearList);
  }
}
var _c47 = (a0, a1) => ({
  "month--selected": a0,
  "month--active": a1
});
function YearMonthListComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "div", 7);
    ɵɵlistener("click", function YearMonthListComponent_div_1_div_1_Template_div_click_1_listener() {
      const restoredCtx = ɵɵrestoreView(_r10);
      const month_r7 = restoredCtx.$implicit;
      const index_r8 = restoredCtx.index;
      const ctx_r9 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r9.onMonthSelected(month_r7, index_r8));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "uppercase");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const month_r7 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction2(5, _c47, ctx_r6.isSelectedMonth(month_r7), ctx_r6.isActiveMonth(month_r7)));
    ɵɵattribute("aria-label", month_r7);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, month_r7), " ");
  }
}
function YearMonthListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, YearMonthListComponent_div_1_div_1_Template, 4, 8, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.monthList);
  }
}
function DaysOfWeekComponent_abbr_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "abbr", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dayOfWeek_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("title", dayOfWeek_r1);
    ɵɵattribute("aria-label", dayOfWeek_r1);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.daysOfWeek[index_r2]);
  }
}
var _c48 = (a0, a1, a2, a3) => ({
  "date--visible": a0,
  "date--disabled": a1,
  "date--active": a2,
  "date--selected": a3
});
function DatesOfMonthComponent_time_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "time", 2);
    ɵɵlistener("click", function DatesOfMonthComponent_time_1_Template_time_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r3);
      const dayOfMonth_r1 = restoredCtx.$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.selectMonth(dayOfMonth_r1));
    })("keyup.enter", function DatesOfMonthComponent_time_1_Template_time_keyup_enter_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r3);
      const dayOfMonth_r1 = restoredCtx.$implicit;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.selectMonth(dayOfMonth_r1));
    });
    ɵɵpipe(1, "date");
    ɵɵpipe(2, "date");
    ɵɵtext(3);
    ɵɵpipe(4, "date");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dayOfMonth_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("dateTime", ɵɵpipeBind2(1, 8, dayOfMonth_r1, "yyyy-MM-dd"))("ngClass", ɵɵpureFunction4(18, _c48, !dayOfMonth_r1.isVisible, ctx_r0.isDisabled(dayOfMonth_r1), ctx_r0.isActive(dayOfMonth_r1), ctx_r0.selectedDate && ctx_r0.isSelected(dayOfMonth_r1)))("tabIndex", ctx_r0.isActive(dayOfMonth_r1) ? 0 : -1);
    ɵɵattribute("aria-label", ɵɵpipeBind3(2, 11, dayOfMonth_r1, "fullDate", ctx_r0.locale))("aria-selected", ctx_r0.selectedDate && ctx_r0.isSelected(dayOfMonth_r1))("aria-disabled", ctx_r0.isDisabled(dayOfMonth_r1))("aria-current", ctx_r0.isActive(dayOfMonth_r1) && "date");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind2(4, 15, dayOfMonth_r1, "d"));
  }
}
function CalendarComponent_days_of_week_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "days-of-week", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("locale", ctx_r0.locale);
  }
}
function CalendarComponent_dates_of_month_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "dates-of-month", 9);
    ɵɵlistener("selectedDateChange", function CalendarComponent_dates_of_month_6_Template_dates_of_month_selectedDateChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onDateSelection($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("date", ctx_r1.activeMonth)("locale", ctx_r1.locale)("selectedDate", ctx_r1.month);
  }
}
function CalendarComponent_year_month_list_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "year-month-list", 10);
    ɵɵlistener("closeMonthList", function CalendarComponent_year_month_list_7_Template_year_month_list_closeMonthList_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.onMonthListClose($event));
    })("closeYearList", function CalendarComponent_year_month_list_7_Template_year_month_list_closeYearList_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.onYearListClose($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("displayStatus", ctx_r2.displayStatus)("yearStart", ctx_r2.yearStart)("selectedMonth", ctx_r2.selectedMonth)("selectedYear", ctx_r2.selectedYear);
  }
}
function DialogPopupComponent_img_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 12);
    ɵɵlistener("click", function DialogPopupComponent_img_6_Template_img_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.close());
    });
    ɵɵelementEnd();
  }
}
function DialogPopupComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.dialogConfig == null ? null : ctx_r1.dialogConfig.content, " ");
  }
}
function DialogPopupComponent_ada_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ada-button", 14);
    ɵɵlistener("click", function DialogPopupComponent_ada_button_12_Template_ada_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.close("cancel"));
    });
    ɵɵelementStart(1, "span", 15);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.dialogConfig == null ? null : ctx_r2.dialogConfig.options == null ? null : ctx_r2.dialogConfig.options.cancel);
  }
}
function DialogPopupComponent_ada_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ada-button", 16);
    ɵɵlistener("click", function DialogPopupComponent_ada_button_13_Template_ada_button_click_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.close("submit"));
    });
    ɵɵelementStart(1, "span", 15);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("isDisabled", ctx_r3.isSubmitDisabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.dialogConfig == null ? null : ctx_r3.dialogConfig.options == null ? null : ctx_r3.dialogConfig.options.submit);
  }
}
var _c49 = ["caret"];
var _c50 = (a0, a1, a2) => ({
  "dark-shadow": a0,
  "light-shadow": a1,
  "tooltip--light": a2
});
function AccordionSeparatorComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelement(1, "img", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("src", ctx_r0.isDisable ? ctx_r0.disableCollapseIcon : ctx_r0.collapseIcon, ɵɵsanitizeUrl);
  }
}
function AccordionSeparatorComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵelement(1, "img", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("src", ctx_r1.isDisable ? ctx_r1.disableAddIcon : ctx_r1.addIcon, ɵɵsanitizeUrl);
  }
}
var _c51 = [[["", "accordion-title", ""]], [["", "accordion-description", ""]], [["", "accordion-content", ""]]];
var _c52 = ["[accordion-title]", "[accordion-description]", "[accordion-content]"];
function RangeHeader_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵpipe(2, "uppercase");
    ɵɵpipe(3, "date");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ɵɵpipeBind2(3, 3, ctx_r0.date, "MMM YYYY")), " ");
  }
}
function RangeHeader_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.yearRange, " ");
  }
}
function RangeHeader_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r2.selectedYear, " ");
  }
}
function RangeHeader_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 11);
  }
}
function RangeHeader_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 12);
  }
}
function YearMonthListsComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "div", 5);
    ɵɵlistener("click", function YearMonthListsComponent_div_0_div_1_Template_div_click_1_listener() {
      const restoredCtx = ɵɵrestoreView(_r5);
      const year_r3 = restoredCtx.$implicit;
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.OnYearSelected(year_r3));
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const year_r3 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c46, ctx_r2.isSelectedYear(year_r3), ctx_r2.isActiveYear(year_r3)));
    ɵɵattribute("aria-label", year_r3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", year_r3, " ");
  }
}
function YearMonthListsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, YearMonthListsComponent_div_0_div_1_Template, 3, 6, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.yearList);
  }
}
function YearMonthListsComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "div", 7);
    ɵɵlistener("click", function YearMonthListsComponent_div_1_div_1_Template_div_click_1_listener() {
      const restoredCtx = ɵɵrestoreView(_r10);
      const month_r7 = restoredCtx.$implicit;
      const index_r8 = restoredCtx.index;
      const ctx_r9 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r9.onMonthSelected(month_r7, index_r8));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "uppercase");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const month_r7 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction2(5, _c47, ctx_r6.isSelectedMonth(month_r7), ctx_r6.isActiveMonth(month_r7)));
    ɵɵattribute("aria-label", month_r7);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, month_r7), " ");
  }
}
function YearMonthListsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, YearMonthListsComponent_div_1_div_1_Template, 4, 8, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.monthList);
  }
}
function DaysOfWeeksComponent_abbr_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "abbr", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dayOfWeek_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("title", dayOfWeek_r1);
    ɵɵattribute("aria-label", dayOfWeek_r1);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.daysOfWeek[index_r2]);
  }
}
function DatesOfMonthsComponent_time_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "time", 2);
    ɵɵlistener("click", function DatesOfMonthsComponent_time_1_Template_time_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r3);
      const dayOfMonth_r1 = restoredCtx.$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.selectMonth(dayOfMonth_r1));
    })("mouseover", function DatesOfMonthsComponent_time_1_Template_time_mouseover_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r3);
      const dayOfMonth_r1 = restoredCtx.$implicit;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.setHoveredDate(dayOfMonth_r1));
    })("keyup.enter", function DatesOfMonthsComponent_time_1_Template_time_keyup_enter_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r3);
      const dayOfMonth_r1 = restoredCtx.$implicit;
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.selectMonth(dayOfMonth_r1));
    });
    ɵɵpipe(1, "date");
    ɵɵpipe(2, "date");
    ɵɵtext(3);
    ɵɵpipe(4, "date");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dayOfMonth_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("dateHovered", ctx_r0.dateHovered)("endMonthDate", ctx_r0.endMonthDate)("startMonthDate", ctx_r0.startMonthDate)("dayOfMonth", dayOfMonth_r1)("dateTime", ɵɵpipeBind2(1, 12, dayOfMonth_r1, "yyyy-MM-dd"))("ngClass", ɵɵpureFunction4(22, _c48, !dayOfMonth_r1.isVisible, ctx_r0.isDisabled(dayOfMonth_r1), ctx_r0.isActive(dayOfMonth_r1), (dayOfMonth_r1.getDate() == (ctx_r0.startMonthDate == null ? null : ctx_r0.startMonthDate.getDate()) || dayOfMonth_r1.getDate() == (ctx_r0.endMonthDate == null ? null : ctx_r0.endMonthDate.getDate())) && !ctx_r0.isDisabled(dayOfMonth_r1)))("tabIndex", ctx_r0.isActive(dayOfMonth_r1) ? 0 : -1);
    ɵɵattribute("aria-label", ɵɵpipeBind3(2, 15, dayOfMonth_r1, "fullDate", ctx_r0.locale))("aria-selected", ctx_r0.selectedDate && ctx_r0.isSelected(dayOfMonth_r1))("aria-disabled", ctx_r0.isDisabled(dayOfMonth_r1))("aria-current", ctx_r0.isActive(dayOfMonth_r1) && "date");
    ɵɵadvance(3);
    ɵɵtextInterpolate1("", ɵɵpipeBind2(4, 19, dayOfMonth_r1, "d"), " ");
  }
}
function RangeComponent_days_of_weeks_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "days-of-weeks", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("locale", ctx_r0.locale);
  }
}
function RangeComponent_dates_of_months_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "dates-of-months", 9);
    ɵɵlistener("selectedDateChange", function RangeComponent_dates_of_months_6_Template_dates_of_months_selectedDateChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onDateSelection($event));
    })("selectStartDate", function RangeComponent_dates_of_months_6_Template_dates_of_months_selectStartDate_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.onStartDateSelected($event));
    })("selectEndDate", function RangeComponent_dates_of_months_6_Template_dates_of_months_selectEndDate_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.onEndDateSelected($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("date", ctx_r1.activeMonth)("locale", ctx_r1.locale)("selectedDate", ctx_r1.month);
  }
}
function RangeComponent_year_month_lists_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "year-month-lists", 10);
    ɵɵlistener("closeMonthList", function RangeComponent_year_month_lists_7_Template_year_month_lists_closeMonthList_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.onMonthListClose($event));
    })("closeYearList", function RangeComponent_year_month_lists_7_Template_year_month_lists_closeYearList_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.onYearListClose($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("displayStatus", ctx_r2.displayStatus)("yearStart", ctx_r2.yearStart)("selectedMonth", ctx_r2.selectedMonth)("selectedYear", ctx_r2.selectedYear);
  }
}
var _c53 = [[["", "title", ""]], [["", "img", ""]], [["", "subTitle", ""]]];
var _c54 = ["[title]", "[img]", "[subTitle]"];
var _c55 = [[["", "title", ""]], [["", "title", ""]]];
var _c56 = (a0, a1) => ({
  addBorder: a0,
  addShadow: a1
});
var _c57 = (a0, a1) => ({
  "google_dark-content": a0,
  "google_dark-content--disabled": a1
});
var _c58 = ["[title]", "[title]"];
var _c59 = [[["", "header-menu", ""]], [["", "header-logo", ""]], [["", "header-left", ""]], [["", "header-right", ""]]];
var _c60 = (a0) => ({
  "header__container--fixed": a0
});
var _c61 = ["[header-menu]", "[header-logo]", "[header-left]", "[header-right]"];
var _c62 = [[["", "leftBlock", ""]], [["", "rightBlock", ""]]];
var _c63 = (a0) => ({
  "disabled": a0
});
var _c64 = ["[leftBlock]", "[rightBlock]"];
var _c65 = ["overlayTemplate"];
var _c66 = (a0) => ({
  disabled: a0
});
function MenuItemComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("click", function MenuItemComponent_ng_template_4_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handleOptionClick($event));
    });
    ɵɵelementStart(1, "ada-card", 6);
    ɵɵlistener("click", function MenuItemComponent_ng_template_4_Template_ada_card_click_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.toggleOptions());
    });
    ɵɵelementStart(2, "div", 7);
    ɵɵprojection(3, 1);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c66, ctx_r1.isDisabled));
  }
}
var _c67 = [[["", "menuTrigger", ""]], [["", "menuList", ""]]];
var _c68 = ["[menuTrigger]", "[menuList]"];
var _c69 = [[["", "content", ""]]];
var _c70 = ["[content]"];
function PopoverTitleComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵprojection(1, 1);
    ɵɵelementEnd();
  }
}
var _c71 = [[["", "title", ""]], [["", "closeIcon", ""]]];
var _c72 = ["[title]", "[closeIcon]"];
var _c73 = ["arrowElement"];
function PopoverComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵprojection(1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.classSelected);
    ɵɵstyleProp("width", ctx_r0._config.width);
  }
}
var _c74 = ["*", [["", "tooltipContent", ""]]];
var _c75 = () => [];
var _c76 = ["*", "[tooltipContent]"];
var _c77 = ["dropdownElement"];
var _c78 = ["inputRef"];
var _c79 = ["dropDownInput"];
var _c80 = ["dropdownTemplate"];
var _c81 = ["cdkoverlay"];
var _c82 = ["dropdownContainer"];
var _c83 = ["listItem"];
function MultiselectDropdownComponent_div_10_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "ada-chips", 17)(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "img", 18);
    ɵɵlistener("click", function MultiselectDropdownComponent_div_10_ng_container_1_ng_container_1_Template_img_click_4_listener() {
      ɵɵrestoreView(_r18);
      const item_r13 = ɵɵnextContext().$implicit;
      const ctx_r16 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r16.closeChip(item_r13));
    });
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r13 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("isSelected", true)("isDisable", item_r13.isDisabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r13.value);
  }
}
function MultiselectDropdownComponent_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MultiselectDropdownComponent_div_10_ng_container_1_ng_container_1_Template, 5, 3, "ng-container", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", i_r14 < ctx_r11.dropdownConfig.chipsLimit && item_r13.value !== "All");
  }
}
function MultiselectDropdownComponent_div_10_ada_chips_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ada-chips", 19)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵproperty("isSelected", true);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" +", ctx_r12.extraChips, "");
  }
}
function MultiselectDropdownComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, MultiselectDropdownComponent_div_10_ng_container_1_Template, 2, 1, "ng-container", 14)(2, MultiselectDropdownComponent_div_10_ada_chips_2_Template, 3, 2, "ada-chips", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.selectedValues);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.extraChips > 0);
  }
}
var _c84 = (a0) => ({
  open: a0
});
function MultiselectDropdownComponent_img_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 20);
    ɵɵlistener("click", function MultiselectDropdownComponent_img_12_Template_img_click_0_listener() {
      ɵɵrestoreView(_r21);
      const ctx_r20 = ɵɵnextContext();
      return ɵɵresetView(ctx_r20.toggleDropdown());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c84, ctx_r5.isDropdownOpen))("@rotate180", ctx_r5.isDropdownOpen ? "down" : "up");
  }
}
function MultiselectDropdownComponent_img_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 21);
    ɵɵlistener("click", function MultiselectDropdownComponent_img_13_Template_img_click_0_listener($event) {
      ɵɵrestoreView(_r23);
      const ctx_r22 = ɵɵnextContext();
      return ɵɵresetView(ctx_r22.clearInput($event));
    });
    ɵɵelementEnd();
  }
}
function MultiselectDropdownComponent_ng_template_14_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 27)(2, "span");
    ɵɵtext(3, "No items found");
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
}
function MultiselectDropdownComponent_ng_template_14_ng_container_5_label_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 34);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r27 = ɵɵnextContext().$implicit;
    ɵɵproperty("for", option_r27.id);
    ɵɵadvance(1);
    ɵɵtextInterpolate(option_r27.value);
  }
}
function MultiselectDropdownComponent_ng_template_14_ng_container_5_label_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 35);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r27 = ɵɵnextContext().$implicit;
    ɵɵproperty("for", option_r27.id);
    ɵɵadvance(1);
    ɵɵtextInterpolate(option_r27.value);
  }
}
function MultiselectDropdownComponent_ng_template_14_ng_container_5_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 36);
  }
}
var _c85 = (a0, a1) => ({
  "dropdown__overlay__options--prefix": a0,
  "dropdown__overlay__options--suffix": a1
});
function MultiselectDropdownComponent_ng_template_14_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div")(2, "li", 28, 29);
    ɵɵtemplate(4, MultiselectDropdownComponent_ng_template_14_ng_container_5_label_4_Template, 2, 2, "label", 30);
    ɵɵelementStart(5, "ada-checkbox", 31);
    ɵɵlistener("onClick", function MultiselectDropdownComponent_ng_template_14_ng_container_5_Template_ada_checkbox_onClick_5_listener() {
      const restoredCtx = ɵɵrestoreView(_r36);
      const option_r27 = restoredCtx.$implicit;
      const ctx_r35 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r35.selectOption(option_r27));
    });
    ɵɵelementEnd();
    ɵɵtemplate(6, MultiselectDropdownComponent_ng_template_14_ng_container_5_label_6_Template, 2, 2, "label", 32);
    ɵɵelementEnd()();
    ɵɵtemplate(7, MultiselectDropdownComponent_ng_template_14_ng_container_5_div_7_Template, 1, 0, "div", 33);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const option_r27 = ctx.$implicit;
    const index_r28 = ctx.$implicit;
    const ctx_r26 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵclassProp("disabled", option_r27.isDisabled);
    ɵɵproperty("ngClass", ɵɵpureFunction2(9, _c85, ctx_r26.dropdownConfig.alignmentType === "prefixCheckbox", ctx_r26.dropdownConfig.alignmentType === "suffixCheckbox"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r26.dropdownConfig.alignmentType === "suffixCheckbox");
    ɵɵadvance(1);
    ɵɵproperty("checkboxId", option_r27.id)("isDisable", option_r27.isDisabled)("checked", option_r27.isSelected);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r26.dropdownConfig.alignmentType === "prefixCheckbox");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r26.sortedOptions.length !== index_r28 + 1);
  }
}
function MultiselectDropdownComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22, 23)(2, "ul", 24)(3, "cdk-virtual-scroll-viewport", 25);
    ɵɵtemplate(4, MultiselectDropdownComponent_ng_template_14_ng_container_4_Template, 4, 0, "ng-container", 16)(5, MultiselectDropdownComponent_ng_template_14_ng_container_5_Template, 8, 12, "ng-container", 26);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵstyleProp("height", ctx_r7.scrollHeight, "px");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.sortedOptions.length == 0);
    ɵɵadvance(1);
    ɵɵproperty("cdkVirtualForOf", ctx_r7.sortedOptions);
  }
}
function MultiselectDropdownComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 37);
    ɵɵprojection(1, 2);
    ɵɵelementEnd();
  }
}
function MultiselectDropdownComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 38);
    ɵɵprojection(1, 3);
    ɵɵelementEnd();
  }
}
var _c86 = [[["", "dropdown-label", ""]], [["", "dropdown-icon", ""]], [["", "dropdown-hint", ""]], [["", "dropdown-error", ""]]];
var _c87 = (a0, a1) => ({
  "dropdown__select--active": a0,
  "dropdown__select--error": a1
});
var _c88 = (a0, a1) => ({
  "hide-input": a0,
  "show-input": a1
});
var _c89 = ["[dropdown-label]", "[dropdown-icon]", "[dropdown-hint]", "[dropdown-error]"];
var _c90 = ["cdk"];
var _c91 = ["trigger"];
var _c92 = ["caretIcon"];
function DropdownComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13)(1, "label", 14);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2.dropDownConfig.labelText, " ");
  }
}
function DropdownComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "img", 15);
    ɵɵelementEnd();
  }
}
function DropdownComponent_img_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 16, 17);
    ɵɵlistener("click", function DropdownComponent_img_8_Template_img_click_0_listener($event) {
      ɵɵrestoreView(_r13);
      const ctx_r12 = ɵɵnextContext();
      return ɵɵresetView(ctx_r12.toggleDropdown($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("@rotate180", ctx_r5.isDropdownOpen ? "down" : "up");
  }
}
function DropdownComponent_img_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 18);
    ɵɵlistener("click", function DropdownComponent_img_9_Template_img_click_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.clearInput($event));
    });
    ɵɵelementEnd();
  }
}
function DropdownComponent_ng_template_10_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 23, 24)(3, "span");
    ɵɵtext(4, "No items found");
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
}
function DropdownComponent_ng_template_10_ng_container_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 27);
  }
}
function DropdownComponent_ng_template_10_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 25, 24);
    ɵɵlistener("click", function DropdownComponent_ng_template_10_ng_container_4_Template_li_click_1_listener() {
      const restoredCtx = ɵɵrestoreView(_r24);
      const dropdownOption_r19 = restoredCtx.$implicit;
      const ctx_r23 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r23.selectOption(dropdownOption_r19));
    });
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
    ɵɵtemplate(5, DropdownComponent_ng_template_10_ng_container_4_div_5_Template, 1, 0, "div", 26);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const dropdownOption_r19 = ctx.$implicit;
    const index_r20 = ctx.index;
    const ctx_r17 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassProp("selected", dropdownOption_r19.isSelected)("disabled", dropdownOption_r19.isDisabled);
    ɵɵadvance(3);
    ɵɵtextInterpolate(dropdownOption_r19.option);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r17.sortedOptions.length !== index_r20 + 1);
  }
}
function DropdownComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19)(1, "ul", 20)(2, "cdk-virtual-scroll-viewport", 21);
    ɵɵtemplate(3, DropdownComponent_ng_template_10_ng_container_3_Template, 5, 0, "ng-container", 4)(4, DropdownComponent_ng_template_10_ng_container_4_Template, 6, 6, "ng-container", 22);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵstyleProp("height", ctx_r7.scrollHeight, "px");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.sortedOptions.length == 0);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r7.sortedOptions);
  }
}
function DropdownComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 28);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r9.dropDownConfig.hintText, " ");
  }
}
function DropdownComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r10.dropDownConfig.errorText, " ");
  }
}
var _c93 = (a0, a1) => ({
  active: a0,
  error: a1
});
var _c94 = ["pageInput"];
var _c95 = (a0) => ({
  "pagination__page-size__focus": a0
});
function PaginationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10, 11);
    ɵɵlistener("click", function PaginationComponent_div_1_Template_div_click_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.openOverlay());
    });
    ɵɵelementStart(3, "div", null, 12);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "span", 13);
    ɵɵtext(7, "/ page");
    ɵɵelementEnd();
    ɵɵelement(8, "img", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c95, ctx_r0.isPageSizeOverlayOpen));
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ctx_r0.selectedItemPerPageOption.option, " ");
    ɵɵadvance(3);
    ɵɵproperty("@rotate180", ctx_r0.isPageSizeOverlayOpen ? "down" : "up");
  }
}
function PaginationComponent_ng_template_2_ng_container_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 22);
  }
}
function PaginationComponent_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 19, 20);
    ɵɵlistener("click", function PaginationComponent_ng_template_2_ng_container_3_Template_li_click_1_listener() {
      const restoredCtx = ɵɵrestoreView(_r17);
      const dropdownOption_r12 = restoredCtx.$implicit;
      const ctx_r16 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r16.selectOption(dropdownOption_r12, true));
    });
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
    ɵɵtemplate(5, PaginationComponent_ng_template_2_ng_container_3_div_5_Template, 1, 0, "div", 21);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const dropdownOption_r12 = ctx.$implicit;
    const index_r13 = ctx.index;
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassProp("selected", dropdownOption_r12.isSelected)("disabled", dropdownOption_r12.isDisabled);
    ɵɵadvance(3);
    ɵɵtextInterpolate1("", dropdownOption_r12.option, " / page");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r11.paginationConfig.itemPerPageOptions == null ? null : ctx_r11.paginationConfig.itemPerPageOptions.length) !== index_r13 + 1);
  }
}
function PaginationComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15)(1, "ul", 16)(2, "cdk-virtual-scroll-viewport", 17);
    ɵɵtemplate(3, PaginationComponent_ng_template_2_ng_container_3_Template, 6, 6, "ng-container", 18);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵstyleProp("height", ctx_r1.scrollHeight, "px");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.sortedOptions);
  }
}
function PaginationComponent_ng_container_7_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 27);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const page_r19 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", page_r19, " ");
  }
}
var _c96 = (a0) => ({
  "custom-disabled": a0
});
function PaginationComponent_ng_container_7_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 28);
    ɵɵlistener("click", function PaginationComponent_ng_container_7_div_1_ng_template_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r27);
      const page_r19 = ɵɵnextContext().$implicit;
      const ctx_r25 = ɵɵnextContext(2);
      ctx_r25.getData(page_r19, true);
      return ɵɵresetView(ctx_r25.newPageNumber = ctx_r25.currentPageNumber);
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const page_r19 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c96, page_r19 === -1))("disabled", page_r19 === -1);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", page_r19 === -1 ? "..." : page_r19, " ");
  }
}
function PaginationComponent_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵtemplate(1, PaginationComponent_ng_container_7_div_1_ng_container_1_Template, 3, 1, "ng-container", 25)(2, PaginationComponent_ng_container_7_div_1_ng_template_2_Template, 2, 5, "ng-template", null, 26, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const page_r19 = ctx.$implicit;
    const _r23 = ɵɵreference(3);
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r18.currentPageNumber === page_r19)("ngIfElse", _r23);
  }
}
function PaginationComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PaginationComponent_ng_container_7_div_1_Template, 4, 2, "div", 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r3.pager.pages);
  }
}
function PaginationComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "span", 29);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate2("Page ", ctx_r4.currentPageNumber, " of ", ctx_r4.totalPages, "");
  }
}
var _c97 = (a0) => ({
  "pagination__go-to-page__focus": a0
});
function PaginationComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 30)(1, "span", 29);
    ɵɵtext(2, "Go to page");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 31, 32);
    ɵɵlistener("ngModelChange", function PaginationComponent_div_11_Template_input_ngModelChange_3_listener($event) {
      ɵɵrestoreView(_r31);
      const ctx_r30 = ɵɵnextContext();
      return ɵɵresetView(ctx_r30.newPageNumber = $event);
    })("keyup.enter", function PaginationComponent_div_11_Template_input_keyup_enter_3_listener() {
      ɵɵrestoreView(_r31);
      const ctx_r32 = ɵɵnextContext();
      ctx_r32.goToPage();
      return ɵɵresetView(ctx_r32.validatePageNumber());
    })("focus", function PaginationComponent_div_11_Template_input_focus_3_listener($event) {
      ɵɵrestoreView(_r31);
      const ctx_r33 = ɵɵnextContext();
      ctx_r33.onFocus($event);
      return ɵɵresetView(ctx_r33.validatePageNumber());
    })("focusout", function PaginationComponent_div_11_Template_input_focusout_3_listener() {
      ɵɵrestoreView(_r31);
      const ctx_r34 = ɵɵnextContext();
      ctx_r34.onFocusOut();
      return ɵɵresetView(ctx_r34.validatePageNumber());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c97, ctx_r5.isGoToPageInputActive))("ngModel", ctx_r5.newPageNumber)("max", ctx_r5.totalPages);
  }
}
var _c98 = (a0, a1, a2, a3, a4) => ({
  pagination__small: a0,
  "pagination__align-center": a1,
  "pagination__align-left": a2,
  "pagination__align-right": a3,
  "pagination__go-to-page__direction": a4
});
var ButtonComponent = class _ButtonComponent {
  type = "primary";
  size = "l";
  isDisabled = false;
  isFocused = false;
  _hostClass;
  _ripple = false;
  buttonClicked(event2) {
    if (this.isDisabled) {
      event2.stopPropagation();
      return;
    }
    this._ripple = !this._ripple;
  }
  ngOnChanges() {
    this._hostClass = `button button__${this.type} button--${this.size}`;
    this._hostClass += this.isDisabled ? ` button__${this.type}--disabled` : "";
  }
  ngOnInit() {
    if (!this._hostClass) {
      this._hostClass = `button button__${this.type} button--${this.size}`;
    }
  }
  static ɵfac = function ButtonComponent_Factory(t) {
    return new (t || _ButtonComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ButtonComponent,
    selectors: [["ada-button"]],
    hostVars: 2,
    hostBindings: function ButtonComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function ButtonComponent_click_HostBindingHandler($event) {
          return ctx.buttonClicked($event);
        });
      }
      if (rf & 2) {
        ɵɵclassMap(ctx._hostClass);
      }
    },
    inputs: {
      type: "type",
      size: "size",
      isDisabled: "isDisabled"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c1,
    decls: 7,
    vars: 2,
    consts: [[1, "button__body", 3, "disabled", "focus", "blur"], [1, "text-content"], [1, "button__overlay-container", 3, "click"], [1, "button__overlay"]],
    template: function ButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c0);
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("focus", function ButtonComponent_Template_button_focus_0_listener() {
          return ctx.isFocused = true;
        })("blur", function ButtonComponent_Template_button_blur_0_listener() {
          return ctx.isFocused = false;
        });
        ɵɵprojection(1);
        ɵɵelementStart(2, "span", 1);
        ɵɵprojection(3, 1);
        ɵɵelementEnd();
        ɵɵprojection(4, 2);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 2);
        ɵɵlistener("click", function ButtonComponent_Template_div_click_5_listener($event) {
          return ctx.buttonClicked($event);
        });
        ɵɵelement(6, "div", 3);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("disabled", ctx.isDisabled);
        ɵɵadvance(6);
        ɵɵproperty("@rippleAnimation", ctx._ripple);
      }
    },
    styles: ["[_nghost-%COMP%]{display:inline-block;align-items:center;border-radius:4px;letter-spacing:.005em;text-align:center;cursor:pointer;-webkit-user-select:none;user-select:none;line-height:var(--hd-fnt-ln-hgt-6)}.button[_nghost-%COMP%]{font-size:var(--btn-fnt-sz-1)}.button--l[_nghost-%COMP%]{height:56px}.button--m[_nghost-%COMP%]{height:48px}.button--s[_nghost-%COMP%]{height:40px}.button--xs[_nghost-%COMP%]{height:36px}.button__outlined[_nghost-%COMP%]{border:1px solid var(--primary-base);color:var(--primary-base);background-color:unset}.button__outlined--disabled[_nghost-%COMP%]{cursor:not-allowed;border-color:var(--grey-400);color:var(--grey-450)}.button__outlined[_nghost-%COMP%]:hover{background-color:var(--blue-grey-secondary)}.button__outlined[disabled][_nghost-%COMP%]:hover{background-color:unset}.button__outlined[_nghost-%COMP%]:active{background-color:var(--primary-200)}.button__outlined[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__outlined[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__primary[_nghost-%COMP%]{background-color:var(--primary-base);color:var(--white)}.button__primary[_nghost-%COMP%]:hover{background-color:var(--primary-600)}.button__primary[_nghost-%COMP%]:active{background-color:var(--primary-700)}.button__primary[disabled][_nghost-%COMP%]:hover{background-color:var(--grey-200)}.button__primary--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--grey-200)}.button__primary[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);z-index:1}.button__primary[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__secondary[_nghost-%COMP%]{background-color:var(--primary-100);color:var(--primary-base)}.button__secondary[_nghost-%COMP%]:hover{background-color:var(--blue-grey-secondary)}.button__secondary[_nghost-%COMP%]:active{background-color:var(--primary-200)}.button__secondary[disabled][_nghost-%COMP%]:hover{background-color:var(--grey-200)}.button__secondary--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--grey-200)}.button__secondary[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);z-index:1}.button__secondary[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__tertiary[_nghost-%COMP%]{background-color:unset;color:var(--primary-base)}.button__tertiary[_nghost-%COMP%]:hover{background-color:var(--blue-grey-secondary)}.button__tertiary[_nghost-%COMP%]:active{background-color:var(--primary-200)}.button__tertiary[disabled][_nghost-%COMP%]:hover{background-color:unset}.button__tertiary--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:unset}.button__tertiary[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);z-index:1}.button__tertiary[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__destructive[_nghost-%COMP%]{background-color:var(--red-base);color:var(--white)}.button__destructive[_nghost-%COMP%]:hover{background-color:var(--red-600)}.button__destructive[_nghost-%COMP%]:active{background-color:var(--red-700)}.button__destructive[disabled][_nghost-%COMP%]:hover{background-color:var(--grey-200)}.button__destructive--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--grey-200)}.button__destructive[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);z-index:1}.button__destructive[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__destructive-outlined[_nghost-%COMP%]{border:1px solid var(--red-base);color:var(--red-base);background-color:unset}.button__destructive-outlined--disabled[_nghost-%COMP%]{cursor:not-allowed;border-color:var(--grey-400);color:var(--grey-450)}.button__destructive-outlined[_nghost-%COMP%]:hover{background-color:var(--red-100)}.button__destructive-outlined[disabled][_nghost-%COMP%]:hover{background-color:unset}.button__destructive-outlined[_nghost-%COMP%]:active{background-color:var(--red-200)}.button__destructive-outlined[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__destructive-outlined[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__destructive-label-only[_nghost-%COMP%]{color:var(--red-base);font-size:14px;line-height:145%;letter-spacing:.005em;text-transform:uppercase}.button__destructive-label-only[_nghost-%COMP%]:hover{color:var(--red-600)}.button__destructive-label-only[_nghost-%COMP%]:active{color:var(--red-700)}.button__destructive-label-only--disabled[_nghost-%COMP%]{cursor:not-allowed;color:var(--grey-700)}.button__destructive-label-only[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__destructive-label-only[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__primary-label-only[_nghost-%COMP%]{color:var(--primary-base);font-size:14px;line-height:145%;letter-spacing:.005em;text-transform:uppercase}.button__primary-label-only[_nghost-%COMP%]:hover{color:var(--primary-600)}.button__primary-label-only[_nghost-%COMP%]:active{color:var(--primary-700)}.button__primary-label-only--disabled[_nghost-%COMP%]{cursor:not-allowed;color:var(--grey-700)}.button__primary-label-only[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__primary-label-only[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}[_nghost-%COMP%]   .text-content[_ngcontent-%COMP%]{margin:0 8px}.button__body[_ngcontent-%COMP%]{all:inherit;margin:unset;padding:unset;position:unset;display:flex;border:none;outline:none;font-family:var(--btn-fnt-fm);font-weight:var(--btn-fnt-wt-lg)}.button__overlay-container[_ngcontent-%COMP%]{position:relative;height:100%;transform:translateY(-100%);display:flex;justify-content:center;align-items:center}.button__overlay[_ngcontent-%COMP%]{background-color:var(--black);opacity:.1;aspect-ratio:1;transform:scale(1);border-radius:50%}.button--l[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--l   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]{padding:0 16px}.button--m[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--m   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--s[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--s   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--xs[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--xs   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]{padding:0 12px}.button__primary-label-only[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button__primary-label-only   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]{padding:0}.button__primary-label-only[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%], .button__primary-label-only   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{margin:0}.button__primary[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__primary   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__secondary[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__secondary   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__destructive[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__destructive   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--grey-200);color:var(--grey-700);-webkit-user-select:none;user-select:none}.button__tertiary[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__tertiary   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__destructive-label-only[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__destructive-label-only   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__primary-label-only[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__primary-label-only   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled{color:var(--grey-700);-webkit-user-select:none;user-select:none}"],
    data: {
      animation: [trigger("rippleAnimation", [state("true", style({
        opacity: 0
      })), state("false", style({
        opacity: 0
      })), transition("true <=> false", animate("300ms", keyframes([style({
        transform: "scale(0)"
      }), style({
        transform: "scale(1)",
        opacity: "0.1"
      }), style({
        transform: "scale(1.6)",
        opacity: "0"
      })])))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{
      selector: "ada-button",
      standalone: true,
      imports: [],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("rippleAnimation", [state("true", style({
        opacity: 0
      })), state("false", style({
        opacity: 0
      })), transition("true <=> false", animate("300ms", keyframes([style({
        transform: "scale(0)"
      }), style({
        transform: "scale(1)",
        opacity: "0.1"
      }), style({
        transform: "scale(1.6)",
        opacity: "0"
      })])))])],
      template: '<button\n  class="button__body"\n  [disabled]="isDisabled"\n  (focus)="isFocused = true"\n  (blur)="isFocused = false"\n>\n  <ng-content select="[leadingIcon]"></ng-content>\n  <span class="text-content">\n    <ng-content></ng-content>\n  </span>\n  <ng-content select="[trailingIcon]"></ng-content>\n</button>\n<div class="button__overlay-container" (click)="buttonClicked($event)">\n  <div class="button__overlay" [@rippleAnimation]="_ripple"></div>\n</div>\n',
      styles: [":host{display:inline-block;align-items:center;border-radius:4px;letter-spacing:.005em;text-align:center;cursor:pointer;-webkit-user-select:none;user-select:none;line-height:var(--hd-fnt-ln-hgt-6)}:host.button{font-size:var(--btn-fnt-sz-1)}:host.button--l{height:56px}:host.button--m{height:48px}:host.button--s{height:40px}:host.button--xs{height:36px}:host.button__outlined{border:1px solid var(--primary-base);color:var(--primary-base);background-color:unset}:host.button__outlined--disabled{cursor:not-allowed;border-color:var(--grey-400);color:var(--grey-450)}:host.button__outlined:hover{background-color:var(--blue-grey-secondary)}:host.button__outlined[disabled]:hover{background-color:unset}:host.button__outlined:active{background-color:var(--primary-200)}:host.button__outlined:focus-visible{outline:2px dashed var(--primary-800)}:host.button__outlined:focus:not(:focus-visible){outline:none}:host.button__primary{background-color:var(--primary-base);color:var(--white)}:host.button__primary:hover{background-color:var(--primary-600)}:host.button__primary:active{background-color:var(--primary-700)}:host.button__primary[disabled]:hover{background-color:var(--grey-200)}:host.button__primary--disabled{cursor:not-allowed;background-color:var(--grey-200)}:host.button__primary:focus-visible{outline:2px dashed var(--primary-800);z-index:1}:host.button__primary:focus:not(:focus-visible){outline:none}:host.button__secondary{background-color:var(--primary-100);color:var(--primary-base)}:host.button__secondary:hover{background-color:var(--blue-grey-secondary)}:host.button__secondary:active{background-color:var(--primary-200)}:host.button__secondary[disabled]:hover{background-color:var(--grey-200)}:host.button__secondary--disabled{cursor:not-allowed;background-color:var(--grey-200)}:host.button__secondary:focus-visible{outline:2px dashed var(--primary-800);z-index:1}:host.button__secondary:focus:not(:focus-visible){outline:none}:host.button__tertiary{background-color:unset;color:var(--primary-base)}:host.button__tertiary:hover{background-color:var(--blue-grey-secondary)}:host.button__tertiary:active{background-color:var(--primary-200)}:host.button__tertiary[disabled]:hover{background-color:unset}:host.button__tertiary--disabled{cursor:not-allowed;background-color:unset}:host.button__tertiary:focus-visible{outline:2px dashed var(--primary-800);z-index:1}:host.button__tertiary:focus:not(:focus-visible){outline:none}:host.button__destructive{background-color:var(--red-base);color:var(--white)}:host.button__destructive:hover{background-color:var(--red-600)}:host.button__destructive:active{background-color:var(--red-700)}:host.button__destructive[disabled]:hover{background-color:var(--grey-200)}:host.button__destructive--disabled{cursor:not-allowed;background-color:var(--grey-200)}:host.button__destructive:focus-visible{outline:2px dashed var(--primary-800);z-index:1}:host.button__destructive:focus:not(:focus-visible){outline:none}:host.button__destructive-outlined{border:1px solid var(--red-base);color:var(--red-base);background-color:unset}:host.button__destructive-outlined--disabled{cursor:not-allowed;border-color:var(--grey-400);color:var(--grey-450)}:host.button__destructive-outlined:hover{background-color:var(--red-100)}:host.button__destructive-outlined[disabled]:hover{background-color:unset}:host.button__destructive-outlined:active{background-color:var(--red-200)}:host.button__destructive-outlined:focus-visible{outline:2px dashed var(--primary-800)}:host.button__destructive-outlined:focus:not(:focus-visible){outline:none}:host.button__destructive-label-only{color:var(--red-base);font-size:14px;line-height:145%;letter-spacing:.005em;text-transform:uppercase}:host.button__destructive-label-only:hover{color:var(--red-600)}:host.button__destructive-label-only:active{color:var(--red-700)}:host.button__destructive-label-only--disabled{cursor:not-allowed;color:var(--grey-700)}:host.button__destructive-label-only:focus-visible{outline:2px dashed var(--primary-800)}:host.button__destructive-label-only:focus:not(:focus-visible){outline:none}:host.button__primary-label-only{color:var(--primary-base);font-size:14px;line-height:145%;letter-spacing:.005em;text-transform:uppercase}:host.button__primary-label-only:hover{color:var(--primary-600)}:host.button__primary-label-only:active{color:var(--primary-700)}:host.button__primary-label-only--disabled{cursor:not-allowed;color:var(--grey-700)}:host.button__primary-label-only:focus-visible{outline:2px dashed var(--primary-800)}:host.button__primary-label-only:focus:not(:focus-visible){outline:none}:host .text-content{margin:0 8px}.button__body{all:inherit;margin:unset;padding:unset;position:unset;display:flex;border:none;outline:none;font-family:var(--btn-fnt-fm);font-weight:var(--btn-fnt-wt-lg)}.button__overlay-container{position:relative;height:100%;transform:translateY(-100%);display:flex;justify-content:center;align-items:center}.button__overlay{background-color:var(--black);opacity:.1;aspect-ratio:1;transform:scale(1);border-radius:50%}:host-context(.button--l) .button__body{padding:0 16px}:host-context(.button--m,.button--s,.button--xs) .button__body{padding:0 12px}:host-context(.button__primary-label-only) .button__body{padding:0}:host-context(.button__primary-label-only) .button__body .text-content{margin:0}:host-context(.button__primary,.button__secondary,.button__destructive) button:disabled{background-color:var(--grey-200);color:var(--grey-700);-webkit-user-select:none;user-select:none}:host-context(.button__tertiary,.button__destructive-label-only,.button__primary-label-only) button:disabled{color:var(--grey-700);-webkit-user-select:none;user-select:none}\n"]
    }]
  }], null, {
    type: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    buttonClicked: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var ButtonDropdownComponent = class _ButtonDropdownComponent {
  type = "primary";
  size = "l";
  isDisabled = false;
  button_dropdown = "";
  button_text = "";
  _hostClass;
  isFocused = false;
  _ripple = false;
  isPanelOpen = false;
  icon = "assets/md-blue-arrow-down.svg";
  buttonClicked(event2) {
    if (this.isDisabled) {
      event2.stopPropagation();
      return;
    }
    this._ripple = !this._ripple;
  }
  ngOnChanges() {
    this.setButtonHost();
    this.icon = this.type === "primary" ? "assets/md-white-arrow-down.svg" : "assets/md-blue-arrow-down.svg";
    if (this.isDisabled) {
      this.icon = "assets/md-disable-arrow-down.svg";
    }
    this._hostClass = `${this.button_dropdown} ${this.button_text}`;
  }
  onDropDownClick() {
    this.isPanelOpen = !this.isPanelOpen;
  }
  setButtonHost() {
    this.button_dropdown = `button button__${this.type} button--${this.size} button__${this.type}--action`;
    this.button_text = `button button__${this.type} button--${this.size} button__${this.type}--action-text button__${this.type}--action-text-enable`;
    this.button_dropdown = this.isDisabled ? `button button__${this.type} button__${this.type}--disabled button--${this.size}  button__${this.type}--action` : this.button_dropdown;
    this.button_text = this.isDisabled ? `button button__${this.type} button__${this.type}--disabled  button--${this.size} button__${this.type}--action-text button__${this.type}--action-text-disable` : this.button_text;
  }
  static ɵfac = function ButtonDropdownComponent_Factory(t) {
    return new (t || _ButtonDropdownComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ButtonDropdownComponent,
    selectors: [["ada-button-dropdown"]],
    hostVars: 2,
    hostBindings: function ButtonDropdownComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function ButtonDropdownComponent_click_HostBindingHandler($event) {
          return ctx.buttonClicked($event);
        });
      }
      if (rf & 2) {
        ɵɵclassMap(ctx._hostClass);
      }
    },
    inputs: {
      type: "type",
      size: "size",
      isDisabled: "isDisabled"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c3,
    decls: 8,
    vars: 9,
    consts: [[3, "disabled", "focus", "blur"], [1, "text-content"], [3, "disabled", "focus", "blur", "click"], [3, "src"], [1, "button__overlay-container"], [1, "button__overlay"]],
    template: function ButtonDropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c2);
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("focus", function ButtonDropdownComponent_Template_button_focus_0_listener() {
          return ctx.isFocused = true;
        })("blur", function ButtonDropdownComponent_Template_button_blur_0_listener() {
          return ctx.isFocused = false;
        });
        ɵɵprojection(1);
        ɵɵelementStart(2, "span", 1);
        ɵɵprojection(3, 1);
        ɵɵelementEnd()();
        ɵɵelementStart(4, "button", 2);
        ɵɵlistener("focus", function ButtonDropdownComponent_Template_button_focus_4_listener() {
          return ctx.isFocused = true;
        })("blur", function ButtonDropdownComponent_Template_button_blur_4_listener() {
          return ctx.isFocused = false;
        })("click", function ButtonDropdownComponent_Template_button_click_4_listener() {
          return ctx.onDropDownClick();
        });
        ɵɵelement(5, "img", 3);
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 4);
        ɵɵelement(7, "div", 5);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.button_text);
        ɵɵproperty("disabled", ctx.isDisabled);
        ɵɵadvance(4);
        ɵɵclassMap(ctx.button_dropdown);
        ɵɵproperty("disabled", ctx.isDisabled);
        ɵɵadvance(1);
        ɵɵproperty("@indicatorRotate", ctx.isPanelOpen)("src", ctx.icon, ɵɵsanitizeUrl);
        ɵɵadvance(2);
        ɵɵproperty("@rippleAnimation", ctx._ripple);
      }
    },
    dependencies: [CommonModule],
    styles: ["[_nghost-%COMP%]{display:inline-flex;align-items:center;text-align:center;cursor:pointer;letter-spacing:.005em;line-height:var(--hd-fnt-ln-hgt-6)}.button[_ngcontent-%COMP%]{border:none;outline:none;display:flex;align-items:center;gap:8px;font-size:var(--btn-fnt-sz-1)}.button--l[_ngcontent-%COMP%]{height:56px}.button--m[_ngcontent-%COMP%]{height:48px}.button--s[_ngcontent-%COMP%]{height:40px}.button--xs[_ngcontent-%COMP%]{height:36px}.button--l[_ngcontent-%COMP%]{padding:0 16px}.button--m[_ngcontent-%COMP%], .button--s[_ngcontent-%COMP%], .button--xs[_ngcontent-%COMP%]{padding:0 12px}.button__primary[_ngcontent-%COMP%]{background-color:var(--primary-base);color:var(--white)}.button__primary[_ngcontent-%COMP%]:hover{background-color:var(--primary-600)}.button__primary[_ngcontent-%COMP%]:active{background-color:var(--primary-700)}.button__primary[disabled][_ngcontent-%COMP%]:hover{background-color:var(--grey-200)}.button__primary--disabled[_ngcontent-%COMP%]{cursor:not-allowed;background-color:var(--grey-200)}.button__primary[_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);z-index:1}.button__primary[_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.button__primary--action-text[_ngcontent-%COMP%]{border-radius:4px 0 0 4px;font-weight:700}.button__primary--action-text-enable[_ngcontent-%COMP%]{border-right:1px solid var(--primary-500)}.button__primary--action-text-disable[_ngcontent-%COMP%]{border-right:1px solid var(--grey-100);color:var(--grey-700)}.button__primary--action[_ngcontent-%COMP%]{border-radius:0 4px 4px 0;border-left:none}.button__secondary[_ngcontent-%COMP%]{background-color:var(--primary-100);color:var(--primary-base)}.button__secondary[_ngcontent-%COMP%]:hover{background-color:var(--blue-grey-secondary)}.button__secondary[_ngcontent-%COMP%]:active{background-color:var(--primary-200)}.button__secondary[disabled][_ngcontent-%COMP%]:hover{background-color:var(--grey-200)}.button__secondary--disabled[_ngcontent-%COMP%]{cursor:not-allowed;background-color:var(--grey-200)}.button__secondary[_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);z-index:1}.button__secondary[_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.button__secondary--action-text[_ngcontent-%COMP%]{border-radius:4px 0 0 4px;font-weight:700}.button__secondary--action-text-enable[_ngcontent-%COMP%]{border-right:1px solid var(--primary-200)}.button__secondary--action-text-disable[_ngcontent-%COMP%]{border-right:1px solid var(--grey-100);color:var(--grey-700)}.button__secondary--action[_ngcontent-%COMP%]{border-radius:0 4px 4px 0;border-left:none}.button__outlined[_ngcontent-%COMP%]{border:1px solid var(--primary-base);color:var(--primary-base);background-color:unset}.button__outlined--disabled[_ngcontent-%COMP%]{cursor:not-allowed;border-color:var(--grey-700);color:var(--grey-450)}.button__outlined[_ngcontent-%COMP%]:hover{background-color:var(--blue-grey-secondary)}.button__outlined[disabled][_ngcontent-%COMP%]:hover{background-color:unset}.button__outlined[_ngcontent-%COMP%]:active{background-color:var(--primary-200)}.button__outlined[_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__outlined[_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.button__outlined--action-text[_ngcontent-%COMP%]{border-radius:4px 0 0 4px;font-weight:700}.button__outlined--action-text-enable[_ngcontent-%COMP%]{border-right:1px solid var(--primary-base)}.button__outlined--action-text-disable[_ngcontent-%COMP%]{border-right:1px solid var(--grey-700);color:var(--grey-700)}.button__outlined--action[_ngcontent-%COMP%]{border-radius:0 4px 4px 0;border-left:none}"],
    data: {
      animation: [trigger("indicatorRotate", [state("false", style({
        transform: "rotate(0deg)"
      })), state("true", style({
        transform: "rotate(180deg)"
      })), transition("true <=> false", animate("300ms ease-in-out"))]), trigger("rippleAnimation", [state("true", style({
        opacity: 0
      })), state("false", style({
        opacity: 0
      })), transition("true <=> false", animate("300ms", keyframes([style({
        transform: "scale(0)"
      }), style({
        transform: "scale(1)",
        opacity: "0.1"
      }), style({
        transform: "scale(1.6)",
        opacity: "0"
      })])))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonDropdownComponent, [{
    type: Component,
    args: [{
      selector: "ada-button-dropdown",
      standalone: true,
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("indicatorRotate", [state("false", style({
        transform: "rotate(0deg)"
      })), state("true", style({
        transform: "rotate(180deg)"
      })), transition("true <=> false", animate("300ms ease-in-out"))]), trigger("rippleAnimation", [state("true", style({
        opacity: 0
      })), state("false", style({
        opacity: 0
      })), transition("true <=> false", animate("300ms", keyframes([style({
        transform: "scale(0)"
      }), style({
        transform: "scale(1)",
        opacity: "0.1"
      }), style({
        transform: "scale(1.6)",
        opacity: "0"
      })])))])],
      template: '<button\n  [disabled]="isDisabled"\n  (focus)="isFocused = true"\n  (blur)="isFocused = false"\n  [class]="button_text"\n>\n  <ng-content select="[leadingIcon]"></ng-content>\n  <span class="text-content">\n    <ng-content></ng-content>\n  </span>\n</button>\n<button\n  [disabled]="isDisabled"\n  (focus)="isFocused = true"\n  (blur)="isFocused = false"\n  [class]="button_dropdown"\n  (click)="onDropDownClick()"\n>\n  <img [@indicatorRotate]="isPanelOpen" [src]="icon" />\n</button>\n<div class="button__overlay-container">\n  <div class="button__overlay" [@rippleAnimation]="_ripple"></div>\n</div>\n',
      styles: [":host{display:inline-flex;align-items:center;text-align:center;cursor:pointer;letter-spacing:.005em;line-height:var(--hd-fnt-ln-hgt-6)}.button{border:none;outline:none;display:flex;align-items:center;gap:8px;font-size:var(--btn-fnt-sz-1)}.button--l{height:56px}.button--m{height:48px}.button--s{height:40px}.button--xs{height:36px}.button--l{padding:0 16px}.button--m,.button--s,.button--xs{padding:0 12px}.button__primary{background-color:var(--primary-base);color:var(--white)}.button__primary:hover{background-color:var(--primary-600)}.button__primary:active{background-color:var(--primary-700)}.button__primary[disabled]:hover{background-color:var(--grey-200)}.button__primary--disabled{cursor:not-allowed;background-color:var(--grey-200)}.button__primary:focus-visible{outline:2px dashed var(--primary-800);z-index:1}.button__primary:focus:not(:focus-visible){outline:none}.button__primary--action-text{border-radius:4px 0 0 4px;font-weight:700}.button__primary--action-text-enable{border-right:1px solid var(--primary-500)}.button__primary--action-text-disable{border-right:1px solid var(--grey-100);color:var(--grey-700)}.button__primary--action{border-radius:0 4px 4px 0;border-left:none}.button__secondary{background-color:var(--primary-100);color:var(--primary-base)}.button__secondary:hover{background-color:var(--blue-grey-secondary)}.button__secondary:active{background-color:var(--primary-200)}.button__secondary[disabled]:hover{background-color:var(--grey-200)}.button__secondary--disabled{cursor:not-allowed;background-color:var(--grey-200)}.button__secondary:focus-visible{outline:2px dashed var(--primary-800);z-index:1}.button__secondary:focus:not(:focus-visible){outline:none}.button__secondary--action-text{border-radius:4px 0 0 4px;font-weight:700}.button__secondary--action-text-enable{border-right:1px solid var(--primary-200)}.button__secondary--action-text-disable{border-right:1px solid var(--grey-100);color:var(--grey-700)}.button__secondary--action{border-radius:0 4px 4px 0;border-left:none}.button__outlined{border:1px solid var(--primary-base);color:var(--primary-base);background-color:unset}.button__outlined--disabled{cursor:not-allowed;border-color:var(--grey-700);color:var(--grey-450)}.button__outlined:hover{background-color:var(--blue-grey-secondary)}.button__outlined[disabled]:hover{background-color:unset}.button__outlined:active{background-color:var(--primary-200)}.button__outlined:focus-visible{outline:2px dashed var(--primary-800)}.button__outlined:focus:not(:focus-visible){outline:none}.button__outlined--action-text{border-radius:4px 0 0 4px;font-weight:700}.button__outlined--action-text-enable{border-right:1px solid var(--primary-base)}.button__outlined--action-text-disable{border-right:1px solid var(--grey-700);color:var(--grey-700)}.button__outlined--action{border-radius:0 4px 4px 0;border-left:none}\n"]
    }]
  }], null, {
    type: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    buttonClicked: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var ButtonIconComponent = class _ButtonIconComponent {
  type = "tertiary";
  size = "l";
  isDisabled = false;
  isFocused = false;
  _hostClass;
  _ripple = false;
  buttonClicked(event2) {
    if (this.isDisabled) {
      event2.stopPropagation();
      return;
    }
    this._ripple = !this._ripple;
  }
  ngOnChanges() {
    this._hostClass = `button__${this.type} button--${this.size}`;
    this._hostClass += this.isDisabled ? ` button__${this.type}--disabled` : "";
  }
  ngOnInit() {
    if (!this._hostClass) {
      this._hostClass = `button__${this.type} button--${this.size}`;
    }
  }
  static ɵfac = function ButtonIconComponent_Factory(t) {
    return new (t || _ButtonIconComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ButtonIconComponent,
    selectors: [["ada-button-icon"]],
    hostVars: 2,
    hostBindings: function ButtonIconComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function ButtonIconComponent_click_HostBindingHandler($event) {
          return ctx.buttonClicked($event);
        });
      }
      if (rf & 2) {
        ɵɵclassMap(ctx._hostClass);
      }
    },
    inputs: {
      type: "type",
      size: "size",
      isDisabled: "isDisabled"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c4,
    decls: 4,
    vars: 2,
    consts: [[1, "button__body", 3, "disabled", "focus", "blur"], [1, "button__overlay-container"], [1, "button__overlay"]],
    template: function ButtonIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("focus", function ButtonIconComponent_Template_button_focus_0_listener() {
          return ctx.isFocused = true;
        })("blur", function ButtonIconComponent_Template_button_blur_0_listener() {
          return ctx.isFocused = false;
        });
        ɵɵprojection(1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 1);
        ɵɵelement(3, "div", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("disabled", ctx.isDisabled);
        ɵɵadvance(3);
        ɵɵproperty("@rippleAnimation", ctx._ripple);
      }
    },
    dependencies: [CommonModule],
    styles: ["[_nghost-%COMP%]{display:inline-block;align-items:center;border-radius:4px;letter-spacing:.005em;text-align:center;cursor:pointer;-webkit-user-select:none;user-select:none;line-height:var(--hd-fnt-ln-hgt-6)}.button[_nghost-%COMP%]{font-size:var(--btn-fnt-sz-1)}.button--l[_nghost-%COMP%]{height:56px}.button--m[_nghost-%COMP%]{height:48px}.button--s[_nghost-%COMP%]{height:40px}.button--xs[_nghost-%COMP%]{height:36px}.button__outlined[_nghost-%COMP%]{border:1px solid var(--primary-base);color:var(--primary-base);background-color:unset}.button__outlined--disabled[_nghost-%COMP%]{cursor:not-allowed;border-color:var(--grey-400);color:var(--grey-450)}.button__outlined[_nghost-%COMP%]:hover{background-color:var(--blue-grey-secondary)}.button__outlined[disabled][_nghost-%COMP%]:hover{background-color:unset}.button__outlined[_nghost-%COMP%]:active{background-color:var(--primary-200)}.button__primary[_nghost-%COMP%]{background-color:var(--primary-base);color:var(--white)}.button__primary[_nghost-%COMP%]:hover{background-color:var(--primary-600)}.button__primary[_nghost-%COMP%]:active{background-color:var(--primary-700)}.button__primary[disabled][_nghost-%COMP%]:hover{background-color:var(--grey-200)}.button__primary--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--grey-200)}.button__primary[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);z-index:1}.button__primary[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__secondary[_nghost-%COMP%]{background-color:var(--primary-100);color:var(--primary-base)}.button__secondary[_nghost-%COMP%]:hover{background-color:var(--blue-grey-secondary)}.button__secondary[_nghost-%COMP%]:active{background-color:var(--primary-200)}.button__secondary[disabled][_nghost-%COMP%]:hover{background-color:var(--grey-200)}.button__secondary--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--grey-200)}.button__secondary[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);z-index:1}.button__secondary[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__tertiary[_nghost-%COMP%]{background-color:unset;color:var(--primary-base)}.button__tertiary[_nghost-%COMP%]:hover{background-color:var(--blue-grey-secondary)}.button__tertiary[_nghost-%COMP%]:active{background-color:var(--primary-200)}.button__tertiary[disabled][_nghost-%COMP%]:hover{background-color:unset}.button__tertiary--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:unset}.button__tertiary[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);z-index:1}.button__tertiary[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__destructive[_nghost-%COMP%]{background-color:var(--red-base);color:var(--white)}.button__destructive[_nghost-%COMP%]:hover{background-color:var(--red-600)}.button__destructive[_nghost-%COMP%]:active{background-color:var(--red-700)}.button__destructive[disabled][_nghost-%COMP%]:hover{background-color:var(--grey-200)}.button__destructive--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--grey-200)}.button__destructive[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);z-index:1}.button__destructive[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__destructive-outlined[_nghost-%COMP%]{border:1px solid var(--red-base);color:var(--red-base);background-color:unset}.button__destructive-outlined--disabled[_nghost-%COMP%]{cursor:not-allowed;border-color:var(--grey-400);color:var(--grey-450)}.button__destructive-outlined[_nghost-%COMP%]:hover{background-color:var(--red-100)}.button__destructive-outlined[disabled][_nghost-%COMP%]:hover{background-color:unset}.button__destructive-outlined[_nghost-%COMP%]:active{background-color:var(--red-200)}.button__destructive-outlined[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__destructive-outlined[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__destructive-label-only[_nghost-%COMP%]{color:var(--red-base);font-size:14px;line-height:145%;letter-spacing:.005em;text-transform:uppercase}.button__destructive-label-only[_nghost-%COMP%]:hover{color:var(--red-600)}.button__destructive-label-only[_nghost-%COMP%]:active{color:var(--red-700)}.button__destructive-label-only--disabled[_nghost-%COMP%]{cursor:not-allowed;color:var(--grey-700)}.button__destructive-label-only[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__destructive-label-only[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__primary-label-only[_nghost-%COMP%]{color:var(--primary-base);font-size:14px;line-height:145%;letter-spacing:.005em;text-transform:uppercase}.button__primary-label-only[_nghost-%COMP%]:hover{color:var(--primary-600)}.button__primary-label-only[_nghost-%COMP%]:active{color:var(--primary-700)}.button__primary-label-only--disabled[_nghost-%COMP%]{cursor:not-allowed;color:var(--grey-700)}.button__primary-label-only[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__primary-label-only[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}[_nghost-%COMP%]   .text-content[_ngcontent-%COMP%]{margin:0 8px}.button__body[_ngcontent-%COMP%]{all:inherit;margin:unset;padding:unset;position:unset;display:flex;border:none;outline:none;font-family:var(--btn-fnt-fm);font-weight:var(--btn-fnt-wt-lg)}.button__overlay-container[_ngcontent-%COMP%]{position:relative;height:100%;transform:translateY(-100%);display:flex;justify-content:center;align-items:center}.button__overlay[_ngcontent-%COMP%]{background-color:var(--black);opacity:.1;aspect-ratio:1;transform:scale(1);border-radius:50%}.button--l[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--l   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]{padding:0 16px}.button--m[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--m   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--s[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--s   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--xs[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--xs   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]{padding:0 12px}.button__primary-label-only[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button__primary-label-only   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]{padding:0}.button__primary-label-only[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%], .button__primary-label-only   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{margin:0}.button__primary[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__primary   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__secondary[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__secondary   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__destructive[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__destructive   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--grey-200);color:var(--grey-700);-webkit-user-select:none;user-select:none}.button__tertiary[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__tertiary   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__destructive-label-only[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__destructive-label-only   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__primary-label-only[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__primary-label-only   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled{color:var(--grey-700);-webkit-user-select:none;user-select:none}.button__outlined[_nghost-%COMP%]{border:1px solid var(--blue-grey-900);color:var(--primary-15)}.button__outlined--disabled[_nghost-%COMP%]{cursor:not-allowed;border-color:var(--grey-1000);color:var(--grey-450)}.button__outlined[_nghost-%COMP%]:hover{background-color:var(--secondary-normal)}.button__outlined[_nghost-%COMP%]:active{background-color:var(--primary-10)}.button__outlined[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__outlined[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button--l[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--l   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]{padding:0 14px}.button--m[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--m   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]{padding:0 10px}.button--s[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--s   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--xs[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--xs   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]{padding:0 6px}"],
    data: {
      animation: [trigger("rippleAnimation", [state("true", style({
        opacity: 0
      })), state("false", style({
        opacity: 0
      })), transition("true <=> false", animate("300ms", keyframes([style({
        transform: "scale(0)"
      }), style({
        transform: "scale(1)",
        opacity: "0.1"
      }), style({
        transform: "scale(1.6)",
        opacity: "0"
      })])))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonIconComponent, [{
    type: Component,
    args: [{
      selector: "ada-button-icon",
      standalone: true,
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("rippleAnimation", [state("true", style({
        opacity: 0
      })), state("false", style({
        opacity: 0
      })), transition("true <=> false", animate("300ms", keyframes([style({
        transform: "scale(0)"
      }), style({
        transform: "scale(1)",
        opacity: "0.1"
      }), style({
        transform: "scale(1.6)",
        opacity: "0"
      })])))])],
      template: '<button class="button__body" [disabled]="isDisabled" (focus)="isFocused = true" (blur)="isFocused = false">\n  <ng-content></ng-content>\n</button>\n<div class="button__overlay-container">\n  <div class="button__overlay" [@rippleAnimation]="_ripple"></div>\n</div>',
      styles: [":host{display:inline-block;align-items:center;border-radius:4px;letter-spacing:.005em;text-align:center;cursor:pointer;-webkit-user-select:none;user-select:none;line-height:var(--hd-fnt-ln-hgt-6)}:host.button{font-size:var(--btn-fnt-sz-1)}:host.button--l{height:56px}:host.button--m{height:48px}:host.button--s{height:40px}:host.button--xs{height:36px}:host.button__outlined{border:1px solid var(--primary-base);color:var(--primary-base);background-color:unset}:host.button__outlined--disabled{cursor:not-allowed;border-color:var(--grey-400);color:var(--grey-450)}:host.button__outlined:hover{background-color:var(--blue-grey-secondary)}:host.button__outlined[disabled]:hover{background-color:unset}:host.button__outlined:active{background-color:var(--primary-200)}:host.button__primary{background-color:var(--primary-base);color:var(--white)}:host.button__primary:hover{background-color:var(--primary-600)}:host.button__primary:active{background-color:var(--primary-700)}:host.button__primary[disabled]:hover{background-color:var(--grey-200)}:host.button__primary--disabled{cursor:not-allowed;background-color:var(--grey-200)}:host.button__primary:focus-visible{outline:2px dashed var(--primary-800);z-index:1}:host.button__primary:focus:not(:focus-visible){outline:none}:host.button__secondary{background-color:var(--primary-100);color:var(--primary-base)}:host.button__secondary:hover{background-color:var(--blue-grey-secondary)}:host.button__secondary:active{background-color:var(--primary-200)}:host.button__secondary[disabled]:hover{background-color:var(--grey-200)}:host.button__secondary--disabled{cursor:not-allowed;background-color:var(--grey-200)}:host.button__secondary:focus-visible{outline:2px dashed var(--primary-800);z-index:1}:host.button__secondary:focus:not(:focus-visible){outline:none}:host.button__tertiary{background-color:unset;color:var(--primary-base)}:host.button__tertiary:hover{background-color:var(--blue-grey-secondary)}:host.button__tertiary:active{background-color:var(--primary-200)}:host.button__tertiary[disabled]:hover{background-color:unset}:host.button__tertiary--disabled{cursor:not-allowed;background-color:unset}:host.button__tertiary:focus-visible{outline:2px dashed var(--primary-800);z-index:1}:host.button__tertiary:focus:not(:focus-visible){outline:none}:host.button__destructive{background-color:var(--red-base);color:var(--white)}:host.button__destructive:hover{background-color:var(--red-600)}:host.button__destructive:active{background-color:var(--red-700)}:host.button__destructive[disabled]:hover{background-color:var(--grey-200)}:host.button__destructive--disabled{cursor:not-allowed;background-color:var(--grey-200)}:host.button__destructive:focus-visible{outline:2px dashed var(--primary-800);z-index:1}:host.button__destructive:focus:not(:focus-visible){outline:none}:host.button__destructive-outlined{border:1px solid var(--red-base);color:var(--red-base);background-color:unset}:host.button__destructive-outlined--disabled{cursor:not-allowed;border-color:var(--grey-400);color:var(--grey-450)}:host.button__destructive-outlined:hover{background-color:var(--red-100)}:host.button__destructive-outlined[disabled]:hover{background-color:unset}:host.button__destructive-outlined:active{background-color:var(--red-200)}:host.button__destructive-outlined:focus-visible{outline:2px dashed var(--primary-800)}:host.button__destructive-outlined:focus:not(:focus-visible){outline:none}:host.button__destructive-label-only{color:var(--red-base);font-size:14px;line-height:145%;letter-spacing:.005em;text-transform:uppercase}:host.button__destructive-label-only:hover{color:var(--red-600)}:host.button__destructive-label-only:active{color:var(--red-700)}:host.button__destructive-label-only--disabled{cursor:not-allowed;color:var(--grey-700)}:host.button__destructive-label-only:focus-visible{outline:2px dashed var(--primary-800)}:host.button__destructive-label-only:focus:not(:focus-visible){outline:none}:host.button__primary-label-only{color:var(--primary-base);font-size:14px;line-height:145%;letter-spacing:.005em;text-transform:uppercase}:host.button__primary-label-only:hover{color:var(--primary-600)}:host.button__primary-label-only:active{color:var(--primary-700)}:host.button__primary-label-only--disabled{cursor:not-allowed;color:var(--grey-700)}:host.button__primary-label-only:focus-visible{outline:2px dashed var(--primary-800)}:host.button__primary-label-only:focus:not(:focus-visible){outline:none}:host .text-content{margin:0 8px}.button__body{all:inherit;margin:unset;padding:unset;position:unset;display:flex;border:none;outline:none;font-family:var(--btn-fnt-fm);font-weight:var(--btn-fnt-wt-lg)}.button__overlay-container{position:relative;height:100%;transform:translateY(-100%);display:flex;justify-content:center;align-items:center}.button__overlay{background-color:var(--black);opacity:.1;aspect-ratio:1;transform:scale(1);border-radius:50%}:host-context(.button--l) .button__body{padding:0 16px}:host-context(.button--m,.button--s,.button--xs) .button__body{padding:0 12px}:host-context(.button__primary-label-only) .button__body{padding:0}:host-context(.button__primary-label-only) .button__body .text-content{margin:0}:host-context(.button__primary,.button__secondary,.button__destructive) button:disabled{background-color:var(--grey-200);color:var(--grey-700);-webkit-user-select:none;user-select:none}:host-context(.button__tertiary,.button__destructive-label-only,.button__primary-label-only) button:disabled{color:var(--grey-700);-webkit-user-select:none;user-select:none}:host.button__outlined{border:1px solid var(--blue-grey-900);color:var(--primary-15)}:host.button__outlined--disabled{cursor:not-allowed;border-color:var(--grey-1000);color:var(--grey-450)}:host.button__outlined:hover{background-color:var(--secondary-normal)}:host.button__outlined:active{background-color:var(--primary-10)}:host.button__outlined:focus-visible{outline:2px dashed var(--primary-800)}:host.button__outlined:focus:not(:focus-visible){outline:none}:host-context(.button--l) .button__body{padding:0 14px}:host-context(.button--m) .button__body{padding:0 10px}:host-context(.button--s,.button--xs) .button__body{padding:0 6px}\n"]
    }]
  }], null, {
    type: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    buttonClicked: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var AccordionComponent = class _AccordionComponent extends CdkAccordionItem {
  isDisable = false;
  _hostClass;
  isChild = false;
  isSeparatorRequired = false;
  subTitle;
  ngOnInit() {
  }
  ngOnChanges() {
    this._hostClass = this.isDisable ? `accordion--disabled` : "";
  }
  isAccordianFocused = false;
  removeFocus = false;
  collapseIcon = "assets/md-collapse.svg";
  disableCollapseIcon = "assets/md-collapse-disabled.svg";
  addIcon = "assets/md-add.svg";
  disableAddIcon = "assets/md-add-disabled.svg";
  settingIcon = "assets/md-setting.svg";
  disableSettingIcon = "assets/md-setting-disabled.svg";
  isClicked = false;
  onKeyPressExpandAccordian(e) {
    if (e.keyCode == 9 && e.key === "Tab") {
      this.isAccordianFocused = !this.isAccordianFocused;
      this.removeFocus = false;
    }
    if (this.isAccordianFocused && e.key == " " || e.code == "Space" || e.keyCode == 32) {
      this.removeFocus = false;
      this.toggle();
    }
  }
  expandAccordion(event2) {
    this.isAccordianFocused = false;
    this.removeFocus = true;
    this.isDisable ? event2.stopPropagation() : this.toggle();
    this.isClicked = !this.isClicked;
  }
  static ɵfac = (() => {
    let ɵAccordionComponent_BaseFactory;
    return function AccordionComponent_Factory(t) {
      return (ɵAccordionComponent_BaseFactory || (ɵAccordionComponent_BaseFactory = ɵɵgetInheritedFactory(_AccordionComponent)))(t || _AccordionComponent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _AccordionComponent,
    selectors: [["ada-accordion"]],
    hostVars: 2,
    hostBindings: function AccordionComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx._hostClass);
      }
    },
    inputs: {
      isDisable: "isDisable",
      isChild: "isChild",
      isSeparatorRequired: "isSeparatorRequired",
      subTitle: "subTitle"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c9,
    decls: 14,
    vars: 25,
    consts: [["tabindex", "0", 1, "accordion-container", 3, "ngClass", "keyup"], [3, "ngClass", "click"], [1, "accordion__left-section"], ["class", "accordion-subtitle", 4, "ngIf"], [1, "accordion__right-section"], [4, "ngIf"], [3, "ngClass"], ["loading", "lazy", 3, "src", "alt"], ["class", "accordion-separator", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "accordion-subtitle"], [1, "accordion-separator"]],
    template: function AccordionComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c5);
        ɵɵelementStart(0, "div")(1, "div", 0);
        ɵɵlistener("keyup", function AccordionComponent_Template_div_keyup_1_listener($event) {
          return ctx.onKeyPressExpandAccordian($event);
        });
        ɵɵelementStart(2, "div", 1);
        ɵɵlistener("click", function AccordionComponent_Template_div_click_2_listener($event) {
          return ctx.expandAccordion($event);
        });
        ɵɵelementStart(3, "div", 2)(4, "div");
        ɵɵprojection(5);
        ɵɵprojection(6, 1);
        ɵɵelementEnd();
        ɵɵtemplate(7, AccordionComponent_div_7_Template, 2, 0, "div", 3);
        ɵɵelementEnd();
        ɵɵelementStart(8, "div", 4);
        ɵɵtemplate(9, AccordionComponent_div_9_Template, 2, 1, "div", 5);
        ɵɵelementStart(10, "div", 6);
        ɵɵelement(11, "img", 7);
        ɵɵelementEnd()()();
        ɵɵtemplate(12, AccordionComponent_div_12_Template, 1, 0, "div", 8)(13, AccordionComponent_div_13_Template, 2, 2, "div", 9);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.isChild ? "accordion-child" : "accordion-parent");
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction1(17, _c6, ctx.removeFocus));
        ɵɵadvance(1);
        ɵɵclassMap(ctx.isChild ? "accordion-baccha" : "accordion");
        ɵɵclassProp("accordion--clicked", ctx.expanded);
        ɵɵproperty("ngClass", ɵɵpureFunction2(19, _c7, ctx.isClicked, !ctx.isClicked));
        ɵɵadvance(2);
        ɵɵclassMap(ctx.isChild ? "accordion-child-title" : "accordion-title");
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.subTitle);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.isChild);
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction2(22, _c8, ctx.expanded, !ctx.expanded));
        ɵɵadvance(1);
        ɵɵproperty("src", ctx.isDisable ? ctx.expanded ? ctx.disableCollapseIcon : ctx.disableAddIcon : ctx.expanded ? ctx.collapseIcon : ctx.addIcon, ɵɵsanitizeUrl)("alt", ctx.expanded ? "Collapse Icon" : "Add Icon");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isSeparatorRequired);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isClicked);
      }
    },
    dependencies: [CdkAccordionModule, CommonModule, NgClass, NgIf],
    styles: [".accordion-parent[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:var(--white);border-radius:4px;font-size:var(--btn-02-lbl-fnt-size);font-family:var(--btn-lbl-fnt-fm);font-weight:var(--btn-lbl-fnt-wt-01);box-shadow:var(--shdw-bluegrey-lvl-1)}.accordion-parent.accordion--disabled[_ngcontent-%COMP%]{color:var(--grey-600);background:var(--white)}.accordion-parent.accordion--disabled.applyBorder[_ngcontent-%COMP%]{border-top-left-radius:4px;border-top-right-radius:4px}.accordion-parent.accordion--disabled.noBorder[_ngcontent-%COMP%]{border-radius:4px}.accordion-parent.accordion--disabled[_ngcontent-%COMP%]   .accordion-title[_ngcontent-%COMP%]{color:var(--grey-600);border-radius:none}.accordion-parent.accordion--disabled[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]{background:var(--grey-100);border-radius:none;display:flex}.accordion-parent.accordion--disabled[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]:hover{background:var(--grey-100)}.accordion-parent.accordion--disabled[_ngcontent-%COMP%]   .accordian-container[_ngcontent-%COMP%]:focus{outline:none;border:none}.accordion-parent.accordion--disabled[_ngcontent-%COMP%]   .accordion__expanded-logo[_ngcontent-%COMP%], .accordion-parent.accordion--disabled[_ngcontent-%COMP%]   .accordion__collapsed-logo[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--grey-400)}.accordion-child[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]{padding-left:40px}.accordion-child[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-radius:4px;font-size:var(--btn-02-lbl-fnt-size);font-family:var(--btn-lbl-fnt-fm);font-weight:var(--btn-lbl-fnt-wt-01);box-sizing:border-box;justify-content:flex-end}.accordion-child.accordion--disabled[_ngcontent-%COMP%]{color:var(--grey-600);background:var(--white)}.accordion-child.accordion--disabled.applyBorder[_ngcontent-%COMP%]{border-top-left-radius:4px;border-top-right-radius:4px}.accordion-child.accordion--disabled.noBorder[_ngcontent-%COMP%]{border-radius:4px}.accordion-child.accordion--disabled[_ngcontent-%COMP%]   .accordion-title[_ngcontent-%COMP%]{color:var(--grey-600);border-radius:none}.accordion-child.accordion--disabled[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]{background:var(--grey-100);border-radius:none;display:flex}.accordion-child.accordion--disabled[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]:hover{background:var(--grey-100)}.accordion-child.accordion--disabled[_ngcontent-%COMP%]   .accordian-container[_ngcontent-%COMP%]:focus{outline:none;border:none}.accordion-child.accordion--disabled[_ngcontent-%COMP%]   .accordion__expanded-logo[_ngcontent-%COMP%], .accordion-child.accordion--disabled[_ngcontent-%COMP%]   .accordion__collapsed-logo[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--grey-400)}.accordion-container[_ngcontent-%COMP%]{border-radius:4px;width:inherit}.accordion-container[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px;color:var(--grey-1100);background-color:var(--white);border:none}.accordion-container[_ngcontent-%COMP%]   .accordion__right-section[_ngcontent-%COMP%]{display:flex;align-items:center}.accordion-container[_ngcontent-%COMP%]   .accordion__left-section[_ngcontent-%COMP%]{display:flex;justify-content:center;width:inherit;flex-direction:column}.accordion-container[_ngcontent-%COMP%]   .accordion__left-section[_ngcontent-%COMP%]   .accordion-title[_ngcontent-%COMP%]{display:grid;grid-template-columns:.3fr 1fr;align-items:center}.accordion-container[_ngcontent-%COMP%]   .accordion__left-section[_ngcontent-%COMP%]:focus-visible{outline:none;border-radius:4px;border:2px dashed var(--primary-800)}.accordion-container[_ngcontent-%COMP%]   .accordion__left-section.removeFocus[_ngcontent-%COMP%]{border:none;border:1px solid var(var(--white))}.accordion-container[_ngcontent-%COMP%]   .accordion__left-section[_ngcontent-%COMP%]   .accordion-child-title[_ngcontent-%COMP%]{display:grid;grid-template-columns:.3fr 1fr;align-items:center}.accordion-container[_ngcontent-%COMP%]   .accordion__left-section[_ngcontent-%COMP%]   .accordion-subtitle[_ngcontent-%COMP%]{color:var(--grey-700);display:flex;padding-left:36px}.accordion-container[_ngcontent-%COMP%]   .accordion__left-section[_ngcontent-%COMP%]   .none[_ngcontent-%COMP%]{display:none}.accordion-container[_ngcontent-%COMP%]   .accordion__left-section[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]{display:block}.accordion-container[_ngcontent-%COMP%]   .accordion.applyBorder[_ngcontent-%COMP%]{border-top-left-radius:4px;border-top-right-radius:4px}.accordion-container[_ngcontent-%COMP%]   .accordion.noBorder[_ngcontent-%COMP%]{border-radius:4px}.accordion-container[_ngcontent-%COMP%]   .accordion__expanded[_ngcontent-%COMP%]{overflow:hidden;border-top-left-radius:4px;border-top-right-radius:4px}.accordion-container[_ngcontent-%COMP%]   .accordion__expanded-logo[_ngcontent-%COMP%], .accordion-container[_ngcontent-%COMP%]   .accordion__collapsed-logo[_ngcontent-%COMP%]{transition:ease-in .5s;cursor:pointer;text-align:center;display:flex;align-items:center}.accordion-container[_ngcontent-%COMP%]   .accordion--clicked[_ngcontent-%COMP%]:hover{background:var(--grey-25)}.accordion-container[_ngcontent-%COMP%]   .accordion-separator[_ngcontent-%COMP%]{height:1px;background-color:#fafbfc}.accordion-container[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]:hover{background:var(--blue-grey-300)}.accordion-baccha[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px 16px 16px 32px;color:var(--grey-1100);background-color:var(--white);border:none}.accordion-baccha[_ngcontent-%COMP%]:hover{background:var(--blue-grey-300)!important}"],
    data: {
      animation: [trigger("animation", [state("false", style({
        height: "0",
        visibility: "hidden",
        padding: "0 16px"
      })), state("true", style({
        height: "*",
        visibility: "visible"
      })), transition("false <=> true", animate("200ms ease-in"))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionComponent, [{
    type: Component,
    args: [{
      selector: "ada-accordion",
      animations: [trigger("animation", [state("false", style({
        height: "0",
        visibility: "hidden",
        padding: "0 16px"
      })), state("true", style({
        height: "*",
        visibility: "visible"
      })), transition("false <=> true", animate("200ms ease-in"))])],
      standalone: true,
      imports: [CdkAccordionModule, CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div [class]="isChild ? 'accordion-child' : 'accordion-parent'">
  <div
    class="accordion-container"
    tabindex="0"
    (keyup)="onKeyPressExpandAccordian($event)"
    [ngClass]="{ removeFocus: removeFocus }"
  >
    <div
      [class]="isChild ? 'accordion-baccha' : 'accordion'"
      (click)="expandAccordion($event)"
      [class.accordion--clicked]="expanded"
      [ngClass]="{ applyBorder: isClicked, noBorder: !isClicked }"
    >
      <div class="accordion__left-section">
        <div [class]="isChild ? 'accordion-child-title' : 'accordion-title'">
          <ng-content select="[accordion-icon]"></ng-content>
          <ng-content select="[accordion-title]"></ng-content>
        </div>
        <div class="accordion-subtitle" *ngIf="subTitle">
          <ng-content select="[accordion-subtitle]"></ng-content>
        </div>
      </div>

      <div class="accordion__right-section">
        <div *ngIf="!isChild">
          <ng-content
            *ngIf="!isDisable"
            select="[accordion-badge]"
          ></ng-content>
        </div>

        <div
          [ngClass]="{
            'accordion__expanded-logo': expanded,
            'accordion__collapsed-logo': !expanded
          }"
        >
          <img
            [src]="
              isDisable
                ? expanded
                  ? disableCollapseIcon
                  : disableAddIcon
                : expanded
                ? collapseIcon
                : addIcon
            "
            [alt]="expanded ? 'Collapse Icon' : 'Add Icon'"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <div class="accordion-separator" *ngIf="isSeparatorRequired"></div>
    <div
      *ngIf="isClicked"
      [@animation]="expanded"
      [ngClass]="expanded ? 'show' : 'none'"
    >
      <ng-content select="[accordion-content]"></ng-content>
    </div>
  </div>
</div>
`,
      styles: [".accordion-parent{display:flex;flex-direction:column;background:var(--white);border-radius:4px;font-size:var(--btn-02-lbl-fnt-size);font-family:var(--btn-lbl-fnt-fm);font-weight:var(--btn-lbl-fnt-wt-01);box-shadow:var(--shdw-bluegrey-lvl-1)}.accordion-parent.accordion--disabled{color:var(--grey-600);background:var(--white)}.accordion-parent.accordion--disabled.applyBorder{border-top-left-radius:4px;border-top-right-radius:4px}.accordion-parent.accordion--disabled.noBorder{border-radius:4px}.accordion-parent.accordion--disabled .accordion-title{color:var(--grey-600);border-radius:none}.accordion-parent.accordion--disabled .accordion{background:var(--grey-100);border-radius:none;display:flex}.accordion-parent.accordion--disabled .accordion:hover{background:var(--grey-100)}.accordion-parent.accordion--disabled .accordian-container:focus{outline:none;border:none}.accordion-parent.accordion--disabled .accordion__expanded-logo,.accordion-parent.accordion--disabled .accordion__collapsed-logo{cursor:not-allowed;color:var(--grey-400)}.accordion-child .accordion{padding-left:40px}.accordion-child{display:flex;flex-direction:column;border-radius:4px;font-size:var(--btn-02-lbl-fnt-size);font-family:var(--btn-lbl-fnt-fm);font-weight:var(--btn-lbl-fnt-wt-01);box-sizing:border-box;justify-content:flex-end}.accordion-child.accordion--disabled{color:var(--grey-600);background:var(--white)}.accordion-child.accordion--disabled.applyBorder{border-top-left-radius:4px;border-top-right-radius:4px}.accordion-child.accordion--disabled.noBorder{border-radius:4px}.accordion-child.accordion--disabled .accordion-title{color:var(--grey-600);border-radius:none}.accordion-child.accordion--disabled .accordion{background:var(--grey-100);border-radius:none;display:flex}.accordion-child.accordion--disabled .accordion:hover{background:var(--grey-100)}.accordion-child.accordion--disabled .accordian-container:focus{outline:none;border:none}.accordion-child.accordion--disabled .accordion__expanded-logo,.accordion-child.accordion--disabled .accordion__collapsed-logo{cursor:not-allowed;color:var(--grey-400)}.accordion-container{border-radius:4px;width:inherit}.accordion-container .accordion{display:flex;justify-content:space-between;align-items:center;padding:16px;color:var(--grey-1100);background-color:var(--white);border:none}.accordion-container .accordion__right-section{display:flex;align-items:center}.accordion-container .accordion__left-section{display:flex;justify-content:center;width:inherit;flex-direction:column}.accordion-container .accordion__left-section .accordion-title{display:grid;grid-template-columns:.3fr 1fr;align-items:center}.accordion-container .accordion__left-section:focus-visible{outline:none;border-radius:4px;border:2px dashed var(--primary-800)}.accordion-container .accordion__left-section.removeFocus{border:none;border:1px solid var(var(--white))}.accordion-container .accordion__left-section .accordion-child-title{display:grid;grid-template-columns:.3fr 1fr;align-items:center}.accordion-container .accordion__left-section .accordion-subtitle{color:var(--grey-700);display:flex;padding-left:36px}.accordion-container .accordion__left-section .none{display:none}.accordion-container .accordion__left-section .show{display:block}.accordion-container .accordion.applyBorder{border-top-left-radius:4px;border-top-right-radius:4px}.accordion-container .accordion.noBorder{border-radius:4px}.accordion-container .accordion__expanded{overflow:hidden;border-top-left-radius:4px;border-top-right-radius:4px}.accordion-container .accordion__expanded-logo,.accordion-container .accordion__collapsed-logo{transition:ease-in .5s;cursor:pointer;text-align:center;display:flex;align-items:center}.accordion-container .accordion--clicked:hover{background:var(--grey-25)}.accordion-container .accordion-separator{height:1px;background-color:#fafbfc}.accordion-container .accordion:hover{background:var(--blue-grey-300)}.accordion-baccha{display:flex;justify-content:space-between;align-items:center;padding:16px 16px 16px 32px;color:var(--grey-1100);background-color:var(--white);border:none}.accordion-baccha:hover{background:var(--blue-grey-300)!important}\n"]
    }]
  }], null, {
    isDisable: [{
      type: Input
    }],
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    isChild: [{
      type: Input
    }],
    isSeparatorRequired: [{
      type: Input
    }],
    subTitle: [{
      type: Input
    }]
  });
})();
var UtilService = class _UtilService {
  randomIdGenerator() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  static ɵfac = function UtilService_Factory(t) {
    return new (t || _UtilService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _UtilService,
    factory: _UtilService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CheckboxComponent = class _CheckboxComponent {
  utilService;
  cdRef;
  isDisable = false;
  checked = false;
  checkboxId = "";
  value;
  onClick = new EventEmitter();
  labelRef;
  checkBox;
  _hostClass = "";
  labelExists = true;
  disableTickIcon = "assets/md-tick-disabled.svg";
  tickIcon = "assets/md-tick.svg";
  constructor(utilService, cdRef) {
    this.utilService = utilService;
    this.cdRef = cdRef;
  }
  onTouchedCallback = noop;
  onChange = (_) => {
  };
  clickEvent(event2) {
    if (!this.isDisable) {
      this.checked = !this.checked;
      this.onClick.emit(this.checked);
      this.onChange(this.checked);
    }
    if (this.checked) {
      if (this.checkBox?.nativeElement)
        this.checkBox.nativeElement.checked = true;
    } else {
      if (this.checkBox?.nativeElement)
        this.checkBox.nativeElement.checked = false;
    }
    this.cdRef.detectChanges();
  }
  writeValue(value) {
    this.checked = value;
  }
  registerOnChange(onChange) {
    this.onChange = onChange;
  }
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  ngAfterViewInit() {
    if (document.getElementsByClassName("checkbox__label")) {
      const el = document.getElementsByClassName("checkbox__label")[0];
      if (el) {
        this.labelExists = !!el.innerHTML.trim();
        el.style.display = this.labelExists ? "block" : "none";
      }
    }
  }
  ngOnChanges() {
    if (!this.checkboxId) {
      this.checkboxId = "checkbox-" + this.utilService.randomIdGenerator();
    }
    if (this.isDisable) {
      this._hostClass = "checkbox-on";
      this.cdRef.detach();
    } else {
      this.cdRef.reattach();
    }
    this.cdRef.detectChanges();
  }
  ngOnInit() {
  }
  static ɵfac = function CheckboxComponent_Factory(t) {
    return new (t || _CheckboxComponent)(ɵɵdirectiveInject(UtilService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CheckboxComponent,
    selectors: [["ada-checkbox"]],
    viewQuery: function CheckboxComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c10, 5);
        ɵɵviewQuery(_c11, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labelRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.checkBox = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function CheckboxComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx._hostClass);
      }
    },
    inputs: {
      isDisable: "isDisable",
      checked: "checked",
      checkboxId: "checkboxId",
      value: "value"
    },
    outputs: {
      onClick: "onClick"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _CheckboxComponent),
      multi: true
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c4,
    decls: 7,
    vars: 18,
    consts: [[1, "checkbox__container", 3, "click"], ["tabindex", "1", "type", "checkbox", 3, "id", "checked", "ngClass"], ["checkBox", ""], ["tabindex", "0", 3, "for", "ngClass", "click"], ["class", "checkbox__active-check-mark", 3, "ngClass", 4, "ngIf"], [1, "checkbox__label", 3, "for", "ngClass", "click"], [1, "checkbox__active-check-mark", 3, "ngClass"], [1, "tickmark"]],
    template: function CheckboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function CheckboxComponent_Template_div_click_0_listener($event) {
          return ctx.clickEvent($event);
        });
        ɵɵelement(1, "input", 1, 2);
        ɵɵelementStart(3, "label", 3);
        ɵɵlistener("click", function CheckboxComponent_Template_label_click_3_listener($event) {
          return $event.stopImmediatePropagation();
        });
        ɵɵtemplate(4, CheckboxComponent_div_4_Template, 2, 3, "div", 4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "label", 5);
        ɵɵlistener("click", function CheckboxComponent_Template_label_click_5_listener($event) {
          return $event.stopImmediatePropagation();
        });
        ɵɵprojection(6);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("id", ctx.checkboxId)("checked", ctx.checked)("ngClass", ɵɵpureFunction2(8, _c13, !ctx.isDisable, ctx.isDisable));
        ɵɵadvance(2);
        ɵɵproperty("for", ctx.checkboxId)("ngClass", ɵɵpureFunction4(11, _c14, !ctx.isDisable, ctx.isDisable, ctx.checked, ctx.isDisable && ctx.checked));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.checked);
        ɵɵadvance(1);
        ɵɵproperty("for", ctx.checkboxId)("ngClass", ɵɵpureFunction1(16, _c15, ctx.isDisable));
      }
    },
    dependencies: [CommonModule, NgClass, NgIf],
    styles: ['.checkbox__container[_ngcontent-%COMP%]{box-sizing:border-box;position:relative;display:flex;align-items:center;left:4px;top:4px;padding:24px}.checkbox__container[_ngcontent-%COMP%]   .checkbox__input[_ngcontent-%COMP%]{position:absolute;opacity:0;cursor:pointer;height:15px;width:14px;margin:0;top:1px;left:2px;flex-grow:1;box-shadow:0 0 0 0 transparent}.checkbox__container[_ngcontent-%COMP%]   .checkbox__input[_ngcontent-%COMP%]:focus{outline:none}.checkbox__container[_ngcontent-%COMP%]   .checkbox__input--disabled[_ngcontent-%COMP%]{display:none}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark[_ngcontent-%COMP%]{position:relative;height:16px;width:16px;background-color:var(--white-background-color);border-radius:4px;border:2px solid var(--blue-brand-primary);box-sizing:border-box;flex-shrink:0;display:flex;justify-content:center;align-items:center}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark[_ngcontent-%COMP%]:hover{background-color:var(--primary-100);box-shadow:0 0 0 4px var(--primary-100)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark[_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);outline-offset:4px}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark--disabled[_ngcontent-%COMP%]{cursor:default;position:relative;height:16px;width:16px;border-radius:4px;border:2px solid var(--grey-600);box-sizing:border-box;flex-shrink:0;margin-right:8px}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark--disabled[_ngcontent-%COMP%]:hover{border:2px solid var(--grey-600)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark--disabled[_ngcontent-%COMP%]:focus{outline:none}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark--checked[_ngcontent-%COMP%]{background-color:var(--blue-brand-primary)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark--checked[_ngcontent-%COMP%]:hover{background-color:var(--blue-brand-primary);box-shadow:0 0 0 4px var(--primary-100)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark--checked[_ngcontent-%COMP%]:active{border:2px solid var(--blue-brand-primary);background-color:var(--blue-brand-primary);box-shadow:0 0 0 4px var(--primary-200)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark[_ngcontent-%COMP%]:active{border:2px solid var(--blue-brand-primary);background-color:var(--primary-200);box-shadow:0 0 0 4px var(--primary-200)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark--checked--disabled[_ngcontent-%COMP%]{background-color:var(--grey-600);color:var(--grey-300)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark--checked--disabled[_ngcontent-%COMP%]:hover{background-color:var(--grey-600);color:var(--grey-300);box-shadow:none}.checkbox__container[_ngcontent-%COMP%]   .checkbox__active-check-mark[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;border-radius:4px}.checkbox__container[_ngcontent-%COMP%]   .checkbox__active-check-mark--disabled[_ngcontent-%COMP%]{background-color:var(--grey-600)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__active-check-mark--disabled[_ngcontent-%COMP%]   .tickmark[_ngcontent-%COMP%]:before{background-color:var(--grey-300)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__active-check-mark--disabled[_ngcontent-%COMP%]   .tickmark[_ngcontent-%COMP%]:after{background-color:var(--grey-300)}.checkbox__container[_ngcontent-%COMP%]   .tickmark[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-36%,-40%);width:4px;height:6px}.checkbox__container[_ngcontent-%COMP%]   .tickmark[_ngcontent-%COMP%]:before{position:absolute;left:0;right:10;top:0;height:6px;width:2px;background-color:var(--white);border-radius:8px;content:"";transform:translate(1.2px) rotate(-45deg) translateY(0);transform-origin:left bottom}.checkbox__container[_ngcontent-%COMP%]   .tickmark[_ngcontent-%COMP%]:after{position:absolute;left:0;bottom:0;height:2px;width:8px;background-color:var(--white);border-radius:8px;content:"";transform:translate(2px) rotate(-45deg) translateY(-.5px);transform-origin:left bottom}.checkbox__container[_ngcontent-%COMP%]   .checkbox__label[_ngcontent-%COMP%]{margin-left:8px;cursor:pointer;line-height:var(--bd-fnt-ln-hgt-5);font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-3);display:block}.checkbox__container[_ngcontent-%COMP%]   .checkbox__label--disabled[_ngcontent-%COMP%]{margin-left:0;color:var(--grey-600)}']
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxComponent, [{
    type: Component,
    args: [{
      selector: "ada-checkbox",
      standalone: true,
      imports: [CommonModule],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CheckboxComponent),
        multi: true
      }],
      template: `<div class="checkbox__container" (click)="clickEvent($event)">
  <input
    tabindex="1"
    [id]="checkboxId"
    [checked]="checked"
    type="checkbox"
    [ngClass]="{
      checkbox__input: !isDisable,
      'checkbox__input--disabled': isDisable
    }"
    #checkBox
  />
  <label
    tabindex="0"
    [for]="checkboxId"
    [ngClass]="{
      'checkbox__check-mark': !isDisable,
      'checkbox__check-mark--disabled': isDisable,
      'checkbox__check-mark--checked': checked,
      'checkbox__check-mark--checked--disabled': isDisable && checked
    }"
    (click)="$event.stopImmediatePropagation()"
  >
    <div
      *ngIf="checked"
      class="checkbox__active-check-mark"
      [ngClass]="{
        'checkbox__active-check-mark--disabled': isDisable
      }"
    >
      <div class="tickmark"></div>
    </div>
  </label>

  <label
    [for]="checkboxId"
    class="checkbox__label"
    [ngClass]="{
      'checkbox__label--disabled': isDisable
    }"
    (click)="$event.stopImmediatePropagation()"
  >
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.checkbox__container{box-sizing:border-box;position:relative;display:flex;align-items:center;left:4px;top:4px;padding:24px}.checkbox__container .checkbox__input{position:absolute;opacity:0;cursor:pointer;height:15px;width:14px;margin:0;top:1px;left:2px;flex-grow:1;box-shadow:0 0 0 0 transparent}.checkbox__container .checkbox__input:focus{outline:none}.checkbox__container .checkbox__input--disabled{display:none}.checkbox__container .checkbox__check-mark{position:relative;height:16px;width:16px;background-color:var(--white-background-color);border-radius:4px;border:2px solid var(--blue-brand-primary);box-sizing:border-box;flex-shrink:0;display:flex;justify-content:center;align-items:center}.checkbox__container .checkbox__check-mark:hover{background-color:var(--primary-100);box-shadow:0 0 0 4px var(--primary-100)}.checkbox__container .checkbox__check-mark:focus-visible{outline:2px dashed var(--primary-800);outline-offset:4px}.checkbox__container .checkbox__check-mark--disabled{cursor:default;position:relative;height:16px;width:16px;border-radius:4px;border:2px solid var(--grey-600);box-sizing:border-box;flex-shrink:0;margin-right:8px}.checkbox__container .checkbox__check-mark--disabled:hover{border:2px solid var(--grey-600)}.checkbox__container .checkbox__check-mark--disabled:focus{outline:none}.checkbox__container .checkbox__check-mark--checked{background-color:var(--blue-brand-primary)}.checkbox__container .checkbox__check-mark--checked:hover{background-color:var(--blue-brand-primary);box-shadow:0 0 0 4px var(--primary-100)}.checkbox__container .checkbox__check-mark--checked:active{border:2px solid var(--blue-brand-primary);background-color:var(--blue-brand-primary);box-shadow:0 0 0 4px var(--primary-200)}.checkbox__container .checkbox__check-mark:active{border:2px solid var(--blue-brand-primary);background-color:var(--primary-200);box-shadow:0 0 0 4px var(--primary-200)}.checkbox__container .checkbox__check-mark--checked--disabled{background-color:var(--grey-600);color:var(--grey-300)}.checkbox__container .checkbox__check-mark--checked--disabled:hover{background-color:var(--grey-600);color:var(--grey-300);box-shadow:none}.checkbox__container .checkbox__active-check-mark{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;border-radius:4px}.checkbox__container .checkbox__active-check-mark--disabled{background-color:var(--grey-600)}.checkbox__container .checkbox__active-check-mark--disabled .tickmark:before{background-color:var(--grey-300)}.checkbox__container .checkbox__active-check-mark--disabled .tickmark:after{background-color:var(--grey-300)}.checkbox__container .tickmark{position:absolute;top:60%;left:50%;transform:translate(-36%,-40%);width:4px;height:6px}.checkbox__container .tickmark:before{position:absolute;left:0;right:10;top:0;height:6px;width:2px;background-color:var(--white);border-radius:8px;content:"";transform:translate(1.2px) rotate(-45deg) translateY(0);transform-origin:left bottom}.checkbox__container .tickmark:after{position:absolute;left:0;bottom:0;height:2px;width:8px;background-color:var(--white);border-radius:8px;content:"";transform:translate(2px) rotate(-45deg) translateY(-.5px);transform-origin:left bottom}.checkbox__container .checkbox__label{margin-left:8px;cursor:pointer;line-height:var(--bd-fnt-ln-hgt-5);font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-3);display:block}.checkbox__container .checkbox__label--disabled{margin-left:0;color:var(--grey-600)}\n']
    }]
  }], () => [{
    type: UtilService
  }, {
    type: ChangeDetectorRef
  }], {
    isDisable: [{
      type: Input
    }],
    checked: [{
      type: Input
    }],
    checkboxId: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    labelRef: [{
      type: ViewChild,
      args: ["labelRef"]
    }],
    checkBox: [{
      type: ViewChild,
      args: ["checkBox"]
    }],
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var RadioComponent = class _RadioComponent {
  utilService;
  cdRef;
  name = "";
  value;
  selected = false;
  id = "";
  isDisable = false;
  _hostClass = "";
  onClick = new EventEmitter();
  labelRef = {};
  labelExists = true;
  onTouchedCallback = noop;
  onChange = (_) => {
  };
  constructor(utilService, cdRef) {
    this.utilService = utilService;
    this.cdRef = cdRef;
  }
  ngOnInit() {
  }
  onTouched() {
    this.onTouchedCallback();
  }
  clickEvent(event2) {
    this.selected = event2.checked;
    this.onChange(this.value);
    this.onClick.emit(event2.value);
  }
  writeValue(value) {
    this.selected = this.value === value;
  }
  registerOnChange(onChange) {
    this.onChange = onChange;
  }
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  ngAfterViewInit() {
    this.labelExists = !!this.labelRef.nativeElement.innerHTML.trim();
    this.cdRef.detectChanges();
  }
  ngOnChanges() {
    if (this.isDisable) {
      this.cdRef.detach();
    } else {
      this.cdRef.reattach();
    }
    if (!this.id) {
      this.id = "radio-" + this.utilService.randomIdGenerator();
    }
    if (this.isDisable) {
      this._hostClass = "radio-on";
    }
    this.cdRef.detectChanges();
  }
  static ɵfac = function RadioComponent_Factory(t) {
    return new (t || _RadioComponent)(ɵɵdirectiveInject(UtilService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RadioComponent,
    selectors: [["ada-radio"]],
    viewQuery: function RadioComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c10, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labelRef = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function RadioComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx._hostClass);
      }
    },
    inputs: {
      name: "name",
      value: "value",
      selected: "selected",
      id: "id",
      isDisable: "isDisable"
    },
    outputs: {
      onClick: "onClick"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _RadioComponent),
      multi: true
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c4,
    decls: 4,
    vars: 16,
    consts: [["type", "radio", 3, "name", "id", "value", "checked", "disabled", "click"], ["tabindex", "0", 3, "for", "ngClass"], [3, "for", "ngClass"], [3, "for", "ngClass", 4, "ngIf"], ["labelRef", ""]],
    template: function RadioComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "input", 0);
        ɵɵlistener("click", function RadioComponent_Template_input_click_0_listener($event) {
          return ctx.clickEvent($event.target);
        });
        ɵɵelementEnd();
        ɵɵelement(1, "label", 1)(2, "label", 2);
        ɵɵtemplate(3, RadioComponent_label_3_Template, 3, 5, "label", 3);
      }
      if (rf & 2) {
        ɵɵproperty("name", ctx.name)("id", ctx.id)("value", ctx.value)("checked", ctx.selected)("disabled", ctx.isDisable);
        ɵɵadvance(1);
        ɵɵproperty("for", ctx.id)("ngClass", ɵɵpureFunction2(10, _c17, !ctx.isDisable, ctx.isDisable));
        ɵɵadvance(1);
        ɵɵproperty("for", ctx.id)("ngClass", ɵɵpureFunction2(13, _c18, !ctx.isDisable, ctx.isDisable));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.labelExists);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf],
    styles: ["[_nghost-%COMP%]{position:relative;width:24px;height:24px;display:flex;align-items:center;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-3)}.radio-on[_nghost-%COMP%]:hover{background-color:var(--primary-100);border-radius:0%}[_nghost-%COMP%]:hover{background-color:var(--primary-100);border-radius:50%}.radio-on[_nghost-%COMP%]:active{background-color:var(--primary-200);border-radius:0%}[_nghost-%COMP%]:active{background-color:var(--primary-200);border-radius:50%}[_nghost-%COMP%]   input[type=radio][_ngcontent-%COMP%]{position:absolute;opacity:0;height:0;width:0}.radio--disabled[_nghost-%COMP%]{cursor:default;pointer-events:none}[_nghost-%COMP%]   .radio__check-mark[_ngcontent-%COMP%]{position:absolute;right:0;height:12px;width:12px;background-color:var(--white-background-color);border-radius:50%;border:2px solid var(--primary-base);cursor:pointer;left:4px}[_nghost-%COMP%]   .radio__check-mark--disabled[_ngcontent-%COMP%]{position:absolute;right:0;height:12px;width:12px;background-color:var(--white-background-color);border-radius:50%;border:2px solid var(--grey-500);cursor:default;left:4px}[_nghost-%COMP%]   .radio__check-mark[_ngcontent-%COMP%]:focus{outline:2px dashed var(--primary-800);outline-offset:4px}[_nghost-%COMP%]   .radio__check-mark[_ngcontent-%COMP%]:active{outline:none}[_nghost-%COMP%]   .radio__check-mark[_ngcontent-%COMP%]:focus:active{outline:none}[_nghost-%COMP%]   .radio__check-mark[_ngcontent-%COMP%]:after{content:inherit}[_nghost-%COMP%]   .small-check-mark[_ngcontent-%COMP%]{height:16px;width:16px;right:initial;top:0}[_nghost-%COMP%]   .radio__active-check-mark[_ngcontent-%COMP%]{position:absolute;right:0;height:8px;width:8px;background-color:var(--white-background-color);border-radius:50%;left:8px;top:8px;cursor:pointer}[_nghost-%COMP%]   .radio__active-check-mark--disabled[_ngcontent-%COMP%]{position:absolute;right:0;height:8px;width:8px;background-color:var(--white-background-color);border-radius:50%;left:8px;top:8px;cursor:default}[_nghost-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked ~ .radio__check-mark--disabled[_ngcontent-%COMP%]:after{display:block}[_nghost-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked ~ .radio__check-mark--disabled[_ngcontent-%COMP%]{border:2px solid var(--grey-500)}[_nghost-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked ~ .radio__check-mark[_ngcontent-%COMP%]:after{display:block}[_nghost-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked ~ .radio__active-check-mark--disabled[_ngcontent-%COMP%]{transition:all ease-in .1s;background-color:var(--disabled-button-color)}[_nghost-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked ~ .radio__check-mark[_ngcontent-%COMP%]{box-sizing:border-box;height:16px;width:16px;border:2px solid var(--primary-600)}[_nghost-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked ~ .small-check-mark[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]   .radio__description[_ngcontent-%COMP%]{margin-left:26px;position:relative;cursor:pointer}[_nghost-%COMP%]   .radio__description--disabled[_ngcontent-%COMP%]{margin-left:26px;position:relative;cursor:default;color:var(--grey-600);font-family:var(--btn-lbl-fnt-fm);font-weight:var(--hd-3-fnt-wt)}[_nghost-%COMP%]   input[type=radio][_ngcontent-%COMP%]:hover ~ .radio__active-check-mark[_ngcontent-%COMP%]{background-color:var(--white-background-color)}[_nghost-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked ~ .radio__active-check-mark[_ngcontent-%COMP%]{background-color:var(--primary-600);transition:all ease-in .1s}@media screen and (max-width: 500px){.radio-on[_nghost-%COMP%]:hover{background-color:unset;border-radius:unset}[_nghost-%COMP%]:hover{background-color:unset;border-radius:unset}}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioComponent, [{
    type: Component,
    args: [{
      selector: "ada-radio",
      standalone: true,
      imports: [CommonModule],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RadioComponent),
        multi: true
      }],
      template: `<input
  [name]="name"
  [id]="id"
  [value]="value"
  (click)="clickEvent($event.target)"
  [checked]="selected"
  [disabled]="isDisable"
  type="radio"
/>
<label
  [for]="id"
  [ngClass]="{
    'radio__check-mark': !isDisable,
    'radio__check-mark--disabled': isDisable
  }"
  tabindex="0"
>
</label>
<label
  [for]="id"
  [ngClass]="{
    'radio__active-check-mark': !isDisable,
    'radio__active-check-mark--disabled': isDisable
  }"
></label>

<label
  [for]="id"
  [ngClass]="{
    radio__description: !isDisable,
    'radio__description--disabled': isDisable
  }"
  #labelRef
  *ngIf="labelExists"
>
  <ng-content></ng-content>
</label>
`,
      styles: [":host{position:relative;width:24px;height:24px;display:flex;align-items:center;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-3)}:host.radio-on:hover{background-color:var(--primary-100);border-radius:0%}:host:hover{background-color:var(--primary-100);border-radius:50%}:host.radio-on:active{background-color:var(--primary-200);border-radius:0%}:host:active{background-color:var(--primary-200);border-radius:50%}:host input[type=radio]{position:absolute;opacity:0;height:0;width:0}:host.radio--disabled{cursor:default;pointer-events:none}:host .radio__check-mark{position:absolute;right:0;height:12px;width:12px;background-color:var(--white-background-color);border-radius:50%;border:2px solid var(--primary-base);cursor:pointer;left:4px}:host .radio__check-mark--disabled{position:absolute;right:0;height:12px;width:12px;background-color:var(--white-background-color);border-radius:50%;border:2px solid var(--grey-500);cursor:default;left:4px}:host .radio__check-mark:focus{outline:2px dashed var(--primary-800);outline-offset:4px}:host .radio__check-mark:active{outline:none}:host .radio__check-mark:focus:active{outline:none}:host .radio__check-mark:after{content:inherit}:host .small-check-mark{height:16px;width:16px;right:initial;top:0}:host .radio__active-check-mark{position:absolute;right:0;height:8px;width:8px;background-color:var(--white-background-color);border-radius:50%;left:8px;top:8px;cursor:pointer}:host .radio__active-check-mark--disabled{position:absolute;right:0;height:8px;width:8px;background-color:var(--white-background-color);border-radius:50%;left:8px;top:8px;cursor:default}:host input[type=radio]:checked~.radio__check-mark--disabled:after{display:block}:host input[type=radio]:checked~.radio__check-mark--disabled{border:2px solid var(--grey-500)}:host input[type=radio]:checked~.radio__check-mark:after{display:block}:host input[type=radio]:checked~.radio__active-check-mark--disabled{transition:all ease-in .1s;background-color:var(--disabled-button-color)}:host input[type=radio]:checked~.radio__check-mark{box-sizing:border-box;height:16px;width:16px;border:2px solid var(--primary-600)}:host input[type=radio]:checked~.small-check-mark{box-sizing:border-box}:host .radio__description{margin-left:26px;position:relative;cursor:pointer}:host .radio__description--disabled{margin-left:26px;position:relative;cursor:default;color:var(--grey-600);font-family:var(--btn-lbl-fnt-fm);font-weight:var(--hd-3-fnt-wt)}:host input[type=radio]:hover~.radio__active-check-mark{background-color:var(--white-background-color)}:host input[type=radio]:checked~.radio__active-check-mark{background-color:var(--primary-600);transition:all ease-in .1s}@media screen and (max-width: 500px){:host.radio-on:hover{background-color:unset;border-radius:unset}:host:hover{background-color:unset;border-radius:unset}}\n"]
    }]
  }], () => [{
    type: UtilService
  }, {
    type: ChangeDetectorRef
  }], {
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    isDisable: [{
      type: Input
    }],
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    onClick: [{
      type: Output
    }],
    labelRef: [{
      type: ViewChild,
      args: ["labelRef"]
    }]
  });
})();
var ChipType;
(function(ChipType2) {
  ChipType2["Outlined"] = "outlined";
  ChipType2["RoundedOutlined"] = "rounded-outlined";
  ChipType2["Filled"] = "filled";
  ChipType2["RoundedFilled"] = "rounded-filled";
})(ChipType || (ChipType = {}));
var ChipSize;
(function(ChipSize2) {
  ChipSize2["Small"] = "small";
  ChipSize2["Medium"] = "medium";
  ChipSize2["Large"] = "large";
})(ChipSize || (ChipSize = {}));
var ChipsComponent = class _ChipsComponent {
  renderer;
  el;
  size = ChipSize.Small;
  type = ChipType.Outlined;
  isDisable = false;
  isCrossIconVisible = false;
  isSelected = false;
  crossIcon = "assets/sm-close.svg";
  disabledCrossIcon = "assets/sm-close-disabled.svg";
  chipSelected = new EventEmitter();
  closeChip = new EventEmitter();
  prefixIcon;
  isPrefixExist = false;
  chipSize = ChipSize;
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  get chipClass() {
    let chipClass = "";
    chipClass = `chip chip--size_${this.size} chip--type_${this.type}`;
    if (this.isSelected && !this.isDisable) {
      chipClass = chipClass + "--selected";
    }
    if (this.isDisable) {
      chipClass = chipClass + "--disabled";
    }
    if (this.isCrossIconVisible) {
      chipClass = chipClass + " chip--pr-8";
    }
    if (this.isPrefixExist) {
      chipClass = chipClass + " chip--pl-8";
    }
    if (this.isPrefixExist || this.isCrossIconVisible) {
      chipClass = chipClass + " chip--gap-8";
    }
    return chipClass;
  }
  ngAfterViewInit() {
    this.checkPrefixExistence();
  }
  checkPrefixExistence() {
    if (this.prefixIcon) {
      const svg = this.prefixIcon.nativeElement.querySelector("svg");
      if (svg && svg instanceof SVGElement) {
        this.isPrefixExist = true;
      }
    }
  }
  onCrossClick() {
    this.closeChip.emit(true);
  }
  onChipsClick() {
    if (!this.isDisable) {
      this.isSelected = !this.isSelected;
      this.chipSelected.emit(this.isSelected);
    }
  }
  getCrossIconSource() {
    if ((this.type === "filled" || this.type === "rounded-filled") && this.isSelected)
      return this.crossIcon;
    return this.disabledCrossIcon;
  }
  static ɵfac = function ChipsComponent_Factory(t) {
    return new (t || _ChipsComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ChipsComponent,
    selectors: [["ada-chips"]],
    viewQuery: function ChipsComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c19, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prefixIcon = _t.first);
      }
    },
    inputs: {
      size: "size",
      type: "type",
      isDisable: "isDisable",
      isCrossIconVisible: "isCrossIconVisible",
      isSelected: "isSelected"
    },
    outputs: {
      chipSelected: "chipSelected",
      closeChip: "closeChip"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c22,
    decls: 5,
    vars: 6,
    consts: [["tabindex", "0", 3, "ngClass", "click"], [1, "chip__prefix-icon", 3, "ngClass"], ["class", "chip__suffix-icon chip__suffix-icon--visible", 3, "click", 4, "ngIf"], [1, "chip__suffix-icon", "chip__suffix-icon--visible", 3, "click"], ["alt", "close\n    Icon", 3, "src"]],
    template: function ChipsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c20);
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function ChipsComponent_Template_div_click_0_listener() {
          return !ctx.isDisable && ctx.onChipsClick();
        });
        ɵɵelementStart(1, "div", 1);
        ɵɵprojection(2);
        ɵɵelementEnd();
        ɵɵprojection(3, 1);
        ɵɵtemplate(4, ChipsComponent_div_4_Template, 2, 1, "div", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ctx.chipClass);
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c21, ctx.isPrefixExist, !ctx.isPrefixExist));
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.isCrossIconVisible);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf],
    styles: [".chip[_ngcontent-%COMP%]{box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;padding:6px 12px;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-md);font-size:14px;line-height:140%;letter-spacing:.25px;color:var(--grey-900);cursor:pointer}.chip--size_small[_ngcontent-%COMP%]{height:24px}.chip--size_medium[_ngcontent-%COMP%]{height:32px}.chip--size_large[_ngcontent-%COMP%]{height:40px}.chip__suffix-icon--visible[_ngcontent-%COMP%], .chip__prefix-icon--flex[_ngcontent-%COMP%]{display:flex}.chip__prefix-icon--hide[_ngcontent-%COMP%]{display:none}.chip--type_outlined[_ngcontent-%COMP%], .chip--type_filled[_ngcontent-%COMP%]{border-radius:4px}.chip--type_rounded-outlined[_ngcontent-%COMP%], .chip--type_rounded-filled[_ngcontent-%COMP%]{border-radius:20px}.chip--type_outlined[_ngcontent-%COMP%]{outline:1px solid var(--blue-grey-500);color:var(--blue-grey-800);border-radius:4px}.chip--type_outlined[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue-grey-800);background:var(--secondary-normal);color:var(--blue-grey-1000)}.chip--type_outlined[_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);color:var(--blue-grey-800);background:none}.chip--type_outlined[_ngcontent-%COMP%]:focus:not(:focus-visible){outline:1px solid var(--blue-grey-500);color:var(--blue-grey-800)}.chip--type_outlined--selected[_ngcontent-%COMP%]{outline:1px solid var(--blue-grey-800);color:var(--blue-grey-800);border-radius:4px}.chip--type_outlined--disabled[_ngcontent-%COMP%], .chip--type_outlined[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover, .chip--type_outlined[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{outline:1px solid var(--blue-grey-300);background:none;color:var(--grey-600);cursor:auto;border-radius:4px}.chip--type_rounded-outlined[_ngcontent-%COMP%]{border-radius:20px;outline:1px solid var(--blue-grey-500);color:var(--blue-grey-800)}.chip--type_rounded-outlined[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue-grey-800);background:var(--secondary-normal);color:var(--blue-grey-1000)}.chip--type_rounded-outlined[_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);color:var(--blue-grey-800);background:none}.chip--type_rounded-outlined[_ngcontent-%COMP%]:focus:not(:focus-visible){outline:1px solid var(--blue-grey-500)}.chip--type_rounded-outlined--selected[_ngcontent-%COMP%]{outline:1px solid var(--blue-grey-800);color:var(--blue-grey-800);border-radius:20px}.chip--type_rounded-outlined--disabled[_ngcontent-%COMP%]{outline:1px solid var(--blue-grey-300);background:none;border-radius:20px;color:var(--grey-600);cursor:auto}.chip--type_filled[_ngcontent-%COMP%]{background:var(--blue-grey-500);color:var(--blue-grey-1000);border-radius:4px}.chip--type_filled[_ngcontent-%COMP%]:hover{background:var(--grey-300)}.chip--type_filled[_ngcontent-%COMP%]:focus-visible{background:var(--blue-grey-500);outline:2px dashed var(--primary-800)}.chip--type_filled[_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.chip--type_filled--selected[_ngcontent-%COMP%]{background-color:var(--blue-grey-800);color:var(--white);border-radius:4px}.chip--type_filled--disabled[_ngcontent-%COMP%]{background-color:var(--blue-grey-300);color:var(--blue-grey-600);outline:none;cursor:auto;border-radius:4px}.chip--type_rounded-filled[_ngcontent-%COMP%]{background:var(--blue-grey-500);color:var(--blue-grey-1000);border-radius:20px}.chip--type_rounded-filled[_ngcontent-%COMP%]:hover{background:var(--grey-300)}.chip--type_rounded-filled[_ngcontent-%COMP%]:focus-visible{background:var(--blue-grey-500);outline:2px dashed var(--primary-800)}.chip--type_rounded-filled[_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.chip--type_rounded-filled--selected[_ngcontent-%COMP%]{background-color:var(--blue-grey-800);color:var(--white);border-radius:20px}.chip--type_rounded-filled--disabled[_ngcontent-%COMP%]{background-color:var(--blue-grey-300);color:var(--blue-grey-600);outline:none;cursor:auto;border-radius:20px}.chip--disabled[_ngcontent-%COMP%]{cursor:auto}.chip--gap-8[_ngcontent-%COMP%]{gap:8px}.chip--pr-8[_ngcontent-%COMP%]{padding-right:8px}.chip--pl-8[_ngcontent-%COMP%]{padding-left:8px}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipsComponent, [{
    type: Component,
    args: [{
      selector: "ada-chips",
      standalone: true,
      imports: [CommonModule],
      template: `<div [ngClass]="chipClass" tabindex="0" (click)="!isDisable && onChipsClick()">
  <div
    class="chip__prefix-icon"
    [ngClass]="{
      'chip__prefix-icon--flex': isPrefixExist,
      'chip__prefix-icon--hide': !isPrefixExist
    }"
  >
    <ng-content select="[prefix]"></ng-content>
  </div>
  <ng-content></ng-content>
  <div
    *ngIf="isCrossIconVisible"
    class="chip__suffix-icon chip__suffix-icon--visible"
    (click)="onCrossClick()"
  >
    <img
      [src]="getCrossIconSource()"
      alt="close
    Icon"
    />
  </div>
</div>
`,
      styles: [".chip{box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;padding:6px 12px;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-md);font-size:14px;line-height:140%;letter-spacing:.25px;color:var(--grey-900);cursor:pointer}.chip--size_small{height:24px}.chip--size_medium{height:32px}.chip--size_large{height:40px}.chip__suffix-icon--visible,.chip__prefix-icon--flex{display:flex}.chip__prefix-icon--hide{display:none}.chip--type_outlined,.chip--type_filled{border-radius:4px}.chip--type_rounded-outlined,.chip--type_rounded-filled{border-radius:20px}.chip--type_outlined{outline:1px solid var(--blue-grey-500);color:var(--blue-grey-800);border-radius:4px}.chip--type_outlined:hover{outline:1px solid var(--blue-grey-800);background:var(--secondary-normal);color:var(--blue-grey-1000)}.chip--type_outlined:focus-visible{outline:2px dashed var(--primary-800);color:var(--blue-grey-800);background:none}.chip--type_outlined:focus:not(:focus-visible){outline:1px solid var(--blue-grey-500);color:var(--blue-grey-800)}.chip--type_outlined--selected{outline:1px solid var(--blue-grey-800);color:var(--blue-grey-800);border-radius:4px}.chip--type_outlined--disabled,.chip--type_outlined :hover,.chip--type_outlined :focus{outline:1px solid var(--blue-grey-300);background:none;color:var(--grey-600);cursor:auto;border-radius:4px}.chip--type_rounded-outlined{border-radius:20px;outline:1px solid var(--blue-grey-500);color:var(--blue-grey-800)}.chip--type_rounded-outlined:hover{outline:1px solid var(--blue-grey-800);background:var(--secondary-normal);color:var(--blue-grey-1000)}.chip--type_rounded-outlined:focus-visible{outline:2px dashed var(--primary-800);color:var(--blue-grey-800);background:none}.chip--type_rounded-outlined:focus:not(:focus-visible){outline:1px solid var(--blue-grey-500)}.chip--type_rounded-outlined--selected{outline:1px solid var(--blue-grey-800);color:var(--blue-grey-800);border-radius:20px}.chip--type_rounded-outlined--disabled{outline:1px solid var(--blue-grey-300);background:none;border-radius:20px;color:var(--grey-600);cursor:auto}.chip--type_filled{background:var(--blue-grey-500);color:var(--blue-grey-1000);border-radius:4px}.chip--type_filled:hover{background:var(--grey-300)}.chip--type_filled:focus-visible{background:var(--blue-grey-500);outline:2px dashed var(--primary-800)}.chip--type_filled:focus:not(:focus-visible){outline:none}.chip--type_filled--selected{background-color:var(--blue-grey-800);color:var(--white);border-radius:4px}.chip--type_filled--disabled{background-color:var(--blue-grey-300);color:var(--blue-grey-600);outline:none;cursor:auto;border-radius:4px}.chip--type_rounded-filled{background:var(--blue-grey-500);color:var(--blue-grey-1000);border-radius:20px}.chip--type_rounded-filled:hover{background:var(--grey-300)}.chip--type_rounded-filled:focus-visible{background:var(--blue-grey-500);outline:2px dashed var(--primary-800)}.chip--type_rounded-filled:focus:not(:focus-visible){outline:none}.chip--type_rounded-filled--selected{background-color:var(--blue-grey-800);color:var(--white);border-radius:20px}.chip--type_rounded-filled--disabled{background-color:var(--blue-grey-300);color:var(--blue-grey-600);outline:none;cursor:auto;border-radius:20px}.chip--disabled{cursor:auto}.chip--gap-8{gap:8px}.chip--pr-8{padding-right:8px}.chip--pl-8{padding-left:8px}\n"]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    size: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    isDisable: [{
      type: Input
    }],
    isCrossIconVisible: [{
      type: Input
    }],
    isSelected: [{
      type: Input
    }],
    chipSelected: [{
      type: Output
    }],
    closeChip: [{
      type: Output
    }],
    prefixIcon: [{
      type: ViewChild,
      args: ["prefixIcon", {
        static: false
      }]
    }]
  });
})();
var TableStyleDirective = class _TableStyleDirective {
  static ɵfac = function TableStyleDirective_Factory(t) {
    return new (t || _TableStyleDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TableStyleDirective,
    selectors: [["", "adaTableStyle", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableStyleDirective, [{
    type: Directive,
    args: [{
      selector: "[adaTableStyle]",
      standalone: true
    }]
  }], null, null);
})();
var AlignCellContentDirective = class _AlignCellContentDirective {
  el;
  renderer;
  align = "center";
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    if (this.align == "right") {
      this.renderer.addClass(this.el.nativeElement, "align--right");
    }
    if (this.align == "left") {
      this.renderer.addClass(this.el.nativeElement, "align--left");
    }
    if (this.align == "center") {
      this.renderer.addClass(this.el.nativeElement, "align--center");
    }
  }
  static ɵfac = function AlignCellContentDirective_Factory(t) {
    return new (t || _AlignCellContentDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _AlignCellContentDirective,
    selectors: [["", "alignCellContent", ""]],
    inputs: {
      align: ["alignCellContent", "align"]
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlignCellContentDirective, [{
    type: Directive,
    args: [{
      selector: "[alignCellContent]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    align: [{
      type: Input,
      args: ["alignCellContent"]
    }]
  });
})();
var TableRowDirective = class _TableRowDirective {
  el;
  renderer;
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, "table--row");
  }
  static ɵfac = function TableRowDirective_Factory(t) {
    return new (t || _TableRowDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TableRowDirective,
    selectors: [["", "tableRow", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableRowDirective, [{
    type: Directive,
    args: [{
      selector: "[tableRow]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], null);
})();
var TableDataDirective = class _TableDataDirective {
  el;
  renderer;
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, "table--cell");
  }
  static ɵfac = function TableDataDirective_Factory(t) {
    return new (t || _TableDataDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TableDataDirective,
    selectors: [["", "tableData", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableDataDirective, [{
    type: Directive,
    args: [{
      selector: "[tableData]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], null);
})();
var TableBodyDirective = class _TableBodyDirective {
  el;
  renderer;
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, "table--body");
  }
  static ɵfac = function TableBodyDirective_Factory(t) {
    return new (t || _TableBodyDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TableBodyDirective,
    selectors: [["", "tableBody", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableBodyDirective, [{
    type: Directive,
    args: [{
      selector: "[tableBody]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], null);
})();
var TableHeaderDirective = class _TableHeaderDirective {
  el;
  renderer;
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, "table--header");
  }
  static ɵfac = function TableHeaderDirective_Factory(t) {
    return new (t || _TableHeaderDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TableHeaderDirective,
    selectors: [["", "tableHeader", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableHeaderDirective, [{
    type: Directive,
    args: [{
      selector: "[tableHeader]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], null);
})();
var TableHeadingCellDirective = class _TableHeadingCellDirective {
  el;
  renderer;
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, "table--cell--hd");
  }
  static ɵfac = function TableHeadingCellDirective_Factory(t) {
    return new (t || _TableHeadingCellDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TableHeadingCellDirective,
    selectors: [["", "tableHeadingCell", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableHeadingCellDirective, [{
    type: Directive,
    args: [{
      selector: "[tableHeadingCell]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], null);
})();
var TableComponent = class _TableComponent {
  constructor() {
  }
  isTableDisabled = false;
  static ɵfac = function TableComponent_Factory(t) {
    return new (t || _TableComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TableComponent,
    selectors: [["ada-table"]],
    inputs: {
      isTableDisabled: "isTableDisabled"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c4,
    decls: 2,
    vars: 0,
    template: function TableComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "table");
        ɵɵprojection(1);
        ɵɵelementEnd();
      }
    },
    dependencies: [CommonModule],
    styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   table[_ngcontent-%COMP%]{border-collapse:collapse;border-spacing:0;display:block;width:100%}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableComponent, [{
    type: Component,
    args: [{
      selector: "ada-table",
      standalone: true,
      imports: [CommonModule, AlignCellContentDirective, TableBodyDirective, TableDataDirective, TableHeaderDirective, TableHeadingCellDirective, TableRowDirective, TableStyleDirective],
      template: "<table>\n  <ng-content></ng-content>\n</table>\n",
      styles: [":host{display:block}:host table{border-collapse:collapse;border-spacing:0;display:block;width:100%}\n"]
    }]
  }], () => [], {
    isTableDisabled: [{
      type: Input
    }]
  });
})();
var CardsComponent = class _CardsComponent {
  notActionable = false;
  get hostClass() {
    return this.notActionable ? "notActionable" : "";
  }
  constructor() {
  }
  ngOnInit() {
  }
  ngOnChanges() {
  }
  static ɵfac = function CardsComponent_Factory(t) {
    return new (t || _CardsComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CardsComponent,
    selectors: [["ada-card"]],
    hostVars: 2,
    hostBindings: function CardsComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.hostClass);
      }
    },
    inputs: {
      notActionable: "notActionable"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c4,
    decls: 2,
    vars: 0,
    template: function CardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div");
        ɵɵprojection(1);
        ɵɵelementEnd();
      }
    },
    dependencies: [CommonModule],
    styles: ["[_nghost-%COMP%]{display:block;background:var(--white);box-shadow:var(--shdw-bluegrey-lvl-1);border-radius:8px}[_nghost-%COMP%]:hover{box-shadow:var(--shdw-bluegrey-lvl-2)}[_nghost-%COMP%]:active{box-shadow:var(--shdw-bluegrey-lvl-3)}.notActionable[_nghost-%COMP%], .notActionable   [_nghost-%COMP%]{border-radius:4px;background:var(--white);border:1px solid var(--blue-grey-500)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardsComponent, [{
    type: Component,
    args: [{
      selector: "ada-card",
      standalone: true,
      imports: [CommonModule],
      template: "<div>\n  <ng-content></ng-content>\n</div>",
      styles: [":host{display:block;background:var(--white);box-shadow:var(--shdw-bluegrey-lvl-1);border-radius:8px}:host:hover{box-shadow:var(--shdw-bluegrey-lvl-2)}:host:active{box-shadow:var(--shdw-bluegrey-lvl-3)}:host-context(.notActionable){border-radius:4px;background:var(--white);border:1px solid var(--blue-grey-500)}\n"]
    }]
  }], () => [], {
    notActionable: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var Colors;
(function(Colors2) {
  Colors2["GREEN"] = "#16AF24";
  Colors2["GREY"] = "#B6BBC2";
  Colors2["RED"] = "#DC362E";
})(Colors || (Colors = {}));
var AvatarNotification = class {
  notificationStatus = false;
  notificationBadge = false;
  constructor(badgeIndicatorSize) {
    if (badgeIndicatorSize === "xs" || badgeIndicatorSize === "xxs") {
      this.setNotificationBadgeIndicator(true);
    }
  }
  showNotification() {
    return this.notificationStatus;
  }
  showBadgeIndicator() {
    return this.notificationBadge;
  }
  setNotificationStatus(status) {
    this.notificationStatus = status;
  }
  setNotificationBadgeIndicator(status) {
    this.notificationBadge = status;
  }
};
var COLOR_VAR = "--primary-15";
var BadgeComponent = class _BadgeComponent {
  renderer;
  badgeContent;
  backgroundColor;
  textColor;
  size = "s";
  isOutline = false;
  _hostClass;
  _backgroundColor;
  _textColor;
  constructor(renderer, badgeContent) {
    this.renderer = renderer;
    this.badgeContent = badgeContent;
  }
  ngAfterContentChecked() {
    this._textColor = this.textColor;
    this._backgroundColor = this.backgroundColor ? this.backgroundColor : this.getColorValue(COLOR_VAR);
    if (!this.badgeContent.nativeElement.textContent.trim()) {
      this._hostClass = ` badge--indicator badge--indicator--${this.size} ${this.isOutline ? "badge--indicator--outline" : ""} `;
    } else {
      this._hostClass = `${this.isOutline ? "badge--indicator--outline-badge" : ""}`;
    }
  }
  getColorValue(colorVariable) {
    return getComputedStyle(document.documentElement).getPropertyValue(colorVariable);
  }
  static ɵfac = function BadgeComponent_Factory(t) {
    return new (t || _BadgeComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BadgeComponent,
    selectors: [["ada-badge"]],
    hostVars: 6,
    hostBindings: function BadgeComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx._hostClass);
        ɵɵstyleProp("background-color", ctx._backgroundColor)("color", ctx._textColor);
      }
    },
    inputs: {
      backgroundColor: "backgroundColor",
      textColor: "textColor",
      size: "size",
      isOutline: "isOutline"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c4,
    decls: 1,
    vars: 0,
    template: function BadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{text-align:center;padding:0 4px;border-radius:8px;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-md);font-style:normal;font-size:var(--bd-fnt-sz-4);line-height:130%;letter-spacing:.25px;color:var(--white)}.badge--indicator[_nghost-%COMP%]{display:inline-block;padding:0;border-radius:50%;border:1px solid var(--white)}.badge--indicator--s[_nghost-%COMP%]{display:inline-block;height:6px;width:6px}.badge--indicator--m[_nghost-%COMP%]{display:inline-block;height:10px;width:10px}.badge--indicator--outline[_nghost-%COMP%]{display:inline-block;padding:0;border-radius:50%;border:1px solid var(--white)}.badge--indicator--outline-badge[_nghost-%COMP%]{text-align:center;padding:0 4px;border-radius:8px;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-md);font-size:var(--bd-fnt-sz-4);font-style:normal;line-height:var(--bd-fnt-ln-hgt-5);letter-spacing:var(--hd-fnt-2-ltr-spc);color:var(--white);border:1px solid var(--white)}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeComponent, [{
    type: Component,
    args: [{
      selector: "ada-badge",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>\n",
      styles: [":host{text-align:center;padding:0 4px;border-radius:8px;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-md);font-style:normal;font-size:var(--bd-fnt-sz-4);line-height:130%;letter-spacing:.25px;color:var(--white)}:host.badge--indicator{display:inline-block;padding:0;border-radius:50%;border:1px solid var(--white)}:host.badge--indicator--s{display:inline-block;height:6px;width:6px}:host.badge--indicator--m{display:inline-block;height:10px;width:10px}:host.badge--indicator--outline{display:inline-block;padding:0;border-radius:50%;border:1px solid var(--white)}:host.badge--indicator--outline-badge{text-align:center;padding:0 4px;border-radius:8px;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-md);font-size:var(--bd-fnt-sz-4);font-style:normal;line-height:var(--bd-fnt-ln-hgt-5);letter-spacing:var(--hd-fnt-2-ltr-spc);color:var(--white);border:1px solid var(--white)}\n"]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    backgroundColor: [{
      type: Input
    }],
    textColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    isOutline: [{
      type: Input
    }],
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    _backgroundColor: [{
      type: HostBinding,
      args: ["style.background-color"]
    }],
    _textColor: [{
      type: HostBinding,
      args: ["style.color"]
    }]
  });
})();
var AvatarComponent = class _AvatarComponent {
  cd;
  shape = "circle";
  size = "xl";
  status = "offline";
  showStatus = false;
  notificationCount = 0;
  value = "";
  imageType = "icon";
  _hostBinding;
  content;
  avatar;
  avatar_notification = "";
  avatar_type = "";
  avatar_status = "";
  avatar_text_content = "";
  initials = "";
  colors = Colors;
  constructor(cd) {
    this.cd = cd;
  }
  ngAfterContentChecked() {
    this.avatar_notification = `avatar-notification avatar-notification--${this.shape}--${this.size}`;
    this.avatar_type = this.imageType === "icon" ? `avatar-icon avatar-icon--${this.shape}--${this.size}` : `avatar-profile avatar-profile--${this.shape}`;
    this.avatar_status = `avatar-status avatar-status--${this.shape}--${this.size}`;
    this._hostBinding = `profile__icon profile__icon--${this.shape} profile__icon--${this.shape}--${this.size}`;
    this.updateNotificationIndicator();
  }
  ngOnChanges() {
    if (!this.isImage) {
      this.updateInitials();
    }
    this.updateNotificationIndicator();
  }
  ngAfterViewInit() {
    if (!this.isImage) {
      this.updateInitials();
    }
    this.updateNotificationIndicator();
  }
  updateInitials() {
    this.avatar_text_content = `avatar_content--${this.size}`;
    this.initials = this.getInitials(this.value);
  }
  getInitials(text) {
    const words = text.trim().split(/\s+/);
    const initials = this.size === "xxs" ? words[0][0] : words.length > 1 ? words.slice(0, 2).map((word) => word[0]).join("") : words[0].substring(0, 2);
    return initials.toUpperCase();
  }
  get isImage() {
    return /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i.test(this.value);
  }
  updateNotificationIndicator() {
    if (this.notificationCount > 0) {
      this.avatar = new AvatarNotification(this.size);
    }
  }
  static ɵfac = function AvatarComponent_Factory(t) {
    return new (t || _AvatarComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AvatarComponent,
    selectors: [["ada-avatar"]],
    viewQuery: function AvatarComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c23, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function AvatarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx._hostBinding);
      }
    },
    inputs: {
      shape: "shape",
      size: "size",
      status: "status",
      showStatus: "showStatus",
      notificationCount: "notificationCount",
      value: "value",
      imageType: "imageType"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [[3, "ngClass"], [1, "avatar"], ["alt", "avatar", 3, "src", "ngClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "ngClass", "backgroundColor", 4, "ngIf"], [3, "backgroundColor", "ngClass", "size", 4, "ngIf"], ["alt", "avatar", 3, "src", "ngClass"], [3, "ngClass", "backgroundColor"], [3, "backgroundColor", "ngClass", "size"]],
    template: function AvatarComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0)(1, "div", 1);
        ɵɵtemplate(2, AvatarComponent_img_2_Template, 1, 2, "img", 2)(3, AvatarComponent_span_3_Template, 2, 2, "span", 3);
        ɵɵelementEnd();
        ɵɵtemplate(4, AvatarComponent_ada_badge_4_Template, 2, 3, "ada-badge", 4)(5, AvatarComponent_ada_badge_5_Template, 1, 3, "ada-badge", 5);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c24, ctx.imageType === "profile"));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.isImage);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.isImage);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.notificationCount > 0);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showStatus);
      }
    },
    dependencies: [BadgeComponent, CommonModule, NgClass, NgIf],
    styles: ["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;position:relative}[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.profile__icon[_nghost-%COMP%]{position:relative;background-color:var(--primary-100);cursor:pointer}.profile__icon--circle[_nghost-%COMP%]{border-radius:50%}.profile__icon--circle[_nghost-%COMP%]:hover{outline:2px solid var(--primary-300)}.profile__icon--circle--xl[_nghost-%COMP%]{height:56px;width:56px}.profile__icon--circle--l[_nghost-%COMP%]{height:48px;width:48px}.profile__icon--circle--m[_nghost-%COMP%]{height:40px;width:40px}.profile__icon--circle--s[_nghost-%COMP%]{height:32px;width:32px}.profile__icon--circle--xs[_nghost-%COMP%]{height:24px;width:24px}.profile__icon--circle--xxs[_nghost-%COMP%]{height:20px;width:20px}.profile__icon--square[_nghost-%COMP%]{margin:6px}.profile__icon--square[_nghost-%COMP%]:hover{outline:2px solid var(--primary-300);margin:6px}.profile__icon--square--xl[_nghost-%COMP%]{border-radius:14px;height:56px;width:56px}.profile__icon--square--l[_nghost-%COMP%]{border-radius:12px;height:48px;width:48px}.profile__icon--square--m[_nghost-%COMP%]{border-radius:10px;height:40px;width:40px}.profile__icon--square--s[_nghost-%COMP%]{border-radius:8px;height:32px;width:32px}.profile__icon--square--xs[_nghost-%COMP%]{border-radius:6px;height:24px;width:24px}.profile__icon--square--xxs[_nghost-%COMP%]{border-radius:4px;height:20px;width:20px}[_nghost-%COMP%]   .avatar-status[_ngcontent-%COMP%]{position:absolute}[_nghost-%COMP%]   .avatar-status--circle--xl[_ngcontent-%COMP%]{top:44px;left:44px}[_nghost-%COMP%]   .avatar-status--circle--l[_ngcontent-%COMP%]{top:38px;left:38px}[_nghost-%COMP%]   .avatar-status--circle--m[_ngcontent-%COMP%]{top:30px;left:30px}[_nghost-%COMP%]   .avatar-status--circle--s[_ngcontent-%COMP%]{top:22px;left:22px}[_nghost-%COMP%]   .avatar-status--circle--xs[_ngcontent-%COMP%]{top:18px;left:18px}[_nghost-%COMP%]   .avatar-status--circle--xxs[_ngcontent-%COMP%]{top:14px;left:14px}[_nghost-%COMP%]   .avatar-status--square--xl[_ngcontent-%COMP%]{top:47px;left:47px}[_nghost-%COMP%]   .avatar-status--square--l[_ngcontent-%COMP%]{top:39px;left:39px}[_nghost-%COMP%]   .avatar-status--square--m[_ngcontent-%COMP%]{top:31px;left:31px}[_nghost-%COMP%]   .avatar-status--square--s[_ngcontent-%COMP%]{top:23px;left:23px}[_nghost-%COMP%]   .avatar-status--square--xs[_ngcontent-%COMP%]{top:19px;left:19px}[_nghost-%COMP%]   .avatar-status--square--xxs[_ngcontent-%COMP%]{top:15px;left:15px}[_nghost-%COMP%]   .avatar-notification[_ngcontent-%COMP%]{position:absolute;border:1px solid var(--white)}[_nghost-%COMP%]   .avatar-notification--circle--xl[_ngcontent-%COMP%]{top:0;left:45px}[_nghost-%COMP%]   .avatar-notification--circle--l[_ngcontent-%COMP%]{top:0;left:40px}[_nghost-%COMP%]   .avatar-notification--circle--m[_ngcontent-%COMP%]{top:-4px;left:28px}[_nghost-%COMP%]   .avatar-notification--circle--s[_ngcontent-%COMP%]{top:-8px;left:24px}[_nghost-%COMP%]   .avatar-notification--circle--xs[_ngcontent-%COMP%]{top:0;left:18px}[_nghost-%COMP%]   .avatar-notification--circle--xxs[_ngcontent-%COMP%]{top:-1px;left:15px}[_nghost-%COMP%]   .avatar-notification--square--xl[_ngcontent-%COMP%]{left:46px;top:-6px}[_nghost-%COMP%]   .avatar-notification--square--l[_ngcontent-%COMP%]{top:-6px;left:39px}[_nghost-%COMP%]   .avatar-notification--square--m[_ngcontent-%COMP%]{top:-8px;left:31px}[_nghost-%COMP%]   .avatar-notification--square--s[_ngcontent-%COMP%]{top:-8px;left:23px}[_nghost-%COMP%]   .avatar-notification--square--xs[_ngcontent-%COMP%]{top:-1px;left:19px}[_nghost-%COMP%]   .avatar-notification--square--xxs[_ngcontent-%COMP%]{top:-1px;left:15px}[_nghost-%COMP%]   .avatar_content--xl[_ngcontent-%COMP%], [_nghost-%COMP%]   .avatar_content--m[_ngcontent-%COMP%], [_nghost-%COMP%]   .avatar_content--xs[_ngcontent-%COMP%], [_nghost-%COMP%]   .avatar_content--xxs[_ngcontent-%COMP%], [_nghost-%COMP%]   .avatar_content--s[_ngcontent-%COMP%]{font-family:var(--bd-fnt-fm);line-height:var(--hd-fnt-ln-hgt-3);letter-spacing:.5px;font-weight:var(--bd-fnt-wt-rg);font-size:var(--hd-fnt-sz-4)}[_nghost-%COMP%]   .avatar_content--l[_ngcontent-%COMP%]{font-family:var(--bd-fnt-fm);line-height:var(--hd-fnt-ln-hgt-3);letter-spacing:.5px;font-weight:var(--bd-fnt-wt-rg);font-size:var(--hd-fnt-sz-4)}[_nghost-%COMP%]   .avatar_content--m[_ngcontent-%COMP%], [_nghost-%COMP%]   .avatar_content--xs[_ngcontent-%COMP%], [_nghost-%COMP%]   .avatar_content--xxs[_ngcontent-%COMP%], [_nghost-%COMP%]   .avatar_content--s[_ngcontent-%COMP%]{font-weight:var(--bd-fnt-wt-md);font-size:var(--hd-fnt-sz-6)}[_nghost-%COMP%]   .avatar_content--s[_ngcontent-%COMP%]{font-weight:var(--bd-fnt-wt-md);font-size:var(--hd-fnt-sz-7)}[_nghost-%COMP%]   .avatar_content--xs[_ngcontent-%COMP%], [_nghost-%COMP%]   .avatar_content--xxs[_ngcontent-%COMP%]{font-weight:var(--bd-fnt-wt-md);font-size:var(--hd-fnt-sz-8)}[_nghost-%COMP%]   .avatar-icon[_ngcontent-%COMP%]{background-color:var(--primary-100)}[_nghost-%COMP%]   .avatar-icon--circle[_ngcontent-%COMP%]{border-radius:50%}[_nghost-%COMP%]   .avatar-icon--circle--xl[_ngcontent-%COMP%]{height:32px;width:32px}[_nghost-%COMP%]   .avatar-icon--circle--l[_ngcontent-%COMP%]{height:28px;width:28px}[_nghost-%COMP%]   .avatar-icon--circle--m[_ngcontent-%COMP%]{height:20px;width:20px}[_nghost-%COMP%]   .avatar-icon--circle--s[_ngcontent-%COMP%]{height:16px;width:16px}[_nghost-%COMP%]   .avatar-icon--circle--xs[_ngcontent-%COMP%]{height:12px;width:12px}[_nghost-%COMP%]   .avatar-icon--circle--xxs[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%]   .avatar-icon--square[_ngcontent-%COMP%]{border-radius:inherit}[_nghost-%COMP%]   .avatar-icon--square--xl[_ngcontent-%COMP%]{height:32px;width:32px}[_nghost-%COMP%]   .avatar-icon--square--l[_ngcontent-%COMP%]{height:28px;width:28px}[_nghost-%COMP%]   .avatar-icon--square--m[_ngcontent-%COMP%]{height:20px;width:20px}[_nghost-%COMP%]   .avatar-icon--square--s[_ngcontent-%COMP%]{height:16px;width:16px}[_nghost-%COMP%]   .avatar-icon--square--xs[_ngcontent-%COMP%]{height:12px;width:12px}[_nghost-%COMP%]   .avatar-icon--square--xxs[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]{height:inherit;width:inherit;border-radius:inherit}[_nghost-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{height:inherit;width:inherit;border-radius:inherit}[_nghost-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]   .avatar-profile--circle[_ngcontent-%COMP%]{border-radius:50%;height:inherit;width:inherit}[_nghost-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]   .avatar-profile--square[_ngcontent-%COMP%]{border-radius:inherit;height:inherit;width:inherit}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarComponent, [{
    type: Component,
    args: [{
      selector: "ada-avatar",
      standalone: true,
      imports: [BadgeComponent, CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div [ngClass]="{ 'avatar-wrapper': imageType === 'profile' }">
  <div class="avatar">
    <img *ngIf="isImage" [src]="value" alt="avatar" [ngClass]="avatar_type" />
    <span *ngIf="!isImage" [ngClass]="avatar_text_content">{{ initials }}</span>
  </div>

  <ada-badge
    [ngClass]="avatar_notification"
    *ngIf="notificationCount > 0"
    [backgroundColor]="colors.RED"
  >
    {{ avatar.showBadgeIndicator() ? "" : notificationCount }}
  </ada-badge>
  <ada-badge
    [backgroundColor]="status === 'online' ? colors.GREEN : colors.GREY"
    [ngClass]="avatar_status"
    *ngIf="showStatus"
    [size]="size === 'xs' || size === 'xxs' ? 's' : 'm'"
  ></ada-badge>
</div>
`,
      styles: [":host{display:flex;justify-content:center;align-items:center;position:relative}:host:focus-visible{outline:2px dashed var(--primary-800)}:host:focus:not(:focus-visible){outline:none}:host.profile__icon{position:relative;background-color:var(--primary-100);cursor:pointer}:host.profile__icon--circle{border-radius:50%}:host.profile__icon--circle:hover{outline:2px solid var(--primary-300)}:host.profile__icon--circle--xl{height:56px;width:56px}:host.profile__icon--circle--l{height:48px;width:48px}:host.profile__icon--circle--m{height:40px;width:40px}:host.profile__icon--circle--s{height:32px;width:32px}:host.profile__icon--circle--xs{height:24px;width:24px}:host.profile__icon--circle--xxs{height:20px;width:20px}:host.profile__icon--square{margin:6px}:host.profile__icon--square:hover{outline:2px solid var(--primary-300);margin:6px}:host.profile__icon--square--xl{border-radius:14px;height:56px;width:56px}:host.profile__icon--square--l{border-radius:12px;height:48px;width:48px}:host.profile__icon--square--m{border-radius:10px;height:40px;width:40px}:host.profile__icon--square--s{border-radius:8px;height:32px;width:32px}:host.profile__icon--square--xs{border-radius:6px;height:24px;width:24px}:host.profile__icon--square--xxs{border-radius:4px;height:20px;width:20px}:host .avatar-status{position:absolute}:host .avatar-status--circle--xl{top:44px;left:44px}:host .avatar-status--circle--l{top:38px;left:38px}:host .avatar-status--circle--m{top:30px;left:30px}:host .avatar-status--circle--s{top:22px;left:22px}:host .avatar-status--circle--xs{top:18px;left:18px}:host .avatar-status--circle--xxs{top:14px;left:14px}:host .avatar-status--square--xl{top:47px;left:47px}:host .avatar-status--square--l{top:39px;left:39px}:host .avatar-status--square--m{top:31px;left:31px}:host .avatar-status--square--s{top:23px;left:23px}:host .avatar-status--square--xs{top:19px;left:19px}:host .avatar-status--square--xxs{top:15px;left:15px}:host .avatar-notification{position:absolute;border:1px solid var(--white)}:host .avatar-notification--circle--xl{top:0;left:45px}:host .avatar-notification--circle--l{top:0;left:40px}:host .avatar-notification--circle--m{top:-4px;left:28px}:host .avatar-notification--circle--s{top:-8px;left:24px}:host .avatar-notification--circle--xs{top:0;left:18px}:host .avatar-notification--circle--xxs{top:-1px;left:15px}:host .avatar-notification--square--xl{left:46px;top:-6px}:host .avatar-notification--square--l{top:-6px;left:39px}:host .avatar-notification--square--m{top:-8px;left:31px}:host .avatar-notification--square--s{top:-8px;left:23px}:host .avatar-notification--square--xs{top:-1px;left:19px}:host .avatar-notification--square--xxs{top:-1px;left:15px}:host .avatar_content--xl,:host .avatar_content--m,:host .avatar_content--xs,:host .avatar_content--xxs,:host .avatar_content--s{font-family:var(--bd-fnt-fm);line-height:var(--hd-fnt-ln-hgt-3);letter-spacing:.5px;font-weight:var(--bd-fnt-wt-rg);font-size:var(--hd-fnt-sz-4)}:host .avatar_content--l{font-family:var(--bd-fnt-fm);line-height:var(--hd-fnt-ln-hgt-3);letter-spacing:.5px;font-weight:var(--bd-fnt-wt-rg);font-size:var(--hd-fnt-sz-4)}:host .avatar_content--m,:host .avatar_content--xs,:host .avatar_content--xxs,:host .avatar_content--s{font-weight:var(--bd-fnt-wt-md);font-size:var(--hd-fnt-sz-6)}:host .avatar_content--s{font-weight:var(--bd-fnt-wt-md);font-size:var(--hd-fnt-sz-7)}:host .avatar_content--xs,:host .avatar_content--xxs{font-weight:var(--bd-fnt-wt-md);font-size:var(--hd-fnt-sz-8)}:host .avatar-icon{background-color:var(--primary-100)}:host .avatar-icon--circle{border-radius:50%}:host .avatar-icon--circle--xl{height:32px;width:32px}:host .avatar-icon--circle--l{height:28px;width:28px}:host .avatar-icon--circle--m{height:20px;width:20px}:host .avatar-icon--circle--s{height:16px;width:16px}:host .avatar-icon--circle--xs{height:12px;width:12px}:host .avatar-icon--circle--xxs{height:10px;width:10px}:host .avatar-icon--square{border-radius:inherit}:host .avatar-icon--square--xl{height:32px;width:32px}:host .avatar-icon--square--l{height:28px;width:28px}:host .avatar-icon--square--m{height:20px;width:20px}:host .avatar-icon--square--s{height:16px;width:16px}:host .avatar-icon--square--xs{height:12px;width:12px}:host .avatar-icon--square--xxs{height:10px;width:10px}:host .avatar-wrapper{height:inherit;width:inherit;border-radius:inherit}:host .avatar-wrapper .avatar{height:inherit;width:inherit;border-radius:inherit}:host .avatar-wrapper .avatar-profile--circle{border-radius:50%;height:inherit;width:inherit}:host .avatar-wrapper .avatar-profile--square{border-radius:inherit;height:inherit;width:inherit}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    shape: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    status: [{
      type: Input
    }],
    showStatus: [{
      type: Input
    }],
    notificationCount: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    imageType: [{
      type: Input
    }],
    _hostBinding: [{
      type: HostBinding,
      args: ["class"]
    }],
    content: [{
      type: ViewChild,
      args: ["myContent"]
    }]
  });
})();
var ListComponent = class _ListComponent {
  elementRef;
  isDisable = false;
  isSelected = false;
  contentAlignment = "center";
  listType = "Default";
  listDirection = "left";
  isNonClickable = false;
  hasSubtitleContent = false;
  hasAvatar = false;
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  ngAfterContentChecked() {
    const subtitleElements = this.elementRef.nativeElement.querySelectorAll("[subtitle]");
    this.hasSubtitleContent = subtitleElements.length > 0;
    const AvatarElements = this.elementRef.nativeElement.querySelectorAll("[avatar]");
    this.hasAvatar = AvatarElements.length > 0;
  }
  ngOnInit() {
  }
  static ɵfac = function ListComponent_Factory(t) {
    return new (t || _ListComponent)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ListComponent,
    selectors: [["ada-list"]],
    inputs: {
      isDisable: "isDisable",
      isSelected: "isSelected",
      contentAlignment: "contentAlignment",
      listType: "listType",
      listDirection: "listDirection",
      isNonClickable: "isNonClickable"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c27,
    decls: 10,
    vars: 10,
    consts: [["tabindex", "0", 1, "list-item", 3, "ngClass"], [1, "list-item__profile"], [1, "list-item__title"], [1, "list-item__title__text"], [1, "list-item__title__subtext"], [1, "list-item__checkbox"]],
    template: function ListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c25);
        ɵɵelementStart(0, "div", 0)(1, "div", 1);
        ɵɵprojection(2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 2)(4, "div", 3);
        ɵɵprojection(5, 1);
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 4);
        ɵɵprojection(7, 2);
        ɵɵelementEnd()();
        ɵɵelementStart(8, "div", 5);
        ɵɵprojection(9, 3, ["class", "checkbox"]);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction8(1, _c26, ctx.listDirection === "right", ctx.listType === "Comfortable", ctx.listType === "Compact", ctx.isSelected && !ctx.isNonClickable && !ctx.isDisable, ctx.contentAlignment === "top", !ctx.hasAvatar, ctx.isNonClickable, ctx.isDisable));
      }
    },
    dependencies: [CommonModule, NgClass],
    styles: [".list-item[_ngcontent-%COMP%]{background-color:var(--white);display:flex;cursor:pointer;align-items:center;width:inherit;gap:10px;border-bottom:1px solid var(--grey-100);padding:8px 16px}.list-item[_ngcontent-%COMP%]:hover{background-color:var(--blue-grey-300)}.list-item[_ngcontent-%COMP%]:focus{outline:none}.list-item[_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.list-item[_ngcontent-%COMP%]   .list-item__profile[_ngcontent-%COMP%], .list-item[_ngcontent-%COMP%]   .list-item__profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:32px;width:32px}.list-item[_ngcontent-%COMP%]   .list-item__title[_ngcontent-%COMP%]{width:-webkit-fill-available;display:flex;flex-direction:column}.list-item[_ngcontent-%COMP%]   .list-item__title[_ngcontent-%COMP%]   .list-item__title__text[_ngcontent-%COMP%]{font-family:var(--bd-fnt-fm);line-height:var(--bd-fnt-ln-hgt-2);font-size:var(--bd-fnt-sz-2);font-weight:var(--bd-fnt-wt-rg);color:var(--primary-1000)}.list-item[_ngcontent-%COMP%]   .list-item__title[_ngcontent-%COMP%]   .list-item__title__subtext[_ngcontent-%COMP%]{font-family:var(--bd-fnt-fm);line-height:var(--bd-fnt-ln-hgt-4);font-size:var(--bd-fnt-sz-4);font-weight:var(--bd-fnt-wt-rg);color:var(--primary-900)}.list-item[_ngcontent-%COMP%]   .list-item__checkbox[_ngcontent-%COMP%]{margin:-24px;padding-bottom:8px;padding-right:8px}.list-item[_ngcontent-%COMP%]   .list-item__checkbox[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{padding:4px;height:24px;width:24px}.disable[_ngcontent-%COMP%]{background-color:var(--white)}.disable[_ngcontent-%COMP%]   .list-item__profile[_ngcontent-%COMP%]{pointer-events:none}.disable[_ngcontent-%COMP%]   .list-item__title[_ngcontent-%COMP%]{opacity:.5;color:var(--grey-600)}.disable[_ngcontent-%COMP%]   .list-item__title[_ngcontent-%COMP%]   .list-item__title__text[_ngcontent-%COMP%], .disable[_ngcontent-%COMP%]   .list-item__title[_ngcontent-%COMP%]   .list-item__title__subtext[_ngcontent-%COMP%]{color:var(--grey-600)}.disable[_ngcontent-%COMP%]   .list-item__checkbox[_ngcontent-%COMP%]{opacity:.5;color:var(--grey-500)}.disable[_ngcontent-%COMP%]:hover{background-color:var(--white)}.disable[_ngcontent-%COMP%]:focus{outline:none}.disable[_ngcontent-%COMP%]:focus-visible{outline:unset}.disable[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{background-color:var(--white)}.selected[_ngcontent-%COMP%]{background-color:var(--primary-100)}.align-top[_ngcontent-%COMP%]   .list-item__title[_ngcontent-%COMP%]{align-self:flex-start}.align-top[_ngcontent-%COMP%]   .list-item__checkbox[_ngcontent-%COMP%]{align-self:flex-start;padding-right:8px}.align-top[_ngcontent-%COMP%]   .list-item__profile[_ngcontent-%COMP%]{align-self:flex-start}.no-avatar[_ngcontent-%COMP%], .align-right[_ngcontent-%COMP%]{flex-direction:row-reverse}.comfortable-type[_ngcontent-%COMP%]{padding:12px 16px}.compact-type[_ngcontent-%COMP%]{padding:4px 16px}.non-clickable[_ngcontent-%COMP%]{cursor:unset}.non-clickable[_ngcontent-%COMP%]:hover{background-color:var(--white)}.non-clickable[_ngcontent-%COMP%]:focus{outline:none}.non-clickable[_ngcontent-%COMP%]:focus-visible{outline:unset}.non-clickable[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{background-color:var(--white)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{
      selector: "ada-list",
      standalone: true,
      imports: [CheckboxComponent, CommonModule, AvatarComponent],
      template: `<div
  class="list-item"
  tabindex="0"
  [ngClass]="{
    'align-right': listDirection === 'right',
    'comfortable-type': listType === 'Comfortable',
    'compact-type': listType === 'Compact',
    selected: isSelected && !this.isNonClickable && !this.isDisable,
    'align-top': this.contentAlignment === 'top',
    'no-avatar': !this.hasAvatar,
    'non-clickable': this.isNonClickable,
    disable: this.isDisable
  }"
>
  <div class="list-item__profile">
    <ng-content select="[avatar]"></ng-content>
  </div>

  <div class="list-item__title">
    <div class="list-item__title__text">
      <ng-content select="[title]"></ng-content>
    </div>
    <div class="list-item__title__subtext">
      <ng-content select="[subtitle]"> </ng-content>
    </div>
  </div>
  <div class="list-item__checkbox">
    <ng-content class="checkbox" select="[list-checkbox]"></ng-content>
  </div>
</div>
`,
      styles: [".list-item{background-color:var(--white);display:flex;cursor:pointer;align-items:center;width:inherit;gap:10px;border-bottom:1px solid var(--grey-100);padding:8px 16px}.list-item:hover{background-color:var(--blue-grey-300)}.list-item:focus{outline:none}.list-item:focus-visible{outline:2px dashed var(--primary-800)}.list-item .list-item__profile,.list-item .list-item__profile img{height:32px;width:32px}.list-item .list-item__title{width:-webkit-fill-available;display:flex;flex-direction:column}.list-item .list-item__title .list-item__title__text{font-family:var(--bd-fnt-fm);line-height:var(--bd-fnt-ln-hgt-2);font-size:var(--bd-fnt-sz-2);font-weight:var(--bd-fnt-wt-rg);color:var(--primary-1000)}.list-item .list-item__title .list-item__title__subtext{font-family:var(--bd-fnt-fm);line-height:var(--bd-fnt-ln-hgt-4);font-size:var(--bd-fnt-sz-4);font-weight:var(--bd-fnt-wt-rg);color:var(--primary-900)}.list-item .list-item__checkbox{margin:-24px;padding-bottom:8px;padding-right:8px}.list-item .list-item__checkbox .checkbox{padding:4px;height:24px;width:24px}.disable{background-color:var(--white)}.disable .list-item__profile{pointer-events:none}.disable .list-item__title{opacity:.5;color:var(--grey-600)}.disable .list-item__title .list-item__title__text,.disable .list-item__title .list-item__title__subtext{color:var(--grey-600)}.disable .list-item__checkbox{opacity:.5;color:var(--grey-500)}.disable:hover{background-color:var(--white)}.disable:focus{outline:none}.disable:focus-visible{outline:unset}.disable .selected{background-color:var(--white)}.selected{background-color:var(--primary-100)}.align-top .list-item__title{align-self:flex-start}.align-top .list-item__checkbox{align-self:flex-start;padding-right:8px}.align-top .list-item__profile{align-self:flex-start}.no-avatar,.align-right{flex-direction:row-reverse}.comfortable-type{padding:12px 16px}.compact-type{padding:4px 16px}.non-clickable{cursor:unset}.non-clickable:hover{background-color:var(--white)}.non-clickable:focus{outline:none}.non-clickable:focus-visible{outline:unset}.non-clickable .selected{background-color:var(--white)}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    isDisable: [{
      type: Input
    }],
    isSelected: [{
      type: Input
    }],
    contentAlignment: [{
      type: Input
    }],
    listType: [{
      type: Input
    }],
    listDirection: [{
      type: Input
    }],
    isNonClickable: [{
      type: Input
    }]
  });
})();
var CheckboxIntermediateComponent = class _CheckboxIntermediateComponent {
  utilService;
  cdRef;
  isDisable = false;
  checked = false;
  checkboxId = "";
  value;
  onClick = new EventEmitter();
  labelRef;
  _hostClass = "";
  checkBox;
  labelExists = true;
  disableIntermediateIcon = "assets/md-intermediate-disabled.svg";
  intermediateIcon = "assets/md-intermediate.svg";
  constructor(utilService, cdRef) {
    this.utilService = utilService;
    this.cdRef = cdRef;
  }
  onTouchedCallback = noop;
  onChange = (_) => {
  };
  clickEvent(event2) {
    if (!this.isDisable) {
      this.checked = !this.checked;
      this.onClick.emit(this.checked);
      this.onChange(this.checked);
    }
    if (this.checked) {
      if (this.checkBox?.nativeElement)
        this.checkBox.nativeElement.checked = true;
    } else {
      if (this.checkBox?.nativeElement)
        this.checkBox.nativeElement.checked = false;
    }
    this.cdRef.detectChanges();
  }
  writeValue(value) {
    this.checked = value;
  }
  registerOnChange(onChange) {
    this.onChange = onChange;
  }
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  ngAfterViewInit() {
    if (document.getElementsByClassName("checkbox__label")) {
      const el = document.getElementsByClassName("checkbox__label")[0];
      if (el) {
        this.labelExists = !!el.innerHTML.trim();
        el.style.display = this.labelExists ? "block" : "none";
      }
    }
  }
  ngOnChanges() {
    if (!this.checkboxId) {
      this.checkboxId = "checkbox-" + this.utilService.randomIdGenerator();
    }
    if (this.isDisable) {
      this._hostClass = "checkbox-on";
      this.cdRef.detach();
    } else {
      this.cdRef.reattach();
    }
    if (!this.checkboxId) {
      this.checkboxId = "checkbox-" + this.utilService.randomIdGenerator();
    }
    this.cdRef.detectChanges();
  }
  ngOnInit() {
  }
  static ɵfac = function CheckboxIntermediateComponent_Factory(t) {
    return new (t || _CheckboxIntermediateComponent)(ɵɵdirectiveInject(UtilService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CheckboxIntermediateComponent,
    selectors: [["ada-checkbox-intermediate"]],
    viewQuery: function CheckboxIntermediateComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c10, 5);
        ɵɵviewQuery(_c11, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labelRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.checkBox = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function CheckboxIntermediateComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx._hostClass);
      }
    },
    inputs: {
      isDisable: "isDisable",
      checked: "checked",
      checkboxId: "checkboxId",
      value: "value"
    },
    outputs: {
      onClick: "onClick"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _CheckboxIntermediateComponent),
      multi: true
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c4,
    decls: 7,
    vars: 18,
    consts: [[1, "checkbox__container", 3, "click"], ["tabindex", "1", "type", "checkbox", 3, "id", "checked", "ngClass"], ["checkBox", ""], ["tabindex", "0", 3, "for", "ngClass", "click"], ["class", "checkbox__active-check-mark", 3, "ngClass", 4, "ngIf"], [1, "checkbox__label", 3, "for", "ngClass", "click"], [1, "checkbox__active-check-mark", 3, "ngClass"], [1, "tickmark"]],
    template: function CheckboxIntermediateComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function CheckboxIntermediateComponent_Template_div_click_0_listener($event) {
          return ctx.clickEvent($event);
        });
        ɵɵelement(1, "input", 1, 2);
        ɵɵelementStart(3, "label", 3);
        ɵɵlistener("click", function CheckboxIntermediateComponent_Template_label_click_3_listener($event) {
          return $event.stopImmediatePropagation();
        });
        ɵɵtemplate(4, CheckboxIntermediateComponent_div_4_Template, 2, 3, "div", 4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "label", 5);
        ɵɵlistener("click", function CheckboxIntermediateComponent_Template_label_click_5_listener($event) {
          return $event.stopImmediatePropagation();
        });
        ɵɵprojection(6);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("id", ctx.checkboxId)("checked", ctx.checked)("ngClass", ɵɵpureFunction2(8, _c13, !ctx.isDisable, ctx.isDisable));
        ɵɵadvance(2);
        ɵɵproperty("for", ctx.checkboxId)("ngClass", ɵɵpureFunction4(11, _c14, !ctx.isDisable, ctx.isDisable, ctx.checked, ctx.isDisable && ctx.checked));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.checked);
        ɵɵadvance(1);
        ɵɵproperty("for", ctx.checkboxId)("ngClass", ɵɵpureFunction1(16, _c15, ctx.isDisable));
      }
    },
    dependencies: [CommonModule, NgClass, NgIf],
    styles: [".checkbox__container[_ngcontent-%COMP%]{box-sizing:border-box;position:relative;display:flex;align-items:center;left:4px;top:4px;padding:24px}.checkbox__container[_ngcontent-%COMP%]   .checkbox__input[_ngcontent-%COMP%]{position:absolute;opacity:0;cursor:pointer;height:15px;width:14px;margin:0;top:1px;left:2px;flex-grow:1;box-shadow:0 0 0 0 transparent}.checkbox__container[_ngcontent-%COMP%]   .checkbox__input[_ngcontent-%COMP%]:focus{outline:none}.checkbox__container[_ngcontent-%COMP%]   .checkbox__input--disabled[_ngcontent-%COMP%]{display:none}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark[_ngcontent-%COMP%]{position:relative;height:16px;width:16px;background-color:var(--white-background-color);border-radius:4px;border:2px solid var(--blue-brand-primary);box-sizing:border-box;flex-shrink:0;display:flex;justify-content:center;align-items:center}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark[_ngcontent-%COMP%]:hover{background-color:var(--primary-100);box-shadow:0 0 0 4px var(--primary-100)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark[_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);outline-offset:4px}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark--disabled[_ngcontent-%COMP%]{cursor:default;position:relative;height:16px;width:16px;border-radius:4px;border:2px solid var(--grey-600);box-sizing:border-box;flex-shrink:0;margin-right:8px}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark--disabled[_ngcontent-%COMP%]:hover{border:2px solid var(--grey-600)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark--disabled[_ngcontent-%COMP%]:focus{outline:none}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark--checked[_ngcontent-%COMP%]{background-color:var(--blue-brand-primary)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark--checked[_ngcontent-%COMP%]:hover{background-color:var(--blue-brand-primary);box-shadow:0 0 0 4px var(--primary-100)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark--checked[_ngcontent-%COMP%]:active{border:2px solid var(--blue-brand-primary);background-color:var(--blue-brand-primary);box-shadow:0 0 0 4px var(--primary-200)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark[_ngcontent-%COMP%]:active{border:2px solid var(--blue-brand-primary);background-color:var(--primary-200);box-shadow:0 0 0 4px var(--primary-200)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark--checked--disabled[_ngcontent-%COMP%]{background-color:var(--grey-600);color:var(--grey-300)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__check-mark--checked--disabled[_ngcontent-%COMP%]:hover{background-color:var(--grey-600);color:var(--grey-300);box-shadow:none}.checkbox__container[_ngcontent-%COMP%]   .checkbox__active-check-mark[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;border-radius:4px}.checkbox__container[_ngcontent-%COMP%]   .checkbox__active-check-mark--disabled[_ngcontent-%COMP%]{background-color:var(--grey-600)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__active-check-mark--disabled[_ngcontent-%COMP%]   .tickmark[_ngcontent-%COMP%]:before{background-color:var(--grey-300)}.checkbox__container[_ngcontent-%COMP%]   .checkbox__active-check-mark--disabled[_ngcontent-%COMP%]   .tickmark[_ngcontent-%COMP%]:after{background-color:var(--grey-300)}.checkbox__container[_ngcontent-%COMP%]   .tickmark[_ngcontent-%COMP%]{position:relative;top:60%;left:50%;transform:translate(-47%);width:8px;border-bottom:2px solid var(--white);border-radius:2px}.checkbox__container[_ngcontent-%COMP%]   .checkbox__label[_ngcontent-%COMP%]{margin-left:8px;cursor:pointer;line-height:var(--bd-fnt-ln-hgt-5);font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-3);display:block}.checkbox__container[_ngcontent-%COMP%]   .checkbox__label--disabled[_ngcontent-%COMP%]{margin-left:0;color:var(--grey-600)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxIntermediateComponent, [{
    type: Component,
    args: [{
      selector: "ada-checkbox-intermediate",
      standalone: true,
      imports: [CommonModule],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CheckboxIntermediateComponent),
        multi: true
      }],
      template: `<div class="checkbox__container" (click)="clickEvent($event)">
  <input
    tabindex="1"
    [id]="checkboxId"
    [checked]="checked"
    type="checkbox"
    [ngClass]="{
      checkbox__input: !isDisable,
      'checkbox__input--disabled': isDisable
    }"
    #checkBox
  />
  <label
    tabindex="0"
    [for]="checkboxId"
    [ngClass]="{
      'checkbox__check-mark': !isDisable,
      'checkbox__check-mark--disabled': isDisable,
      'checkbox__check-mark--checked': checked,
      'checkbox__check-mark--checked--disabled': isDisable && checked
    }"
    (click)="$event.stopImmediatePropagation()"
  >
    <div
      *ngIf="checked"
      class="checkbox__active-check-mark"
      [ngClass]="{
        'checkbox__active-check-mark--disabled': isDisable
      }"
    >
      <div class="tickmark"></div>
    </div>
  </label>

  <label
    [for]="checkboxId"
    class="checkbox__label"
    [ngClass]="{
      'checkbox__label--disabled': isDisable
    }"
    (click)="$event.stopImmediatePropagation()"
  >
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: [".checkbox__container{box-sizing:border-box;position:relative;display:flex;align-items:center;left:4px;top:4px;padding:24px}.checkbox__container .checkbox__input{position:absolute;opacity:0;cursor:pointer;height:15px;width:14px;margin:0;top:1px;left:2px;flex-grow:1;box-shadow:0 0 0 0 transparent}.checkbox__container .checkbox__input:focus{outline:none}.checkbox__container .checkbox__input--disabled{display:none}.checkbox__container .checkbox__check-mark{position:relative;height:16px;width:16px;background-color:var(--white-background-color);border-radius:4px;border:2px solid var(--blue-brand-primary);box-sizing:border-box;flex-shrink:0;display:flex;justify-content:center;align-items:center}.checkbox__container .checkbox__check-mark:hover{background-color:var(--primary-100);box-shadow:0 0 0 4px var(--primary-100)}.checkbox__container .checkbox__check-mark:focus-visible{outline:2px dashed var(--primary-800);outline-offset:4px}.checkbox__container .checkbox__check-mark--disabled{cursor:default;position:relative;height:16px;width:16px;border-radius:4px;border:2px solid var(--grey-600);box-sizing:border-box;flex-shrink:0;margin-right:8px}.checkbox__container .checkbox__check-mark--disabled:hover{border:2px solid var(--grey-600)}.checkbox__container .checkbox__check-mark--disabled:focus{outline:none}.checkbox__container .checkbox__check-mark--checked{background-color:var(--blue-brand-primary)}.checkbox__container .checkbox__check-mark--checked:hover{background-color:var(--blue-brand-primary);box-shadow:0 0 0 4px var(--primary-100)}.checkbox__container .checkbox__check-mark--checked:active{border:2px solid var(--blue-brand-primary);background-color:var(--blue-brand-primary);box-shadow:0 0 0 4px var(--primary-200)}.checkbox__container .checkbox__check-mark:active{border:2px solid var(--blue-brand-primary);background-color:var(--primary-200);box-shadow:0 0 0 4px var(--primary-200)}.checkbox__container .checkbox__check-mark--checked--disabled{background-color:var(--grey-600);color:var(--grey-300)}.checkbox__container .checkbox__check-mark--checked--disabled:hover{background-color:var(--grey-600);color:var(--grey-300);box-shadow:none}.checkbox__container .checkbox__active-check-mark{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;border-radius:4px}.checkbox__container .checkbox__active-check-mark--disabled{background-color:var(--grey-600)}.checkbox__container .checkbox__active-check-mark--disabled .tickmark:before{background-color:var(--grey-300)}.checkbox__container .checkbox__active-check-mark--disabled .tickmark:after{background-color:var(--grey-300)}.checkbox__container .tickmark{position:relative;top:60%;left:50%;transform:translate(-47%);width:8px;border-bottom:2px solid var(--white);border-radius:2px}.checkbox__container .checkbox__label{margin-left:8px;cursor:pointer;line-height:var(--bd-fnt-ln-hgt-5);font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-3);display:block}.checkbox__container .checkbox__label--disabled{margin-left:0;color:var(--grey-600)}\n"]
    }]
  }], () => [{
    type: UtilService
  }, {
    type: ChangeDetectorRef
  }], {
    isDisable: [{
      type: Input
    }],
    checked: [{
      type: Input
    }],
    checkboxId: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    labelRef: [{
      type: ViewChild,
      args: ["labelRef"]
    }],
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    checkBox: [{
      type: ViewChild,
      args: ["checkBox"]
    }]
  });
})();
var SegmentToggleGroupService = class _SegmentToggleGroupService {
  size;
  isDisable;
  constructor() {
  }
  segmentGroupsMap = /* @__PURE__ */ new Map();
  segmentDisableMap = /* @__PURE__ */ new Map();
  disableSegmentGroup(segmentGroupId) {
    this.segmentDisableMap.set(segmentGroupId, true);
  }
  enableSegmentGroup(segmentGroupId) {
    this.segmentDisableMap.set(segmentGroupId, false);
  }
  setSegmentActive(segmentGroupId, segmentId) {
    if (!this.isDisable) {
      this.segmentGroupsMap.set(segmentGroupId, segmentId);
    }
  }
  getActiveSegmentId(segmentGroupId) {
    if (segmentGroupId) {
      return this.segmentGroupsMap.get(segmentGroupId);
    }
    return "";
  }
  segmentClickSource = new Subject();
  segmentClick$ = this.segmentClickSource.asObservable();
  emitSegmentClick(segmentGroupId, segmentId) {
    const isDisabled = this.segmentDisableMap.get(segmentGroupId);
    if (!isDisabled) {
      this.segmentClickSource.next({
        segmentGroupId,
        segmentId
      });
    }
  }
  static ɵfac = function SegmentToggleGroupService_Factory(t) {
    return new (t || _SegmentToggleGroupService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _SegmentToggleGroupService,
    factory: _SegmentToggleGroupService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SegmentToggleGroupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var SegmentComponent = class _SegmentComponent {
  segmentToggleGroupService;
  cdRef;
  injector;
  utilService;
  size = "medium";
  segmentId;
  isActive = false;
  segmentGroupId;
  activeSegmentId;
  isDisabled;
  constructor(segmentToggleGroupService, cdRef, injector, utilService) {
    this.segmentToggleGroupService = segmentToggleGroupService;
    this.cdRef = cdRef;
    this.injector = injector;
    this.utilService = utilService;
    this.segmentId = this.utilService.randomIdGenerator();
  }
  ngOnInit() {
    this.size = this.injector.get(SegmentToggleGroupComponent)?.size;
  }
  get sizeOfSegment() {
    return this.injector.get(SegmentToggleGroupComponent)?.size;
  }
  get isDisable() {
    const segmentToggleGroupId = this.injector.get(SegmentToggleGroupComponent)?.segmentGroupId;
    const activeSegmentId = this.segmentToggleGroupService?.getActiveSegmentId(segmentToggleGroupId);
    if (activeSegmentId === this.segmentId) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
    return this.injector.get(SegmentToggleGroupComponent)?.isDisable;
  }
  static ɵfac = function SegmentComponent_Factory(t) {
    return new (t || _SegmentComponent)(ɵɵdirectiveInject(SegmentToggleGroupService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(UtilService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SegmentComponent,
    selectors: [["ada-segment"]],
    inputs: {
      segmentId: "segmentId",
      isActive: "isActive",
      segmentGroupId: "segmentGroupId"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SegmentComponent),
      multi: true
    }]), ɵɵStandaloneFeature],
    ngContentSelectors: _c4,
    decls: 2,
    vars: 9,
    consts: [[1, "segment", 3, "ngClass", "id"]],
    template: function SegmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction6(2, _c28, ctx.sizeOfSegment === "small", ctx.sizeOfSegment === "medium", ctx.sizeOfSegment === "large", ctx.isDisable, ctx.isActive, ctx.isActive && ctx.isDisable))("id", ctx.segmentId);
      }
    },
    dependencies: [CommonModule, NgClass],
    styles: [".segment[_ngcontent-%COMP%]{border-radius:2px;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-3);line-height:var(--bd-fnt-ln-hgt-9);text-align:center;display:flex;gap:8px;color:var(--primary-1000);cursor:pointer;overflow:hidden}.segment--small[_ngcontent-%COMP%]{padding:4px 10px}.segment--medium[_ngcontent-%COMP%]{padding:6px 12px}.segment--large[_ngcontent-%COMP%]{padding:10px 16px}.segment--active[_ngcontent-%COMP%]{color:var(--primary-1000);background-color:var(--grey-100);font-weight:var(--bd-fnt-wt-lg)}.segment[_ngcontent-%COMP%]:hover{background-color:var(--grey-200);color:var(--primary-900);font-weight:var(--bd-fnt-wt-md)}.segment--disable[_ngcontent-%COMP%]{color:var(--grey-600)}.segment--active[_ngcontent-%COMP%]:hover{background-color:var(--grey-200);color:var(--primary-900)}.segment--disable[_ngcontent-%COMP%]:hover{background-color:transparent;color:var(--grey-600);font-weight:var(--bd-fnt-wt-rg)}.segment--active--disable[_ngcontent-%COMP%]{background-color:var(--grey-100)}.segment--active--disable[_ngcontent-%COMP%]:hover{background-color:var(--grey-100);color:var(--grey-600);font-weight:var(--bd-fnt-wt-md)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SegmentComponent, [{
    type: Component,
    args: [{
      selector: "ada-segment",
      standalone: true,
      imports: [CommonModule],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SegmentComponent),
        multi: true
      }],
      template: `<div
  class="segment"
  [ngClass]="{
    'segment--small': sizeOfSegment === 'small',
    'segment--medium': sizeOfSegment === 'medium',
    'segment--large': sizeOfSegment === 'large',
    'segment--disable': isDisable,
    'segment--active': isActive,
    'segment--active--disable': isActive && isDisable
  }"
  [id]="segmentId"
>
  <ng-content></ng-content>
</div>
`,
      styles: [".segment{border-radius:2px;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-3);line-height:var(--bd-fnt-ln-hgt-9);text-align:center;display:flex;gap:8px;color:var(--primary-1000);cursor:pointer;overflow:hidden}.segment--small{padding:4px 10px}.segment--medium{padding:6px 12px}.segment--large{padding:10px 16px}.segment--active{color:var(--primary-1000);background-color:var(--grey-100);font-weight:var(--bd-fnt-wt-lg)}.segment:hover{background-color:var(--grey-200);color:var(--primary-900);font-weight:var(--bd-fnt-wt-md)}.segment--disable{color:var(--grey-600)}.segment--active:hover{background-color:var(--grey-200);color:var(--primary-900)}.segment--disable:hover{background-color:transparent;color:var(--grey-600);font-weight:var(--bd-fnt-wt-rg)}.segment--active--disable{background-color:var(--grey-100)}.segment--active--disable:hover{background-color:var(--grey-100);color:var(--grey-600);font-weight:var(--bd-fnt-wt-md)}\n"]
    }]
  }], () => [{
    type: SegmentToggleGroupService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Injector
  }, {
    type: UtilService
  }], {
    segmentId: [{
      type: Input
    }],
    isActive: [{
      type: Input
    }],
    segmentGroupId: [{
      type: Input
    }]
  });
})();
var SEGMENT_TOGGLE_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SegmentToggleGroupComponent),
  multi: true
};
var SegmentToggleGroupComponent = class _SegmentToggleGroupComponent {
  segmentToggleGroupService;
  cdRef;
  utilService;
  size = "medium";
  isDisable = false;
  segmentComponents;
  activeSegmentId;
  onClick = new EventEmitter();
  segmentGroupId;
  value = "";
  constructor(segmentToggleGroupService, cdRef, utilService) {
    this.segmentToggleGroupService = segmentToggleGroupService;
    this.cdRef = cdRef;
    this.utilService = utilService;
    this.segmentGroupId = this.utilService.randomIdGenerator();
  }
  ngAfterContentInit() {
    if (this.value) {
      this.segmentToggleGroupService.setSegmentActive(this.segmentGroupId, this.value);
    } else if (!this.activeSegmentId && this.segmentComponents.length > 0) {
      const firstSegmentId = this.segmentComponents.first.segmentId;
      this.segmentToggleGroupService.setSegmentActive(this.segmentGroupId, firstSegmentId);
    } else if (this.activeSegmentId) {
      this.segmentToggleGroupService.setSegmentActive(this.segmentGroupId, this.activeSegmentId);
    }
    if (this.isDisable) {
      this.segmentToggleGroupService.disableSegmentGroup(this.segmentGroupId);
    }
    this.segmentToggleGroupService.segmentClick$.subscribe((res) => {
      this.emitSegmentId(res?.segmentGroupId, res?.segmentId);
    });
    this.segmentToggleGroupService.size = this.size;
  }
  onChange = () => {
  };
  onTouched;
  writeValue(value) {
    this.value = value;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  emitSegmentId(segmentGroupId, segmentId) {
    this.onChange(segmentId);
    this.onClick.emit({
      segmentGroupId,
      segmentId
    });
  }
  static ɵfac = function SegmentToggleGroupComponent_Factory(t) {
    return new (t || _SegmentToggleGroupComponent)(ɵɵdirectiveInject(SegmentToggleGroupService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(UtilService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SegmentToggleGroupComponent,
    selectors: [["ada-segment-toggle-group"]],
    contentQueries: function SegmentToggleGroupComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SegmentComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.segmentComponents = _t);
      }
    },
    inputs: {
      size: "size",
      isDisable: "isDisable",
      activeSegmentId: "activeSegmentId",
      segmentGroupId: "segmentGroupId"
    },
    outputs: {
      onClick: "onClick"
    },
    exportAs: ["segmentToggleGroup"],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SegmentToggleGroupComponent),
      multi: true
    }]), ɵɵStandaloneFeature],
    ngContentSelectors: _c4,
    decls: 3,
    vars: 7,
    consts: [[1, "segment__section", 3, "id", "ngClass"], [1, "segment"]],
    template: function SegmentToggleGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0)(1, "div", 1);
        ɵɵprojection(2);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵproperty("id", ctx.segmentGroupId)("ngClass", ɵɵpureFunction4(2, _c29, ctx.size === "small", ctx.size === "medium", ctx.size === "large", ctx.isDisable));
      }
    },
    dependencies: [CommonModule, NgClass],
    styles: [".segment__section[_ngcontent-%COMP%]{display:inline-block;border:1px solid var(--grey-200);padding:4px;border-radius:4px}.segment__section--large[_ngcontent-%COMP%]{max-height:48px}.segment__section--large[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%], .segment__section--medium[_ngcontent-%COMP%]{max-height:40px}.segment__section--medium[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]{max-height:32px}.segment__section--small[_ngcontent-%COMP%]{max-height:36px}.segment__section--small[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]{max-height:28px}.segment__section--disable[_ngcontent-%COMP%]{border-color:var(--grey-100)}.segment__section[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;overflow-y:hidden}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SegmentToggleGroupComponent, [{
    type: Component,
    args: [{
      selector: "ada-segment-toggle-group",
      standalone: true,
      imports: [CommonModule],
      exportAs: "segmentToggleGroup",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SegmentToggleGroupComponent),
        multi: true
      }],
      template: `<div
  class="segment__section"
  [id]="segmentGroupId"
  [ngClass]="{
    'segment__section--small': size === 'small',
    'segment__section--medium': size === 'medium',
    'segment__section--large': size === 'large',
    'segment__section--disable': isDisable
  }"
>
  <div class="segment">
    <ng-content></ng-content>
  </div>
</div>
`,
      styles: [".segment__section{display:inline-block;border:1px solid var(--grey-200);padding:4px;border-radius:4px}.segment__section--large{max-height:48px}.segment__section--large .segment,.segment__section--medium{max-height:40px}.segment__section--medium .segment{max-height:32px}.segment__section--small{max-height:36px}.segment__section--small .segment{max-height:28px}.segment__section--disable{border-color:var(--grey-100)}.segment__section .segment{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;overflow-y:hidden}\n"]
    }]
  }], () => [{
    type: SegmentToggleGroupService
  }, {
    type: ChangeDetectorRef
  }, {
    type: UtilService
  }], {
    size: [{
      type: Input
    }],
    isDisable: [{
      type: Input
    }],
    segmentComponents: [{
      type: ContentChildren,
      args: [SegmentComponent]
    }],
    activeSegmentId: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    segmentGroupId: [{
      type: Input
    }]
  });
})();
var TabComponent = class _TabComponent {
  cd;
  active = false;
  _position = "void";
  titleRef;
  constructor(cd) {
    this.cd = cd;
  }
  ngAfterContentInit() {
    this.cd.detectChanges();
  }
  static ɵfac = function TabComponent_Factory(t) {
    return new (t || _TabComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TabComponent,
    selectors: [["ada-tab"]],
    viewQuery: function TabComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c30, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleRef = _t.first);
      }
    },
    inputs: {
      active: "active",
      _position: "_position"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c32,
    decls: 4,
    vars: 2,
    consts: [[1, "tab__container", 3, "hidden"], ["title", ""]],
    template: function TabComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c31);
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
        ɵɵtemplate(2, TabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        ɵɵproperty("hidden", !ctx.active)("@tabChangeAnimation", ctx._position);
      }
    },
    dependencies: [CommonModule],
    styles: ["[_nghost-%COMP%]{display:block}.tab__container[_ngcontent-%COMP%]{height:100%;font-family:var(--hd-1-fnt-fm);font-weight:var(--hd-2-fnt-wt)}"],
    data: {
      animation: [trigger("tabChangeAnimation", [state("left", style({
        transform: "translate3d(0, 0, 0)",
        minHeight: "1px"
      })), state("right", style({
        transform: "translate3d(100%, 0, 0)",
        minHeight: "1px"
        //INFO: removing visibility because of suspected problem of data not loading
        // visibility: 'hidden'
      })), state("left-enter", style({
        transform: "translate3d(0, 0, 0)",
        minHeight: "1px"
      })), state("left-exit", style({
        transform: "translate3d(-100%, 0, 0)",
        minHeight: "1px"
        //INFO: removing visibility because of suspected problem of data not loading
        // visibility: 'hidden'
      })), transition("right => left", [style({
        transform: "translate3d(100%, 0, 0)"
      }), animate("300ms cubic-bezier(0.35, 0, 0.25, 1)")]), transition("left => void", [style({
        transform: "translate3d(100%, 0, 0)"
      }), animate("300ms cubic-bezier(0.35, 0, 0.25, 1)")]), transition("void => left", [style({
        transform: "translate3d(100%, 0, 0)"
      }), animate("300ms cubic-bezier(0.35, 0, 0.25, 1)")]), transition("left-exit => left-enter", [style({
        transform: "translate3d(-100%, 0, 0)"
      }), animate("300ms cubic-bezier(0.35, 0, 0.25, 1)")]), transition("left-exit => left", [style({
        transform: "translate3d(100%, 0, 0)"
      }), animate("300ms cubic-bezier(0.35, 0, 0.25, 1)")])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabComponent, [{
    type: Component,
    args: [{
      selector: "ada-tab",
      standalone: true,
      imports: [CommonModule],
      animations: [trigger("tabChangeAnimation", [state("left", style({
        transform: "translate3d(0, 0, 0)",
        minHeight: "1px"
      })), state("right", style({
        transform: "translate3d(100%, 0, 0)",
        minHeight: "1px"
        //INFO: removing visibility because of suspected problem of data not loading
        // visibility: 'hidden'
      })), state("left-enter", style({
        transform: "translate3d(0, 0, 0)",
        minHeight: "1px"
      })), state("left-exit", style({
        transform: "translate3d(-100%, 0, 0)",
        minHeight: "1px"
        //INFO: removing visibility because of suspected problem of data not loading
        // visibility: 'hidden'
      })), transition("right => left", [style({
        transform: "translate3d(100%, 0, 0)"
      }), animate("300ms cubic-bezier(0.35, 0, 0.25, 1)")]), transition("left => void", [style({
        transform: "translate3d(100%, 0, 0)"
      }), animate("300ms cubic-bezier(0.35, 0, 0.25, 1)")]), transition("void => left", [style({
        transform: "translate3d(100%, 0, 0)"
      }), animate("300ms cubic-bezier(0.35, 0, 0.25, 1)")]), transition("left-exit => left-enter", [style({
        transform: "translate3d(-100%, 0, 0)"
      }), animate("300ms cubic-bezier(0.35, 0, 0.25, 1)")]), transition("left-exit => left", [style({
        transform: "translate3d(100%, 0, 0)"
      }), animate("300ms cubic-bezier(0.35, 0, 0.25, 1)")])])],
      template: '<div\n  class="tab__container"\n  [hidden]="!active"\n  [@tabChangeAnimation]="_position"\n>\n  <ng-content select="[content]"></ng-content>\n</div>\n<ng-template #title>\n  <ng-content select="[title]"></ng-content>\n</ng-template>\n',
      styles: [":host{display:block}.tab__container{height:100%;font-family:var(--hd-1-fnt-fm);font-weight:var(--hd-2-fnt-wt)}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    active: [{
      type: Input
    }],
    _position: [{
      type: Input
    }],
    titleRef: [{
      type: ViewChild,
      args: ["title"]
    }]
  });
})();
var TabsComponent = class _TabsComponent {
  isSelected = true;
  isDisabled = false;
  fullWidthTabs = false;
  orientation = "default";
  stopTabs = false;
  selectedTab = new EventEmitter();
  _hostClass = "";
  _selectedPositionsIndex;
  _currentPositionIndex;
  _position;
  changeTabTransition$ = new BehaviorSubject({});
  allowTabChange$ = new Subject();
  // contentChildren are set
  tabs;
  constructor() {
    this.tabs = new QueryList();
  }
  ngAfterContentInit() {
    this.tabs.map((item) => {
      if (!item.active) {
        this._hostClass = "tab--inactive";
      }
    });
    const activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
  //animation function  that returns  animation
  computePositionAnimationState(selectedIndex, currentIndex, tab, tabsArray) {
    if (selectedIndex == 0 && currentIndex == -1) {
      tab.active = true;
    } else if (selectedIndex > currentIndex && tabsArray[currentIndex]) {
      tabsArray[currentIndex]._position = "left-exit";
      this.moveForward(tab);
    } else {
      tabsArray[currentIndex]._position = "right";
      this.moveBackward(tab);
    }
  }
  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  moveBackward(tab) {
    return __async(this, null, function* () {
      const tabsArray = this.tabs.toArray();
      for (let i = tabsArray.length; i >= 0; i--) {
        if (i >= this._selectedPositionsIndex && i < this._currentPositionIndex) {
          tabsArray[i + 1].active = false;
          tabsArray[i].active = true;
          yield this.sleep(60);
          tab._position = "left-enter";
        }
      }
    });
  }
  moveForward(tab) {
    return __async(this, null, function* () {
      const tabsArray = this.tabs.toArray();
      for (let i = 0; i < tabsArray.length; i++) {
        if (i > this._currentPositionIndex && i <= this._selectedPositionsIndex) {
          tabsArray[i - 1].active = false;
          tabsArray[i].active = true;
          yield this.sleep(60);
          tab._position = "left";
        }
      }
    });
  }
  selectTab(tab) {
    const activeTab = this.tabs.find((_tab) => _tab.active === true);
    if (activeTab) {
      activeTab?.cd.detectChanges();
    }
    const tabsArray = this.tabs.toArray();
    this._currentPositionIndex = tabsArray.findIndex((_tab) => _tab?.titleRef === activeTab?.titleRef);
    this._selectedPositionsIndex = tabsArray.findIndex((_tab) => _tab.titleRef === tab.titleRef);
    if (tabsArray && tabsArray.length && tab !== activeTab) {
      this.computePositionAnimationState(this._selectedPositionsIndex, this._currentPositionIndex, tab, tabsArray);
    }
    if (!this.stopTabs) {
      if (tab && typeof tab === "object") {
        this.selectedTab.emit(Object.assign(tab, {
          id: this._selectedPositionsIndex + 1
        }));
      }
    }
  }
  //INFO: This function will stop tabs from changing, if the stopTabs input is true this function will be called and trigger tab change via user.
  stopChangingTabs(tab) {
    this._selectedPositionsIndex = this.tabs.toArray().findIndex((_tab) => _tab.titleRef === tab.titleRef);
    this.changeTabTransition$.next(tab);
    this.changeTabTransition$.pipe(take(1), switchMap((tab2) => this.allowTabChange$.pipe(take(1)).pipe(map((_) => tab2)))).subscribe((_tab) => {
      this.selectTab(_tab);
    });
    this.selectedTab.emit(Object.assign(tab, {
      id: this._selectedPositionsIndex + 1
    }));
  }
  ngOnDestroy() {
    this.changeTabTransition$?.unsubscribe();
  }
  static ɵfac = function TabsComponent_Factory(t) {
    return new (t || _TabsComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TabsComponent,
    selectors: [["ada-tabs"]],
    contentQueries: function TabsComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TabComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabs = _t);
      }
    },
    hostVars: 2,
    hostBindings: function TabsComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx._hostClass);
      }
    },
    inputs: {
      isDisabled: "isDisabled",
      fullWidthTabs: "fullWidthTabs",
      orientation: "orientation",
      stopTabs: "stopTabs",
      allowTabChange$: "allowTabChange$"
    },
    outputs: {
      selectedTab: "selectedTab"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c36,
    decls: 6,
    vars: 7,
    consts: [[1, "tab-set", 3, "ngClass"], ["class", "tab__left", 4, "ngIf"], ["class", "tabs--bottom", 4, "ngIf"], ["class", "tab", "tabindex", "0", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "tab__right", 4, "ngIf"], [1, "tab__left"], [1, "tabs--bottom"], ["tabindex", "0", 1, "tab", 3, "ngClass", "click"], [3, "ngTemplateOutlet"], [1, "tab__right"]],
    template: function TabsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c34);
        ɵɵelementStart(0, "ul", 0);
        ɵɵtemplate(1, TabsComponent_div_1_Template, 2, 0, "div", 1)(2, TabsComponent_li_2_Template, 1, 0, "li", 2)(3, TabsComponent_li_3_Template, 2, 6, "li", 3)(4, TabsComponent_div_4_Template, 2, 0, "div", 4);
        ɵɵelementEnd();
        ɵɵprojection(5);
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c35, ctx.fullWidthTabs));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.orientation === "left");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.fullWidthTabs && ctx.orientation === "left");
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.tabs);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.orientation === "right");
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet],
    styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1;overflow:hidden;font-family:var(--hd-1-fnt-fm)}.tab--inactive[_nghost-%COMP%]{font-weight:var(--hd-2-fnt-wt)}a[_ngcontent-%COMP%]{line-height:var(--bd-txt-md-line-height);font-size:var(--bd-txt-md-font-size);color:var(--text-700)}.tab-set[_ngcontent-%COMP%]{display:flex;grid-template-columns:.2fr .2fr;width:100%;padding:1px;margin:0}.full--width[_ngcontent-%COMP%]{width:100%}.tab[_ngcontent-%COMP%]{display:flex;justify-content:center;min-width:120px;padding:14px 16px;cursor:pointer;border-top:2px solid transparent;font-family:var(--hd-1-fnt-fm);font-weight:var(--hd-2-fnt-wt);-webkit-user-select:none;user-select:none;transition:background .6s;background-position:center}.tab[_ngcontent-%COMP%]:active{background-color:var(--tab-ripple);background-size:100%;transition:background 0s;color:var(--primary-1000)}.tab[_ngcontent-%COMP%]:active.last-child{margin-right:0}.tab[_ngcontent-%COMP%]:active.first-child{margin-left:0}.full--width[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{padding:14px 16px;text-align:center;flex:1;box-sizing:border-box}.tab--active[_ngcontent-%COMP%]{position:relative;border-bottom:2px solid var(--primary-base);font-family:var(--bd-fnt-fm);line-height:var(--bd-fnt-ln-hgt-9);font-weight:var(--bd-fnt-wt-md);font-size:var(--bd-fnt-sz-3);text-align:center;color:var(--primary-1000)}.tab--active[_ngcontent-%COMP%]:hover{background:var(--blue-grey-300)}.tab--active[_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);border-bottom:none}.tab--active.disabled[_ngcontent-%COMP%]{color:var(--grey-600);text-align:center;display:inline-flex;padding:14px 16px;flex-direction:column;justify-content:center;align-items:center;border-bottom:2px solid var(--grey-600);cursor:not-allowed}.tab--active.disabled[_ngcontent-%COMP%]:hover{background:none}.tab--active.disabled[_ngcontent-%COMP%]:focus-visible{outline:none}.tab__set--plain[_ngcontent-%COMP%]{background-color:var(--info-blue);padding:12px 24px 0}.tab.tab--active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:var(--hd-h5-font-weight)}.tab--border-top[_ngcontent-%COMP%]{background-color:var(--info-blue)}.tab__right[_ngcontent-%COMP%]{align-self:center;margin-left:auto}.tab__left[_ngcontent-%COMP%]{margin-right:auto;align-self:center;padding:16px 0 16px 16px}.tab--border-bottom-inactive[_ngcontent-%COMP%]{font-family:var(--bd-fnt-fm);line-height:var(--bd-fnt-ln-hgt-9);font-weight:var(--bd-fnt-wt-md);font-size:var(--bd-fnt-sz-3);text-align:center;color:var(--blue-grey-800);border-bottom:1px solid var(--blue-grey-400)}.tab--border-bottom-inactive[_ngcontent-%COMP%]:hover{background:var(--blue-grey-300)}.tab--border-bottom-inactive[_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);border-bottom:none}.tab--border-bottom-inactive.disabled[_ngcontent-%COMP%]{color:var(--grey-600);text-align:center;display:inline-flex;padding:14px 16px;flex-direction:column;justify-content:center;align-items:center;border-bottom:1px solid var(--grey-100);cursor:not-allowed}.tab--border-bottom-inactive.disabled[_ngcontent-%COMP%]:hover{background:none}.tab--border-bottom-inactive.disabled[_ngcontent-%COMP%]:focus-visible{outline:none}.tabs--bottom[_ngcontent-%COMP%]{width:100%}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsComponent, [{
    type: Component,
    args: [{
      selector: "ada-tabs",
      standalone: true,
      imports: [CommonModule, TabComponent],
      template: `<ul class="tab-set" [ngClass]="{
    'full--width': fullWidthTabs
  }">
  <div class="tab__left" *ngIf="orientation === 'left'">
    <ng-content select="[left-section]"></ng-content>
  </div>

  <li *ngIf="!fullWidthTabs && orientation === 'left'" class="tabs--bottom"></li>
  <li *ngFor="let tab of tabs" (click)="!isDisabled && (stopTabs ? stopChangingTabs(tab) : selectTab(tab))" class="tab"
    [ngClass]="{
      'tab--active': tab.active,
      'tab--border-bottom-inactive': !tab.active,
      'disabled': isDisabled
    }" tabindex="0">
    <ng-container [ngTemplateOutlet]="tab.titleRef"></ng-container>
  </li>


  <div class="tab__right" *ngIf="orientation === 'right'">
    <ng-content select="[right-section]"></ng-content>
  </div>
</ul>

<ng-content></ng-content>`,
      styles: [":host{display:flex;flex-direction:column;flex:1;overflow:hidden;font-family:var(--hd-1-fnt-fm)}:host.tab--inactive{font-weight:var(--hd-2-fnt-wt)}a{line-height:var(--bd-txt-md-line-height);font-size:var(--bd-txt-md-font-size);color:var(--text-700)}.tab-set{display:flex;grid-template-columns:.2fr .2fr;width:100%;padding:1px;margin:0}.full--width{width:100%}.tab{display:flex;justify-content:center;min-width:120px;padding:14px 16px;cursor:pointer;border-top:2px solid transparent;font-family:var(--hd-1-fnt-fm);font-weight:var(--hd-2-fnt-wt);-webkit-user-select:none;user-select:none;transition:background .6s;background-position:center}.tab:active{background-color:var(--tab-ripple);background-size:100%;transition:background 0s;color:var(--primary-1000)}.tab:active.last-child{margin-right:0}.tab:active.first-child{margin-left:0}.full--width .tab{padding:14px 16px;text-align:center;flex:1;box-sizing:border-box}.tab--active{position:relative;border-bottom:2px solid var(--primary-base);font-family:var(--bd-fnt-fm);line-height:var(--bd-fnt-ln-hgt-9);font-weight:var(--bd-fnt-wt-md);font-size:var(--bd-fnt-sz-3);text-align:center;color:var(--primary-1000)}.tab--active:hover{background:var(--blue-grey-300)}.tab--active:focus-visible{outline:2px dashed var(--primary-800);border-bottom:none}.tab--active.disabled{color:var(--grey-600);text-align:center;display:inline-flex;padding:14px 16px;flex-direction:column;justify-content:center;align-items:center;border-bottom:2px solid var(--grey-600);cursor:not-allowed}.tab--active.disabled:hover{background:none}.tab--active.disabled:focus-visible{outline:none}.tab__set--plain{background-color:var(--info-blue);padding:12px 24px 0}.tab.tab--active a{font-weight:var(--hd-h5-font-weight)}.tab--border-top{background-color:var(--info-blue)}.tab__right{align-self:center;margin-left:auto}.tab__left{margin-right:auto;align-self:center;padding:16px 0 16px 16px}.tab--border-bottom-inactive{font-family:var(--bd-fnt-fm);line-height:var(--bd-fnt-ln-hgt-9);font-weight:var(--bd-fnt-wt-md);font-size:var(--bd-fnt-sz-3);text-align:center;color:var(--blue-grey-800);border-bottom:1px solid var(--blue-grey-400)}.tab--border-bottom-inactive:hover{background:var(--blue-grey-300)}.tab--border-bottom-inactive:focus-visible{outline:2px dashed var(--primary-800);border-bottom:none}.tab--border-bottom-inactive.disabled{color:var(--grey-600);text-align:center;display:inline-flex;padding:14px 16px;flex-direction:column;justify-content:center;align-items:center;border-bottom:1px solid var(--grey-100);cursor:not-allowed}.tab--border-bottom-inactive.disabled:hover{background:none}.tab--border-bottom-inactive.disabled:focus-visible{outline:none}.tabs--bottom{width:100%}\n"]
    }]
  }], () => [], {
    isDisabled: [{
      type: Input
    }],
    fullWidthTabs: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    stopTabs: [{
      type: Input
    }],
    selectedTab: [{
      type: Output
    }],
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    allowTabChange$: [{
      type: Input
    }],
    tabs: [{
      type: ContentChildren,
      args: [TabComponent]
    }]
  });
})();
var TextareaComponent = class _TextareaComponent {
  renderer;
  isDisabled = false;
  letterLimit;
  placeholder = "Enter description...";
  onTextareaValueChange = new EventEmitter();
  onFocusEvent = new EventEmitter();
  onBlurEvent = new EventEmitter();
  _hostClass = "";
  isFocused = false;
  isBlur = false;
  isError = false;
  textareaValue = "";
  totalLengthOfText = 0;
  isMobile = false;
  textareaElement;
  constructor(renderer) {
    this.renderer = renderer;
  }
  ngOnInit() {
  }
  ngDoCheck() {
    this.renderer.listen(window, "resize", () => {
      this.checkDeviceSize();
    });
  }
  checkDeviceSize() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    this.isMobile = windowWidth <= 400 && windowHeight <= 860;
    if (this.isMobile) {
      this.renderer.setStyle(this.textareaElement.nativeElement, "resize", "none");
    } else {
      this.renderer.setStyle(this.textareaElement.nativeElement, "resize", "both");
    }
  }
  writeValue(value) {
    this.textareaValue = value;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  validate(control) {
    control.statusChanges.subscribe((status) => {
      if (status === "INVALID") {
        this.isError = true;
        this.ngOnChanges();
      } else {
        this.isError = false;
        this.ngOnChanges();
      }
    });
    return null;
  }
  onTextareaChange(change) {
    this.onChange(change);
    this.onTextareaValueChange.emit(change);
    this.totalLengthOfText = change?.length;
  }
  onChange = (newValue) => {
    this.textareaValue = newValue;
  };
  onTouch = () => {
  };
  ngOnChanges() {
    if (this.isDisabled) {
      this._hostClass = "textarea--disabled";
    } else {
      this._hostClass = ` ${this.isError ? "textarea--error" : ""}`;
    }
  }
  onFocus() {
    this.isFocused = true;
    this.isBlur = false;
    this.onFocusEvent.emit(this.isFocused);
  }
  onBlur() {
    this.isBlur = true;
    this.isFocused = false;
    this.onBlurEvent.emit(this.isBlur);
  }
  static ɵfac = function TextareaComponent_Factory(t) {
    return new (t || _TextareaComponent)(ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TextareaComponent,
    selectors: [["ada-textarea"]],
    viewQuery: function TextareaComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c37, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textareaElement = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function TextareaComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx._hostClass);
      }
    },
    inputs: {
      isDisabled: "isDisabled",
      letterLimit: "letterLimit",
      placeholder: "placeholder"
    },
    outputs: {
      onTextareaValueChange: "onTextareaValueChange",
      onFocusEvent: "onFocusEvent",
      onBlurEvent: "onBlurEvent"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _TextareaComponent),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _TextareaComponent),
      multi: true
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c39,
    decls: 12,
    vars: 6,
    consts: [[1, "container"], [1, "container-label"], [1, "secondary-label"], [3, "ngModel", "disabled", "placeholder", "ngModelChange", "focus", "blur"], ["textareaElement", ""], [1, "main__hint--box"], ["class", "main__hint--box--hint", 4, "ngIf"], ["class", "main__hint--box--error", 4, "ngIf"], [1, "main__count-field"], ["class", "main__count-field--letterCount", 4, "ngIf"], [1, "main__hint--box--hint"], [1, "main__hint--box--error"], [1, "main__count-field--letterCount"]],
    template: function TextareaComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c38);
        ɵɵelementStart(0, "div", 0)(1, "label", 1);
        ɵɵprojection(2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "label", 2);
        ɵɵprojection(4, 1);
        ɵɵelementEnd()();
        ɵɵelementStart(5, "textarea", 3, 4);
        ɵɵlistener("ngModelChange", function TextareaComponent_Template_textarea_ngModelChange_5_listener($event) {
          return ctx.textareaValue = $event;
        })("ngModelChange", function TextareaComponent_Template_textarea_ngModelChange_5_listener($event) {
          return ctx.onTextareaChange($event);
        })("focus", function TextareaComponent_Template_textarea_focus_5_listener() {
          return ctx.onFocus();
        })("blur", function TextareaComponent_Template_textarea_blur_5_listener() {
          return ctx.onBlur();
        });
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 5);
        ɵɵtemplate(8, TextareaComponent_div_8_Template, 2, 0, "div", 6)(9, TextareaComponent_div_9_Template, 2, 0, "div", 7);
        ɵɵelementStart(10, "div", 8);
        ɵɵtemplate(11, TextareaComponent_label_11_Template, 2, 2, "label", 9);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance(5);
        ɵɵproperty("ngModel", ctx.textareaValue)("disabled", ctx.isDisabled)("placeholder", ctx.placeholder);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", !ctx.isError);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isError);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.letterLimit > 0);
      }
    },
    dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ReactiveFormsModule],
    styles: ["[_nghost-%COMP%]{box-sizing:border-box;position:relative;background:var(--white);font-family:var(--bd-fnt-fm);display:grid;grid-template-rows:0fr 1fr 0fr;gap:4px;margin:10px;width:-moz-fit-content;width:fit-content}[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{border-radius:4px;outline:none;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-2);letter-spacing:.25px;padding:12px 16px;resize:both;min-height:56px}[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:var(--blue-grey-600);font-size:var(--bd-fnt-sz-2)}[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]:hover{border:1px solid var(--blue-brand-primary)}[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]:focus-within{border:2px solid var(--blue-brand-primary)}[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px}[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:var(--grey-200);border-radius:8px;margin:8px 8px 8px 0;padding-right:8px}[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--grey-400);border-radius:8px}.textarea--disabled[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{border:1px solid var(--grey-200);background-color:var(--grey-100);cursor:not-allowed}.textarea--disabled[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]:hover{border:1px solid var(--grey-200)}.textarea--error[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{border:2px solid var(--red-base);background:var(--white)}.textarea--error[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]:hover{border:2px solid var(--red-base)}.textarea--error[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]:focus-within{outline:2px solid var(--error-feedback-color)}.container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;font-family:var(--bd-fnt-fm);font-weight:var(---bd-fnt-wt-md);font-size:var(--hd-fnt-sz-7);line-height:var(--bd-fnt-ln-hgt-9)}.container[_ngcontent-%COMP%]   .container-label[_ngcontent-%COMP%]{color:var(--primary-1000)}.container[_ngcontent-%COMP%]   .secondary-label[_ngcontent-%COMP%]{color:var(--grey-600);line-height:var(--bd-fnt-ln-hgt-4);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4)}.container[_ngcontent-%COMP%]   .disable[_ngcontent-%COMP%]{color:var(--grey-400)}.main__count-field--letterCount[_ngcontent-%COMP%]{line-height:var(--bd-fnt-ln-hgt-4);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4)}.main__hint--box[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:var(--grey-400)}.main__hint--box--hint[_ngcontent-%COMP%]{color:var(--grey-400);line-height:var(--bd-fnt-ln-hgt-4);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4)}.main__hint--box--error[_ngcontent-%COMP%]{font-size:var(--bd-fnt-sz-4);color:var(--error-feedback-color)}.textarea--disabled[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .textarea--disabled[_nghost-%COMP%]   .main__hint--box[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--grey-200)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaComponent, [{
    type: Component,
    args: [{
      selector: "ada-textarea",
      standalone: true,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TextareaComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => TextareaComponent),
        multi: true
      }],
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
      template: '<div class="container">\n  <label class="container-label">\n    <ng-content select="[label]"></ng-content>\n  </label>\n  <label class="secondary-label">\n    <ng-content select="[secondary_label]"></ng-content>\n  </label>\n</div>\n\n<textarea\n  #textareaElement\n  [(ngModel)]="textareaValue"\n  (ngModelChange)="onTextareaChange($event)"\n  [disabled]="isDisabled"\n  [placeholder]="placeholder"\n  (focus)="onFocus()"\n  (blur)="onBlur()"\n></textarea>\n\n<div class="main__hint--box">\n  <div class="main__hint--box--hint" *ngIf="!isError">\n    <ng-content select="[hintText]"></ng-content>\n  </div>\n\n  <div class="main__hint--box--error" *ngIf="isError">\n    <ng-content select="[errorText]"></ng-content>\n  </div>\n  <div class="main__count-field">\n    <label class="main__count-field--letterCount" *ngIf="letterLimit > 0">\n      {{ totalLengthOfText }}/{{ letterLimit }}\n    </label>\n  </div>\n</div>\n',
      styles: [":host{box-sizing:border-box;position:relative;background:var(--white);font-family:var(--bd-fnt-fm);display:grid;grid-template-rows:0fr 1fr 0fr;gap:4px;margin:10px;width:-moz-fit-content;width:fit-content}:host textarea{border-radius:4px;outline:none;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-2);letter-spacing:.25px;padding:12px 16px;resize:both;min-height:56px}:host textarea::placeholder{color:var(--blue-grey-600);font-size:var(--bd-fnt-sz-2)}:host textarea:hover{border:1px solid var(--blue-brand-primary)}:host textarea:focus-within{border:2px solid var(--blue-brand-primary)}:host textarea::-webkit-scrollbar{width:4px}:host textarea::-webkit-scrollbar-track{background-color:var(--grey-200);border-radius:8px;margin:8px 8px 8px 0;padding-right:8px}:host textarea::-webkit-scrollbar-thumb{background-color:var(--grey-400);border-radius:8px}:host.textarea--disabled textarea{border:1px solid var(--grey-200);background-color:var(--grey-100);cursor:not-allowed}:host.textarea--disabled textarea:hover{border:1px solid var(--grey-200)}:host.textarea--error textarea{border:2px solid var(--red-base);background:var(--white)}:host.textarea--error textarea:hover{border:2px solid var(--red-base)}:host.textarea--error textarea:focus-within{outline:2px solid var(--error-feedback-color)}.container{display:flex;justify-content:space-between;align-items:center;font-family:var(--bd-fnt-fm);font-weight:var(---bd-fnt-wt-md);font-size:var(--hd-fnt-sz-7);line-height:var(--bd-fnt-ln-hgt-9)}.container .container-label{color:var(--primary-1000)}.container .secondary-label{color:var(--grey-600);line-height:var(--bd-fnt-ln-hgt-4);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4)}.container .disable{color:var(--grey-400)}.main__count-field--letterCount{line-height:var(--bd-fnt-ln-hgt-4);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4)}.main__hint--box{display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:var(--grey-400)}.main__hint--box--hint{color:var(--grey-400);line-height:var(--bd-fnt-ln-hgt-4);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4)}.main__hint--box--error{font-size:var(--bd-fnt-sz-4);color:var(--error-feedback-color)}:host.textarea--disabled .container *,:host.textarea--disabled .main__hint--box *{color:var(--grey-200)}\n"]
    }]
  }], () => [{
    type: Renderer2
  }], {
    isDisabled: [{
      type: Input
    }],
    letterLimit: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    onTextareaValueChange: [{
      type: Output
    }],
    onFocusEvent: [{
      type: Output
    }],
    onBlurEvent: [{
      type: Output
    }],
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    textareaElement: [{
      type: ViewChild,
      args: ["textareaElement", {
        static: true
      }]
    }]
  });
})();
var InputComponent = class _InputComponent {
  isDisabled = false;
  placeholder = "Placeholder";
  type = "text";
  letterLimit = 0;
  size = "l";
  onInputValueChange = new EventEmitter();
  onFocusEvent = new EventEmitter(false);
  onBlurEvent = new EventEmitter(false);
  inputSize = "";
  constructor() {
  }
  inputValue = "";
  inputValueCount = 0;
  showError = false;
  isActive = false;
  isBlurActive = false;
  onChange = () => {
  };
  onTouched;
  onBlur = () => {
    this.isBlurActive = true;
    this.onBlurEvent.emit(this.isBlurActive);
  };
  writeValue(value) {
    this.inputValue = value;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  validate(control) {
    control.statusChanges.subscribe((status) => {
      this.showError = status === "INVALID";
    });
    this.inputValueCount = this.inputValue ? this.inputValue.length : this.inputValueCount;
    return null;
  }
  onInputChange(change) {
    this.onChange(change);
    this.inputValue = change;
    this.inputValueCount = this.inputValue ? this.inputValue.length : 0;
    this.onInputValueChange.emit(change);
  }
  onFocus(event2) {
    this.isActive = true;
    const sourceElement = event2.target;
    sourceElement.focus();
    this.onFocusEvent.emit(this.isActive);
  }
  onFocusOut() {
    this.isActive = false;
  }
  ngOnChanges() {
    this.inputSize = `height--${this.size}`;
  }
  static ɵfac = function InputComponent_Factory(t) {
    return new (t || _InputComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _InputComponent,
    selectors: [["ada-input"]],
    inputs: {
      isDisabled: "isDisabled",
      placeholder: "placeholder",
      type: "type",
      letterLimit: "letterLimit",
      size: "size"
    },
    outputs: {
      onInputValueChange: "onInputValueChange",
      onFocusEvent: "onFocusEvent",
      onBlurEvent: "onBlurEvent"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _InputComponent),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _InputComponent),
      multi: true
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c42,
    decls: 18,
    vars: 14,
    consts: [[1, "input__container", 3, "ngClass"], [1, "top__labels"], [1, "label"], [1, "label--tertiary"], [1, "input--prefix--holder"], [1, "input", 3, "ngModel", "disabled", "placeholder", "type", "ngModelChange", "blur", "focus", "focusout"], [1, "input--suffix--holder"], [1, "bottom__labels"], [1, "label--secondary"], ["class", "letter__count", 4, "ngIf"], [1, "letter__count"]],
    template: function InputComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c40);
        ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "label", 2);
        ɵɵprojection(3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "label", 3);
        ɵɵprojection(5, 1);
        ɵɵelementEnd()();
        ɵɵelementStart(6, "div")(7, "div", 4);
        ɵɵprojection(8, 2);
        ɵɵelementEnd();
        ɵɵelementStart(9, "input", 5);
        ɵɵlistener("ngModelChange", function InputComponent_Template_input_ngModelChange_9_listener($event) {
          return ctx.inputValue = $event;
        })("ngModelChange", function InputComponent_Template_input_ngModelChange_9_listener($event) {
          return ctx.onInputChange($event);
        })("blur", function InputComponent_Template_input_blur_9_listener() {
          return ctx.onBlur();
        })("focus", function InputComponent_Template_input_focus_9_listener($event) {
          return ctx.onFocus($event);
        })("focusout", function InputComponent_Template_input_focusout_9_listener() {
          return ctx.onFocusOut();
        });
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 6);
        ɵɵprojection(11, 3);
        ɵɵelementEnd()();
        ɵɵelementStart(12, "div", 7)(13, "label", 8);
        ɵɵprojection(14, 4);
        ɵɵprojection(15, 5);
        ɵɵprojection(16, 6);
        ɵɵelementEnd();
        ɵɵtemplate(17, InputComponent_div_17_Template, 2, 2, "div", 9);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction2(11, _c41, ctx.isDisabled, ctx.showError));
        ɵɵadvance(6);
        ɵɵclassMapInterpolate1("input__holder ", ctx.inputSize, "");
        ɵɵclassProp("active", ctx.isActive);
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.inputValue)("disabled", ctx.isDisabled)("placeholder", ctx.placeholder)("type", ctx.type);
        ɵɵadvance(8);
        ɵɵproperty("ngIf", ctx.letterLimit);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ReactiveFormsModule],
    styles: ["[_nghost-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [_nghost-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{appearance:none;margin:0}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill{box-shadow:0 0 0 50px #fff inset}[_nghost-%COMP%]   .input__holder[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:var(--white);outline:1px solid var(--blue-grey-600);border-radius:4px;padding:12px;box-sizing:border-box}[_nghost-%COMP%]   .input__holder[_ngcontent-%COMP%]:hover{outline:1px solid var(--primary-base)}[_nghost-%COMP%]   .input__holder.active[_ngcontent-%COMP%]{outline:2px solid var(--primary-base)}[_nghost-%COMP%]   .input__holder.active[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:var(--grey-900)}[_nghost-%COMP%]   .input__holder.height--l[_ngcontent-%COMP%]{height:48px}[_nghost-%COMP%]   .input__holder.height--s[_ngcontent-%COMP%]{height:32px}[_nghost-%COMP%]   .input__holder[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-2);line-height:var(--bd-fnt-ln-hgt-7);letter-spacing:var(--bd-fnt-2tr-spc)}[_nghost-%COMP%]   .input__holder[_ngcontent-%COMP%]   input.placeholderDisabled[_ngcontent-%COMP%]{color:var(--black)}[_nghost-%COMP%]   .input__holder[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:100%;height:inherit;padding:0;border:none;outline:none}[_nghost-%COMP%]   .input__holder[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]::placeholder{font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-2);line-height:var(--bd-fnt-ln-hgt-7);letter-spacing:var(--bd-fnt-2tr-spc);color:var(--grey-600)}[_nghost-%COMP%]   .input__holder[_ngcontent-%COMP%]   .input--prefix--holder[_ngcontent-%COMP%], [_nghost-%COMP%]   .input__holder[_ngcontent-%COMP%]   .input--suffix--holder[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.input__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;width:inherit}.input__container[_ngcontent-%COMP%]   .top__labels[_ngcontent-%COMP%], .input__container[_ngcontent-%COMP%]   .bottom__labels[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:8px;font-family:var(--lbl-inp-fld-fnt-fm);font-style:var(--lbl-inp-fld-fnt-style);letter-spacing:var(--bd-fnt-2tr-spc)}.input__container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:var(--bd-fnt-wt-md);color:var(--primary-1000);font-size:var(--bd-fnt-sz-3);line-height:var(--bd-fnt-ln-hgt-8);font-family:var(--bd-fnt-fm)}.input__container[_ngcontent-%COMP%]   .label--tertiary[_ngcontent-%COMP%], .input__container[_ngcontent-%COMP%]   .label--secondary[_ngcontent-%COMP%], .input__container[_ngcontent-%COMP%]   .letter__count[_ngcontent-%COMP%]{font-weight:var(--bd-fnt-wt-rg);color:var(--grey-600);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-7);font-family:var(--bd-fnt-fm)}.input__container[_ngcontent-%COMP%]   .label--secondary[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;color:var(--grey-700)}.input__container.disabled[_ngcontent-%COMP%]   .input__holder[_ngcontent-%COMP%]{color:var(--grey-400);outline:1px solid var(--grey-200);cursor:not-allowed}.input__container.disabled[_ngcontent-%COMP%]   .input__holder[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:var(--grey-400)}.input__container.disabled[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .input__container.disabled[_ngcontent-%COMP%]   .label--tertiary[_ngcontent-%COMP%], .input__container.disabled[_ngcontent-%COMP%]   .label--secondary[_ngcontent-%COMP%], .input__container.disabled[_ngcontent-%COMP%]   .letter__count[_ngcontent-%COMP%], .input__container.disabled[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]::placeholder{color:var(--grey-400);cursor:not-allowed}.input__container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled{color:var(--grey-400);background:var(--white);cursor:not-allowed}.input__container.error[_ngcontent-%COMP%]   .input__holder[_ngcontent-%COMP%]{background:var(--white);outline:2px solid var(--red-500);cursor:auto}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputComponent, [{
    type: Component,
    args: [{
      selector: "ada-input",
      standalone: true,
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => InputComponent),
        multi: true
      }],
      template: '<div\n  class="input__container"\n  [ngClass]="{ disabled: isDisabled, error: showError }"\n>\n  <div class="top__labels">\n    <label class="label">\n      <ng-content select="[label]"></ng-content>\n    </label>\n\n    <label class="label--tertiary">\n      <ng-content select="[tertiaryLabel]"></ng-content>\n    </label>\n  </div>\n  <div class="input__holder {{ inputSize }}" [class.active]="isActive">\n    <div class="input--prefix--holder">\n      <ng-content select="[inputPrefix]"></ng-content>\n    </div>\n    <input\n      class="input"\n      [(ngModel)]="inputValue"\n      (ngModelChange)="onInputChange($event)"\n      (blur)="onBlur()"\n      [disabled]="isDisabled"\n      [placeholder]="placeholder"\n      [type]="type"\n      (focus)="onFocus($event)"\n      (focusout)="onFocusOut()"\n    />\n    <div class="input--suffix--holder">\n      <ng-content select="[inputSuffix]"></ng-content>\n    </div>\n  </div>\n  <div class="bottom__labels">\n    <label class="label--secondary">\n      <ng-content select="[secondaryPrefix]"></ng-content>\n      <ng-content select="[secondaryLabel]"></ng-content>\n      <ng-content select="[secondarySuffix]"></ng-content>\n    </label>\n    <div class="letter__count" *ngIf="letterLimit">\n      {{ inputValueCount }}/{{ letterLimit }}\n    </div>\n  </div>\n</div>\n',
      styles: [":host input[type=number]::-webkit-inner-spin-button,:host input[type=number]::-webkit-outer-spin-button{appearance:none;margin:0}:host input:-webkit-autofill{box-shadow:0 0 0 50px #fff inset}:host .input__holder{display:flex;align-items:center;gap:8px;background:var(--white);outline:1px solid var(--blue-grey-600);border-radius:4px;padding:12px;box-sizing:border-box}:host .input__holder:hover{outline:1px solid var(--primary-base)}:host .input__holder.active{outline:2px solid var(--primary-base)}:host .input__holder.active input{color:var(--grey-900)}:host .input__holder.height--l{height:48px}:host .input__holder.height--s{height:32px}:host .input__holder input{font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-2);line-height:var(--bd-fnt-ln-hgt-7);letter-spacing:var(--bd-fnt-2tr-spc)}:host .input__holder input.placeholderDisabled{color:var(--black)}:host .input__holder .input{width:100%;height:inherit;padding:0;border:none;outline:none}:host .input__holder .input::placeholder{font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-2);line-height:var(--bd-fnt-ln-hgt-7);letter-spacing:var(--bd-fnt-2tr-spc);color:var(--grey-600)}:host .input__holder .input--prefix--holder,:host .input__holder .input--suffix--holder{display:flex;align-items:center;gap:8px}.input__container{display:flex;flex-direction:column;gap:4px;width:inherit}.input__container .top__labels,.input__container .bottom__labels{display:flex;justify-content:space-between;align-items:center;gap:8px;font-family:var(--lbl-inp-fld-fnt-fm);font-style:var(--lbl-inp-fld-fnt-style);letter-spacing:var(--bd-fnt-2tr-spc)}.input__container .label{font-weight:var(--bd-fnt-wt-md);color:var(--primary-1000);font-size:var(--bd-fnt-sz-3);line-height:var(--bd-fnt-ln-hgt-8);font-family:var(--bd-fnt-fm)}.input__container .label--tertiary,.input__container .label--secondary,.input__container .letter__count{font-weight:var(--bd-fnt-wt-rg);color:var(--grey-600);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-7);font-family:var(--bd-fnt-fm)}.input__container .label--secondary{display:flex;align-items:center;gap:4px;color:var(--grey-700)}.input__container.disabled .input__holder{color:var(--grey-400);outline:1px solid var(--grey-200);cursor:not-allowed}.input__container.disabled .input__holder ::placeholder{color:var(--grey-400)}.input__container.disabled .label,.input__container.disabled .label--tertiary,.input__container.disabled .label--secondary,.input__container.disabled .letter__count,.input__container.disabled .input::placeholder{color:var(--grey-400);cursor:not-allowed}.input__container input:disabled{color:var(--grey-400);background:var(--white);cursor:not-allowed}.input__container.error .input__holder{background:var(--white);outline:2px solid var(--red-500);cursor:auto}\n"]
    }]
  }], () => [], {
    isDisabled: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    letterLimit: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    onInputValueChange: [{
      type: Output
    }],
    onFocusEvent: [{
      type: Output
    }],
    onBlurEvent: [{
      type: Output
    }]
  });
})();
var IconComponent = class _IconComponent {
  _elementRef;
  icon;
  type;
  _icon;
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
  ngOnChanges() {
    this._icon = this.type ? this.icon + "-" + this.type : this.icon;
    const content = this._createIcon();
    if (content) {
      if (this._elementRef.nativeElement.children.length) {
        this._elementRef.nativeElement.removeChild(this._elementRef.nativeElement.children[0]);
      }
      this._elementRef.nativeElement.appendChild(content);
    }
  }
  _createIcon() {
    try {
      let icon = null;
      const iconSplit = this._icon.split(":");
      const iconSetProvided = iconSplit.length > 1;
      const iconSetName = iconSetProvided ? iconSplit.shift() : "default";
      const iconName = iconSetProvided ? iconSplit.pop() : this._icon;
      const iconSet = document.head.querySelector(`template#${iconSetName}`);
      if (iconSet && iconSet.content && iconName) {
        let selectedIcon = iconSet.content.querySelector(`[name=${iconName}]`);
        selectedIcon = selectedIcon ? selectedIcon.querySelector(`svg`) : null;
        icon = selectedIcon ? selectedIcon.cloneNode(true) : icon;
      }
      return icon;
    } catch (error) {
      return null;
    }
  }
  static ɵfac = function IconComponent_Factory(t) {
    return new (t || _IconComponent)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _IconComponent,
    selectors: [["ada-icon"]],
    inputs: {
      icon: "icon",
      type: "type"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function IconComponent_Template(rf, ctx) {
    },
    dependencies: [CommonModule],
    styles: ["[_nghost-%COMP%]{display:inline-block;line-height:0}.small[_nghost-%COMP%]{height:24px;width:24px}.medium[_nghost-%COMP%]{height:32px;width:32px}.large[_nghost-%COMP%]{height:72px;width:72px}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      selector: "ada-icon",
      standalone: true,
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "",
      styles: [":host{display:inline-block;line-height:0}:host.small{height:24px;width:24px}:host.medium{height:32px;width:32px}:host.large{height:72px;width:72px}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    icon: [{
      type: Input
    }],
    type: [{
      type: Input
    }]
  });
})();
var SearchInputComponent = class _SearchInputComponent {
  overlay;
  _hostClass;
  searchType;
  placeholder = "Search";
  isDisable = false;
  isSmall = false;
  get value() {
    return this.localValue;
  }
  set value(val) {
    if (val !== void 0 && this.localValue !== val) {
      this.localValue = val;
    }
  }
  onFocus = new EventEmitter();
  onInputValueChange = new EventEmitter();
  nativeInput;
  constructor(overlay) {
    this.overlay = overlay;
  }
  localValue = "";
  isSearchActive = false;
  iconChange = false;
  searchIcon = "assets/md-search-default.svg";
  disabledSearchIcon = "assets/md-search-default-disabled.svg";
  closeIcon = "assets/clear-icon.svg";
  disabledCloseIcon = "assets/clear-icon-disabled.svg";
  ngOnChanges() {
    this._hostClass = this.isDisable ? "search--disabled" : "";
    this._hostClass += this.isSmall ? " search__button--small" : "";
    if (this.searchType == "searchButton") {
      this._hostClass += " search__button";
    }
  }
  onChange = (newValue) => {
    this.localValue = newValue;
    this.onInputValueChange.emit(newValue);
  };
  onTouch = () => {
  };
  emitFocusEvent() {
    this.onFocus.emit(true);
  }
  onValueChange(val) {
    this.onChange(val);
    this.onTouch(val);
  }
  writeValue(parameterValue) {
    this.value = parameterValue;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  isSearchButtonClicked() {
    if (this.searchType == "searchButton") {
      this.isSearchActive = !this.isSearchActive;
      if (this.isSearchActive == true) {
        this._hostClass += " input--active";
        setTimeout(() => {
          this.nativeInput.nativeElement.focus();
        }, 100);
      } else {
        this._hostClass = "search__button";
      }
    }
  }
  clearText() {
    this.localValue = "";
    this.onInputValueChange.emit("");
  }
  closeSearch() {
  }
  static ɵfac = function SearchInputComponent_Factory(t) {
    return new (t || _SearchInputComponent)(ɵɵdirectiveInject(Overlay));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SearchInputComponent,
    selectors: [["ada-search"]],
    viewQuery: function SearchInputComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c43, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nativeInput = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function SearchInputComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx._hostClass);
      }
    },
    inputs: {
      searchType: "searchType",
      placeholder: "placeholder",
      isDisable: "isDisable",
      isSmall: "isSmall",
      value: "value"
    },
    outputs: {
      onFocus: "onFocus",
      onInputValueChange: "onInputValueChange"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SearchInputComponent),
      multi: true
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 7,
    vars: 12,
    consts: [[1, "input__icon-wrapper", 3, "ngClass"], [1, "input__icon-button", 3, "ngClass", "click"], ["class", "input__icon search", 4, "ngIf"], [3, "click", 4, "ngIf"], ["type", "text", 1, "input__body", 3, "placeholder", "ngModel", "disabled", "ngModelChange", "focus", "blur"], ["nativeInput", ""], [1, "input__icon", "search"], [1, "input__icon-search-button"], ["alt", "search Icon", 3, "src"], [3, "click"], ["alt", "close Icon", 3, "src"]],
    template: function SearchInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainerStart(0);
        ɵɵelementStart(1, "div", 0)(2, "div", 1);
        ɵɵlistener("click", function SearchInputComponent_Template_div_click_2_listener() {
          return ctx.isSearchButtonClicked();
        });
        ɵɵtemplate(3, SearchInputComponent_div_3_Template, 3, 1, "div", 2);
        ɵɵelementEnd();
        ɵɵtemplate(4, SearchInputComponent_div_4_Template, 3, 1, "div", 3);
        ɵɵelementEnd();
        ɵɵelementStart(5, "input", 4, 5);
        ɵɵlistener("ngModelChange", function SearchInputComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.localValue = $event;
        })("ngModelChange", function SearchInputComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.onValueChange($event);
        })("focus", function SearchInputComponent_Template_input_focus_5_listener() {
          return ctx.emitFocusEvent();
        })("blur", function SearchInputComponent_Template_input_blur_5_listener() {
          return ctx.closeSearch();
        });
        ɵɵelementEnd();
        ɵɵelementContainerEnd();
      }
      if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction2(7, _c44, !ctx.isSearchActive, ctx.isSmall));
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction1(10, _c45, !ctx.isSearchActive));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.value);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.value);
        ɵɵadvance(1);
        ɵɵproperty("placeholder", ctx.placeholder)("ngModel", ctx.localValue)("disabled", ctx.isDisable);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel],
    styles: ["[_nghost-%COMP%]{display:flex;border-radius:4px;background-color:var(--white);outline:1px solid var(--blue-grey-600);position:relative;height:40px}.search--disabled[_nghost-%COMP%]{outline:1px solid var(--grey-200);pointer-events:none}.focus-within[_nghost-%COMP%]{border:none;outline:2px solid var(--primary-15)}.input__body[_nghost-%COMP%]::placeholder{color:var(--grey-500)}.input--disable[_nghost-%COMP%]{position:relative}.input--disable-field[_nghost-%COMP%]:hover{outline:1px solid var(--blue-grey-200)}.search__button[_nghost-%COMP%]{width:40px;height:40px;float:right;-webkit-user-select:none;user-select:none;transition:width .2s ease-in-out}.search__button--small[_nghost-%COMP%]{height:32px;-webkit-user-select:none;user-select:none;transition:width .2s ease-in-out}.search__button[_nghost-%COMP%]   .input__body[_ngcontent-%COMP%]{display:none}.search__button.input--active[_nghost-%COMP%]   .input__body[_ngcontent-%COMP%]{display:block}.search__button--small.input--active[_nghost-%COMP%]   .input__body[_ngcontent-%COMP%]{display:block}.input__icon[_nghost-%COMP%]{padding:0 0 0 16px;width:44px}.search__button[_nghost-%COMP%]   .input__icon[_ngcontent-%COMP%]{width:24px}.search__button--small[_nghost-%COMP%]   .input__icon[_ngcontent-%COMP%]{width:24px}.search__button.input--active[_nghost-%COMP%]{width:100%;transition:width .2s ease-in-out}.search__button--small.input--active[_nghost-%COMP%]{width:100%;transition:width .2s ease-in-out}[_nghost-%COMP%]   .input__body[_ngcontent-%COMP%]{padding:0 0 0 8px;border:none;border-radius:4px;width:100%;outline:none;letter-spacing:var(--bd-txt-letter-spacing);background-color:var(--white)}[_nghost-%COMP%]   .input__body[_ngcontent-%COMP%]::placeholder{color:var(--grey-700)}[_nghost-%COMP%]:hover{border:none;outline:1px solid var(--primary-base);border-radius:4px}.input__body[_ngcontent-%COMP%]:disabled{border:none;color:var(--grey-400)}.input__body[_ngcontent-%COMP%]:disabled::placeholder{color:var(--grey-400)}.input__icon-wrapper[_ngcontent-%COMP%]{display:flex;border-radius:4px;align-items:center;justify-content:center;width:40px;cursor:pointer}[_nghost-%COMP%]:focus-within{outline:2px solid var(--primary-base)}[_nghost-%COMP%]:active{outline:2px solid var(--primary-700)}.input__icon-button[_ngcontent-%COMP%]{border:none;background-color:var(--white);cursor:pointer;display:flex;justify-content:center;align-items:center}.input__background--active[_ngcontent-%COMP%]:hover{background-color:var(--white)}.input__icon-search-button[_ngcontent-%COMP%]{margin-top:3px}"],
    data: {
      animation: [trigger("expandInput", [state("true", style({
        opacity: 0
      })), state("false", style({
        opacity: 0
      })), transition("false => true , * => true , void => true", animate("100ms ease-in")), transition("true => false", animate("300ms  ease-out"))])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchInputComponent, [{
    type: Component,
    args: [{
      selector: "ada-search",
      standalone: true,
      imports: [CommonModule, FormsModule, IconComponent, ButtonComponent, ButtonIconComponent],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SearchInputComponent),
        multi: true
      }],
      animations: [trigger("expandInput", [state("true", style({
        opacity: 0
      })), state("false", style({
        opacity: 0
      })), transition("false => true , * => true , void => true", animate("100ms ease-in")), transition("true => false", animate("300ms  ease-out"))])],
      template: `<ng-container>
  <div
    [ngClass]="{
      'input__background--active': !isSearchActive,
      'search__button--small': isSmall
    }"
    class="input__icon-wrapper"
  >
    <div
      [ngClass]="{ 'input__background--active': !isSearchActive }"
      class="input__icon-button"
      (click)="isSearchButtonClicked()"
    >
      <div class="input__icon search" *ngIf="!value">
        <div class="input__icon-search-button">
          <img
            [src]="isDisable ? disabledSearchIcon : searchIcon"
            alt="search Icon"
          />
        </div>
      </div>
    </div>
    <div *ngIf="value" (click)="clearText()">
      <div class="input__icon-search-button">
        <img
          [src]="isDisable ? disabledCloseIcon : closeIcon"
          alt="close Icon"
        />
      </div>
    </div>
  </div>

  <input
    #nativeInput
    class="input__body"
    type="text"
    [placeholder]="placeholder"
    [(ngModel)]="localValue"
    [disabled]="isDisable"
    (ngModelChange)="onValueChange($event)"
    (focus)="emitFocusEvent()"
    (blur)="closeSearch()"
  />
</ng-container>
`,
      styles: [":host{display:flex;border-radius:4px;background-color:var(--white);outline:1px solid var(--blue-grey-600);position:relative;height:40px}:host.search--disabled{outline:1px solid var(--grey-200);pointer-events:none}:host.focus-within{border:none;outline:2px solid var(--primary-15)}:host.input__body::placeholder{color:var(--grey-500)}:host.input--disable{position:relative}:host.input--disable-field:hover{outline:1px solid var(--blue-grey-200)}:host.search__button{width:40px;height:40px;float:right;-webkit-user-select:none;user-select:none;transition:width .2s ease-in-out}:host.search__button--small{height:32px;-webkit-user-select:none;user-select:none;transition:width .2s ease-in-out}:host.search__button .input__body{display:none}:host.search__button.input--active .input__body{display:block}:host.search__button--small.input--active .input__body{display:block}:host.input__icon{padding:0 0 0 16px;width:44px}:host.search__button .input__icon{width:24px}:host.search__button--small .input__icon{width:24px}:host.search__button.input--active{width:100%;transition:width .2s ease-in-out}:host.search__button--small.input--active{width:100%;transition:width .2s ease-in-out}:host .input__body{padding:0 0 0 8px;border:none;border-radius:4px;width:100%;outline:none;letter-spacing:var(--bd-txt-letter-spacing);background-color:var(--white)}:host .input__body::placeholder{color:var(--grey-700)}:host:hover{border:none;outline:1px solid var(--primary-base);border-radius:4px}.input__body:disabled{border:none;color:var(--grey-400)}.input__body:disabled::placeholder{color:var(--grey-400)}.input__icon-wrapper{display:flex;border-radius:4px;align-items:center;justify-content:center;width:40px;cursor:pointer}:host:focus-within{outline:2px solid var(--primary-base)}:host:active{outline:2px solid var(--primary-700)}.input__icon-button{border:none;background-color:var(--white);cursor:pointer;display:flex;justify-content:center;align-items:center}.input__background--active:hover{background-color:var(--white)}.input__icon-search-button{margin-top:3px}\n"]
    }]
  }], () => [{
    type: Overlay
  }], {
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    searchType: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    isDisable: [{
      type: Input
    }],
    isSmall: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    onFocus: [{
      type: Output
    }],
    onInputValueChange: [{
      type: Output
    }],
    nativeInput: [{
      type: ViewChild,
      args: ["nativeInput"]
    }]
  });
})();
var Months$1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var Month$1;
(function(Month2) {
  Month2[Month2["January"] = 0] = "January";
  Month2[Month2["February"] = 1] = "February";
  Month2[Month2["March"] = 2] = "March";
  Month2[Month2["April"] = 3] = "April";
  Month2[Month2["May"] = 4] = "May";
  Month2[Month2["June"] = 5] = "June";
  Month2[Month2["July"] = 6] = "July";
  Month2[Month2["August"] = 7] = "August";
  Month2[Month2["September"] = 8] = "September";
  Month2[Month2["October"] = 9] = "October";
  Month2[Month2["November"] = 10] = "November";
  Month2[Month2["December"] = 11] = "December";
})(Month$1 || (Month$1 = {}));
var DisplayStatus$1 = {
  DATES: "DATES",
  YEARS: "YEARS",
  MONTHS: "MONTHS"
};
var YearStartDifference$1 = 24;
var CalendarHeader = class _CalendarHeader {
  selectedYear;
  selectedMonth;
  displayStatus = DisplayStatus$1.DATES;
  yearStart = new CustomDate().getFullYear();
  date = new CustomDate();
  emitDisplayStatus = new EventEmitter();
  yearRangeChange = new EventEmitter();
  activeMonthChange = new EventEmitter();
  yearChange = new EventEmitter();
  yearRange;
  ngOnInit() {
    this.showYearRange();
  }
  ngOnChanges(changes) {
    if (changes["yearStart"]) {
      this.showYearRange();
    }
  }
  changeDisplayStatus() {
    const statusTransitions = {
      [DisplayStatus$1.DATES]: () => {
        this.displayStatus = DisplayStatus$1.YEARS;
        this.showYearRange();
      },
      [DisplayStatus$1.YEARS]: () => {
        if (!this.selectedYear || this.selectedYear && !this.selectedMonth) {
          this.displayStatus = DisplayStatus$1.DATES;
        }
      },
      [DisplayStatus$1.MONTHS]: () => {
        if (!this.selectedMonth) {
          this.displayStatus = DisplayStatus$1.YEARS;
        }
      }
    };
    const transition2 = statusTransitions[this.displayStatus];
    transition2 ? transition2() : null;
    this.emitDisplayStatus.emit(this.displayStatus);
  }
  showYearRange() {
    const yearEnd = this.yearStart + 23;
    this.yearRange = this.yearStart + "-" + yearEnd;
  }
  onStepClicked(delta) {
    const displayStatusActions = {
      [DisplayStatus$1.DATES]: () => this.activeMonthChange.emit(delta),
      [DisplayStatus$1.YEARS]: () => this.yearRangeChange.emit(delta),
      [DisplayStatus$1.MONTHS]: () => this.yearChange.emit(delta)
    };
    const displayStatusAction = displayStatusActions[this.displayStatus];
    displayStatusAction ? displayStatusAction() : null;
  }
  static ɵfac = function CalendarHeader_Factory(t) {
    return new (t || _CalendarHeader)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CalendarHeader,
    selectors: [["calendar-header"]],
    inputs: {
      selectedYear: "selectedYear",
      selectedMonth: "selectedMonth",
      displayStatus: "displayStatus",
      yearStart: "yearStart",
      date: "date"
    },
    outputs: {
      emitDisplayStatus: "emitDisplayStatus",
      yearRangeChange: "yearRangeChange",
      activeMonthChange: "activeMonthChange",
      yearChange: "yearChange"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 13,
    vars: 5,
    consts: [[1, "calendar-header", "row-align-center"], [1, "calendar-header--label", "row-align-center", "h-24", 3, "click"], ["class", "calendar-header--caption", 4, "ngIf"], [1, "calendar-header--caret", "w-24", "h-24", "row-align-center"], [3, "ngIf"], [1, "calendar-header--arrow"], ["area-label", "previous", 1, "chevron-left", "w-24", "h-24", "row-align-center", 3, "click"], ["src", "../assets/icons/md-caret-left.svg", "alt", "caret-left"], ["area-label", "next", 1, "chevron-right", "w-24", "h-24", "row-align-center", 3, "click"], ["src", "../assets/icons/md-caret-right.svg", "alt", "caret-right"], [1, "calendar-header--caption"], ["src", "../assets/icons/md-caret-down.svg", "alt", "caret-down"], ["src", "../assets/icons/md-caret-up.svg", "alt", "caret-up"]],
    template: function CalendarHeader_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0)(1, "div", 1);
        ɵɵlistener("click", function CalendarHeader_Template_div_click_1_listener() {
          return ctx.changeDisplayStatus();
        });
        ɵɵtemplate(2, CalendarHeader_div_2_Template, 4, 6, "div", 2)(3, CalendarHeader_div_3_Template, 2, 1, "div", 2)(4, CalendarHeader_div_4_Template, 2, 1, "div", 2);
        ɵɵelementStart(5, "div", 3);
        ɵɵtemplate(6, CalendarHeader_ng_template_6_Template, 1, 0, "ng-template", 4)(7, CalendarHeader_ng_template_7_Template, 1, 0, "ng-template", 4);
        ɵɵelementEnd()();
        ɵɵelementStart(8, "div", 5)(9, "div", 6);
        ɵɵlistener("click", function CalendarHeader_Template_div_click_9_listener() {
          return ctx.onStepClicked(-1);
        });
        ɵɵelement(10, "img", 7);
        ɵɵelementEnd();
        ɵɵelementStart(11, "div", 8);
        ɵɵlistener("click", function CalendarHeader_Template_div_click_11_listener() {
          return ctx.onStepClicked(1);
        });
        ɵɵelement(12, "img", 9);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.displayStatus === "DATES");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.displayStatus === "YEARS");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.displayStatus === "MONTHS");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.displayStatus === "DATES");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.displayStatus != "DATES");
      }
    },
    dependencies: [CommonModule, NgIf, UpperCasePipe, DatePipe],
    styles: [".calendar-header[_ngcontent-%COMP%]{justify-content:space-between;padding:24px 24px 16px}.calendar-header--label[_ngcontent-%COMP%]{gap:4px;cursor:pointer}.calendar-header--caption[_ngcontent-%COMP%]{font-family:var(--btn-fnt-fm);font-weight:var(--bd-fnt-wt-md);line-height:var(--bd-fnt-ln-hgt-6);letter-spacing:var(--bd-fnt-ltr-spc);font-size:var(--bd-fnt-sz-3);color:var(--black);text-align:center}.calendar-header--caret[_ngcontent-%COMP%]{justify-content:center}.calendar-header--arrow[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:64px}.calendar-header--arrow[_ngcontent-%COMP%]   .chevron-left[_ngcontent-%COMP%], .calendar-header--arrow[_ngcontent-%COMP%]   .chevron-right[_ngcontent-%COMP%]{justify-content:center;cursor:pointer}.row-align-center[_ngcontent-%COMP%]{display:flex;align-items:center}.w-24[_ngcontent-%COMP%]{width:24px}.h-24[_ngcontent-%COMP%]{height:24px}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarHeader, [{
    type: Component,
    args: [{
      selector: "calendar-header",
      imports: [CommonModule],
      standalone: true,
      template: `<div class="calendar-header row-align-center">
  <div
    class="calendar-header--label row-align-center h-24"
    (click)="changeDisplayStatus()"
  >
    <div class="calendar-header--caption" *ngIf="displayStatus === 'DATES'">
      {{ date | date : "MMM YYYY" | uppercase }}
    </div>
    <div class="calendar-header--caption" *ngIf="displayStatus === 'YEARS'">
      {{ yearRange }}
    </div>
    <div class="calendar-header--caption" *ngIf="displayStatus === 'MONTHS'">
      {{ selectedYear }}
    </div>
    <div class="calendar-header--caret w-24 h-24 row-align-center">
      <ng-template [ngIf]="displayStatus === 'DATES'">
        <img src="../assets/icons/md-caret-down.svg" alt="caret-down" />
      </ng-template>
      <ng-template [ngIf]="displayStatus != 'DATES'">
        <img src="../assets/icons/md-caret-up.svg" alt="caret-up" />
      </ng-template>
    </div>
  </div>
  <div class="calendar-header--arrow">
    <div
      class="chevron-left w-24 h-24 row-align-center"
      area-label="previous"
      (click)="onStepClicked(-1)"
    >
      <img src="../assets/icons/md-caret-left.svg" alt="caret-left" />
    </div>
    <div
      class="chevron-right w-24 h-24 row-align-center"
      area-label="next"
      (click)="onStepClicked(1)"
    >
      <img src="../assets/icons/md-caret-right.svg" alt="caret-right" />
    </div>
  </div>
</div>
`,
      styles: [".calendar-header{justify-content:space-between;padding:24px 24px 16px}.calendar-header--label{gap:4px;cursor:pointer}.calendar-header--caption{font-family:var(--btn-fnt-fm);font-weight:var(--bd-fnt-wt-md);line-height:var(--bd-fnt-ln-hgt-6);letter-spacing:var(--bd-fnt-ltr-spc);font-size:var(--bd-fnt-sz-3);color:var(--black);text-align:center}.calendar-header--caret{justify-content:center}.calendar-header--arrow{display:flex;justify-content:space-between;width:64px}.calendar-header--arrow .chevron-left,.calendar-header--arrow .chevron-right{justify-content:center;cursor:pointer}.row-align-center{display:flex;align-items:center}.w-24{width:24px}.h-24{height:24px}\n"]
    }]
  }], null, {
    selectedYear: [{
      type: Input
    }],
    selectedMonth: [{
      type: Input
    }],
    displayStatus: [{
      type: Input
    }],
    yearStart: [{
      type: Input
    }],
    date: [{
      type: Input
    }],
    emitDisplayStatus: [{
      type: Output
    }],
    yearRangeChange: [{
      type: Output
    }],
    activeMonthChange: [{
      type: Output
    }],
    yearChange: [{
      type: Output
    }]
  });
})();
var YearMonthListComponent = class _YearMonthListComponent {
  monthList = Months$1;
  currentMonth = "";
  currentYear;
  yearList;
  currentFullDate = new CustomDate();
  displayStatus = "";
  yearStart = new CustomDate().getFullYear();
  selectedYear;
  selectedMonth;
  closeMonthList = new EventEmitter();
  closeYearList = new EventEmitter();
  ngOnInit() {
    this.currentMonth = this.monthList[this.currentFullDate.getMonth()];
    this.currentYear = this.currentFullDate.getFullYear();
    this.getYearList(this.yearStart);
  }
  ngOnChanges(changes) {
    if (changes["yearStart"]) {
      this.getYearList(changes["yearStart"].currentValue);
    }
  }
  isActiveMonth(month) {
    return this.currentMonth === month;
  }
  isSelectedMonth(month) {
    return this.selectedMonth === month;
  }
  isSelectedYear(year) {
    return this.selectedYear === year;
  }
  isActiveYear(year) {
    return this.currentYear === year && this.selectedYear !== year;
  }
  getYearList(yearStart) {
    this.yearList = this.generateYearList(yearStart);
  }
  generateYearList(startYear) {
    return Array.from({
      length: 24
    }, (_, idx) => {
      return startYear + idx;
    });
  }
  onMonthSelected(month, monthIndex) {
    this.selectedMonth = month;
    this.displayStatus = DisplayStatus$1.DATES;
    this.closeMonthList.emit({
      selectedMonth: this.selectedMonth,
      selectedMonthIndex: monthIndex,
      displayStatus: DisplayStatus$1.DATES
    });
  }
  OnYearSelected(year) {
    this.selectedYear = year;
    this.closeYearList.emit({
      selectedYear: this.selectedYear,
      displayStatus: DisplayStatus$1.MONTHS
    });
  }
  static ɵfac = function YearMonthListComponent_Factory(t) {
    return new (t || _YearMonthListComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _YearMonthListComponent,
    selectors: [["year-month-list"]],
    inputs: {
      displayStatus: "displayStatus",
      yearStart: "yearStart",
      selectedYear: "selectedYear",
      selectedMonth: "selectedMonth"
    },
    outputs: {
      closeMonthList: "closeMonthList",
      closeYearList: "closeYearList"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 2,
    consts: [["class", "year-container", "role", "list", 4, "ngIf"], ["class", "month-container", "role", "list", 4, "ngIf"], ["role", "list", 1, "year-container"], ["class", "selected-month", 4, "ngFor", "ngForOf"], [1, "selected-month"], ["role", "listitem", 1, "year", 3, "ngClass", "click"], ["role", "list", 1, "month-container"], ["role", "listitem", 1, "month", 3, "ngClass", "click"]],
    template: function YearMonthListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, YearMonthListComponent_div_0_Template, 2, 1, "div", 0)(1, YearMonthListComponent_div_1_Template, 2, 1, "div", 1);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.displayStatus === "YEARS");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.displayStatus === "MONTHS");
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, UpperCasePipe],
    styles: [".month-container[_ngcontent-%COMP%], .year-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,48px);align-items:center;column-gap:24px;row-gap:16px}.month-container[_ngcontent-%COMP%]{grid-template-rows:repeat(3,36px)}.year-container[_ngcontent-%COMP%]{grid-template-rows:repeat(6,36px)}.month[_ngcontent-%COMP%], .year[_ngcontent-%COMP%]{cursor:pointer;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);line-height:var(--bd-fnt-ln-hgt-4);font-size:var(--bd-fnt-sz-4);letter-spacing:var(--bd-fnt-ltr-spc);width:100%;display:flex;justify-content:center;align-items:center;height:24px;box-sizing:border-box}.month[_ngcontent-%COMP%]:hover, .year[_ngcontent-%COMP%]:hover{background:var(--secondary-normal)}.month--selected[_ngcontent-%COMP%], .month--selected[_ngcontent-%COMP%]:hover, .year--selected[_ngcontent-%COMP%], .year--selected[_ngcontent-%COMP%]:hover{color:var(--white);background:var(--blue-brand-primary);border-radius:4px}.month--active[_ngcontent-%COMP%], .year--active[_ngcontent-%COMP%]{border:1px solid var(--blue-brand-primary);border-radius:4px}.selected-month[_ngcontent-%COMP%]{color:var(--grey-900);height:36px;display:flex;align-items:center;justify-content:center}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YearMonthListComponent, [{
    type: Component,
    args: [{
      selector: "year-month-list",
      imports: [CommonModule],
      standalone: true,
      template: `<div class="year-container" role="list" *ngIf="displayStatus === 'YEARS'">
  <div class="selected-month" *ngFor="let year of yearList">
    <div
      class="year"
      role="listitem"
      [attr.aria-label]="year"
      [ngClass]="{
        'year--selected': isSelectedYear(year),
        'year--active': isActiveYear(year)
      }"
      (click)="OnYearSelected(year)"
    >
      {{ year }}
    </div>
  </div>
</div>

<div class="month-container" role="list" *ngIf="displayStatus === 'MONTHS'">
  <div
    class="selected-month"
    *ngFor="let month of monthList; let index = index"
  >
    <div
      class="month"
      role="listitem"
      [attr.aria-label]="month"
      [ngClass]="{
        'month--selected': isSelectedMonth(month),
        'month--active': isActiveMonth(month)
      }"
      (click)="onMonthSelected(month, index)"
    >
      {{ month | uppercase }}
    </div>
  </div>
</div>
`,
      styles: [".month-container,.year-container{display:grid;grid-template-columns:repeat(4,48px);align-items:center;column-gap:24px;row-gap:16px}.month-container{grid-template-rows:repeat(3,36px)}.year-container{grid-template-rows:repeat(6,36px)}.month,.year{cursor:pointer;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);line-height:var(--bd-fnt-ln-hgt-4);font-size:var(--bd-fnt-sz-4);letter-spacing:var(--bd-fnt-ltr-spc);width:100%;display:flex;justify-content:center;align-items:center;height:24px;box-sizing:border-box}.month:hover,.year:hover{background:var(--secondary-normal)}.month--selected,.month--selected:hover,.year--selected,.year--selected:hover{color:var(--white);background:var(--blue-brand-primary);border-radius:4px}.month--active,.year--active{border:1px solid var(--blue-brand-primary);border-radius:4px}.selected-month{color:var(--grey-900);height:36px;display:flex;align-items:center;justify-content:center}\n"]
    }]
  }], null, {
    displayStatus: [{
      type: Input
    }],
    yearStart: [{
      type: Input
    }],
    selectedYear: [{
      type: Input
    }],
    selectedMonth: [{
      type: Input
    }],
    closeMonthList: [{
      type: Output
    }],
    closeYearList: [{
      type: Output
    }]
  });
})();
var DaysOfWeekComponent = class _DaysOfWeekComponent {
  localeId;
  daysOfWeek;
  _locale;
  get locale() {
    return this._locale;
  }
  set locale(locale) {
    this._locale = locale || this.localeId;
    this.daysOfWeek = this.getDaysOfWeek();
  }
  constructor(localeId) {
    this.localeId = localeId;
  }
  ngOnInit() {
    if (!this.locale) {
      this.locale = this.localeId;
    }
  }
  getDaysOfWeek() {
    return getLocaleDayNames(this.locale, FormStyle.Format, TranslationWidth.Short);
  }
  static ɵfac = function DaysOfWeekComponent_Factory(t) {
    return new (t || _DaysOfWeekComponent)(ɵɵdirectiveInject(LOCALE_ID));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DaysOfWeekComponent,
    selectors: [["days-of-week"]],
    inputs: {
      locale: "locale"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 2,
    vars: 1,
    consts: [["role", "row", "aria-label", "Days of the week", 1, "days-of-week"], ["class", "days-of-week__day", "role", "columnheader", "tabindex", "-1", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader", "tabindex", "-1", 1, "days-of-week__day", 3, "title"]],
    template: function DaysOfWeekComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, DaysOfWeekComponent_abbr_1_Template, 2, 3, "abbr", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.daysOfWeek);
      }
    },
    dependencies: [CommonModule, NgForOf],
    styles: [".days-of-week[_ngcontent-%COMP%]{display:flex;gap:2px}.days-of-week__day[_ngcontent-%COMP%]{text-decoration:none;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);line-height:var(--bd-fnt-ln-hgt-4);font-size:var(--bd-fnt-sz-4);letter-spacing:var(--bd-fnt-2tr-spc);color:var(--black);display:flex;align-items:center;justify-content:center;padding:8px;box-sizing:border-box;width:36px;height:36px}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DaysOfWeekComponent, [{
    type: Component,
    args: [{
      selector: "days-of-week",
      imports: [CommonModule],
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="days-of-week" role="row" aria-label="Days of the week">\n  <abbr\n    class="days-of-week__day"\n    *ngFor="let dayOfWeek of daysOfWeek; index as index"\n    [title]="dayOfWeek"\n    [attr.aria-label]="dayOfWeek"\n    role="columnheader"\n    tabindex="-1"\n    >{{ daysOfWeek[index] }}</abbr\n  >\n</div>\n',
      styles: [".days-of-week{display:flex;gap:2px}.days-of-week__day{text-decoration:none;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);line-height:var(--bd-fnt-ln-hgt-4);font-size:var(--bd-fnt-sz-4);letter-spacing:var(--bd-fnt-2tr-spc);color:var(--black);display:flex;align-items:center;justify-content:center;padding:8px;box-sizing:border-box;width:36px;height:36px}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }]
  }], {
    locale: [{
      type: Input
    }]
  });
})();
var DatesOfMonthComponent = class _DatesOfMonthComponent {
  _date = new CustomDate();
  daysOfMonth;
  firstDayOfMonth;
  lastDate;
  firstDate;
  todayDate = new CustomDate();
  get date() {
    return this._date;
  }
  set date(date) {
    this._date = date;
    this.firstDate = new CustomDate(this.date.getFullYear(), this._date.getMonth(), 1);
    this.lastDate = new CustomDate(this.date.getFullYear(), this._date.getMonth() + 1, 0);
    const firstDayIndex = this.firstDate.getDay();
    const lastDayIndex = this.lastDate.getDay();
    this.daysOfMonth = this.getDaysOfMonth(this._date);
    this.addPreviousDays(firstDayIndex);
    this.addNextDays(lastDayIndex);
  }
  selectedDate;
  locale;
  selectedDateChange = new EventEmitter();
  addPreviousDays(firstDayIndex) {
    let date = this.firstDate;
    for (let i = 1; i <= firstDayIndex; i++) {
      date = this.getStepDay(date, -1);
      date.isVisible = false;
      this.daysOfMonth.unshift(date);
    }
  }
  addNextDays(lastDayIndex, totalDays = 7) {
    let date = this.lastDate;
    for (let i = lastDayIndex; i < totalDays - 1; i++) {
      date = this.getStepDay(date, 1);
      this.daysOfMonth.push(date);
    }
  }
  getStepDay(date = new CustomDate(), delta) {
    const newDate = new CustomDate(date.getTime());
    newDate.setDate(date.getDate() + delta);
    return newDate;
  }
  getDaysOfMonth(month) {
    return Array.from({
      length: this.numberOfDaysInMonth(month)
    }, (_, index) => this.setDate(month, index + 1));
  }
  numberOfDaysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }
  setDate(date, dayOfMonth) {
    const dateCopy = new CustomDate(date);
    dateCopy.setDate(dayOfMonth);
    return dateCopy;
  }
  isDisabled(dayOfMonth) {
    return dayOfMonth.getDay() % 6 === 0 || this.lastDate < dayOfMonth || this.firstDate > dayOfMonth;
  }
  isActive(dayOfMonth) {
    const todayDate = new CustomDate(this.todayDate.toDateString());
    const currentSeqDate = new CustomDate(dayOfMonth.toDateString());
    return todayDate.getTime() === currentSeqDate.getTime();
  }
  isSelected(dayOfMonth) {
    const selectedDate = new CustomDate(this.selectedDate.toDateString());
    const currentSeqDate = new CustomDate(dayOfMonth.toDateString());
    return selectedDate.getTime() === currentSeqDate.getTime();
  }
  selectMonth(selectedDate) {
    this.selectedDateChange.emit(selectedDate);
  }
  static ɵfac = function DatesOfMonthComponent_Factory(t) {
    return new (t || _DatesOfMonthComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DatesOfMonthComponent,
    selectors: [["dates-of-month"]],
    inputs: {
      date: "date",
      selectedDate: "selectedDate",
      locale: "locale"
    },
    outputs: {
      selectedDateChange: "selectedDateChange"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 2,
    vars: 1,
    consts: [["role", "listbox", "tabindex", "-1", "aria-label", "Calendar month", 1, "month"], ["class", "month--date", "role", "option", 3, "dateTime", "ngClass", "tabIndex", "click", "keyup.enter", 4, "ngFor", "ngForOf"], ["role", "option", 1, "month--date", 3, "dateTime", "ngClass", "tabIndex", "click", "keyup.enter"]],
    template: function DatesOfMonthComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, DatesOfMonthComponent_time_1_Template, 5, 23, "time", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.daysOfMonth);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, DatePipe],
    styles: [".month[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;column-gap:2px;row-gap:16px}.month--date[_ngcontent-%COMP%]{width:36px;height:36px;display:flex;align-items:center;justify-content:center;padding:8px;box-sizing:border-box;font-family:var(--btn-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-4);letter-spacing:var(--bd-fnt-ltr-spc);color:var(--black);cursor:pointer}.month--date[_ngcontent-%COMP%]:hover{border-radius:4px}.month[_ngcontent-%COMP%]   .date--visible[_ngcontent-%COMP%]{cursor:default}.month[_ngcontent-%COMP%]   .date--disabled[_ngcontent-%COMP%]{color:var(--grey-300)}.month[_ngcontent-%COMP%]   .date--active[_ngcontent-%COMP%]{border:1px solid var(--blue-brand-primary);border-radius:4px}.month[_ngcontent-%COMP%]   .date--active[_ngcontent-%COMP%]:hover{background:var(--secondary-normal)}.month[_ngcontent-%COMP%]   .date--selected[_ngcontent-%COMP%]{background:var(--blue-brand-primary);border-radius:4px;color:var(--white)}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatesOfMonthComponent, [{
    type: Component,
    args: [{
      selector: "dates-of-month",
      imports: [CommonModule],
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="month" role="listbox" tabindex="-1" aria-label="Calendar month">
  <time
    class="month--date"
    *ngFor="let dayOfMonth of daysOfMonth"
    [dateTime]="dayOfMonth | date: 'yyyy-MM-dd'"
    [ngClass]="{
      'date--visible': !dayOfMonth.isVisible,
      'date--disabled': isDisabled(dayOfMonth),
      'date--active': isActive(dayOfMonth),
      'date--selected': selectedDate && isSelected(dayOfMonth)
    }"
    role="option"
    [tabIndex]="isActive(dayOfMonth) ? 0 : -1"
    [attr.aria-label]="dayOfMonth | date: 'fullDate':locale"
    [attr.aria-selected]="selectedDate && isSelected(dayOfMonth)"
    [attr.aria-disabled]="isDisabled(dayOfMonth)"
    [attr.aria-current]="isActive(dayOfMonth) && 'date'"
    (click)="selectMonth(dayOfMonth)"
    (keyup.enter)="selectMonth(dayOfMonth)"
    >{{ dayOfMonth | date: "d" }}</time
  >
</div>
`,
      styles: [".month{display:flex;flex-wrap:wrap;column-gap:2px;row-gap:16px}.month--date{width:36px;height:36px;display:flex;align-items:center;justify-content:center;padding:8px;box-sizing:border-box;font-family:var(--btn-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-4);letter-spacing:var(--bd-fnt-ltr-spc);color:var(--black);cursor:pointer}.month--date:hover{border-radius:4px}.month .date--visible{cursor:default}.month .date--disabled{color:var(--grey-300)}.month .date--active{border:1px solid var(--blue-brand-primary);border-radius:4px}.month .date--active:hover{background:var(--secondary-normal)}.month .date--selected{background:var(--blue-brand-primary);border-radius:4px;color:var(--white)}\n"]
    }]
  }], null, {
    date: [{
      type: Input
    }],
    selectedDate: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    selectedDateChange: [{
      type: Output
    }]
  });
})();
var CustomDate = class extends Date {
  isVisible = true;
};
var CalendarComponent = class _CalendarComponent {
  localeId;
  displayStatus = DisplayStatus$1.DATES;
  selectedMonth = "";
  selectedMonthIndex;
  yearStart = new CustomDate().getFullYear();
  activeMonth = new CustomDate();
  emitDate = new Subject();
  selectedYear;
  locale;
  selectedDate;
  _month;
  get month() {
    return this._month;
  }
  set month(month) {
    if (month) {
      this._month = month;
      this.selectedDate = month;
      this.activeMonth = this._month;
      this.selectedYear = this._month.getFullYear();
      this.findStartYear();
      this.selectedMonth = Months$1[this._month.getMonth()];
    }
  }
  constructor(localeId) {
    this.localeId = localeId;
  }
  ngOnInit() {
    this.locale = this.localeId;
  }
  findStartYear() {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const yearDifference = this.selectedYear - currentYear;
    this.yearStart = currentYear + Math.floor(yearDifference / YearStartDifference$1) * YearStartDifference$1;
  }
  onMonthListClose(event2) {
    this.displayStatus = event2.displayStatus;
    this.selectedMonth = event2.selectedMonth;
    this.selectedMonthIndex = event2.selectedMonthIndex;
    this.activeMonth.setMonth(this.selectedMonthIndex);
  }
  onYearListClose(event2) {
    this.selectedYear = event2.selectedYear;
    this.displayStatus = event2.displayStatus;
    this.activeMonth.setFullYear(this.selectedYear);
  }
  onDisplayStatusChange(displayStatus) {
    this.displayStatus = displayStatus;
  }
  changeSelectedYear(delta) {
    this.selectedYear = this.selectedYear + delta;
    this.activeMonth.setFullYear(this.selectedYear);
    this.findStartYear();
  }
  stepYear(delta) {
    this.yearStart = delta === 1 ? this.yearStart + YearStartDifference$1 : this.yearStart - YearStartDifference$1;
  }
  stepMonth(delta) {
    let date = new CustomDate(this.activeMonth.getFullYear(), this.activeMonth.getMonth() + delta);
    this.activeMonth = date;
  }
  onDateSelection(date) {
    const inputMonth = Months$1[date.getMonth()];
    const currentActiveMonth = Months$1[this.activeMonth.getMonth()];
    if (currentActiveMonth === inputMonth) {
      this.selectedDate = date;
      this.activeMonth = date;
      this.emitDate.next(this.selectedDate);
    } else {
      this.activeMonth = date;
      this.selectedMonth = inputMonth;
    }
  }
  static ɵfac = function CalendarComponent_Factory(t) {
    return new (t || _CalendarComponent)(ɵɵdirectiveInject(LOCALE_ID));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CalendarComponent,
    selectors: [["ada-calendar"]],
    inputs: {
      month: "month"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 8,
    vars: 7,
    consts: [["role", "region", "aria-label", "Calendar"], [1, "calendar-container"], ["role", "heading", 3, "selectedYear", "displayStatus", "yearStart", "date", "emitDisplayStatus", "yearRangeChange", "yearChange", "activeMonthChange"], ["role", "separator", "aria-hidden", "true", 1, "divider--horizontal"], ["role", "grid", 1, "calendar-body"], ["role", "row", 3, "locale", 4, "ngIf"], ["role", "rowgroup", "aria-labelledby", "month-year-label", 3, "date", "locale", "selectedDate", "selectedDateChange", 4, "ngIf"], ["role", "listbox", "aria-labelledby", "year-month-list-label", 3, "displayStatus", "yearStart", "selectedMonth", "selectedYear", "closeMonthList", "closeYearList", 4, "ngIf"], ["role", "row", 3, "locale"], ["role", "rowgroup", "aria-labelledby", "month-year-label", 3, "date", "locale", "selectedDate", "selectedDateChange"], ["role", "listbox", "aria-labelledby", "year-month-list-label", 3, "displayStatus", "yearStart", "selectedMonth", "selectedYear", "closeMonthList", "closeYearList"]],
    template: function CalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "ada-card", 0)(1, "div", 1)(2, "calendar-header", 2);
        ɵɵlistener("emitDisplayStatus", function CalendarComponent_Template_calendar_header_emitDisplayStatus_2_listener($event) {
          return ctx.onDisplayStatusChange($event);
        })("yearRangeChange", function CalendarComponent_Template_calendar_header_yearRangeChange_2_listener($event) {
          return ctx.stepYear($event);
        })("yearChange", function CalendarComponent_Template_calendar_header_yearChange_2_listener($event) {
          return ctx.changeSelectedYear($event);
        })("activeMonthChange", function CalendarComponent_Template_calendar_header_activeMonthChange_2_listener($event) {
          return ctx.stepMonth($event);
        });
        ɵɵelementEnd();
        ɵɵelement(3, "div", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵtemplate(5, CalendarComponent_days_of_week_5_Template, 1, 1, "days-of-week", 5)(6, CalendarComponent_dates_of_month_6_Template, 1, 3, "dates-of-month", 6)(7, CalendarComponent_year_month_list_7_Template, 1, 4, "year-month-list", 7);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("selectedYear", ctx.selectedYear)("displayStatus", ctx.displayStatus)("yearStart", ctx.yearStart)("date", ctx.activeMonth);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.displayStatus === "DATES");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.displayStatus === "DATES");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.displayStatus !== "DATES");
      }
    },
    dependencies: [CommonModule, NgIf, CardsComponent, CalendarHeader, YearMonthListComponent, DaysOfWeekComponent, DatesOfMonthComponent],
    styles: ["ada-calendar[_nghost-%COMP%]   ada-card[_ngcontent-%COMP%], ada-calendar   [_nghost-%COMP%]   ada-card[_ngcontent-%COMP%]{position:absolute;left:0;top:4px;padding:0;box-shadow:var(--shdw-bluegrey-lvl-3)}.calendar-container[_ngcontent-%COMP%]{width:312px;min-height:400px}.calendar-container[_ngcontent-%COMP%]   .divider--horizontal[_ngcontent-%COMP%]{height:1px;background:var(--grey-200)}.calendar-container[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;padding:16px 24px 24px}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarComponent, [{
    type: Component,
    args: [{
      selector: "ada-calendar",
      imports: [CommonModule, CardsComponent, CalendarHeader, YearMonthListComponent, DaysOfWeekComponent, DatesOfMonthComponent],
      standalone: true,
      template: `<ada-card role="region" aria-label="Calendar">
  <div class="calendar-container">
    <calendar-header
      role="heading"
      [selectedYear]="selectedYear"
      [displayStatus]="displayStatus"
      [yearStart]="yearStart"
      [date]="activeMonth"
      (emitDisplayStatus)="onDisplayStatusChange($event)"
      (yearRangeChange)="stepYear($event)"
      (yearChange)="changeSelectedYear($event)"
      (activeMonthChange)="stepMonth($event)"
    ></calendar-header>

    <div class="divider--horizontal" role="separator" aria-hidden="true"></div>

    <div class="calendar-body" role="grid">
      <days-of-week
        role="row"
        *ngIf="displayStatus === 'DATES'"
        [locale]="locale"
      ></days-of-week>

      <dates-of-month
        *ngIf="displayStatus === 'DATES'"
        [date]="activeMonth"
        [locale]="locale"
        [selectedDate]="month"
        (selectedDateChange)="onDateSelection($event)"
        role="rowgroup"
        aria-labelledby="month-year-label"
      ></dates-of-month>

      <year-month-list
        *ngIf="displayStatus !== 'DATES'"
        [displayStatus]="displayStatus"
        [yearStart]="yearStart"
        [selectedMonth]="selectedMonth"
        [selectedYear]="selectedYear"
        (closeMonthList)="onMonthListClose($event)"
        (closeYearList)="onYearListClose($event)"
        role="listbox"
        aria-labelledby="year-month-list-label"
      ></year-month-list>
    </div>
  </div>
</ada-card>
`,
      styles: [":host-context(ada-calendar) ada-card{position:absolute;left:0;top:4px;padding:0;box-shadow:var(--shdw-bluegrey-lvl-3)}.calendar-container{width:312px;min-height:400px}.calendar-container .divider--horizontal{height:1px;background:var(--grey-200)}.calendar-container .calendar-body{display:flex;flex-direction:column;align-items:center;gap:16px;padding:16px 24px 24px}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }]
  }], {
    month: [{
      type: Input
    }]
  });
})();
var CalendarDirective = class _CalendarDirective {
  overlay;
  elementRef;
  datePipe;
  overlayRef;
  overlaySubscription;
  inputDateValue;
  dateFormat = "mediumDate";
  selectedDate = new EventEmitter();
  closeCalendar = new EventEmitter();
  openCalendar = new EventEmitter();
  constructor(overlay, elementRef, datePipe) {
    this.overlay = overlay;
    this.elementRef = elementRef;
    this.datePipe = datePipe;
  }
  onClick(eventTarget) {
    if (eventTarget instanceof HTMLImageElement) {
      this.openAdaCalendar();
    }
  }
  openAdaCalendar() {
    const positionStrategy = this.getPositionStrategyOptions();
    this.overlayRef = this.createOverlay(positionStrategy);
    if (this.overlayRef) {
      this.openCalendar.emit(true);
    }
    const calendarComponentInstance = this.getComponentInstance();
    calendarComponentInstance ? this.handleEventsOfComponent(calendarComponentInstance) : null;
    this.closeOverlay();
  }
  getPositionStrategyOptions() {
    return this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withPush(false).withFlexibleDimensions(false).withPositions([{
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top",
      offsetY: 0
    }]);
  }
  createOverlay(positionStrategy) {
    return this.overlay.create({
      backdropClass: "cdk-overlay-transparent-backdrop",
      hasBackdrop: true,
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
  }
  closeOverlay() {
    this.overlaySubscription = this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
      this.closeCalendar.emit(true);
      setTimeout(() => {
        this.overlayRef.dispose();
        this.overlaySubscription.unsubscribe();
      }, 300);
    });
  }
  getComponentInstance() {
    return this.overlayRef.attach(new ComponentPortal(CalendarComponent)).instance;
  }
  handleEventsOfComponent(calendarComponentInstance) {
    if (this.inputDateValue)
      calendarComponentInstance.month = new CustomDate(this.inputDateValue);
    calendarComponentInstance.emitDate.subscribe((date) => {
      const formattedDate = this.formatDate(date);
      this.selectedDate.emit(formattedDate);
      setTimeout(() => {
        if (date) {
          this.overlayRef.detach();
          this.closeCalendar.emit(true);
        }
      }, 50);
    });
  }
  formatDate(date) {
    const datePipe = new DatePipe("en-US");
    return datePipe.transform(date, "MM/dd/y");
  }
  static ɵfac = function CalendarDirective_Factory(t) {
    return new (t || _CalendarDirective)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DatePipe));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CalendarDirective,
    selectors: [["", "adaCalendar", ""]],
    hostBindings: function CalendarDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function CalendarDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event.target);
        });
      }
    },
    inputs: {
      inputDateValue: "inputDateValue",
      dateFormat: "dateFormat"
    },
    outputs: {
      selectedDate: "selectedDate",
      closeCalendar: "closeCalendar",
      openCalendar: "openCalendar"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([Overlay, DatePipe])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarDirective, [{
    type: Directive,
    args: [{
      selector: "[adaCalendar]",
      standalone: true,
      providers: [Overlay, DatePipe]
    }]
  }], () => [{
    type: Overlay
  }, {
    type: ElementRef
  }, {
    type: DatePipe
  }], {
    inputDateValue: [{
      type: Input
    }],
    dateFormat: [{
      type: Input
    }],
    selectedDate: [{
      type: Output
    }],
    closeCalendar: [{
      type: Output
    }],
    openCalendar: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.target"]]
    }]
  });
})();
var DIALOG_DATA = new InjectionToken("DialogConfig");
var DiaLogConfigOptions = class {
  cancel;
  submit;
  constructor(submit, cancel) {
    this.submit = submit;
    this.cancel = cancel;
  }
};
var DialogConfig = class {
  title;
  subtitle;
  type = "default";
  content;
  showCloseIcon;
  options;
  constructor(title, subtitle, type, content, showCloseIcon, options) {
    this.title = title;
    this.subtitle = subtitle;
    this.type = type;
    this.content = content;
    this.showCloseIcon = showCloseIcon;
    this.options = options;
  }
};
var DialogService = class _DialogService {
  injector;
  overlay;
  overlayRef;
  afterSubmitSubject = new Subject();
  afterCancelSubject = new Subject();
  afterDontSaveSubject = new Subject();
  isSubmitDisable = new Subject();
  dialogRef;
  constructor(injector, overlay) {
    this.injector = injector;
    this.overlay = overlay;
  }
  open(dialogConfig, component) {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
    this.afterSubmitSubject = new Subject();
    this.afterCancelSubject = new Subject();
    this.afterDontSaveSubject = new Subject();
    this.isSubmitDisable = new Subject();
    const positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy
    });
    this.overlayRef = overlayRef;
    const dialogPopOver = overlayRef.attach(new ComponentPortal(DialogPopupComponent, null, Injector.create({
      providers: [{
        provide: DIALOG_DATA,
        useValue: dialogConfig
      }],
      parent: this.injector
    })));
    if (component) {
      this.dialogRef = dialogPopOver.instance.attachComponentPortal(new ComponentPortal(component));
      if (dialogConfig.options?.componentData) {
        this.dialogRef.instance.data = dialogConfig.options?.componentData;
      }
    }
  }
  setSubmitState = (isDisable) => {
    this.isSubmitDisable.next(isDisable);
  };
  submitState() {
    return this.isSubmitDisable.asObservable();
  }
  afterSubmit() {
    return this.afterSubmitSubject.asObservable();
  }
  afterCancel() {
    return this.afterCancelSubject.asObservable();
  }
  afterDontSave() {
    return this.afterDontSaveSubject.asObservable();
  }
  close(dialogResult) {
    switch (dialogResult) {
      case "submit":
        if (this.dialogRef) {
          this.afterSubmitSubject.next(Object.assign({}, this.dialogRef.instance));
        } else {
          this.afterSubmitSubject.next(true);
        }
        break;
      case "cancel":
        this.afterCancelSubject.next(true);
        break;
      default:
        this.afterDontSaveSubject.next(true);
    }
    if (this.overlayRef) {
      this.overlayRef.detach();
      setTimeout(() => {
        this.overlayRef.dispose();
      }, 300);
    }
  }
  complete() {
    this.afterSubmitSubject.complete();
    this.afterCancelSubject.complete();
    this.afterDontSaveSubject.complete();
    this.isSubmitDisable.complete();
  }
  static ɵfac = function DialogService_Factory(t) {
    return new (t || _DialogService)(ɵɵinject(Injector), ɵɵinject(Overlay));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DialogService,
    factory: _DialogService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Injector
  }, {
    type: Overlay
  }], null);
})();
var DialogPopupComponent = class _DialogPopupComponent {
  dialogService;
  dialogConfig;
  portalOutlet = {};
  subscriptions = new Subscription();
  isSubmitDisabled;
  constructor(dialogService, dialogConfig) {
    this.dialogService = dialogService;
    this.dialogConfig = dialogConfig;
  }
  hostAnimation = true;
  _hostClass = "";
  ngOnInit() {
    this._hostClass = `dialog--${this.dialogConfig?.type || "default"}`;
  }
  ngOnChanges() {
    this._hostClass = this.dialogConfig?.type ? `dialog--${this.dialogConfig.type}` : "";
  }
  ngAfterContentChecked() {
    this.subscriptions.add(this.dialogService.submitState().subscribe((isSubmitDisable) => {
      this.isSubmitDisabled = isSubmitDisable;
    }));
  }
  attachComponentPortal(componentPortal) {
    return this.portalOutlet.attachComponentPortal(componentPortal);
  }
  close(result) {
    this.dialogService.close(result);
  }
  ngOnDestroy() {
    this.dialogService.complete();
    this.subscriptions.unsubscribe();
  }
  static ɵfac = function DialogPopupComponent_Factory(t) {
    return new (t || _DialogPopupComponent)(ɵɵdirectiveInject(DialogService), ɵɵdirectiveInject(DIALOG_DATA, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DialogPopupComponent,
    selectors: [["ada-dialog-popup"]],
    viewQuery: function DialogPopupComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(CdkPortalOutlet, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.portalOutlet = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function DialogPopupComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵsyntheticHostProperty("@host", ctx.hostAnimation);
        ɵɵclassMap(ctx._hostClass);
      }
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 14,
    vars: 6,
    consts: [[1, "dialog__header"], [1, "dialog__titles"], [1, "dialog__title"], [1, "dialog__subtitle"], ["class", "dialog__close-icon", "src", "../assets/icons/sm-dialogpopup.svg", "alt", "dialog popup Icon", 3, "click", 4, "ngIf"], [1, "dialog__body"], ["class", "dialog__scroll scroll-basic-4", 4, "ngIf"], ["cdkPortalOutlet", ""], [1, "dialog__actions"], [1, "dialog__buttons"], ["type", "secondary", "size", "s", "class", "dialog__action-btn", 3, "click", 4, "ngIf"], ["type", "primary", "size", "s", "class", "dialog__action-btn", 3, "isDisabled", "click", 4, "ngIf"], ["src", "../assets/icons/sm-dialogpopup.svg", "alt", "dialog popup Icon", 1, "dialog__close-icon", 3, "click"], [1, "dialog__scroll", "scroll-basic-4"], ["type", "secondary", "size", "s", 1, "dialog__action-btn", 3, "click"], [1, "dialog__btn-click"], ["type", "primary", "size", "s", 1, "dialog__action-btn", 3, "isDisabled", "click"]],
    template: function DialogPopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 3);
        ɵɵtext(5);
        ɵɵelementEnd()();
        ɵɵtemplate(6, DialogPopupComponent_img_6_Template, 1, 0, "img", 4);
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 5);
        ɵɵtemplate(8, DialogPopupComponent_div_8_Template, 2, 1, "div", 6);
        ɵɵelementContainer(9, 7);
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 8)(11, "div", 9);
        ɵɵtemplate(12, DialogPopupComponent_ada_button_12_Template, 3, 1, "ada-button", 10)(13, DialogPopupComponent_ada_button_13_Template, 3, 2, "ada-button", 11);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.dialogConfig == null ? null : ctx.dialogConfig.title);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.dialogConfig == null ? null : ctx.dialogConfig.subtitle);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.dialogConfig == null ? null : ctx.dialogConfig.showCloseIcon);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.dialogConfig == null ? null : ctx.dialogConfig.content);
        ɵɵadvance(4);
        ɵɵproperty("ngIf", ctx.dialogConfig == null ? null : ctx.dialogConfig.options == null ? null : ctx.dialogConfig.options.cancel);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.dialogConfig == null ? null : ctx.dialogConfig.options == null ? null : ctx.dialogConfig.options.submit);
      }
    },
    dependencies: [CommonModule, NgIf, ButtonComponent, OverlayModule, PortalModule, CdkPortalOutlet],
    styles: ["[_nghost-%COMP%]{width:auto;height:auto;border-radius:4px;background-color:var(--white);box-shadow:var(--box-shadow-02);font-family:var(--ttl-t1-fnt-fm);font-weight:var(--hd-2-fnt-wt);font-size:var(--hd-6-fnt-size);line-height:var(--hd-6-ln-hgt);color:var(--text-100);padding:16px;max-width:80vw;max-height:80vh;position:relative}.dialog--default[_nghost-%COMP%]{padding:16px}.dialog--comfortable[_nghost-%COMP%]{padding:24px}.dialog--compact[_nghost-%COMP%]{padding:12px}.dialog__header[_ngcontent-%COMP%]{display:flex}.dialog__titles[_ngcontent-%COMP%]{overflow-x:auto;text-overflow:ellipsis;width:100%}.dialog__titles[_ngcontent-%COMP%]   .dialog__title[_ngcontent-%COMP%]{color:var(--text-100);letter-spacing:var(--hd-letter-spacing);font-size:var(--title-t2-font-size);font-family:var(--hd-fnt-fm);font-weight:var(--ds-fnt-wt-lg);text-overflow:ellipsis;overflow-x:auto}.dialog__titles[_ngcontent-%COMP%]   .dialog__subtitle[_ngcontent-%COMP%]{color:var(--grey-800);letter-spacing:var(--hd-fnt-ltr-spc);font-family:var(--bd-fnt-fm);font-weight:var(--hd-fnt-wt-rg);font-size:var(--hd-fnt-sz-7);line-height:var(--bd-fnt-ln-hgt-4);overflow-x:auto;text-overflow:ellipsis}.dialog__body[_ngcontent-%COMP%]{color:var(--primary-txt);word-wrap:break-word;font-family:var(--bd-fnt-fm);font-weight:var(--hd-fnt-wt-rg);line-height:var(--p-lg-md-ln-hgt);display:flex;flex-shrink:2;padding-bottom:2px;margin:16px 0 8px}.dialog__scroll[_ngcontent-%COMP%]{padding-right:8px;overflow-y:auto;max-height:50px}.dialog__buttons[_ngcontent-%COMP%]{display:flex;margin-left:auto}.dialog__buttons[_ngcontent-%COMP%]   .dialog__action-btn[_ngcontent-%COMP%]{margin:5px 0 0 16px}.dialog__tertiary[_ngcontent-%COMP%]{margin-left:0;justify-self:flex-start}.dialog__close-icon[_ngcontent-%COMP%]{cursor:pointer}.dialog__actions[_ngcontent-%COMP%]{display:flex}@media (min-width: 360px) and (max-width: 767px){[_nghost-%COMP%]{min-width:328px;max-width:328px}.dialog__actions[_ngcontent-%COMP%]{display:block;width:auto}.dialog__buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column}.dialog__buttons[_ngcontent-%COMP%]   .dialog__action-btn[_ngcontent-%COMP%]{border-radius:4px;display:flex;justify-content:center;align-items:center;margin:8px 0;width:auto}.dialog__buttons[_ngcontent-%COMP%]   ada-button[type=primary][_ngcontent-%COMP%]{order:0}.dialog__buttons[_ngcontent-%COMP%]   ada-button[type=secondary][_ngcontent-%COMP%]{order:1}.dialog__titles[_ngcontent-%COMP%]{word-wrap:break-word}.dialog__scroll[_ngcontent-%COMP%]{overflow-y:auto;max-height:168px;padding:0 8px 4px 0}}@media (min-width: 768px) and (max-width: 1279px){[_nghost-%COMP%]{min-width:536px;max-width:536px}.dialog__scroll[_ngcontent-%COMP%]{overflow-y:auto;max-height:96px;padding:0 8px 4px 0}}@media (min-width: 1280px){[_nghost-%COMP%]{width:auto;max-width:auto;min-height:auto}.dialog__scroll[_ngcontent-%COMP%]{overflow-y:auto;max-height:96px;padding:0 8px 4px 0}}"],
    data: {
      animation: [trigger("host", [transition(":enter", [style({
        transform: "translateY(15%)",
        opacity: 0
      }), animate("300ms cubic-bezier(0.25, 0.8, 0.25, 1)")]), transition(":leave", [animate("300ms cubic-bezier(0.25, 0.8, 0.25, 1)", style({
        transform: "translateY(15%)",
        opacity: 0
      }))])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogPopupComponent, [{
    type: Component,
    args: [{
      selector: "ada-dialog-popup",
      standalone: true,
      imports: [CommonModule, ButtonComponent, OverlayModule, ButtonIconComponent, InputComponent, PortalModule],
      animations: [trigger("host", [transition(":enter", [style({
        transform: "translateY(15%)",
        opacity: 0
      }), animate("300ms cubic-bezier(0.25, 0.8, 0.25, 1)")]), transition(":leave", [animate("300ms cubic-bezier(0.25, 0.8, 0.25, 1)", style({
        transform: "translateY(15%)",
        opacity: 0
      }))])])],
      template: `<div class="dialog__header">
  <div class="dialog__titles">
    <div class="dialog__title">{{ dialogConfig?.title }}</div>
    <div class="dialog__subtitle">{{ dialogConfig?.subtitle }}</div>
  </div>
  <img
    (click)="close()"
    *ngIf="dialogConfig?.showCloseIcon"
    class="dialog__close-icon"
    src="../assets/icons/sm-dialogpopup.svg"
    alt="dialog popup Icon"
  />
</div>

<div class="dialog__body">
  <div class="dialog__scroll scroll-basic-4" *ngIf="dialogConfig?.content">
    {{ dialogConfig?.content }}
  </div>
  <ng-container cdkPortalOutlet></ng-container>
</div>

<div class="dialog__actions">
  <div class="dialog__buttons">
    <ada-button
      *ngIf="dialogConfig?.options?.cancel"
      type="secondary"
      size="s"
      (click)="close('cancel')"
      class="dialog__action-btn"
      ><span class="dialog__btn-click">{{
        dialogConfig?.options?.cancel
      }}</span></ada-button
    >

    <ada-button
      type="primary"
      *ngIf="dialogConfig?.options?.submit"
      size="s"
      (click)="close('submit')"
      class="dialog__action-btn"
      [isDisabled]="isSubmitDisabled"
      ><span class="dialog__btn-click">{{
        dialogConfig?.options?.submit
      }}</span></ada-button
    >
  </div>
</div>
`,
      styles: [":host{width:auto;height:auto;border-radius:4px;background-color:var(--white);box-shadow:var(--box-shadow-02);font-family:var(--ttl-t1-fnt-fm);font-weight:var(--hd-2-fnt-wt);font-size:var(--hd-6-fnt-size);line-height:var(--hd-6-ln-hgt);color:var(--text-100);padding:16px;max-width:80vw;max-height:80vh;position:relative}:host.dialog--default{padding:16px}:host.dialog--comfortable{padding:24px}:host.dialog--compact{padding:12px}.dialog__header{display:flex}.dialog__titles{overflow-x:auto;text-overflow:ellipsis;width:100%}.dialog__titles .dialog__title{color:var(--text-100);letter-spacing:var(--hd-letter-spacing);font-size:var(--title-t2-font-size);font-family:var(--hd-fnt-fm);font-weight:var(--ds-fnt-wt-lg);text-overflow:ellipsis;overflow-x:auto}.dialog__titles .dialog__subtitle{color:var(--grey-800);letter-spacing:var(--hd-fnt-ltr-spc);font-family:var(--bd-fnt-fm);font-weight:var(--hd-fnt-wt-rg);font-size:var(--hd-fnt-sz-7);line-height:var(--bd-fnt-ln-hgt-4);overflow-x:auto;text-overflow:ellipsis}.dialog__body{color:var(--primary-txt);word-wrap:break-word;font-family:var(--bd-fnt-fm);font-weight:var(--hd-fnt-wt-rg);line-height:var(--p-lg-md-ln-hgt);display:flex;flex-shrink:2;padding-bottom:2px;margin:16px 0 8px}.dialog__scroll{padding-right:8px;overflow-y:auto;max-height:50px}.dialog__buttons{display:flex;margin-left:auto}.dialog__buttons .dialog__action-btn{margin:5px 0 0 16px}.dialog__tertiary{margin-left:0;justify-self:flex-start}.dialog__close-icon{cursor:pointer}.dialog__actions{display:flex}@media (min-width: 360px) and (max-width: 767px){:host{min-width:328px;max-width:328px}.dialog__actions{display:block;width:auto}.dialog__buttons{display:flex;flex-direction:column}.dialog__buttons .dialog__action-btn{border-radius:4px;display:flex;justify-content:center;align-items:center;margin:8px 0;width:auto}.dialog__buttons ada-button[type=primary]{order:0}.dialog__buttons ada-button[type=secondary]{order:1}.dialog__titles{word-wrap:break-word}.dialog__scroll{overflow-y:auto;max-height:168px;padding:0 8px 4px 0}}@media (min-width: 768px) and (max-width: 1279px){:host{min-width:536px;max-width:536px}.dialog__scroll{overflow-y:auto;max-height:96px;padding:0 8px 4px 0}}@media (min-width: 1280px){:host{width:auto;max-width:auto;min-height:auto}.dialog__scroll{overflow-y:auto;max-height:96px;padding:0 8px 4px 0}}\n"]
    }]
  }], () => [{
    type: DialogService
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DIALOG_DATA]
    }]
  }], {
    portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }],
    hostAnimation: [{
      type: HostBinding,
      args: ["@host"]
    }],
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var ToggleComponent = class _ToggleComponent {
  isSelected = false;
  isDisabled = false;
  size;
  isChecked = new EventEmitter();
  className = "toggle--container";
  ngOnInit() {
    this.getToggleClass();
  }
  toggleClicked() {
    this.isSelected = !this.isSelected;
    this.isChecked.emit(this.isSelected);
    this.getToggleClass();
  }
  getToggleClass() {
    this.className = `toggle--container ${this.size}`;
    if (this.isSelected) {
      this.className = this.className + " toggle--selected";
    }
    if (this.isDisabled) {
      this.className = this.className + " toggle--disabled";
    }
  }
  static ɵfac = function ToggleComponent_Factory(t) {
    return new (t || _ToggleComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ToggleComponent,
    selectors: [["ada-toggle"]],
    inputs: {
      isSelected: "isSelected",
      isDisabled: "isDisabled",
      size: "size"
    },
    outputs: {
      isChecked: "isChecked"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c4,
    decls: 9,
    vars: 4,
    consts: [[1, "main-container"], [1, "label"], ["type", "checkbox", 1, "checkbox", 3, "checked", "disabled", "click"], [1, "handler-container"], [1, "handle"], [1, "state-layer"], ["tabindex", "0", 1, "track"]],
    template: function ToggleComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0)(1, "div", 1);
        ɵɵprojection(2, 0, ["[select]", "toggle-label"]);
        ɵɵelementEnd();
        ɵɵelementStart(3, "div")(4, "input", 2);
        ɵɵlistener("click", function ToggleComponent_Template_input_click_4_listener() {
          return ctx.toggleClicked();
        });
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 3);
        ɵɵelement(6, "div", 4);
        ɵɵelementEnd();
        ɵɵelement(7, "div", 5)(8, "div", 6);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵclassMap(ctx.className);
        ɵɵadvance(1);
        ɵɵproperty("checked", ctx.isSelected)("disabled", ctx.isDisabled);
      }
    },
    dependencies: [CommonModule],
    styles: [".main-container[_ngcontent-%COMP%]{display:flex;align-items:center}.main-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:var(--bd-fnt-fm);font-size:var(--bd-fnt-sz-3);font-weight:var(--bd-fnt-wt-md);line-height:var(--bd-fnt-ln-hgt-5)}.toggle--container[_ngcontent-%COMP%]{width:60px;height:48px;position:relative}.toggle--container.small[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]{width:48px;height:24px;position:absolute;left:6px;top:12px}.toggle--container.small[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]:focus{outline:2px dashed var(--primary-800)}.toggle--container.small[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]{width:16px;height:16px}.toggle--container.large[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]{width:56px;height:32px;position:absolute;left:6px;top:8px}.toggle--container.large[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]:focus{outline:2px dashed var(--primary-800)}.toggle--container.large[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]{width:24px;height:24px}.toggle--container[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;opacity:0;cursor:pointer;z-index:2;margin:0}.toggle--container[_ngcontent-%COMP%]   .handler-container[_ngcontent-%COMP%]{position:absolute;width:48px;height:48px;left:0;top:0}.toggle--container[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]{position:absolute;background:var(--white);border-radius:50%;box-sizing:border-box;z-index:1}.toggle--container[_ngcontent-%COMP%]   .state-layer[_ngcontent-%COMP%]{position:absolute;width:40px;height:40px;left:0;top:4px;opacity:.2;border-radius:50%;display:none}.toggle--container[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]{position:absolute;left:6px;top:8px;border:1px solid var(--grey-500);background-color:var(--grey-500);border-radius:16px;box-sizing:border-box}.small.toggle--container[_ngcontent-%COMP%]   .toggle--container[_ngcontent-%COMP%]:hover   .track[_ngcontent-%COMP%]{background-color:var(--grey-600)}.toggle--container[_ngcontent-%COMP%]:hover:active   .track[_ngcontent-%COMP%]{background-color:var(--grey-500)}.small[_ngcontent-%COMP%]:active   .handle[_ngcontent-%COMP%], .toggle--container[_ngcontent-%COMP%]:active   .handle[_ngcontent-%COMP%], .toggle--container.toggle--selected[_ngcontent-%COMP%]:active   .handle[_ngcontent-%COMP%]{width:18px;height:18px;left:20px;top:15px;border:2px solid var(--blue-grey-base);transition:.3s ease all}.large[_ngcontent-%COMP%]:active   .handle[_ngcontent-%COMP%], .toggle--container[_ngcontent-%COMP%]:active   .handle[_ngcontent-%COMP%], .toggle--container.toggle--selected[_ngcontent-%COMP%]:active   .handle[_ngcontent-%COMP%]{width:24px;height:24px;left:10px;top:12px;border:2px solid var(--blue-grey-base);transition:.3s ease all}.toggle--container.toggle--selected[_ngcontent-%COMP%]:hover:active   .track[_ngcontent-%COMP%]{background-color:var(--blue-brand-primary)}.toggle--container.toggle--disabled[_ngcontent-%COMP%]:hover   .checkbox[_ngcontent-%COMP%], .toggle--container.toggle--disabled[_ngcontent-%COMP%]:active   .checkbox[_ngcontent-%COMP%]{cursor:auto}.toggle--container.toggle--disabled[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%], .toggle--container.toggle--disabled[_ngcontent-%COMP%]:active:hover   .handle[_ngcontent-%COMP%]{background:var(--white);border:none}.toggle--container.toggle--disabled[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%], .toggle--container.toggle--disabled[_ngcontent-%COMP%]:active:hover   .track[_ngcontent-%COMP%]{background-color:var(--grey-300);border:1px solid var(--grey-300)}.toggle--container.toggle--selected[_ngcontent-%COMP%]   .handler-container[_ngcontent-%COMP%]{left:12px}.toggle--container.toggle--selected[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]{background:var(--white)}.toggle--container.toggle--selected[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]{background-color:var(--blue-brand-primary);border:none}.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]{background:var(--grey-50)}.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]{background:var(--grey-300)}.small.toggle--container[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%], .small.toggle--container.toggle--disabled[_ngcontent-%COMP%]:active   .handle[_ngcontent-%COMP%]{width:16px;height:16px;left:10px;top:16px;transition:.3s ease all}.large.toggle--container[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%], .large.toggle--container.toggle--disabled[_ngcontent-%COMP%]:active   .handle[_ngcontent-%COMP%]{width:24px;height:24px;left:10px;top:12px;transition:.3s ease all}.small.toggle--container.toggle--selected[_ngcontent-%COMP%]:hover   .track[_ngcontent-%COMP%], .large.toggle--container.toggle--selected[_ngcontent-%COMP%]:hover   .track[_ngcontent-%COMP%]{background-color:var(--primary-600)}.small.toggle--container.toggle--selected[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%], .small.toggle--container.toggle--selected[_ngcontent-%COMP%]:active:hover   .handle[_ngcontent-%COMP%], .small.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]:hover   .handle[_ngcontent-%COMP%], .small.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]:active   .handle[_ngcontent-%COMP%]{width:16px;height:16px;left:22px;top:16px;transition:.3s ease all}.small.toggle--container.toggle--selected[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%], .small.toggle--container.toggle--selected[_ngcontent-%COMP%]:active:hover   .track[_ngcontent-%COMP%], .small.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]:hover   .track[_ngcontent-%COMP%], .small.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]:active   .track[_ngcontent-%COMP%]{background-color:var(--blue-brand-primary)}.large.toggle--container.toggle--selected[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%], .large.toggle--container.toggle--selected[_ngcontent-%COMP%]:active:hover   .handle[_ngcontent-%COMP%], .large.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]:hover   .handle[_ngcontent-%COMP%], .large.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]:active   .handle[_ngcontent-%COMP%]{width:24px;height:24px;left:22px;top:12px;transition:.3s ease all}.large.toggle--container.toggle--selected[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%], .large.toggle--container.toggle--selected[_ngcontent-%COMP%]:active:hover   .track[_ngcontent-%COMP%], .large.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]:hover   .track[_ngcontent-%COMP%], .large.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]:active   .track[_ngcontent-%COMP%]{background-color:var(--blue-brand-primary)}.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%], .large.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]:hover   .handle[_ngcontent-%COMP%], .large.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]:active   .handle[_ngcontent-%COMP%], .small.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]:hover   .handle[_ngcontent-%COMP%], .small.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]:active   .handle[_ngcontent-%COMP%]{background-color:var(--white)}.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%], .large.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]:hover   .track[_ngcontent-%COMP%], .large.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]:active   .track[_ngcontent-%COMP%], .small.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]:hover   .track[_ngcontent-%COMP%], .small.toggle--container.toggle--selected.toggle--disabled[_ngcontent-%COMP%]:active   .track[_ngcontent-%COMP%]{background-color:var(--primary-300)}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleComponent, [{
    type: Component,
    args: [{
      selector: "ada-toggle",
      standalone: true,
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="main-container">\n  <div class="label">\n    <ng-content [select]="toggle-label"></ng-content>\n  </div>\n  <div [class]="className">\n    <input\n      type="checkbox"\n      [checked]="isSelected"\n      [disabled]="isDisabled"\n      class="checkbox"\n      (click)="toggleClicked()"\n    />\n    <div class="handler-container">\n      <div class="handle"></div>\n    </div>\n    <div class="state-layer"></div>\n    <div class="track" tabindex="0"></div>\n  </div>\n</div>\n',
      styles: [".main-container{display:flex;align-items:center}.main-container .label{font-family:var(--bd-fnt-fm);font-size:var(--bd-fnt-sz-3);font-weight:var(--bd-fnt-wt-md);line-height:var(--bd-fnt-ln-hgt-5)}.toggle--container{width:60px;height:48px;position:relative}.toggle--container.small .track{width:48px;height:24px;position:absolute;left:6px;top:12px}.toggle--container.small .track:focus{outline:2px dashed var(--primary-800)}.toggle--container.small .handle{width:16px;height:16px}.toggle--container.large .track{width:56px;height:32px;position:absolute;left:6px;top:8px}.toggle--container.large .track:focus{outline:2px dashed var(--primary-800)}.toggle--container.large .handle{width:24px;height:24px}.toggle--container .checkbox{position:relative;width:100%;height:100%;opacity:0;cursor:pointer;z-index:2;margin:0}.toggle--container .handler-container{position:absolute;width:48px;height:48px;left:0;top:0}.toggle--container .handle{position:absolute;background:var(--white);border-radius:50%;box-sizing:border-box;z-index:1}.toggle--container .state-layer{position:absolute;width:40px;height:40px;left:0;top:4px;opacity:.2;border-radius:50%;display:none}.toggle--container .track{position:absolute;left:6px;top:8px;border:1px solid var(--grey-500);background-color:var(--grey-500);border-radius:16px;box-sizing:border-box}.small.toggle--container .toggle--container:hover .track{background-color:var(--grey-600)}.toggle--container:hover:active .track{background-color:var(--grey-500)}.small:active .handle,.toggle--container:active .handle,.toggle--container.toggle--selected:active .handle{width:18px;height:18px;left:20px;top:15px;border:2px solid var(--blue-grey-base);transition:.3s ease all}.large:active .handle,.toggle--container:active .handle,.toggle--container.toggle--selected:active .handle{width:24px;height:24px;left:10px;top:12px;border:2px solid var(--blue-grey-base);transition:.3s ease all}.toggle--container.toggle--selected:hover:active .track{background-color:var(--blue-brand-primary)}.toggle--container.toggle--disabled:hover .checkbox,.toggle--container.toggle--disabled:active .checkbox{cursor:auto}.toggle--container.toggle--disabled .handle,.toggle--container.toggle--disabled:active:hover .handle{background:var(--white);border:none}.toggle--container.toggle--disabled .track,.toggle--container.toggle--disabled:active:hover .track{background-color:var(--grey-300);border:1px solid var(--grey-300)}.toggle--container.toggle--selected .handler-container{left:12px}.toggle--container.toggle--selected .handle{background:var(--white)}.toggle--container.toggle--selected .track{background-color:var(--blue-brand-primary);border:none}.toggle--container.toggle--selected.toggle--disabled .handle{background:var(--grey-50)}.toggle--container.toggle--selected.toggle--disabled .track{background:var(--grey-300)}.small.toggle--container .handle,.small.toggle--container.toggle--disabled:active .handle{width:16px;height:16px;left:10px;top:16px;transition:.3s ease all}.large.toggle--container .handle,.large.toggle--container.toggle--disabled:active .handle{width:24px;height:24px;left:10px;top:12px;transition:.3s ease all}.small.toggle--container.toggle--selected:hover .track,.large.toggle--container.toggle--selected:hover .track{background-color:var(--primary-600)}.small.toggle--container.toggle--selected .handle,.small.toggle--container.toggle--selected:active:hover .handle,.small.toggle--container.toggle--selected.toggle--disabled:hover .handle,.small.toggle--container.toggle--selected.toggle--disabled:active .handle{width:16px;height:16px;left:22px;top:16px;transition:.3s ease all}.small.toggle--container.toggle--selected .track,.small.toggle--container.toggle--selected:active:hover .track,.small.toggle--container.toggle--selected.toggle--disabled:hover .track,.small.toggle--container.toggle--selected.toggle--disabled:active .track{background-color:var(--blue-brand-primary)}.large.toggle--container.toggle--selected .handle,.large.toggle--container.toggle--selected:active:hover .handle,.large.toggle--container.toggle--selected.toggle--disabled:hover .handle,.large.toggle--container.toggle--selected.toggle--disabled:active .handle{width:24px;height:24px;left:22px;top:12px;transition:.3s ease all}.large.toggle--container.toggle--selected .track,.large.toggle--container.toggle--selected:active:hover .track,.large.toggle--container.toggle--selected.toggle--disabled:hover .track,.large.toggle--container.toggle--selected.toggle--disabled:active .track{background-color:var(--blue-brand-primary)}.toggle--container.toggle--selected.toggle--disabled .handle,.large.toggle--container.toggle--selected.toggle--disabled:hover .handle,.large.toggle--container.toggle--selected.toggle--disabled:active .handle,.small.toggle--container.toggle--selected.toggle--disabled:hover .handle,.small.toggle--container.toggle--selected.toggle--disabled:active .handle{background-color:var(--white)}.toggle--container.toggle--selected.toggle--disabled .track,.large.toggle--container.toggle--selected.toggle--disabled:hover .track,.large.toggle--container.toggle--selected.toggle--disabled:active .track,.small.toggle--container.toggle--selected.toggle--disabled:hover .track,.small.toggle--container.toggle--selected.toggle--disabled:active .track{background-color:var(--primary-300)}\n"]
    }]
  }], null, {
    isSelected: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    isChecked: [{
      type: Output
    }]
  });
})();
var TooltipComponent = class _TooltipComponent {
  el;
  hostAnimation = true;
  content;
  theme = "dark";
  header;
  showCaret = false;
  caret;
  shouldHaveBoxShadow = false;
  defaultPosition;
  caretPosition;
  constructor(el) {
    this.el = el;
  }
  ngOnInit() {
    this.defaultPosition?.positionChanges.subscribe((position) => {
      if (position.connectionPair.panelClass) {
        if (this.showCaret) {
          this.caretPosition = position?.connectionPair?.panelClass;
          this.setStylesForArrow();
        }
      }
    });
  }
  setStylesForArrow() {
    const caretClass = `tooltip__caret--${this.caretPosition}`;
    this.caret.nativeElement.classList.add(caretClass);
  }
  static ɵfac = function TooltipComponent_Factory(t) {
    return new (t || _TooltipComponent)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TooltipComponent,
    selectors: [["tooltip"]],
    viewQuery: function TooltipComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c49, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.caret = _t.first);
      }
    },
    hostVars: 1,
    hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵsyntheticHostProperty("@fadeInOut", ctx.hostAnimation);
      }
    },
    inputs: {
      content: "content",
      theme: "theme",
      header: "header",
      showCaret: "showCaret",
      shouldHaveBoxShadow: "shouldHaveBoxShadow",
      defaultPosition: "defaultPosition"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 7,
    vars: 7,
    consts: [[1, "tooltip", 3, "ngClass"], [1, "tooltip__header"], [1, "tooltip__content"], [1, "tooltip__caret"], ["caret", ""]],
    template: function TooltipComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0)(1, "div", 1);
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 2);
        ɵɵtext(4);
        ɵɵelementEnd();
        ɵɵelement(5, "div", 3, 4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction3(3, _c50, ctx.shouldHaveBoxShadow && ctx.theme !== "light", ctx.shouldHaveBoxShadow && ctx.theme == "light", ctx.theme === "light"));
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.header, " ");
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.content, " ");
      }
    },
    dependencies: [CommonModule, NgClass],
    styles: ['.tooltip[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:8px;gap:2px;border-radius:8px;position:relative;background-color:var(--grey-1000);color:var(--grey-200);--border-color: var(--grey-1000)}.tooltip.tooltip--light[_ngcontent-%COMP%]{background-color:var(--blue-grey-300);color:var(--grey-800);--border-color: var(--blue-grey-300)}.tooltip__header[_ngcontent-%COMP%]{font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-md);font-size:var(--bd-fnt-sz-3);line-height:var(--bd-fnt-ln-hgt-9)}.tooltip__content[_ngcontent-%COMP%]{font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-3);line-height:var(--bd-fnt-ln-hgt-9)}.tooltip__caret[_ngcontent-%COMP%]{position:absolute;content:"";border-width:2px}.tooltip__caret--top-left[_ngcontent-%COMP%]{left:10px;bottom:100%;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--border-color)}.tooltip__caret--top-center[_ngcontent-%COMP%]{bottom:100%;left:50%;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--border-color)}.tooltip__caret--top-right[_ngcontent-%COMP%]{bottom:100%;right:10px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--border-color)}.tooltip__caret--bottom-right[_ngcontent-%COMP%]{top:100%;right:10px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid var(--border-color)}.tooltip__caret--bottom-center[_ngcontent-%COMP%]{top:100%;right:50%;border-left:8px solid transparent;border-right:5px solid transparent;border-top:5px solid var(--border-color)}.tooltip__caret--bottom-left[_ngcontent-%COMP%]{top:100%;left:10px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid var(--border-color)}.tooltip__caret--left-top[_ngcontent-%COMP%]{right:100%;top:10px;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid var(--border-color)}.tooltip__caret--left[_ngcontent-%COMP%]{right:100%;top:50%;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid var(--border-color)}.tooltip__caret--left-bottom[_ngcontent-%COMP%]{right:100%;bottom:10px;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid var(--border-color)}.tooltip__caret--right[_ngcontent-%COMP%]{left:100%;top:50%;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid var(--border-color)}.tooltip__caret--right-top[_ngcontent-%COMP%]{left:100%;top:10px;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid var(--border-color)}.tooltip__caret--right-bottom[_ngcontent-%COMP%]{left:100%;bottom:10px;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid var(--border-color)}@media (min-width: 769px) and (max-width: 1366px){.tooltip[_ngcontent-%COMP%]{max-width:600px;overflow-wrap:break-word}}@media (max-width: 768x) and (min-width: 481px){.tooltip[_ngcontent-%COMP%]{max-width:400px;overflow-wrap:break-word}}@media (max-width: 480px) and (min-width: 320px){.tooltip[_ngcontent-%COMP%]{max-width:328px;overflow-wrap:break-word}}.tooltip-active[_ngcontent-%COMP%]{position:relative;z-index:1}.tooltip.light-shadow[_ngcontent-%COMP%]{box-shadow:var(--shdw-bluegrey-lvl-5)}.tooltip.dark-shadow[_ngcontent-%COMP%]{box-shadow:var(--shdw-greyfdbk-lvl-5)}'],
    data: {
      animation: [trigger("fadeInOut", [transition(":enter", [style({
        opacity: 0
      }), animate("300ms ease-in")])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipComponent, [{
    type: Component,
    args: [{
      selector: "tooltip",
      encapsulation: ViewEncapsulation$1.Emulated,
      standalone: true,
      imports: [CommonModule],
      animations: [trigger("fadeInOut", [transition(":enter", [style({
        opacity: 0
      }), animate("300ms ease-in")])])],
      template: `<div
  class="tooltip"
  [ngClass]="{
    'dark-shadow': shouldHaveBoxShadow && theme !== 'light',
    'light-shadow': shouldHaveBoxShadow && theme == 'light',
    'tooltip--light': theme === 'light'
  }"
>
  <div class="tooltip__header">
    {{ header }}
  </div>
  <div class="tooltip__content">
    {{ content }}
  </div>
  <div class="tooltip__caret" #caret></div>
</div>
`,
      styles: ['.tooltip{display:flex;flex-direction:column;padding:8px;gap:2px;border-radius:8px;position:relative;background-color:var(--grey-1000);color:var(--grey-200);--border-color: var(--grey-1000)}.tooltip.tooltip--light{background-color:var(--blue-grey-300);color:var(--grey-800);--border-color: var(--blue-grey-300)}.tooltip__header{font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-md);font-size:var(--bd-fnt-sz-3);line-height:var(--bd-fnt-ln-hgt-9)}.tooltip__content{font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-3);line-height:var(--bd-fnt-ln-hgt-9)}.tooltip__caret{position:absolute;content:"";border-width:2px}.tooltip__caret--top-left{left:10px;bottom:100%;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--border-color)}.tooltip__caret--top-center{bottom:100%;left:50%;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--border-color)}.tooltip__caret--top-right{bottom:100%;right:10px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--border-color)}.tooltip__caret--bottom-right{top:100%;right:10px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid var(--border-color)}.tooltip__caret--bottom-center{top:100%;right:50%;border-left:8px solid transparent;border-right:5px solid transparent;border-top:5px solid var(--border-color)}.tooltip__caret--bottom-left{top:100%;left:10px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid var(--border-color)}.tooltip__caret--left-top{right:100%;top:10px;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid var(--border-color)}.tooltip__caret--left{right:100%;top:50%;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid var(--border-color)}.tooltip__caret--left-bottom{right:100%;bottom:10px;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid var(--border-color)}.tooltip__caret--right{left:100%;top:50%;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid var(--border-color)}.tooltip__caret--right-top{left:100%;top:10px;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid var(--border-color)}.tooltip__caret--right-bottom{left:100%;bottom:10px;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid var(--border-color)}@media (min-width: 769px) and (max-width: 1366px){.tooltip{max-width:600px;overflow-wrap:break-word}}@media (max-width: 768x) and (min-width: 481px){.tooltip{max-width:400px;overflow-wrap:break-word}}@media (max-width: 480px) and (min-width: 320px){.tooltip{max-width:328px;overflow-wrap:break-word}}.tooltip-active{position:relative;z-index:1}.tooltip.light-shadow{box-shadow:var(--shdw-bluegrey-lvl-5)}.tooltip.dark-shadow{box-shadow:var(--shdw-greyfdbk-lvl-5)}\n']
    }]
  }], () => [{
    type: ElementRef
  }], {
    hostAnimation: [{
      type: HostBinding,
      args: ["@fadeInOut"]
    }],
    content: [{
      type: Input
    }],
    theme: [{
      type: Input
    }],
    header: [{
      type: Input
    }],
    showCaret: [{
      type: Input
    }],
    caret: [{
      type: ViewChild,
      args: ["caret"]
    }],
    shouldHaveBoxShadow: [{
      type: Input
    }],
    defaultPosition: [{
      type: Input
    }]
  });
})();
var TooltipDirective = class _TooltipDirective {
  overlay;
  overlayPositionBuilder;
  elementRef;
  renderer;
  tooltipText;
  position;
  header;
  theme = "dark";
  showCaret = false;
  includeShadow = false;
  overlayRef;
  positionStrategy;
  constructor(overlay, overlayPositionBuilder, elementRef, renderer) {
    this.overlay = overlay;
    this.overlayPositionBuilder = overlayPositionBuilder;
    this.elementRef = elementRef;
    this.renderer = renderer;
  }
  getPositionStrategy() {
    const positionStrategyBuilder = this.overlayPositionBuilder?.flexibleConnectedTo(this.elementRef);
    const panelOffset = 10;
    const arrowOffset = 10;
    const possiblePositions = [{
      overlayX: "center",
      overlayY: "bottom",
      originX: "center",
      originY: "top",
      panelClass: "bottom-center",
      offsetX: 0,
      offsetY: -1 * panelOffset
    }, {
      overlayX: "center",
      overlayY: "top",
      originX: "center",
      originY: "bottom",
      panelClass: "top-center",
      offsetX: 0,
      offsetY: panelOffset
    }, {
      overlayX: "start",
      overlayY: "bottom",
      originX: "center",
      originY: "top",
      panelClass: "bottom-left",
      offsetX: -1 * arrowOffset,
      offsetY: -1 * panelOffset
    }, {
      overlayX: "end",
      overlayY: "bottom",
      originX: "center",
      originY: "top",
      panelClass: "bottom-right",
      offsetX: arrowOffset,
      offsetY: -1 * panelOffset
    }, {
      overlayX: "start",
      overlayY: "top",
      originX: "center",
      originY: "bottom",
      panelClass: "top-left",
      offsetX: -1 * arrowOffset,
      offsetY: panelOffset
    }, {
      originX: "start",
      originY: "center",
      overlayX: "end",
      overlayY: "center",
      panelClass: "right",
      offsetX: -1 * panelOffset
    }, {
      originX: "end",
      originY: "center",
      overlayX: "start",
      overlayY: "center",
      panelClass: "left",
      offsetX: panelOffset
    }, {
      originX: "end",
      originY: "top",
      overlayX: "start",
      overlayY: "top",
      panelClass: "left-top",
      offsetX: panelOffset,
      offsetY: -1 * arrowOffset
    }, {
      originX: "start",
      originY: "top",
      overlayX: "end",
      overlayY: "top",
      panelClass: "right-top",
      offsetX: -1 * panelOffset
    }, {
      originX: "end",
      originY: "bottom",
      overlayX: "start",
      overlayY: "bottom",
      panelClass: "left-bottom",
      offsetX: 0,
      offsetY: 0
    }, {
      originX: "start",
      originY: "bottom",
      overlayX: "end",
      overlayY: "bottom",
      panelClass: "right-bottom",
      offsetX: -1 * panelOffset
    }];
    if (this.position) {
      const position = this.getPosition(this.position);
      possiblePositions.unshift(position);
      if (position.length > 0) {
        return positionStrategyBuilder?.withPositions(possiblePositions)?.withPush(false);
      }
    }
    return positionStrategyBuilder?.withPositions(possiblePositions)?.withPush(false);
  }
  getPosition(position) {
    const panelOffset = 10;
    const arrowOffset = 10;
    switch (position) {
      case "top-left":
        return {
          originX: "start",
          originY: "top",
          overlayX: "start",
          overlayY: "bottom",
          panelClass: "bottom-left",
          offsetX: arrowOffset,
          offsetY: -1 * panelOffset
        };
      case "top-right":
        return {
          originX: "end",
          originY: "top",
          overlayX: "end",
          overlayY: "bottom",
          panelClass: "bottom-right",
          offsetX: -1 * arrowOffset,
          offsetY: -1 * panelOffset
        };
      case "bottom-left":
        return {
          originX: "start",
          originY: "bottom",
          overlayX: "start",
          overlayY: "top",
          panelClass: "top-left",
          offsetX: -1 * arrowOffset,
          offsetY: panelOffset
        };
      case "bottom-right":
        return {
          originX: "end",
          originY: "bottom",
          overlayX: "end",
          overlayY: "top",
          panelClass: "top-right",
          offsetX: arrowOffset,
          offsetY: panelOffset
        };
      case "top":
        return {
          originX: "center",
          originY: "top",
          overlayX: "center",
          overlayY: "bottom",
          panelClass: "bottom-center",
          offsetX: arrowOffset,
          offsetY: -1 * panelOffset
        };
      case "bottom":
        return {
          originX: "center",
          originY: "bottom",
          overlayX: "center",
          overlayY: "top",
          panelClass: "top-center",
          offsetY: panelOffset
        };
      case "left-top":
        return {
          originX: "start",
          originY: "top",
          overlayX: "end",
          overlayY: "top",
          panelClass: "right-top",
          offsetX: -1 * arrowOffset,
          offsetY: -1 * panelOffset
        };
      case "left":
        return {
          originX: "start",
          originY: "center",
          overlayX: "end",
          overlayY: "center",
          panelClass: "right",
          offsetX: -1 * arrowOffset,
          offsetY: 0
        };
      case "left-bottom":
        return {
          originX: "start",
          originY: "bottom",
          overlayX: "end",
          overlayY: "bottom",
          panelClass: "right-bottom",
          offsetX: -1 * arrowOffset,
          offsetY: 0
        };
      case "right-top":
        return {
          originX: "end",
          originY: "top",
          overlayX: "start",
          overlayY: "top",
          panelClass: "left-top",
          offsetX: arrowOffset
        };
      case "right":
        return {
          originX: "end",
          originY: "center",
          overlayX: "start",
          overlayY: "center",
          panelClass: "left",
          offsetX: arrowOffset
        };
      case "right-bottom":
        return {
          originX: "end",
          originY: "bottom",
          overlayX: "start",
          overlayY: "bottom",
          panelClass: "left-bottom",
          offsetX: arrowOffset
        };
      default:
        return {
          originX: "center",
          originY: "top",
          overlayX: "center",
          overlayY: "bottom"
        };
    }
  }
  show() {
    const positionStrategy = this.getPositionStrategy();
    this.overlayRef = this.overlay.create({
      positionStrategy
    });
    const tooltipPortal = new ComponentPortal(TooltipComponent);
    const tooltipRef = this.overlayRef.attach(tooltipPortal);
    tooltipRef.instance.content = this.tooltipText;
    tooltipRef.instance.defaultPosition = positionStrategy;
    tooltipRef.instance.header = this.header;
    tooltipRef.instance.theme = this.theme;
    tooltipRef.instance.showCaret = this.showCaret;
    tooltipRef.instance.shouldHaveBoxShadow = this.includeShadow;
    this.renderer.addClass(this.elementRef.nativeElement, "tooltip-active");
  }
  hide() {
    this.overlayRef?.detach();
    this.renderer.removeClass(this.elementRef.nativeElement, "tooltip-active");
  }
  static ɵfac = function TooltipDirective_Factory(t) {
    return new (t || _TooltipDirective)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(OverlayPositionBuilder), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TooltipDirective,
    selectors: [["", "adaTooltip", ""]],
    hostBindings: function TooltipDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() {
          return ctx.show();
        })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() {
          return ctx.hide();
        });
      }
    },
    inputs: {
      tooltipText: "tooltipText",
      position: "position",
      header: "header",
      theme: "theme",
      showCaret: "showCaret",
      includeShadow: "includeShadow"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[adaTooltip]",
      standalone: true
    }]
  }], () => [{
    type: Overlay
  }, {
    type: OverlayPositionBuilder
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    tooltipText: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    header: [{
      type: Input
    }],
    theme: [{
      type: Input
    }],
    showCaret: [{
      type: Input
    }],
    includeShadow: [{
      type: Input
    }],
    show: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    hide: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var AccordionSeparatorComponent = class _AccordionSeparatorComponent extends CdkAccordionItem {
  isDisable = false;
  _hostClass;
  ngOnInit() {
  }
  ngOnChanges() {
    this._hostClass = this.isDisable ? `accordion--disabled` : "";
  }
  isAccordianFocused = false;
  isClicked = false;
  isFocused = false;
  collapseIcon = "assets/md-minus-icon.svg";
  disableCollapseIcon = "assets/md-minus-disable.svg";
  addIcon = "assets/md-plus-icon.svg";
  disableAddIcon = "assets/md-plus-disable.svg";
  accordionSettingIcon = "assets/setting.svg";
  onAccordionExpansion(event2) {
    if (!this.isDisable) {
      if (event2.keyCode == 9 && event2.key === "Tab") {
        this.isAccordianFocused = true;
        this.isFocused = false;
      }
      if (this.isAccordianFocused && event2.key == " " || event2.code == "Space" || event2.keyCode == 32) {
        this.isFocused = false;
        this.toggle();
      }
    }
  }
  expandAccordion(event2) {
    this.isClicked = !this.isClicked;
    this.isAccordianFocused = false;
    this.isFocused = true;
    this.isDisable ? event2.stopPropagation() : this.toggle();
  }
  static ɵfac = (() => {
    let ɵAccordionSeparatorComponent_BaseFactory;
    return function AccordionSeparatorComponent_Factory(t) {
      return (ɵAccordionSeparatorComponent_BaseFactory || (ɵAccordionSeparatorComponent_BaseFactory = ɵɵgetInheritedFactory(_AccordionSeparatorComponent)))(t || _AccordionSeparatorComponent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _AccordionSeparatorComponent,
    selectors: [["ada-accordion-separator"]],
    hostVars: 2,
    hostBindings: function AccordionSeparatorComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx._hostClass);
      }
    },
    inputs: {
      isDisable: "isDisable"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c52,
    decls: 12,
    vars: 12,
    consts: [["tabindex", "0", 1, "accordion", 3, "ngClass", "keyup"], [1, "accordion-container", 3, "ngClass", "click"], [1, "accordion-container__title"], [1, "accordion-container__description"], ["class", "accordion-container__expanded-logo", 4, "ngIf"], ["class", "accordion-container__collapsed-logo", 4, "ngIf"], [1, "accordion-container__expanded"], [1, "accordion-container__expanded-logo"], ["alt", "Collapse Icon", 3, "src"], [1, "accordion-container__collapsed-logo"], ["alt", "Add Icon", 3, "src"]],
    template: function AccordionSeparatorComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c51);
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("keyup", function AccordionSeparatorComponent_Template_div_keyup_0_listener($event) {
          return ctx.onAccordionExpansion($event);
        });
        ɵɵelementStart(1, "div", 1);
        ɵɵlistener("click", function AccordionSeparatorComponent_Template_div_click_1_listener($event) {
          return ctx.expandAccordion($event);
        });
        ɵɵelementStart(2, "div")(3, "div", 2);
        ɵɵprojection(4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 3);
        ɵɵprojection(6, 1);
        ɵɵelementEnd()();
        ɵɵelementStart(7, "div");
        ɵɵtemplate(8, AccordionSeparatorComponent_div_8_Template, 2, 1, "div", 4)(9, AccordionSeparatorComponent_div_9_Template, 2, 1, "div", 5);
        ɵɵelementEnd()();
        ɵɵelementStart(10, "div", 6);
        ɵɵprojection(11, 2);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c6, ctx.isFocused));
        ɵɵadvance(1);
        ɵɵclassProp("accordion--clicked", ctx.expanded);
        ɵɵproperty("ngClass", ɵɵpureFunction2(9, _c7, ctx.isClicked, !ctx.isClicked));
        ɵɵadvance(7);
        ɵɵproperty("ngIf", ctx.expanded);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.expanded);
        ɵɵadvance(1);
        ɵɵproperty("@animation", ctx.expanded);
      }
    },
    dependencies: [CdkAccordionModule, CommonModule, NgClass, NgIf],
    styles: ["[_nghost-%COMP%]{background:var(--white);font-size:var(--btn-02-lbl-fnt-size);font-family:var(--ttl-t1-fnt-fm);font-weight:var(--btn-lbl-fnt-wt-01);line-height:var(--p-lg-md-ln-hgt)}.accordion--disabled[_nghost-%COMP%]{background:var(--grey-25);color:var(--grey-600);cursor:not-allowed}.accordion--disabled[_nghost-%COMP%]   .accordion[_ngcontent-%COMP%]:focus{outline:none;border-top:none;border-left:none;border-right:none;border-bottom:1px solid var(--blue-grey-200);cursor:not-allowed}.accordion--disabled[_nghost-%COMP%]   .accordion[_ngcontent-%COMP%]:focus-container{outline:none}.accordion--disabled[_nghost-%COMP%]   .accordion-container[_ngcontent-%COMP%]{color:var(--grey-400)}.accordion--disabled[_nghost-%COMP%]   .accordion-container__title[_ngcontent-%COMP%]{color:var(--grey-400)}.accordion--disabled[_nghost-%COMP%]   .accordion-container__expanded[_ngcontent-%COMP%]{background:var(--grey-25);color:var(--grey-600)}.accordion--disabled[_nghost-%COMP%]   .accordion-container[_ngcontent-%COMP%]{background:var(--grey-100);box-shadow:none}.accordion--disabled[_nghost-%COMP%]   .accordion-container[_ngcontent-%COMP%]:hover{background:var(--grey-25)}.accordion--disabled[_nghost-%COMP%]   .accordion-container__expanded-logo[_ngcontent-%COMP%], .accordion--disabled[_nghost-%COMP%]   .accordion-container__collapsed-logo[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--grey-400)}.accordion--disabled[_nghost-%COMP%]:focus{outline:none;border:none}[_nghost-%COMP%]   .accordion-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:12px 12px 12px 16px;background-color:var(--white);box-shadow:var(--shdw-bluegrey-lvl-1)}[_nghost-%COMP%]   .accordion-container.applyBorder[_ngcontent-%COMP%]{border-top-left-radius:4px;border-top-right-radius:4px}[_nghost-%COMP%]   .accordion-container.noBorder[_ngcontent-%COMP%]{border-radius:4px}[_nghost-%COMP%]   .accordion-container__expanded[_ngcontent-%COMP%]{font-weight:var(--hd-3-fnt-wt);font-size:var(--hd-7-fnt-size);line-height:var(--p-md-light-ln-hgt);overflow:hidden;padding:10px 16px 16px;border-top:1px solid var(--blue-grey-200);color:var(--text-100);box-shadow:var(--shdw-bluegrey-lvl-1);border-bottom-left-radius:4px;border-bottom-right-radius:4px}[_nghost-%COMP%]   .accordion-container__expanded-logo[_ngcontent-%COMP%], [_nghost-%COMP%]   .accordion-container__collapsed-logo[_ngcontent-%COMP%]{transition:ease-in .5s;cursor:pointer;text-align:center}[_nghost-%COMP%]   .accordion-container--clicked[_ngcontent-%COMP%]:hover{background:var(--blue-grey-300)}[_nghost-%COMP%]   .accordion-container__title[_ngcontent-%COMP%]{color:var(--primary-900)}[_nghost-%COMP%]   .accordion-container__description[_ngcontent-%COMP%]{font-weight:var(--hd-3-fnt-wt);font-size:var(--hd-7-fnt-size);line-height:var(--p-md-light-ln-hgt);color:var(--grey-500);padding-left:30px;padding-top:4px}[_nghost-%COMP%]   .accordion-container[_ngcontent-%COMP%]:hover{border-bottom-left-radius:none;border-bottom-right-radius:none;background:var(--blue-grey-300)}[_nghost-%COMP%]   .accordion[_ngcontent-%COMP%]:focus-visible{outline:none;border-radius:4px;border:2px dashed var(--primary-800)}[_nghost-%COMP%]   .accordion[_ngcontent-%COMP%]:not(:focus){border-bottom:1px solid var(--blue-grey-200)}[_nghost-%COMP%]   .accordion.removeFocus[_ngcontent-%COMP%]{border-top:none;border-left:none;border-right:none;border-bottom:1px solid var(--blue-grey-200)}"],
    data: {
      animation: [trigger("animation", [state("false", style({
        height: "0",
        visibility: "hidden",
        padding: "0 16px"
      })), state("true", style({
        height: "*",
        visibility: "visible"
      })), transition("false <=> true", animate("200ms ease-in"))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionSeparatorComponent, [{
    type: Component,
    args: [{
      selector: "ada-accordion-separator",
      animations: [trigger("animation", [state("false", style({
        height: "0",
        visibility: "hidden",
        padding: "0 16px"
      })), state("true", style({
        height: "*",
        visibility: "visible"
      })), transition("false <=> true", animate("200ms ease-in"))])],
      standalone: true,
      imports: [CdkAccordionModule, CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div\n  class="accordion"\n  tabindex="0"\n  (keyup)="onAccordionExpansion($event)"\n  [ngClass]="{ removeFocus: isFocused }"\n>\n  <div\n    class="accordion-container"\n    (click)="expandAccordion($event)"\n    [class.accordion--clicked]="expanded"\n    [ngClass]="{applyBorder:isClicked, noBorder:!isClicked}"\n  >\n    <div>\n      <div class="accordion-container__title">\n        <ng-content select="[accordion-title]"></ng-content>\n      </div>\n      <div class="accordion-container__description">\n        <ng-content select="[accordion-description]"></ng-content>\n      </div>\n    </div>\n    <div>\n      <div *ngIf="expanded" class="accordion-container__expanded-logo">\n        <img\n          [src]="isDisable ? disableCollapseIcon : collapseIcon"\n          alt="Collapse Icon"\n        />\n      </div>\n      <div *ngIf="!expanded" class="accordion-container__collapsed-logo">\n        <img [src]="isDisable ? disableAddIcon : addIcon" alt="Add Icon" />\n      </div>\n    </div>\n  </div>\n  <div class="accordion-container__expanded" [@animation]="expanded">\n    <ng-content select="[accordion-content]"></ng-content>\n  </div>\n</div>\n',
      styles: [":host{background:var(--white);font-size:var(--btn-02-lbl-fnt-size);font-family:var(--ttl-t1-fnt-fm);font-weight:var(--btn-lbl-fnt-wt-01);line-height:var(--p-lg-md-ln-hgt)}:host.accordion--disabled{background:var(--grey-25);color:var(--grey-600);cursor:not-allowed}:host.accordion--disabled .accordion:focus{outline:none;border-top:none;border-left:none;border-right:none;border-bottom:1px solid var(--blue-grey-200);cursor:not-allowed}:host.accordion--disabled .accordion:focus-container{outline:none}:host.accordion--disabled .accordion-container{color:var(--grey-400)}:host.accordion--disabled .accordion-container__title{color:var(--grey-400)}:host.accordion--disabled .accordion-container__expanded{background:var(--grey-25);color:var(--grey-600)}:host.accordion--disabled .accordion-container{background:var(--grey-100);box-shadow:none}:host.accordion--disabled .accordion-container:hover{background:var(--grey-25)}:host.accordion--disabled .accordion-container__expanded-logo,:host.accordion--disabled .accordion-container__collapsed-logo{cursor:not-allowed;color:var(--grey-400)}:host.accordion--disabled:focus{outline:none;border:none}:host .accordion-container{display:flex;justify-content:space-between;padding:12px 12px 12px 16px;background-color:var(--white);box-shadow:var(--shdw-bluegrey-lvl-1)}:host .accordion-container.applyBorder{border-top-left-radius:4px;border-top-right-radius:4px}:host .accordion-container.noBorder{border-radius:4px}:host .accordion-container__expanded{font-weight:var(--hd-3-fnt-wt);font-size:var(--hd-7-fnt-size);line-height:var(--p-md-light-ln-hgt);overflow:hidden;padding:10px 16px 16px;border-top:1px solid var(--blue-grey-200);color:var(--text-100);box-shadow:var(--shdw-bluegrey-lvl-1);border-bottom-left-radius:4px;border-bottom-right-radius:4px}:host .accordion-container__expanded-logo,:host .accordion-container__collapsed-logo{transition:ease-in .5s;cursor:pointer;text-align:center}:host .accordion-container--clicked:hover{background:var(--blue-grey-300)}:host .accordion-container__title{color:var(--primary-900)}:host .accordion-container__description{font-weight:var(--hd-3-fnt-wt);font-size:var(--hd-7-fnt-size);line-height:var(--p-md-light-ln-hgt);color:var(--grey-500);padding-left:30px;padding-top:4px}:host .accordion-container:hover{border-bottom-left-radius:none;border-bottom-right-radius:none;background:var(--blue-grey-300)}:host .accordion:focus-visible{outline:none;border-radius:4px;border:2px dashed var(--primary-800)}:host .accordion:not(:focus){border-bottom:1px solid var(--blue-grey-200)}:host .accordion.removeFocus{border-top:none;border-left:none;border-right:none;border-bottom:1px solid var(--blue-grey-200)}\n"]
    }]
  }], null, {
    isDisable: [{
      type: Input
    }],
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var Month;
(function(Month2) {
  Month2[Month2["January"] = 0] = "January";
  Month2[Month2["February"] = 1] = "February";
  Month2[Month2["March"] = 2] = "March";
  Month2[Month2["April"] = 3] = "April";
  Month2[Month2["May"] = 4] = "May";
  Month2[Month2["June"] = 5] = "June";
  Month2[Month2["July"] = 6] = "July";
  Month2[Month2["August"] = 7] = "August";
  Month2[Month2["September"] = 8] = "September";
  Month2[Month2["October"] = 9] = "October";
  Month2[Month2["November"] = 10] = "November";
  Month2[Month2["December"] = 11] = "December";
})(Month || (Month = {}));
var DisplayStatus = {
  DATES: "DATES",
  YEARS: "YEARS",
  MONTHS: "MONTHS"
};
var YearStartDifference = 24;
var RangeHeader = class _RangeHeader {
  selectedYear;
  selectedMonth;
  displayStatus = DisplayStatus.DATES;
  yearStart = new CustomDates().getFullYear();
  date = new CustomDates();
  emitDisplayStatus = new EventEmitter();
  yearRangeChange = new EventEmitter();
  activeMonthChange = new EventEmitter();
  yearChange = new EventEmitter();
  yearRange;
  ngOnInit() {
    this.showYearRange();
  }
  ngOnChanges(changes) {
    if (changes["yearStart"]) {
      this.showYearRange();
    }
  }
  changeDisplayStatus() {
    const statusTransitions = {
      [DisplayStatus.DATES]: () => {
        this.displayStatus = DisplayStatus.YEARS;
        this.showYearRange();
      },
      [DisplayStatus.YEARS]: () => {
        if (!this.selectedYear || this.selectedYear && !this.selectedMonth) {
          this.displayStatus = DisplayStatus.DATES;
        }
      },
      [DisplayStatus.MONTHS]: () => {
        if (!this.selectedMonth) {
          this.displayStatus = DisplayStatus.YEARS;
        }
      }
    };
    const transition2 = statusTransitions[this.displayStatus];
    transition2 ? transition2() : null;
    this.emitDisplayStatus.emit(this.displayStatus);
  }
  showYearRange() {
    const yearEnd = this.yearStart + 23;
    this.yearRange = this.yearStart + "-" + yearEnd;
  }
  onStepClicked(delta) {
    const displayStatusActions = {
      [DisplayStatus.DATES]: () => this.activeMonthChange.emit(delta),
      [DisplayStatus.YEARS]: () => this.yearRangeChange.emit(delta),
      [DisplayStatus.MONTHS]: () => this.yearChange.emit(delta)
    };
    const displayStatusAction = displayStatusActions[this.displayStatus];
    displayStatusAction ? displayStatusAction() : null;
  }
  static ɵfac = function RangeHeader_Factory(t) {
    return new (t || _RangeHeader)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RangeHeader,
    selectors: [["range-header"]],
    inputs: {
      selectedYear: "selectedYear",
      selectedMonth: "selectedMonth",
      displayStatus: "displayStatus",
      yearStart: "yearStart",
      date: "date"
    },
    outputs: {
      emitDisplayStatus: "emitDisplayStatus",
      yearRangeChange: "yearRangeChange",
      activeMonthChange: "activeMonthChange",
      yearChange: "yearChange"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 13,
    vars: 5,
    consts: [[1, "calendar-header", "row-align-center"], [1, "calendar-header--label", "row-align-center", "h-24", 3, "click"], ["class", "calendar-header--caption", 4, "ngIf"], [1, "calendar-header--caret", "w-24", "h-24", "row-align-center"], [3, "ngIf"], [1, "calendar-header--arrow"], ["area-label", "previous", 1, "chevron-left", "w-24", "h-24", "row-align-center", 3, "click"], ["src", "../assets/icons/md-caret-left.svg", "alt", "caret-left"], ["area-label", "next", 1, "chevron-right", "w-24", "h-24", "row-align-center", 3, "click"], ["src", "../assets/icons/md-caret-right.svg", "alt", "caret-right"], [1, "calendar-header--caption"], ["src", "../assets/icons/md-caret-down.svg", "alt", "caret-down"], ["src", "../assets/icons/md-caret-up.svg", "alt", "caret-up"]],
    template: function RangeHeader_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0)(1, "div", 1);
        ɵɵlistener("click", function RangeHeader_Template_div_click_1_listener() {
          return ctx.changeDisplayStatus();
        });
        ɵɵtemplate(2, RangeHeader_div_2_Template, 4, 6, "div", 2)(3, RangeHeader_div_3_Template, 2, 1, "div", 2)(4, RangeHeader_div_4_Template, 2, 1, "div", 2);
        ɵɵelementStart(5, "div", 3);
        ɵɵtemplate(6, RangeHeader_ng_template_6_Template, 1, 0, "ng-template", 4)(7, RangeHeader_ng_template_7_Template, 1, 0, "ng-template", 4);
        ɵɵelementEnd()();
        ɵɵelementStart(8, "div", 5)(9, "div", 6);
        ɵɵlistener("click", function RangeHeader_Template_div_click_9_listener() {
          return ctx.onStepClicked(-1);
        });
        ɵɵelement(10, "img", 7);
        ɵɵelementEnd();
        ɵɵelementStart(11, "div", 8);
        ɵɵlistener("click", function RangeHeader_Template_div_click_11_listener() {
          return ctx.onStepClicked(1);
        });
        ɵɵelement(12, "img", 9);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.displayStatus === "DATES");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.displayStatus === "YEARS");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.displayStatus === "MONTHS");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.displayStatus === "DATES");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.displayStatus != "DATES");
      }
    },
    dependencies: [CommonModule, NgIf, UpperCasePipe, DatePipe],
    styles: [".calendar-header[_ngcontent-%COMP%]{justify-content:space-between;padding:24px 24px 16px}.calendar-header--label[_ngcontent-%COMP%]{gap:4px;cursor:pointer}.calendar-header--caption[_ngcontent-%COMP%]{font-family:var(--bd-fnt-fm);font-weight:var(--ds-fnt-wt-md);font-size:14px;line-height:var(--bd-fnt-ln-hgt-6);text-align:center;letter-spacing:var(--hd-fnt-2-ltr-spc);color:var(--primary-1000)}.calendar-header--caret[_ngcontent-%COMP%]{justify-content:center}.calendar-header--arrow[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:64px}.calendar-header--arrow[_ngcontent-%COMP%]   .chevron-left[_ngcontent-%COMP%], .calendar-header--arrow[_ngcontent-%COMP%]   .chevron-right[_ngcontent-%COMP%]{justify-content:center;cursor:pointer}.row-align-center[_ngcontent-%COMP%]{display:flex;align-items:center}.w-24[_ngcontent-%COMP%]{width:24px}.h-24[_ngcontent-%COMP%]{height:24px}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeHeader, [{
    type: Component,
    args: [{
      selector: "range-header",
      imports: [CommonModule],
      standalone: true,
      template: `<div class="calendar-header row-align-center">
  <div
    class="calendar-header--label row-align-center h-24"
    (click)="changeDisplayStatus()"
  >
    <div class="calendar-header--caption" *ngIf="displayStatus === 'DATES'">
      {{ date | date: "MMM YYYY" | uppercase }}
    </div>
    <div class="calendar-header--caption" *ngIf="displayStatus === 'YEARS'">
      {{ yearRange }}
    </div>
    <div class="calendar-header--caption" *ngIf="displayStatus === 'MONTHS'">
      {{ selectedYear }}
    </div>
    <div class="calendar-header--caret w-24 h-24 row-align-center">
      <ng-template [ngIf]="displayStatus === 'DATES'">
        <img src="../assets/icons/md-caret-down.svg" alt="caret-down" />
      </ng-template>
      <ng-template [ngIf]="displayStatus != 'DATES'">
        <img src="../assets/icons/md-caret-up.svg" alt="caret-up" />
      </ng-template>
    </div>
  </div>
  <div class="calendar-header--arrow">
    <div
      class="chevron-left w-24 h-24 row-align-center"
      area-label="previous"
      (click)="onStepClicked(-1)"
    >
      <img src="../assets/icons/md-caret-left.svg" alt="caret-left" />
    </div>
    <div
      class="chevron-right w-24 h-24 row-align-center"
      area-label="next"
      (click)="onStepClicked(1)"
    >
      <img src="../assets/icons/md-caret-right.svg" alt="caret-right" />
    </div>
  </div>
</div>
`,
      styles: [".calendar-header{justify-content:space-between;padding:24px 24px 16px}.calendar-header--label{gap:4px;cursor:pointer}.calendar-header--caption{font-family:var(--bd-fnt-fm);font-weight:var(--ds-fnt-wt-md);font-size:14px;line-height:var(--bd-fnt-ln-hgt-6);text-align:center;letter-spacing:var(--hd-fnt-2-ltr-spc);color:var(--primary-1000)}.calendar-header--caret{justify-content:center}.calendar-header--arrow{display:flex;justify-content:space-between;width:64px}.calendar-header--arrow .chevron-left,.calendar-header--arrow .chevron-right{justify-content:center;cursor:pointer}.row-align-center{display:flex;align-items:center}.w-24{width:24px}.h-24{height:24px}\n"]
    }]
  }], null, {
    selectedYear: [{
      type: Input
    }],
    selectedMonth: [{
      type: Input
    }],
    displayStatus: [{
      type: Input
    }],
    yearStart: [{
      type: Input
    }],
    date: [{
      type: Input
    }],
    emitDisplayStatus: [{
      type: Output
    }],
    yearRangeChange: [{
      type: Output
    }],
    activeMonthChange: [{
      type: Output
    }],
    yearChange: [{
      type: Output
    }]
  });
})();
var YearMonthListsComponent = class _YearMonthListsComponent {
  monthList = Months;
  currentMonth = "";
  currentYear;
  yearList;
  currentFullDate = new CustomDates();
  displayStatus = "";
  yearStart = new CustomDates().getFullYear();
  selectedYear;
  selectedMonth;
  closeMonthList = new EventEmitter();
  closeYearList = new EventEmitter();
  ngOnInit() {
    this.currentMonth = this.monthList[this.currentFullDate.getMonth()];
    this.currentYear = this.currentFullDate.getFullYear();
    this.getYearList(this.yearStart);
  }
  ngOnChanges(changes) {
    if (changes["yearStart"]) {
      this.getYearList(changes["yearStart"].currentValue);
    }
  }
  isActiveMonth(month) {
    return this.selectedYear === this.currentYear && this.currentMonth === month;
  }
  isSelectedMonth(month) {
    return this.selectedMonth === month;
  }
  isSelectedYear(year) {
    return this.selectedYear === year;
  }
  isActiveYear(year) {
    return this.currentYear === year && this.selectedYear !== year;
  }
  getYearList(yearStart) {
    this.yearList = this.generateYearList(yearStart);
  }
  generateYearList(startYear) {
    return Array.from({
      length: 24
    }, (_, idx) => {
      return startYear + idx;
    });
  }
  onMonthSelected(month, monthIndex) {
    this.selectedMonth = month;
    this.displayStatus = DisplayStatus.DATES;
    this.closeMonthList.emit({
      selectedMonth: this.selectedMonth,
      selectedMonthIndex: monthIndex,
      displayStatus: DisplayStatus.DATES
    });
  }
  OnYearSelected(year) {
    this.selectedYear = year;
    this.closeYearList.emit({
      selectedYear: this.selectedYear,
      displayStatus: DisplayStatus.MONTHS
    });
  }
  static ɵfac = function YearMonthListsComponent_Factory(t) {
    return new (t || _YearMonthListsComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _YearMonthListsComponent,
    selectors: [["year-month-lists"]],
    inputs: {
      displayStatus: "displayStatus",
      yearStart: "yearStart",
      selectedYear: "selectedYear",
      selectedMonth: "selectedMonth"
    },
    outputs: {
      closeMonthList: "closeMonthList",
      closeYearList: "closeYearList"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 2,
    consts: [["class", "year-container", "role", "list", 4, "ngIf"], ["class", "month-container", "role", "list", 4, "ngIf"], ["role", "list", 1, "year-container"], ["class", "selected-month", 4, "ngFor", "ngForOf"], [1, "selected-month"], ["role", "listitem", 1, "year", 3, "ngClass", "click"], ["role", "list", 1, "month-container"], ["role", "listitem", 1, "month", 3, "ngClass", "click"]],
    template: function YearMonthListsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, YearMonthListsComponent_div_0_Template, 2, 1, "div", 0)(1, YearMonthListsComponent_div_1_Template, 2, 1, "div", 1);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.displayStatus === "YEARS");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.displayStatus === "MONTHS");
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, UpperCasePipe],
    styles: [".month-container[_ngcontent-%COMP%], .year-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,48px);align-items:center;column-gap:24px;row-gap:16px}.month-container[_ngcontent-%COMP%]{grid-template-rows:repeat(3,36px)}.year-container[_ngcontent-%COMP%]{grid-template-rows:repeat(6,36px)}.month[_ngcontent-%COMP%], .year[_ngcontent-%COMP%]{cursor:pointer;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-5);width:100%;letter-spacing:var(--hd-fnt-2-ltr-spc);display:flex;justify-content:center;align-items:center;height:24px;box-sizing:border-box}.month[_ngcontent-%COMP%]:hover, .year[_ngcontent-%COMP%]:hover{background:var(--blue-grey-secondary);border-radius:12px}.month--selected[_ngcontent-%COMP%], .month--selected[_ngcontent-%COMP%]:hover, .year--selected[_ngcontent-%COMP%], .year--selected[_ngcontent-%COMP%]:hover{color:var(--white);background:var(--blue-brand-primary);border-radius:12px}.month--active[_ngcontent-%COMP%], .year--active[_ngcontent-%COMP%]{border:1px solid var(--blue-brand-primary);border-radius:12px}.month--active[_ngcontent-%COMP%]:hover, .year--active[_ngcontent-%COMP%]:hover{background:var(--blue-grey-secondary)}.selected-month[_ngcontent-%COMP%]{color:var(--grey-900);height:36px;display:flex;align-items:center;justify-content:center}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YearMonthListsComponent, [{
    type: Component,
    args: [{
      selector: "year-month-lists",
      imports: [CommonModule],
      standalone: true,
      template: `<div class="year-container" role="list" *ngIf="displayStatus === 'YEARS'">
  <div class="selected-month" *ngFor="let year of yearList">
    <div
      class="year"
      role="listitem"
      [attr.aria-label]="year"
      [ngClass]="{
        'year--selected': isSelectedYear(year),
        'year--active': isActiveYear(year)
      }"
      (click)="OnYearSelected(year)"
    >
      {{ year }}
    </div>
  </div>
</div>

<div class="month-container" role="list" *ngIf="displayStatus === 'MONTHS'">
  <div
    class="selected-month"
    *ngFor="let month of monthList; let index = index"
  >
    <div
      class="month"
      role="listitem"
      [attr.aria-label]="month"
      [ngClass]="{
        'month--selected': isSelectedMonth(month),
        'month--active': isActiveMonth(month)
      }"
      (click)="onMonthSelected(month, index)"
    >
      {{ month | uppercase }}
    </div>
  </div>
</div>
`,
      styles: [".month-container,.year-container{display:grid;grid-template-columns:repeat(4,48px);align-items:center;column-gap:24px;row-gap:16px}.month-container{grid-template-rows:repeat(3,36px)}.year-container{grid-template-rows:repeat(6,36px)}.month,.year{cursor:pointer;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-5);width:100%;letter-spacing:var(--hd-fnt-2-ltr-spc);display:flex;justify-content:center;align-items:center;height:24px;box-sizing:border-box}.month:hover,.year:hover{background:var(--blue-grey-secondary);border-radius:12px}.month--selected,.month--selected:hover,.year--selected,.year--selected:hover{color:var(--white);background:var(--blue-brand-primary);border-radius:12px}.month--active,.year--active{border:1px solid var(--blue-brand-primary);border-radius:12px}.month--active:hover,.year--active:hover{background:var(--blue-grey-secondary)}.selected-month{color:var(--grey-900);height:36px;display:flex;align-items:center;justify-content:center}\n"]
    }]
  }], null, {
    displayStatus: [{
      type: Input
    }],
    yearStart: [{
      type: Input
    }],
    selectedYear: [{
      type: Input
    }],
    selectedMonth: [{
      type: Input
    }],
    closeMonthList: [{
      type: Output
    }],
    closeYearList: [{
      type: Output
    }]
  });
})();
var DaysOfWeeksComponent = class _DaysOfWeeksComponent {
  localeId;
  daysOfWeek;
  _locale;
  get locale() {
    return this._locale;
  }
  set locale(locale) {
    this._locale = locale || this.localeId;
    this.daysOfWeek = this.getDaysOfWeek();
  }
  constructor(localeId) {
    this.localeId = localeId;
  }
  ngOnInit() {
    if (!this.locale) {
      this.locale = this.localeId;
    }
  }
  getDaysOfWeek() {
    return getLocaleDayNames(this.locale, FormStyle.Format, TranslationWidth.Short);
  }
  static ɵfac = function DaysOfWeeksComponent_Factory(t) {
    return new (t || _DaysOfWeeksComponent)(ɵɵdirectiveInject(LOCALE_ID));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DaysOfWeeksComponent,
    selectors: [["days-of-weeks"]],
    inputs: {
      locale: "locale"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 2,
    vars: 1,
    consts: [["role", "row", "aria-label", "Days of the week", 1, "days-of-week"], ["class", "days-of-week__day", "role", "columnheader", "tabindex", "-1", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader", "tabindex", "-1", 1, "days-of-week__day", 3, "title"]],
    template: function DaysOfWeeksComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, DaysOfWeeksComponent_abbr_1_Template, 2, 3, "abbr", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.daysOfWeek);
      }
    },
    dependencies: [CommonModule, NgForOf],
    styles: [".days-of-week[_ngcontent-%COMP%]{display:flex}.days-of-week__day[_ngcontent-%COMP%]{text-decoration:none;font-family:var(--btn-fnt-fm);font-weight:var(--hpl-fnt-wt-md);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-3);letter-spacing:var(--hd-fnt-2-ltr-spc);color:var(--black);display:flex;align-items:center;justify-content:center;padding:8px;box-sizing:border-box;width:36px;height:36px}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DaysOfWeeksComponent, [{
    type: Component,
    args: [{
      selector: "days-of-weeks",
      imports: [CommonModule],
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="days-of-week" role="row" aria-label="Days of the week">\n  <abbr\n    class="days-of-week__day"\n    *ngFor="let dayOfWeek of daysOfWeek; index as index"\n    [title]="dayOfWeek"\n    [attr.aria-label]="dayOfWeek"\n    role="columnheader"\n    tabindex="-1"\n    >{{ daysOfWeek[index] }}</abbr\n  >\n</div>\n',
      styles: [".days-of-week{display:flex}.days-of-week__day{text-decoration:none;font-family:var(--btn-fnt-fm);font-weight:var(--hpl-fnt-wt-md);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-3);letter-spacing:var(--hd-fnt-2-ltr-spc);color:var(--black);display:flex;align-items:center;justify-content:center;padding:8px;box-sizing:border-box;width:36px;height:36px}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }]
  }], {
    locale: [{
      type: Input
    }]
  });
})();
var HoverClassDirective = class _HoverClassDirective {
  elementRef;
  dateHovered;
  startMonthDate;
  endMonthDate;
  dayOfMonth;
  hoverClass;
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  ngOnChanges() {
    if (this.startMonthDate && this.endMonthDate) {
      if (this.dayOfMonth > this.startMonthDate && this.dayOfMonth < this.endMonthDate) {
        this.elementRef.nativeElement.classList.add(this.hoverClass);
      } else {
        this.elementRef.nativeElement.classList.remove(this.hoverClass);
      }
    } else if (this.startMonthDate) {
      if (this.dayOfMonth > this.startMonthDate && this.dayOfMonth <= this.dateHovered) {
        this.elementRef.nativeElement.classList.add(this.hoverClass);
      } else {
        this.elementRef.nativeElement.classList.remove(this.hoverClass);
      }
    } else {
      this.elementRef.nativeElement.classList.remove(this.hoverClass);
    }
  }
  static ɵfac = function HoverClassDirective_Factory(t) {
    return new (t || _HoverClassDirective)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _HoverClassDirective,
    selectors: [["", "hover-class", ""]],
    inputs: {
      dateHovered: "dateHovered",
      startMonthDate: "startMonthDate",
      endMonthDate: "endMonthDate",
      dayOfMonth: "dayOfMonth",
      hoverClass: ["hover-class", "hoverClass"]
    },
    standalone: true,
    features: [ɵɵProvidersFeature([CommonModule]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HoverClassDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[hover-class]",
      providers: [CommonModule]
    }]
  }], () => [{
    type: ElementRef
  }], {
    dateHovered: [{
      type: Input
    }],
    startMonthDate: [{
      type: Input
    }],
    endMonthDate: [{
      type: Input
    }],
    dayOfMonth: [{
      type: Input
    }],
    hoverClass: [{
      type: Input,
      args: ["hover-class"]
    }]
  });
})();
var RangeService = class _RangeService {
  selectedStartDate = new BehaviorSubject(null);
  selectedEndDate = new BehaviorSubject(null);
  startMonthDateSubject = new BehaviorSubject(void 0);
  endMonthDateSubject = new BehaviorSubject(void 0);
  setStartDate(date) {
    if (typeof date === "string") {
      date = new Date(date);
    }
    this.selectedStartDate.next(date);
  }
  setEndDate(date) {
    if (typeof date === "string") {
      date = new Date(date);
    }
    this.selectedEndDate.next(date);
  }
  getStartDate() {
    return this.selectedStartDate.getValue();
  }
  getEndDate() {
    return this.selectedEndDate.getValue();
  }
  static ɵfac = function RangeService_Factory(t) {
    return new (t || _RangeService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _RangeService,
    factory: _RangeService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DatesOfMonthsComponent = class _DatesOfMonthsComponent {
  rangeService;
  cd;
  _date = new CustomDates();
  daysOfMonth;
  firstDayOfMonth;
  lastDate;
  firstDate;
  todayDate = new CustomDates();
  dateHovered;
  startMonthDate;
  endMonthDate;
  targetDate;
  isRange;
  rangeSelection;
  currentDate = /* @__PURE__ */ new Date();
  constructor(rangeService, cd) {
    this.rangeService = rangeService;
    this.cd = cd;
  }
  ngOnInit() {
    this.subscribeToChanges();
  }
  subscribeToChanges() {
    this.rangeService.selectedStartDate.subscribe((val) => {
      val ? this.startMonthDate = val : this.startMonthDate = void 0;
      this.cd.detectChanges();
    });
    this.rangeService.selectedEndDate.subscribe((val) => {
      val ? this.endMonthDate = val : this.endMonthDate = void 0;
      this.cd.detectChanges();
    });
  }
  get date() {
    return this._date;
  }
  set date(date) {
    this._date = date;
    this.firstDate = new CustomDates(this.date.getFullYear(), this._date.getMonth(), 1);
    this.lastDate = new CustomDates(this.date.getFullYear(), this._date.getMonth() + 1, 0);
    const firstDayIndex = this.firstDate.getDay();
    const lastDayIndex = this.lastDate.getDay();
    this.daysOfMonth = this.getDaysOfMonth(this._date);
    console.log(this.daysOfMonth[0]);
    this.addPreviousDays(firstDayIndex);
    this.addNextDays(lastDayIndex);
  }
  selectedDate;
  locale;
  selectedDateChange = new EventEmitter();
  selectStartDate = new EventEmitter();
  selectEndDate = new EventEmitter();
  selectedStartDate;
  selectedEndDate;
  addPreviousDays(firstDayIndex) {
    let date = this.firstDate;
    for (let i = 1; i <= firstDayIndex; i++) {
      date = this.getStepDay(date, -1);
      date.isVisible = false;
      this.daysOfMonth.unshift(date);
    }
  }
  addNextDays(lastDayIndex, totalDays = 7) {
    let date = this.lastDate;
    for (let i = lastDayIndex; i < totalDays - 1; i++) {
      date = this.getStepDay(date, 1);
      this.daysOfMonth.push(date);
    }
  }
  getStepDay(date = new CustomDates(), delta) {
    const newDate = new CustomDates(date.getTime());
    newDate.setDate(date.getDate() + delta);
    return newDate;
  }
  getDaysOfMonth(month) {
    return Array.from({
      length: this.numberOfDaysInMonth(month)
    }, (_, index) => this.setDate(month, index + 1));
  }
  numberOfDaysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }
  setDate(date, dayOfMonth) {
    const dateCopy = new CustomDates(date);
    dateCopy.setDate(dayOfMonth);
    return dateCopy;
  }
  isDisabled(dayOfMonth) {
    return dayOfMonth.getDay() % 6 === 0 || this.lastDate < dayOfMonth || this.firstDate > dayOfMonth || this.startMonthDate && dayOfMonth < this.startMonthDate ? true : false;
  }
  isActive(dayOfMonth) {
    const todayDate = new CustomDates(this.todayDate.toDateString());
    const currentSeqDate = new CustomDates(dayOfMonth.toDateString());
    return todayDate.getTime() === currentSeqDate.getTime();
  }
  isSelected(dayOfMonth) {
    const selectedDate = new CustomDates(this.selectedDate.toDateString());
    const currentSeqDate = new CustomDates(dayOfMonth.toDateString());
    return selectedDate.getTime() === currentSeqDate.getTime();
  }
  selectMonth(selectedDate) {
    this.selectedDateChange.emit(selectedDate);
    if (this.startMonthDate && this.startMonthDate.getDate() === selectedDate.getDate()) {
      this.startMonthDate = void 0;
    } else if (this.endMonthDate && this.endMonthDate.getDate() === selectedDate.getDate()) {
      this.endMonthDate = void 0;
    } else {
      if (this.startMonthDate && this.endMonthDate) {
        this.endMonthDate = void 0;
        this.startMonthDate = selectedDate;
      } else if (!this.startMonthDate) {
        this.startMonthDate = selectedDate;
      } else if (this.startMonthDate) {
        this.endMonthDate = selectedDate;
      }
    }
    this.selectStartDate.emit(this.startMonthDate);
    this.selectEndDate.emit(this.endMonthDate);
  }
  setHoveredDate(dayOfMonth) {
    this.dateHovered = dayOfMonth;
  }
  static ɵfac = function DatesOfMonthsComponent_Factory(t) {
    return new (t || _DatesOfMonthsComponent)(ɵɵdirectiveInject(RangeService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DatesOfMonthsComponent,
    selectors: [["dates-of-months"]],
    inputs: {
      startMonthDate: "startMonthDate",
      endMonthDate: "endMonthDate",
      date: "date",
      selectedDate: "selectedDate",
      locale: "locale"
    },
    outputs: {
      selectedDateChange: "selectedDateChange",
      selectStartDate: "selectStartDate",
      selectEndDate: "selectEndDate"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 2,
    vars: 1,
    consts: [["role", "listbox", "tabindex", "-1", "aria-label", "Calendar month", 1, "month"], ["class", "month--date", "hover-class", "month__hover--selected", "role", "option", 3, "dateHovered", "endMonthDate", "startMonthDate", "dayOfMonth", "dateTime", "ngClass", "tabIndex", "click", "mouseover", "keyup.enter", 4, "ngFor", "ngForOf"], ["hover-class", "month__hover--selected", "role", "option", 1, "month--date", 3, "dateHovered", "endMonthDate", "startMonthDate", "dayOfMonth", "dateTime", "ngClass", "tabIndex", "click", "mouseover", "keyup.enter"]],
    template: function DatesOfMonthsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, DatesOfMonthsComponent_time_1_Template, 5, 27, "time", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.daysOfMonth);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, DatePipe, HoverClassDirective],
    styles: [".month[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;row-gap:16px;width:252px}.month--date[_ngcontent-%COMP%]{width:36px;height:36px;display:flex;align-items:center;justify-content:center;padding:8px;box-sizing:border-box;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-5);letter-spacing:var(--hd-fnt-2-ltr-spc);cursor:pointer}.month--date[_ngcontent-%COMP%]:hover{background:var(--blue-grey-secondary);border-radius:4px;color:var(--black)}.month[_ngcontent-%COMP%]   .date--visible[_ngcontent-%COMP%]{cursor:default}.month[_ngcontent-%COMP%]   .date--disabled[_ngcontent-%COMP%]{color:var(--grey-1300);cursor:not-allowed;pointer-events:none}.month[_ngcontent-%COMP%]   .date--disabled[_ngcontent-%COMP%]:hover{background:var(--white)}.month[_ngcontent-%COMP%]   .button-container[disabled][_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{pointer-events:none}.month[_ngcontent-%COMP%]   .date--active[_ngcontent-%COMP%]{border:1px solid var(--blue-brand-primary);border-radius:4px}.month[_ngcontent-%COMP%]   .date--active[_ngcontent-%COMP%]:hover{background:var(--blue-grey-secondary)}.month[_ngcontent-%COMP%]   .month__hover--selected[_ngcontent-%COMP%]{background:var(--blue-grey-secondary);color:var(--black);border-radius:none}.month[_ngcontent-%COMP%]   .date--selected[_ngcontent-%COMP%]{background:var(--blue-brand-primary);border-radius:4px;color:var(--white);background-color:var(--blue-brand-primary)}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatesOfMonthsComponent, [{
    type: Component,
    args: [{
      selector: "dates-of-months",
      imports: [CommonModule, HoverClassDirective],
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="month" role="listbox" tabindex="-1" aria-label="Calendar month">
  <time
    class="month--date"
    hover-class="month__hover--selected"
    [dateHovered]="dateHovered"
    [endMonthDate]="endMonthDate"
    [startMonthDate]="startMonthDate"
    [dayOfMonth]="dayOfMonth"
    *ngFor="let dayOfMonth of daysOfMonth"
    [dateTime]="dayOfMonth | date: 'yyyy-MM-dd'"
    [ngClass]="{
      'date--visible': !dayOfMonth.isVisible,
      'date--disabled': isDisabled(dayOfMonth),
      'date--active': isActive(dayOfMonth),
      'date--selected':
        (dayOfMonth.getDate() == startMonthDate?.getDate() ||
          dayOfMonth.getDate() == endMonthDate?.getDate()) &&
        !isDisabled(dayOfMonth)
    }"
    role="option"
    [tabIndex]="isActive(dayOfMonth) ? 0 : -1"
    [attr.aria-label]="dayOfMonth | date: 'fullDate':locale"
    [attr.aria-selected]="selectedDate && isSelected(dayOfMonth)"
    [attr.aria-disabled]="isDisabled(dayOfMonth)"
    [attr.aria-current]="isActive(dayOfMonth) && 'date'"
    (click)="selectMonth(dayOfMonth)"
    (mouseover)="setHoveredDate(dayOfMonth)"
    (keyup.enter)="selectMonth(dayOfMonth)"
    >{{ dayOfMonth | date: "d" }}
  </time>
</div>
`,
      styles: [".month{display:flex;flex-wrap:wrap;row-gap:16px;width:252px}.month--date{width:36px;height:36px;display:flex;align-items:center;justify-content:center;padding:8px;box-sizing:border-box;font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-5);letter-spacing:var(--hd-fnt-2-ltr-spc);cursor:pointer}.month--date:hover{background:var(--blue-grey-secondary);border-radius:4px;color:var(--black)}.month .date--visible{cursor:default}.month .date--disabled{color:var(--grey-1300);cursor:not-allowed;pointer-events:none}.month .date--disabled:hover{background:var(--white)}.month .button-container[disabled] button{pointer-events:none}.month .date--active{border:1px solid var(--blue-brand-primary);border-radius:4px}.month .date--active:hover{background:var(--blue-grey-secondary)}.month .month__hover--selected{background:var(--blue-grey-secondary);color:var(--black);border-radius:none}.month .date--selected{background:var(--blue-brand-primary);border-radius:4px;color:var(--white);background-color:var(--blue-brand-primary)}\n"]
    }]
  }], () => [{
    type: RangeService
  }, {
    type: ChangeDetectorRef
  }], {
    startMonthDate: [{
      type: Input
    }],
    endMonthDate: [{
      type: Input
    }],
    date: [{
      type: Input
    }],
    selectedDate: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    selectedDateChange: [{
      type: Output
    }],
    selectStartDate: [{
      type: Output
    }],
    selectEndDate: [{
      type: Output
    }]
  });
})();
var CustomDates = class extends Date {
  isVisible = true;
};
var RangeComponent = class _RangeComponent {
  localeId;
  rangeService;
  displayStatus = DisplayStatus.DATES;
  selectedMonth;
  selectedMonthIndex;
  yearStart = new CustomDates().getFullYear();
  activeMonth = new CustomDates();
  emitDate = new Subject();
  cancelDate = new Subject();
  selectedYear;
  locale;
  selectedDate;
  selectedStartDate;
  _month;
  isDisable = false;
  startDateSelected = new EventEmitter();
  endDateSelected = new EventEmitter();
  startDate = "";
  endDate = "";
  isDateVisible = false;
  isSelectedStartDate = false;
  isSelectedEndDate = false;
  startMonthDate;
  endMonthDate;
  get month() {
    return this._month;
  }
  set month(month) {
    if (month) {
      this._month = month;
      this.selectedDate = month;
      this.activeMonth = this._month;
      this.selectedYear = this._month.getFullYear();
      this.findStartYear();
      this.selectedMonth = Months[this._month.getMonth()];
    }
  }
  constructor(localeId, rangeService) {
    this.localeId = localeId;
    this.rangeService = rangeService;
  }
  ngOnInit() {
    this.locale = this.localeId;
    const startDate = this.rangeService.getStartDate();
    const endDate = this.rangeService.getEndDate();
    if (startDate instanceof Date) {
      this.startDate = startDate;
      this.isSelectedStartDate = true;
    } else {
      this.startDate = null;
      this.isSelectedStartDate = false;
    }
    if (endDate instanceof Date) {
      this.endDate = endDate;
      this.isSelectedEndDate = true;
    } else {
      this.endDate = null;
      this.isSelectedEndDate = false;
    }
  }
  convertDateToFormat(date) {
    if (!date) {
      return "";
    }
    const datePipe = new DatePipe("en-US");
    return datePipe.transform(date, "MM/dd/y");
  }
  findStartYear() {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const yearDifference = this.selectedYear - currentYear;
    this.yearStart = currentYear + Math.floor(yearDifference / YearStartDifference) * YearStartDifference;
  }
  onMonthListClose(event2) {
    this.displayStatus = event2.displayStatus;
    this.selectedMonth = event2.selectedMonth;
    this.selectedMonthIndex = event2.selectedMonthIndex;
    this.activeMonth.setMonth(this.selectedMonthIndex);
  }
  onYearListClose(event2) {
    this.selectedYear = event2.selectedYear;
    this.displayStatus = event2.displayStatus;
    this.activeMonth.setFullYear(this.selectedYear);
  }
  onDisplayStatusChange(displayStatus) {
    this.displayStatus = displayStatus;
  }
  changeSelectedYear(delta) {
    this.selectedYear = this.selectedYear + delta;
    this.activeMonth.setFullYear(this.selectedYear);
    this.findStartYear();
  }
  stepYear(delta) {
    this.yearStart = delta === 1 ? this.yearStart + YearStartDifference : this.yearStart - YearStartDifference;
  }
  stepMonth(delta) {
    let date = new CustomDates(this.activeMonth.getFullYear(), this.activeMonth.getMonth() + delta);
    this.activeMonth = date;
  }
  onDateSelection(date) {
    const inputMonth = Months[date.getMonth()];
    const currentActiveMonth = Months[this.activeMonth.getMonth()];
    if (currentActiveMonth === inputMonth) {
      this.selectedDate = date;
      this.activeMonth = date;
    } else {
      this.activeMonth = date;
      this.selectedMonth = inputMonth;
    }
  }
  submitRange() {
    this.rangeService.setStartDate(this.startDate);
    this.rangeService.setEndDate(this.endDate);
    this.emitDate.next(this.selectedDate);
    if (this.startDate !== this.startMonthDate && this.endDate !== this.endMonthDate) {
      this.rangeService.setStartDate(this.startDate);
      this.rangeService.setEndDate(this.endDate);
    }
  }
  cancelRange() {
    this.rangeService.selectedStartDate.next(null);
    this.rangeService.selectedEndDate.next(null);
    if (this.isSelectedStartDate || this.isSelectedEndDate) {
      this.startDate = null;
      this.endDate = null;
      this.isSelectedStartDate = false;
      this.isSelectedEndDate = false;
    } else {
      this.cancelDate.next(true);
      this.rangeService.setStartDate(null);
      this.rangeService.setEndDate(null);
    }
  }
  onStartDateSelected(startDate) {
    this.isSelectedStartDate = false;
    this.startDate = this.convertDateToFormat(startDate);
    this.startDate ? this.isSelectedStartDate = true : null;
    this.submitRangeIfBothSelected();
  }
  onEndDateSelected(endDate) {
    this.isSelectedEndDate = false;
    this.endDate = this.convertDateToFormat(endDate);
    this.endDate ? this.isSelectedEndDate = true : null;
    this.submitRangeIfBothSelected();
  }
  submitRangeIfBothSelected() {
    if (this.isSelectedStartDate && this.isSelectedEndDate) {
      this.submitRange();
    }
  }
  static ɵfac = function RangeComponent_Factory(t) {
    return new (t || _RangeComponent)(ɵɵdirectiveInject(LOCALE_ID), ɵɵdirectiveInject(RangeService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RangeComponent,
    selectors: [["ada-range"]],
    inputs: {
      startDate: "startDate",
      endDate: "endDate",
      startMonthDate: "startMonthDate",
      endMonthDate: "endMonthDate",
      month: "month"
    },
    outputs: {
      startDateSelected: "startDateSelected",
      endDateSelected: "endDateSelected"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 8,
    vars: 7,
    consts: [["role", "region", "aria-label", "Range", 2, "position", "absolute"], [1, "range-container"], ["role", "heading", 3, "selectedYear", "displayStatus", "yearStart", "date", "emitDisplayStatus", "yearRangeChange", "yearChange", "activeMonthChange"], ["role", "separator", "aria-hidden", "true", 1, "range__divider--horizontal"], ["role", "grid", 1, "range-body"], ["role", "row", 3, "locale", 4, "ngIf"], ["role", "rowgroup", "aria-labelledby", "month-year-label", 3, "date", "locale", "selectedDate", "selectedDateChange", "selectStartDate", "selectEndDate", 4, "ngIf"], ["role", "listbox", "aria-labelledby", "year-month-list-label", 3, "displayStatus", "yearStart", "selectedMonth", "selectedYear", "closeMonthList", "closeYearList", 4, "ngIf"], ["role", "row", 3, "locale"], ["role", "rowgroup", "aria-labelledby", "month-year-label", 3, "date", "locale", "selectedDate", "selectedDateChange", "selectStartDate", "selectEndDate"], ["role", "listbox", "aria-labelledby", "year-month-list-label", 3, "displayStatus", "yearStart", "selectedMonth", "selectedYear", "closeMonthList", "closeYearList"]],
    template: function RangeComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "ada-card", 0)(1, "div", 1)(2, "range-header", 2);
        ɵɵlistener("emitDisplayStatus", function RangeComponent_Template_range_header_emitDisplayStatus_2_listener($event) {
          return ctx.onDisplayStatusChange($event);
        })("yearRangeChange", function RangeComponent_Template_range_header_yearRangeChange_2_listener($event) {
          return ctx.stepYear($event);
        })("yearChange", function RangeComponent_Template_range_header_yearChange_2_listener($event) {
          return ctx.changeSelectedYear($event);
        })("activeMonthChange", function RangeComponent_Template_range_header_activeMonthChange_2_listener($event) {
          return ctx.stepMonth($event);
        });
        ɵɵelementEnd();
        ɵɵelement(3, "div", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵtemplate(5, RangeComponent_days_of_weeks_5_Template, 1, 1, "days-of-weeks", 5)(6, RangeComponent_dates_of_months_6_Template, 1, 3, "dates-of-months", 6)(7, RangeComponent_year_month_lists_7_Template, 1, 4, "year-month-lists", 7);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("selectedYear", ctx.selectedYear)("displayStatus", ctx.displayStatus)("yearStart", ctx.yearStart)("date", ctx.activeMonth);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.displayStatus === "DATES");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.displayStatus === "DATES");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.displayStatus !== "DATES");
      }
    },
    dependencies: [CommonModule, NgIf, CardsComponent, RangeHeader, YearMonthListsComponent, DaysOfWeeksComponent, DatesOfMonthsComponent],
    styles: ["ada-calendar[_nghost-%COMP%]   ada-card[_ngcontent-%COMP%], ada-calendar   [_nghost-%COMP%]   ada-card[_ngcontent-%COMP%]{position:absolute;left:0;top:4px;padding:0}.range-container[_ngcontent-%COMP%]{width:312px;min-height:400px}.range-container[_ngcontent-%COMP%]   .range__divider--horizontal[_ngcontent-%COMP%]{height:1px;background:var(--grey-200)}.range-container[_ngcontent-%COMP%]   .range-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;padding:16px 24px 0}.range[_ngcontent-%COMP%]{display:flex;padding:16px 24px 0;gap:24px}.range-picker[_ngcontent-%COMP%]{background-color:var(--grey-25);border-radius:4px;padding:8px;width:124px}.range-picker__start[_ngcontent-%COMP%]{margin-bottom:4px;color:var(--grey-1200);font-family:var(--bd-fnt-fm);font-weight:var(--hd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4);line-height:var(-bd-fnt-ln-hgt-5);letter-spacing:var(--hd-fnt-2-ltr-spc)}.range-picker__start-end-date[_ngcontent-%COMP%]{color:var(--grey-1200);font-family:var(--bd-fnt-fm);font-weight:var(--hd-fnt-wt-md);font-size:var(--bd-fnt-sz-3);line-height:var(--bd-fnt-ln-hgt-6);letter-spacing:var(--hd-fnt-2-ltr-spc);width:88px;border:none}.range-picker__start-end-date.placeHolderStartColor[_ngcontent-%COMP%], .range-picker__start-end-date.placeHolderEndColor[_ngcontent-%COMP%]{color:var(--grey-1400)}.first-button[_ngcontent-%COMP%]{width:106px}.range-button[_ngcontent-%COMP%]{display:flex;gap:40px;margin-right:24px}.range-button__text[_ngcontent-%COMP%]{margin-left:24px}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeComponent, [{
    type: Component,
    args: [{
      selector: "ada-range",
      imports: [CommonModule, CardsComponent, RangeHeader, YearMonthListsComponent, DaysOfWeeksComponent, DatesOfMonthsComponent, ButtonComponent],
      standalone: true,
      template: `<ada-card role="region" aria-label="Range" style="position: absolute">
  <div class="range-container">
    <range-header
      role="heading"
      [selectedYear]="selectedYear"
      [displayStatus]="displayStatus"
      [yearStart]="yearStart"
      [date]="activeMonth"
      (emitDisplayStatus)="onDisplayStatusChange($event)"
      (yearRangeChange)="stepYear($event)"
      (yearChange)="changeSelectedYear($event)"
      (activeMonthChange)="stepMonth($event)"
    ></range-header>

    <div
      class="range__divider--horizontal"
      role="separator"
      aria-hidden="true"
    ></div>


    <div class="range-body" role="grid">
      <days-of-weeks
        role="row"
        *ngIf="displayStatus === 'DATES'"
        [locale]="locale"
      ></days-of-weeks>

      <dates-of-months
        *ngIf="displayStatus === 'DATES'"
        [date]="activeMonth"
        [locale]="locale"
        [selectedDate]="month"
        (selectedDateChange)="onDateSelection($event)"
        (selectStartDate)="onStartDateSelected($event)"
        (selectEndDate)="onEndDateSelected($event)"
        role="rowgroup"
        aria-labelledby="month-year-label"
      ></dates-of-months>

      <year-month-lists
        *ngIf="displayStatus !== 'DATES'"
        [displayStatus]="displayStatus"
        [yearStart]="yearStart"
        [selectedMonth]="selectedMonth"
        [selectedYear]="selectedYear"
        (closeMonthList)="onMonthListClose($event)"
        (closeYearList)="onYearListClose($event)"
        role="listbox"
        aria-labelledby="year-month-list-label"
      ></year-month-lists>

    </div>
  </div>
</ada-card>
`,
      styles: [":host-context(ada-calendar) ada-card{position:absolute;left:0;top:4px;padding:0}.range-container{width:312px;min-height:400px}.range-container .range__divider--horizontal{height:1px;background:var(--grey-200)}.range-container .range-body{display:flex;flex-direction:column;align-items:center;gap:16px;padding:16px 24px 0}.range{display:flex;padding:16px 24px 0;gap:24px}.range-picker{background-color:var(--grey-25);border-radius:4px;padding:8px;width:124px}.range-picker__start{margin-bottom:4px;color:var(--grey-1200);font-family:var(--bd-fnt-fm);font-weight:var(--hd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4);line-height:var(-bd-fnt-ln-hgt-5);letter-spacing:var(--hd-fnt-2-ltr-spc)}.range-picker__start-end-date{color:var(--grey-1200);font-family:var(--bd-fnt-fm);font-weight:var(--hd-fnt-wt-md);font-size:var(--bd-fnt-sz-3);line-height:var(--bd-fnt-ln-hgt-6);letter-spacing:var(--hd-fnt-2-ltr-spc);width:88px;border:none}.range-picker__start-end-date.placeHolderStartColor,.range-picker__start-end-date.placeHolderEndColor{color:var(--grey-1400)}.first-button{width:106px}.range-button{display:flex;gap:40px;margin-right:24px}.range-button__text{margin-left:24px}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }]
  }, {
    type: RangeService
  }], {
    startDateSelected: [{
      type: Output
    }],
    endDateSelected: [{
      type: Output
    }],
    startDate: [{
      type: Input
    }],
    endDate: [{
      type: Input
    }],
    startMonthDate: [{
      type: Input
    }],
    endMonthDate: [{
      type: Input
    }],
    month: [{
      type: Input
    }]
  });
})();
var RangeDirective = class _RangeDirective {
  overlay;
  elementRef;
  datePipe;
  rangeService;
  overlayRef;
  overlaySubscription;
  inputDateRangeValue;
  dateRangeFormat = "mediumDate";
  selectedDateRange = new EventEmitter();
  constructor(overlay, elementRef, datePipe, rangeService) {
    this.overlay = overlay;
    this.elementRef = elementRef;
    this.datePipe = datePipe;
    this.rangeService = rangeService;
  }
  onClick(eventTarget) {
    if (eventTarget instanceof HTMLImageElement) {
      this.openAdaCalendar();
    }
  }
  openAdaCalendar() {
    const positionStrategy = this.getPositionStrategyOptions();
    this.overlayRef = this.createOverlay(positionStrategy);
    if (this.overlayRef) {
    }
    const calendarComponentInstance = this.getComponentInstance();
    calendarComponentInstance ? this.handleEventsOfComponent(calendarComponentInstance) : null;
    this.closeOverlay();
  }
  getPositionStrategyOptions() {
    return this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withPush(false).withFlexibleDimensions(false).withPositions([{
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top",
      offsetY: 0
    }]);
  }
  createOverlay(positionStrategy) {
    return this.overlay.create({
      backdropClass: "cdk-overlay-transparent-backdrop",
      hasBackdrop: true,
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
  }
  closeOverlay() {
    this.overlaySubscription = this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
      setTimeout(() => {
        this.overlayRef.dispose();
        this.overlaySubscription.unsubscribe();
      }, 300);
    });
  }
  getComponentInstance() {
    return this.overlayRef.attach(new ComponentPortal(RangeComponent)).instance;
  }
  handleEventsOfComponent(RangeComponentInstance) {
    let result = {
      startDate: null,
      endDate: null
    };
    if (this.inputDateRangeValue)
      RangeComponentInstance.month = new CustomDates(this.inputDateRangeValue);
    RangeComponentInstance.emitDate.subscribe((date) => {
      const formattedDate = this.formatDate(date);
      this.selectedDateRange.emit(result);
      setTimeout(() => {
        if (date) {
          this.overlayRef.detach();
        }
      }, 50);
      if (RangeComponentInstance.startDate !== null) {
        this.rangeService.setStartDate(RangeComponentInstance.startDate);
        result.startDate = RangeComponentInstance.startDate;
      }
      if (RangeComponentInstance.endDate !== null) {
        this.rangeService.setEndDate(RangeComponentInstance.endDate);
        result.endDate = RangeComponentInstance.endDate;
      }
      this.selectedDateRange.emit(result);
    });
    RangeComponentInstance.cancelDate.subscribe((cancelled) => {
      if (cancelled) {
        this.overlayRef.dispose();
      }
    });
    return result;
  }
  formatDate(date) {
    return this.datePipe.transform(date, this.dateRangeFormat);
  }
  static ɵfac = function RangeDirective_Factory(t) {
    return new (t || _RangeDirective)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DatePipe), ɵɵdirectiveInject(RangeService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _RangeDirective,
    selectors: [["", "adaRange", ""]],
    hostBindings: function RangeDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function RangeDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event.target);
        });
      }
    },
    inputs: {
      inputDateRangeValue: "inputDateRangeValue",
      dateRangeFormat: "dateRangeFormat"
    },
    outputs: {
      selectedDateRange: "selectedDateRange"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([Overlay, DatePipe, CommonModule])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeDirective, [{
    type: Directive,
    args: [{
      selector: "[adaRange]",
      standalone: true,
      providers: [Overlay, DatePipe, CommonModule]
    }]
  }], () => [{
    type: Overlay
  }, {
    type: ElementRef
  }, {
    type: DatePipe
  }, {
    type: RangeService
  }], {
    inputDateRangeValue: [{
      type: Input
    }],
    dateRangeFormat: [{
      type: Input
    }],
    selectedDateRange: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.target"]]
    }]
  });
})();
var CardActionComponent = class _CardActionComponent {
  static ɵfac = function CardActionComponent_Factory(t) {
    return new (t || _CardActionComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CardActionComponent,
    selectors: [["ada-card-action"]],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c4,
    decls: 2,
    vars: 0,
    consts: [[1, "container"]],
    template: function CardActionComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
      }
    },
    styles: ["[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:16px}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardActionComponent, [{
    type: Component,
    args: [{
      selector: "ada-card-action",
      standalone: true,
      imports: [ButtonComponent],
      template: '<div class="container">\n    <ng-content></ng-content>\n</div>',
      styles: [":host .container{display:flex;justify-content:flex-end;gap:16px}\n"]
    }]
  }], null, null);
})();
var CardContentComponent = class _CardContentComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static ɵfac = function CardContentComponent_Factory(t) {
    return new (t || _CardContentComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CardContentComponent,
    selectors: [["ada-card-content"]],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c4,
    decls: 2,
    vars: 0,
    consts: [[1, "container"]],
    template: function CardContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
      }
    },
    dependencies: [CommonModule],
    styles: ["[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{font-family:var(--bd-fnt-fm);font-style:normal;font-weight:var(--hd-fnt-wt-rg);font-size:var(--hd-fnt-sz-6);line-height:var(--bd-fnt-ln-hgt-2);letter-spacing:.5px;color:var(--grey-1000);background:var(--white)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardContentComponent, [{
    type: Component,
    args: [{
      selector: "ada-card-content",
      standalone: true,
      imports: [CommonModule],
      template: '<div class="container">\n    <ng-content></ng-content>\n</div>',
      styles: [":host .container{font-family:var(--bd-fnt-fm);font-style:normal;font-weight:var(--hd-fnt-wt-rg);font-size:var(--hd-fnt-sz-6);line-height:var(--bd-fnt-ln-hgt-2);letter-spacing:.5px;color:var(--grey-1000);background:var(--white)}\n"]
    }]
  }], () => [], null);
})();
var CardImageComponent = class _CardImageComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static ɵfac = function CardImageComponent_Factory(t) {
    return new (t || _CardImageComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CardImageComponent,
    selectors: [["ada-card-image"]],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c4,
    decls: 1,
    vars: 0,
    template: function CardImageComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    dependencies: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardImageComponent, [{
    type: Component,
    args: [{
      selector: "ada-card-image",
      standalone: true,
      imports: [CommonModule],
      template: "<ng-content></ng-content>"
    }]
  }], () => [], null);
})();
var CardTitleComponent = class _CardTitleComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static ɵfac = function CardTitleComponent_Factory(t) {
    return new (t || _CardTitleComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CardTitleComponent,
    selectors: [["ada-card-title"]],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c54,
    decls: 6,
    vars: 0,
    consts: [[1, "container"], [1, "container-header"], [1, "container-subheading"]],
    template: function CardTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c53);
        ɵɵelementStart(0, "div", 0)(1, "div", 1);
        ɵɵprojection(2);
        ɵɵprojection(3, 1);
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 2);
        ɵɵprojection(5, 2);
        ɵɵelementEnd()();
      }
    },
    dependencies: [CommonModule],
    styles: ["[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:16px;font-family:var(--hd-fnt-fm);font-style:normal}[_nghost-%COMP%]   .container-header[_ngcontent-%COMP%]{font-weight:var(--ds-fnt-wt-lg);font-size:var(--hd-fnt-sz-3);line-height:var(--hd-fnt-ln-hgt-3);letter-spacing:.5px;color:var(--grey-1000);display:grid;grid-template-columns:2fr .1fr}[_nghost-%COMP%]   .container-subheading[_ngcontent-%COMP%]{font-weight:var(--hpl-fnt-wt-md);font-size:var(--hd-fnt-sz-6);line-height:var(--hd-fnt-ln-hgt-6);letter-spacing:.5px;color:var(--grey-800)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardTitleComponent, [{
    type: Component,
    args: [{
      selector: "ada-card-title",
      standalone: true,
      imports: [CommonModule],
      template: '<div class="container">\n    <div class="container-header">\n        <ng-content select="[title]"></ng-content>\n        <ng-content select="[img]"></ng-content>\n    </div>\n    <div class="container-subheading">\n        <ng-content select="[subTitle]"></ng-content>\n    </div>\n</div>',
      styles: [":host .container{display:flex;flex-direction:column;padding-bottom:16px;font-family:var(--hd-fnt-fm);font-style:normal}:host .container-header{font-weight:var(--ds-fnt-wt-lg);font-size:var(--hd-fnt-sz-3);line-height:var(--hd-fnt-ln-hgt-3);letter-spacing:.5px;color:var(--grey-1000);display:grid;grid-template-columns:2fr .1fr}:host .container-subheading{font-weight:var(--hpl-fnt-wt-md);font-size:var(--hd-fnt-sz-6);line-height:var(--hd-fnt-ln-hgt-6);letter-spacing:.5px;color:var(--grey-800)}\n"]
    }]
  }], () => [], null);
})();
var iconMap = {
  facebook: {
    fb_filled: "assets/blue-fb-logo.svg",
    fb_outlined: "assets/facebook-white.svg",
    default: "assets/blue-fb-logo.svg",
    disabled: "assets/facebook-disable.svg"
  },
  google: {
    google_light: "assets/google.svg",
    google_dark: "assets/google.svg",
    default: "assets/google_white.svg",
    disabled: "assets/google-disable.svg"
  },
  twitter: {
    twitter_btn: "assets/twitter.svg",
    twitter_link: "assets/twitter.svg",
    default: "assets/twitter_white.svg",
    disabled: "assets/twitter-disable.svg"
  },
  apple: {
    apple_black: "assets/apple-white.svg",
    apple_white: "assets/apple_black.svg",
    default: "assets/apple-white.svg",
    disabled: "assets/apple-disable.svg"
  },
  microsoft: {
    microsoft_dark: "assets/microsoft.svg",
    microsoft_light: "assets/microsoft.svg",
    default: "assets/microsoft_white.svg",
    disabled: "assets/microsoft-disable.svg"
  },
  slack: {
    slack_dark: "assets/slack.svg",
    slack_light: "assets/slack.svg",
    default: "assets/slack_white.svg",
    disabled: "assets/slack-disable.svg"
  }
};
var SocialButtonComponent = class _SocialButtonComponent {
  type;
  size = "l";
  subType = "fb_outlined";
  isDisabled = false;
  isFocused = false;
  isHovered = false;
  icon = "assets/blue-fb-logo.svg";
  _hostClass;
  _ripple = false;
  buttonClicked(event2) {
    if (this.isDisabled) {
      event2.stopPropagation();
      return;
    }
    this._ripple = !this._ripple;
  }
  constructor() {
  }
  ngOnChanges() {
    this._hostClass = `button button__${this.type} button__${this.type}--${this.size}  button__${this.type}--${this.subType}`;
    this._hostClass += this.isDisabled ? ` button__${this.type}--disabled` : "";
    this.getIcon();
  }
  getIcon() {
    const typeKeys = Object.keys(iconMap);
    const subtype = this.subType || "default";
    const isDisabled = this.isDisabled || false;
    for (const key of typeKeys) {
      if (this.type === key) {
        this.icon = iconMap[key][subtype] || iconMap[key]["default"];
        if (isDisabled) {
          this.icon = iconMap[key]["disabled"] || this.icon;
        }
        break;
      }
    }
  }
  ngOnInit() {
    if (!this._hostClass) {
      this._hostClass = `button button__${this.type} button--${this.size}  button__${this.type}--${this.subType}`;
    }
  }
  static ɵfac = function SocialButtonComponent_Factory(t) {
    return new (t || _SocialButtonComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SocialButtonComponent,
    selectors: [["ada-social-button"]],
    hostVars: 2,
    hostBindings: function SocialButtonComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function SocialButtonComponent_click_HostBindingHandler($event) {
          return ctx.buttonClicked($event);
        });
      }
      if (rf & 2) {
        ɵɵclassMap(ctx._hostClass);
      }
    },
    inputs: {
      type: "type",
      size: "size",
      subType: "subType",
      isDisabled: "isDisabled"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c58,
    decls: 8,
    vars: 11,
    consts: [[1, "button__body", 3, "disabled", "ngClass", "focus", "blur"], [1, "button__body--img"], ["alt", "company logo", 3, "src"], [1, "button__body--title", 3, "ngClass"], [1, "button__overlay-container"], [1, "button__overlay"]],
    template: function SocialButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c55);
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("focus", function SocialButtonComponent_Template_button_focus_0_listener() {
          return ctx.isFocused = true;
        })("blur", function SocialButtonComponent_Template_button_blur_0_listener() {
          return ctx.isFocused = false;
        });
        ɵɵelementStart(1, "div", 1);
        ɵɵelement(2, "img", 2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 3);
        ɵɵprojection(4);
        ɵɵelementEnd();
        ɵɵprojection(5, 1);
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 4);
        ɵɵelement(7, "div", 5);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("disabled", ctx.isDisabled)("ngClass", ɵɵpureFunction2(5, _c56, ctx.isDisabled, ctx.subType === "google_dark"));
        ɵɵadvance(2);
        ɵɵproperty("src", ctx.icon, ɵɵsanitizeUrl);
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction2(8, _c57, ctx.subType === "google_dark" && !ctx.isDisabled, ctx.subType === "google_dark" && ctx.isDisabled));
        ɵɵadvance(4);
        ɵɵproperty("@rippleAnimation", ctx._ripple);
      }
    },
    dependencies: [CommonModule, NgClass],
    styles: [".button__facebook[_nghost-%COMP%]{display:inline-block;align-items:center;background-color:var(--primary-1300);color:var(--white);border-radius:4px}.button__facebook[_nghost-%COMP%]:hover{background-color:var(--primary-2200)}.button__facebook[_nghost-%COMP%]:active{background-color:var(--primary-2300);border:none}.button__facebook[disabled][_nghost-%COMP%]:hover{background-color:var(--white)}.button__facebook[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__facebook[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.button__facebook--l[_nghost-%COMP%]{height:56px}.button__facebook--m[_nghost-%COMP%]{height:48px}.button__facebook--s[_nghost-%COMP%]{height:40px}.button__facebook--xs[_nghost-%COMP%]{height:36px}.button__facebook--fb_filled[_nghost-%COMP%]{background:var(--primary-1300);color:var(--white)}.button__facebook--fb_outlined[_nghost-%COMP%]{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}.button__facebook--google_light[_nghost-%COMP%]{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__facebook--google_dark[_nghost-%COMP%]{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__facebook--slack_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}.button__facebook--slack_dark[_nghost-%COMP%]{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}.button__facebook--apple_white[_nghost-%COMP%]{background:var(--white);color:var(--black);border:1px solid var(--black)}.button__facebook--apple_black[_nghost-%COMP%]{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}.button__facebook--twitter_btn[_nghost-%COMP%]{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}.button__facebook--twitter_link[_nghost-%COMP%]{border:none;color:var(--grey-1310);background-color:transparent}.button__facebook--microsoft_dark[_nghost-%COMP%]{background:var(--grey-1210);color:var(--white)}.button__facebook--microsoft_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}.button__facebook--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}.button__facebook--disabled[_nghost-%COMP%]:hover{background-color:transparent}.button__facebook--disabled.addBorder[_nghost-%COMP%]{border:1px solid var(--grey-200)}.button__google[_nghost-%COMP%]{display:inline-block;align-items:center;background-color:var(--primary-1100);color:var(--white);border-radius:4px}.button__google[_nghost-%COMP%]:hover{background-color:var(--primary-2000)}.button__google[_nghost-%COMP%]:active{background-color:var(--primary-2100);border:none}.button__google[disabled][_nghost-%COMP%]:hover{background-color:var(--white)}.button__google[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__google[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.button__google--l[_nghost-%COMP%]{height:56px}.button__google--m[_nghost-%COMP%]{height:48px}.button__google--s[_nghost-%COMP%]{height:40px}.button__google--xs[_nghost-%COMP%]{height:36px}.button__google--fb_filled[_nghost-%COMP%]{background:var(--primary-1300);color:var(--white)}.button__google--fb_outlined[_nghost-%COMP%]{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}.button__google--google_light[_nghost-%COMP%]{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__google--google_dark[_nghost-%COMP%]{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__google--slack_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}.button__google--slack_dark[_nghost-%COMP%]{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}.button__google--apple_white[_nghost-%COMP%]{background:var(--white);color:var(--black);border:1px solid var(--black)}.button__google--apple_black[_nghost-%COMP%]{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}.button__google--twitter_btn[_nghost-%COMP%]{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}.button__google--twitter_link[_nghost-%COMP%]{border:none;color:var(--grey-1310);background-color:transparent}.button__google--microsoft_dark[_nghost-%COMP%]{background:var(--grey-1210);color:var(--white)}.button__google--microsoft_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}.button__google--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}.button__google--disabled[_nghost-%COMP%]:hover{background-color:transparent}.button__google--disabled.addBorder[_nghost-%COMP%]{border:1px solid var(--grey-200)}.button__twitter[_nghost-%COMP%]{display:inline-block;align-items:center;background-color:var(--primary-1900);color:var(--white);border-radius:4px}.button__twitter[_nghost-%COMP%]:hover{background-color:var(--primary-1700)}.button__twitter[_nghost-%COMP%]:active{background-color:var(--primary-1800);border:none}.button__twitter[disabled][_nghost-%COMP%]:hover{background-color:var(--white)}.button__twitter[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__twitter[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.button__twitter--l[_nghost-%COMP%]{height:56px}.button__twitter--m[_nghost-%COMP%]{height:48px}.button__twitter--s[_nghost-%COMP%]{height:40px}.button__twitter--xs[_nghost-%COMP%]{height:36px}.button__twitter--fb_filled[_nghost-%COMP%]{background:var(--primary-1300);color:var(--white)}.button__twitter--fb_outlined[_nghost-%COMP%]{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}.button__twitter--google_light[_nghost-%COMP%]{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__twitter--google_dark[_nghost-%COMP%]{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__twitter--slack_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}.button__twitter--slack_dark[_nghost-%COMP%]{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}.button__twitter--apple_white[_nghost-%COMP%]{background:var(--white);color:var(--black);border:1px solid var(--black)}.button__twitter--apple_black[_nghost-%COMP%]{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}.button__twitter--twitter_btn[_nghost-%COMP%]{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}.button__twitter--twitter_link[_nghost-%COMP%]{border:none;color:var(--grey-1310);background-color:transparent}.button__twitter--microsoft_dark[_nghost-%COMP%]{background:var(--grey-1210);color:var(--white)}.button__twitter--microsoft_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}.button__twitter--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}.button__twitter--disabled[_nghost-%COMP%]:hover{background-color:transparent}.button__twitter--disabled.addBorder[_nghost-%COMP%]{border:1px solid var(--grey-200)}.button__apple[_nghost-%COMP%]{display:inline-block;align-items:center;background-color:var(--grey-1700);color:var(--white);border-radius:4px}.button__apple[_nghost-%COMP%]:hover{background-color:var(--grey-1500)}.button__apple[_nghost-%COMP%]:active{background-color:var(--grey-1600);border:none}.button__apple[disabled][_nghost-%COMP%]:hover{background-color:var(--white)}.button__apple[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__apple[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.button__apple--l[_nghost-%COMP%]{height:56px}.button__apple--m[_nghost-%COMP%]{height:48px}.button__apple--s[_nghost-%COMP%]{height:40px}.button__apple--xs[_nghost-%COMP%]{height:36px}.button__apple--fb_filled[_nghost-%COMP%]{background:var(--primary-1300);color:var(--white)}.button__apple--fb_outlined[_nghost-%COMP%]{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}.button__apple--google_light[_nghost-%COMP%]{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__apple--google_dark[_nghost-%COMP%]{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__apple--slack_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}.button__apple--slack_dark[_nghost-%COMP%]{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}.button__apple--apple_white[_nghost-%COMP%]{background:var(--white);color:var(--black);border:1px solid var(--black)}.button__apple--apple_black[_nghost-%COMP%]{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}.button__apple--twitter_btn[_nghost-%COMP%]{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}.button__apple--twitter_link[_nghost-%COMP%]{border:none;color:var(--grey-1310);background-color:transparent}.button__apple--microsoft_dark[_nghost-%COMP%]{background:var(--grey-1210);color:var(--white)}.button__apple--microsoft_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}.button__apple--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}.button__apple--disabled[_nghost-%COMP%]:hover{background-color:transparent}.button__apple--disabled.addBorder[_nghost-%COMP%]{border:1px solid var(--grey-200)}.button__microsoft[_nghost-%COMP%]{display:inline-block;align-items:center;background-color:var(--primary-1600);color:var(--white);border-radius:4px}.button__microsoft[_nghost-%COMP%]:hover{background-color:var(--primary-1400)}.button__microsoft[_nghost-%COMP%]:active{background-color:var(--primary-1500);border:none}.button__microsoft[disabled][_nghost-%COMP%]:hover{background-color:var(--white)}.button__microsoft[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__microsoft[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.button__microsoft--l[_nghost-%COMP%]{height:56px}.button__microsoft--m[_nghost-%COMP%]{height:48px}.button__microsoft--s[_nghost-%COMP%]{height:40px}.button__microsoft--xs[_nghost-%COMP%]{height:36px}.button__microsoft--fb_filled[_nghost-%COMP%]{background:var(--primary-1300);color:var(--white)}.button__microsoft--fb_outlined[_nghost-%COMP%]{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}.button__microsoft--google_light[_nghost-%COMP%]{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__microsoft--google_dark[_nghost-%COMP%]{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__microsoft--slack_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}.button__microsoft--slack_dark[_nghost-%COMP%]{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}.button__microsoft--apple_white[_nghost-%COMP%]{background:var(--white);color:var(--black);border:1px solid var(--black)}.button__microsoft--apple_black[_nghost-%COMP%]{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}.button__microsoft--twitter_btn[_nghost-%COMP%]{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}.button__microsoft--twitter_link[_nghost-%COMP%]{border:none;color:var(--grey-1310);background-color:transparent}.button__microsoft--microsoft_dark[_nghost-%COMP%]{background:var(--grey-1210);color:var(--white)}.button__microsoft--microsoft_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}.button__microsoft--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}.button__microsoft--disabled[_nghost-%COMP%]:hover{background-color:transparent}.button__microsoft--disabled.addBorder[_nghost-%COMP%]{border:1px solid var(--grey-200)}.button__slack[_nghost-%COMP%]{display:inline-block;align-items:center;background-color:var(--orange-1100);color:var(--white);border-radius:4px}.button__slack[_nghost-%COMP%]:hover{background-color:var(--red-1200)}.button__slack[_nghost-%COMP%]:active{background-color:var(--red-1100);border:none}.button__slack[disabled][_nghost-%COMP%]:hover{background-color:var(--white)}.button__slack[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__slack[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.button__slack--l[_nghost-%COMP%]{height:56px}.button__slack--m[_nghost-%COMP%]{height:48px}.button__slack--s[_nghost-%COMP%]{height:40px}.button__slack--xs[_nghost-%COMP%]{height:36px}.button__slack--fb_filled[_nghost-%COMP%]{background:var(--primary-1300);color:var(--white)}.button__slack--fb_outlined[_nghost-%COMP%]{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}.button__slack--google_light[_nghost-%COMP%]{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__slack--google_dark[_nghost-%COMP%]{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__slack--slack_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}.button__slack--slack_dark[_nghost-%COMP%]{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}.button__slack--apple_white[_nghost-%COMP%]{background:var(--white);color:var(--black);border:1px solid var(--black)}.button__slack--apple_black[_nghost-%COMP%]{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}.button__slack--twitter_btn[_nghost-%COMP%]{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}.button__slack--twitter_link[_nghost-%COMP%]{border:none;color:var(--grey-1310);background-color:transparent}.button__slack--microsoft_dark[_nghost-%COMP%]{background:var(--grey-1210);color:var(--white)}.button__slack--microsoft_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}.button__slack--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}.button__slack--disabled[_nghost-%COMP%]:hover{background-color:transparent}.button__slack--disabled.addBorder[_nghost-%COMP%]{border:1px solid var(--grey-200)}.button__body[_ngcontent-%COMP%]{all:inherit;margin:unset;padding:unset;position:unset;display:grid;grid-template-columns:.1fr auto;border:none;outline:none;font-family:var(--bd-fnt-fm);font-weight:var(--hd-fnt-wt-lg);font-size:var(--bd-fnt-sz-3);line-height:var(--bd-fnt-ln-hgt-3)}.button__body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:100%;text-align:center;justify-content:center;align-items:center;display:inline-flex}.button__body--img[_ngcontent-%COMP%]{padding:0 14px}.button__body--title[_ngcontent-%COMP%]{padding:0 14px 0 0}.button__body[_ngcontent-%COMP%]   .addShadow[_ngcontent-%COMP%]{border:1px solid var(--primary-1100)}.button__body[_ngcontent-%COMP%]   .google_dark-content[_ngcontent-%COMP%]{color:var(--white);background-color:var(--primary-1100)}.button__body[_ngcontent-%COMP%]   .google_dark-content--disabled[_ngcontent-%COMP%]{background-color:var(--white)}.button__overlay-container[_ngcontent-%COMP%]{position:relative;height:100%;transform:translateY(-100%);display:flex;justify-content:center;align-items:center}.button__overlay[_ngcontent-%COMP%]{background-color:var(--black);opacity:.1;aspect-ratio:1;transform:scale(1);border-radius:50%}.button__facebook[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__facebook   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--white);-webkit-user-select:none;user-select:none}"],
    data: {
      animation: [trigger("rippleAnimation", [state("true", style({
        opacity: 0
      })), state("false", style({
        opacity: 0
      })), transition("true <=> false", animate("300ms", keyframes([style({
        transform: "scale(0)"
      }), style({
        transform: "scale(1)",
        opacity: "0.1"
      }), style({
        transform: "scale(1.6)",
        opacity: "0"
      })])))])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SocialButtonComponent, [{
    type: Component,
    args: [{
      selector: "ada-social-button",
      standalone: true,
      imports: [CommonModule],
      animations: [trigger("rippleAnimation", [state("true", style({
        opacity: 0
      })), state("false", style({
        opacity: 0
      })), transition("true <=> false", animate("300ms", keyframes([style({
        transform: "scale(0)"
      }), style({
        transform: "scale(1)",
        opacity: "0.1"
      }), style({
        transform: "scale(1.6)",
        opacity: "0"
      })])))])],
      template: `<button class="button__body" [disabled]="isDisabled" (focus)="isFocused = true" (blur)="isFocused = false"
  [ngClass]="{addBorder:isDisabled,addShadow:subType==='google_dark'}">
  <div class="button__body--img"><img [src]="icon" alt="company logo" /></div>
  <div class="button__body--title"
    [ngClass]="{'google_dark-content':subType==='google_dark' && !isDisabled ,'google_dark-content--disabled':subType==='google_dark' && isDisabled}">
    <ng-content select="[title]"></ng-content>
  </div>
  <ng-content select="[title]"></ng-content>
</button>
<div class="button__overlay-container">
  <div class="button__overlay" [@rippleAnimation]="_ripple"></div>
</div>`,
      styles: [":host.button__facebook{display:inline-block;align-items:center;background-color:var(--primary-1300);color:var(--white);border-radius:4px}:host.button__facebook:hover{background-color:var(--primary-2200)}:host.button__facebook:active{background-color:var(--primary-2300);border:none}:host.button__facebook[disabled]:hover{background-color:var(--white)}:host.button__facebook :focus-visible{outline:2px dashed var(--primary-800)}:host.button__facebook :focus:not(:focus-visible){outline:none}:host.button__facebook--l{height:56px}:host.button__facebook--m{height:48px}:host.button__facebook--s{height:40px}:host.button__facebook--xs{height:36px}:host.button__facebook--fb_filled{background:var(--primary-1300);color:var(--white)}:host.button__facebook--fb_outlined{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}:host.button__facebook--google_light{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__facebook--google_dark{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__facebook--slack_light{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__facebook--slack_dark{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__facebook--apple_white{background:var(--white);color:var(--black);border:1px solid var(--black)}:host.button__facebook--apple_black{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}:host.button__facebook--twitter_btn{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}:host.button__facebook--twitter_link{border:none;color:var(--grey-1310);background-color:transparent}:host.button__facebook--microsoft_dark{background:var(--grey-1210);color:var(--white)}:host.button__facebook--microsoft_light{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}:host.button__facebook--disabled{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}:host.button__facebook--disabled:hover{background-color:transparent}:host.button__facebook--disabled.addBorder{border:1px solid var(--grey-200)}:host.button__google{display:inline-block;align-items:center;background-color:var(--primary-1100);color:var(--white);border-radius:4px}:host.button__google:hover{background-color:var(--primary-2000)}:host.button__google:active{background-color:var(--primary-2100);border:none}:host.button__google[disabled]:hover{background-color:var(--white)}:host.button__google :focus-visible{outline:2px dashed var(--primary-800)}:host.button__google :focus:not(:focus-visible){outline:none}:host.button__google--l{height:56px}:host.button__google--m{height:48px}:host.button__google--s{height:40px}:host.button__google--xs{height:36px}:host.button__google--fb_filled{background:var(--primary-1300);color:var(--white)}:host.button__google--fb_outlined{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}:host.button__google--google_light{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__google--google_dark{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__google--slack_light{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__google--slack_dark{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__google--apple_white{background:var(--white);color:var(--black);border:1px solid var(--black)}:host.button__google--apple_black{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}:host.button__google--twitter_btn{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}:host.button__google--twitter_link{border:none;color:var(--grey-1310);background-color:transparent}:host.button__google--microsoft_dark{background:var(--grey-1210);color:var(--white)}:host.button__google--microsoft_light{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}:host.button__google--disabled{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}:host.button__google--disabled:hover{background-color:transparent}:host.button__google--disabled.addBorder{border:1px solid var(--grey-200)}:host.button__twitter{display:inline-block;align-items:center;background-color:var(--primary-1900);color:var(--white);border-radius:4px}:host.button__twitter:hover{background-color:var(--primary-1700)}:host.button__twitter:active{background-color:var(--primary-1800);border:none}:host.button__twitter[disabled]:hover{background-color:var(--white)}:host.button__twitter :focus-visible{outline:2px dashed var(--primary-800)}:host.button__twitter :focus:not(:focus-visible){outline:none}:host.button__twitter--l{height:56px}:host.button__twitter--m{height:48px}:host.button__twitter--s{height:40px}:host.button__twitter--xs{height:36px}:host.button__twitter--fb_filled{background:var(--primary-1300);color:var(--white)}:host.button__twitter--fb_outlined{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}:host.button__twitter--google_light{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__twitter--google_dark{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__twitter--slack_light{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__twitter--slack_dark{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__twitter--apple_white{background:var(--white);color:var(--black);border:1px solid var(--black)}:host.button__twitter--apple_black{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}:host.button__twitter--twitter_btn{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}:host.button__twitter--twitter_link{border:none;color:var(--grey-1310);background-color:transparent}:host.button__twitter--microsoft_dark{background:var(--grey-1210);color:var(--white)}:host.button__twitter--microsoft_light{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}:host.button__twitter--disabled{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}:host.button__twitter--disabled:hover{background-color:transparent}:host.button__twitter--disabled.addBorder{border:1px solid var(--grey-200)}:host.button__apple{display:inline-block;align-items:center;background-color:var(--grey-1700);color:var(--white);border-radius:4px}:host.button__apple:hover{background-color:var(--grey-1500)}:host.button__apple:active{background-color:var(--grey-1600);border:none}:host.button__apple[disabled]:hover{background-color:var(--white)}:host.button__apple :focus-visible{outline:2px dashed var(--primary-800)}:host.button__apple :focus:not(:focus-visible){outline:none}:host.button__apple--l{height:56px}:host.button__apple--m{height:48px}:host.button__apple--s{height:40px}:host.button__apple--xs{height:36px}:host.button__apple--fb_filled{background:var(--primary-1300);color:var(--white)}:host.button__apple--fb_outlined{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}:host.button__apple--google_light{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__apple--google_dark{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__apple--slack_light{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__apple--slack_dark{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__apple--apple_white{background:var(--white);color:var(--black);border:1px solid var(--black)}:host.button__apple--apple_black{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}:host.button__apple--twitter_btn{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}:host.button__apple--twitter_link{border:none;color:var(--grey-1310);background-color:transparent}:host.button__apple--microsoft_dark{background:var(--grey-1210);color:var(--white)}:host.button__apple--microsoft_light{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}:host.button__apple--disabled{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}:host.button__apple--disabled:hover{background-color:transparent}:host.button__apple--disabled.addBorder{border:1px solid var(--grey-200)}:host.button__microsoft{display:inline-block;align-items:center;background-color:var(--primary-1600);color:var(--white);border-radius:4px}:host.button__microsoft:hover{background-color:var(--primary-1400)}:host.button__microsoft:active{background-color:var(--primary-1500);border:none}:host.button__microsoft[disabled]:hover{background-color:var(--white)}:host.button__microsoft :focus-visible{outline:2px dashed var(--primary-800)}:host.button__microsoft :focus:not(:focus-visible){outline:none}:host.button__microsoft--l{height:56px}:host.button__microsoft--m{height:48px}:host.button__microsoft--s{height:40px}:host.button__microsoft--xs{height:36px}:host.button__microsoft--fb_filled{background:var(--primary-1300);color:var(--white)}:host.button__microsoft--fb_outlined{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}:host.button__microsoft--google_light{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__microsoft--google_dark{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__microsoft--slack_light{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__microsoft--slack_dark{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__microsoft--apple_white{background:var(--white);color:var(--black);border:1px solid var(--black)}:host.button__microsoft--apple_black{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}:host.button__microsoft--twitter_btn{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}:host.button__microsoft--twitter_link{border:none;color:var(--grey-1310);background-color:transparent}:host.button__microsoft--microsoft_dark{background:var(--grey-1210);color:var(--white)}:host.button__microsoft--microsoft_light{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}:host.button__microsoft--disabled{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}:host.button__microsoft--disabled:hover{background-color:transparent}:host.button__microsoft--disabled.addBorder{border:1px solid var(--grey-200)}:host.button__slack{display:inline-block;align-items:center;background-color:var(--orange-1100);color:var(--white);border-radius:4px}:host.button__slack:hover{background-color:var(--red-1200)}:host.button__slack:active{background-color:var(--red-1100);border:none}:host.button__slack[disabled]:hover{background-color:var(--white)}:host.button__slack :focus-visible{outline:2px dashed var(--primary-800)}:host.button__slack :focus:not(:focus-visible){outline:none}:host.button__slack--l{height:56px}:host.button__slack--m{height:48px}:host.button__slack--s{height:40px}:host.button__slack--xs{height:36px}:host.button__slack--fb_filled{background:var(--primary-1300);color:var(--white)}:host.button__slack--fb_outlined{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}:host.button__slack--google_light{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__slack--google_dark{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__slack--slack_light{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__slack--slack_dark{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__slack--apple_white{background:var(--white);color:var(--black);border:1px solid var(--black)}:host.button__slack--apple_black{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}:host.button__slack--twitter_btn{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}:host.button__slack--twitter_link{border:none;color:var(--grey-1310);background-color:transparent}:host.button__slack--microsoft_dark{background:var(--grey-1210);color:var(--white)}:host.button__slack--microsoft_light{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}:host.button__slack--disabled{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}:host.button__slack--disabled:hover{background-color:transparent}:host.button__slack--disabled.addBorder{border:1px solid var(--grey-200)}.button__body{all:inherit;margin:unset;padding:unset;position:unset;display:grid;grid-template-columns:.1fr auto;border:none;outline:none;font-family:var(--bd-fnt-fm);font-weight:var(--hd-fnt-wt-lg);font-size:var(--bd-fnt-sz-3);line-height:var(--bd-fnt-ln-hgt-3)}.button__body div{height:100%;text-align:center;justify-content:center;align-items:center;display:inline-flex}.button__body--img{padding:0 14px}.button__body--title{padding:0 14px 0 0}.button__body .addShadow{border:1px solid var(--primary-1100)}.button__body .google_dark-content{color:var(--white);background-color:var(--primary-1100)}.button__body .google_dark-content--disabled{background-color:var(--white)}.button__overlay-container{position:relative;height:100%;transform:translateY(-100%);display:flex;justify-content:center;align-items:center}.button__overlay{background-color:var(--black);opacity:.1;aspect-ratio:1;transform:scale(1);border-radius:50%}:host-context(.button__facebook) button:disabled{background-color:var(--white);-webkit-user-select:none;user-select:none}\n"]
    }]
  }], () => [], {
    type: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    subType: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    buttonClicked: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var SocialButtonIconComponent = class _SocialButtonIconComponent {
  type = "facebook";
  size = "l";
  isDisabled = false;
  subType = "fb_filled";
  isFocused = false;
  _hostClass;
  _ripple = false;
  icon = "";
  buttonClicked(event2) {
    if (this.isDisabled) {
      event2.stopPropagation();
      return;
    }
    this._ripple = !this._ripple;
  }
  ngOnChanges() {
    this._hostClass = `button button--${this.size}  button__${this.type}--${this.subType}`;
    this._hostClass += this.isDisabled ? ` button__${this.type}--disabled` : "";
    this.getIcon();
  }
  ngOnInit() {
    if (!this._hostClass) {
      this._hostClass = `button button--${this.size}  button__${this.type}--${this.subType}`;
    }
  }
  getIcon() {
    const typeKeys = Object.keys(iconMap);
    const subtype = this.subType || "default";
    const isDisabled = this.isDisabled || false;
    for (const key of typeKeys) {
      if (this.type === key) {
        this.icon = iconMap[key][subtype] || iconMap[key]["default"];
        if (isDisabled) {
          this.icon = iconMap[key]["disabled"] || this.icon;
        }
        break;
      }
    }
  }
  static ɵfac = function SocialButtonIconComponent_Factory(t) {
    return new (t || _SocialButtonIconComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SocialButtonIconComponent,
    selectors: [["ada-button-icons"]],
    hostVars: 2,
    hostBindings: function SocialButtonIconComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function SocialButtonIconComponent_click_HostBindingHandler($event) {
          return ctx.icon($event);
        });
      }
      if (rf & 2) {
        ɵɵclassMap(ctx._hostClass);
      }
    },
    inputs: {
      type: "type",
      size: "size",
      isDisabled: "isDisabled",
      subType: "subType"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 4,
    vars: 3,
    consts: [[1, "button__body", 3, "disabled", "focus", "blur"], ["alt", "company logo", 3, "src"], [1, "button__overlay-container"], [1, "button__overlay"]],
    template: function SocialButtonIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("focus", function SocialButtonIconComponent_Template_button_focus_0_listener() {
          return ctx.isFocused = true;
        })("blur", function SocialButtonIconComponent_Template_button_blur_0_listener() {
          return ctx.isFocused = false;
        });
        ɵɵelement(1, "img", 1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 2);
        ɵɵelement(3, "div", 3);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("disabled", ctx.isDisabled);
        ɵɵadvance(1);
        ɵɵproperty("src", ctx.icon, ɵɵsanitizeUrl);
        ɵɵadvance(2);
        ɵɵproperty("@rippleAnimation", ctx._ripple);
      }
    },
    dependencies: [CommonModule],
    styles: ["[_nghost-%COMP%]{display:inline-block;align-items:center;border-radius:4px;letter-spacing:.005em;text-align:center;cursor:pointer;-webkit-user-select:none;user-select:none;line-height:var(--hd-fnt-ln-hgt-6)}.button[_nghost-%COMP%]{font-size:var(--btn-fnt-sz-1)}.button--l[_nghost-%COMP%]{height:56px}.button--m[_nghost-%COMP%]{height:48px}.button--s[_nghost-%COMP%]{height:40px}.button--xs[_nghost-%COMP%]{height:36px}.button__outlined[_nghost-%COMP%]{border:1px solid var(--primary-base);color:var(--primary-base);background-color:unset}.button__outlined--disabled[_nghost-%COMP%]{cursor:not-allowed;border-color:var(--grey-400);color:var(--grey-450)}.button__outlined[_nghost-%COMP%]:hover{background-color:var(--blue-grey-secondary)}.button__outlined[disabled][_nghost-%COMP%]:hover{background-color:unset}.button__outlined[_nghost-%COMP%]:active{background-color:var(--primary-200)}.button__primary[_nghost-%COMP%]{background-color:var(--primary-base);color:var(--white)}.button__primary[_nghost-%COMP%]:hover{background-color:var(--primary-600)}.button__primary[_nghost-%COMP%]:active{background-color:var(--primary-700)}.button__primary[disabled][_nghost-%COMP%]:hover{background-color:var(--grey-200)}.button__primary--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--grey-200)}.button__primary[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);z-index:1}.button__primary[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__secondary[_nghost-%COMP%]{background-color:var(--primary-100);color:var(--primary-base)}.button__secondary[_nghost-%COMP%]:hover{background-color:var(--blue-grey-secondary)}.button__secondary[_nghost-%COMP%]:active{background-color:var(--primary-200)}.button__secondary[disabled][_nghost-%COMP%]:hover{background-color:var(--grey-200)}.button__secondary--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--grey-200)}.button__secondary[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);z-index:1}.button__secondary[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__tertiary[_nghost-%COMP%]{background-color:unset;color:var(--primary-base)}.button__tertiary[_nghost-%COMP%]:hover{background-color:var(--blue-grey-secondary)}.button__tertiary[_nghost-%COMP%]:active{background-color:var(--primary-200)}.button__tertiary[disabled][_nghost-%COMP%]:hover{background-color:unset}.button__tertiary--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:unset}.button__tertiary[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);z-index:1}.button__tertiary[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__destructive[_nghost-%COMP%]{background-color:var(--red-base);color:var(--white)}.button__destructive[_nghost-%COMP%]:hover{background-color:var(--red-600)}.button__destructive[_nghost-%COMP%]:active{background-color:var(--red-700)}.button__destructive[disabled][_nghost-%COMP%]:hover{background-color:var(--grey-200)}.button__destructive--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--grey-200)}.button__destructive[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800);z-index:1}.button__destructive[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__destructive-outlined[_nghost-%COMP%]{border:1px solid var(--red-base);color:var(--red-base);background-color:unset}.button__destructive-outlined--disabled[_nghost-%COMP%]{cursor:not-allowed;border-color:var(--grey-400);color:var(--grey-450)}.button__destructive-outlined[_nghost-%COMP%]:hover{background-color:var(--red-100)}.button__destructive-outlined[disabled][_nghost-%COMP%]:hover{background-color:unset}.button__destructive-outlined[_nghost-%COMP%]:active{background-color:var(--red-200)}.button__destructive-outlined[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__destructive-outlined[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__destructive-label-only[_nghost-%COMP%]{color:var(--red-base);font-size:14px;line-height:145%;letter-spacing:.005em;text-transform:uppercase}.button__destructive-label-only[_nghost-%COMP%]:hover{color:var(--red-600)}.button__destructive-label-only[_nghost-%COMP%]:active{color:var(--red-700)}.button__destructive-label-only--disabled[_nghost-%COMP%]{cursor:not-allowed;color:var(--grey-700)}.button__destructive-label-only[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__destructive-label-only[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__primary-label-only[_nghost-%COMP%]{color:var(--primary-base);font-size:14px;line-height:145%;letter-spacing:.005em;text-transform:uppercase}.button__primary-label-only[_nghost-%COMP%]:hover{color:var(--primary-600)}.button__primary-label-only[_nghost-%COMP%]:active{color:var(--primary-700)}.button__primary-label-only--disabled[_nghost-%COMP%]{cursor:not-allowed;color:var(--grey-700)}.button__primary-label-only[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__primary-label-only[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}[_nghost-%COMP%]   .text-content[_ngcontent-%COMP%]{margin:0 8px}.button__body[_ngcontent-%COMP%]{all:inherit;margin:unset;padding:unset;position:unset;display:flex;border:none;outline:none;font-family:var(--btn-fnt-fm);font-weight:var(--btn-fnt-wt-lg)}.button__overlay-container[_ngcontent-%COMP%]{position:relative;height:100%;transform:translateY(-100%);display:flex;justify-content:center;align-items:center}.button__overlay[_ngcontent-%COMP%]{background-color:var(--black);opacity:.1;aspect-ratio:1;transform:scale(1);border-radius:50%}.button--m[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--m   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--s[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--s   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--xs[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--xs   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]{padding:0 12px}.button__primary-label-only[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button__primary-label-only   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]{padding:0}.button__primary-label-only[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%], .button__primary-label-only   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{margin:0}.button__primary[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__primary   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__secondary[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__secondary   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__destructive[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__destructive   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--grey-200);color:var(--grey-700);-webkit-user-select:none;user-select:none}.button__tertiary[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__tertiary   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__destructive-label-only[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__destructive-label-only   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__primary-label-only[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, .button__primary-label-only   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled{color:var(--grey-700);-webkit-user-select:none;user-select:none}.button__outlined[_nghost-%COMP%]{border:1px solid var(--blue-grey-900);color:var(--primary-15)}.button__outlined--disabled[_nghost-%COMP%]{cursor:not-allowed;border-color:var(--grey-1000);color:var(--grey-450)}.button__outlined[_nghost-%COMP%]:hover{background-color:var(--secondary-normal)}.button__outlined[_nghost-%COMP%]:active{background-color:var(--primary-10)}.button__outlined[_nghost-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__outlined[_nghost-%COMP%]:focus:not(:focus-visible){outline:none}.button__facebook[_nghost-%COMP%]{display:inline-block;align-items:center;background-color:var(--primary-1300);color:var(--white);border-radius:4px}.button__facebook[_nghost-%COMP%]:hover{background-color:var(--primary-2200)}.button__facebook[_nghost-%COMP%]:active{background-color:var(--primary-2300);border:none}.button__facebook[disabled][_nghost-%COMP%]:hover{background-color:var(--white)}.button__facebook[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__facebook[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.button__facebook--l[_nghost-%COMP%]{height:56px}.button__facebook--m[_nghost-%COMP%]{height:48px}.button__facebook--s[_nghost-%COMP%]{height:40px}.button__facebook--xs[_nghost-%COMP%]{height:36px}.button__facebook--fb_filled[_nghost-%COMP%]{background:var(--primary-1300);color:var(--white)}.button__facebook--fb_outlined[_nghost-%COMP%]{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}.button__facebook--google_light[_nghost-%COMP%]{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__facebook--google_dark[_nghost-%COMP%]{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__facebook--slack_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}.button__facebook--slack_dark[_nghost-%COMP%]{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}.button__facebook--apple_white[_nghost-%COMP%]{background:var(--white);color:var(--black);border:1px solid var(--black)}.button__facebook--apple_black[_nghost-%COMP%]{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}.button__facebook--twitter_btn[_nghost-%COMP%]{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}.button__facebook--twitter_link[_nghost-%COMP%]{border:none;color:var(--grey-1310);background-color:transparent}.button__facebook--microsoft_dark[_nghost-%COMP%]{background:var(--grey-1210);color:var(--white)}.button__facebook--microsoft_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}.button__facebook--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}.button__facebook--disabled[_nghost-%COMP%]:hover{background-color:transparent}.button__facebook--disabled.addBorder[_nghost-%COMP%]{border:1px solid var(--grey-200)}.button__google[_nghost-%COMP%]{display:inline-block;align-items:center;background-color:var(--primary-1100);color:var(--white);border-radius:4px}.button__google[_nghost-%COMP%]:hover{background-color:var(--primary-2000)}.button__google[_nghost-%COMP%]:active{background-color:var(--primary-2100);border:none}.button__google[disabled][_nghost-%COMP%]:hover{background-color:var(--white)}.button__google[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__google[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.button__google--l[_nghost-%COMP%]{height:56px}.button__google--m[_nghost-%COMP%]{height:48px}.button__google--s[_nghost-%COMP%]{height:40px}.button__google--xs[_nghost-%COMP%]{height:36px}.button__google--fb_filled[_nghost-%COMP%]{background:var(--primary-1300);color:var(--white)}.button__google--fb_outlined[_nghost-%COMP%]{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}.button__google--google_light[_nghost-%COMP%]{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__google--google_dark[_nghost-%COMP%]{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__google--slack_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}.button__google--slack_dark[_nghost-%COMP%]{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}.button__google--apple_white[_nghost-%COMP%]{background:var(--white);color:var(--black);border:1px solid var(--black)}.button__google--apple_black[_nghost-%COMP%]{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}.button__google--twitter_btn[_nghost-%COMP%]{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}.button__google--twitter_link[_nghost-%COMP%]{border:none;color:var(--grey-1310);background-color:transparent}.button__google--microsoft_dark[_nghost-%COMP%]{background:var(--grey-1210);color:var(--white)}.button__google--microsoft_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}.button__google--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}.button__google--disabled[_nghost-%COMP%]:hover{background-color:transparent}.button__google--disabled.addBorder[_nghost-%COMP%]{border:1px solid var(--grey-200)}.button__twitter[_nghost-%COMP%]{display:inline-block;align-items:center;background-color:var(--primary-1900);color:var(--white);border-radius:4px}.button__twitter[_nghost-%COMP%]:hover{background-color:var(--primary-1700)}.button__twitter[_nghost-%COMP%]:active{background-color:var(--primary-1800);border:none}.button__twitter[disabled][_nghost-%COMP%]:hover{background-color:var(--white)}.button__twitter[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__twitter[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.button__twitter--l[_nghost-%COMP%]{height:56px}.button__twitter--m[_nghost-%COMP%]{height:48px}.button__twitter--s[_nghost-%COMP%]{height:40px}.button__twitter--xs[_nghost-%COMP%]{height:36px}.button__twitter--fb_filled[_nghost-%COMP%]{background:var(--primary-1300);color:var(--white)}.button__twitter--fb_outlined[_nghost-%COMP%]{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}.button__twitter--google_light[_nghost-%COMP%]{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__twitter--google_dark[_nghost-%COMP%]{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__twitter--slack_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}.button__twitter--slack_dark[_nghost-%COMP%]{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}.button__twitter--apple_white[_nghost-%COMP%]{background:var(--white);color:var(--black);border:1px solid var(--black)}.button__twitter--apple_black[_nghost-%COMP%]{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}.button__twitter--twitter_btn[_nghost-%COMP%]{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}.button__twitter--twitter_link[_nghost-%COMP%]{border:none;color:var(--grey-1310);background-color:transparent}.button__twitter--microsoft_dark[_nghost-%COMP%]{background:var(--grey-1210);color:var(--white)}.button__twitter--microsoft_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}.button__twitter--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}.button__twitter--disabled[_nghost-%COMP%]:hover{background-color:transparent}.button__twitter--disabled.addBorder[_nghost-%COMP%]{border:1px solid var(--grey-200)}.button__apple[_nghost-%COMP%]{display:inline-block;align-items:center;background-color:var(--grey-1700);color:var(--white);border-radius:4px}.button__apple[_nghost-%COMP%]:hover{background-color:var(--grey-1500)}.button__apple[_nghost-%COMP%]:active{background-color:var(--grey-1600);border:none}.button__apple[disabled][_nghost-%COMP%]:hover{background-color:var(--white)}.button__apple[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__apple[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.button__apple--l[_nghost-%COMP%]{height:56px}.button__apple--m[_nghost-%COMP%]{height:48px}.button__apple--s[_nghost-%COMP%]{height:40px}.button__apple--xs[_nghost-%COMP%]{height:36px}.button__apple--fb_filled[_nghost-%COMP%]{background:var(--primary-1300);color:var(--white)}.button__apple--fb_outlined[_nghost-%COMP%]{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}.button__apple--google_light[_nghost-%COMP%]{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__apple--google_dark[_nghost-%COMP%]{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__apple--slack_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}.button__apple--slack_dark[_nghost-%COMP%]{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}.button__apple--apple_white[_nghost-%COMP%]{background:var(--white);color:var(--black);border:1px solid var(--black)}.button__apple--apple_black[_nghost-%COMP%]{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}.button__apple--twitter_btn[_nghost-%COMP%]{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}.button__apple--twitter_link[_nghost-%COMP%]{border:none;color:var(--grey-1310);background-color:transparent}.button__apple--microsoft_dark[_nghost-%COMP%]{background:var(--grey-1210);color:var(--white)}.button__apple--microsoft_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}.button__apple--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}.button__apple--disabled[_nghost-%COMP%]:hover{background-color:transparent}.button__apple--disabled.addBorder[_nghost-%COMP%]{border:1px solid var(--grey-200)}.button__microsoft[_nghost-%COMP%]{display:inline-block;align-items:center;background-color:var(--primary-1600);color:var(--white);border-radius:4px}.button__microsoft[_nghost-%COMP%]:hover{background-color:var(--primary-1400)}.button__microsoft[_nghost-%COMP%]:active{background-color:var(--primary-1500);border:none}.button__microsoft[disabled][_nghost-%COMP%]:hover{background-color:var(--white)}.button__microsoft[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__microsoft[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.button__microsoft--l[_nghost-%COMP%]{height:56px}.button__microsoft--m[_nghost-%COMP%]{height:48px}.button__microsoft--s[_nghost-%COMP%]{height:40px}.button__microsoft--xs[_nghost-%COMP%]{height:36px}.button__microsoft--fb_filled[_nghost-%COMP%]{background:var(--primary-1300);color:var(--white)}.button__microsoft--fb_outlined[_nghost-%COMP%]{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}.button__microsoft--google_light[_nghost-%COMP%]{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__microsoft--google_dark[_nghost-%COMP%]{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__microsoft--slack_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}.button__microsoft--slack_dark[_nghost-%COMP%]{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}.button__microsoft--apple_white[_nghost-%COMP%]{background:var(--white);color:var(--black);border:1px solid var(--black)}.button__microsoft--apple_black[_nghost-%COMP%]{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}.button__microsoft--twitter_btn[_nghost-%COMP%]{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}.button__microsoft--twitter_link[_nghost-%COMP%]{border:none;color:var(--grey-1310);background-color:transparent}.button__microsoft--microsoft_dark[_nghost-%COMP%]{background:var(--grey-1210);color:var(--white)}.button__microsoft--microsoft_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}.button__microsoft--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}.button__microsoft--disabled[_nghost-%COMP%]:hover{background-color:transparent}.button__microsoft--disabled.addBorder[_nghost-%COMP%]{border:1px solid var(--grey-200)}.button__slack[_nghost-%COMP%]{display:inline-block;align-items:center;background-color:var(--orange-1100);color:var(--white);border-radius:4px}.button__slack[_nghost-%COMP%]:hover{background-color:var(--red-1200)}.button__slack[_nghost-%COMP%]:active{background-color:var(--red-1100);border:none}.button__slack[disabled][_nghost-%COMP%]:hover{background-color:var(--white)}.button__slack[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus-visible{outline:2px dashed var(--primary-800)}.button__slack[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.button__slack--l[_nghost-%COMP%]{height:56px}.button__slack--m[_nghost-%COMP%]{height:48px}.button__slack--s[_nghost-%COMP%]{height:40px}.button__slack--xs[_nghost-%COMP%]{height:36px}.button__slack--fb_filled[_nghost-%COMP%]{background:var(--primary-1300);color:var(--white)}.button__slack--fb_outlined[_nghost-%COMP%]{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}.button__slack--google_light[_nghost-%COMP%]{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__slack--google_dark[_nghost-%COMP%]{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}.button__slack--slack_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}.button__slack--slack_dark[_nghost-%COMP%]{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}.button__slack--apple_white[_nghost-%COMP%]{background:var(--white);color:var(--black);border:1px solid var(--black)}.button__slack--apple_black[_nghost-%COMP%]{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}.button__slack--twitter_btn[_nghost-%COMP%]{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}.button__slack--twitter_link[_nghost-%COMP%]{border:none;color:var(--grey-1310);background-color:transparent}.button__slack--microsoft_dark[_nghost-%COMP%]{background:var(--grey-1210);color:var(--white)}.button__slack--microsoft_light[_nghost-%COMP%]{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}.button__slack--disabled[_nghost-%COMP%]{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}.button__slack--disabled[_nghost-%COMP%]:hover{background-color:transparent}.button__slack--disabled.addBorder[_nghost-%COMP%]{border:1px solid var(--grey-200)}.button--l[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--l   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]{padding:0 16px}.button--s[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--s   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]{padding:0 8px}.button--xs[_nghost-%COMP%]   .button__body[_ngcontent-%COMP%], .button--xs   [_nghost-%COMP%]   .button__body[_ngcontent-%COMP%]{padding:0 6px}"],
    data: {
      animation: [trigger("rippleAnimation", [state("true", style({
        opacity: 0
      })), state("false", style({
        opacity: 0
      })), transition("true <=> false", animate("300ms", keyframes([style({
        transform: "scale(0)"
      }), style({
        transform: "scale(1)",
        opacity: "0.1"
      }), style({
        transform: "scale(1.6)",
        opacity: "0"
      })])))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SocialButtonIconComponent, [{
    type: Component,
    args: [{
      selector: "ada-button-icons",
      standalone: true,
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("rippleAnimation", [state("true", style({
        opacity: 0
      })), state("false", style({
        opacity: 0
      })), transition("true <=> false", animate("300ms", keyframes([style({
        transform: "scale(0)"
      }), style({
        transform: "scale(1)",
        opacity: "0.1"
      }), style({
        transform: "scale(1.6)",
        opacity: "0"
      })])))])],
      template: '<button class="button__body" [disabled]="isDisabled" (focus)="isFocused = true" (blur)="isFocused = false">\n  <img [src]="icon" alt="company logo" />\n</button>\n<div class="button__overlay-container">\n  <div class="button__overlay" [@rippleAnimation]="_ripple"></div>\n</div>',
      styles: [":host{display:inline-block;align-items:center;border-radius:4px;letter-spacing:.005em;text-align:center;cursor:pointer;-webkit-user-select:none;user-select:none;line-height:var(--hd-fnt-ln-hgt-6)}:host.button{font-size:var(--btn-fnt-sz-1)}:host.button--l{height:56px}:host.button--m{height:48px}:host.button--s{height:40px}:host.button--xs{height:36px}:host.button__outlined{border:1px solid var(--primary-base);color:var(--primary-base);background-color:unset}:host.button__outlined--disabled{cursor:not-allowed;border-color:var(--grey-400);color:var(--grey-450)}:host.button__outlined:hover{background-color:var(--blue-grey-secondary)}:host.button__outlined[disabled]:hover{background-color:unset}:host.button__outlined:active{background-color:var(--primary-200)}:host.button__primary{background-color:var(--primary-base);color:var(--white)}:host.button__primary:hover{background-color:var(--primary-600)}:host.button__primary:active{background-color:var(--primary-700)}:host.button__primary[disabled]:hover{background-color:var(--grey-200)}:host.button__primary--disabled{cursor:not-allowed;background-color:var(--grey-200)}:host.button__primary:focus-visible{outline:2px dashed var(--primary-800);z-index:1}:host.button__primary:focus:not(:focus-visible){outline:none}:host.button__secondary{background-color:var(--primary-100);color:var(--primary-base)}:host.button__secondary:hover{background-color:var(--blue-grey-secondary)}:host.button__secondary:active{background-color:var(--primary-200)}:host.button__secondary[disabled]:hover{background-color:var(--grey-200)}:host.button__secondary--disabled{cursor:not-allowed;background-color:var(--grey-200)}:host.button__secondary:focus-visible{outline:2px dashed var(--primary-800);z-index:1}:host.button__secondary:focus:not(:focus-visible){outline:none}:host.button__tertiary{background-color:unset;color:var(--primary-base)}:host.button__tertiary:hover{background-color:var(--blue-grey-secondary)}:host.button__tertiary:active{background-color:var(--primary-200)}:host.button__tertiary[disabled]:hover{background-color:unset}:host.button__tertiary--disabled{cursor:not-allowed;background-color:unset}:host.button__tertiary:focus-visible{outline:2px dashed var(--primary-800);z-index:1}:host.button__tertiary:focus:not(:focus-visible){outline:none}:host.button__destructive{background-color:var(--red-base);color:var(--white)}:host.button__destructive:hover{background-color:var(--red-600)}:host.button__destructive:active{background-color:var(--red-700)}:host.button__destructive[disabled]:hover{background-color:var(--grey-200)}:host.button__destructive--disabled{cursor:not-allowed;background-color:var(--grey-200)}:host.button__destructive:focus-visible{outline:2px dashed var(--primary-800);z-index:1}:host.button__destructive:focus:not(:focus-visible){outline:none}:host.button__destructive-outlined{border:1px solid var(--red-base);color:var(--red-base);background-color:unset}:host.button__destructive-outlined--disabled{cursor:not-allowed;border-color:var(--grey-400);color:var(--grey-450)}:host.button__destructive-outlined:hover{background-color:var(--red-100)}:host.button__destructive-outlined[disabled]:hover{background-color:unset}:host.button__destructive-outlined:active{background-color:var(--red-200)}:host.button__destructive-outlined:focus-visible{outline:2px dashed var(--primary-800)}:host.button__destructive-outlined:focus:not(:focus-visible){outline:none}:host.button__destructive-label-only{color:var(--red-base);font-size:14px;line-height:145%;letter-spacing:.005em;text-transform:uppercase}:host.button__destructive-label-only:hover{color:var(--red-600)}:host.button__destructive-label-only:active{color:var(--red-700)}:host.button__destructive-label-only--disabled{cursor:not-allowed;color:var(--grey-700)}:host.button__destructive-label-only:focus-visible{outline:2px dashed var(--primary-800)}:host.button__destructive-label-only:focus:not(:focus-visible){outline:none}:host.button__primary-label-only{color:var(--primary-base);font-size:14px;line-height:145%;letter-spacing:.005em;text-transform:uppercase}:host.button__primary-label-only:hover{color:var(--primary-600)}:host.button__primary-label-only:active{color:var(--primary-700)}:host.button__primary-label-only--disabled{cursor:not-allowed;color:var(--grey-700)}:host.button__primary-label-only:focus-visible{outline:2px dashed var(--primary-800)}:host.button__primary-label-only:focus:not(:focus-visible){outline:none}:host .text-content{margin:0 8px}.button__body{all:inherit;margin:unset;padding:unset;position:unset;display:flex;border:none;outline:none;font-family:var(--btn-fnt-fm);font-weight:var(--btn-fnt-wt-lg)}.button__overlay-container{position:relative;height:100%;transform:translateY(-100%);display:flex;justify-content:center;align-items:center}.button__overlay{background-color:var(--black);opacity:.1;aspect-ratio:1;transform:scale(1);border-radius:50%}:host-context(.button--m,.button--s,.button--xs) .button__body{padding:0 12px}:host-context(.button__primary-label-only) .button__body{padding:0}:host-context(.button__primary-label-only) .button__body .text-content{margin:0}:host-context(.button__primary,.button__secondary,.button__destructive) button:disabled{background-color:var(--grey-200);color:var(--grey-700);-webkit-user-select:none;user-select:none}:host-context(.button__tertiary,.button__destructive-label-only,.button__primary-label-only) button:disabled{color:var(--grey-700);-webkit-user-select:none;user-select:none}:host.button__outlined{border:1px solid var(--blue-grey-900);color:var(--primary-15)}:host.button__outlined--disabled{cursor:not-allowed;border-color:var(--grey-1000);color:var(--grey-450)}:host.button__outlined:hover{background-color:var(--secondary-normal)}:host.button__outlined:active{background-color:var(--primary-10)}:host.button__outlined:focus-visible{outline:2px dashed var(--primary-800)}:host.button__outlined:focus:not(:focus-visible){outline:none}:host.button__facebook{display:inline-block;align-items:center;background-color:var(--primary-1300);color:var(--white);border-radius:4px}:host.button__facebook:hover{background-color:var(--primary-2200)}:host.button__facebook:active{background-color:var(--primary-2300);border:none}:host.button__facebook[disabled]:hover{background-color:var(--white)}:host.button__facebook :focus-visible{outline:2px dashed var(--primary-800)}:host.button__facebook :focus:not(:focus-visible){outline:none}:host.button__facebook--l{height:56px}:host.button__facebook--m{height:48px}:host.button__facebook--s{height:40px}:host.button__facebook--xs{height:36px}:host.button__facebook--fb_filled{background:var(--primary-1300);color:var(--white)}:host.button__facebook--fb_outlined{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}:host.button__facebook--google_light{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__facebook--google_dark{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__facebook--slack_light{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__facebook--slack_dark{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__facebook--apple_white{background:var(--white);color:var(--black);border:1px solid var(--black)}:host.button__facebook--apple_black{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}:host.button__facebook--twitter_btn{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}:host.button__facebook--twitter_link{border:none;color:var(--grey-1310);background-color:transparent}:host.button__facebook--microsoft_dark{background:var(--grey-1210);color:var(--white)}:host.button__facebook--microsoft_light{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}:host.button__facebook--disabled{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}:host.button__facebook--disabled:hover{background-color:transparent}:host.button__facebook--disabled.addBorder{border:1px solid var(--grey-200)}:host.button__google{display:inline-block;align-items:center;background-color:var(--primary-1100);color:var(--white);border-radius:4px}:host.button__google:hover{background-color:var(--primary-2000)}:host.button__google:active{background-color:var(--primary-2100);border:none}:host.button__google[disabled]:hover{background-color:var(--white)}:host.button__google :focus-visible{outline:2px dashed var(--primary-800)}:host.button__google :focus:not(:focus-visible){outline:none}:host.button__google--l{height:56px}:host.button__google--m{height:48px}:host.button__google--s{height:40px}:host.button__google--xs{height:36px}:host.button__google--fb_filled{background:var(--primary-1300);color:var(--white)}:host.button__google--fb_outlined{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}:host.button__google--google_light{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__google--google_dark{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__google--slack_light{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__google--slack_dark{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__google--apple_white{background:var(--white);color:var(--black);border:1px solid var(--black)}:host.button__google--apple_black{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}:host.button__google--twitter_btn{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}:host.button__google--twitter_link{border:none;color:var(--grey-1310);background-color:transparent}:host.button__google--microsoft_dark{background:var(--grey-1210);color:var(--white)}:host.button__google--microsoft_light{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}:host.button__google--disabled{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}:host.button__google--disabled:hover{background-color:transparent}:host.button__google--disabled.addBorder{border:1px solid var(--grey-200)}:host.button__twitter{display:inline-block;align-items:center;background-color:var(--primary-1900);color:var(--white);border-radius:4px}:host.button__twitter:hover{background-color:var(--primary-1700)}:host.button__twitter:active{background-color:var(--primary-1800);border:none}:host.button__twitter[disabled]:hover{background-color:var(--white)}:host.button__twitter :focus-visible{outline:2px dashed var(--primary-800)}:host.button__twitter :focus:not(:focus-visible){outline:none}:host.button__twitter--l{height:56px}:host.button__twitter--m{height:48px}:host.button__twitter--s{height:40px}:host.button__twitter--xs{height:36px}:host.button__twitter--fb_filled{background:var(--primary-1300);color:var(--white)}:host.button__twitter--fb_outlined{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}:host.button__twitter--google_light{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__twitter--google_dark{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__twitter--slack_light{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__twitter--slack_dark{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__twitter--apple_white{background:var(--white);color:var(--black);border:1px solid var(--black)}:host.button__twitter--apple_black{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}:host.button__twitter--twitter_btn{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}:host.button__twitter--twitter_link{border:none;color:var(--grey-1310);background-color:transparent}:host.button__twitter--microsoft_dark{background:var(--grey-1210);color:var(--white)}:host.button__twitter--microsoft_light{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}:host.button__twitter--disabled{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}:host.button__twitter--disabled:hover{background-color:transparent}:host.button__twitter--disabled.addBorder{border:1px solid var(--grey-200)}:host.button__apple{display:inline-block;align-items:center;background-color:var(--grey-1700);color:var(--white);border-radius:4px}:host.button__apple:hover{background-color:var(--grey-1500)}:host.button__apple:active{background-color:var(--grey-1600);border:none}:host.button__apple[disabled]:hover{background-color:var(--white)}:host.button__apple :focus-visible{outline:2px dashed var(--primary-800)}:host.button__apple :focus:not(:focus-visible){outline:none}:host.button__apple--l{height:56px}:host.button__apple--m{height:48px}:host.button__apple--s{height:40px}:host.button__apple--xs{height:36px}:host.button__apple--fb_filled{background:var(--primary-1300);color:var(--white)}:host.button__apple--fb_outlined{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}:host.button__apple--google_light{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__apple--google_dark{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__apple--slack_light{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__apple--slack_dark{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__apple--apple_white{background:var(--white);color:var(--black);border:1px solid var(--black)}:host.button__apple--apple_black{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}:host.button__apple--twitter_btn{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}:host.button__apple--twitter_link{border:none;color:var(--grey-1310);background-color:transparent}:host.button__apple--microsoft_dark{background:var(--grey-1210);color:var(--white)}:host.button__apple--microsoft_light{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}:host.button__apple--disabled{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}:host.button__apple--disabled:hover{background-color:transparent}:host.button__apple--disabled.addBorder{border:1px solid var(--grey-200)}:host.button__microsoft{display:inline-block;align-items:center;background-color:var(--primary-1600);color:var(--white);border-radius:4px}:host.button__microsoft:hover{background-color:var(--primary-1400)}:host.button__microsoft:active{background-color:var(--primary-1500);border:none}:host.button__microsoft[disabled]:hover{background-color:var(--white)}:host.button__microsoft :focus-visible{outline:2px dashed var(--primary-800)}:host.button__microsoft :focus:not(:focus-visible){outline:none}:host.button__microsoft--l{height:56px}:host.button__microsoft--m{height:48px}:host.button__microsoft--s{height:40px}:host.button__microsoft--xs{height:36px}:host.button__microsoft--fb_filled{background:var(--primary-1300);color:var(--white)}:host.button__microsoft--fb_outlined{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}:host.button__microsoft--google_light{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__microsoft--google_dark{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__microsoft--slack_light{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__microsoft--slack_dark{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__microsoft--apple_white{background:var(--white);color:var(--black);border:1px solid var(--black)}:host.button__microsoft--apple_black{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}:host.button__microsoft--twitter_btn{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}:host.button__microsoft--twitter_link{border:none;color:var(--grey-1310);background-color:transparent}:host.button__microsoft--microsoft_dark{background:var(--grey-1210);color:var(--white)}:host.button__microsoft--microsoft_light{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}:host.button__microsoft--disabled{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}:host.button__microsoft--disabled:hover{background-color:transparent}:host.button__microsoft--disabled.addBorder{border:1px solid var(--grey-200)}:host.button__slack{display:inline-block;align-items:center;background-color:var(--orange-1100);color:var(--white);border-radius:4px}:host.button__slack:hover{background-color:var(--red-1200)}:host.button__slack:active{background-color:var(--red-1100);border:none}:host.button__slack[disabled]:hover{background-color:var(--white)}:host.button__slack :focus-visible{outline:2px dashed var(--primary-800)}:host.button__slack :focus:not(:focus-visible){outline:none}:host.button__slack--l{height:56px}:host.button__slack--m{height:48px}:host.button__slack--s{height:40px}:host.button__slack--xs{height:36px}:host.button__slack--fb_filled{background:var(--primary-1300);color:var(--white)}:host.button__slack--fb_outlined{background:var(--white);color:var(--primary-1300);border:1px solid var(--primary-1300)}:host.button__slack--google_light{background:var(--white);color:var(--blue-grey-1200);border-radius:2px;font-weight:var(--ds-fnt-wt-md);font-size:var(--bd-fnt-sz-3);box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__slack--google_dark{border:1px solid var(--primary-1100);background:var(--white);color:var(--blue-grey-1200);border-radius:2px;box-shadow:var(--shdw-bluegrey-lvl-8),var(--shdw-bluegrey-lvl-9)}:host.button__slack--slack_light{background:var(--white);border:1px solid var(--grey-1410);color:var(--black);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__slack--slack_dark{background:var(--orange-1100);color:var(--white);line-height:var(--bd-fnt-ln-hgt-7)}:host.button__slack--apple_white{background:var(--white);color:var(--black);border:1px solid var(--black)}:host.button__slack--apple_black{background:var(--primary-1200);border:1px solid var(--black);color:var(--white)}:host.button__slack--twitter_btn{background:linear-gradient(180deg,#fefefe 0%,#dedede 100%);border:1px solid var(--blue-grey-1100);border-radius:3px;color:var(--grey-1800)}:host.button__slack--twitter_link{border:none;color:var(--grey-1310);background-color:transparent}:host.button__slack--microsoft_dark{background:var(--grey-1210);color:var(--white)}:host.button__slack--microsoft_light{background:var(--white);border:1px solid var(--grey-600);color:var(--grey-1100)}:host.button__slack--disabled{cursor:not-allowed;background-color:var(--white);color:var(--grey-600);border:1px solid var(--grey-200)}:host.button__slack--disabled:hover{background-color:transparent}:host.button__slack--disabled.addBorder{border:1px solid var(--grey-200)}:host-context(.button--l) .button__body{padding:0 16px}:host-context(.button--s) .button__body{padding:0 8px}:host-context(.button--xs) .button__body{padding:0 6px}\n"]
    }]
  }], null, {
    type: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    subType: [{
      type: Input
    }],
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    icon: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var HeaderComponent = class _HeaderComponent {
  isfixedLayout = false;
  constructor() {
  }
  static ɵfac = function HeaderComponent_Factory(t) {
    return new (t || _HeaderComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _HeaderComponent,
    selectors: [["ada-header"]],
    inputs: {
      isfixedLayout: "isfixedLayout"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c61,
    decls: 9,
    vars: 3,
    consts: [[1, "header__container", 3, "ngClass"], [1, "header__logo"], [1, "header__menu"], [1, "header__left"], [1, "header__right"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c59);
        ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        ɵɵprojection(3);
        ɵɵelementEnd();
        ɵɵprojection(4, 1);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 3);
        ɵɵprojection(6, 2);
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 4);
        ɵɵprojection(8, 3);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c60, ctx.isfixedLayout));
      }
    },
    dependencies: [CommonModule, NgClass],
    styles: ["[_nghost-%COMP%]{display:block;padding:16px;box-shadow:var(--shdw-bluegrey-lvl-1)}.header__container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 4fr auto;gap:40px;justify-content:center;align-items:center;padding:4px}.header__container--fixed[_ngcontent-%COMP%]{display:flex;gap:40px;justify-content:center;align-items:center;padding:4px}.header__logo[_ngcontent-%COMP%]{display:flex}.header__left[_ngcontent-%COMP%]{display:grid;justify-content:center}@media (min-width: 1366px){.header__menu[_ngcontent-%COMP%]{display:none}}@media (max-width: 1365px) and (min-width: 768px){.header__right[_ngcontent-%COMP%]{display:grid;justify-content:end}.header__left[_ngcontent-%COMP%]{display:none}.header__logo[_ngcontent-%COMP%]{gap:0px}}@media (max-width: 767px) and (min-width: 360px){.header__left[_ngcontent-%COMP%]{display:none}}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{
      selector: "ada-header",
      standalone: true,
      imports: [CommonModule],
      template: `  <div
    class="header__container"
    [ngClass]="{ 'header__container--fixed': isfixedLayout }"
  >
    <div class="header__logo">
      <div class="header__menu">
        <ng-content select="[header-menu]"></ng-content>
      </div>
      <ng-content select="[header-logo]"></ng-content>
    </div>
    <div class="header__left">
      <ng-content select="[header-left]"></ng-content>
    </div>
    <div class="header__right">
      <ng-content select="[header-right]"></ng-content>
    </div>
  </div>
`,
      styles: [":host{display:block;padding:16px;box-shadow:var(--shdw-bluegrey-lvl-1)}.header__container{display:grid;grid-template-columns:1fr 4fr auto;gap:40px;justify-content:center;align-items:center;padding:4px}.header__container--fixed{display:flex;gap:40px;justify-content:center;align-items:center;padding:4px}.header__logo{display:flex}.header__left{display:grid;justify-content:center}@media (min-width: 1366px){.header__menu{display:none}}@media (max-width: 1365px) and (min-width: 768px){.header__right{display:grid;justify-content:end}.header__left{display:none}.header__logo{gap:0px}}@media (max-width: 767px) and (min-width: 360px){.header__left{display:none}}\n"]
    }]
  }], () => [], {
    isfixedLayout: [{
      type: Input
    }]
  });
})();
var MenuListComponent = class _MenuListComponent {
  type = "default";
  isSelected;
  itemSelected = new EventEmitter();
  _hostClass;
  isDisabled;
  constructor() {
  }
  ngOnInit() {
    this.updateHostClass();
  }
  ngOnChanges() {
    this.updateHostClass();
  }
  updateHostClass() {
    this._hostClass = `menu-list--container--${this.type}`;
    this._hostClass = this.isSelected ? this._hostClass + "--selected" : this._hostClass;
  }
  onMouseClick() {
    this.isSelected = !this.isSelected;
    this.itemSelected.emit(this.isSelected);
    this.updateHostClass();
  }
  static ɵfac = function MenuListComponent_Factory(t) {
    return new (t || _MenuListComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MenuListComponent,
    selectors: [["ada-menu-list"]],
    hostVars: 2,
    hostBindings: function MenuListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function MenuListComponent_click_HostBindingHandler() {
          return ctx.onMouseClick();
        });
      }
      if (rf & 2) {
        ɵɵclassMap(ctx._hostClass);
      }
    },
    inputs: {
      type: "type",
      isSelected: "isSelected",
      isDisabled: "isDisabled"
    },
    outputs: {
      itemSelected: "itemSelected"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c64,
    decls: 6,
    vars: 4,
    consts: [[3, "ngClass"], ["tabindex", "0", 1, "menu-list--container", 3, "ngClass"]],
    template: function MenuListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c62);
        ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div");
        ɵɵprojection(3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "div");
        ɵɵprojection(5, 1);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c63, ctx.isDisabled));
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ctx._hostClass);
      }
    },
    dependencies: [CommonModule, NgClass, OverlayModule, PortalModule],
    styles: [".menu-list--container[_ngcontent-%COMP%]{cursor:pointer;padding:8px 16px;font-family:var(--bd-fnt-fm);font-weight:var(--hd-fnt-wt-rg);font-size:var(--bd-fnt-wt-rg);line-height:var(--bd-fnt-ln-hgt-5);letter-spacing:var(--bd-fnt-ltr-spc);display:flex;justify-content:space-between;align-items:center}.menu-list--container--default[_ngcontent-%COMP%]{height:40px}.menu-list--container--default--selected[_ngcontent-%COMP%]{background-color:var(--primary-100);height:40px}.menu-list--container--comfortable[_ngcontent-%COMP%]{height:48px}.menu-list--container--comfortable--selected[_ngcontent-%COMP%]{background-color:var(--primary-100);height:48px}.menu-list--container--compact[_ngcontent-%COMP%]{height:30px}.menu-list--container--compact--selected[_ngcontent-%COMP%]{background-color:var(--primary-100);height:30px}.menu-list--container--selected[_ngcontent-%COMP%]{background-color:var(--primary-100)}.menu-list--container[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:var(--blue-grey-300)}.menu-list--container[_ngcontent-%COMP%]:focus-visible{outline:dashed var(--primary-1000)}.disabled[_ngcontent-%COMP%]{color:var(--grey-600);pointer-events:none}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuListComponent, [{
    type: Component,
    args: [{
      selector: "ada-menu-list",
      standalone: true,
      imports: [CommonModule, OverlayModule, PortalModule],
      template: `<div [ngClass]="{'disabled': isDisabled}">
  <div tabindex="0" [ngClass]="_hostClass" class="menu-list--container">
    <div>
      <ng-content select="[leftBlock]"></ng-content>
    </div>

    <div>
      <ng-content select="[rightBlock]"></ng-content>
    </div>
  </div>
</div>
`,
      styles: [".menu-list--container{cursor:pointer;padding:8px 16px;font-family:var(--bd-fnt-fm);font-weight:var(--hd-fnt-wt-rg);font-size:var(--bd-fnt-wt-rg);line-height:var(--bd-fnt-ln-hgt-5);letter-spacing:var(--bd-fnt-ltr-spc);display:flex;justify-content:space-between;align-items:center}.menu-list--container--default{height:40px}.menu-list--container--default--selected{background-color:var(--primary-100);height:40px}.menu-list--container--comfortable{height:48px}.menu-list--container--comfortable--selected{background-color:var(--primary-100);height:48px}.menu-list--container--compact{height:30px}.menu-list--container--compact--selected{background-color:var(--primary-100);height:30px}.menu-list--container--selected{background-color:var(--primary-100)}.menu-list--container:hover{cursor:pointer;background-color:var(--blue-grey-300)}.menu-list--container:focus-visible{outline:dashed var(--primary-1000)}.disabled{color:var(--grey-600);pointer-events:none}\n"]
    }]
  }], () => [], {
    type: [{
      type: Input
    }],
    isSelected: [{
      type: Input
    }],
    itemSelected: [{
      type: Output
    }],
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    isDisabled: [{
      type: Input
    }],
    onMouseClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var OverlayType;
(function(OverlayType2) {
  OverlayType2["RIGHTBOTTOM"] = "right-bottom";
  OverlayType2["LEFT"] = "left";
  OverlayType2["RIGHT"] = "right";
  OverlayType2["OVERLAPCENTER"] = "center";
  OverlayType2["LEFTBOTTOM"] = "left-bottom";
  OverlayType2["LEFTTOP"] = "left-top";
  OverlayType2["LEFTCENTER"] = "left-center";
  OverlayType2["RIGHTCENTER"] = "right-center";
  OverlayType2["RIGHTTOP"] = "right-top";
  OverlayType2["OVERLAPLEFTTOP"] = "overlap-left-top";
  OverlayType2["OVERLAPRIGHTTOP"] = "overlap-right-top";
  OverlayType2["OVERLAPLEFTBOTTOM"] = "overlap-left-bottom";
  OverlayType2["OVERLAPRIGHTBOTTOM"] = "overlap-right-bottom";
})(OverlayType || (OverlayType = {}));
var MenuItemComponent = class _MenuItemComponent {
  _overlay;
  _changeDetectorRef;
  viewContainerRef;
  position = OverlayType.RIGHTBOTTOM;
  allowMultipleSelection = false;
  // New input to allow multiple selection
  itemClick = new EventEmitter();
  overlayTemplate;
  overlayRef;
  _isOpen = false;
  isDisabled;
  isOpened = new EventEmitter();
  priorityPosition;
  selectedOption = null;
  set close(state2) {
    this._isOpen = this._isOpen ? state2 : this._isOpen;
    if (this.overlayRef && !this._isOpen) {
      this.closeOverlay();
    }
  }
  selectedOptions = [];
  constructor(_overlay, _changeDetectorRef, viewContainerRef) {
    this._overlay = _overlay;
    this._changeDetectorRef = _changeDetectorRef;
    this.viewContainerRef = viewContainerRef;
  }
  ngOnInit() {
    this.selectOption("option1");
  }
  toggleMenu() {
    if (!this.isDisabled) {
      this._isOpen = !this._isOpen;
    }
  }
  handleClick(option) {
    if (this.allowMultipleSelection) {
      this.toggleOption(option);
    } else {
      if (!this.isOptionSelected(option)) {
        this.selectedOptions = [option];
        this.itemClick.emit(this.selectedOptions);
      }
      if (this._isOpen) {
        this._isOpen = false;
      } else {
        this._isOpen = true;
        this.openOverlay();
      }
      this.closeOverlay();
    }
  }
  toggleOption(option) {
    const index = this.selectedOptions.indexOf(option);
    if (index === -1) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions.splice(index, 1);
    }
    this.itemClick.emit(this.selectedOptions);
    if (!this.allowMultipleSelection && this._isOpen) {
      this._isOpen = false;
      this.closeOverlay();
    }
  }
  toggleOptions() {
    if (!this.allowMultipleSelection) {
      this._isOpen = !this._isOpen;
    }
    if (!this.allowMultipleSelection && this.isDisabled) {
      this._isOpen = !this._isOpen;
    }
  }
  handleOptionClick(event2) {
    const element = event2.target;
    if (element) {
      const option = element.querySelector("[data-option]") ?? null;
      if (option) {
        const optionValue = option?.getAttribute("data-option");
        if (optionValue) {
          this.isOptionSelected(optionValue);
          this.selectedOption = optionValue;
        }
      }
    }
  }
  selectOption(option) {
    if (this.allowMultipleSelection) {
      if (option !== null) {
        const index = this.selectedOptions.indexOf(option);
        if (index !== -1) {
          this.selectedOptions.splice(index, 1);
        } else {
          this.selectedOptions.push(option);
        }
      }
    } else {
      if (option !== null) {
        if (this.selectedOptions[0] === option) {
          this.selectedOptions = [];
        } else {
          this.selectedOptions = [option];
        }
        this._isOpen = false;
      }
    }
  }
  isOptionSelected(option) {
    return this.selectedOptions.includes(option);
  }
  ngOnChanges() {
    if (this.priorityPosition) {
      this.getPosition().unshift(this.priorityPosition);
    }
    this.isOpened.emit(this._isOpen);
    this._changeDetectorRef.detectChanges();
  }
  isOpenedOrClosed() {
    this.isOpened.emit(this._isOpen);
    this._changeDetectorRef.markForCheck();
  }
  openOverlay() {
    const config = {
      positionStrategy: this._overlay.position().flexibleConnectedTo(document.getElementById("menu-button")).withPositions(this.getPosition()).withPush(false),
      hasBackdrop: !this.allowMultipleSelection,
      backdropClass: "cdk-overlay-transparent-backdrop",
      scrollStrategy: this._overlay.scrollStrategies.reposition()
    };
    this.overlayRef = this._overlay.create(config);
    this.overlayRef.attach(new TemplatePortal(this.overlayTemplate, this.viewContainerRef));
    if (this.allowMultipleSelection) {
      this.overlayRef.backdropClick().subscribe(() => {
        this._isOpen = true;
      });
    }
  }
  closeOverlay() {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }
  getPosition() {
    switch (this.position) {
      case OverlayType.LEFTTOP:
        return [{
          originX: "end",
          originY: "top",
          overlayX: "end",
          overlayY: "bottom",
          offsetX: 1,
          offsetY: -5,
          panelClass: ["left", "top"]
        }];
      case OverlayType.LEFTCENTER:
        return [{
          originX: "start",
          originY: "bottom",
          overlayX: "end",
          overlayY: "bottom",
          offsetX: -5,
          offsetY: -5,
          panelClass: ["left", "center"]
        }];
      case OverlayType.RIGHTCENTER:
        return [{
          originX: "end",
          originY: "bottom",
          overlayX: "start",
          overlayY: "bottom",
          offsetX: 5,
          offsetY: -5,
          panelClass: ["right", "center"]
        }];
      case OverlayType.LEFTBOTTOM:
        return [{
          originX: "end",
          originY: "bottom",
          overlayX: "end",
          overlayY: "top",
          panelClass: ["left", "bottom"]
        }];
      case OverlayType.OVERLAPLEFTBOTTOM:
        return [{
          originX: "end",
          originY: "top",
          overlayX: "end",
          overlayY: "top",
          offsetX: 0,
          offsetY: -3,
          panelClass: ["left", "bottom"]
        }];
      case OverlayType.RIGHTTOP:
        return [{
          originX: "start",
          originY: "top",
          overlayX: "start",
          overlayY: "bottom",
          offsetX: -1,
          offsetY: -5,
          panelClass: ["right", "top"]
        }];
      case OverlayType.OVERLAPRIGHTTOP:
        return [{
          originX: "start",
          originY: "bottom",
          overlayX: "start",
          overlayY: "bottom",
          panelClass: ["right", "top"]
        }];
      case OverlayType.RIGHTBOTTOM:
        return [{
          originX: "start",
          originY: "bottom",
          overlayX: "start",
          overlayY: "top",
          panelClass: ["right", "bottom"]
        }];
      case OverlayType.OVERLAPRIGHTBOTTOM:
        return [{
          originX: "start",
          originY: "top",
          overlayX: "start",
          overlayY: "top",
          offsetX: 0,
          offsetY: -3,
          panelClass: ["right", "bottom"]
        }];
      case OverlayType.OVERLAPCENTER:
      default:
        return [{
          originX: "center",
          originY: "center",
          overlayX: "center",
          overlayY: "center",
          offsetX: 0,
          offsetY: 0,
          panelClass: ["center", "center"]
        }];
      case OverlayType.OVERLAPLEFTTOP:
        return [{
          originX: "end",
          originY: "bottom",
          overlayX: "end",
          overlayY: "bottom",
          panelClass: ["left", "top"]
        }];
      case OverlayType.LEFT:
        return [{
          originX: "start",
          originY: "top",
          overlayX: "end",
          overlayY: "top",
          offsetX: -5,
          offsetY: -1,
          panelClass: ["center", "center"]
        }];
      case OverlayType.RIGHT:
        return [{
          originX: "end",
          originY: "top",
          overlayX: "start",
          overlayY: "top",
          offsetX: 5,
          offsetY: -1,
          panelClass: ["center", "center"]
        }];
    }
  }
  static ɵfac = function MenuItemComponent_Factory(t) {
    return new (t || _MenuItemComponent)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MenuItemComponent,
    selectors: [["ada-menu-item"]],
    viewQuery: function MenuItemComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c65, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlayTemplate = _t.first);
      }
    },
    inputs: {
      position: "position",
      allowMultipleSelection: "allowMultipleSelection",
      isDisabled: "isDisabled",
      priorityPosition: "priorityPosition",
      close: "close"
    },
    outputs: {
      itemClick: "itemClick",
      isOpened: "isOpened"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c68,
    decls: 6,
    vars: 5,
    consts: [["cdkOverlayOrigin", "", 1, "menu-container"], ["trigger", "cdkOverlayOrigin"], ["id", "menu-button", 1, "menu-button", 3, "click"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayBackdropClass", "backdropClick"], ["overlayTemplate", ""], [1, "menu-content", 3, "click"], [3, "click"], [3, "ngClass"]],
    template: function MenuItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c67);
        ɵɵelementStart(0, "div", 0, 1)(2, "div", 2);
        ɵɵlistener("click", function MenuItemComponent_Template_div_click_2_listener() {
          return ctx.toggleMenu();
        });
        ɵɵprojection(3);
        ɵɵelementEnd();
        ɵɵtemplate(4, MenuItemComponent_ng_template_4_Template, 4, 3, "ng-template", 3, 4, ɵɵtemplateRefExtractor);
        ɵɵlistener("backdropClick", function MenuItemComponent_Template_ng_template_backdropClick_4_listener() {
          ctx._isOpen = false;
          return ctx.isOpenedOrClosed();
        });
        ɵɵelementEnd();
      }
      if (rf & 2) {
        const _r0 = ɵɵreference(1);
        ɵɵadvance(4);
        ɵɵproperty("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx._isOpen)("cdkConnectedOverlayPositions", ctx.getPosition())("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayBackdropClass", "backdrop-background");
      }
    },
    dependencies: [CommonModule, NgClass, CardsComponent, OverlayModule, CdkConnectedOverlay, CdkOverlayOrigin, PortalModule],
    styles: [".menu-container[_ngcontent-%COMP%]{position:relative;display:inline-block}.menu-container.right[_ngcontent-%COMP%]   svg.menu-button[_ngcontent-%COMP%]{transform:scaleX(-1)}.menu-button[_ngcontent-%COMP%]{background-color:var(--white);cursor:pointer}.ada-card.menu[_ngcontent-%COMP%]{position:absolute;background-color:var(--white);padding:4px 0;list-style:none;display:inline-block}.ada-card.menu.open[_ngcontent-%COMP%]{display:block}.ada-card.menu.right[_ngcontent-%COMP%]{right:0}.menu-item[_ngcontent-%COMP%]{padding:8px 16px;cursor:pointer;font-family:var(--bd-fnt-fm);font-weight:var(--hd-fnt-wt-rg);font-size:var(--bd-fnt-wt-rg);line-height:var(--bd-fnt-ln-hgt-5);letter-spacing:var(--bd-fnt-ltr-spc)}.menu-item-selected[_ngcontent-%COMP%]{background-color:var(--primary-100)}.menu-content[_ngcontent-%COMP%]{width:180px;height:auto}.disabled[_ngcontent-%COMP%]{color:var(--grey-600);pointer-events:none}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuItemComponent, [{
    type: Component,
    args: [{
      selector: "ada-menu-item",
      standalone: true,
      imports: [CommonModule, ButtonComponent, CardsComponent, OverlayModule, PortalModule, MenuListComponent],
      template: `<div class="menu-container" #trigger="cdkOverlayOrigin" cdkOverlayOrigin>
  <div id="menu-button" class="menu-button" (click)="toggleMenu()">
    <ng-content select="[menuTrigger]"> </ng-content>
  </div>
  <ng-template
    #overlayTemplate
    cdkConnectedOverlay
    [cdkConnectedOverlayOrigin]="trigger"
    [cdkConnectedOverlayOpen]="_isOpen"
    [cdkConnectedOverlayPositions]="getPosition()"
    [cdkConnectedOverlayHasBackdrop]="true"
    [cdkConnectedOverlayBackdropClass]="'backdrop-background'"
    (backdropClick)="_isOpen = false; isOpenedOrClosed()"
  >
    <div class="menu-content" (click)="handleOptionClick($event)">
      <ada-card (click)="toggleOptions()">
        <div [ngClass]="{ disabled: isDisabled }">
          <ng-content select="[menuList]"></ng-content>
        </div>
      </ada-card>
    </div>
  </ng-template>
</div>
`,
      styles: [".menu-container{position:relative;display:inline-block}.menu-container.right svg.menu-button{transform:scaleX(-1)}.menu-button{background-color:var(--white);cursor:pointer}.ada-card.menu{position:absolute;background-color:var(--white);padding:4px 0;list-style:none;display:inline-block}.ada-card.menu.open{display:block}.ada-card.menu.right{right:0}.menu-item{padding:8px 16px;cursor:pointer;font-family:var(--bd-fnt-fm);font-weight:var(--hd-fnt-wt-rg);font-size:var(--bd-fnt-wt-rg);line-height:var(--bd-fnt-ln-hgt-5);letter-spacing:var(--bd-fnt-ltr-spc)}.menu-item-selected{background-color:var(--primary-100)}.menu-content{width:180px;height:auto}.disabled{color:var(--grey-600);pointer-events:none}\n"]
    }]
  }], () => [{
    type: Overlay
  }, {
    type: ChangeDetectorRef
  }, {
    type: ViewContainerRef
  }], {
    position: [{
      type: Input
    }],
    allowMultipleSelection: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    overlayTemplate: [{
      type: ViewChild,
      args: ["overlayTemplate", {
        static: true
      }]
    }],
    isDisabled: [{
      type: Input
    }],
    isOpened: [{
      type: Output
    }],
    priorityPosition: [{
      type: Input
    }],
    close: [{
      type: Input
    }]
  });
})();
var MenuHeaderComponent = class _MenuHeaderComponent {
  type = "default";
  _hostClass;
  ngOnChanges() {
    this._hostClass = `menu-header--container--${this.type}`;
  }
  static ɵfac = function MenuHeaderComponent_Factory(t) {
    return new (t || _MenuHeaderComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MenuHeaderComponent,
    selectors: [["ada-menu-header"]],
    hostVars: 2,
    hostBindings: function MenuHeaderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx._hostClass);
      }
    },
    inputs: {
      type: "type"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c4,
    decls: 2,
    vars: 1,
    consts: [[1, "menu-header--container", 3, "ngClass"]],
    template: function MenuHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ctx._hostClass);
      }
    },
    dependencies: [CommonModule, NgClass, OverlayModule, PortalModule],
    styles: [".menu-header--container[_ngcontent-%COMP%]{padding:8px 16px;font-family:var(--bd-fnt-fm);font-weight:var(--hd-fnt-wt-md);font-size:var(--hd-fnt-sz-8);line-height:var(--hd-fnt-ln-hgt-6);letter-spacing:var(--hd-fnt-ltr-spc);display:flex;justify-content:space-between;align-items:center;color:var(--grey-700)}.menu-header--container--default[_ngcontent-%COMP%]{height:40px}.menu-header--container--comfortable[_ngcontent-%COMP%]{height:48px}.menu-header--container--compact[_ngcontent-%COMP%]{height:30px}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuHeaderComponent, [{
    type: Component,
    args: [{
      selector: "ada-menu-header",
      standalone: true,
      imports: [CommonModule, OverlayModule, PortalModule],
      template: '<div [ngClass]="_hostClass" class="menu-header--container">\n  <ng-content></ng-content>\n</div>\n',
      styles: [".menu-header--container{padding:8px 16px;font-family:var(--bd-fnt-fm);font-weight:var(--hd-fnt-wt-md);font-size:var(--hd-fnt-sz-8);line-height:var(--hd-fnt-ln-hgt-6);letter-spacing:var(--hd-fnt-ltr-spc);display:flex;justify-content:space-between;align-items:center;color:var(--grey-700)}.menu-header--container--default{height:40px}.menu-header--container--comfortable{height:48px}.menu-header--container--compact{height:30px}\n"]
    }]
  }], null, {
    type: [{
      type: Input
    }],
    _hostClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var PopoverService = class _PopoverService {
  overlayRef;
  $closeIcon = new BehaviorSubject(true);
  $isOpen = new BehaviorSubject(false);
  $isPopoverOpen = new BehaviorSubject(false);
  $backgroundSelected = new BehaviorSubject("light");
  constructor() {
  }
  static ɵfac = function PopoverService_Factory(t) {
    return new (t || _PopoverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PopoverService,
    factory: _PopoverService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var PopoverContentComponent = class _PopoverContentComponent {
  overlaySer;
  constructor(overlaySer) {
    this.overlaySer = overlaySer;
  }
  selectedClass = "";
  ngOnInit() {
    this.overlaySer.$backgroundSelected.subscribe((classToApply) => {
      this.selectedClass = classToApply;
    });
  }
  static ɵfac = function PopoverContentComponent_Factory(t) {
    return new (t || _PopoverContentComponent)(ɵɵdirectiveInject(PopoverService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PopoverContentComponent,
    selectors: [["ada-popover-content"]],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c70,
    decls: 2,
    vars: 2,
    consts: [[1, "container"]],
    template: function PopoverContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c69);
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.selectedClass);
      }
    },
    dependencies: [CommonModule],
    styles: ["[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{font-family:var(--bd-fnt-fm);font-style:normal;font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-3);line-height:var(--hpl-fnt-ln-hgt-2);letter-spacing:var(--hpl-fnt-ltr-spc);padding-bottom:8px}[_nghost-%COMP%]   .container.light[_ngcontent-%COMP%]{color:var(--grey-1000)}[_nghost-%COMP%]   .container.dark[_ngcontent-%COMP%]{color:var(--grey-200)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverContentComponent, [{
    type: Component,
    args: [{
      selector: "ada-popover-content",
      standalone: true,
      imports: [CommonModule],
      template: '<div class="container" [class]="selectedClass">\n    <ng-content select="[content]"></ng-content>\n</div>',
      styles: [":host .container{font-family:var(--bd-fnt-fm);font-style:normal;font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-3);line-height:var(--hpl-fnt-ln-hgt-2);letter-spacing:var(--hpl-fnt-ltr-spc);padding-bottom:8px}:host .container.light{color:var(--grey-1000)}:host .container.dark{color:var(--grey-200)}\n"]
    }]
  }], () => [{
    type: PopoverService
  }], null);
})();
var PopoverTitleComponent = class _PopoverTitleComponent {
  overlaySer;
  constructor(overlaySer) {
    this.overlaySer = overlaySer;
  }
  isIconPresent = true;
  selectedClass = "light";
  ngOnInit() {
    this.overlaySer.$backgroundSelected.subscribe((classToApply) => {
      this.selectedClass = classToApply;
    });
  }
  ngAfterContentInit() {
    this.overlaySer.$closeIcon.subscribe((closeIcon) => {
      this.isIconPresent = closeIcon;
    });
  }
  static ɵfac = function PopoverTitleComponent_Factory(t) {
    return new (t || _PopoverTitleComponent)(ɵɵdirectiveInject(PopoverService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PopoverTitleComponent,
    selectors: [["ada-popover-title"]],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c72,
    decls: 4,
    vars: 3,
    consts: [[1, "container"], [1, "title"], ["class", "icon", 4, "ngIf"], [1, "icon"]],
    template: function PopoverTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c71);
        ɵɵelementStart(0, "div", 0)(1, "div", 1);
        ɵɵprojection(2);
        ɵɵelementEnd();
        ɵɵtemplate(3, PopoverTitleComponent_div_3_Template, 2, 0, "div", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.selectedClass);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.isIconPresent);
      }
    },
    dependencies: [CommonModule, NgIf],
    styles: ["[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-md);font-size:var(--bd-fnt-sz-3);line-height:var(--hpl-fnt-ln-hgt-2);letter-spacing:var(--hpl-fnt-ltr-spc)}[_nghost-%COMP%]   .container.light[_ngcontent-%COMP%]{color:var(--grey-1000)}[_nghost-%COMP%]   .container.dark[_ngcontent-%COMP%]{color:var(--grey-200)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverTitleComponent, [{
    type: Component,
    args: [{
      selector: "ada-popover-title",
      standalone: true,
      imports: [CommonModule],
      template: '<div class="container" [class]="selectedClass">\n    <div class="title">\n        <ng-content select="[title]"></ng-content>\n    </div>\n    <div class="icon" *ngIf="isIconPresent">\n        <ng-content select="[closeIcon]"></ng-content>\n    </div>\n</div>',
      styles: [":host .container{display:flex;flex-direction:row;justify-content:space-between}:host .container .title{font-family:var(--bd-fnt-fm);font-weight:var(--bd-fnt-wt-md);font-size:var(--bd-fnt-sz-3);line-height:var(--hpl-fnt-ln-hgt-2);letter-spacing:var(--hpl-fnt-ltr-spc)}:host .container.light{color:var(--grey-1000)}:host .container.dark{color:var(--grey-200)}\n"]
    }]
  }], () => [{
    type: PopoverService
  }], null);
})();
var PopoverCaretComponent = class _PopoverCaretComponent extends BasePortalOutlet {
  cd;
  el;
  overlaySer;
  positionStrategy;
  isOpen = false;
  portalOutlet = {};
  arrowElement;
  arrowClass;
  attachComponentPortal(componentPortal) {
    return this.portalOutlet.attachComponentPortal(componentPortal);
  }
  attachTemplatePortal(templatePortal) {
    return this.portalOutlet.attachTemplatePortal(templatePortal);
  }
  selectedClass = "light";
  constructor(cd, el, overlaySer) {
    super();
    this.cd = cd;
    this.el = el;
    this.overlaySer = overlaySer;
  }
  ngOnInit() {
    this.overlaySer.$isOpen.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
    this.subscribePositionChanges();
    this.overlaySer.$backgroundSelected.subscribe((classToApply) => {
      this.selectedClass = classToApply;
    });
  }
  subscribePositionChanges() {
    this.positionStrategy?.positionChanges.subscribe((position) => {
      if (position.connectionPair.panelClass) {
        this.arrowClass = position.connectionPair.panelClass;
        const overlayWidth = this.el.nativeElement.offsetWidth;
        const overlayHeight = this.el.nativeElement.offsetHeight;
        const arrow = this.arrowElement.nativeElement;
        this.setArrowStyles(arrow, this.arrowClass, overlayWidth, overlayHeight);
        this.cd.detectChanges();
      }
    });
  }
  setArrowStyles(arrow, arrowClass, overlayWidth, overlayHeight) {
    arrow.style.transform = "";
    arrow.style.top = "";
    arrow.style.right = "";
    arrow.style.bottom = "";
    arrow.style.left = "";
    switch (arrowClass) {
      case "left-top":
        arrow.style.top = overlayHeight / 4 - 2 + "px";
        arrow.style.left = "0";
        arrow.style.transform = "rotate(-45deg) translateY(-50%)";
        break;
      case "left":
        arrow.style.top = overlayHeight / 2 - 2 + "px";
        arrow.style.left = "0";
        arrow.style.transform = "rotate(-45deg) translateY(-50%)";
        break;
      case "left-bottom":
        arrow.style.bottom = overlayHeight / 4 - 5 + "px";
        arrow.style.left = "0";
        arrow.style.transform = "rotate(-45deg) translateY(-50%)";
        break;
      case "right-top":
        arrow.style.top = overlayHeight / 4 - 5 + "px";
        arrow.style.right = "0";
        arrow.style.transform = "rotate(-45deg) translateY(50%)";
        break;
      case "right":
        arrow.style.bottom = overlayHeight / 2 - 2 + "px";
        arrow.style.right = "0";
        arrow.style.transform = "rotate(-45deg) translateY(50%)";
        break;
      case "right-bottom":
        arrow.style.bottom = overlayHeight / 4 - 2 + "px";
        arrow.style.right = "0";
        arrow.style.transform = "rotate(-45deg) translateY(50%)";
        break;
      case "top-left":
        arrow.style.left = overlayWidth / 4 / 2 + "px";
        arrow.style.top = "0";
        arrow.style.transform = "rotate(-45deg) translateX(50%)";
        break;
      case "top":
        arrow.style.right = overlayWidth / 2 - 2 + "px";
        arrow.style.top = "0";
        arrow.style.transform = "rotate(-45deg) translateX(50%)";
        break;
      case "top-right":
        arrow.style.right = overlayWidth / 4 / 2 + "px";
        arrow.style.top = "0";
        arrow.style.transform = "rotate(-45deg) translateX(50%)";
        break;
      case "bottom-left":
        arrow.style.left = overlayWidth / 4 / 2 + "px";
        arrow.style.bottom = "0";
        arrow.style.transform = "rotate(-45deg) translateX(-50%)";
        break;
      case "bottom":
        arrow.style.left = overlayWidth / 2 - 1 + "px";
        arrow.style.bottom = "0";
        arrow.style.transform = "rotate(-45deg) translateX(-50%)";
        break;
      case "bottom-right":
        arrow.style.right = overlayWidth / 4 / 2 - 7 + "px";
        arrow.style.bottom = "0";
        arrow.style.transform = "rotate(-45deg) translateX(-50%)";
        break;
      default:
        break;
    }
  }
  static ɵfac = function PopoverCaretComponent_Factory(t) {
    return new (t || _PopoverCaretComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PopoverService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PopoverCaretComponent,
    selectors: [["ada-popover-caret"]],
    viewQuery: function PopoverCaretComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(CdkPortalOutlet, 7);
        ɵɵviewQuery(_c73, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.portalOutlet = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.arrowElement = _t.first);
      }
    },
    inputs: {
      positionStrategy: "positionStrategy"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 4,
    vars: 2,
    consts: [[1, "content"], ["cdkPortalOutlet", ""], [1, "arrow"], ["arrowElement", ""]],
    template: function PopoverCaretComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementContainer(1, 1);
        ɵɵelementEnd();
        ɵɵelement(2, "span", 2, 3);
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵclassMap(ctx.selectedClass);
      }
    },
    dependencies: [OverlayModule, PortalModule, CdkPortalOutlet, CommonModule],
    styles: [".content[_ngcontent-%COMP%]{position:relative;z-index:2}.arrow[_ngcontent-%COMP%]{width:15px;height:15px;transform:rotate(-45deg);z-index:1;position:absolute}.arrow.light[_ngcontent-%COMP%]{background-color:var(--blue-grey-300)}.arrow.dark[_ngcontent-%COMP%]{background-color:var(--grey-1000)}@keyframes _ngcontent-%COMP%_fade-out{0%{opacity:1}to{opacity:0}}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverCaretComponent, [{
    type: Component,
    args: [{
      selector: "ada-popover-caret",
      standalone: true,
      imports: [OverlayModule, PortalModule, CommonModule],
      template: '<div class="content">\n  <ng-container cdkPortalOutlet></ng-container>\n</div>\n<span class="arrow" #arrowElement [class]="selectedClass"></span>',
      styles: [".content{position:relative;z-index:2}.arrow{width:15px;height:15px;transform:rotate(-45deg);z-index:1;position:absolute}.arrow.light{background-color:var(--blue-grey-300)}.arrow.dark{background-color:var(--grey-1000)}@keyframes fade-out{0%{opacity:1}to{opacity:0}}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: PopoverService
  }], {
    positionStrategy: [{
      type: Input
    }],
    portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }],
    arrowElement: [{
      type: ViewChild,
      args: ["arrowElement"]
    }]
  });
})();
var PopoverDirective = class _PopoverDirective {
  el;
  overlay;
  viewContainerRef;
  overlaySer;
  overlayRef;
  positions;
  overlayPositionRef;
  isPopoverOpen = false;
  content;
  position;
  alternatePositionsArray = [];
  show() {
    if (!this.isPopoverOpen) {
      this.createToolTipOverlay();
    } else {
      this.overlaySer.$isPopoverOpen.next(false);
      this.overlayRef.detach();
      const overlay = null;
      this.overlayRef = overlay;
    }
  }
  closeOverlay(targetElement) {
    if (this.overlayRef !== null && this.overlayRef !== void 0 && this.overlayRef.overlayElement !== void 0) {
      const parentOverlay = targetElement.contains(this.overlayRef.overlayElement) ? true : false;
      const imgIcon = document.querySelector("img") !== null && targetElement === document.querySelector("img") ? true : false;
      if (this.overlayRef && !this.el.nativeElement.contains(targetElement) && parentOverlay && this.isPopoverOpen) {
        this.overlaySer.$isPopoverOpen.next(false);
        this.overlayRef.detach();
        const overlay = null;
        this.overlayRef = overlay;
      }
      if (this.overlayRef && imgIcon && !parentOverlay) {
        this.overlaySer.$closeIcon.subscribe((closeIcon) => {
          this.overlaySer.$isOpen.subscribe((isOpen) => {
            if (closeIcon && isOpen) {
              this.overlaySer.$isPopoverOpen.next(false);
              this.overlayRef.detach();
              const overlay = null;
              this.overlayRef = overlay;
            }
          });
        });
      }
    }
  }
  constructor(el, overlay, viewContainerRef, overlaySer) {
    this.el = el;
    this.overlay = overlay;
    this.viewContainerRef = viewContainerRef;
    this.overlaySer = overlaySer;
    this.positions = [];
  }
  ngOnInit() {
    this.overlaySer.$isPopoverOpen.subscribe((isPopoverOpen) => {
      this.isPopoverOpen = isPopoverOpen;
    });
    this.positions = [];
  }
  createToolTipOverlay() {
    this.selectProvidedPosition();
    const positionStrategy = this.overlay.position().flexibleConnectedTo(this.el).withPositions(this.positions);
    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      hasBackdrop: false,
      disposeOnNavigation: true
    });
    const componentPortal = new ComponentPortal(PopoverCaretComponent);
    const portal = new TemplatePortal(this.content, this.viewContainerRef);
    const componentRef = this.overlayRef.attach(componentPortal).instance;
    this.setPosition();
    componentRef.attachTemplatePortal(portal);
    componentRef.positionStrategy = positionStrategy;
    this.overlaySer.$isPopoverOpen.next(true);
  }
  selectProvidedPosition() {
    const panelOffset = 10;
    const arrowOffset = 10;
    this.positions = [{
      overlayX: "center",
      overlayY: "bottom",
      originX: "center",
      originY: "top",
      panelClass: "bottom-center",
      offsetX: 0,
      offsetY: -1 * panelOffset
    }, {
      overlayX: "center",
      overlayY: "top",
      originX: "center",
      originY: "bottom",
      panelClass: "top-center",
      offsetX: 0,
      offsetY: panelOffset
    }, {
      overlayX: "start",
      overlayY: "bottom",
      originX: "center",
      originY: "top",
      panelClass: "bottom-left",
      offsetX: -1 * arrowOffset,
      offsetY: -1 * panelOffset
    }, {
      overlayX: "end",
      overlayY: "bottom",
      originX: "center",
      originY: "top",
      panelClass: "bottom-right",
      offsetX: arrowOffset,
      offsetY: -1 * panelOffset
    }, {
      overlayX: "start",
      overlayY: "top",
      originX: "center",
      originY: "bottom",
      panelClass: "top-left",
      offsetX: -1 * arrowOffset,
      offsetY: panelOffset
    }, {
      originX: "start",
      originY: "center",
      overlayX: "end",
      overlayY: "center",
      panelClass: "right",
      offsetX: -1 * panelOffset
    }, {
      originX: "end",
      originY: "center",
      overlayX: "start",
      overlayY: "center",
      panelClass: "left",
      offsetX: panelOffset
    }, {
      originX: "end",
      originY: "top",
      overlayX: "start",
      overlayY: "top",
      panelClass: "left-top",
      offsetX: panelOffset,
      offsetY: -1 * arrowOffset
    }, {
      originX: "start",
      originY: "top",
      overlayX: "end",
      overlayY: "top",
      panelClass: "right-top",
      offsetX: -1 * panelOffset
    }, {
      originX: "end",
      originY: "bottom",
      overlayX: "start",
      overlayY: "bottom",
      panelClass: "left-bottom",
      offsetX: 0,
      offsetY: 0
    }, {
      originX: "start",
      originY: "bottom",
      overlayX: "end",
      overlayY: "bottom",
      panelClass: "right-bottom",
      offsetX: -1 * panelOffset
    }];
    if (this.alternatePositionsArray.length > 0) {
      this.alternatePositionsArray.forEach((element) => {
        this.setTooltipPosition(element);
      });
    }
    this.setTooltipPosition(this.position);
  }
  setTooltipPosition(pos) {
    const panelOffset = 10;
    const arrowOffset = 10;
    switch (pos) {
      case "top-left":
        this.positions.unshift({
          overlayX: "start",
          overlayY: "bottom",
          originX: "center",
          originY: "top",
          panelClass: "bottom-left",
          offsetX: -1 * arrowOffset,
          offsetY: -1 * panelOffset
        });
        break;
      case "top":
        this.positions.unshift({
          overlayX: "center",
          overlayY: "bottom",
          originX: "center",
          originY: "top",
          panelClass: "bottom",
          offsetX: 0,
          offsetY: -1 * panelOffset
        });
        break;
      case "top-right":
        this.positions.unshift({
          overlayX: "end",
          overlayY: "bottom",
          originX: "center",
          originY: "top",
          panelClass: "bottom-right",
          offsetX: 19 + 5,
          offsetY: -1 * panelOffset
        });
        break;
      case "bottom-left":
        this.positions.unshift({
          overlayX: "start",
          overlayY: "top",
          originX: "center",
          originY: "bottom",
          panelClass: "top-left",
          offsetX: -1 * this.el.nativeElement.getBoundingClientRect().width / 4,
          offsetY: arrowOffset
        });
        break;
      case "bottom":
        this.positions.unshift({
          overlayX: "center",
          overlayY: "top",
          originX: "center",
          originY: "bottom",
          panelClass: "top",
          offsetX: 0,
          offsetY: panelOffset
        });
        break;
      case "bottom-right":
        this.positions.unshift({
          overlayX: "end",
          overlayY: "top",
          originX: "center",
          originY: "bottom",
          panelClass: "top-right",
          offsetY: panelOffset
        });
        break;
      case "right":
        this.positions.unshift({
          originX: "end",
          originY: "center",
          overlayX: "start",
          overlayY: "center",
          panelClass: "left",
          offsetX: panelOffset,
          offsetY: this.el.nativeElement.firstChild.getBoundingClientRect().height / 2
        });
        break;
      case "left":
        this.positions.unshift({
          originX: "start",
          originY: "center",
          overlayX: "end",
          overlayY: "center",
          panelClass: "right",
          offsetX: -1 * panelOffset,
          offsetY: this.el.nativeElement.firstChild.getBoundingClientRect().height / 2
        });
        break;
      case "left-top":
        this.positions.unshift({
          originX: "start",
          originY: "top",
          overlayX: "end",
          overlayY: "top",
          panelClass: "right-top",
          offsetX: -1 * panelOffset,
          offsetY: this.el.nativeElement.firstChild.getBoundingClientRect().height / 2 - 14
        });
        break;
      case "left-bottom":
        this.positions.unshift({
          originX: "start",
          originY: "bottom",
          overlayX: "end",
          overlayY: "bottom",
          panelClass: "right-bottom",
          offsetX: -1 * panelOffset,
          offsetY: this.el.nativeElement.firstChild.getBoundingClientRect().height / 2 + 14
        });
        break;
      case "right-top":
        this.positions.unshift({
          originX: "end",
          originY: "top",
          overlayX: "start",
          overlayY: "top",
          panelClass: "left-top",
          offsetX: panelOffset,
          offsetY: this.el.nativeElement.firstChild.getBoundingClientRect().height / 2 - 14
        });
        break;
      case "right-bottom":
        this.positions.unshift({
          originX: "end",
          originY: "bottom",
          overlayX: "start",
          overlayY: "bottom",
          panelClass: "left-bottom",
          offsetX: panelOffset,
          offsetY: this.el.nativeElement.firstChild.getBoundingClientRect().height / 2 + 14
        });
        break;
    }
  }
  setPosition() {
    setTimeout(() => {
      this.setPositionsAfterElementAttachment();
    });
  }
  setPositionsAfterElementAttachment() {
    switch (this.position) {
      case "bottom-left":
        this.positions[0].offsetX = -this.overlayRef.overlayElement.getBoundingClientRect().width / 4 / 1.5;
        break;
      case "bottom":
        this.positions[0].offsetX = 0;
        break;
      case "bottom-right":
        this.positions[0].offsetX = this.overlayRef.overlayElement.getBoundingClientRect().width / 4 / 1.5;
        break;
      case "top-left":
        this.positions[0].offsetX = -this.overlayRef.overlayElement.getBoundingClientRect().width / 4 / 1.5;
        break;
      case "top":
        this.positions[0].offsetX = 0;
        break;
      case "top-right":
        this.positions[0].offsetX = this.overlayRef.overlayElement.getBoundingClientRect().width / 4 / 1.5;
        break;
      case "left":
        this.positions[0].offsetY = 0;
        break;
      case "right":
        this.positions[0].offsetY = 0;
        break;
      case "right-top":
        this.positions[0].offsetY = -this.overlayRef.overlayElement.getBoundingClientRect().height / 4 + this.el.nativeElement.getBoundingClientRect().height / 1.5;
        break;
      case "right-bottom":
        this.positions[0].offsetY = this.overlayRef.overlayElement.getBoundingClientRect().height / 4 - this.el.nativeElement.getBoundingClientRect().height / 1.5;
        break;
      case "left-top":
        this.positions[0].offsetY = -this.overlayRef.overlayElement.getBoundingClientRect().height / 4 + this.el.nativeElement.getBoundingClientRect().height / 1.5;
        break;
      case "left-bottom":
        this.positions[0].offsetY = this.overlayRef.overlayElement.getBoundingClientRect().height / 4 - this.el.nativeElement.getBoundingClientRect().height / 1.5;
        break;
    }
    this.overlayRef?.updatePosition();
  }
  hideToolTipOverlay() {
    if (this.overlayRef && this.overlayRef.overlayElement) {
      this.overlayRef.backdropClick().subscribe(() => this.overlayRef.overlayElement);
    }
  }
  ngOnDestroy() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }
  static ɵfac = function PopoverDirective_Factory(t) {
    return new (t || _PopoverDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(PopoverService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PopoverDirective,
    selectors: [["", "adaPopoverOverlay", ""]],
    hostBindings: function PopoverDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function PopoverDirective_click_HostBindingHandler() {
          return ctx.show();
        })("click", function PopoverDirective_click_HostBindingHandler($event) {
          return ctx.closeOverlay($event.target);
        }, false, ɵɵresolveDocument);
      }
    },
    inputs: {
      content: "content",
      position: "position",
      alternatePositionsArray: "alternatePositionsArray"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverDirective, [{
    type: Directive,
    args: [{
      selector: "[adaPopoverOverlay]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Overlay
  }, {
    type: ViewContainerRef
  }, {
    type: PopoverService
  }], {
    content: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    alternatePositionsArray: [{
      type: Input
    }],
    show: [{
      type: HostListener,
      args: ["click"]
    }],
    closeOverlay: [{
      type: HostListener,
      args: ["document:click", ["$event.target"]]
    }]
  });
})();
var PopoverComponent = class _PopoverComponent {
  overlay;
  popoverSer;
  position;
  set config(newValue) {
    this._config = __spreadValues(__spreadValues({}, this._config), newValue);
  }
  _config = {
    width: "auto",
    alternatePositionsArray: []
  };
  closeIcon = true;
  isOpen = true;
  backgroundSelected = "light";
  classSelected = "light";
  constructor(overlay, popoverSer) {
    this.overlay = overlay;
    this.popoverSer = popoverSer;
  }
  isPopoverOpen = new EventEmitter(false);
  ngOnInit() {
    if (this._config.alternatePositionsArray) {
      this._config.alternatePositionsArray.reverse();
    }
  }
  ngOnChanges() {
    this.popoverSer.$closeIcon.next(this.closeIcon);
    this.popoverSer.$isOpen.next(this.isOpen);
    this.popoverSer.$backgroundSelected.next(this.backgroundSelected);
    this.popoverSer.$isPopoverOpen.subscribe((isPopOverOpen) => {
      this.isPopoverOpen.emit(isPopOverOpen);
    });
    this.classSelected = this.backgroundSelected;
  }
  static ɵfac = function PopoverComponent_Factory(t) {
    return new (t || _PopoverComponent)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(PopoverService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PopoverComponent,
    selectors: [["ada-popover"]],
    inputs: {
      position: "position",
      config: "config",
      closeIcon: "closeIcon",
      isOpen: "isOpen",
      backgroundSelected: "backgroundSelected"
    },
    outputs: {
      isPopoverOpen: "isPopoverOpen"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c76,
    decls: 4,
    vars: 4,
    consts: [["content", ""], ["adaPopoverOverlay", "", 1, "tooltip-content", 3, "content", "position", "alternatePositionsArray"], [1, "container"]],
    template: function PopoverComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c74);
        ɵɵtemplate(0, PopoverComponent_ng_template_0_Template, 2, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵelementStart(2, "div", 1);
        ɵɵprojection(3);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        const _r1 = ɵɵreference(1);
        ɵɵadvance(2);
        ɵɵproperty("content", _r1)("position", ctx.position)("alternatePositionsArray", ctx._config.alternatePositionsArray ? ctx._config.alternatePositionsArray : ɵɵpureFunction0(3, _c75));
      }
    },
    dependencies: [PopoverDirective, OverlayModule],
    styles: ["@keyframes _ngcontent-%COMP%_fade-out{0%{opacity:1}to{opacity:0}}[_nghost-%COMP%]{display:block;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}[_nghost-%COMP%]   .tooltip-content[_ngcontent-%COMP%]{display:flex}.container[_ngcontent-%COMP%]{display:block;border-radius:4px;padding:8px 8px 0 12px}.container.light[_ngcontent-%COMP%]{background:var(--blue-grey-300)}.container.dark[_ngcontent-%COMP%]{background:var(--grey-1000)}.container[_ngcontent-%COMP%]   .container-footer[_ngcontent-%COMP%]{display:inline-flex;position:relative;z-index:2}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverComponent, [{
    type: Component,
    args: [{
      selector: "ada-popover",
      standalone: true,
      imports: [PopoverDirective, OverlayModule, ButtonComponent],
      template: '<ng-template #content>\n  <div [style.width]="_config.width" class="container" [class]="classSelected">\n    <ng-content select="[tooltipContent]"></ng-content>\n  </div>\n</ng-template>\n<div adaPopoverOverlay [content]="content" [position]="position"\n  [alternatePositionsArray]="_config.alternatePositionsArray ? _config.alternatePositionsArray : []"\n  class="tooltip-content">\n  <ng-content></ng-content>\n</div>',
      styles: ["@keyframes fade-out{0%{opacity:1}to{opacity:0}}:host{display:block;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}:host .tooltip-content{display:flex}.container{display:block;border-radius:4px;padding:8px 8px 0 12px}.container.light{background:var(--blue-grey-300)}.container.dark{background:var(--grey-1000)}.container .container-footer{display:inline-flex;position:relative;z-index:2}\n"]
    }]
  }], () => [{
    type: Overlay
  }, {
    type: PopoverService
  }], {
    position: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    isOpen: [{
      type: Input
    }],
    backgroundSelected: [{
      type: Input
    }],
    isPopoverOpen: [{
      type: Output
    }]
  });
})();
var SegmentToggleGroupDirective = class _SegmentToggleGroupDirective {
  el;
  segmentToggleGroupService;
  constructor(el, segmentToggleGroupService) {
    this.el = el;
    this.segmentToggleGroupService = segmentToggleGroupService;
  }
  onClick() {
    const segmentGroupId = this.el.nativeElement.getAttribute("segmentgroupid");
    const isDisable = this.segmentToggleGroupService.segmentDisableMap.get(segmentGroupId);
    const target = event?.target;
    const segmentId = target?.getAttribute("id");
    if (segmentId && !isDisable) {
      this.segmentToggleGroupService.setSegmentActive(segmentGroupId, segmentId);
      this.segmentToggleGroupService.emitSegmentClick(segmentGroupId, segmentId);
    }
  }
  static ɵfac = function SegmentToggleGroupDirective_Factory(t) {
    return new (t || _SegmentToggleGroupDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SegmentToggleGroupService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SegmentToggleGroupDirective,
    selectors: [["ada-segment-toggle-group"]],
    hostBindings: function SegmentToggleGroupDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function SegmentToggleGroupDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SegmentToggleGroupDirective, [{
    type: Directive,
    args: [{
      selector: "ada-segment-toggle-group",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: SegmentToggleGroupService
  }], {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var MultiselectDropdownComponent = class _MultiselectDropdownComponent {
  overlay;
  viewContainerRef;
  renderer;
  cdr;
  dropDownId = Math.floor(Math.random() * 1e3) + 1;
  el;
  inputEl;
  inputElement;
  listItemElements;
  dropdownConfig = {
    options: [],
    placeholder: "Select",
    alignmentType: "prefixCheckbox",
    hasSelectAll: false,
    isDropdownDisabled: false,
    itemSize: 5,
    chipsLimit: 4,
    hasError: false
  };
  isDropdownOpen = false;
  onOptionsChange = new EventEmitter();
  hasError = false;
  dropdownInput = new FormControl("");
  dropdownTemplate;
  cdkOverlayEl;
  inputValue;
  itemHeight;
  isIconClicked = false;
  isInputClicked = false;
  validators;
  dropdownContainer;
  overlayRef;
  portalOutlet;
  sortedOptions = [];
  selectedValues = [];
  extraChips = 0;
  showError = this.dropdownConfig.hasError;
  scrollHeight = 200;
  panelOffset = 94;
  constructor(overlay, viewContainerRef, renderer, cdr) {
    this.overlay = overlay;
    this.viewContainerRef = viewContainerRef;
    this.renderer = renderer;
    this.cdr = cdr;
  }
  ngOnInit() {
    if (this.dropdownConfig.hasSelectAll) {
      const randomId = Math.floor(Math.random() * 1e4);
      const hasAll = this.dropdownConfig.options.findIndex((item) => item.value === "All");
      if (hasAll === -1) {
        this.dropdownConfig?.options?.push({
          id: randomId.toString(),
          value: "All",
          isSelected: false,
          isDisabled: false
        });
      }
    }
    this.sortedOptions = this.dropdownConfig?.options;
    this.selectedValues = this.sortedOptions?.filter((option) => option.isSelected);
    this.onOptionsChange.emit(this.selectedValues);
    this.dropdownInput.valueChanges.subscribe((value) => {
      this.inputValue = value;
      this.fllterOptions();
    });
  }
  onChange = () => {
  };
  onTouched;
  onBlur = () => {
    this.dropdownInput.markAsTouched();
    this.showError = this.dropdownInput?.touched && this.validators?.required && !this.selectedValues.length;
  };
  writeValue(values) {
    const allValuesPresent = values.every((value) => this.sortedOptions.some((option) => option.id === value.id));
    if (allValuesPresent) {
      const combinedArray = [...this.selectedValues, ...values];
      this.selectedValues = combinedArray.filter((value, index, self) => index === self.findIndex((v) => v.id === value.id));
      this.sortedOptions.forEach((item) => {
        item.isSelected = this.selectedValues.some((selectedItem) => selectedItem.id === item.id);
      });
      this.extraChips = this.selectedValues.length > this.dropdownConfig?.chipsLimit ? this.selectedValues.length - this.dropdownConfig?.chipsLimit : this.extraChips;
    } else {
      const missingItem = values.find((value) => !this.sortedOptions.some((option) => option.id === value.id));
      throw new Error(`Item with ID ${missingItem?.id} is not present in 'options'`);
    }
    this.onOptionsChange.emit(this.selectedValues);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  validate(control) {
    if (this.hasRequiredValidator(control)) {
      this.validators = {
        required: true
      };
    }
    control.statusChanges?.subscribe((status) => {
      this.showError = status === "INVALID";
    });
    return null;
  }
  hasRequiredValidator(control) {
    const validator = control.validator && control.validator({});
    return validator && validator["required"];
  }
  toggleDropdown() {
    this.isIconClicked = !this.isIconClicked;
    if (!this.isDropdownOpen) {
      this.openOverlay();
    } else {
      this.closeDropdown();
    }
  }
  onInputClick(event2) {
    if (this.dropdownConfig.isDropdownDisabled) {
      event2?.stopPropagation();
    } else {
      this.isInputClicked = true;
      this.openOverlay();
    }
  }
  openOverlay() {
    if (this.isDropdownOpen && this.isIconClicked || this.isDropdownOpen && this.isInputClicked) {
      return;
    }
    this.isDropdownOpen = true;
    const origin = document.getElementById("input-container" + this.dropDownId);
    const position = this.getPosition();
    const config = {
      positionStrategy: this.overlay.position().flexibleConnectedTo(document.getElementById("input-container" + this.dropDownId)).withPositions(position).withPush(false),
      width: origin?.offsetWidth.toString() + "px",
      backdropClass: "cdk-overlay-transparent-backdrop"
    };
    this.overlayRef = this.overlay.create(config);
    const overlayPortal = new TemplatePortal(this.dropdownTemplate, this.viewContainerRef);
    this.overlayRef.attach(overlayPortal);
    this.scrollHeight = this.getItemHeight();
    this.renderer.listen("document", "click", this.onDocumentClick.bind(this));
  }
  updateOverlayPosition() {
    if (!this.overlayRef) {
      return;
    }
    const position = this.getPosition();
    this.overlayRef.updatePositionStrategy(this.overlay.position().flexibleConnectedTo(document.getElementById("input-container" + this.dropDownId)).withPositions(position).withPush(false));
  }
  onDocumentClick(event2) {
    const dropdownElement = this.el.nativeElement;
    const overlayTemplate = this?.cdkOverlayEl?.nativeElement;
    const target = event2?.target;
    const isInsideComponent = dropdownElement?.contains(target) | overlayTemplate?.contains(target);
    if (!isInsideComponent) {
      this.closeDropdown();
    }
  }
  getPosition() {
    this.cdr.detectChanges();
    return [{
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top",
      offsetX: 0,
      offsetY: 4,
      panelClass: ["center", "center", "cdk-panel"]
    }, {
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom",
      offsetY: -4,
      panelClass: ["center", "center"]
    }];
  }
  clearInput(event2) {
    this.dropdownInput.setValue("");
    this.fllterOptions();
    event2.stopPropagation();
  }
  getDisabledCount() {
    let count = 0;
    this.sortedOptions.forEach((item) => {
      if (item.isDisabled) {
        count++;
      }
    });
    return count;
  }
  selectOption(option) {
    if (option.isDisabled) {
      return;
    }
    const index = this.sortedOptions.findIndex((item) => item.id == option.id);
    if (index === -1) {
      return;
    }
    const optionIndex = this.selectedValues.findIndex((item) => item.id === option.id);
    if (option.value === "All" && optionIndex === -1) {
      this.sortedOptions = this.sortedOptions.map((item) => {
        item.isSelected = item.isDisabled ? false : true;
        return item;
      });
      this.selectedValues = this.sortedOptions.filter((item) => item.isSelected);
      this.onChange(this.selectedValues);
      this.extraChips = this.selectedValues.length - this.dropdownConfig.chipsLimit;
      this.onOptionsChange.emit(this.selectedValues);
      this.updateOverlayPosition();
      return;
    } else if (option.value === "All") {
      this.sortedOptions = this.sortedOptions.map((item) => {
        item.isSelected = false;
        return item;
      });
      this.selectedValues = [];
      this.onChange(this.selectedValues);
      this.onOptionsChange.emit(this.selectedValues);
      this.extraChips = 0;
      this.updateOverlayPosition();
      return;
    }
    if (optionIndex === -1) {
      option.isSelected = true;
      this.sortedOptions[index].isSelected = true;
      this.selectedValues.push(option);
      const isAllSelected = this.sortedOptions.length - 1 - this.getDisabledCount() === this.selectedValues.length;
      this.sortedOptions[this.sortedOptions.length - 1].isSelected = isAllSelected ? true : false;
      this.extraChips = this.selectedValues.length > this.dropdownConfig.chipsLimit ? this.selectedValues.length - this.dropdownConfig.chipsLimit : 0;
    } else {
      option.isSelected = false;
      this.sortedOptions[index].isSelected = false;
      this.sortedOptions[this.sortedOptions.length - 1].isSelected = false;
      this.selectedValues = this.selectedValues.filter((item) => item.value !== "All" && item.id !== option.id);
      this.extraChips -= 1;
    }
    this.updateOverlayPosition();
    this.onChange(this.selectedValues);
    this.onOptionsChange.emit(this.selectedValues);
  }
  closeDropdown() {
    this.overlayRef?.detach();
    this.isDropdownOpen = false;
    this.isInputClicked = false;
    this.isIconClicked = false;
  }
  closeChip(option) {
    const index = this.sortedOptions.findIndex((item) => item.id == option.id);
    this.sortedOptions[index].isSelected = false;
    this.selectedValues = this.selectedValues.filter((value) => value.id !== option.id);
    this.extraChips = this.selectedValues.length > this.dropdownConfig.chipsLimit ? this.selectedValues.length - this.dropdownConfig.chipsLimit : 0;
    this.onChange(this.selectedValues);
    this.onOptionsChange.emit(this.selectedValues);
  }
  getItemHeight() {
    this.itemHeight = this.sortedOptions.length ? 64 : 46;
    const sortedOptionsLength = this.sortedOptions.length;
    if (sortedOptionsLength > this.dropdownConfig.itemSize) {
      return this.itemHeight * this.dropdownConfig.itemSize;
    }
    if (sortedOptionsLength > 0) {
      return this.itemHeight * sortedOptionsLength;
    }
    return this.itemHeight;
  }
  fllterOptions() {
    if (!this.inputValue) {
      this.sortedOptions = [...this.dropdownConfig.options];
    } else {
      const lowerCaseInput = this.inputValue.toLowerCase();
      this.sortedOptions = this.dropdownConfig.options.filter((option) => option.value.toLowerCase().includes(lowerCaseInput));
      this.sortedOptions.sort((a, b) => a.value.localeCompare(b.value));
    }
    this.scrollHeight = this.getItemHeight();
  }
  static ɵfac = function MultiselectDropdownComponent_Factory(t) {
    return new (t || _MultiselectDropdownComponent)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MultiselectDropdownComponent,
    selectors: [["ada-multiselect-dropdown"]],
    viewQuery: function MultiselectDropdownComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c77, 5);
        ɵɵviewQuery(_c78, 5);
        ɵɵviewQuery(_c79, 5);
        ɵɵviewQuery(_c80, 5);
        ɵɵviewQuery(_c81, 5);
        ɵɵviewQuery(_c82, 5, ViewContainerRef);
        ɵɵviewQuery(_c83, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.el = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputEl = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkOverlayEl = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputValue = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listItemElements = _t);
      }
    },
    inputs: {
      dropdownConfig: "dropdownConfig"
    },
    outputs: {
      onOptionsChange: "onOptionsChange"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MultiselectDropdownComponent),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _MultiselectDropdownComponent),
      multi: true
    }]), ɵɵStandaloneFeature],
    ngContentSelectors: _c89,
    decls: 18,
    vars: 19,
    consts: [["cdkOverlayOrigin", "", 1, "dropdown", 3, "ngClass"], ["trigger", "cdkOverlayOrigin", "dropdownElement", ""], [1, "dropdown__labels"], [1, "dropdown__select", 3, "id", "ngClass"], ["inputRef", ""], ["type", "text", "id", "myInput", 3, "ngClass", "formControl", "placeholder", "click", "blur"], ["dropDownInput", ""], ["class", "dropdown__select__selected-chips", 4, "ngIf"], ["class", "icon", "src", "assets/ic_caret_down.svg", "alt", "arrow", 3, "ngClass", "click", 4, "ngIf"], ["class", "icon", "src", "assets/close-popover.svg", "alt", "", 3, "click", 4, "ngIf"], ["dropdownTemplate", ""], ["class", "dropdown__hint-text", 4, "ngIf"], ["class", "dropdown__error-text", 4, "ngIf"], [1, "dropdown__select__selected-chips"], [4, "ngFor", "ngForOf"], ["class", "chip", "type", "filled", "size", "small", 3, "isSelected", 4, "ngIf"], [4, "ngIf"], ["type", "filled", "size", "small", 1, "chip", 3, "isSelected", "isDisable"], ["src", "assets/close-icon-dark.svg", "alt", "close Icon", 1, "chip-close", 3, "click"], ["type", "filled", "size", "small", 1, "chip", 3, "isSelected"], ["src", "assets/ic_caret_down.svg", "alt", "arrow", 1, "icon", 3, "ngClass", "click"], ["src", "assets/close-popover.svg", "alt", "", 1, "icon", 3, "click"], ["id", "dropdownOverlay", 1, "dropdown__overlay"], ["cdkoverlay", ""], [1, "dropdown__overlay__options"], ["itemSize", "2", 1, "scroll-filled-2"], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "dropdown__overlay__options--no-result"], [3, "ngClass"], ["listItem", ""], [3, "for", 4, "ngIf"], [3, "checkboxId", "isDisable", "checked", "onClick"], ["class", "label", 3, "for", 4, "ngIf"], ["class", "divider", 4, "ngIf"], [3, "for"], [1, "label", 3, "for"], [1, "divider"], [1, "dropdown__hint-text"], [1, "dropdown__error-text"]],
    template: function MultiselectDropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c86);
        ɵɵelementStart(0, "div", 0, 1)(3, "div", 2);
        ɵɵprojection(4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 3, 4);
        ɵɵprojection(7, 1);
        ɵɵelementStart(8, "input", 5, 6);
        ɵɵlistener("click", function MultiselectDropdownComponent_Template_input_click_8_listener($event) {
          return ctx.onInputClick($event);
        })("blur", function MultiselectDropdownComponent_Template_input_blur_8_listener() {
          return ctx.onBlur();
        });
        ɵɵelementEnd();
        ɵɵtemplate(10, MultiselectDropdownComponent_div_10_Template, 3, 2, "div", 7);
        ɵɵelementStart(11, "div");
        ɵɵtemplate(12, MultiselectDropdownComponent_img_12_Template, 1, 4, "img", 8)(13, MultiselectDropdownComponent_img_13_Template, 1, 0, "img", 9)(14, MultiselectDropdownComponent_ng_template_14_Template, 6, 4, "ng-template", null, 10, ɵɵtemplateRefExtractor);
        ɵɵelementEnd()();
        ɵɵtemplate(16, MultiselectDropdownComponent_div_16_Template, 2, 0, "div", 11)(17, MultiselectDropdownComponent_div_17_Template, 2, 0, "div", 12);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c66, ctx.dropdownConfig.isDropdownDisabled));
        ɵɵadvance(5);
        ɵɵpropertyInterpolate1("id", "input-container", ctx.dropDownId, "");
        ɵɵproperty("ngClass", ɵɵpureFunction2(13, _c87, ctx.isDropdownOpen, ctx.showError || ctx.dropdownConfig.hasError));
        ɵɵadvance(3);
        ɵɵproperty("ngClass", ɵɵpureFunction2(16, _c88, ctx.selectedValues.length, ctx.selectedValues.length === 0))("formControl", ctx.dropdownInput)("placeholder", ctx.dropdownConfig.placeholder);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.selectedValues.length);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.inputValue || !ctx.isDropdownOpen);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.inputValue);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", !ctx.dropdownConfig.hasError);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.dropdownConfig.hasError);
      }
    },
    dependencies: [OverlayModule, CdkOverlayOrigin, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, ReactiveFormsModule, FormControlDirective, CheckboxComponent, ChipsComponent],
    styles: ['.dropdown[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;width:inherit}.dropdown[_ngcontent-%COMP%]   .dropdown__labels[_ngcontent-%COMP%]{font-weight:var(--bd-fnt-wt-md);color:var(--primary-1000);font-size:var(--bd-fnt-sz-3);line-height:var(--bd-fnt-ln-hgt-5);font-family:var(--bd-fnt-fm)}.dropdown[_ngcontent-%COMP%]   .dropdown__select[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;flex:1 0 0;align-items:center;width:-webkit-fill-available;gap:12px;padding:12px 16px;border-radius:4px;border:1px solid var(--blue-grey-600)}.dropdown[_ngcontent-%COMP%]   .dropdown__select.dropdown__select[_ngcontent-%COMP%]:hover{border:1px solid var(--blue-brand-primary);box-shadow:none}.dropdown[_ngcontent-%COMP%]   .dropdown__select.dropdown__select--active[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]   .dropdown__select.dropdown__select--active[_ngcontent-%COMP%]:hover{border:2px solid var(--blue-brand-primary)}.dropdown[_ngcontent-%COMP%]   .dropdown__select.dropdown__select--error[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]   .dropdown__select.dropdown__select--error[_ngcontent-%COMP%]:hover{border:2px solid var(--feedback-red)}.dropdown[_ngcontent-%COMP%]   .dropdown__select[_ngcontent-%COMP%]   #myInput[_ngcontent-%COMP%]{border:none;border-radius:5px;width:inherit;height:22px;outline:none}.dropdown[_ngcontent-%COMP%]   .dropdown__select[_ngcontent-%COMP%]   #myInput.hide-input[_ngcontent-%COMP%]{display:none}.dropdown[_ngcontent-%COMP%]   .dropdown__select[_ngcontent-%COMP%]   #myInput.show-input[_ngcontent-%COMP%]{display:inline-block}.dropdown[_ngcontent-%COMP%]   .dropdown__select[_ngcontent-%COMP%]   .dropdown__select__selected-chips[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center}.dropdown[_ngcontent-%COMP%]   .dropdown__select[_ngcontent-%COMP%]   .dropdown__select__selected-chips[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%]{margin:4px}.dropdown[_ngcontent-%COMP%]   .dropdown__select[_ngcontent-%COMP%]   .dropdown__select__selected-chips[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%]   .chip-close[_ngcontent-%COMP%]{margin-left:10px}.dropdown[_ngcontent-%COMP%]   .dropdown__select[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{cursor:pointer}.dropdown[_ngcontent-%COMP%]   .dropdown__select[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]{transform:rotate(180deg)}.dropdown[_ngcontent-%COMP%]   .dropdown__hint-text[_ngcontent-%COMP%]{margin-top:4px;color:var(--grey-400);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-5);font-family:var(--bd-fnt-fm)}.dropdown[_ngcontent-%COMP%]   .dropdown__error-text[_ngcontent-%COMP%]{margin-top:4px;color:var(--red-600);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-5);font-family:var(--bd-fnt-fm)}.disabled[_ngcontent-%COMP%]{opacity:.5}.disabled[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:var(--grey-400)}.disabled[_ngcontent-%COMP%]   .dropdown__select[_ngcontent-%COMP%], .disabled[_ngcontent-%COMP%]   .dropdown__select.dropdown__select--error[_ngcontent-%COMP%], .disabled[_ngcontent-%COMP%]   .dropdown__select.dropdown__select--error[_ngcontent-%COMP%]:hover, .disabled[_ngcontent-%COMP%]   .dropdown__select.dropdown__select[_ngcontent-%COMP%]:hover, .disabled[_ngcontent-%COMP%]   .dropdown__select[_ngcontent-%COMP%]:hover{border:1px solid var(--grey-200);box-shadow:none}.disabled[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled{color:var(--grey-400);background:var(--white)}.disabled[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:var(--grey-400);background:var(--white)}.disabled[_ngcontent-%COMP%]   .dropdown__overlay[_ngcontent-%COMP%]{display:none}.disabled[_ngcontent-%COMP%]   .dropdown__select[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.disabled[_ngcontent-%COMP%]   .dropdown__select__selected-chip[_ngcontent-%COMP%]{pointer-events:none}.dropdown__overlay[_ngcontent-%COMP%]{width:100%;font-family:var(--bd-fnt-fm);box-shadow:0 4px 8px 0 var(--blue-grey-600);border-radius:4px;padding:0}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]{cursor:pointer;list-style-type:none;padding:0;background-color:var(--white);border:1px solid var(--blue-grey-1100);border-radius:4px;margin:0}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .dropdown__overlay__options--no-result[_ngcontent-%COMP%]{padding:12px 16px;display:flex;align-items:center;justify-content:center;margin-top:4px;font-family:var(--cpt-fnt-fm);font-size:var(--cpt-fnt-sz-2);line-height:var(--cpt-fnt-ln-hgt-1);font-weight:var(--cpt-fnt-wt-rg);color:var(--primary-900);line-height:18px;font-size:400}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .dropdown__overlay__options--prefix[_ngcontent-%COMP%]{width:inherit;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:wrap}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .dropdown__overlay__options--prefix[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin-top:4px}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .dropdown__overlay__options--prefix[_ngcontent-%COMP%]   .dropdown__overlay__options---prefix.disabled[_ngcontent-%COMP%]{color:gray}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .dropdown__overlay__options--suffix[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;flex-wrap:wrap}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .dropdown__overlay__options--suffix[_ngcontent-%COMP%]   .dropdown__overlay__options--suffix.disabled[_ngcontent-%COMP%]{color:var(--grey-600)}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{content:" ";display:block;border-bottom:1px solid var(--grey-100)}'],
    data: {
      animation: [trigger("rotate180", [state("up", style({
        transform: "rotate(0deg)"
      })), state("down", style({
        transform: "rotate(180deg)"
      })), transition("up <=> down", animate("300ms ease-in-out"))])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiselectDropdownComponent, [{
    type: Component,
    args: [{
      selector: "ada-multiselect-dropdown",
      standalone: true,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MultiselectDropdownComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => MultiselectDropdownComponent),
        multi: true
      }],
      imports: [OverlayModule, CommonModule, FormsModule, ReactiveFormsModule, CheckboxComponent, ChipsComponent],
      animations: [trigger("rotate180", [state("up", style({
        transform: "rotate(0deg)"
      })), state("down", style({
        transform: "rotate(180deg)"
      })), transition("up <=> down", animate("300ms ease-in-out"))])],
      template: `<div
  class="dropdown"
  #trigger="cdkOverlayOrigin"
  cdkOverlayOrigin
  #dropdownElement
  [ngClass]="{ disabled: dropdownConfig.isDropdownDisabled }"
>
  <div class="dropdown__labels">
    <ng-content select="[dropdown-label]"></ng-content>
  </div>
  <div
    #inputRef
    id="input-container{{ dropDownId }}"
    class="dropdown__select"
    [ngClass]="{
      'dropdown__select--active': isDropdownOpen,
      'dropdown__select--error': showError || dropdownConfig.hasError
    }"
  >
    <ng-content select="[dropdown-icon]"></ng-content>
    <input
      #dropDownInput
      type="text"
      id="myInput"
      [ngClass]="{
        'hide-input': selectedValues.length,
        'show-input': selectedValues.length === 0
      }"
      [formControl]="dropdownInput"
      (click)="onInputClick($event)"
      [placeholder]="dropdownConfig.placeholder"
      (blur)="onBlur()"
    />
    <div *ngIf="selectedValues.length" class="dropdown__select__selected-chips">
      <ng-container *ngFor="let item of selectedValues; let i = index">
        <ng-container
          *ngIf="i < dropdownConfig.chipsLimit && item.value !== 'All'"
        >
          <ada-chips
            class="chip"
            type="filled"
            size="small"
            [isSelected]="true"
            [isDisable]="item.isDisabled"
          >
            <span>{{ item.value }}</span>
            <img
              class="chip-close"
              src="assets/close-icon-dark.svg"
              alt="close Icon"
              (click)="closeChip(item)"
            />
          </ada-chips>
        </ng-container>
      </ng-container>
      <ada-chips
        *ngIf="extraChips > 0"
        class="chip"
        type="filled"
        size="small"
        [isSelected]="true"
      >
        <span> +{{ extraChips }}</span>
      </ada-chips>
    </div>
    <div>
      <img
        class="icon"
        (click)="toggleDropdown()"
        *ngIf="!inputValue || !isDropdownOpen"
        [ngClass]="{ open: isDropdownOpen }"
        src="assets/ic_caret_down.svg"
        alt="arrow"
        [@rotate180]="isDropdownOpen ? 'down' : 'up'"
      />
      <img
        class="icon"
        *ngIf="inputValue"
        (click)="clearInput($event)"
        src="assets/close-popover.svg"
        alt=""
      />
      <ng-template #dropdownTemplate>
        <!-- Overlay -->
        <div #cdkoverlay class="dropdown__overlay" id="dropdownOverlay">
          <ul class="dropdown__overlay__options">
            <cdk-virtual-scroll-viewport
              class="scroll-filled-2"
              itemSize="2"
              [style.height.px]="scrollHeight"
            >
              <ng-container *ngIf="sortedOptions.length == 0">
                <li class="dropdown__overlay__options--no-result">
                  <span>No items found</span>
                </li>
              </ng-container>
              <ng-container
                *cdkVirtualFor="let option of sortedOptions; let index"
              >
                <div>
                  <li
                    [ngClass]="{
                      'dropdown__overlay__options--prefix':
                        dropdownConfig.alignmentType === 'prefixCheckbox',
                      'dropdown__overlay__options--suffix':
                        dropdownConfig.alignmentType === 'suffixCheckbox'
                    }"
                    [class.disabled]="option.isDisabled"
                    #listItem
                  >
                    <label
                      *ngIf="dropdownConfig.alignmentType === 'suffixCheckbox'"
                      [for]="option.id"
                      >{{ option.value }}</label
                    >
                    <ada-checkbox
                      [checkboxId]="option.id"
                      [isDisable]="option.isDisabled"
                      [checked]="option.isSelected"
                      (onClick)="selectOption(option)"
                    >
                    </ada-checkbox>
                    <label
                      class="label"
                      *ngIf="dropdownConfig.alignmentType === 'prefixCheckbox'"
                      [for]="option.id"
                      >{{ option.value }}</label
                    >
                  </li>
                </div>

                <div
                  class="divider"
                  *ngIf="sortedOptions.length !== index + 1"
                ></div>
              </ng-container>
            </cdk-virtual-scroll-viewport>
          </ul>
        </div>
      </ng-template>
    </div>
  </div>
  <div class="dropdown__hint-text" *ngIf="!dropdownConfig.hasError">
    <ng-content select="[dropdown-hint]"></ng-content>
  </div>
  <div class="dropdown__error-text" *ngIf="dropdownConfig.hasError">
    <ng-content select="[dropdown-error]"></ng-content>
  </div>
</div>
`,
      styles: ['.dropdown{display:flex;flex-direction:column;gap:4px;width:inherit}.dropdown .dropdown__labels{font-weight:var(--bd-fnt-wt-md);color:var(--primary-1000);font-size:var(--bd-fnt-sz-3);line-height:var(--bd-fnt-ln-hgt-5);font-family:var(--bd-fnt-fm)}.dropdown .dropdown__select{position:relative;display:flex;flex-direction:row;flex:1 0 0;align-items:center;width:-webkit-fill-available;gap:12px;padding:12px 16px;border-radius:4px;border:1px solid var(--blue-grey-600)}.dropdown .dropdown__select.dropdown__select:hover{border:1px solid var(--blue-brand-primary);box-shadow:none}.dropdown .dropdown__select.dropdown__select--active,.dropdown .dropdown__select.dropdown__select--active:hover{border:2px solid var(--blue-brand-primary)}.dropdown .dropdown__select.dropdown__select--error,.dropdown .dropdown__select.dropdown__select--error:hover{border:2px solid var(--feedback-red)}.dropdown .dropdown__select #myInput{border:none;border-radius:5px;width:inherit;height:22px;outline:none}.dropdown .dropdown__select #myInput.hide-input{display:none}.dropdown .dropdown__select #myInput.show-input{display:inline-block}.dropdown .dropdown__select .dropdown__select__selected-chips{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center}.dropdown .dropdown__select .dropdown__select__selected-chips .chip{margin:4px}.dropdown .dropdown__select .dropdown__select__selected-chips .chip .chip-close{margin-left:10px}.dropdown .dropdown__select .icon{cursor:pointer}.dropdown .dropdown__select .open{transform:rotate(180deg)}.dropdown .dropdown__hint-text{margin-top:4px;color:var(--grey-400);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-5);font-family:var(--bd-fnt-fm)}.dropdown .dropdown__error-text{margin-top:4px;color:var(--red-600);font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-5);font-family:var(--bd-fnt-fm)}.disabled{opacity:.5}.disabled .label{color:var(--grey-400)}.disabled .dropdown__select,.disabled .dropdown__select.dropdown__select--error,.disabled .dropdown__select.dropdown__select--error:hover,.disabled .dropdown__select.dropdown__select:hover,.disabled .dropdown__select:hover{border:1px solid var(--grey-200);box-shadow:none}.disabled input:disabled{color:var(--grey-400);background:var(--white)}.disabled input{color:var(--grey-400);background:var(--white)}.disabled .dropdown__overlay{display:none}.disabled .dropdown__select img{opacity:.5;pointer-events:none}.disabled .dropdown__select__selected-chip{pointer-events:none}.dropdown__overlay{width:100%;font-family:var(--bd-fnt-fm);box-shadow:0 4px 8px 0 var(--blue-grey-600);border-radius:4px;padding:0}.dropdown__overlay .dropdown__overlay__options{cursor:pointer;list-style-type:none;padding:0;background-color:var(--white);border:1px solid var(--blue-grey-1100);border-radius:4px;margin:0}.dropdown__overlay .dropdown__overlay__options .dropdown__overlay__options--no-result{padding:12px 16px;display:flex;align-items:center;justify-content:center;margin-top:4px;font-family:var(--cpt-fnt-fm);font-size:var(--cpt-fnt-sz-2);line-height:var(--cpt-fnt-ln-hgt-1);font-weight:var(--cpt-fnt-wt-rg);color:var(--primary-900);line-height:18px;font-size:400}.dropdown__overlay .dropdown__overlay__options .dropdown__overlay__options--prefix{width:inherit;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:wrap}.dropdown__overlay .dropdown__overlay__options .dropdown__overlay__options--prefix .label{margin-top:4px}.dropdown__overlay .dropdown__overlay__options .dropdown__overlay__options--prefix .dropdown__overlay__options---prefix.disabled{color:gray}.dropdown__overlay .dropdown__overlay__options .dropdown__overlay__options--suffix{display:flex;flex-direction:row;justify-content:space-between;align-items:center;flex-wrap:wrap}.dropdown__overlay .dropdown__overlay__options .dropdown__overlay__options--suffix .dropdown__overlay__options--suffix.disabled{color:var(--grey-600)}.dropdown__overlay .dropdown__overlay__options .divider{content:" ";display:block;border-bottom:1px solid var(--grey-100)}\n']
    }]
  }], () => [{
    type: Overlay
  }, {
    type: ViewContainerRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }], {
    el: [{
      type: ViewChild,
      args: ["dropdownElement"]
    }],
    inputEl: [{
      type: ViewChild,
      args: ["inputRef"]
    }],
    inputElement: [{
      type: ViewChild,
      args: ["dropDownInput"]
    }],
    listItemElements: [{
      type: ViewChildren,
      args: ["listItem"]
    }],
    dropdownConfig: [{
      type: Input
    }],
    onOptionsChange: [{
      type: Output
    }],
    dropdownTemplate: [{
      type: ViewChild,
      args: ["dropdownTemplate"]
    }],
    cdkOverlayEl: [{
      type: ViewChild,
      args: ["cdkoverlay"]
    }],
    inputValue: [{
      type: ViewChild,
      args: ["dropdownContainer", {
        read: ViewContainerRef
      }]
    }]
  });
})();
var DropdownComponent = class _DropdownComponent {
  overlay;
  viewContainerRef;
  renderer;
  elementRef;
  dropDownConfig = {
    isDisabled: false,
    isIconShown: true,
    placeholder: "Search and select",
    dropdownOptions: [{
      id: 1,
      option: "Option 1",
      isDisabled: false,
      isSelected: true
    }, {
      id: 2,
      option: "Option 2",
      isDisabled: false,
      isSelected: false
    }, {
      id: 3,
      option: "Option 3",
      isDisabled: false,
      isSelected: false
    }],
    defaultItemSize: 5,
    hintText: "Hint Text",
    errorText: "Error",
    labelText: "Label"
  };
  dropdownIndex = Math.floor(Math.random() * 1e3) + 1;
  el;
  trigger;
  overlayTemplate;
  listItemElements;
  caretIcon;
  inputControl = new FormControl("");
  valueSelected = new EventEmitter();
  selectedOption;
  sortedOptions = [];
  scrollHeight = 36;
  overlayRef = null;
  hasError = false;
  isDropdownOpen = false;
  isIconClicked = false;
  isInputClicked = false;
  isOptionClicked = false;
  validators;
  isInputDisabled;
  constructor(overlay, viewContainerRef, renderer, elementRef) {
    this.overlay = overlay;
    this.viewContainerRef = viewContainerRef;
    this.renderer = renderer;
    this.elementRef = elementRef;
  }
  onClick(targetElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.onDocumentClick(targetElement);
    }
  }
  ngOnInit() {
    if (this.dropDownConfig.dropdownOptions) {
      this.dropDownConfig.dropdownOptions.forEach((option) => {
        if (option.isSelected) {
          this.selectOption(option);
        }
      });
    }
    this.isInputDisabled = this.dropDownConfig.isDisabled ? this.dropDownConfig?.isDisabled : false;
    this.sortedOptions = this.dropDownConfig.dropdownOptions instanceof Array ? this.dropDownConfig.dropdownOptions : [];
    this.inputControl.valueChanges.subscribe((value) => {
      this.updateDropdownOptions(value);
      this.hasError = false;
    });
  }
  onInputClick() {
    if (this.dropDownConfig.isDisabled) {
      event?.stopPropagation();
    } else {
      this.isInputClicked = true;
      this.openOverlay();
    }
  }
  toggleDropdown(event2) {
    if (this.dropDownConfig.isDisabled) {
      return;
    }
    event2.stopPropagation();
    this.isIconClicked = !this.isIconClicked;
    if (this.isDropdownOpen) {
      this.closeDropdown();
    } else {
      this.openOverlay();
    }
  }
  openOverlay() {
    if (this.isDropdownOpen && this.isIconClicked || this.isDropdownOpen && this.isInputClicked) {
      return;
    }
    this.isDropdownOpen = true;
    const origin = document.getElementById("inputContainer" + this.dropdownIndex);
    const config = {
      positionStrategy: this.overlay.position().flexibleConnectedTo(document.getElementById("inputContainer" + this.dropdownIndex)).withPositions(this.getPosition()).withPush(false),
      width: origin?.offsetWidth + "px",
      backdropClass: "cdk-overlay-transparent-backdrop",
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    };
    this.overlayRef = this.overlay.create(config);
    const templatePortal = new TemplatePortal(this.overlayTemplate, this.viewContainerRef);
    this.overlayRef.attach(templatePortal);
    this.scrollHeight = this.getItemHeight();
  }
  onDocumentClick(eventTarget) {
    const dropdownElement = this?.el?.nativeElement;
    const target = eventTarget;
    const isInsideComponent = dropdownElement?.contains(target);
    if (target.classList && target.classList.contains("disabled")) {
      return;
    }
    if (target.tagName && target.tagName.toLowerCase() === "li") {
      this.isOptionClicked = true;
    }
    if (isInsideComponent) {
      this.inputControl.markAsTouched();
    }
    if (!isInsideComponent) {
      this.onFocusOut();
      this.closeDropdown();
    }
  }
  updateDropdownOptions(value) {
    if (!value) {
      this.sortedOptions = this.dropDownConfig.dropdownOptions instanceof Array ? this.dropDownConfig.dropdownOptions : [];
    } else {
      const lowerCaseInput = value?.toLowerCase();
      if (this.dropDownConfig && this.dropDownConfig.dropdownOptions) {
        this.sortedOptions = [...this.dropDownConfig?.dropdownOptions.filter((item) => item.option.toLowerCase().includes(lowerCaseInput))];
      }
      this.sortedOptions.sort((a, b) => a.option.localeCompare(b.option));
    }
    this.scrollHeight = this.getItemHeight();
  }
  getPosition() {
    return [{
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top",
      offsetY: 4,
      panelClass: ["center", "center"]
    }, {
      // Add a second position to open above if there is not enough space below
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom",
      offsetY: -4,
      panelClass: ["center", "center"]
    }];
  }
  closeDropdown() {
    this.isInputClicked = false;
    this.isIconClicked = false;
    this.isDropdownOpen = false;
    this.isOptionClicked = false;
    this.overlayRef?.detach();
    this.writeValue(this.selectedOption);
  }
  getItemHeight() {
    const maxVisibleItems = this.dropDownConfig.defaultItemSize || 5;
    const sortedOptionsLength = this.sortedOptions.length;
    const itemHeight = 36;
    const dividerHeight = 0.68;
    if (sortedOptionsLength > maxVisibleItems) {
      return itemHeight * maxVisibleItems + dividerHeight * maxVisibleItems;
    }
    if (sortedOptionsLength > 0) {
      return itemHeight * sortedOptionsLength + (dividerHeight * sortedOptionsLength - 1);
    }
    return this.sortedOptions.length == 0 ? 42 : itemHeight;
  }
  selectOption(selectedOption) {
    if (selectedOption.isDisabled) {
      return;
    }
    if (selectedOption) {
      this.selectedOption = selectedOption;
      this.inputControl.setValue(this.selectedOption.option);
      this.hasError = false;
      if (this.dropDownConfig.dropdownOptions) {
        for (let i = 0; i < this.dropDownConfig.dropdownOptions.length; i++) {
          const currentOption = this.dropDownConfig.dropdownOptions[i];
          if (currentOption.option === selectedOption.option) {
            this.dropDownConfig.dropdownOptions[i].isSelected = true;
          } else {
            this.dropDownConfig.dropdownOptions[i].isSelected = false;
          }
        }
      }
    }
    this.closeDropdown();
    this.valueSelected.emit(this.selectedOption);
  }
  onChange = () => {
  };
  onTouch = () => {
  };
  writeValue(value) {
    this.onChange(value);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  validate(control) {
    if (this.hasRequiredValidator(control)) {
      this.validators = {
        required: true
      };
    }
    control.statusChanges?.subscribe((status) => {
      this.hasError = status === "INVALID";
    });
    return null;
  }
  hasRequiredValidator(control) {
    const validator = control.validator && control.validator({});
    return validator && validator["required"];
  }
  onFocusOut() {
    if (this.selectedOption && this.selectedOption.option) {
      this.inputControl.setValue(this.selectedOption.option);
      this.hasError = false;
    } else {
      if (this.inputControl.touched && !this.isOptionClicked) {
        this.hasError = true;
      }
      this.selectedOption = {};
    }
  }
  clearInput(event2) {
    this.inputControl.setValue("");
    this.updateDropdownOptions("");
    event2.stopPropagation();
  }
  static ɵfac = function DropdownComponent_Factory(t) {
    return new (t || _DropdownComponent)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DropdownComponent,
    selectors: [["ada-dropdown"]],
    viewQuery: function DropdownComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c90, 5);
        ɵɵviewQuery(_c91, 5);
        ɵɵviewQuery(_c65, 5);
        ɵɵviewQuery(_c92, 5);
        ɵɵviewQuery(_c83, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.el = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.trigger = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlayTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.caretIcon = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listItemElements = _t);
      }
    },
    hostBindings: function DropdownComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function DropdownComponent_click_HostBindingHandler($event) {
          return ctx.onClick($event.target);
        }, false, ɵɵresolveDocument);
      }
    },
    inputs: {
      dropDownConfig: "dropDownConfig"
    },
    outputs: {
      valueSelected: "valueSelected"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _DropdownComponent),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _DropdownComponent),
      multi: true
    }]), ɵɵStandaloneFeature],
    decls: 15,
    vars: 22,
    consts: [["cdkOverlayOrigin", "", 1, "dropdown", 3, "ngClass"], ["cdk", "", "trigger", "cdkOverlayOrigin"], ["class", "dropdown__labels", 4, "ngIf"], [1, "dropdown__input-container", 3, "id", "ngClass", "click"], [4, "ngIf"], ["type", "text", "id", "dropDownInput", "autocomplete", "off", 3, "placeholder", "formControl", "disabled", "readonly"], ["dropDownInput", ""], ["src", "assets/ic_caret_down.svg", "alt", "caret Icon", 3, "click", 4, "ngIf"], ["class", "icon", "src", "assets/sm-close-disabled.svg", "alt", "close icon", 3, "click", 4, "ngIf"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayBackdropClass"], ["overlayTemplate", ""], ["class", "dropdown__hint-text", 4, "ngIf"], ["class", "dropdown__error-text", 4, "ngIf"], [1, "dropdown__labels"], [1, "dropdown__labels__text"], ["src", "assets/ic_selection_black.svg", "alt", "Icon"], ["src", "assets/ic_caret_down.svg", "alt", "caret Icon", 3, "click"], ["caretIcon", ""], ["src", "assets/sm-close-disabled.svg", "alt", "close icon", 1, "icon", 3, "click"], ["id", "dropdownOverlay", 1, "dropdown__overlay"], [1, "dropdown__overlay__options"], ["itemSize", "2", 1, "scroll-filled-2"], [4, "ngFor", "ngForOf"], [1, "dropdown__overlay__options--no-result"], ["listItem", ""], [1, "dropdown__overlay__options--list", 3, "click"], ["class", "divider", 4, "ngIf"], [1, "divider"], [1, "dropdown__hint-text"], [1, "dropdown__error-text"]],
    template: function DropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵtemplate(3, DropdownComponent_div_3_Template, 3, 1, "div", 2);
        ɵɵelementStart(4, "div", 3);
        ɵɵlistener("click", function DropdownComponent_Template_div_click_4_listener() {
          return ctx.onInputClick();
        });
        ɵɵtemplate(5, DropdownComponent_div_5_Template, 2, 0, "div", 4);
        ɵɵelement(6, "input", 5, 6);
        ɵɵtemplate(8, DropdownComponent_img_8_Template, 2, 1, "img", 7)(9, DropdownComponent_img_9_Template, 1, 0, "img", 8)(10, DropdownComponent_ng_template_10_Template, 5, 4, "ng-template", 9, 10, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementStart(12, "div");
        ɵɵtemplate(13, DropdownComponent_span_13_Template, 2, 1, "span", 11)(14, DropdownComponent_span_14_Template, 2, 1, "span", 12);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        const _r1 = ɵɵreference(2);
        ɵɵproperty("ngClass", ɵɵpureFunction1(17, _c66, ctx.dropDownConfig == null ? null : ctx.dropDownConfig.isDisabled));
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.dropDownConfig == null ? null : ctx.dropDownConfig.labelText);
        ɵɵadvance(1);
        ɵɵpropertyInterpolate1("id", "inputContainer", ctx.dropdownIndex, "");
        ɵɵproperty("ngClass", ɵɵpureFunction2(19, _c93, ctx.isDropdownOpen, ctx.hasError));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.dropDownConfig == null ? null : ctx.dropDownConfig.isIconShown);
        ɵɵadvance(1);
        ɵɵproperty("placeholder", ctx.dropDownConfig == null ? null : ctx.dropDownConfig.placeholder)("formControl", ctx.inputControl)("disabled", ctx.isInputDisabled)("readonly", ctx.isInputDisabled);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.inputControl.value || !ctx.isDropdownOpen);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.inputControl.value && ctx.isDropdownOpen);
        ɵɵadvance(1);
        ɵɵproperty("cdkConnectedOverlayOrigin", _r1)("cdkConnectedOverlayPositions", ctx.getPosition())("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayBackdropClass", "backdrop-background");
        ɵɵadvance(3);
        ɵɵproperty("ngIf", !ctx.hasError);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.hasError);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, OverlayModule, CdkConnectedOverlay, CdkOverlayOrigin, CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport, PortalModule, ScrollingModule, FormsModule, DefaultValueAccessor, NgControlStatus, ReactiveFormsModule, FormControlDirective],
    styles: ['.dropdown[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;width:inherit}.dropdown[_ngcontent-%COMP%]   .dropdown__labels[_ngcontent-%COMP%]{line-height:var(--bd-fnt-ln-hgt-3)}.dropdown[_ngcontent-%COMP%]   .dropdown__labels[_ngcontent-%COMP%]   .dropdown__labels__text[_ngcontent-%COMP%]{font-weight:var(--bd-fnt-wt-md);color:var(--primary-1000);font-size:var(--bd-fnt-sz-3);font-family:var(--bd-fnt-fm)}.dropdown[_ngcontent-%COMP%]   .dropdown__input-container[_ngcontent-%COMP%]{position:relative;display:flex;flex:1 0 0;align-items:center;width:-webkit-fill-available;height:24px;gap:8px;padding:12px 16px;border-radius:4px;border:1px solid var(--blue-grey-600);box-shadow:0 1px 2px 0 var(--blue-grey-600)}.dropdown[_ngcontent-%COMP%]   .dropdown__input-container[_ngcontent-%COMP%]   #dropDownInput[_ngcontent-%COMP%]{border:none;border-radius:5px;width:inherit;line-height:var(--bd-fnt-ln-hgt-2);font-size:var(--hd-fnt-sz-6);color:var(--primary-1000);outline:none}.dropdown[_ngcontent-%COMP%]   .dropdown__input-container[_ngcontent-%COMP%]:hover{border:1px solid var(--blue-brand-primary);box-shadow:none}.dropdown[_ngcontent-%COMP%]   .dropdown__input-container.active[_ngcontent-%COMP%]{border:2px solid var(--blue-brand-primary)}.dropdown[_ngcontent-%COMP%]   .dropdown__input-container.error[_ngcontent-%COMP%]{border:2px solid var(--feedback-red)}.dropdown[_ngcontent-%COMP%]   .dropdown__overlay[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;width:100%;display:none}.dropdown[_ngcontent-%COMP%]   .dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0;background-color:var(--white);border:1px solid var(--blue-grey-1100)}.dropdown[_ngcontent-%COMP%]   .dropdown__hint-text[_ngcontent-%COMP%]{color:var(--grey-400);cursor:default;font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-5);font-family:var(--bd-fnt-fm)}.dropdown[_ngcontent-%COMP%]   .dropdown__error-text[_ngcontent-%COMP%]{color:var(--red-600);font-weight:var(--hd-fnt-wt-rg);cursor:not-allowed;font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-5);font-family:var(--bd-fnt-fm)}.disabled[_ngcontent-%COMP%]{opacity:.5}.disabled[_ngcontent-%COMP%]   .dropdown__labels[_ngcontent-%COMP%], .disabled[_ngcontent-%COMP%]   .dropdown__labels[_ngcontent-%COMP%]   .dropdown__labels__text[_ngcontent-%COMP%]{color:var(--grey-400)}.disabled[_ngcontent-%COMP%]   .dropdown__input-container[_ngcontent-%COMP%]:hover{border:1px solid var(--grey-400);box-shadow:none}.disabled[_ngcontent-%COMP%]   .dropdown__input-container[_ngcontent-%COMP%]{box-shadow:none}.disabled[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled{color:var(--grey-400);background:var(--white)}.disabled[_ngcontent-%COMP%]   .dropdown__overlay[_ngcontent-%COMP%]{display:none}.disabled[_ngcontent-%COMP%]   .dropdown__input-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.5}.dropdown__overlay[_ngcontent-%COMP%]{width:100%;font-family:var(--bd-fnt-fm);box-sizing:border-box;border:1px var(--grey-100);box-shadow:0 4px 8px 0 var(--blue-grey-600);border-radius:4px;padding:0}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]{cursor:pointer;list-style-type:none;padding:0;margin:0;background-color:var(--white);border-radius:4px}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .cdk-virtual-scrollable[_ngcontent-%COMP%]{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .dropdown__overlay__options--list[_ngcontent-%COMP%]{padding:8px 16px;color:var(--primary-1000);font-size:var(--hd-fnt-sz-7);height:20px}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .dropdown__overlay__options--no-result[_ngcontent-%COMP%]{padding:12px 16px;display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--primary-900);line-height:18px;font-size:400}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .dropdown__overlay__options--list.selected[_ngcontent-%COMP%]{background-color:var(--primary-100)}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .dropdown__overlay__options--list[_ngcontent-%COMP%]:hover{background-color:var(--blue-grey-300)}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .dropdown__overlay__options--list.disabled[_ngcontent-%COMP%]{color:gray}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{content:" ";display:block;border-bottom:1px solid var(--grey-100)}'],
    data: {
      animation: [trigger("rotate180", [state("up", style({
        transform: "rotate(0deg)"
      })), state("down", style({
        transform: "rotate(180deg)"
      })), transition("up <=> down", animate("300ms ease-in-out"))])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownComponent, [{
    type: Component,
    args: [{
      selector: "ada-dropdown",
      standalone: true,
      imports: [CommonModule, OverlayModule, PortalModule, ScrollingModule, FormsModule, ReactiveFormsModule],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DropdownComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => DropdownComponent),
        multi: true
      }],
      animations: [trigger("rotate180", [state("up", style({
        transform: "rotate(0deg)"
      })), state("down", style({
        transform: "rotate(180deg)"
      })), transition("up <=> down", animate("300ms ease-in-out"))])],
      template: `<div
  #cdk
  #trigger="cdkOverlayOrigin"
  cdkOverlayOrigin
  class="dropdown"
  [ngClass]="{ disabled: dropDownConfig?.isDisabled }"
>
  <div *ngIf="dropDownConfig?.labelText" class="dropdown__labels">
    <label class="dropdown__labels__text">
      {{ dropDownConfig.labelText }}
    </label>
  </div>
  <div
    id="inputContainer{{ dropdownIndex }}"
    class="dropdown__input-container"
    [ngClass]="{ active: isDropdownOpen, error: hasError }"
    (click)="onInputClick()"
  >
    <div *ngIf="dropDownConfig?.isIconShown">
      <img src="assets/ic_selection_black.svg" alt="Icon" />
    </div>
    <input
      #dropDownInput
      type="text"
      id="dropDownInput"
      [placeholder]="dropDownConfig?.placeholder"
      [formControl]="inputControl"
      [disabled]="isInputDisabled"
      [readonly]="isInputDisabled"
      autocomplete="off"
    />
    <img
      #caretIcon
      *ngIf="!inputControl.value || !isDropdownOpen"
      src="assets/ic_caret_down.svg"
      alt="caret Icon"
      (click)="toggleDropdown($event)"
      [@rotate180]="isDropdownOpen ? 'down' : 'up'"
    />
    <img
      class="icon"
      *ngIf="inputControl.value && isDropdownOpen"
      (click)="clearInput($event)"
      src="assets/sm-close-disabled.svg"
      alt="close icon"
    />

    <ng-template
      #overlayTemplate
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="trigger"
      [cdkConnectedOverlayPositions]="getPosition()"
      [cdkConnectedOverlayHasBackdrop]="true"
      [cdkConnectedOverlayBackdropClass]="'backdrop-background'"
    >
      <div class="dropdown__overlay" id="dropdownOverlay">
        <ul class="dropdown__overlay__options">
          <cdk-virtual-scroll-viewport
            class="scroll-filled-2"
            itemSize="2"
            [style.height.px]="scrollHeight"
          >
            <ng-container *ngIf="sortedOptions.length == 0">
              <li #listItem class="dropdown__overlay__options--no-result">
                <span>No items found</span>
              </li>
            </ng-container>
            <ng-container
              *ngFor="let dropdownOption of sortedOptions; let index = index"
            >
              <li
                #listItem
                class="dropdown__overlay__options--list"
                [class.selected]="dropdownOption.isSelected"
                [class.disabled]="dropdownOption.isDisabled"
                (click)="selectOption(dropdownOption)"
              >
                <span>{{ dropdownOption.option }}</span>
              </li>
              <div
                class="divider"
                *ngIf="sortedOptions.length !== index + 1"
              ></div>
            </ng-container>
          </cdk-virtual-scroll-viewport>
        </ul>
      </div>
    </ng-template>
  </div>
  <div>
    <span *ngIf="!hasError" class="dropdown__hint-text">
      {{ dropDownConfig.hintText }}
    </span>
    <span *ngIf="hasError" class="dropdown__error-text">
      {{ dropDownConfig.errorText }}
    </span>
  </div>
</div>
`,
      styles: ['.dropdown{display:flex;flex-direction:column;gap:4px;width:inherit}.dropdown .dropdown__labels{line-height:var(--bd-fnt-ln-hgt-3)}.dropdown .dropdown__labels .dropdown__labels__text{font-weight:var(--bd-fnt-wt-md);color:var(--primary-1000);font-size:var(--bd-fnt-sz-3);font-family:var(--bd-fnt-fm)}.dropdown .dropdown__input-container{position:relative;display:flex;flex:1 0 0;align-items:center;width:-webkit-fill-available;height:24px;gap:8px;padding:12px 16px;border-radius:4px;border:1px solid var(--blue-grey-600);box-shadow:0 1px 2px 0 var(--blue-grey-600)}.dropdown .dropdown__input-container #dropDownInput{border:none;border-radius:5px;width:inherit;line-height:var(--bd-fnt-ln-hgt-2);font-size:var(--hd-fnt-sz-6);color:var(--primary-1000);outline:none}.dropdown .dropdown__input-container:hover{border:1px solid var(--blue-brand-primary);box-shadow:none}.dropdown .dropdown__input-container.active{border:2px solid var(--blue-brand-primary)}.dropdown .dropdown__input-container.error{border:2px solid var(--feedback-red)}.dropdown .dropdown__overlay{position:absolute;top:100%;left:0;width:100%;display:none}.dropdown .dropdown__overlay .dropdown__overlay__options{list-style-type:none;padding:0;margin:0;background-color:var(--white);border:1px solid var(--blue-grey-1100)}.dropdown .dropdown__hint-text{color:var(--grey-400);cursor:default;font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-5);font-family:var(--bd-fnt-fm)}.dropdown .dropdown__error-text{color:var(--red-600);font-weight:var(--hd-fnt-wt-rg);cursor:not-allowed;font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-4);line-height:var(--bd-fnt-ln-hgt-5);font-family:var(--bd-fnt-fm)}.disabled{opacity:.5}.disabled .dropdown__labels,.disabled .dropdown__labels .dropdown__labels__text{color:var(--grey-400)}.disabled .dropdown__input-container:hover{border:1px solid var(--grey-400);box-shadow:none}.disabled .dropdown__input-container{box-shadow:none}.disabled input:disabled{color:var(--grey-400);background:var(--white)}.disabled .dropdown__overlay{display:none}.disabled .dropdown__input-container img{opacity:.5}.dropdown__overlay{width:100%;font-family:var(--bd-fnt-fm);box-sizing:border-box;border:1px var(--grey-100);box-shadow:0 4px 8px 0 var(--blue-grey-600);border-radius:4px;padding:0}.dropdown__overlay .dropdown__overlay__options{cursor:pointer;list-style-type:none;padding:0;margin:0;background-color:var(--white);border-radius:4px}.dropdown__overlay .dropdown__overlay__options .cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.dropdown__overlay .dropdown__overlay__options .dropdown__overlay__options--list{padding:8px 16px;color:var(--primary-1000);font-size:var(--hd-fnt-sz-7);height:20px}.dropdown__overlay .dropdown__overlay__options .dropdown__overlay__options--no-result{padding:12px 16px;display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--primary-900);line-height:18px;font-size:400}.dropdown__overlay .dropdown__overlay__options .dropdown__overlay__options--list.selected{background-color:var(--primary-100)}.dropdown__overlay .dropdown__overlay__options .dropdown__overlay__options--list:hover{background-color:var(--blue-grey-300)}.dropdown__overlay .dropdown__overlay__options .dropdown__overlay__options--list.disabled{color:gray}.dropdown__overlay .dropdown__overlay__options .divider{content:" ";display:block;border-bottom:1px solid var(--grey-100)}\n']
    }]
  }], () => [{
    type: Overlay
  }, {
    type: ViewContainerRef
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    dropDownConfig: [{
      type: Input
    }],
    el: [{
      type: ViewChild,
      args: ["cdk"]
    }],
    trigger: [{
      type: ViewChild,
      args: ["trigger"]
    }],
    overlayTemplate: [{
      type: ViewChild,
      args: ["overlayTemplate"]
    }],
    listItemElements: [{
      type: ViewChildren,
      args: ["listItem"]
    }],
    caretIcon: [{
      type: ViewChild,
      args: ["caretIcon"]
    }],
    valueSelected: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["document:click", ["$event.target"]]
    }]
  });
})();
var PaginationService = class _PaginationService {
  getPager(totalItems, currentPage = 1, pageSize = 10) {
    let totalPages = Math.ceil(totalItems / pageSize);
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    let startPage, endPage;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 2) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 7;
      }
    }
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    let pages = this.getPages(currentPage, totalPages);
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  }
  // create an array of pages to ng-repeat in the pager control
  getPages(current, total) {
    if (total <= 7) {
      return [...Array(total).keys()].map((x) => ++x);
    }
    if (current > 5) {
      if (current >= total - 4) {
        return [1, -1, total - 4, total - 3, total - 2, total - 1, total];
      } else {
        return [1, -1, current - 1, current, current + 1, -1, total];
      }
    }
    return [1, 2, 3, 4, 5, -1, total];
  }
  static ɵfac = function PaginationService_Factory(t) {
    return new (t || _PaginationService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PaginationService,
    factory: _PaginationService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PaginationComponent = class _PaginationComponent {
  pagerService;
  overlay;
  viewContainerRef;
  cd;
  paginationOutputDetails = new EventEmitter();
  overlayTemplate;
  el;
  trigger;
  pageInput;
  overlayRef = null;
  currentPageNumber = 1;
  totalPages = 0;
  selectedItemPerPageOption;
  pager = {};
  newPageNumber;
  scrollHeight = 36;
  isPageSizeOverlayOpen = false;
  isGoToPageInputActive = false;
  isMobile = false;
  isTablet = false;
  isDesktop = true;
  paginationConfig = {
    paginationSize: "small",
    alignment: "right",
    paginationType: "withPageSelection",
    itemPerPageOptions: [{
      id: 1,
      option: 10,
      isDisabled: false,
      isSelected: true
    }, {
      id: 2,
      option: 20,
      isDisabled: false,
      isSelected: false
    }, {
      id: 3,
      option: 30,
      isDisabled: false,
      isSelected: false
    }, {
      id: 4,
      option: 40,
      isDisabled: false,
      isSelected: false
    }, {
      id: 5,
      option: 50,
      isDisabled: false,
      isSelected: false
    }],
    recordsPerPage: 10,
    totalRecordsCount: 0
  };
  sortedOptions;
  onResize(event2) {
  }
  constructor(pagerService, overlay, viewContainerRef, cd) {
    this.pagerService = pagerService;
    this.overlay = overlay;
    this.viewContainerRef = viewContainerRef;
    this.cd = cd;
    this.newPageNumber = 1;
  }
  checkDeviceType() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      this.isMobile = true;
      this.isDesktop = false;
      this.isTablet = false;
    } else if (screenWidth > 767 && screenWidth < 1279) {
      this.isTablet = true;
      this.isDesktop = false;
      this.isMobile = false;
    } else {
      this.isDesktop = true;
      this.isTablet = false;
      this.isMobile = false;
    }
  }
  paginationParams = {
    pageNumber: "1",
    itemsPerPage: "5",
    totalPages: 10,
    itemPerPageOptions: this.sortedOptions
  };
  ngOnInit() {
    this.totalPages = Math.ceil(this.paginationConfig.totalRecordsCount / this.paginationConfig.recordsPerPage);
    this.getData(this.currentPageNumber);
    this.paginationConfig.itemPerPageOptions.forEach((option) => {
      if (option.isSelected) {
        this.selectOption(option, false);
      }
    });
    this.updateDropdownOptions(this.selectedItemPerPageOption);
  }
  next() {
    this.getData(this.currentPageNumber + 1);
    this.paginationOutputDetails.emit(this.paginationParams);
  }
  prev() {
    this.getData(this.currentPageNumber - 1);
    this.paginationOutputDetails.emit(this.paginationParams);
  }
  getData(pageNo, emit = false) {
    this.paginationParams.pageNumber = `${pageNo}`;
    this.paginationParams.totalPages = this.totalPages;
    this.currentPageNumber = Number(pageNo);
    this.setPagination(pageNo);
    if (emit) {
      this.paginationOutputDetails.emit(this.paginationParams);
    }
  }
  setPagination(pageNo) {
    pageNo = Number(pageNo);
    this.currentPageNumber = pageNo;
    this.pager = this.pagerService.getPager(this.paginationConfig.totalRecordsCount, pageNo, this.paginationConfig.recordsPerPage);
  }
  selectOption(selectedOption, emit = false) {
    if (selectedOption.isDisabled) {
      return;
    }
    if (selectedOption) {
      this.selectedItemPerPageOption = selectedOption;
      this.paginationConfig.recordsPerPage = this.selectedItemPerPageOption.option;
      this.totalPages = Math.ceil(this.paginationConfig.totalRecordsCount / this.paginationConfig.recordsPerPage);
      this.getData(this.currentPageNumber);
      if (this.paginationConfig.itemPerPageOptions) {
        for (let i = 0; i < this.paginationConfig.itemPerPageOptions.length; i++) {
          const currentOption = this.paginationConfig.itemPerPageOptions[i];
          if (currentOption.option === selectedOption.option) {
            this.paginationConfig.itemPerPageOptions[i].isSelected = true;
          } else {
            this.paginationConfig.itemPerPageOptions[i].isSelected = false;
          }
        }
      }
    }
    this.updateDropdownOptions(this.selectedItemPerPageOption);
    if (emit) {
      this.paginationOutputDetails.emit(this.paginationParams);
      console.log(this.paginationParams);
    }
    this.closeOverlay();
  }
  ngAfterViewChecked() {
    this.totalPages = Math.ceil(this.paginationConfig.totalRecordsCount / this.paginationConfig.recordsPerPage);
    const count = this.totalPages <= this.currentPageNumber ? this.totalPages : this.currentPageNumber;
    this.currentPageNumber = count;
    this.getData(count);
    this.currentPageNumber = 1;
    this.currentPageNumber = +this.paginationParams.pageNumber || this.currentPageNumber;
    this.paginationParams.itemsPerPage = `${this.paginationConfig.recordsPerPage}`;
    this.totalPages = Math.ceil(this.paginationConfig.totalRecordsCount / this.paginationConfig.recordsPerPage);
    this.pager = this.pagerService.getPager(this.paginationConfig.totalRecordsCount, this.currentPageNumber, this.paginationConfig.recordsPerPage);
    this.paginationParams.itemPerPageOptions = this.sortedOptions;
    this.cd.detectChanges();
  }
  goToPage() {
    if (this.newPageNumber >= 1 && this.newPageNumber <= this.totalPages) {
      this.getData(this.newPageNumber);
      this.paginationOutputDetails.emit(this.paginationParams);
    } else {
      this.validatePageNumber();
      throw new Error("Invalid page number. Please enter a valid page number.");
    }
  }
  openOverlay() {
    if (!this.isPageSizeOverlayOpen) {
      this.isPageSizeOverlayOpen = true;
      const origin = document.getElementById("inputContainer");
      const config = {
        positionStrategy: this.overlay.position().flexibleConnectedTo(document.getElementById("inputContainer")).withPositions(this.getPosition()).withPush(false),
        width: origin?.offsetWidth + "px",
        hasBackdrop: true,
        backdropClass: "cdk-overlay-transparent-backdrop",
        scrollStrategy: this.overlay.scrollStrategies.reposition()
      };
      this.overlayRef = this.overlay.create(config);
      const templatePortal = new TemplatePortal(this.overlayTemplate, this.viewContainerRef);
      this.overlayRef?.attach(templatePortal);
      this.scrollHeight = this.getItemHeight();
      this.overlayRef.backdropClick().subscribe(() => {
        this.overlayRef?.detach();
        this.isPageSizeOverlayOpen = false;
      });
    }
  }
  closeOverlay() {
    this.overlayRef?.detach();
    this.isPageSizeOverlayOpen = false;
  }
  updateDropdownOptions(value) {
    if (!value) {
      this.sortedOptions = this.paginationConfig.itemPerPageOptions instanceof Array ? this.paginationConfig.itemPerPageOptions : [];
    } else {
      if (this.paginationConfig && this.paginationConfig.itemPerPageOptions) {
        const selectedOption = this.paginationConfig.itemPerPageOptions.find((item) => item.isSelected);
        const optionsWithoutSelected = this.paginationConfig.itemPerPageOptions.filter((item) => !item.isSelected);
        const sortedWithoutSelected = optionsWithoutSelected.sort((a, b) => a.option - b.option);
        if (selectedOption) {
          this.sortedOptions = [selectedOption, ...sortedWithoutSelected];
        } else {
          this.sortedOptions = sortedWithoutSelected;
        }
        this.paginationParams.itemPerPageOptions = this.sortedOptions;
      }
    }
  }
  getItemHeight() {
    const maxVisibleItems = 3;
    const sortedOptionsLength = this.paginationConfig.itemPerPageOptions.length;
    const itemHeight = 36;
    const dividerHeight = 0.68;
    if (sortedOptionsLength > maxVisibleItems) {
      return itemHeight * maxVisibleItems + dividerHeight * maxVisibleItems;
    }
    if (sortedOptionsLength > 0) {
      return itemHeight * sortedOptionsLength + (dividerHeight * sortedOptionsLength - 1);
    }
    return this.paginationConfig.itemPerPageOptions.length == 0 ? 42 : itemHeight;
  }
  getPosition() {
    return [{
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top",
      offsetY: 4,
      panelClass: ["center", "center"]
    }, {
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom",
      offsetY: -4,
      panelClass: ["center", "center"]
    }];
  }
  onFocus(event2) {
    this.isGoToPageInputActive = true;
    const sourceElement = event2.target;
    sourceElement.focus();
  }
  onFocusOut() {
    this.isGoToPageInputActive = false;
  }
  validatePageNumber() {
    const inputValue = +this.pageInput.nativeElement.value;
    if (inputValue < 1 || inputValue > this.totalPages) {
      this.pageInput.nativeElement.classList.add("error-state");
    } else {
      this.pageInput.nativeElement.classList.remove("error-state");
    }
  }
  static ɵfac = function PaginationComponent_Factory(t) {
    return new (t || _PaginationComponent)(ɵɵdirectiveInject(PaginationService), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PaginationComponent,
    selectors: [["ada-pagination"]],
    viewQuery: function PaginationComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c65, 5);
        ɵɵviewQuery(_c90, 5);
        ɵɵviewQuery(_c91, 5);
        ɵɵviewQuery(_c94, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlayTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.el = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.trigger = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pageInput = _t.first);
      }
    },
    hostBindings: function PaginationComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("resize", function PaginationComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, ɵɵresolveWindow);
      }
    },
    inputs: {
      paginationConfig: "paginationConfig"
    },
    outputs: {
      paginationOutputDetails: "paginationOutputDetails"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 12,
    vars: 23,
    consts: [[1, "pagination", 3, "ngClass"], ["cdkOverlayOrigin", "", "id", "inputContainer", "class", "pagination__page-size text-14-px", 3, "ngClass", "click", 4, "ngIf"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayBackdropClass"], ["overlayTemplate", ""], [1, "pagination__page-number"], [1, "pagination__page-number__icon", "pagination__buttons", 3, "disabled", "click"], ["src", "assets/ic_caret_down.svg", "alt", "caret Icon", 1, "pagination__page-number__previous", 3, "ngClass"], [4, "ngIf"], ["src", "assets/ic_caret_down.svg", "alt", "caret Icon", 1, "pagination__page-number__next", 3, "ngClass"], ["class", "pagination__go-to-page", 4, "ngIf"], ["cdkOverlayOrigin", "", "id", "inputContainer", 1, "pagination__page-size", "text-14-px", 3, "ngClass", "click"], ["cdk", "", "trigger", "cdkOverlayOrigin"], ["dropDownInput", ""], [1, "pagination__page-size__text"], ["src", "assets/ic_caret_down.svg", "alt", "caret Icon", 1, "pagination__page-size__icon"], ["id", "dropdownOverlay", 1, "dropdown__overlay"], [1, "dropdown__overlay__options"], ["itemSize", "2", 1, "scroll-filled-2"], [4, "ngFor", "ngForOf"], [1, "dropdown__overlay__options--list", 3, "click"], ["listItem", ""], ["class", "divider", 4, "ngIf"], [1, "divider"], ["class", "pagination__page-number__list", 4, "ngFor", "ngForOf"], [1, "pagination__page-number__list"], [4, "ngIf", "ngIfElse"], ["notActive", ""], ["type", "button", "theme", "secondary", 1, "page-link", "active", "pagination__buttons"], ["type", "button", "theme", "tertiary", "size", "xsmall", 1, "page-link", "notActive", "pagination__buttons", 3, "ngClass", "disabled", "click"], [1, "text-14-px"], [1, "pagination__go-to-page"], ["type", "number", "min", "1", 1, "pagination__go-to-page__input", "text-14-px", 3, "ngClass", "ngModel", "max", "ngModelChange", "keyup.enter", "focus", "focusout"], ["pageInput", ""]],
    template: function PaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, PaginationComponent_div_1_Template, 9, 5, "div", 1)(2, PaginationComponent_ng_template_2_Template, 4, 3, "ng-template", 2, 3, ɵɵtemplateRefExtractor);
        ɵɵelementStart(4, "div", 4)(5, "button", 5);
        ɵɵlistener("click", function PaginationComponent_Template_button_click_5_listener() {
          ctx.prev();
          return ctx.newPageNumber = ctx.currentPageNumber;
        });
        ɵɵelement(6, "img", 6);
        ɵɵelementEnd();
        ɵɵtemplate(7, PaginationComponent_ng_container_7_Template, 2, 1, "ng-container", 7)(8, PaginationComponent_div_8_Template, 3, 2, "div", 7);
        ɵɵelementStart(9, "button", 5);
        ɵɵlistener("click", function PaginationComponent_Template_button_click_9_listener() {
          ctx.next();
          return ctx.newPageNumber = ctx.currentPageNumber;
        });
        ɵɵelement(10, "img", 8);
        ɵɵelementEnd()();
        ɵɵtemplate(11, PaginationComponent_div_11_Template, 5, 5, "div", 9);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction5(13, _c98, ctx.paginationConfig.paginationSize === "small", ctx.paginationConfig.alignment === "center", ctx.paginationConfig.alignment === "left", ctx.paginationConfig.alignment === "right", ctx.paginationConfig.paginationType === "withPageSize" && !ctx.isDesktop));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.paginationConfig.paginationType !== "default" && ctx.isDesktop || ctx.paginationConfig.paginationType === "withPageSelection" && !ctx.isDesktop);
        ɵɵadvance(1);
        ɵɵproperty("cdkConnectedOverlayOrigin", ctx.trigger)("cdkConnectedOverlayPositions", ctx.getPosition())("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayBackdropClass", "backdrop-background");
        ɵɵadvance(3);
        ɵɵproperty("disabled", ctx.currentPageNumber === 1);
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction1(19, _c66, ctx.currentPageNumber === 1));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.isMobile);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isMobile);
        ɵɵadvance(1);
        ɵɵproperty("disabled", ctx.currentPageNumber === ctx.totalPages);
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction1(21, _c66, ctx.currentPageNumber + 1 > ctx.totalPages));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.paginationConfig.paginationType === "withPageSelection" && ctx.isDesktop || ctx.paginationConfig.paginationType === "withPageSize" && !ctx.isDesktop);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, ScrollingModule, CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport, OverlayModule, CdkConnectedOverlay, CdkOverlayOrigin],
    styles: ['.pagination[_ngcontent-%COMP%]{display:flex;width:inherit;font-family:var(--bd-fnt-fm);height:40px;gap:24px}.pagination[_ngcontent-%COMP%]   .pagination__page-size[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background-color:var(--white);border:1px solid var(--grey-300);border-radius:8px;padding:12px 16px;gap:10px;height:auto;cursor:pointer}.pagination[_ngcontent-%COMP%]   .pagination__page-size[_ngcontent-%COMP%]   .pagination__page-size__icon[_ngcontent-%COMP%]{height:24px;width:24px}.pagination[_ngcontent-%COMP%]   .pagination__page-size[_ngcontent-%COMP%]   .pagination__page-size__content[_ngcontent-%COMP%]{font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-3)}.pagination[_ngcontent-%COMP%]   .pagination__page-size[_ngcontent-%COMP%]:hover{border:1px solid var(--primary-300);box-shadow:0 1px 2px 0 var(--blue-grey-600)}.pagination[_ngcontent-%COMP%]   .pagination__page-size__focus[_ngcontent-%COMP%]{border:1px solid var(--primary-300);color:var(--grey-500);box-shadow:0 1px 2px 0 var(--blue-grey-600)}.pagination[_ngcontent-%COMP%]   .pagination__page-number[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px}.pagination[_ngcontent-%COMP%]   .pagination__page-number[_ngcontent-%COMP%]   .pagination__page-number__icon[_ngcontent-%COMP%]{width:40px;height:40px;display:flex;align-items:center;justify-content:center}.pagination[_ngcontent-%COMP%]   .pagination__page-number[_ngcontent-%COMP%]   .pagination__page-number__previous[_ngcontent-%COMP%]{height:24px;width:24px;transform:rotate(90deg);background-color:unset}.pagination[_ngcontent-%COMP%]   .pagination__page-number[_ngcontent-%COMP%]   .pagination__page-number__next[_ngcontent-%COMP%]{height:24px;width:24px;transform:rotate(-90deg);background-color:unset}.pagination[_ngcontent-%COMP%]   .pagination__page-number[_ngcontent-%COMP%]   .pagination__buttons[_ngcontent-%COMP%]{height:40px;width:40px;border:none;border-radius:8px;background-color:unset;cursor:pointer}.pagination[_ngcontent-%COMP%]   .pagination__page-number[_ngcontent-%COMP%]   .pagination__page-number__list[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:40px;height:40px;border-radius:8px}.pagination[_ngcontent-%COMP%]   .pagination__page-number[_ngcontent-%COMP%]   .pagination__page-number__list[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:var(--primary-100);color:var(--primary-base);font-weight:var(--bd-fnt-wt-md);font-size:var(--bd-fnt-sz-2)}.pagination[_ngcontent-%COMP%]   .pagination__page-number[_ngcontent-%COMP%]   .pagination__page-number__list[_ngcontent-%COMP%]   .notActive[_ngcontent-%COMP%]{background-color:var(--white);color:var(--grey-900);font-weight:var(--bd-fnt-wt-md);font-size:var(--bd-fnt-sz-2)}.pagination[_ngcontent-%COMP%]   .pagination__go-to-page[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:8px}.pagination[_ngcontent-%COMP%]   .pagination__go-to-page[_ngcontent-%COMP%]   .pagination__go-to-page__input[_ngcontent-%COMP%]{background-color:var(--white);border:1px solid var(--grey-300);border-radius:8px;padding:12px 16px;gap:10px;width:28px;height:15px;text-align:center}.pagination[_ngcontent-%COMP%]   .pagination__go-to-page[_ngcontent-%COMP%]   .pagination__go-to-page__input.error-state[_ngcontent-%COMP%]{border:2px solid var(--feedback-red)}.pagination[_ngcontent-%COMP%]   .pagination__go-to-page[_ngcontent-%COMP%]   .pagination__go-to-page__input[_ngcontent-%COMP%]:not(.error-state):hover{border:1px solid var(--primary-300);box-shadow:0 1px 2px 0 var(--blue-grey-600)}.pagination[_ngcontent-%COMP%]   .pagination__go-to-page[_ngcontent-%COMP%]   .pagination__go-to-page__focus[_ngcontent-%COMP%]{outline:unset;border:1px solid var(--primary-300);box-shadow:0 1px 2px 0 var(--blue-grey-600)}.pagination[_ngcontent-%COMP%]   .text-14-px[_ngcontent-%COMP%]{font-size:var(--bd-fnt-sz-3);line-height:var(--bd-fnt-ln-hgt-9);font-weight:var(--bd-fnt-wt-rg);text-align:center;color:var(--grey-900)}.dropdown__overlay[_ngcontent-%COMP%]{width:100%;font-family:var(--bd-fnt-fm);box-sizing:border-box;border:1px var(--grey-100);box-shadow:0 4px 8px 0 var(--blue-grey-600);border-radius:4px;padding:0}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]{cursor:pointer;list-style-type:none;padding:0;margin:0;background-color:var(--white);border-radius:4px}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .cdk-virtual-scrollable[_ngcontent-%COMP%]{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .dropdown__overlay__options--list[_ngcontent-%COMP%]{padding:8px 16px;color:var(--primary-1000);font-size:var(--hd-fnt-sz-7);height:20px}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .dropdown__overlay__options--no-result[_ngcontent-%COMP%]{padding:12px 16px;display:flex;align-items:center;justify-content:center;font-size:var(--bd-fnt-sz-4);color:var(--primary-900);line-height:var(--bd-fnt-ln-hgt-4);font-size:var(--bd-fnt-wt-rg)}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .dropdown__overlay__options--list.selected[_ngcontent-%COMP%]{background-color:var(--primary-100)}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .dropdown__overlay__options--list[_ngcontent-%COMP%]:hover{background-color:var(--blue-grey-300)}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .dropdown__overlay__options--list.disabled[_ngcontent-%COMP%]{color:gray}.dropdown__overlay[_ngcontent-%COMP%]   .dropdown__overlay__options[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{content:" ";display:block;border-bottom:1px solid var(--grey-100)}.pagination__small[_ngcontent-%COMP%]{height:32px;font-size:var(--bd-fnt-sz-3)}.pagination__small[_ngcontent-%COMP%]   .pagination__page-size[_ngcontent-%COMP%]   .pagination__page-size__icon[_ngcontent-%COMP%]{height:24px;width:24px}.pagination__small[_ngcontent-%COMP%]   .pagination__page-size[_ngcontent-%COMP%]   .pagination__page-size__content[_ngcontent-%COMP%]{font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-3)}.pagination__small[_ngcontent-%COMP%]   .pagination__page-number[_ngcontent-%COMP%]   .pagination__buttons[_ngcontent-%COMP%]{height:32px;width:32px;border:none;border-radius:8px}@media (max-width: 767px){.pagination[_ngcontent-%COMP%]{height:48px}}@media (min-width: 768px) and (max-width: 1279px){.pagination__go-to-page__direction[_ngcontent-%COMP%]{flex-direction:row-reverse}.pagination[_ngcontent-%COMP%]{height:48px}.pagination[_ngcontent-%COMP%]   .pagination__page-number[_ngcontent-%COMP%]   .pagination__page-number__list[_ngcontent-%COMP%]{height:48px;width:48px}.pagination[_ngcontent-%COMP%]   .pagination__go-to-page[_ngcontent-%COMP%]   .pagination__go-to-page__input[_ngcontent-%COMP%]{height:unset}.pagination__small[_ngcontent-%COMP%]   .pagination__page-number[_ngcontent-%COMP%]   .pagination__buttons[_ngcontent-%COMP%]{height:48px;width:48px}}.pagination__align-center[_ngcontent-%COMP%]{justify-content:center}.pagination__align-left[_ngcontent-%COMP%]{justify-content:left}.pagination__align-right[_ngcontent-%COMP%]{justify-content:right}.disabled[_ngcontent-%COMP%]{filter:brightness(0) saturate(100%) invert(89%) sepia(6%) saturate(245%) hue-rotate(178deg) brightness(95%) contrast(94%)}[_nghost-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [_nghost-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{appearance:none;margin:0}'],
    data: {
      animation: [trigger("rotate180", [state("up", style({
        transform: "rotate(0deg)"
      })), state("down", style({
        transform: "rotate(180deg)"
      })), transition("up <=> down", animate("300ms ease-in-out"))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationComponent, [{
    type: Component,
    args: [{
      selector: "ada-pagination",
      standalone: true,
      imports: [CommonModule, FormsModule, ScrollingModule, OverlayModule],
      animations: [trigger("rotate180", [state("up", style({
        transform: "rotate(0deg)"
      })), state("down", style({
        transform: "rotate(180deg)"
      })), transition("up <=> down", animate("300ms ease-in-out"))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  class="pagination"
  [ngClass]="{
    pagination__small: paginationConfig.paginationSize === 'small',
    'pagination__align-center': paginationConfig.alignment === 'center',
    'pagination__align-left': paginationConfig.alignment === 'left',
    'pagination__align-right': paginationConfig.alignment === 'right',
    'pagination__go-to-page__direction':
      paginationConfig.paginationType === 'withPageSize' && !isDesktop
  }"
>
  <div
    #cdk
    cdkOverlayOrigin
    #trigger="cdkOverlayOrigin"
    (click)="openOverlay()"
    id="inputContainer"
    class="pagination__page-size text-14-px"
    [ngClass]="{ 'pagination__page-size__focus': isPageSizeOverlayOpen }"
    *ngIf="
      (paginationConfig.paginationType !== 'default' && isDesktop) ||
      (paginationConfig.paginationType === 'withPageSelection' && !isDesktop)
    "
  >
    <div #dropDownInput>
      {{ selectedItemPerPageOption.option }}
    </div>
    <span class="pagination__page-size__text">/ page</span>
    <img
      class="pagination__page-size__icon"
      src="assets/ic_caret_down.svg"
      alt="caret Icon"
      [@rotate180]="isPageSizeOverlayOpen ? 'down' : 'up'"
    />
  </div>
  <ng-template
    #overlayTemplate
    cdkConnectedOverlay
    [cdkConnectedOverlayOrigin]="trigger"
    [cdkConnectedOverlayPositions]="getPosition()"
    [cdkConnectedOverlayHasBackdrop]="true"
    [cdkConnectedOverlayBackdropClass]="'backdrop-background'"
  >
    <div class="dropdown__overlay" id="dropdownOverlay">
      <ul class="dropdown__overlay__options">
        <cdk-virtual-scroll-viewport
          class="scroll-filled-2"
          itemSize="2"
          [style.height.px]="scrollHeight"
        >
          <ng-container
            *ngFor="let dropdownOption of sortedOptions; let index = index"
          >
            <li
              #listItem
              class="dropdown__overlay__options--list"
              [class.selected]="dropdownOption.isSelected"
              [class.disabled]="dropdownOption.isDisabled"
              (click)="selectOption(dropdownOption, true)"
            >
              <span>{{ dropdownOption.option }} / page</span>
            </li>
            <div
              class="divider"
              *ngIf="paginationConfig.itemPerPageOptions?.length !== index + 1"
            ></div>
          </ng-container>
        </cdk-virtual-scroll-viewport>
      </ul>
    </div>
  </ng-template>

  <div class="pagination__page-number">
    <button
      class="pagination__page-number__icon pagination__buttons"
      [disabled]="currentPageNumber === 1"
      (click)="prev(); newPageNumber = currentPageNumber"
    >
      <img
        class="pagination__page-number__previous"
        src="assets/ic_caret_down.svg"
        alt="caret Icon"
        [ngClass]="{ disabled: currentPageNumber === 1 }"
      />
    </button>

    <ng-container *ngIf="!isMobile">
      <div
        *ngFor="let page of pager.pages; let i = index"
        class="pagination__page-number__list"
      >
        <ng-container *ngIf="currentPageNumber === page; else notActive">
          <button
            class="page-link active pagination__buttons"
            type="button"
            theme="secondary"
          >
            {{ page }}
          </button>
        </ng-container>
        <ng-template #notActive>
          <button
            type="button"
            theme="tertiary"
            size="xsmall"
            class="page-link notActive pagination__buttons"
            (click)="getData(page, true); newPageNumber = currentPageNumber"
            [ngClass]="{ 'custom-disabled': page === -1 }"
            [disabled]="page === -1"
          >
            {{ page === -1 ? "..." : page }}
          </button>
        </ng-template>
      </div>
    </ng-container>

    <div *ngIf="isMobile">
      <span class="text-14-px"
        >Page {{ currentPageNumber }} of {{ totalPages }}</span
      >
    </div>

    <button
      class="pagination__page-number__icon pagination__buttons"
      [disabled]="currentPageNumber === totalPages"
      (click)="next(); newPageNumber = currentPageNumber"
    >
      <img
        class="pagination__page-number__next"
        src="assets/ic_caret_down.svg"
        alt="caret Icon"
        [ngClass]="{ disabled: currentPageNumber + 1 > totalPages }"
      />
    </button>
  </div>

  <div
    *ngIf="
      (paginationConfig.paginationType === 'withPageSelection' && isDesktop) ||
      (paginationConfig.paginationType === 'withPageSize' && !isDesktop)
    "
    class="pagination__go-to-page"
  >
    <span class="text-14-px">Go to page</span>
    <input
      #pageInput
      [ngClass]="{ 'pagination__go-to-page__focus': isGoToPageInputActive }"
      class="pagination__go-to-page__input text-14-px"
      [(ngModel)]="newPageNumber"
      type="number"
      min="1"
      [max]="totalPages"
      (keyup.enter)="goToPage(); validatePageNumber()"
      (focus)="onFocus($event); validatePageNumber()"
      (focusout)="onFocusOut(); validatePageNumber()"
    />
  </div>
</div>
`,
      styles: ['.pagination{display:flex;width:inherit;font-family:var(--bd-fnt-fm);height:40px;gap:24px}.pagination .pagination__page-size{display:flex;justify-content:space-between;align-items:center;background-color:var(--white);border:1px solid var(--grey-300);border-radius:8px;padding:12px 16px;gap:10px;height:auto;cursor:pointer}.pagination .pagination__page-size .pagination__page-size__icon{height:24px;width:24px}.pagination .pagination__page-size .pagination__page-size__content{font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-3)}.pagination .pagination__page-size:hover{border:1px solid var(--primary-300);box-shadow:0 1px 2px 0 var(--blue-grey-600)}.pagination .pagination__page-size__focus{border:1px solid var(--primary-300);color:var(--grey-500);box-shadow:0 1px 2px 0 var(--blue-grey-600)}.pagination .pagination__page-number{display:flex;align-items:center;justify-content:center;gap:8px}.pagination .pagination__page-number .pagination__page-number__icon{width:40px;height:40px;display:flex;align-items:center;justify-content:center}.pagination .pagination__page-number .pagination__page-number__previous{height:24px;width:24px;transform:rotate(90deg);background-color:unset}.pagination .pagination__page-number .pagination__page-number__next{height:24px;width:24px;transform:rotate(-90deg);background-color:unset}.pagination .pagination__page-number .pagination__buttons{height:40px;width:40px;border:none;border-radius:8px;background-color:unset;cursor:pointer}.pagination .pagination__page-number .pagination__page-number__list{display:flex;justify-content:center;align-items:center;width:40px;height:40px;border-radius:8px}.pagination .pagination__page-number .pagination__page-number__list .active{background-color:var(--primary-100);color:var(--primary-base);font-weight:var(--bd-fnt-wt-md);font-size:var(--bd-fnt-sz-2)}.pagination .pagination__page-number .pagination__page-number__list .notActive{background-color:var(--white);color:var(--grey-900);font-weight:var(--bd-fnt-wt-md);font-size:var(--bd-fnt-sz-2)}.pagination .pagination__go-to-page{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:8px}.pagination .pagination__go-to-page .pagination__go-to-page__input{background-color:var(--white);border:1px solid var(--grey-300);border-radius:8px;padding:12px 16px;gap:10px;width:28px;height:15px;text-align:center}.pagination .pagination__go-to-page .pagination__go-to-page__input.error-state{border:2px solid var(--feedback-red)}.pagination .pagination__go-to-page .pagination__go-to-page__input:not(.error-state):hover{border:1px solid var(--primary-300);box-shadow:0 1px 2px 0 var(--blue-grey-600)}.pagination .pagination__go-to-page .pagination__go-to-page__focus{outline:unset;border:1px solid var(--primary-300);box-shadow:0 1px 2px 0 var(--blue-grey-600)}.pagination .text-14-px{font-size:var(--bd-fnt-sz-3);line-height:var(--bd-fnt-ln-hgt-9);font-weight:var(--bd-fnt-wt-rg);text-align:center;color:var(--grey-900)}.dropdown__overlay{width:100%;font-family:var(--bd-fnt-fm);box-sizing:border-box;border:1px var(--grey-100);box-shadow:0 4px 8px 0 var(--blue-grey-600);border-radius:4px;padding:0}.dropdown__overlay .dropdown__overlay__options{cursor:pointer;list-style-type:none;padding:0;margin:0;background-color:var(--white);border-radius:4px}.dropdown__overlay .dropdown__overlay__options .cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.dropdown__overlay .dropdown__overlay__options .dropdown__overlay__options--list{padding:8px 16px;color:var(--primary-1000);font-size:var(--hd-fnt-sz-7);height:20px}.dropdown__overlay .dropdown__overlay__options .dropdown__overlay__options--no-result{padding:12px 16px;display:flex;align-items:center;justify-content:center;font-size:var(--bd-fnt-sz-4);color:var(--primary-900);line-height:var(--bd-fnt-ln-hgt-4);font-size:var(--bd-fnt-wt-rg)}.dropdown__overlay .dropdown__overlay__options .dropdown__overlay__options--list.selected{background-color:var(--primary-100)}.dropdown__overlay .dropdown__overlay__options .dropdown__overlay__options--list:hover{background-color:var(--blue-grey-300)}.dropdown__overlay .dropdown__overlay__options .dropdown__overlay__options--list.disabled{color:gray}.dropdown__overlay .dropdown__overlay__options .divider{content:" ";display:block;border-bottom:1px solid var(--grey-100)}.pagination__small{height:32px;font-size:var(--bd-fnt-sz-3)}.pagination__small .pagination__page-size .pagination__page-size__icon{height:24px;width:24px}.pagination__small .pagination__page-size .pagination__page-size__content{font-weight:var(--bd-fnt-wt-rg);font-size:var(--bd-fnt-sz-3)}.pagination__small .pagination__page-number .pagination__buttons{height:32px;width:32px;border:none;border-radius:8px}@media (max-width: 767px){.pagination{height:48px}}@media (min-width: 768px) and (max-width: 1279px){.pagination__go-to-page__direction{flex-direction:row-reverse}.pagination{height:48px}.pagination .pagination__page-number .pagination__page-number__list{height:48px;width:48px}.pagination .pagination__go-to-page .pagination__go-to-page__input{height:unset}.pagination__small .pagination__page-number .pagination__buttons{height:48px;width:48px}}.pagination__align-center{justify-content:center}.pagination__align-left{justify-content:left}.pagination__align-right{justify-content:right}.disabled{filter:brightness(0) saturate(100%) invert(89%) sepia(6%) saturate(245%) hue-rotate(178deg) brightness(95%) contrast(94%)}:host input[type=number]::-webkit-inner-spin-button,:host input[type=number]::-webkit-outer-spin-button{appearance:none;margin:0}\n']
    }]
  }], () => [{
    type: PaginationService
  }, {
    type: Overlay
  }, {
    type: ViewContainerRef
  }, {
    type: ChangeDetectorRef
  }], {
    paginationOutputDetails: [{
      type: Output
    }],
    overlayTemplate: [{
      type: ViewChild,
      args: ["overlayTemplate"]
    }],
    el: [{
      type: ViewChild,
      args: ["cdk"]
    }],
    trigger: [{
      type: ViewChild,
      args: ["trigger"]
    }],
    pageInput: [{
      type: ViewChild,
      args: ["pageInput"]
    }],
    paginationConfig: [{
      type: Input
    }],
    onResize: [{
      type: HostListener,
      args: ["window:resize", ["$event"]]
    }]
  });
})();
export {
  AccordionComponent,
  AccordionSeparatorComponent,
  AlignCellContentDirective,
  AvatarComponent,
  BadgeComponent,
  ButtonComponent,
  ButtonDropdownComponent,
  ButtonIconComponent,
  CalendarComponent,
  CalendarDirective,
  CalendarHeader,
  CardActionComponent,
  CardContentComponent,
  CardImageComponent,
  CardTitleComponent,
  CardsComponent,
  CheckboxComponent,
  CheckboxIntermediateComponent,
  ChipSize,
  ChipType,
  ChipsComponent,
  CustomDate,
  DIALOG_DATA,
  DatesOfMonthComponent,
  DaysOfWeekComponent,
  DiaLogConfigOptions,
  DialogConfig,
  DialogPopupComponent,
  DialogService,
  DropdownComponent,
  HeaderComponent,
  InputComponent,
  ListComponent,
  MenuHeaderComponent,
  MenuItemComponent,
  MenuListComponent,
  MultiselectDropdownComponent,
  OverlayType,
  PaginationComponent,
  PopoverCaretComponent,
  PopoverComponent,
  PopoverContentComponent,
  PopoverDirective,
  PopoverTitleComponent,
  RadioComponent,
  RangeDirective,
  SEGMENT_TOGGLE_GROUP_VALUE_ACCESSOR,
  SearchInputComponent,
  SegmentComponent,
  SegmentToggleGroupComponent,
  SegmentToggleGroupDirective,
  SocialButtonComponent,
  SocialButtonIconComponent,
  TabComponent,
  TableBodyDirective,
  TableComponent,
  TableDataDirective,
  TableHeaderDirective,
  TableHeadingCellDirective,
  TableRowDirective,
  TableStyleDirective,
  TabsComponent,
  TextareaComponent,
  ToggleComponent,
  TooltipDirective,
  YearMonthListComponent
};
//# sourceMappingURL=@coditashq_ng-ada-components.js.map
