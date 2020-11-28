import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { InstructorsClient, InstructorDetailsVM, UpdateInstructorCommand } from '../contosouniversityangular-api';

@Component({
  selector: 'instructor-edit',
  templateUrl: './instructorEdit.component.html'
})
export class InstructorEditComponent {

  public vm: InstructorDetailsVM = new InstructorDetailsVM();
  public localHireDate = "";

  constructor(private client: InstructorsClient, activeRoute: ActivatedRoute, private router: Router) {

    var instructorId = activeRoute.snapshot.params["id"];

    client.get(instructorId).subscribe(result => {
      this.vm = result;
      this.localHireDate = this.ConvertDateToString(result.hireDate);
      console.log(this.localHireDate);

    }, error => console.error(error));
  }

  ConvertDateToString(dateIn: Date): string {
    var yyyy = dateIn.getFullYear();
    var mm = dateIn.getMonth() + 1; // getMonth() is zero-based
    var dd = dateIn.getDate();
    return String(yyyy + "-" + mm + "-" + dd); // Leading zeros for mm and dd
  }

  save(form: NgForm) {

    if (form.valid) {

      var updateCommand = new UpdateInstructorCommand();
      updateCommand.instructorID = this.vm.instructorID;
      updateCommand.firstName = this.vm.firstName;
      updateCommand.lastName = this.vm.lastName;
      updateCommand.hireDate = new Date(this.localHireDate);
      updateCommand.officeLocation = this.vm.officeLocation;

      this.client.update(updateCommand).subscribe(result => {
        this.router.navigateByUrl("/instructors");
      }, error => console.error(error));
    }
    else {
      console.log("form invalid");
    }
  }

}
