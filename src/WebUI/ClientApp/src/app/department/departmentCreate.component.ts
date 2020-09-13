import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { DepartmentsClient, CreateDepartmentCommand,  } from '../contosouniversityangular-api';

@Component({
  selector: 'department-create',
  templateUrl: './departmentCreate.component.html'
})
export class DepartmentCreateComponent {

  public department: CreateDepartmentCommand = new CreateDepartmentCommand();

  constructor(private client: DepartmentsClient, private router: Router) {
    this.department.startDate = new Date();
  }

  save(form: NgForm) {
    this.client.create(this.department).subscribe(result => {
      this.router.navigateByUrl("/departments");
    }, error => console.error(error));
  }

}
