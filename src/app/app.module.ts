import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDataService } from 'src/services/contact-data.service';
import { InputUserComponent } from './input-user/input-user.component';
import { FormsModule } from '@angular/forms';
import { DisplayUserComponent } from './display-user/display-user.component';
import { ShowSingleUserComponent } from './show-single-user/show-single-user.component';

@NgModule({
  declarations: [
    AppComponent,
    InputUserComponent,
    DisplayUserComponent,
    ShowSingleUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContactDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
