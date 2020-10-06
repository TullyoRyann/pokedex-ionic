import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseServiceService } from 'src/app/shared/service/base-service.service';
import { environment } from 'src/environments/environment';
import { HomeResponse } from './home-response.model';

import { map } from 'rxjs/operators'
import { HomeSerialize } from './home-serialize';

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

}