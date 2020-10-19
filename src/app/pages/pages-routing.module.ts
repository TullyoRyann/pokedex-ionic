import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '../shared/enum/route.enum';
import { ElementoListingComponent } from './elementos/elemento-listing/elemento-listing.component';
import { HomeComponent } from './home/home.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: Route.POKEMON_DETAIL,
    component: PokemonDetailComponent
  },
  {
    path: Route.ELEMENTO_LISTING,
    loadChildren: () => import('./elementos/elementos.module').then(m => m.ElementosModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
