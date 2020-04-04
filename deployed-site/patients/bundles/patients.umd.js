(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('patients', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = global || self, factory(global.patients = {}, global.ng.core, global.ng.router));
}(this, (function (exports, core, router) { 'use strict';

    var PatientsService = /** @class */ (function () {
        function PatientsService() {
        }
        PatientsService.ɵfac = function PatientsService_Factory(t) { return new (t || PatientsService)(); };
        PatientsService.ɵprov = core["ɵɵdefineInjectable"]({ token: PatientsService, factory: PatientsService.ɵfac, providedIn: 'root' });
        return PatientsService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PatientsService, [{
            type: core.Injectable,
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
        PatientsComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: PatientsComponent, selectors: [["lib-patients"]], decls: 2, vars: 0, template: function PatientsComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, " patients works! ");
                core["ɵɵelementEnd"]();
            } }, encapsulation: 2 });
        return PatientsComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PatientsComponent, [{
            type: core.Component,
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
        PatientsRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({ type: PatientsRoutingModule });
        PatientsRoutingModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function PatientsRoutingModule_Factory(t) { return new (t || PatientsRoutingModule)(); }, imports: [[router.RouterModule.forChild(routes)],
                router.RouterModule] });
        return PatientsRoutingModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](PatientsRoutingModule, { imports: [router.RouterModule], exports: [router.RouterModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PatientsRoutingModule, [{
            type: core.NgModule,
            args: [{
                    imports: [router.RouterModule.forChild(routes)],
                    exports: [router.RouterModule]
                }]
        }], null, null); })();

    var PatientsModule = /** @class */ (function () {
        function PatientsModule() {
        }
        PatientsModule.ɵmod = core["ɵɵdefineNgModule"]({ type: PatientsModule });
        PatientsModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function PatientsModule_Factory(t) { return new (t || PatientsModule)(); }, imports: [[
                    PatientsRoutingModule
                ]] });
        return PatientsModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](PatientsModule, { declarations: [PatientsComponent], imports: [PatientsRoutingModule], exports: [PatientsComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PatientsModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [PatientsComponent],
                    imports: [
                        PatientsRoutingModule
                    ],
                    exports: [PatientsComponent]
                }]
        }], null, null); })();

    exports.PatientsComponent = PatientsComponent;
    exports.PatientsModule = PatientsModule;
    exports.PatientsService = PatientsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=patients.umd.js.map
