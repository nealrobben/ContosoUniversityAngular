import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { DepartmentsClient, DepartmentDetailVM, UpdateDepartmentCommand, InstructorsClient, InstructorsLookupVM } from '../contosouniversityangular-api';

@Component({
  selector: 'department-edit',
  templateUrl: './departmentEdit.component.html'
})
export class DepartmentEditComponent {

  public vm: DepartmentDetailVM = new DepartmentDetailVM();
  public instructorsLookupVM: InstructorsLookupVM = new InstructorsLookupVM();
  public localStartDate = "";

  constructor(private client: DepartmentsClient, private instructorsClient: InstructorsClient, activeRoute: ActivatedRoute, private router: Router) {

    var departmentId = activeRoute.snapshot.params["id"];

    client.get(departmentId).subscribe(result => {
      this.vm = result;
      this.localStartDate = result.startDate.toISOString();
    }, error => console.error(error));

    instructorsClient.getLookup().subscribe(result => {
      this.instructorsLookupVM = result;
      console.log(result.instructors.length);
    }, error => console.error(error));
  }

  save(form: NgForm) {

    if (form.valid) {

      var updateCommand = new UpdateDepartmentCommand();
      updateCommand.departmentID = this.vm.departmentID;
      updateCommand.name = this.vm.name;
      updateCommand.budget = this.vm.budget;
      updateCommand.instructorID = this.vm.instructorID;
      updateCommand.startDate = new Date(this.localStartDate);
      updateCommand.rowVersion = this.vm.rowVersion;

      this.client.update(updateCommand).subscribe(result => {
        this.router.navigateByUrl("/departments");
      }, error => console.error(error));
    }
    else {
      console.log("form invalid");
    }
  }

}
