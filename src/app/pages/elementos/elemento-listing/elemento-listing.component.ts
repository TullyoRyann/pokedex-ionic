import { Component, OnInit } from '@angular/core';
import { Elemento } from '../shared/elemento.enum';

@Component({
  selector: 'app-elemento-listing',
  templateUrl: './elemento-listing.component.html',
  styleUrls: ['./elemento-listing.component.scss'],
})
export class ElementoListingComponent implements OnInit {

  private _elementos: any[] = [];

  constructor(

  ) { }

  ngOnInit() {
    this.carregarElementos()
  }

  carregarElementos(): void {
    this.elementos = Object.keys(Elemento).map(function (key) { return Elemento[key]; });
  }

  get elementos() {
    return this._elementos;
  }

  set elementos(elementos) {
    this._elementos = elementos;
  }

}
