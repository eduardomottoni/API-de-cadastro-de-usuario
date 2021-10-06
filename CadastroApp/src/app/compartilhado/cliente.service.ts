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
  
  postCliente(){
    return this.http.post(this.baseUrl, this.dadosFormulario)
  }
}
