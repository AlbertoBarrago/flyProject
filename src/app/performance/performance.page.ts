import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.page.html',
  styleUrls: ['./performance.page.scss'],
})
export class PerformancePage implements OnInit {
    private appSettings: any;

    constructor(
        private photoViewer: PhotoViewer,
        private device: Device) {
    }

  ngOnInit() {
  }

  zoomImage(src, title) {
        const options = {
            share: false,
            closeButton: this.device.platform === 'iOS',
            copyToReference: this.device.platform === 'iOS'
        };

        // let srcUrl = src.replace(/%20/g, " ");
        const srcUrl = decodeURIComponent(src);

         this.photoViewer.show(srcUrl, title, options);
    }

}
