import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ElementoListingComponent } from './elemento-listing/elemento-listing.component';
import { ElementosRoutingModule } from './elementos-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ElementosRoutingModule
  ],
  declarations: [
    ElementoListingComponent
  ],
})
export class ElementosModule { }
