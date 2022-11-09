import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-pasword',
  templateUrl: './recuperar-pasword.component.html',
  styleUrls: ['./recuperar-pasword.component.css']
})
export class RecuperarPaswordComponent implements OnInit {
  recuperarContrasena:FormGroup
  constructor(private fb:FormBuilder) {
    this.recuperarContrasena = this.fb.group({
      usuario: ["", [Validators.required ,Validators.email]]
    })
  }

  ngOnInit(): void {
  }
  recuperarpaswonrd(){

  }
}
