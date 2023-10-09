import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, inject } from '@angular/core';
import { ContactDataService } from 'src/services/contact-data.service';
import { UserDataShape } from 'src/types/type';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css'],
})
export class InputUserComponent implements OnChanges {
  userService = inject(ContactDataService);
  @Input('editUser') editUserData: any;
  duplicateData: any = null;

  isEmptyObject(obj: Object) {
    return JSON.stringify(obj) === '{}';
  }

  isObjectReady = (obj: UserDataShape) => {
    if (obj.phone && obj.email && obj.email) {
      return true;
    } else {
      return false;
    }
  };

  hasData: boolean = false;
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
    if (this.hasData) {
      this.hasData = false;
    }
  };

  handleConfirm() {
    this.user = {
      ...this.duplicateData,
    };
    this.userService.deleteUser(this.duplicateData);
    // this.isConfirmed = !this.isConfirmed;
    this.hasData = !this.hasData;

    this.duplicateData = null
  }

  handleCancel() {
    this.hasData = !this.hasData;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.editUserData) {
      this.duplicateData = this.editUserData;
      this.hasData = true;
    }
  }
}
