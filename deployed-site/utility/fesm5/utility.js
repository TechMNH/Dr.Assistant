import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    UtilityService.ɵfac = function UtilityService_Factory(t) { return new (t || UtilityService)(); };
    UtilityService.ɵprov = ɵɵdefineInjectable({ token: UtilityService, factory: UtilityService.ɵfac, providedIn: 'root' });
    return UtilityService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UtilityService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var UtilityComponent = /** @class */ (function () {
    function UtilityComponent() {
    }
    UtilityComponent.prototype.ngOnInit = function () {
    };
    UtilityComponent.ɵfac = function UtilityComponent_Factory(t) { return new (t || UtilityComponent)(); };
    UtilityComponent.ɵcmp = ɵɵdefineComponent({ type: UtilityComponent, selectors: [["lib-utility"]], decls: 2, vars: 0, template: function UtilityComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " utility works! ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return UtilityComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UtilityComponent, [{
        type: Component,
        args: [{
                selector: 'lib-utility',
                template: "\n    <p>\n      utility works!\n    </p>\n  ",
                styles: [],
            }]
    }], function () { return []; }, null); })();

var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'page1'
    },
    {
        path: 'page1',
        component: UtilityComponent
    }
];
var UtilityRoutingModule = /** @class */ (function () {
    function UtilityRoutingModule() {
    }
    UtilityRoutingModule.ɵmod = ɵɵdefineNgModule({ type: UtilityRoutingModule });
    UtilityRoutingModule.ɵinj = ɵɵdefineInjector({ factory: function UtilityRoutingModule_Factory(t) { return new (t || UtilityRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
            RouterModule] });
    return UtilityRoutingModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UtilityRoutingModule, { imports: [RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UtilityRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();

var UtilityModule = /** @class */ (function () {
    function UtilityModule() {
    }
    UtilityModule.ɵmod = ɵɵdefineNgModule({ type: UtilityModule });
    UtilityModule.ɵinj = ɵɵdefineInjector({ factory: function UtilityModule_Factory(t) { return new (t || UtilityModule)(); }, imports: [[
                UtilityRoutingModule
            ]] });
    return UtilityModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UtilityModule, { declarations: [UtilityComponent], imports: [UtilityRoutingModule], exports: [UtilityComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UtilityModule, [{
        type: NgModule,
        args: [{
                declarations: [UtilityComponent],
                imports: [
                    UtilityRoutingModule
                ],
                exports: [UtilityComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of utility
 */

/**
 * Generated bundle index. Do not edit.
 */

export { UtilityComponent, UtilityModule, UtilityService };
//# sourceMappingURL=utility.js.map
