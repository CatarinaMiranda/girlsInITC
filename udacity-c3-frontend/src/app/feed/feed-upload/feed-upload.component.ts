import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';

import { FeedProviderService } from '../services/feed.provider.service';

@Component({
  selector: 'app-feed-upload',
  templateUrl: './feed-upload.component.html',
  styleUrls: ['./feed-upload.component.scss'],
})
export class FeedUploadComponent implements OnInit {
  previewDataUrl;
  file: File;
  uploadForm: FormGroup;

  constructor(
    private feed: FeedProviderService,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      caption: new FormControl('', Validators.required),
      user_name: new FormControl('', Validators.required)
    });
  }

  cancel() {
    this.modalController.dismiss();
  }
  setPreviewDataUrl(file: Blob) {
    const reader  = new FileReader();
    reader.onloadend = () => {
      this.previewDataUrl = reader.result;
    };

    reader.readAsDataURL(file);
  }

  selectImage(event) {
    const file = event.srcElement.files;

    if (!file) {
      return;
    }
    this.file = file[0];
    this.setPreviewDataUrl(this.file);

  }

  onSubmit($event) {
    $event.preventDefault();
    this.loadingController.create();

    if (!this.uploadForm.valid || !this.file) { return; }
    this.feed.uploadFeedItem(this.uploadForm.controls.caption.value, this.uploadForm.controls.user_name.value ,this.file)
      .then((result) => {
        this.modalController.dismiss();
        this.loadingController.dismiss();
      });
  }

}
