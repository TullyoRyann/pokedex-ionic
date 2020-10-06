import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

const angularModules: Array<Type<any> | any[]> = [
  CommonModule
];

@NgModule({
  declarations: [],
  imports: [
    angularModules
  ],
  exports: [
    angularModules
  ]
})
export class SharedModule { }
