import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CourseOverviewComponent } from "./courseOverview.component";
import { CourseDetailsComponent } from "./courseDetails.component";
import { CourseEditComponent } from "./courseEdit.component";
import { CourseCreateComponent } from "./courseCreate.component";
import { CourseComponent } from "./course.component";

@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  declarations: [
    CourseOverviewComponent, CourseComponent, CourseDetailsComponent, CourseEditComponent, CourseCreateComponent
  ],
  exports: [CourseOverviewComponent, CourseComponent, CourseDetailsComponent, CourseEditComponent, CourseCreateComponent]
})
export class CourseModule { }
