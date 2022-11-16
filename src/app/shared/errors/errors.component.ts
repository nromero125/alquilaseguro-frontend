import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  errorMsgList: any = [];

  @Input() controlName!: AbstractControl | AbstractControlDirective

  constructor() { }

  ngOnInit(): void {
  }

  errorMessage: any = {
    'required': (params: any) => `Este campo es requerido.`,
    'maxlength': (params: any) => `La cantidad máxima de caracteres permitidos ${params.requiredLength}.`,
    'minlength': (params: any) => `La cantidad mínima de caracteres permitidos es de ${params.requiredLength}.`,
    'pattern': (params: any) => ` Formato invalido.`,
    'min': (params: any) => `El número ingresado debe ser mayor o igual que ${params.min}.`,
    'max': (params: any) => `El número ingresado debe ser menor o igual que ${params.max}.`,
    'email': (params: any) => `Introduzca una dirección de correo válida`,
    'whitespace': (params: any) => `No se permiten espacios en blanco.`
  };


  controlHasError() {
    if (this.controlName.errors) {
      this.errorMsgList = [];
      Object.keys(this.controlName.errors).forEach((error: any) => {
        this.controlName.touched || this.controlName.dirty ?
          this.errorMsgList.push(this.errorMessage[error](this.controlName.errors![error])) : '';
      });
      return this.errorMsgList;
    }
    else {
      return [];
    }
  }

}
