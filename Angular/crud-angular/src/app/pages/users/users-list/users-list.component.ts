import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  /* Definindo nosso array para receber os dados, do tipo User (dados que vem da API) */
  users: Array<User> = [];

  /* Injeção de dependencia do nosso UserService */
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  /* Método que vai na API, e traz os dados */
  getUsers(): void{
    /* Pegando a reposta do nosso serviço UserService */
    this.userService.getUsers().subscribe(response => {
    //                          subscribe retorna de CallBack o reponse da APi  
      this.users = response
    })
  }

  deleteUser(id: number):void{
    this.userService.deleteUser(id).subscribe(response => {
      console.log('user excluido')
    })
  }
}
