import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiagnoticDetailsPageRoutingModule } from './diagnotic-details-routing.module';

import { DiagnoticDetailsPage } from './diagnotic-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiagnoticDetailsPageRoutingModule
  ],
  declarations: [DiagnoticDetailsPage]
})
export class DiagnoticDetailsPageModule {}
