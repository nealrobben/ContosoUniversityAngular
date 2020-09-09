import { Component } from '@angular/core';
import { DepartmentsClient, DepartmentsOverviewVM } from '../contosouniversityangular-api';

@Component({
  selector: 'department-details',
  templateUrl: './departmentDetails.component.html'
})
export class DepartmentDetailsComponent {

  //public vm: DepartmentsOverviewVM = new DepartmentsOverviewVM();
  //title = 'Department details';

  //constructor(private client: DepartmentsClient) {
  //  client.getAll().subscribe(result => {
  //    this.vm = result;
  //  }, error => console.error(error));
  //}

}
