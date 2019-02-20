import { Component, OnInit } from '@angular/core';
// import { PhotoViewer } from '@ionic-native/photo-viewer';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.page.html',
  styleUrls: ['./performance.page.scss'],
})
export class PerformancePage implements OnInit {

    constructor() { }

  ngOnInit() {
  }

    zoomImage = (imageData) => {
        // PhotoViewer.show(imageData);
    }

}
