import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Post } from '../../modal/modal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { POST_ENTITY_NAME } from 'src/app/store/entity.metadata';

@Injectable({
  providedIn: 'root'
})
export class PostDataService extends DefaultDataService<Post> {

  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
  ) {
    super(POST_ENTITY_NAME, http, httpUrlGenerator)
  }

  override getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/posts')
  }
}
