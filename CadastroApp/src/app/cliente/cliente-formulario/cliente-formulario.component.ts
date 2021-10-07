import { Component, OnInit } from '@angular/core';
import { ServicoCliente } from 'src/app/compartilhado/cliente.service';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/compartilhado/cliente.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styles: [
  ]
})
export class ClienteFormularioComponent implements OnInit {

  constructor(public servico:ServicoCliente,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    if(this.servico.dadosFormulario.idUsuario == 0)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.servico.postCliente().subscribe(
      res => {
        this.resetarFormulario(form);
        this.servico.atualizarLista();
        this.toastr.success('Dados enviados com sucesso', 'Cliente Registrado')
      },
      err => { console.log(err);}
    );
  }
  
  updateRecord(form:NgForm){
    this.servico.putCliente().subscribe(
      res => {
        this.resetarFormulario(form);
        this.servico.atualizarLista();
        this.toastr.info('Dados atualizados com sucesso', 'Cliente Registrado')
      },
      err => { console.log(err);}
    );
  }

  resetarFormulario(form:NgForm){
    form.form.reset();
    this.servico.dadosFormulario = new Cliente();
  }

  

}
