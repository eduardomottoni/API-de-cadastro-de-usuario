import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClienteFormularioComponent } from './cliente/cliente-formulario/cliente-formulario.component';
import { ClienteComponent } from './cliente/cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClienteFormularioComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
