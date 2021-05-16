import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FixesPage } from '../fixes/fixes.page';

@Component({
  selector: 'app-details-fix',
  templateUrl: './details-fix.page.html',
  styleUrls: ['./details-fix.page.scss'],
})
export class DetailsFixPage implements OnInit {
  @Input()
  Details:any;
  constructor(private modalController:ModalController) { }

  ngOnInit() {
    console.log(this.Details);

  }

  dismissModal(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }


 SeeUser(){

 }

 async showDetails(i){
  const modal = await this.modalController.create({
    component: FixesPage,
    componentProps: {
      'Fixes': this.Details[i]["fixes"],
    }
  });
  return await modal.present();
}

}
