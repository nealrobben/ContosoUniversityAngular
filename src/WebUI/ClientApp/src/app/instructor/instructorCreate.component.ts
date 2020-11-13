import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { InstructorsClient, CreateInstructorCommand } from '../contosouniversityangular-api';

@Component({
  selector: 'instructor-create',
  templateUrl: './instructorCreate.component.html'
})
export class InstructorCreateComponent {

  public instructor: CreateInstructorCommand = new CreateInstructorCommand();
  public localHireDate = new Date();

  constructor(private client: InstructorsClient, private router: Router) {
  }

  save(form: NgForm) {

    //Set date because datepicker returns a string
    this.instructor.hireDate = new Date(this.localHireDate)

    if (form.valid) {
      this.client.create(this.instructor).subscribe(result => {
        this.router.navigateByUrl("/instructors");
      }, error => console.error(error));
    }
    else {
      console.log("form invalid");
    }
  }

}
