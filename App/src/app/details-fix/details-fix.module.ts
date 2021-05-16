import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsFixPageRoutingModule } from './details-fix-routing.module';

import { DetailsFixPage } from './details-fix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsFixPageRoutingModule
  ],
  declarations: [DetailsFixPage]
})
export class DetailsFixPageModule {}
