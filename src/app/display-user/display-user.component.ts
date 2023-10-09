import { Component, DoCheck, EventEmitter, Output, inject } from '@angular/core';
import { ContactDataService } from 'src/services/contact-data.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css'],
})
export class DisplayUserComponent implements DoCheck {
  @Output() editEvent = new EventEmitter<Object>();
  dataservice = inject(ContactDataService);
  usersData : any = null;
  constructor() {}

  ngDoCheck(): void {
    this.usersData = this.dataservice.allUserInfo;
  }

  dataFromChild(event: any) {
    this.editEvent.emit(event);
  }
}
