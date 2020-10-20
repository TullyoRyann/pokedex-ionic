import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseServiceService } from 'src/app/shared/service/base-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElementoService extends BaseServiceService {

  constructor(
    protected httpClient: HttpClient
  ) {
    super(environment.api, '/pokemon')
  }

}
