import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-current-comment',
  templateUrl: './current-comment.component.html',
  styleUrls: ['./current-comment.component.css']
})
export class CurrentCommentComponent implements OnInit {

  id: any;

  constructor(private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe(value => this.id = value);
  }

  ngOnInit(): void {
  }

}
