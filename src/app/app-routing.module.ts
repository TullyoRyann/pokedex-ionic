import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Route } from './shared/enum/route.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: Route.PAGES,
    pathMatch: 'full'
  },
  {
    path: Route.PAGES,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
