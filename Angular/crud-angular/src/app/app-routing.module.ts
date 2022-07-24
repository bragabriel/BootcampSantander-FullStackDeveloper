import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { PipesExampleComponent } from './pages/pipes-example/pipes-example.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

const routes: Routes = [
  {path: '', component: UsersListComponent}, /* Para o caminho vazio, eu quero renderizar o componente... */
  {path: 'form', component: UserFormComponent}, /*Para o caminho '/form' eu quero renderizar o componente...*/
  {path: 'data-binding', component: DataBindingComponent},
  {path: 'pipes', component: PipesExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
