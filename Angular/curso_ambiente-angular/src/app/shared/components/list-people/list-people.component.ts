import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0
    },
  ];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeople
  }

  /* Criando um método getPeople do app.component.ts */
  getPeople(){
    /* Acessando o método getPeople do serviço */
    this.peopleService.getPeople().subscribe(people => {
                                      /* inscrevendo no Observable, que retorna uma função de callback com os dados*/
    /* this.pessoas agora é people (resultado que veio do service) */
    this.pessoas = people;
    })
  }
}
