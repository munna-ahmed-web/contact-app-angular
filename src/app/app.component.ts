import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'contactApp';

  editDataFromSingleUser : any = null;

  getDataFromDisplayUser(event:Object){
    this.editDataFromSingleUser = event;
  }
}
