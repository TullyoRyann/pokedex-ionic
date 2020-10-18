import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
  public corPrimaria: string;

  constructor(
    private route: ActivatedRoute,
    private pokemonDetailService: PokemonDetailService,
    private location: Location
  ) { }

  async ngOnInit() {
    await this.getPokemon();
    await this.getEvolucoes();
    await this.getCorPrimaria();
  }

  async getPokemon(): Promise<void> {
    let id = null;
    this.route.paramMap.subscribe(paramMap => {
      id = paramMap.get('id');
    })
    this.pokemon = await this.pokemonDetailService.get(id).toPromise();
  }

  public getColorCard(tipo: string) {
    return tipo.toLowerCase();
  }

  public voltar(): void {
    this.location.back();
  }

  public async getEvolucoes(): Promise<void> {
    const referenciasAnterior = this.getReferenciasEvolucoesAnterior();
    const referenciasPosterior = this.getReferenciasEvolucoesPosteriores();

    const referencias = referenciasAnterior.concat(referenciasPosterior);

    this.evolucoes = await this.pokemonDetailService.getEvolucoes(referencias).toPromise();
    this.evolucoes.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
  }

  private getReferenciasEvolucoesAnterior(): string[] {
    if (!this.pokemon.evolucaoAnterior || this.pokemon.evolucaoAnterior.length == 0) {
      return [];
    }

    return this.pokemon.evolucaoAnterior.map(evolucao => evolucao.num);
  }

  private getReferenciasEvolucoesPosteriores(): string[] {
    if (!this.pokemon.evolucaoPosterior || this.pokemon.evolucaoPosterior.length == 0) {
      return [];
    }

    return this.pokemon.evolucaoPosterior.map(evolucao => evolucao.num);
  }

  private async getCorPrimaria(): Promise<void> {
    this.corPrimaria = this.pokemon.tipos[0].toLocaleLowerCase();
  }

}
