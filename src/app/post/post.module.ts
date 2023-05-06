import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostSingleComponent } from './post-single/post-single.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { PostDataService } from '../shared/service/post/post-data.service';
import { POST_ENTITY_NAME } from '../store/entity.metadata';
const entityMetadata: EntityMetadataMap = {
  [POST_ENTITY_NAME]: {
    entityDispatcherOptions: {
      optimisticUpdate: true
    }
  }
}

@NgModule({
  declarations: [
    PostListComponent,
    PostAddComponent,
    PostSingleComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostModule {
  constructor(
    eds: EntityDefinitionService,
    entityDataService: EntityDataService,
    postDataService: PostDataService,
  ) {
    eds.registerMetadataMap(entityMetadata)
    entityDataService.registerService(POST_ENTITY_NAME, postDataService)
  }
}
