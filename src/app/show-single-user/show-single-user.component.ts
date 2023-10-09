import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ContactDataService } from 'src/services/contact-data.service';

@Component({
  selector: 'app-show-single-user',
  templateUrl: './show-single-user.component.html',
  styleUrls: ['./show-single-user.component.css'],
})
export class ShowSingleUserComponent {
  @Input('singleUser') user: any;
  @Output() editEvent = new EventEmitter<Object>();
  services = inject(ContactDataService);

  handleDelete = (user: any) => {
    this.services.deleteUser(user);
  };

  
  handleEdit = (user: any) =>{
     this.editEvent.emit(user)
  }
}


