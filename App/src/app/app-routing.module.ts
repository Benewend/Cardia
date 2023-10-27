import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'diagnostique',
    loadChildren: () => import('./diagnostique/diagnostique.module').then( m => m.DiagnostiquePageModule)
  },
  {
    path: 'fix',
    loadChildren: () => import('./fix/fix.module').then( m => m.FixPageModule)
  },
  {
    path: 'detailsfix/:id',
    loadChildren: () => import('./details-fix/details-fix.module').then( m => m.DetailsFixPageModule)
  },
  {
    path: 'fixes',
    loadChildren: () => import('./fixes/fixes.module').then( m => m.FixesPageModule)
  },
  {
    path: 'mechanicians',
    loadChildren: () => import('./mechanicians/mechanicians.module').then( m => m.MechaniciansPageModule)
  },
  {
    path: 'diagnotic-details',
    loadChildren: () => import('./diagnotic-details/diagnotic-details.module').then( m => m.DiagnoticDetailsPageModule)
  },
  {
    path: 'previous-fixes',
    loadChildren: () => import('./previous-fixes/previous-fixes.module').then( m => m.PreviousFixesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
