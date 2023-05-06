import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, first, map, mergeMap, of } from 'rxjs';
import { PostService } from '../service/post/post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<boolean> {
  constructor(
    private postService: PostService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.postService.loaded$.pipe(
      mergeMap((loaded) => {
        if (loaded) {
          return of(true);
        }
        return this.postService.getAll().pipe(
          map((posts) => !!posts)
        )
      }),
      first()
    );
  }
}
