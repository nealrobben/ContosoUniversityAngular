import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentOverviewComponent } from "./departmentOverview.component";
import { DepartmentComponent } from "./department.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DepartmentOverviewComponent, DepartmentComponent
  ],
  providers: [],
  exports: [DepartmentOverviewComponent, DepartmentComponent]
})
export class DepartmentModule { }
