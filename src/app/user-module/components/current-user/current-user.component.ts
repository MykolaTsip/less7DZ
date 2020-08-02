import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {
 id: any;

  constructor(private activatedRoute: ActivatedRoute, ) {
  this.activatedRoute.params.subscribe(value => this.id = value);
  }

  ngOnInit(): void {
  }

}
