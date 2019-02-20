import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.page.html',
  styleUrls: ['./performance.page.scss'],
})
export class PerformancePage implements OnInit {

    constructor(private photoViewer: PhotoViewer) {
    }

  ngOnInit() {
  }
  zoomImage = (imageData, myTitle) => {
        const options = {
            share: true, // default is false
            closeButton: false, // iOS only: default is true
            copyToReference: true // iOS only: default is false
        };
        this.photoViewer.show(imageData, myTitle, options);
    }

}
