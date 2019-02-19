import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
    constructor(private translate: TranslateService){};

    ngOnInit(){

    }

    selectParisImage() {
        if(this.translate.currentLang === 'en') {
            return "assets/img/paris.jpg";
        } else {
            return "assets/img/PARIGI.jpg";
        }
    }

    selectMoscowImage() {
        if(this.translate.currentLang === 'en') {
            return "assets/img/MOSCOW.jpg";
        } else {
            return "assets/img/MOSCA.jpg";
        }
    }
}
