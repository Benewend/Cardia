import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MechaniciansPageRoutingModule } from './mechanicians-routing.module';

import { MechaniciansPage } from './mechanicians.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MechaniciansPageRoutingModule
  ],
  declarations: [MechaniciansPage]
})
export class MechaniciansPageModule {}
