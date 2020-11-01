import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { CoursesClient, CoursesOverviewVM, CourseDetailVM, DepartmentsLookupVM, DepartmentsClient, UpdateCourseCommand } from '../contosouniversityangular-api';

@Component({
  selector: 'course-edit',
  templateUrl: './courseEdit.component.html'
})
export class CourseEditComponent {

  public vm: CourseDetailVM = new CourseDetailVM();
  public departmentsLookupVM: DepartmentsLookupVM = new DepartmentsLookupVM();

  constructor(private client: CoursesClient, private departmentsclient: DepartmentsClient, activeRoute: ActivatedRoute, private router: Router) {

    var courseId = activeRoute.snapshot.params["id"];

    client.get(courseId).subscribe(result => {
      this.vm = result;
    }, error => console.error(error));

    departmentsclient.getLookup().subscribe(result => {
      this.departmentsLookupVM = result;
      console.log(result.departments.length);
    }, error => console.error(error));
  }

  save(form: NgForm) {

    if (form.valid) {

      var updateCommand = new UpdateCourseCommand();
      updateCommand.courseID = this.vm.courseID;
      updateCommand.title = this.vm.title;
      updateCommand.credits = this.vm.credits;
      updateCommand.departmentID = this.vm.departmentID;

      this.client.update(updateCommand).subscribe(result => {
        this.router.navigateByUrl("/courses");
      }, error => console.error(error));
    }
    else {
      console.log("form invalid");
    }
  }

}
