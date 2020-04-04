(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('signup', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = global || self, factory(global.signup = {}, global.ng.core, global.ng.router));
}(this, (function (exports, core, router) { 'use strict';

    var SignupService = /** @class */ (function () {
        function SignupService() {
        }
        SignupService.ɵfac = function SignupService_Factory(t) { return new (t || SignupService)(); };
        SignupService.ɵprov = core["ɵɵdefineInjectable"]({ token: SignupService, factory: SignupService.ɵfac, providedIn: 'root' });
        return SignupService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SignupService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var SignupComponent = /** @class */ (function () {
        function SignupComponent() {
        }
        SignupComponent.prototype.ngOnInit = function () {
        };
        SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(); };
        SignupComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["lib-signup"]], decls: 2, vars: 0, template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, " signup works! ");
                core["ɵɵelementEnd"]();
            } }, encapsulation: 2 });
        return SignupComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SignupComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-signup',
                    template: "\n    <p>\n      signup works!\n    </p>\n  ",
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
            component: SignupComponent
        }
    ];
    var SignupRoutingModule = /** @class */ (function () {
        function SignupRoutingModule() {
        }
        SignupRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SignupRoutingModule });
        SignupRoutingModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SignupRoutingModule_Factory(t) { return new (t || SignupRoutingModule)(); }, imports: [[router.RouterModule.forChild(routes)],
                router.RouterModule] });
        return SignupRoutingModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SignupRoutingModule, { imports: [router.RouterModule], exports: [router.RouterModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SignupRoutingModule, [{
            type: core.NgModule,
            args: [{
                    imports: [router.RouterModule.forChild(routes)],
                    exports: [router.RouterModule]
                }]
        }], null, null); })();

    var SignupModule = /** @class */ (function () {
        function SignupModule() {
        }
        SignupModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SignupModule });
        SignupModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SignupModule_Factory(t) { return new (t || SignupModule)(); }, imports: [[
                    SignupRoutingModule
                ]] });
        return SignupModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SignupModule, { declarations: [SignupComponent], imports: [SignupRoutingModule], exports: [SignupComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SignupModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [SignupComponent],
                    imports: [
                        SignupRoutingModule
                    ],
                    exports: [SignupComponent]
                }]
        }], null, null); })();

    exports.SignupComponent = SignupComponent;
    exports.SignupModule = SignupModule;
    exports.SignupService = SignupService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=signup.umd.js.map
