import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { CurrentUserComponent } from './components/current-user/current-user.component';


@NgModule({
  declarations: [AllUsersComponent, CurrentUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
