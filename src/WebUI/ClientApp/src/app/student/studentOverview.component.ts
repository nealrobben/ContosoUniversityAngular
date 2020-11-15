import { Component } from '@angular/core';
import { StudentsClient, StudentsOverviewVM } from '../contosouniversityangular-api';

@Component({
  selector: 'student-overview',
  templateUrl: './studentOverview.component.html'
})
export class StudentOverviewComponent {

  public vm: StudentsOverviewVM = new StudentsOverviewVM();
  title = 'Students';

  public currentFilter: string = "";

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

    var pageNumber = this.vm.pageNumber ?? 1;
    var searchString = this.vm.currentFilter ?? "";
    var sortOrder = this.vm.currentSort ?? "";

    this.client.getAll(sortOrder, "", searchString, pageNumber).subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }

  public backToFullList() {
    this.vm.currentFilter = "";
    this.getStudents();
  }

  public filter() {
    this.getStudents();
  }

  public sortByLastName() {
    //TODO: implement

    //Sort parameter values are:
    //"" -> last name ascending
    //name_desc
    //Date
    //date_desc

    if (this.vm.currentSort == "" || this.vm.currentSort == null) {
      this.vm.currentSort = "name_desc"
    }
    else {
      this.vm.currentSort = ""
    }

    this.getStudents();
  }

  public sortByEnrollmentDate() {

    if (this.vm.currentSort == "Date") {
      this.vm.currentSort = "date_desc"
    }
    else {
      this.vm.currentSort = "Date"
    }

    this.getStudents();
  }

  public previousPage() {
    if (this.vm.pageNumber > 1)
      this.vm.pageNumber -= 1;
    this.getStudents();
  }

  public nextPage() {
    if (this.vm.pageNumber < this.vm.totalPages)
      this.vm.pageNumber += 1;
    this.getStudents();
  }

}
