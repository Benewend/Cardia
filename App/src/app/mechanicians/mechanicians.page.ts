import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-mechanicians',
  templateUrl: './mechanicians.page.html',
  styleUrls: ['./mechanicians.page.scss'],
})
export class MechaniciansPage implements OnInit {
  
  mechanicians:any=null;
  constructor(private dataService:DataService,private alertController:AlertController) { }

  ngOnInit() {
    this.dataService.getMechanicians().subscribe(
      data=>{
        this.mechanicians=data["data"];
      }
    )
  }


  async showDetails(i){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Garage:'+this.mechanicians[i]['name'],
      message:'Tel:'+this.mechanicians[i]['phone'] ,
      buttons: ['OK']
    });

    await alert.present();
  }
}
