import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/services/auth.service';
import { FeedUploadComponent } from '../feed-upload.component';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feed-upload-button',
  templateUrl: './feed-upload-button.component.html',
  styleUrls: ['./feed-upload-button.component.scss'],
})
export class FeedUploadButtonComponent {

  isLoggedIn: Boolean;
  loginSub: Subscription;

  constructor(private modalController: ModalController, private auth: AuthService) { }

  // ngOnInit() {
  //   this.auth.currentUser$.subscribe((user) => {
  //     this.isLoggedIn = user !== null;
  //   });
  // }

  // ngOnDestroy(): void {
  //   if (this.loginSub) {
  //     this.loginSub.unsubscribe();
  //   }
  // }

  async presentUploadForm(ev: any) {
    const modal = await this.modalController.create({
      component: FeedUploadComponent,
      backdropDismiss: true
    });
    return await modal.present();
  }

}
