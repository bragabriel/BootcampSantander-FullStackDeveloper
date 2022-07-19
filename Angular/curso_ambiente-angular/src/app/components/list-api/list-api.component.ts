import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {

  personagens: Array<any> = [];

  constructor(private listService: ListService) { }
  /* Instânciando o serviço 'ListService' através de injeção de dependência */

  ngOnInit(): void {
    /* quando iniciar, vai chamar a func */
    this.getList();
  }

  getList(){
    this.listService.getList().subscribe(result => {
                                        /*result é a func de callback que retorna os dados da api  */
      
      this.personagens = result?.results;
      console.log(this.personagens);
    })
  }
}
