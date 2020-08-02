import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {CurrentUserComponent} from './components/current-user/current-user.component';

const routes: Routes = [
  {
    path: '', component: AllUsersComponent,
    children: [
      {
        path: ':id', component: CurrentUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
