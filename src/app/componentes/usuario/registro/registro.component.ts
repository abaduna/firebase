import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { group } from 'console';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  refisterform:FormGroup
  constructor(private fb:FormBuilder)
   {this.refisterform =this.fb.group({
    usuario: ["", [Validators.required, Validators.email]],
    paswoord: ["", [Validators.required, Validators.minLength(6)]],
    repetirpaswoord: [""]
   },{validators: this.checkPassword})

    }

  ngOnInit(): void {
  }
  register(){
    console.log(this.refisterform);

  }
  checkPassword(group:FormGroup):any
  {
    
  }
}
