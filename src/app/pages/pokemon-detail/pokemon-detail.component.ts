import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDetailResponse } from './shared/pokemon-detail-response.model';
import { PokemonDetailService } from './shared/pokemon-detail.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {

  public pokemon: PokemonDetailResponse;
  public evolucoes: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private pokemonDetailService: PokemonDetailService
  ) { }

  async ngOnInit() {
    await this.getPokemon();
    this.evolucoes = this.getEvolucoes();
  }

  async getPokemon(): Promise<void> {
    let id = null;
    this.route.paramMap.subscribe(paramMap => {
      id = paramMap.get('id');
    })
    this.pokemon = await this.pokemonDetailService.get(id).toPromise();
    console.log(this.pokemon)
  }

  public getColorCard(tipo: string) {
    return tipo.toLowerCase();
  }

  public getEvolucoes(): string[] {
    let evolucoes = [];
    if (this.pokemon.evolucaoPosterior && this.pokemon.evolucaoPosterior.length > 0) {
      evolucoes = evolucoes.concat(this.pokemon.evolucaoPosterior);
    }

    if (this.pokemon.evolucaoAnterior && this.pokemon.evolucaoAnterior.length > 0) {
      evolucoes = evolucoes.concat(this.pokemon.evolucaoAnterior);
    }

    evolucoes.sort((a, b) => parseInt(a.num) < parseInt(b.num) ? -1 : parseInt(a.num) > parseInt(b.num) ? 1 : 0)
    return evolucoes;
  }

}
