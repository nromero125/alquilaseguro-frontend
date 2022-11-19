import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ChangePasswordComponent } from '../header/change-password/change-password.component';
import { SweetAlert } from '../utils/Sweet-Alert';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  get user(){
    return this.authServices.user
  }


  constructor( private authServices : AuthService,
    private _dialog: MatDialog,
    private router: Router,
    private _toastService: ToastrService,) { }
    sweetAlrt = new SweetAlert
  ngOnInit(): void {
  }

  openChangePasswordModal() {
    this._dialog.open(ChangePasswordComponent)
  }
  logout() {
    this.sweetAlrt.AlertConfirm("Cerrar Sesión", "¿Está seguro de salir de la aplicación?", "question").then(res => {
      if (res) {
        this.authServices.logout().subscribe({
          next: (res: any) => {
            this.router.navigateByUrl('/auth/login')
            document.getElementById('page-container')?.classList.remove('sidebar-o')
          },
          error: (err: any) => {
            this._toastService.error('Ocurrio un error tratando de cerrar sesion')
          },
        })
      }
      else {

      }
    })

  }

}
