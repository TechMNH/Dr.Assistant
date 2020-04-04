import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PatientsComponent } from './patients.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
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
export class PatientsRoutingModule {
}
PatientsRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: PatientsRoutingModule });
PatientsRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PatientsRoutingModule_Factory(t) { return new (t || PatientsRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
        RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PatientsRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PatientsRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudHMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wYXRpZW50cy8iLCJzb3VyY2VzIjpbImxpYi9wYXRpZW50cy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBRXpELE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsTUFBTTtRQUNqQixVQUFVLEVBQUUsT0FBTztLQUNwQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixTQUFTLEVBQUUsaUJBQWlCO0tBQzdCO0NBQ0YsQ0FBQztBQU1GLE1BQU0sT0FBTyxxQkFBcUI7O3lEQUFyQixxQkFBcUI7eUhBQXJCLHFCQUFxQixrQkFIdkIsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLFlBQVk7d0ZBRVgscUJBQXFCLDBDQUZ0QixZQUFZO2tEQUVYLHFCQUFxQjtjQUpqQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYXRpZW50c0NvbXBvbmVudCB9IGZyb20gJy4vcGF0aWVudHMuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgcGF0aE1hdGNoOiAnZnVsbCcsXHJcbiAgICByZWRpcmVjdFRvOiAncGFnZTEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncGFnZTEnLFxyXG4gICAgY29tcG9uZW50OiBQYXRpZW50c0NvbXBvbmVudFxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF0aWVudHNSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=