import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { DepartmentsClient, CreateDepartmentCommand, InstructorsClient, InstructorsLookupVM } from '../contosouniversityangular-api';

@Component({
  selector: 'department-create',
  templateUrl: './departmentCreate.component.html'
})
export class DepartmentCreateComponent {

  public department: CreateDepartmentCommand = new CreateDepartmentCommand();
  public instructorsLookupVM: InstructorsLookupVM = new InstructorsLookupVM();
  public localStartDate = new Date();

  constructor(private client: DepartmentsClient, private instructorsClient: InstructorsClient, private router: Router) {

    instructorsClient.getLookup().subscribe(result => {
      this.instructorsLookupVM = result;
      console.log(result.instructors.length);
    }, error => console.error(error));
  }

  save(form: NgForm) {

    this.department.startDate = new Date(this.localStartDate);

    if (form.valid) {
      this.client.create(this.department).subscribe(result => {
        this.router.navigateByUrl("/departments");
      }, error => console.error(error));
    }
    else {
      console.log("form invalid");
    }
  }

}
