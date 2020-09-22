import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { InstructorsClient, InstructorDetailsVM } from '../contosouniversityangular-api';

@Component({
  selector: 'instructor-overview',
  templateUrl: './instructorDetails.component.html'
})
export class InstructorDetailsComponent {

  public vm: InstructorDetailsVM = new InstructorDetailsVM();

  constructor(private client: InstructorsClient, activeRoute: ActivatedRoute) {

    var instructorId = activeRoute.snapshot.params["id"];

    client.get(instructorId).subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }

}
