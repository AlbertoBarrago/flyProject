import { Component, OnInit } from '@angular/core';
import {PhotoViewer} from '@ionic-native/photo-viewer/ngx';
import {File} from '@ionic-native/file/ngx';

@Component({
  selector: 'app-esibizione',
  templateUrl: './esibizione.page.html',
  styleUrls: ['./esibizione.page.scss'],
})
export class EsibizionePage implements OnInit {

  constructor(private photoViewer: PhotoViewer, private file: File) { }

  ngOnInit() {
  }

    onViewImg(img, title) {
        console.log(this.file.applicationDirectory , img);
        this.photoViewer.show(this.file.applicationDirectory + img, title, {share: true});
    }

}
