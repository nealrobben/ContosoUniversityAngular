import { NgModule } from '@angular/core';
import { CourseOverviewComponent } from "./courseOverview.component";

@NgModule({
  declarations: [
    CourseOverviewComponent
  ],
  exports: [CourseOverviewComponent]
})
export class CourseModule { }
