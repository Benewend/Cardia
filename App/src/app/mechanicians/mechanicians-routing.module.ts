import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MechaniciansPage } from './mechanicians.page';

const routes: Routes = [
  {
    path: '',
    component: MechaniciansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MechaniciansPageRoutingModule {}
