import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';



@NgModule({
  imports: [
    SharedModule,
    PagesRoutingModule
  ],
  declarations: [
    HomeComponent,
    PokemonDetailComponent
  ]
})
export class PagesModule { }
