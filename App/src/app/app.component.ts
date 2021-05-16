import { Component } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
  
    private loadingCtrl: LoadingController
  ) {
    this.initializeApp();
  }
 
  async initializeApp() {
   
  }
}
