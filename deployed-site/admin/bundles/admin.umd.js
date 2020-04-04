(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('admin', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = global || self, factory(global.admin = {}, global.ng.core, global.ng.router));
}(this, (function (exports, core, router) { 'use strict';

    var AdminService = /** @class */ (function () {
        function AdminService() {
        }
        AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(); };
        AdminService.ɵprov = core["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });
        return AdminService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AdminService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var AdminComponent = /** @class */ (function () {
        function AdminComponent() {
        }
        AdminComponent.prototype.ngOnInit = function () {
            console.log("admin works");
        };
        AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
        AdminComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["lib-admin"]], decls: 2, vars: 0, template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, " admin works! ");
                core["ɵɵelementEnd"]();
            } }, encapsulation: 2 });
        return AdminComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AdminComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-admin',
                    template: "\n    <p>\n      admin works!\n    </p>\n  ",
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
            component: AdminComponent
        }
    ];
    var AdminRoutingModule = /** @class */ (function () {
        function AdminRoutingModule() {
        }
        AdminRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
        AdminRoutingModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[router.RouterModule.forChild(routes)],
                router.RouterModule] });
        return AdminRoutingModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [router.RouterModule], exports: [router.RouterModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AdminRoutingModule, [{
            type: core.NgModule,
            args: [{
                    imports: [router.RouterModule.forChild(routes)],
                    exports: [router.RouterModule]
                }]
        }], null, null); })();

    var AdminModule = /** @class */ (function () {
        function AdminModule() {
        }
        AdminModule.ɵmod = core["ɵɵdefineNgModule"]({ type: AdminModule });
        AdminModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[
                    AdminRoutingModule
                ]] });
        return AdminModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](AdminModule, { declarations: [AdminComponent], imports: [AdminRoutingModule], exports: [AdminComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AdminModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [AdminComponent],
                    imports: [
                        AdminRoutingModule
                    ],
                    exports: [AdminComponent]
                }]
        }], null, null); })();

    exports.AdminComponent = AdminComponent;
    exports.AdminModule = AdminModule;
    exports.AdminService = AdminService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=admin.umd.js.map
