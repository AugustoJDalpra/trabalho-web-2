import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cadastro2Component } from './cadastro2.component';
import { Cadastro2Service } from '../../controller/cadastro2.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [Cadastro2Component],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[Cadastro2Service]
})
export class Cadastro2Module { }
