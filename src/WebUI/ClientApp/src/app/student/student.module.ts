import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

import { StudentOverviewComponent } from "./studentOverview.component";
import { StudentDetailsComponent } from "./studentDetails.component";
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
    StudentOverviewComponent, StudentComponent, StudentDetailsComponent
  ],
  exports: [StudentOverviewComponent, StudentComponent, StudentDetailsComponent]
})
export class StudentModule { }
