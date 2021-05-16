import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiagnostiquePageRoutingModule } from './diagnostique-routing.module';

import { DiagnostiquePage } from './diagnostique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiagnostiquePageRoutingModule
  ],
  declarations: [DiagnostiquePage]
})
export class DiagnostiquePageModule {}
