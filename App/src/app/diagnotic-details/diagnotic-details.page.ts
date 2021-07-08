import { Component, OnInit,NgZone, Input } from '@angular/core';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-diagnotic-details',
  templateUrl: './diagnotic-details.page.html',
  styleUrls: ['./diagnotic-details.page.scss'],
})
export class DiagnoticDetailsPage implements OnInit {
  @Input()
  devices;
  listOfDevices=[];
  
  statusMessage;
  constructor(private toastCtrl: ToastController,private alrt:AlertController, public plt: Platform) { 

  }

  ngOnInit() {
   
    
   
  }


  scan() {
   
  }

 
  

  

}
