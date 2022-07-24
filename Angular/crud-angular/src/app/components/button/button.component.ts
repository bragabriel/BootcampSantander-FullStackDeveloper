import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  /* Recebe dados do componente pai para o componente filho*/
  @Input() btnText: string = 'Valor Default';
  /*Input chamado 'btnText' do tipo 'string' com valor default de 'Clique'  */

  @Input() btnType: string = 'btn-secondary';
  /*Input chamado 'btnType' do tipo 'string' com valor default de 'btn-secondary'  */

  @Output() clickChildren = new EventEmitter;
  /* Clicou no botão (componente filho) vai ativar a função 'clicou()' e vai emitir um evento
   com a propriedade: textFilho = 'clicou no filho'; e no componente pai (data-binding.component) vai ser chamado a função clicouNoFilho */

  textFilho = 'clicou no filho'

  constructor() { }

  ngOnInit(): void {
  }

  clicou(){
    this.clickChildren.emit(this.textFilho)
  }
  
}
