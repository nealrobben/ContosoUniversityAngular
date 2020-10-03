import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { InstructorOverviewComponent } from "./instructorOverview.component";
import { InstructorDetailsComponent } from "./instructorDetails.component";
import { InstructorEditComponent } from "./instructorEdit.component";
import { InstructorCreateComponent } from "./instructorCreate.component";
import { InstructorComponent } from "./instructor.component";

@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  declarations: [
    InstructorOverviewComponent, InstructorComponent, InstructorDetailsComponent, InstructorEditComponent, InstructorCreateComponent
  ],
  exports: [InstructorOverviewComponent, InstructorComponent, InstructorDetailsComponent, InstructorEditComponent, InstructorCreateComponent]
})
export class InstructorModule { }
