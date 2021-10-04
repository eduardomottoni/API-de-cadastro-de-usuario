import { Injectable } from '@angular/core';
import { ClienteServicos } from './cliente-servicos.model';


@Injectable({
  providedIn: 'root'
})
export class ClienteServicosService {

  constructor() { }

  dadosFormulario: ClienteServicos = new ClienteServicos();
}
