import { Component } from '@angular/core';
import { CoursesClient, CoursesOverviewVM } from '../contosouniversityangular-api';

@Component({
  selector: 'course-overview',
  templateUrl: './courseOverview.component.html'
})
export class CourseOverviewComponent {

  public vm: CoursesOverviewVM = new CoursesOverviewVM();
  title = 'Courses';

  constructor(private client: CoursesClient) {
    this.getCourses();
  }

  public deleteCourse(id: string, name: string) {
    if (confirm("Delete course: " + name + "?")) {
      this.client.delete(id).subscribe(result => {
        this.getCourses();
      }, error => console.error(error));
    }
  }

  private getCourses() {
    console.log("getCourses");
    this.client.getAll().subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }

}
