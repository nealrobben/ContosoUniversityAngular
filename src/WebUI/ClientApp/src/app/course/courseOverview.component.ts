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
    client.getAll().subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }

}
