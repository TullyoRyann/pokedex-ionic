import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseServiceService } from 'src/app/shared/service/base-service.service';
import { environment } from 'src/environments/environment';
import { PokemonDetailResponse } from './pokemon-detail-response.model';
import { PokemonDetailSerialize } from './pokemon-detail-serialize';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { QueryParamsFactory } from 'src/app/shared/factory/query-params-factory';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService extends BaseServiceService {

  constructor(
    protected httpClient: HttpClient
  ) {
    super(environment.api, '/pokemon')
  }

  get(id: number): Observable<PokemonDetailResponse> {
    const serializer = new PokemonDetailSerialize();

    return this.httpClient.get<PokemonDetailResponse>(`${this.resourceBaseUrl}/${id}`)
      .pipe(map((response: any) => {
        console.log(response)
        return serializer.fromJsonToResponseModel(response);
      }));
  }

  getEvolucoes(referencias: string[]): Observable<PokemonDetailResponse[]> {
    const queryParams = new QueryParamsFactory();
    const params = queryParams.create(referencias);

    const serializer = new PokemonDetailSerialize();

    return this.httpClient.get<PokemonDetailResponse[]>(`${this.resourceBaseUrl}/${params}`)
      .pipe(map((response: any) => {
        return response.map(value => serializer.fromJsonToResponseModel(value));
      }));
  }

}
