import { NgModule } from '@angular/core';
import { InstructorOverviewComponent } from "./instructorOverview.component";

@NgModule({
  declarations: [
    InstructorOverviewComponent
  ],
  exports: [InstructorOverviewComponent]
})
export class InstructorModule { }
