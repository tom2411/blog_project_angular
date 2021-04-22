import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../services/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
