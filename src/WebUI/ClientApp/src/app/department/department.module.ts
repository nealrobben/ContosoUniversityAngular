import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DepartmentOverviewComponent } from "./departmentOverview.component";
import { DepartmentDetailsComponent } from "./departmentDetails.component";
import { DepartmentEditComponent } from "./departmentEdit.component";
import { DepartmentComponent } from "./department.component";

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [
    DepartmentOverviewComponent, DepartmentComponent, DepartmentDetailsComponent, DepartmentEditComponent
  ],
  providers: [],
  exports: [DepartmentOverviewComponent, DepartmentComponent, DepartmentDetailsComponent, DepartmentEditComponent]
})
export class DepartmentModule { }
