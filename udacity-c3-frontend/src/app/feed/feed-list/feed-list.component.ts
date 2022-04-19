import { BehaviorSubject, Subscription, of } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { FeedItem } from '../models/feed-item.model';
import { FeedProviderService } from '../services/feed.provider.service';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedListComponent implements OnInit, OnDestroy {
  feedItems: BehaviorSubject<FeedItem[]> = new BehaviorSubject<FeedItem[]>([]) ;
  subscriptions: Subscription[] = [];
  constructor( private feed: FeedProviderService ) { }

  async ngOnInit() {
    this.subscriptions.push(
      this.feed.currentFeed$.subscribe((items) => {
      this.feedItems.next(items);
    }));

    await this.feed.getFeed();
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }


}
