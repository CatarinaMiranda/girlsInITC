import { Injectable } from "@angular/core";
import { FeedItem } from "../models/feed-item.model";
import { BehaviorSubject } from "rxjs";

import { ApiService } from "../../api/api.service";

@Injectable({
  providedIn: "root",
})
export class FeedProviderService {
  currentFeed$: BehaviorSubject<FeedItem[]> = new BehaviorSubject<FeedItem[]>(
    []
  );

  constructor(private api: ApiService) {}

  async getFeed(): Promise<BehaviorSubject<FeedItem[]>> {
    const req = await this.api.get("/feed");
    const items = <FeedItem[]>req.rows;
    this.currentFeed$.next(items);
    return Promise.resolve(this.currentFeed$);
  }

  async uploadFeedItem(
    caption: string,
    user_name: string,
    file: File,
  ): Promise<any> {
    const res = await this.api.uploadPost("/feed", file, caption, user_name);
    const feed = [res, ...this.currentFeed$.value];
    this.currentFeed$.next(feed);
    return res;
  }

  async likeItem(id: number): Promise<any> {
    const res = await this.api.patch(`/feed/likes/${id}`);
    const numberOfLikesUpdated = res.numberOfLikes;
    this.currentFeed$.next(
      this.currentFeed$.value.map((feed) => {
        if (feed.id === id) {
          feed.numberOfLikes = numberOfLikesUpdated;
        }
        return feed;
      })
    );
    return res;
  }
}
