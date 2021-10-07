import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { HttpClient } from "@angular/common/http";  

@Injectable({
  providedIn: 'root'
})
export class ServicoCliente {

  constructor(private http:HttpClient) { }

  dadosFormulario: Cliente = new Cliente();
  readonly baseUrl = 'http://localhost:25438/api/Cliente' // Put your backend localhost // coloque seu localhost de backend
  list:Cliente[];


  postCliente(){
    return this.http.post(this.baseUrl, this.dadosFormulario)
  }
  putCliente(){
    return this.http.put(`${this.baseUrl}/${this.dadosFormulario.idUsuario}`, this.dadosFormulario);

  }
  deleteCliente(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

atualizarLista(){
  this.http.get(this.baseUrl)
  .toPromise()
  .then(res => this.list = res as Cliente[]);
}


}


