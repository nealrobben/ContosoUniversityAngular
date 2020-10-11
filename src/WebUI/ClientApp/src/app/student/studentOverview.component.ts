import { Component } from '@angular/core';
import { StudentsClient, StudentsOverviewVM } from '../contosouniversityangular-api';

@Component({
  selector: 'student-overview',
  templateUrl: './studentOverview.component.html'
})
export class StudentOverviewComponent {

  public vm: StudentsOverviewVM = new StudentsOverviewVM();
  title = 'Students';

  constructor(private client: StudentsClient) {
    this.getStudents();
  }

  public deleteStudent(id: string, name: string) {
    if (confirm("Delete student: " + name + "?")) {
      this.client.delete(id).subscribe(result => {
        this.getStudents();
      }, error => console.error(error));
    }
  }

  private getStudents() {
    console.log("getStudents");
    //this.client.getAll().subscribe(result => {
    //  this.vm = result;
    //}, error => console.error(error));
  }

}
