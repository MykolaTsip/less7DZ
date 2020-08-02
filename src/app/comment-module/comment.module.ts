import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import {CommentService} from './services/comment.service';
import {HttpClientModule} from '@angular/common/http';
import { CurrentCommentComponent } from './components/current-comment/current-comment.component';


@NgModule({
  declarations: [AllCommentsComponent, CurrentCommentComponent],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers: [CommentService]
})
export class CommentModule { }
