import { NgModule } from '@angular/core';

import { CourseOverviewComponent } from "./courseOverview.component";
import { CourseComponent } from "./course.component";

@NgModule({
  declarations: [
    CourseOverviewComponent, CourseComponent
  ],
  exports: [CourseOverviewComponent, CourseComponent]
})
export class CourseModule { }
