import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UpdatePassword } from 'src/app/interfaces/updatePassword-interfaces';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  updatePasswordDTO = new UpdatePassword

  updatePasswordForm = new FormGroup({
    current_password: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    confirmPassword: new FormControl('', Validators.required),
  }, { validators: this.confirmPassword })

  constructor(
    private _authService: AuthService,
    private _toastService: ToastrService,
    public dialogRef: MatDialogRef<ChangePasswordComponent>
  ) {
    dialogRef.disableClose = true
  }

  ngOnInit(): void {
  }


  confirmPassword(updatePasswordForm: AbstractControl) {
    if (updatePasswordForm.get('confirmPassword')?.dirty || updatePasswordForm.get('confirmPassword')?.touched) {
      if (updatePasswordForm.get('confirmPassword')?.value !== updatePasswordForm.get('password')?.value) {
        return { invalid: true, errorMsg: 'Las contraseñas no coinciden' };
      }
    }
    return null
  }


  resetPassword() {

    if (this.updatePasswordForm.invalid) {
      this._toastService.warning('Por favor completar los campos requeridos')
      return
    }

    this.updatePasswordDTO = {
      current_password: this.updatePasswordForm.get('current_password')?.value ?? '',
      password: this.updatePasswordForm.get('password')?.value ?? '',
      password_confirmation: this.updatePasswordForm.get('confirmPassword')?.value ?? '',
    }

    this._authService.updatePassword(this.updatePasswordDTO).subscribe({
      next: (res: any) => {
        this._toastService.success('Su contraseña ha sido actulizada con éxito')
        this.updatePasswordForm.reset()
        this.updatePasswordDTO = new UpdatePassword()
      },
      error: (err) => {
        this._toastService.success('La contraseña provista no concuerda con su contraseña actual', 'Ha ocurrido un error tratando de actulizar su contraseña')
      }
    })
  }

  closeModal(){
    this.dialogRef.close()
  }

}
