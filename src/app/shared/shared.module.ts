import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

const angularModules: Array<Type<any> | any[]> = [
  CommonModule
];

const ionicModules: Array<Type<any> | any[]> = [
  IonicModule
];

@NgModule({
  declarations: [],
  imports: [
    angularModules,
    ionicModules
  ],
  exports: [
    angularModules,
    ionicModules
  ]
})
export class SharedModule { }
