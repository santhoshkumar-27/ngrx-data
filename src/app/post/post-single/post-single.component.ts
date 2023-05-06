import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/shared/modal/modal';
import { PostService } from 'src/app/shared/service/post/post.service';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.scss']
})
export class PostSingleComponent implements OnInit {
  id!: string | undefined;
  singlePostDetails!: Post;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
  ) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.postService.entities$.subscribe((res: any) => {
      this.singlePostDetails = res.find((list: Post) => list.id == this.id)
    });
  }
}
