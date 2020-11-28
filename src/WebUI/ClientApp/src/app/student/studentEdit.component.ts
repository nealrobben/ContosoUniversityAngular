import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { StudentsClient, StudentDetailsVM, UpdateStudentCommand } from '../contosouniversityangular-api';

@Component({
  selector: 'student-edit',
  templateUrl: './studentEdit.component.html'
})
export class StudentEditComponent {

  public vm: StudentDetailsVM = new StudentDetailsVM();
  public localEnrollmentDate = "";

  constructor(private client: StudentsClient, activeRoute: ActivatedRoute, private router: Router) {

    var studentId = activeRoute.snapshot.params["id"];

    client.get(studentId).subscribe(result => {
      this.vm = result;
      this.localEnrollmentDate = this.ConvertDateToString(result.enrollmentDate);
      console.log(this.localEnrollmentDate);

    }, error => console.error(error));
  }

  ConvertDateToString(dateIn: Date): string {
    var yyyy = dateIn.getFullYear();
    var mm = (dateIn.getMonth() + 1).toString().padStart(2, "0"); // getMonth() is zero-based
    var dd = (dateIn.getDate()).toString().padStart(2, "0");
    return String(yyyy + "-" + mm + "-" + dd); // Leading zeros for mm and dd
  }

  save(form: NgForm) {

    if (form.valid) {

      var updateCommand = new UpdateStudentCommand();
      updateCommand.studentID = this.vm.studentID;
      updateCommand.firstName = this.vm.firstName;
      updateCommand.lastName = this.vm.lastName;
      updateCommand.enrollmentDate = new Date(this.localEnrollmentDate);

      this.client.update(updateCommand).subscribe(result => {
        this.router.navigateByUrl("/students");
      }, error => console.error(error));
    }
    else {
      console.log("form invalid");
    }
  }

}
