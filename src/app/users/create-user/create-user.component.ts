import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BrokerUser } from 'src/app/interfaces/users-interfaces';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userDTO = new BrokerUser()
  userForm: FormGroup = new FormGroup({
    identification: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    phone_number: new FormControl('', Validators.required),
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateUserComponent>,
    private _userService: UsersService,
    private _toastService: ToastrService,
  ) { dialogRef.disableClose = true }

  ngOnInit(): void {
    if (this.data.isEditing) {
      console.log(this.data.user);
      this.getUserForEditing()
    }
  }

  getUserForEditing() {
    let user = this.data.user
    this.userForm.get('password')?.removeValidators(Validators.required)
    this.userForm.get('password')?.updateValueAndValidity()
    this.userForm.setValue({
      identification: user.identification,
      firstname: user.firstname,
      lastname: user.lastname,
      address: user.address,
      email: user.user.email,
      password: '',
      phone_number: user.phone_number,
    })
  }

  createUser() {

    if (this.userForm.invalid) {
      this._toastService.warning('Por favor llene todos los campos requeridos')
      return
    }

    this.userDTO = {
      identification: this.userForm.get('identification')?.value,
      firstname: this.userForm.get('firstname')?.value,
      address: this.userForm.get('address')?.value,
      email: this.userForm.get('email')?.value,
      lastname: this.userForm.get('lastname')?.value,
      password: this.userForm.get('password')?.value,
      phone_number: this.userForm.get('phone_number')?.value,
    }

    this._userService.createUser(this.userDTO).subscribe({
      next: (res: any) => {
        if (res.success) {
          this._toastService.success(res.message)
          this.userForm.reset()
          this.closeModal(true)
        }
      },
      error: (err: any) => {
        this._toastService.error('Ocurrio un error tratando de crear este usuario, por favor intente mas tarde', 'Error inesperado')
        console.log(err);
      },
    })
  }

  updateUser(){

    if (this.userForm.invalid) {
      this._toastService.warning('Por favor llene todos los campos requeridos')
      return
    }

    this.userDTO = {
      identification: this.userForm.get('identification')?.value,
      firstname: this.userForm.get('firstname')?.value,
      address: this.userForm.get('address')?.value,
      email: this.userForm.get('email')?.value,
      lastname: this.userForm.get('lastname')?.value,
      phone_number: this.userForm.get('phone_number')?.value,
      
    }

    this._userService.updateUser(this.userDTO, this.data.user.id).subscribe({
      next: (res: any) => {
        if (res.success) {
          this._toastService.success(res.message)
          this.userForm.reset()
          this.closeModal(true)
        }
      },
      error: (err: any) => {
        this._toastService.error('Ocurrio un error tratando de crear este usuario, por favor intente mas tarde', 'Error inesperado')
        console.log(err);
      },
    })

  }

  closeModal(created: boolean) {
    this.dialogRef.close(created)
  }

}
