import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '../shared/enum/route.enum';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: Route.HOME,
    component: HomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
