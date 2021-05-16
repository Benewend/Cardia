import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiagnostiquePage } from './diagnostique.page';

const routes: Routes = [
  {
    path: '',
    component: DiagnostiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagnostiquePageRoutingModule {}
