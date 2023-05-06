import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Update } from '@ngrx/entity';
import { Post } from 'src/app/shared/modal/modal';
import { PostService } from 'src/app/shared/service/post/post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {
  invokeSave = false;
  submitted: boolean = false;
  form!: FormGroup;
  id!: number;
  fromStatePostDataHolder!: any;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    if (this.route.url.includes('add')) {
      this.invokeSave = true;
    } else {
      this.id = this.activatedRoute.snapshot.params['id'];
      this.postService.entities$.subscribe((res: any) => {
        this.patchForm(res.find((list: Post) => list.id == this.id))
      })
    }
  }
  get f(): any {
    return this.form.controls;
  }
  patchForm(data: Post) {
    this.form.patchValue({
      title: data.title,
      description: data.description
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) { return };
    if (this.invokeSave) {
      this.saveDataOnState();
    } else {
      this.updateDataOnState()
    }
  }

  saveDataOnState() {
    // this.route.navigate(['post'])
    const payload : Post = this.form.value;
    this.postService.add(payload).subscribe((res: any) => {
      this.route.navigate(['post', 'list'])
    })
  }
  updateDataOnState() {
    const payload : Update<Post> = {changes: {...this.form.value, id: this.id}, id: this.id};
    this.postService.update(payload).subscribe((res: any) => {
      this.route.navigate(['post', 'list'])
    })
  }
  ngOnDestroy(): void {
    
  }
}
