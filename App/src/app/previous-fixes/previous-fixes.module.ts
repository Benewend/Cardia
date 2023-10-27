import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviousFixesPageRoutingModule } from './previous-fixes-routing.module';

import { PreviousFixesPage } from './previous-fixes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviousFixesPageRoutingModule
  ],
  declarations: [PreviousFixesPage]
})
export class PreviousFixesPageModule {}
