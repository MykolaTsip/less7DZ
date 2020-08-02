import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HelloComponent } from './hello/hello.component';
import {UserModule} from './user-module/user.module';
import {PostModule} from './post-module/post.module';
import {CommentModule} from './comment-module/comment.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    PostModule,
    CommentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
