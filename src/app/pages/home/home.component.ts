import { Component, OnInit } from '@angular/core';
import { HomeResponse } from '../shared/home-response.model';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public pokemons: HomeResponse[] = [];

  constructor(
    private service: HomeService
  ) { }

  async ngOnInit() {
    await this.listarPokemons();
  }

  async listarPokemons() {
    this.pokemons = await this.service.listar().toPromise();
  }

}
