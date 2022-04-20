import { Component } from "@angular/core";
import { FeedUploadComponent } from "../feed-upload.component";
import { ModalController } from "@ionic/angular";
import { Subscription } from "rxjs";

@Component({
  selector: "app-feed-upload-button",
  templateUrl: "./feed-upload-button.component.html",
  styleUrls: ["./feed-upload-button.component.scss"],
})
export class FeedUploadButtonComponent {
  isLoggedIn: Boolean;
  loginSub: Subscription;

  constructor(private modalController: ModalController) {}

  async presentUploadForm(ev: any) {
    const modal = await this.modalController.create({
      component: FeedUploadComponent,
      backdropDismiss: true,
    });
    return await modal.present();
  }
}
