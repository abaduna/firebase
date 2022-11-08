import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {

  loginForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      usuario: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }
  login(){
  console.log(this.loginForm);

  }
}
