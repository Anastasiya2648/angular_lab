import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPost } from '../interfaces/post.interface';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.scss'],
})
export class CreatePostFormComponent implements OnInit {
  public name: string = '';
  public message: string = '';
  @Output() sendPost = new EventEmitter<IPost>();
  constructor() {}

  ngOnInit(): void {}
  public emitPost(): void {
    if (!(this.name && this.message)) return;
    const date = new Date();
    this.sendPost.emit({
      name: this.name,
      message: this.message,
      date,
    });

    this.name = '';
    this.message = '';
  }
}
