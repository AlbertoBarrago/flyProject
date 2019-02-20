import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page  {
    constructor(private translate: TranslateService) {};

    selectIta() {
        this.translate.use('it');
    }

    selectEng() {
        this.translate.use('en');
    }
}
