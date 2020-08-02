import { Component, OnInit } from '@angular/core';
import {Comment} from '../../../models/Comment';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comment: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getAllComments().subscribe(value => this.comment = value);
  }

}
