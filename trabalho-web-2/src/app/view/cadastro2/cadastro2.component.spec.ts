import { Componente, TestBed } from '@angular/core/testing';

import { Cadastro2Component } from './cadastro2.component';

describe('Cadastro2Component', () => {
  let objeto: Cadastro2Component;
  let componente: Componente<Cadastro2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cadastro2Component]
    })
    .compileComponents();

    componente = TestBed.createComponent(Cadastro2Component);
    objeto = componente.componentInstance;
    componente.detectChanges();
  });

  it('should create', () => {
    expect(objeto).toBeTruthy();
  });
});