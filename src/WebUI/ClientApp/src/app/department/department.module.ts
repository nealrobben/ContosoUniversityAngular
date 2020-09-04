import { NgModule } from '@angular/core';
import { DepartmentOverviewComponent } from "./departmentOverview.component";

@NgModule({
  declarations: [
    DepartmentOverviewComponent
  ],
  exports: [DepartmentOverviewComponent]
})
export class DepartmentModule { }
