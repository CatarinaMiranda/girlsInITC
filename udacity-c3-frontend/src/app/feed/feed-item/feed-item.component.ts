import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

//import { AnimationController } from "@ionic/angular"
import { FeedItem } from '../models/feed-item.model';
import { FeedProviderService } from '../services/feed.provider.service';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class FeedItemComponent implements OnInit {
  @Input() feedItem: FeedItem;
  //@ViewChild("button", { read: ElementRef }) button: ElementRef

  //@Input() feedItem: FeedItem
  constructor(
    private feed: FeedProviderService,
    //private animationCtrl: AnimationController
  ) { }

  ngOnInit() {}

  async likePhoto(feedItem) {

    await this.feed.likeItem(feedItem.id);
    //this.animateButton()
  }

  // public animateButton() {
  //   const animation = this.animationCtrl
  //   .create()
  //   .addElement(this.button.nativeElement)
  //   .duration(2000)
  //   .beforeStyles({
  //     opacity: 0.2
  //   })
  //   .afterStyles({
  //     background: 'rgba(0, 255, 0, 0.5)'
  //   })
  //   .afterClearStyles(['opacity'])
  //   .keyframes([
  //     { offset: 0, transform: 'scale(1)' },
  //     { offset: 0.5, transform: 'scale(1.5)' },
  //     { offset: 1, transform: 'scale(1)' }
  //   ])

  //   animation.play()
  // }

}


