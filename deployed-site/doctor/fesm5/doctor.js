import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

var DoctorService = /** @class */ (function () {
    function DoctorService() {
    }
    DoctorService.ɵfac = function DoctorService_Factory(t) { return new (t || DoctorService)(); };
    DoctorService.ɵprov = ɵɵdefineInjectable({ token: DoctorService, factory: DoctorService.ɵfac, providedIn: 'root' });
    return DoctorService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DoctorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var DoctorComponent = /** @class */ (function () {
    function DoctorComponent() {
    }
    DoctorComponent.prototype.ngOnInit = function () {
    };
    DoctorComponent.ɵfac = function DoctorComponent_Factory(t) { return new (t || DoctorComponent)(); };
    DoctorComponent.ɵcmp = ɵɵdefineComponent({ type: DoctorComponent, selectors: [["lib-doctor"]], decls: 2, vars: 0, template: function DoctorComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " doctor works! ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return DoctorComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DoctorComponent, [{
        type: Component,
        args: [{
                selector: 'lib-doctor',
                template: "\n    <p>\n      doctor works!\n    </p>\n  ",
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
        component: DoctorComponent
    }
];
var DoctorRoutingModule = /** @class */ (function () {
    function DoctorRoutingModule() {
    }
    DoctorRoutingModule.ɵmod = ɵɵdefineNgModule({ type: DoctorRoutingModule });
    DoctorRoutingModule.ɵinj = ɵɵdefineInjector({ factory: function DoctorRoutingModule_Factory(t) { return new (t || DoctorRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
            RouterModule] });
    return DoctorRoutingModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DoctorRoutingModule, { imports: [RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(DoctorRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();

var DoctorModule = /** @class */ (function () {
    function DoctorModule() {
    }
    DoctorModule.ɵmod = ɵɵdefineNgModule({ type: DoctorModule });
    DoctorModule.ɵinj = ɵɵdefineInjector({ factory: function DoctorModule_Factory(t) { return new (t || DoctorModule)(); }, imports: [[
                DoctorRoutingModule
            ]] });
    return DoctorModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DoctorModule, { declarations: [DoctorComponent], imports: [DoctorRoutingModule], exports: [DoctorComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(DoctorModule, [{
        type: NgModule,
        args: [{
                declarations: [DoctorComponent],
                imports: [
                    DoctorRoutingModule
                ],
                exports: [DoctorComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of doctor
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DoctorComponent, DoctorModule, DoctorService };
//# sourceMappingURL=doctor.js.map
