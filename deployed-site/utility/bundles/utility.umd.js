(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('utility', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = global || self, factory(global.utility = {}, global.ng.core, global.ng.router));
}(this, (function (exports, core, router) { 'use strict';

    var UtilityService = /** @class */ (function () {
        function UtilityService() {
        }
        UtilityService.ɵfac = function UtilityService_Factory(t) { return new (t || UtilityService)(); };
        UtilityService.ɵprov = core["ɵɵdefineInjectable"]({ token: UtilityService, factory: UtilityService.ɵfac, providedIn: 'root' });
        return UtilityService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](UtilityService, [{
            type: core.Injectable,
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
        UtilityComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: UtilityComponent, selectors: [["lib-utility"]], decls: 2, vars: 0, template: function UtilityComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, " utility works! ");
                core["ɵɵelementEnd"]();
            } }, encapsulation: 2 });
        return UtilityComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](UtilityComponent, [{
            type: core.Component,
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
        UtilityRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({ type: UtilityRoutingModule });
        UtilityRoutingModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function UtilityRoutingModule_Factory(t) { return new (t || UtilityRoutingModule)(); }, imports: [[router.RouterModule.forChild(routes)],
                router.RouterModule] });
        return UtilityRoutingModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](UtilityRoutingModule, { imports: [router.RouterModule], exports: [router.RouterModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](UtilityRoutingModule, [{
            type: core.NgModule,
            args: [{
                    imports: [router.RouterModule.forChild(routes)],
                    exports: [router.RouterModule]
                }]
        }], null, null); })();

    var UtilityModule = /** @class */ (function () {
        function UtilityModule() {
        }
        UtilityModule.ɵmod = core["ɵɵdefineNgModule"]({ type: UtilityModule });
        UtilityModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function UtilityModule_Factory(t) { return new (t || UtilityModule)(); }, imports: [[
                    UtilityRoutingModule
                ]] });
        return UtilityModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](UtilityModule, { declarations: [UtilityComponent], imports: [UtilityRoutingModule], exports: [UtilityComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](UtilityModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [UtilityComponent],
                    imports: [
                        UtilityRoutingModule
                    ],
                    exports: [UtilityComponent]
                }]
        }], null, null); })();

    exports.UtilityComponent = UtilityComponent;
    exports.UtilityModule = UtilityModule;
    exports.UtilityService = UtilityService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=utility.umd.js.map
