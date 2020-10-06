import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor(
    protected _baseUrl: string,
    protected _endpointUrl: string
  ) { }

  get baseUrl(): string {
    return this._baseUrl;
  }

  get endpointUrl(): string {
    return this._endpointUrl;
  }

  get resourceBaseUrl(): string {
    return this._baseUrl + this._endpointUrl;
  }

}
