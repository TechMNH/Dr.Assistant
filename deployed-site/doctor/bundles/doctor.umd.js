(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('doctor', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = global || self, factory(global.doctor = {}, global.ng.core, global.ng.router));
}(this, (function (exports, core, router) { 'use strict';

    var DoctorService = /** @class */ (function () {
        function DoctorService() {
        }
        DoctorService.ɵfac = function DoctorService_Factory(t) { return new (t || DoctorService)(); };
        DoctorService.ɵprov = core["ɵɵdefineInjectable"]({ token: DoctorService, factory: DoctorService.ɵfac, providedIn: 'root' });
        return DoctorService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DoctorService, [{
            type: core.Injectable,
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
        DoctorComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: DoctorComponent, selectors: [["lib-doctor"]], decls: 2, vars: 0, template: function DoctorComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, " doctor works! ");
                core["ɵɵelementEnd"]();
            } }, encapsulation: 2 });
        return DoctorComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DoctorComponent, [{
            type: core.Component,
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
        DoctorRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({ type: DoctorRoutingModule });
        DoctorRoutingModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function DoctorRoutingModule_Factory(t) { return new (t || DoctorRoutingModule)(); }, imports: [[router.RouterModule.forChild(routes)],
                router.RouterModule] });
        return DoctorRoutingModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](DoctorRoutingModule, { imports: [router.RouterModule], exports: [router.RouterModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DoctorRoutingModule, [{
            type: core.NgModule,
            args: [{
                    imports: [router.RouterModule.forChild(routes)],
                    exports: [router.RouterModule]
                }]
        }], null, null); })();

    var DoctorModule = /** @class */ (function () {
        function DoctorModule() {
        }
        DoctorModule.ɵmod = core["ɵɵdefineNgModule"]({ type: DoctorModule });
        DoctorModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function DoctorModule_Factory(t) { return new (t || DoctorModule)(); }, imports: [[
                    DoctorRoutingModule
                ]] });
        return DoctorModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](DoctorModule, { declarations: [DoctorComponent], imports: [DoctorRoutingModule], exports: [DoctorComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DoctorModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [DoctorComponent],
                    imports: [
                        DoctorRoutingModule
                    ],
                    exports: [DoctorComponent]
                }]
        }], null, null); })();

    exports.DoctorComponent = DoctorComponent;
    exports.DoctorModule = DoctorModule;
    exports.DoctorService = DoctorService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=doctor.umd.js.map
