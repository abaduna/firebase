import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { LogingComponent } from './loging/loging.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperarPaswordComponent } from './recuperar-pasword/recuperar-pasword.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    LogingComponent,
    RegistroComponent,
    RecuperarPaswordComponent,
    VerificarCorreoComponent,

  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    
  ]
})
export class UsuarioModule { }
