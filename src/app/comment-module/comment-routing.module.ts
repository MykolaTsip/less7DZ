import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {CurrentCommentComponent} from './components/current-comment/current-comment.component';

const routes: Routes = [
  {
    path: '', component: AllCommentsComponent,
    children: [
      {
        path: ':id', component: CurrentCommentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
