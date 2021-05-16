import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FixesPageRoutingModule } from './fixes-routing.module';

import { FixesPage } from './fixes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FixesPageRoutingModule
  ],
  declarations: [FixesPage]
})
export class FixesPageModule {}
