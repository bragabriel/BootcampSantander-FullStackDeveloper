import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://sheet.best/api/sheets/9bb18700-cf25-445b-bd50-066f21ac35bc';

  //Variável para o header da requisisão
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /* Injetando o HttpClient */
  constructor(private httpClient: HttpClient) { }


  //Retorna a lista de usuários - READ
  getUsers():Observable<User[]>{
    //A resposta do getUser, vai ser um Observable que traz um array de User

    return this.httpClient.get<User[]>(this.apiUrl);
    //O retorno tbm vai ser do tipo <User[]> - Array de User
  }


  //Salva usuário no banco - CREATE
  postUser(user: User):Observable<User>{
    //Recebe um user do tipo User

    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
    //                                      url, objeto, header
  }


  //Exclui usuário do banco - DELETE
  deleteUser(id:number):Observable<User>{
    //Recebe um id do tipo number

    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }


  // Edita usuario UPDATE
  updateUser(id: string, user: User):Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }


    // Lista usuario unico
  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}