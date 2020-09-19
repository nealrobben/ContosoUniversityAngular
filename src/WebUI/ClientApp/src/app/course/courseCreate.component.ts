import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { CoursesClient, CreateCourseCommand, DepartmentsClient, DepartmentsLookupVM } from '../contosouniversityangular-api';

@Component({
  selector: 'course-create',
  templateUrl: './courseCreate.component.html'
})
export class CourseCreateComponent {

  public course: CreateCourseCommand = new CreateCourseCommand();
  public departmentsLookupVM: DepartmentsLookupVM = new DepartmentsLookupVM();

  constructor(private client: CoursesClient, private departmentsclient: DepartmentsClient, private router: Router) {

    departmentsclient.getLookup().subscribe(result => {
      this.departmentsLookupVM = result;
      console.log(result.departments.length);
    }, error => console.error(error));

  }

  save(form: NgForm) {

    if (form.valid) {
      this.client.create(this.course).subscribe(result => {
        this.router.navigateByUrl("/courses");
      }, error => console.error(error));
    }
    else {
      console.log("form invalid");
    }
  }

}
