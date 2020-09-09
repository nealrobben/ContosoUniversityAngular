import { Component } from '@angular/core';
import { CoursesClient, CoursesOverviewVM } from '../contosouniversityangular-api';

@Component({
  selector: 'course-details',
  templateUrl: './courseDetails.component.html'
})
export class CourseDetailsComponent {

  //public vm: CoursesOverviewVM = new CoursesOverviewVM();
  //title = 'Courses';

  //constructor(private client: CoursesClient) {
  //  client.getAll().subscribe(result => {
  //    this.vm = result;
  //  }, error => console.error(error));
  //}

}
