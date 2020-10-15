export class PokemonDetailResponse {

  constructor(
    public id: number,
    public numero: number,
    public nome: string,
    public imgUrl: string,
    public tipos: string[],
    public evolucaoAnterior: any[],
    public evolucaoPosterior: any[]
  ) { }

}