import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './hello/hello.component';


const router: Routes = [
  {
    path: '', component: HelloComponent,
    children: [
      {
        path: 'users', loadChildren: () => import('./user-module/user.module').then(m => m.UserModule)
      },
      {
        path: 'posts', loadChildren: () => import('./post-module/post.module').then(m => m.PostModule)
      },
      {
        path: 'comments', loadChildren: () => import('./comment-module/comment.module').then(m => m.CommentModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
