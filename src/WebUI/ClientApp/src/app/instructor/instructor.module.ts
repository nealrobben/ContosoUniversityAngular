import { NgModule } from '@angular/core';

import { InstructorOverviewComponent } from "./instructorOverview.component";
import { InstructorComponent } from "./instructor.component";

@NgModule({
  declarations: [
    InstructorOverviewComponent, InstructorComponent
  ],
  exports: [InstructorOverviewComponent, InstructorComponent]
})
export class InstructorModule { }
