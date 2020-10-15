import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { Route } from '../shared/enum/route.enum';
import { HomeComponent } from './home/home.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: Route.HOME,
    component: HomeComponent
  },
  {
    path: Route.POKEMON_DETAIL,
    component: PokemonDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
