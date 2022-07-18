import { Component, OnInit } from '@angular/core';

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
      nome: "Gabriel",
      sobrenome: "Braga"
    },
    {
      nome: "Ivonaldo",
      sobrenome: "Soares"
    },
    {
      nome: "Júnior",
      sobrenome: "Santos"
    },
  ];

  constructor(){

  }

  ngOnInit(){

    console.log(this.pessoas);

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

}
