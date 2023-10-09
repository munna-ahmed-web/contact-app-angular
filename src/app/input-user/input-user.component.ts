import { Component, DoCheck, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ContactDataService } from 'src/services/contact-data.service';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css'],
})
export class InputUserComponent {
  userService = inject(ContactDataService);
  @Input('editUser') editUserData: any;

  isEmptyObject(obj: Object) {
    return JSON.stringify(obj) === '{}';
  }

  hasData : boolean = false;
  isConfirmed: boolean = true;

  initialObj = {
    name: '',
    email: '',
    phone: null,
    address: '',
  };

  user: any = {
    ...this.initialObj,
  };

  handleSubmit = () => {
    this.userService.setUserInfo(this.user);
    this.user = { ...this.initialObj };
  };

  handleConfirm() {
    this.user = {
      ...this.editUserData,
    };
    this.userService.deleteUser(this.editUserData);
    this.isConfirmed = !this.isConfirmed;
  }

  handleCancel() {
    this.isConfirmed = !this.isConfirmed;
  }
}
