import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email:string = ''

  constructor(private _authService: AuthService, private _toastService: ToastrService) { }

  ngOnInit(): void {
  }

  sendEmailForResetting(){
    this._authService.sendResettingEmail(this.email).subscribe({
      next:(res:any)=>{
        this._toastService.success('Revisa tu correo donde estaremos enviando un enlace para reiniciar su contraseña', 'Enlace enviado')
        console.log(res);
      },
      error:(err:any)=>{
        this._toastService.error('El correo es inválido o aún no ha sido verificado', 'Correo Inválido')
        console.log(err);
      }
    })
  }

}
