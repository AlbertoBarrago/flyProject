import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{


    constructor(private translate: TranslateService) {};

    ngOnInit() {

    }

    selectIta() {
        this.translate.use('it');
    }

    selectEng() {
        this.translate.use('en');
    }
}
