import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

class DoctorService {
    constructor() { }
}
DoctorService.ɵfac = function DoctorService_Factory(t) { return new (t || DoctorService)(); };
DoctorService.ɵprov = ɵɵdefineInjectable({ token: DoctorService, factory: DoctorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DoctorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class DoctorComponent {
    constructor() { }
    ngOnInit() {
    }
}
DoctorComponent.ɵfac = function DoctorComponent_Factory(t) { return new (t || DoctorComponent)(); };
DoctorComponent.ɵcmp = ɵɵdefineComponent({ type: DoctorComponent, selectors: [["lib-doctor"]], decls: 2, vars: 0, template: function DoctorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " doctor works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DoctorComponent, [{
        type: Component,
        args: [{
                selector: 'lib-doctor',
                template: `
    <p>
      doctor works!
    </p>
  `,
                styles: [],
            }]
    }], function () { return []; }, null); })();

const routes = [
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
class DoctorRoutingModule {
}
DoctorRoutingModule.ɵmod = ɵɵdefineNgModule({ type: DoctorRoutingModule });
DoctorRoutingModule.ɵinj = ɵɵdefineInjector({ factory: function DoctorRoutingModule_Factory(t) { return new (t || DoctorRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
        RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DoctorRoutingModule, { imports: [RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(DoctorRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();

class DoctorModule {
}
DoctorModule.ɵmod = ɵɵdefineNgModule({ type: DoctorModule });
DoctorModule.ɵinj = ɵɵdefineInjector({ factory: function DoctorModule_Factory(t) { return new (t || DoctorModule)(); }, imports: [[
            DoctorRoutingModule
        ]] });
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
