import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { CoursesClient, CreateCourseCommand } from '../contosouniversityangular-api';

@Component({
  selector: 'course-create',
  templateUrl: './courseCreate.component.html'
})
export class CourseCreateComponent {

  public course: CreateCourseCommand = new CreateCourseCommand();

  constructor(private client: CoursesClient, private router: Router) {

  }

  save(form: NgForm) {
    this.client.create(this.course).subscribe(result => {
      this.router.navigateByUrl("/courses");
    }, error => console.error(error));
  }

}
