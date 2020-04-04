import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilityComponent } from './utility.component';
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
        component: UtilityComponent
    }
];
export class UtilityRoutingModule {
}
UtilityRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: UtilityRoutingModule });
UtilityRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UtilityRoutingModule_Factory(t) { return new (t || UtilityRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
        RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UtilityRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UtilityRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3V0aWxpdHkvIiwic291cmNlcyI6WyJsaWIvdXRpbGl0eS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRXZELE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsTUFBTTtRQUNqQixVQUFVLEVBQUUsT0FBTztLQUNwQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixTQUFTLEVBQUUsZ0JBQWdCO0tBQzVCO0NBQ0YsQ0FBQztBQU1GLE1BQU0sT0FBTyxvQkFBb0I7O3dEQUFwQixvQkFBb0I7dUhBQXBCLG9CQUFvQixrQkFIdEIsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLFlBQVk7d0ZBRVgsb0JBQW9CLDBDQUZyQixZQUFZO2tEQUVYLG9CQUFvQjtjQUpoQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBVdGlsaXR5Q29tcG9uZW50IH0gZnJvbSAnLi91dGlsaXR5LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxyXG4gICAgcmVkaXJlY3RUbzogJ3BhZ2UxJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3BhZ2UxJyxcclxuICAgIGNvbXBvbmVudDogVXRpbGl0eUNvbXBvbmVudFxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXRpbGl0eVJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==