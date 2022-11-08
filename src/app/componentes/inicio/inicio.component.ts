import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  erro1r = false
  ping = ""
  ingresar(){
    //validar si el usuario no ingreso ningun caracter

    setTimeout(() => {
      this.erro1r = false
    }, 3000);
    if(this.ping = ""){
      this.erro1r = true
    }
  }
}
