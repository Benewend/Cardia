import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixesPage } from './fixes.page';

const routes: Routes = [
  {
    path: '',
    component: FixesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixesPageRoutingModule {}
