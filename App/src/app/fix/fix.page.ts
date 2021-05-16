import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsFixPage } from '../details-fix/details-fix.page';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-fix',
  templateUrl: './fix.page.html',
  styleUrls: ['./fix.page.scss'],
})
export class FixPage implements OnInit {

infos : any[]=null;

  constructor(private modalController:ModalController,private dataService:DataService) { 

  }

  ngOnInit() {
    this.dataService.getBreakDowns().subscribe(
      data=>{
        this.infos = data["data"];
        console.log(data);
      }
    )
  }

 async showDetails(i){
    const modal = await this.modalController.create({
      component: DetailsFixPage,
      componentProps: {
        'Details': this.infos[i]["breakDownDetails"],
      }
    });
    return await modal.present();
  }


}
