import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlDirective, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { resetPasswordModel } from '../../interfaces/interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordDTO = new resetPasswordModel()

  resetPasswordForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    confirmPassword: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    token: new FormControl('', [Validators.required]),
  }, { validators: this.confirmPassword })

  errorMessage: any = {
    'required': (params: any) => `Este campo es requerido.`,
    'maxlength': (params: any) => `La cantidad máxima de caracteres permitidos ${params.requiredLength}.`,
    'minlength': (params: any) => `La cantidad mínima de caracteres permitidos es de ${params.requiredLength}.`,
    'pattern': (params: any) => `Formato invalido.`,
    'min': (params: any) => `El número ingresado debe ser mayor o igual que ${params.min}.`,
    'max': (params: any) => `El número ingresado debe ser menor o igual que ${params.max}.`,
    'email': (params: any) => `Introduzca una dirección de correo válida ${params.max}.`,
    'whitespace': (params: any) => `No se permiten espacios en blanco.`
  };

  errorMsgList: any = [];

  constructor(
    private _authService: AuthService, 
    private _toastService: ToastrService) { }

  ngOnInit(): void {
  }

  confirmPassword(resetPasswordForm: AbstractControl) {
    if (resetPasswordForm.get('confirmPassword')?.dirty || resetPasswordForm.get('confirmPassword')?.touched){    
      if (resetPasswordForm.get('confirmPassword')?.value !== resetPasswordForm.get('password')?.value) {
        return { invalid: true, errorMsg: 'Las contraseñas no coinciden' };
      }
    }
    return null
  }


  controlHasError(control: AbstractControl | AbstractControlDirective) {
    if (control.errors) {
      this.errorMsgList = [];
      Object.keys(control.errors).forEach((error: any) => {
        control.touched || control.dirty ?
          this.errorMsgList.push(this.errorMessage[error](control.errors![error])) : '';
      });
      return this.errorMsgList;
    }
    else {
      return [];
    }
  }

  resetPassword() {

    this.resetPasswordDTO = {
      email: this.resetPasswordForm.get('email')?.value ?? '',
      password: this.resetPasswordForm.get('password')?.value ?? '',
      password_confirmation: this.resetPasswordForm.get('confirmPassword')?.value ?? '',
      token: this.resetPasswordForm.get('token')?.value ?? ''
    }

    this._authService.resetPassword( this.resetPasswordDTO).subscribe({
      next: (res:any)=>{
      this._toastService.success('Su contraseña ha sido cambiada, ya puede iniciar sesión')
      this.resetPasswordForm.reset()
      this.resetPasswordDTO = new resetPasswordModel()
      },
      error(err) {
        console.log(err);
      }
    })
  }

}
