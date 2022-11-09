import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogingComponent } from './loging/loging.component';
import { RecuperarPaswordComponent } from './recuperar-pasword/recuperar-pasword.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: '', component: LogingComponent},
  {path: 'recuperarContraseña', component: RecuperarPaswordComponent},
  {path: 'registrarse', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
