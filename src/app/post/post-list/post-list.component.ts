import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/service/post/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  postList$ =  this.postService.entities$;
  constructor(
    private postService: PostService,
  ) {
    
  }
  ngOnInit(): void {
  }
}
