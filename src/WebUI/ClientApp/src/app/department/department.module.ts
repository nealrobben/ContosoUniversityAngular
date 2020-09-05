import { NgModule } from '@angular/core';
import { DepartmentOverviewComponent } from "./departmentOverview.component";
import { DepartmentComponent } from "./department.component";

@NgModule({
  declarations: [
    DepartmentOverviewComponent, DepartmentComponent
  ],
  exports: [DepartmentOverviewComponent, DepartmentComponent]
})
export class DepartmentModule { }
