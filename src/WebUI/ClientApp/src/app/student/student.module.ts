import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

import { StudentOverviewComponent } from "./studentOverview.component";
import { StudentDetailsComponent } from "./studentDetails.component";
import { StudentEditComponent } from "./studentEdit.component";
import { StudentCreateComponent } from "./studentCreate.component";
import { StudentComponent } from "./student.component";

//let routing = RouterModule.forChild([
//  {
//    path: "", component: StudentComponent,
//    children: [
//      { path: "students", component: StudentOverviewComponent },
//      { path: "**", redirectTo: "students" }
//    ]
//  }
//]);

@NgModule({
  imports: [
    CommonModule,
    RouterModule
    //routing
  ],
  declarations: [
    StudentOverviewComponent, StudentComponent, StudentDetailsComponent, StudentEditComponent, StudentCreateComponent
  ],
  exports: [StudentOverviewComponent, StudentComponent, StudentDetailsComponent, StudentEditComponent, StudentCreateComponent]
})
export class StudentModule { }
