import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


    constructor(private translate: TranslateService, private launchNavigator: LaunchNavigator) {}

    ngOnInit() {}

    goTo(destination) {
        this.launchNavigator.navigate(destination)
        .then(
            success => console.log('Launched navigator'),
            error => console.log('Error launching navigator', error)
        );
    }

    selectIta() {
        this.translate.use('it');
    }

    selectEng() {
        this.translate.use('en');
    }
}
