import { Component, OnInit } from '@angular/core';
import { ClienteServicos } from 'src/app/compartilhado/cliente-servicos.model';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styles: [
  ]
})
export class ClienteFormularioComponent implements OnInit {

  constructor(public servico:ClienteServicos) { }

  ngOnInit(): void {
  }

}
