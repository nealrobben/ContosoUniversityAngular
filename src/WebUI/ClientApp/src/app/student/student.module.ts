import { NgModule } from '@angular/core';
import { StudentOverviewComponent } from "./studentOverview.component";

@NgModule({
  declarations: [
    StudentOverviewComponent
  ],
  exports: [StudentOverviewComponent]
})
export class StudentModule { }
