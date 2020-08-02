import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import { CurrentPostComponent } from './components/current-post/current-post.component';


@NgModule({
  declarations: [AllPostsComponent, CurrentPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [PostService]
})
export class PostModule { }
