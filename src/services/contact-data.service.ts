import { Injectable } from '@angular/core';
import { UserDataShape } from 'src/types/type';

@Injectable()
export class ContactDataService {
  constructor() {}
  allUserInfo: UserDataShape[] = [{
    name : 'Munna Ahmed',
    phone : 1745412386,
    email : 'string@gmail.com',
    address : 'Kaya'
}];

  setUserInfo = (userInfo: UserDataShape) => {
    let hasContact;
    this.allUserInfo.forEach((user)=> {
      if(user.phone == userInfo.phone){
        hasContact = userInfo.phone
      }
    })
    if(hasContact){
      return
    }else if(!userInfo.phone){
      return
    }
    else{
      this.allUserInfo.unshift(userInfo);
    }
  };

  getUsers = () => {
    return this.allUserInfo;
  };

  deleteUser = (user: any) => {
    this.allUserInfo = this.allUserInfo.filter(
      (userInfo) => userInfo.phone != user.phone
    );
  };
}
