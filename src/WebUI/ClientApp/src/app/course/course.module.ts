import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseOverviewComponent } from "./courseOverview.component";
import { CourseDetailsComponent } from "./courseDetails.component";
import { CourseComponent } from "./course.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CourseOverviewComponent, CourseComponent, CourseDetailsComponent
  ],
  exports: [CourseOverviewComponent, CourseComponent, CourseDetailsComponent]
})
export class CourseModule { }
