import { Component } from '@angular/core';
import { DepartmentsClient, DepartmentsOverviewVM } from '../contosouniversityangular-api';

@Component({
  selector: 'department-overview',
  templateUrl: './departmentOverview.component.html'
})
export class DepartmentOverviewComponent {

  public vm: DepartmentsOverviewVM = new DepartmentsOverviewVM();
  title = 'Departments';

  constructor(private client: DepartmentsClient) {
    client.getAll().subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }

}
