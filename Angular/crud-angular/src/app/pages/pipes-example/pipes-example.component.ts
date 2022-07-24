import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  number = 0;
  text = 'Hello World!';
  date = Date.now();
  pessoa = {
    nome: 'Gabriel',
    idade: '20',
    profissao: 'Desenvolvedor'
  }
  nomes = ['Gabriel', 'Ivonaldo', 'Ana'];

  constructor() { }

  ngOnInit(): void {
  }

  mudaValor(){
    this.number += 123;
  }

  add(text: string){
    this.nomes.push(text);
  }
}
