import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data'
import { Post } from '../../modal/modal';
import { POST_ENTITY_NAME } from 'src/app/store/entity.metadata';
@Injectable({
  providedIn: 'root'
})
export class PostService extends EntityCollectionServiceBase<Post> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(POST_ENTITY_NAME, serviceElementsFactory)
  }
}
