import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilityComponent } from './utility.component';
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
        component: UtilityComponent
    }
];
var UtilityRoutingModule = /** @class */ (function () {
    function UtilityRoutingModule() {
    }
    UtilityRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: UtilityRoutingModule });
    UtilityRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UtilityRoutingModule_Factory(t) { return new (t || UtilityRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
            RouterModule] });
    return UtilityRoutingModule;
}());
export { UtilityRoutingModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UtilityRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UtilityRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3V0aWxpdHkvIiwic291cmNlcyI6WyJsaWIvdXRpbGl0eS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRXZELElBQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsTUFBTTtRQUNqQixVQUFVLEVBQUUsT0FBTztLQUNwQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixTQUFTLEVBQUUsZ0JBQWdCO0tBQzVCO0NBQ0YsQ0FBQztBQUVGO0lBQUE7S0FJcUM7NERBQXhCLG9CQUFvQjsySEFBcEIsb0JBQW9CLGtCQUh0QixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsWUFBWTsrQkFsQnhCO0NBb0JxQyxBQUpyQyxJQUlxQztTQUF4QixvQkFBb0I7d0ZBQXBCLG9CQUFvQiwwQ0FGckIsWUFBWTtrREFFWCxvQkFBb0I7Y0FKaEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVXRpbGl0eUNvbXBvbmVudCB9IGZyb20gJy4vdXRpbGl0eS5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJyxcclxuICAgIHJlZGlyZWN0VG86ICdwYWdlMSdcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdwYWdlMScsXHJcbiAgICBjb21wb25lbnQ6IFV0aWxpdHlDb21wb25lbnRcclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFV0aWxpdHlSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=