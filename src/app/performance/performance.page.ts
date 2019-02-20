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
  zoomImage = (imageDate) => {
        //this.photoViewer.show(imageDate);
  }

}
