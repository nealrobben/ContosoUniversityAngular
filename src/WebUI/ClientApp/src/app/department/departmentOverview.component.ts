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
    this.getDepartments();
  }

  public deleteDepartment(id: string, name: string) {
    if (confirm("Delete department: " + name + "?")) {
      this.client.delete(id).subscribe(result => {
        this.getDepartments();
      }, error => console.error(error));
    }
  }

  private getDepartments() {
    console.log("getDepartments");
    this.client.getAll().subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }

}
