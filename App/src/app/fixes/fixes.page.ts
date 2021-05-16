import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-fixes',
  templateUrl: './fixes.page.html',
  styleUrls: ['./fixes.page.scss'],
})
export class FixesPage implements OnInit {

  @Input()
  Fixes:any;
  constructor(private modalController :ModalController) { }

  ngOnInit() {
    console.log("here",this.Fixes)
  }


  dismissModal(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
