import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { StudentsClient, CreateStudentCommand } from '../contosouniversityangular-api';

@Component({
  selector: 'student-create',
  templateUrl: './studentCreate.component.html'
})
export class StudentCreateComponent {

  public student: CreateStudentCommand = new CreateStudentCommand();
  public localEnrollmentDate = new Date();

  constructor(private client: StudentsClient, private router: Router) {
  }

  save(form: NgForm) {

    this.student.enrollmentDate = new Date(this.localEnrollmentDate);

    if (form.valid) {
      this.client.create(this.student).subscribe(result => {
        this.router.navigateByUrl("/students");
      }, error => console.error(error));
    }
    else {
      console.log("form invalid");
    }
  }

}
