import { Component } from '@angular/core';
import { InstructorsClient, InstructorsOverviewVM, CoursesClient, CoursesForInstructorOverviewVM } from '../contosouniversityangular-api';

@Component({
  selector: 'instructor-overview',
  templateUrl: './instructorOverview.component.html'
})
export class InstructorOverviewComponent {

  public vm: InstructorsOverviewVM = new InstructorsOverviewVM();
  public coursesOverviewVm: CoursesForInstructorOverviewVM = new CoursesForInstructorOverviewVM();

  title = 'Instructors';

  constructor(private client: InstructorsClient, private coursesClient: CoursesClient) {
    this.getInstructors();
  }

  public selectInstructor(id: string) {
    this.coursesClient.byInstructor(id).subscribe(result => {
      this.coursesOverviewVm = result;
    }, error => console.error(error));
  }

  public deleteInstructor(id: string, name: string) {
    if (confirm("Delete instructor: " + name + "?")) {
      this.client.delete(id).subscribe(result => {
        this.getInstructors();
      }, error => console.error(error));
    }
  }

  private getInstructors() {
    console.log("getInstructors");
    this.client.getAll().subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }

}
