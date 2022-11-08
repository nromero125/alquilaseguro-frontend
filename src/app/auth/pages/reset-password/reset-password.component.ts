import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    confirmPassword: new FormControl(''),
  }, { validators: this.confirmPassword })

  constructor() { }

  ngOnInit(): void {
  }

  confirmPassword(resetPasswordForm: AbstractControl) {
    if (resetPasswordForm.get('confirmPassword')?.value !== resetPasswordForm.get('password')?.value) {
      console.log(resetPasswordForm);
      return { invalid: true, errorMsg: 'Las contraseñas no coinciden' };
    }
    return null
  }


  controlHasError(control:AbstractControl){
    
  }

  resetPassword(){
    console.log(this.resetPasswordForm.get('password')?.errors);
  }

}
