import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/* Definindo um type igual ao da repsosta da API */
export type ApiResponse = {
  info: {},
  results: {},
}

@Injectable({
  providedIn: 'root'
})
export class ListService {

  apiURL = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) { }

  /* Método */
  getList():Observable<any>{
    /* vai receber um array de any */

    return this.httpClient.get<any>(this.apiURL);
  }
}
