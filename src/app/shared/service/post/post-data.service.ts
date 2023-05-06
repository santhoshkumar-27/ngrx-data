import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Post } from '../../modal/modal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { POST_ENTITY_NAME } from 'src/app/store/entity.metadata';
import { Update } from '@ngrx/entity';

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

  override add(post: Post): Observable<any> {
    return this.http.post<{ id: string }>('http://localhost:3000/posts', post)
      // .pipe(
      //   map((data: any) => ({ ...post, id: data.id }))
      // );
  }

  override update(post: Update<Post>) {
    return this.http.put<Post>(`http://localhost:3000/posts/${post.id}`, {...post.changes});
  }

  override delete(id: number) {
    return this.http.delete(`http://localhost:3000/posts/${id}`).pipe(
      map((res: any) => id)
    );
  }
}
