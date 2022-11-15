import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email:FormControl = new FormControl('', [Validators.required, Validators.email])

  constructor(private _authService: AuthService, private _toastService: ToastrService) { }

  ngOnInit(): void {
  }

  sendEmailForResetting(){
    this._authService.sendResettingEmail({email:this.email}).subscribe({
      next:(res:any)=>{
        this._toastService.success(res.message, 'Enlace enviado')
        console.log(res);
      },
      error:(err:any)=>{
        this._toastService.error('El correo es inválido o aún no ha sido verificado', 'Correo Inválido')
        console.log(err);
      }
    })
  }

}
