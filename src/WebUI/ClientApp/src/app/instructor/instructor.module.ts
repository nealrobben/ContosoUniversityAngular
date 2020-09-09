import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorOverviewComponent } from "./instructorOverview.component";
import { InstructorComponent } from "./instructor.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InstructorOverviewComponent, InstructorComponent
  ],
  exports: [InstructorOverviewComponent, InstructorComponent]
})
export class InstructorModule { }
