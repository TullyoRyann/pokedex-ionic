import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseServiceService } from 'src/app/shared/service/base-service.service';
import { environment } from 'src/environments/environment';
import { HomeResponse } from './home-response.model';
import { HomeSerialize } from './home-serialize';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HomeService extends BaseServiceService {


  constructor(
    protected httpClient: HttpClient,
  ) {
    super(environment.api, '/pokemon')
  }

  listar(): Observable<HomeResponse[]> {
    const serializer = new HomeSerialize();
    return this.httpClient.get<HomeResponse[]>(this.resourceBaseUrl)
      .pipe(map((response: any) => {
        return response.map(value => serializer.fromJsonToResponseListModel(value));
      }));
  }

  buscarPorNome(nome: string): Observable<HomeResponse[]> {
    const serializer = new HomeSerialize();
    return this.httpClient.get<HomeResponse[]>(`${this.resourceBaseUrl}/?name_like=${nome}`)
      .pipe(map((response: any) => {
        return response.map(value => serializer.fromJsonToResponseListModel(value));
      }));
  }

}
