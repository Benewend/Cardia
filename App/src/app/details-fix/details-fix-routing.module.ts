import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsFixPage } from './details-fix.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsFixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsFixPageRoutingModule {}
