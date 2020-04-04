import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

var AdminService = /** @class */ (function () {
    function AdminService() {
    }
    AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(); };
    AdminService.ɵprov = ɵɵdefineInjectable({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });
    return AdminService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AdminService, [{
        type: Injectable,
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
    AdminComponent.ɵcmp = ɵɵdefineComponent({ type: AdminComponent, selectors: [["lib-admin"]], decls: 2, vars: 0, template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " admin works! ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return AdminComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AdminComponent, [{
        type: Component,
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
    AdminRoutingModule.ɵmod = ɵɵdefineNgModule({ type: AdminRoutingModule });
    AdminRoutingModule.ɵinj = ɵɵdefineInjector({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
            RouterModule] });
    return AdminRoutingModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AdminRoutingModule, { imports: [RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AdminRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();

var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule.ɵmod = ɵɵdefineNgModule({ type: AdminModule });
    AdminModule.ɵinj = ɵɵdefineInjector({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[
                AdminRoutingModule
            ]] });
    return AdminModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AdminModule, { declarations: [AdminComponent], imports: [AdminRoutingModule], exports: [AdminComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AdminModule, [{
        type: NgModule,
        args: [{
                declarations: [AdminComponent],
                imports: [
                    AdminRoutingModule
                ],
                exports: [AdminComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of admin
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AdminComponent, AdminModule, AdminService };
//# sourceMappingURL=admin.js.map
