import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { CoursesClient, CoursesOverviewVM, CourseDetailVM } from '../contosouniversityangular-api';

@Component({
  selector: 'course-create',
  templateUrl: './courseCreate.component.html'
})
export class CourseCreateComponent {

  //public vm: CourseDetailVM = new CourseDetailVM();

  //constructor(private client: CoursesClient, activeRoute: ActivatedRoute) {

  //  var courseId = activeRoute.snapshot.params["id"];

  //  client.get(courseId).subscribe(result => {
  //    this.vm = result;
  //  }, error => console.error(error));
  //}

}
