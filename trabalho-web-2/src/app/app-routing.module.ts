import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosComponent } from './view/funcionarios/funcionarios.component';
import { HomeComponent } from './view/home/home.component';
import { Cadastro2Component } from './view/cadastro2/cadastro2.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { 
  path: 'funcionarios', 
  component: FuncionariosComponent
 },
 {
  path: 'cadastro',
  component: Cadastro2Component
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
