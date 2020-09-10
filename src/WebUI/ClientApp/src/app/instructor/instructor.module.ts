import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InstructorOverviewComponent } from "./instructorOverview.component";
import { InstructorDetailsComponent } from "./instructorDetails.component";
import { InstructorEditComponent } from "./instructorEdit.component";
import { InstructorComponent } from "./instructor.component";

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [
    InstructorOverviewComponent, InstructorComponent, InstructorDetailsComponent, InstructorEditComponent
  ],
  exports: [InstructorOverviewComponent, InstructorComponent, InstructorDetailsComponent, InstructorEditComponent]
})
export class InstructorModule { }
