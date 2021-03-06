import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeResponse } from './shared/home-response.model';
import { HomeService } from './shared/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public pokemons: HomeResponse[] = [];
  public buscaNomePokemon;

  constructor(
    private service: HomeService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.listarPokemons();
  }

  async listarPokemons(): Promise<void> {
    this.pokemons = await this.service.listar().toPromise();
  }

  async buscarPorNome(): Promise<void> {
    this.pokemons = await this.service.buscarPorNome(this.buscaNomePokemon).toPromise();
  }

  irPara(id: number) {
    this.router.navigate(['pokemon/', id]);
  }

}
