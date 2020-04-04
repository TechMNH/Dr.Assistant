import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

class SignupService {
    constructor() { }
}
SignupService.ɵfac = function SignupService_Factory(t) { return new (t || SignupService)(); };
SignupService.ɵprov = ɵɵdefineInjectable({ token: SignupService, factory: SignupService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SignupService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class SignupComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(); };
SignupComponent.ɵcmp = ɵɵdefineComponent({ type: SignupComponent, selectors: [["lib-signup"]], decls: 2, vars: 0, template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " signup works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SignupComponent, [{
        type: Component,
        args: [{
                selector: 'lib-signup',
                template: `
    <p>
      signup works!
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
        component: SignupComponent
    }
];
class SignupRoutingModule {
}
SignupRoutingModule.ɵmod = ɵɵdefineNgModule({ type: SignupRoutingModule });
SignupRoutingModule.ɵinj = ɵɵdefineInjector({ factory: function SignupRoutingModule_Factory(t) { return new (t || SignupRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
        RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SignupRoutingModule, { imports: [RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SignupRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();

class SignupModule {
}
SignupModule.ɵmod = ɵɵdefineNgModule({ type: SignupModule });
SignupModule.ɵinj = ɵɵdefineInjector({ factory: function SignupModule_Factory(t) { return new (t || SignupModule)(); }, imports: [[
            SignupRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SignupModule, { declarations: [SignupComponent], imports: [SignupRoutingModule], exports: [SignupComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SignupModule, [{
        type: NgModule,
        args: [{
                declarations: [SignupComponent],
                imports: [
                    SignupRoutingModule
                ],
                exports: [SignupComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of signup
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SignupComponent, SignupModule, SignupService };
//# sourceMappingURL=signup.js.map
