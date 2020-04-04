import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PatientsComponent } from './patients.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
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
    PatientsRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: PatientsRoutingModule });
    PatientsRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PatientsRoutingModule_Factory(t) { return new (t || PatientsRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
            RouterModule] });
    return PatientsRoutingModule;
}());
export { PatientsRoutingModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PatientsRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PatientsRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudHMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wYXRpZW50cy8iLCJzb3VyY2VzIjpbImxpYi9wYXRpZW50cy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBRXpELElBQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsTUFBTTtRQUNqQixVQUFVLEVBQUUsT0FBTztLQUNwQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixTQUFTLEVBQUUsaUJBQWlCO0tBQzdCO0NBQ0YsQ0FBQztBQUVGO0lBQUE7S0FJc0M7NkRBQXpCLHFCQUFxQjs2SEFBckIscUJBQXFCLGtCQUh2QixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsWUFBWTtnQ0FsQnhCO0NBb0JzQyxBQUp0QyxJQUlzQztTQUF6QixxQkFBcUI7d0ZBQXJCLHFCQUFxQiwwQ0FGdEIsWUFBWTtrREFFWCxxQkFBcUI7Y0FKakMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGF0aWVudHNDb21wb25lbnQgfSBmcm9tICcuL3BhdGllbnRzLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxyXG4gICAgcmVkaXJlY3RUbzogJ3BhZ2UxJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3BhZ2UxJyxcclxuICAgIGNvbXBvbmVudDogUGF0aWVudHNDb21wb25lbnRcclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhdGllbnRzUm91dGluZ01vZHVsZSB7IH1cclxuIl19