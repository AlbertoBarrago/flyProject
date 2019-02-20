import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  constructor(private translate: TranslateService) {};

    ngOnInit() {

    }

    selectIta(){
        this.translate.use('it');
    }

    selectEng(){
        this.translate.use('en');
    }
}
