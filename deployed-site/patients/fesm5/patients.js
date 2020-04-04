import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

var PatientsService = /** @class */ (function () {
    function PatientsService() {
    }
    PatientsService.ɵfac = function PatientsService_Factory(t) { return new (t || PatientsService)(); };
    PatientsService.ɵprov = ɵɵdefineInjectable({ token: PatientsService, factory: PatientsService.ɵfac, providedIn: 'root' });
    return PatientsService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PatientsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var PatientsComponent = /** @class */ (function () {
    function PatientsComponent() {
    }
    PatientsComponent.prototype.ngOnInit = function () {
    };
    PatientsComponent.ɵfac = function PatientsComponent_Factory(t) { return new (t || PatientsComponent)(); };
    PatientsComponent.ɵcmp = ɵɵdefineComponent({ type: PatientsComponent, selectors: [["lib-patients"]], decls: 2, vars: 0, template: function PatientsComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " patients works! ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return PatientsComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PatientsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-patients',
                template: "\n    <p>\n      patients works!\n    </p>\n  ",
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
        component: PatientsComponent
    }
];
var PatientsRoutingModule = /** @class */ (function () {
    function PatientsRoutingModule() {
    }
    PatientsRoutingModule.ɵmod = ɵɵdefineNgModule({ type: PatientsRoutingModule });
    PatientsRoutingModule.ɵinj = ɵɵdefineInjector({ factory: function PatientsRoutingModule_Factory(t) { return new (t || PatientsRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
            RouterModule] });
    return PatientsRoutingModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PatientsRoutingModule, { imports: [RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PatientsRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();

var PatientsModule = /** @class */ (function () {
    function PatientsModule() {
    }
    PatientsModule.ɵmod = ɵɵdefineNgModule({ type: PatientsModule });
    PatientsModule.ɵinj = ɵɵdefineInjector({ factory: function PatientsModule_Factory(t) { return new (t || PatientsModule)(); }, imports: [[
                PatientsRoutingModule
            ]] });
    return PatientsModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PatientsModule, { declarations: [PatientsComponent], imports: [PatientsRoutingModule], exports: [PatientsComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PatientsModule, [{
        type: NgModule,
        args: [{
                declarations: [PatientsComponent],
                imports: [
                    PatientsRoutingModule
                ],
                exports: [PatientsComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of patients
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PatientsComponent, PatientsModule, PatientsService };
//# sourceMappingURL=patients.js.map
