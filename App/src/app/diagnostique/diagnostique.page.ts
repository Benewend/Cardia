import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { DiagnoticDetailsPage } from '../diagnotic-details/diagnotic-details.page';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-diagnostique',
  templateUrl: './diagnostique.page.html',
  styleUrls: ['./diagnostique.page.scss'],
})
export class DiagnostiquePage implements OnInit {
  devices;
  state='0';
  Tobesent="";
  constructor(private modalController:ModalController,private bluetooth:BluetoothSerial,private alrt:AlertController, public plt: Platform) {

    
  }

  ngOnInit() {
  
   
  }

  connect(addr){
    
    this.showAlert("Show address"+addr);
    if (addr=="") return;
    this.bluetooth.connect(addr).subscribe(
      success=>{
        this.state='2';
        this.showAlert("Connection réussie");
      },
      err=>{
        this.showAlert("Connection échouée"+err);
        this.bluetooth.disconnect();

      }
    )
  }

  onConnection(){
    this.bluetooth.subscribe('>').subscribe(
      success=>{
        this.showAlert("the gotten data:"+success)
      },err=>{
        this.showAlert("the error infors"+err);
      }
    )
  }
  start(){
    this.bluetooth.isEnabled().then(
      response=>{
        this.state='1';
        this.showAlert(response.toString() );
        this.listAvailiableDevices();
        // this.presentModal();
        console.log(this.devices);
      },
      err=>{
        this.showAlert("DÉSACTIVÉ");
      }
    )
  }

  sendData( ){
    this.bluetooth.write(this.Tobesent).then(
      success=>{
        this.showAlert(success)
      },err=>{
        this.showAlert(err);
      }
    )
  }

  listAvailiableDevices(){
    this.bluetooth.list().then(
      response=>{
        this.devices=response;
        this.showAlert(this.devices);

      },err=>{
        this.showAlert("no device found");
      }
    )
  }
  async showAlert(msg){
    const alert = await this.alrt.create({
      header: 'Alerte',
      message: msg,
      buttons: ['Ok']
    });

    await alert.present();
  }




  async presentModal() {
    const modal = await this.modalController.create({
      component: DiagnoticDetailsPage,
      componentProps: {
        'devices': this.devices
        
      }
    });
    return await modal.present();
  }
}
