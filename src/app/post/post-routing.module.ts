import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAddComponent } from './post-add/post-add.component';
import { PostSingleComponent } from './post-single/post-single.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {
    path: 'add',
    component: PostAddComponent
  },
  {
    path: 'edit/:id',
    component: PostAddComponent
  },
  {
    path: 'details/:id',
    component: PostSingleComponent
  },
  {
    path: 'list',
    component: PostListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
