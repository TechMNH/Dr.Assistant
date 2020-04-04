import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
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
        component: AdminComponent
    }
];
export class AdminRoutingModule {
}
AdminRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
        RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AdminRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AdminRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9hZG1pbi1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQUVuRCxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLE1BQU07UUFDakIsVUFBVSxFQUFFLE9BQU87S0FDcEI7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsU0FBUyxFQUFFLGNBQWM7S0FDMUI7Q0FDRixDQUFDO0FBTUYsTUFBTSxPQUFPLGtCQUFrQjs7c0RBQWxCLGtCQUFrQjttSEFBbEIsa0JBQWtCLGtCQUhwQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsWUFBWTt3RkFFWCxrQkFBa0IsMENBRm5CLFlBQVk7a0RBRVgsa0JBQWtCO2NBSjlCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgcGF0aE1hdGNoOiAnZnVsbCcsXG4gICAgcmVkaXJlY3RUbzogJ3BhZ2UxJ1xuICB9LFxuICB7XG4gICAgcGF0aDogJ3BhZ2UxJyxcbiAgICBjb21wb25lbnQ6IEFkbWluQ29tcG9uZW50XG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==