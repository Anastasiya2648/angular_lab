import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: IPost = { name: '', message: '' };

  constructor() {}

  ngOnInit(): void {}
}
