import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor.component';
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
        component: DoctorComponent
    }
];
var DoctorRoutingModule = /** @class */ (function () {
    function DoctorRoutingModule() {
    }
    DoctorRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: DoctorRoutingModule });
    DoctorRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DoctorRoutingModule_Factory(t) { return new (t || DoctorRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
            RouterModule] });
    return DoctorRoutingModule;
}());
export { DoctorRoutingModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DoctorRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DoctorRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdG9yLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZG9jdG9yLyIsInNvdXJjZXMiOlsibGliL2RvY3Rvci1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUVyRCxJQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLE1BQU07UUFDakIsVUFBVSxFQUFFLE9BQU87S0FDcEI7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsU0FBUyxFQUFFLGVBQWU7S0FDM0I7Q0FDRixDQUFDO0FBRUY7SUFBQTtLQUlvQzsyREFBdkIsbUJBQW1CO3lIQUFuQixtQkFBbUIsa0JBSHJCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixZQUFZOzhCQWxCeEI7Q0FvQm9DLEFBSnBDLElBSW9DO1NBQXZCLG1CQUFtQjt3RkFBbkIsbUJBQW1CLDBDQUZwQixZQUFZO2tEQUVYLG1CQUFtQjtjQUovQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEb2N0b3JDb21wb25lbnQgfSBmcm9tICcuL2RvY3Rvci5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJyxcclxuICAgIHJlZGlyZWN0VG86ICdwYWdlMSdcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdwYWdlMScsXHJcbiAgICBjb21wb25lbnQ6IERvY3RvckNvbXBvbmVudFxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRG9jdG9yUm91dGluZ01vZHVsZSB7IH1cclxuIl19