import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { FeedItem } from '../models/feed-item.model';
import { FeedProviderService } from '../services/feed.provider.service';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedItemComponent implements OnInit {
  @Input() feedItem: FeedItem;

  constructor(
    private feed: FeedProviderService
  ) { }

  ngOnInit() {}

  likePhoto(event) {

    this.feed.likeItem(this.feedItem.id)
    .then((result) => {
     
    });

  }

}
