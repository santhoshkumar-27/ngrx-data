import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }
  get f(): any {
    return this.form.controls;
  }
  patchForm() {
    this.form.patchValue({
      title: this.fromStatePostDataHolder.title,
      description: this.fromStatePostDataHolder.description
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) { return };
    this.saveDataOnState();
  }

  saveDataOnState() {
    // this.route.navigate(['post'])
    const payload : Post = this.form.value;
    this.postService.add(payload)
  }
  ngOnDestroy(): void {
  }
}
