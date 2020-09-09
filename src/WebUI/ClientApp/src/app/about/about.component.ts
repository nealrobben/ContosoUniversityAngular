import { Component } from '@angular/core';
import { AboutClient, AboutInfoVM } from '../contosouniversityangular-api';

@Component({
  templateUrl: './about.component.html',
})
export class AboutComponent {

  public vm: AboutInfoVM = new AboutInfoVM();
  title = 'About';

  constructor(private client: AboutClient) {
    client.getAboutInfo().subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }

}
