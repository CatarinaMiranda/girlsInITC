import { Injectable } from '@angular/core';
import { FeedItem, feedItemMocks } from '../models/feed-item.model';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from '../../api/api.service';
import { AuthService } from '../../auth/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class FeedProviderService {
  currentFeed$: BehaviorSubject<FeedItem[]> = new BehaviorSubject<FeedItem[]>([]);

  constructor(
    private api: ApiService,
    private auth: AuthService) { }

  async getFeed(): Promise<BehaviorSubject<FeedItem[]>> {
    const req = await this.api.get('/feed');
    const items = <FeedItem[]> req.rows;
    this.currentFeed$.next(items);
    return Promise.resolve(this.currentFeed$);
  }

  async uploadFeedItem(caption: string, user_name: string, file: File): Promise<any> {
    const res = await this.api.upload('/feed', file, {caption: caption, url: file.name, user: user_name});
    const feed = [res, ...this.currentFeed$.value];
    this.currentFeed$.next(feed);
    return res;
  }

  async likeItem(id: number): Promise<any> {
    const res = await this.api.patch(`/likes/${id}`);
    const feed = [res, ...this.currentFeed$.value];
    this.currentFeed$.next(feed);
    return res;
  }

}

// async getFeed() {
//   const url = `${API_HOST}/feed`;

//   const req = this.http.get(url, this.httpOptions).pipe(
//     map(this.extractData));
//     // catchError(this.handleError));
//   const resp = <any> (await req.toPromise());
//   return resp.rows;
// }
