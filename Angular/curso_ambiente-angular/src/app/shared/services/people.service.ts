import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  /* Método getPeople que retorna o array de pessoas*/
  getPeople():Observable<any>{
  /* Tipando: Observable */
  
    /* array de objetos */
    let peopleArray = [
      {
        firstName: 'Gabriel',
        lastName: 'Silva',
        age: 20
      },
      {
        firstName: 'Ivonado',
        lastName: 'Soares',
        age: 26
      },
      {
        firstName: 'Júnior',
        lastName: 'Santos',
        age: 8
      }
    ]
    return of(peopleArray)
  }
}
