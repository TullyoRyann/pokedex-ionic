import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from 'src/app/shared/enum/route.enum';
import { ElementoListingComponent } from './elemento-listing/elemento-listing.component';

const routes: Routes = [
  {
    path: '',
    component: ElementoListingComponent
  }
]
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementosRoutingModule { }
