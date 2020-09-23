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

  constructor(private client: InstructorsClient) {
  }

  save(form: NgForm) {

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
