import { Component } from '@angular/core';
import { IPost } from './interfaces/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lab_12';
  public posts: IPost[] = [];
  public takePost(post: IPost): void {
    this.posts = [...this.posts, post];
  }
}
