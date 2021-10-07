import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../compartilhado/cliente.model';
import { ServicoCliente } from '../compartilhado/cliente.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [
  ]
})
export class ClienteComponent implements OnInit {

  constructor(public service : ServicoCliente,
    private toastr:ToastrService) {
  }

    ngOnInit():void{
      this.service.atualizarLista();
  }

  popularFormulario(selectedRecord:Cliente){
    this.service.dadosFormulario = Object.assign({}, selectedRecord);
  }
  onDelete(id:number){
    if(confirm('Tem certeza que deseja deletar esse registro?'))
    {
    this.service.deleteCliente(id)
    .subscribe(
    res => {
      this.service.atualizarLista();
      this.toastr.error("Registro Apagado com Sucesso", 'Registro de Cliente')
    },
    err => {console.log(err)}
    )
  }
  }
}
