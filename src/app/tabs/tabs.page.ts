import {Component, OnInit} from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

    constructor(private splashScreen: SplashScreen) { }
    ngOnInit() {
      this.initSplashScreen();
    }
    initSplashScreen() {
      const shotDown = 2000;
        this.splashScreen.show();
        console.log('setSplashScreen, Open');
      window.setTimeout(() => {
              this.splashScreen.hide();
          console.log('setSplashScreen, Close after', shotDown, 'milliseconds' );
      }, shotDown);
    }

}
