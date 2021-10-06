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
    this.servico.postCliente().subscribe(
      res => {
        this.resetarFormulario(form);
        this.toastr.success('Dados enviados com sucesso', 'Cliente Registrado')
      },
      err => { console.log(err);}
    );
  }
  resetarFormulario(form:NgForm){
    form.form.reset();
    this.servico.dadosFormulario = new Cliente();
  }

}
