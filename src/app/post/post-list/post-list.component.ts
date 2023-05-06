import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/modal/modal';
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
  onDelete(post: Post) {
   this.postService.delete(post)
  }
}
