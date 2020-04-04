import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor.component';
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
        component: DoctorComponent
    }
];
export class DoctorRoutingModule {
}
DoctorRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: DoctorRoutingModule });
DoctorRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DoctorRoutingModule_Factory(t) { return new (t || DoctorRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
        RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DoctorRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DoctorRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdG9yLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZG9jdG9yLyIsInNvdXJjZXMiOlsibGliL2RvY3Rvci1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUVyRCxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLE1BQU07UUFDakIsVUFBVSxFQUFFLE9BQU87S0FDcEI7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsU0FBUyxFQUFFLGVBQWU7S0FDM0I7Q0FDRixDQUFDO0FBTUYsTUFBTSxPQUFPLG1CQUFtQjs7dURBQW5CLG1CQUFtQjtxSEFBbkIsbUJBQW1CLGtCQUhyQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsWUFBWTt3RkFFWCxtQkFBbUIsMENBRnBCLFlBQVk7a0RBRVgsbUJBQW1CO2NBSi9CLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERvY3RvckNvbXBvbmVudCB9IGZyb20gJy4vZG9jdG9yLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxyXG4gICAgcmVkaXJlY3RUbzogJ3BhZ2UxJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3BhZ2UxJyxcclxuICAgIGNvbXBvbmVudDogRG9jdG9yQ29tcG9uZW50XHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEb2N0b3JSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=