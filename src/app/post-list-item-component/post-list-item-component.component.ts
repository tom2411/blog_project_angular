import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../services/Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

  love(): void {
    this.post.love = this.post.love + 1;
    console.log(this.post.love);
  }

  unlove(): void {
    this.post.love = this.post.love - 1;
    console.log(this.post.love);
  }
}
