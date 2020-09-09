import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentOverviewComponent } from "./departmentOverview.component";
import { DepartmentDetailsComponent } from "./departmentDetails.component";
import { DepartmentComponent } from "./department.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DepartmentOverviewComponent, DepartmentComponent, DepartmentDetailsComponent
  ],
  providers: [],
  exports: [DepartmentOverviewComponent, DepartmentComponent, DepartmentDetailsComponent]
})
export class DepartmentModule { }
