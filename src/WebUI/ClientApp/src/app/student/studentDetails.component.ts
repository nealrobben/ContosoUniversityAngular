import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { StudentsClient, StudentDetailsVM, Grade } from '../contosouniversityangular-api';

@Component({
  selector: 'student-details',
  templateUrl: './studentDetails.component.html'
})
export class StudentDetailsComponent {

  title = 'Students';

  public vm: StudentDetailsVM = new StudentDetailsVM();

  constructor(private client: StudentsClient, activeRoute: ActivatedRoute) {

    var studentId = activeRoute.snapshot.params["id"];

    client.get(studentId).subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }

  get Grade() { return Grade; }

}
