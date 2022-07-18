import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})

/* Criando uma Diretiva (ex: Ng For não me atende, vou criar outra...) */
export class MarcaTextoDirective implements OnInit{

  @Input() corDeFundo = 'yellow';
  @Input() corDoTexto = 'white';

  constructor(private elemento: ElementRef) { }

  ngOnInit(){
    /* Inicializou a diretiva, chama o método */
    this.mudarFundo();
  }

  private mudarFundo(cor: string = 'yellow'){
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
    this.elemento.nativeElement.style.color = this.corDoTexto || cor;
    this.elemento.nativeElement.style.fontWeight = 'bold';
  }
}
