import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinerComponent } from './spiner/spiner.component';
import { FormGroup, FormsModule, ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [
    SpinerComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule
  ],exports: [

    FormsModule, 
    ReactiveFormsModule,
    SpinerComponent
  ]
})
export class SharedModule { }
