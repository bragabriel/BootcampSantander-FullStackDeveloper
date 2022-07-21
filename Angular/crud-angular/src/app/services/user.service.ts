import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://sheet.best/api/sheets/9bb18700-cf25-445b-bd50-066f21ac35bc'

  /* Injetando o HttpClient */
  constructor(private httpClient: HttpClient) { }


  //Retorna a lista de usuários - READ
  getUsers():Observable<User[]>{
    //A resposta do getUser, vai ser um Observable que traz um array de User

    return this.httpClient.get<User[]>(this.apiUrl);
    //O retorno tbm vai ser do tipo <User[]> - Array de User
  }
}
