import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {CurrentPostComponent} from './components/current-post/current-post.component';

const routes: Routes = [
  {
    path: '', component: AllPostsComponent,
    children: [
      {
        path: ':id', component: CurrentPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
