import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FixPageRoutingModule } from './fix-routing.module';

import { FixPage } from './fix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FixPageRoutingModule
  ],
  declarations: [FixPage]
})
export class FixPageModule {}
