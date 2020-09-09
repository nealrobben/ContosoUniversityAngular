import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseOverviewComponent } from "./courseOverview.component";
import { CourseComponent } from "./course.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CourseOverviewComponent, CourseComponent
  ],
  exports: [CourseOverviewComponent, CourseComponent]
})
export class CourseModule { }
