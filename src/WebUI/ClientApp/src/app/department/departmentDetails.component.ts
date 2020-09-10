import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DepartmentsClient, DepartmentsOverviewVM, DepartmentDetailVM } from '../contosouniversityangular-api';

@Component({
  selector: 'department-details',
  templateUrl: './departmentDetails.component.html'
})
export class DepartmentDetailsComponent {

  public vm: DepartmentDetailVM = new DepartmentDetailVM();

  constructor(private client: DepartmentsClient, activeRoute: ActivatedRoute) {

    var departmentId = activeRoute.snapshot.params["id"];

    client.get(departmentId).subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }

}
