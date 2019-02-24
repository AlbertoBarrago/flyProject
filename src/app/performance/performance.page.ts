import { Component, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.page.html',
  styleUrls: ['./performance.page.scss'],
})
export class PerformancePage implements OnInit {
    constructor(private device: Device, private photoViewer: PhotoViewer, private file: File) {
    }

  ngOnInit() {}

    onViewImg(img, title) {
        console.log(this.file.applicationDirectory , img);
        this.photoViewer.show(this.file.applicationDirectory + img, title, {share: true});
    }

    //View only photo with title
    viewPhotoWithTitle() {
        this.photoViewer.show('https://www.freakyjolly.com/wp-content/uploads/2017/08/cropped-fjlogo2.png', 'My image title', {share: false});
    }

    //View photo with sharing option
    viewPhotoWithShare() {
        this.photoViewer.show('https://www.freakyjolly.com/wp-content/uploads/2017/08/cropped-fjlogo2.png', 'Do you want to Share', {share: true});
    }
}
