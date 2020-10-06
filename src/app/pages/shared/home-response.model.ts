export class HomeResponse {

  constructor(
    public id: number,
    public numero: number,
    public nome: string,
    public imgUrl: string,
    public tipo: string[]
  ) { }

}