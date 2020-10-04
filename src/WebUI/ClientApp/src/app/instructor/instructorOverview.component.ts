import { Component } from '@angular/core';
import { InstructorsClient, InstructorsOverviewVM, CoursesClient, CoursesForInstructorOverviewVM, StudentsClient, StudentsForCourseVM } from '../contosouniversityangular-api';

@Component({
  selector: 'instructor-overview',
  templateUrl: './instructorOverview.component.html'
})
export class InstructorOverviewComponent {

  public vm: InstructorsOverviewVM = new InstructorsOverviewVM();
  public coursesOverviewVm: CoursesForInstructorOverviewVM = new CoursesForInstructorOverviewVM();
  public studentsOverviewVM: StudentsForCourseVM = new StudentsForCourseVM();
  public selectedInstructorID: string;
  public selectedCourseID: string;

  title = 'Instructors';

  constructor(private client: InstructorsClient, private coursesClient: CoursesClient, private studentsClient: StudentsClient) {
    this.getInstructors();
  }

  public selectInstructor(id: string) {

    this.selectedInstructorID = id;
    this.selectedCourseID = "";
    this.coursesOverviewVm = new CoursesForInstructorOverviewVM();
    this.studentsOverviewVM = new StudentsForCourseVM();

    this.coursesClient.byInstructor(id).subscribe(result => {
      this.coursesOverviewVm = result;
    }, error => console.error(error));
  }

  public selectCourse(id: string) {

    this.studentsOverviewVM = new StudentsForCourseVM();
    this.selectedCourseID = id;

    this.studentsClient.byCourse(id).subscribe(result => {
      this.studentsOverviewVM = result;
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
