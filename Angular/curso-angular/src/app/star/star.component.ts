import { Component, OnChanges, Input} from "@angular/core";

@Component({ /* Decorator informando que nossa classe é um componente */
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'] /* Recebe um array, pois podemos ter mais de uma folha de estilo por componente */
})

export class StarComponent implements OnChanges{

    /* Torna a nossa variável elegível para receber um conteúdo externo */
    @Input()
    rating: number = 0;

    starWidth!: number;

    ngOnChanges(): void{
        this.starWidth = this.rating * 74 / 5;
    }
}