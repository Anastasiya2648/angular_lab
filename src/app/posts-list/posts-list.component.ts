import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../interfaces/post.interface';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  @Input() public posts: IPost[] = [];

  constructor() {}

  ngOnInit(): void {}
  public delete(index: number): void {
    this.posts = [...this.posts.filter((value, i) => index != i)];
  }
}
