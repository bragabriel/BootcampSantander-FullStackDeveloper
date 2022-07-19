import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  nome = "Gabriel Braga da Silva"
  count = 0;
  text = "";

  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0
    },
  ];

  /* Injetando o serviço na classe construtura do componente.
  Ou seja, no momento em que for instânciado o app.component.ts, será injetado o serviço PeopleService */
  constructor(private peopleService: PeopleService){

  }

  ngOnInit(){

    this.getPeople();

    let interval = setInterval(() => {
      this.count++;
      
      if(this.count === 10){
        clearInterval(interval);
      }
    }, 1000)
  }

  clicou(nome: string):void{
    console.log("Clicou", nome)
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
