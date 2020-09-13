import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DepartmentOverviewComponent } from "./departmentOverview.component";
import { DepartmentDetailsComponent } from "./departmentDetails.component";
import { DepartmentEditComponent } from "./departmentEdit.component";
import { DepartmentCreateComponent } from "./departmentCreate.component";
import { DepartmentComponent } from "./department.component";

@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  declarations: [
    DepartmentOverviewComponent, DepartmentComponent, DepartmentDetailsComponent, DepartmentEditComponent, DepartmentCreateComponent
  ],
  providers: [],
  exports: [DepartmentOverviewComponent, DepartmentComponent, DepartmentDetailsComponent, DepartmentEditComponent, DepartmentCreateComponent]
})
export class DepartmentModule { }
