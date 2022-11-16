import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SweetAlert } from '../utils/Sweet-Alert';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  get user() {
    return this.authServices.user
   
  }

  sweetAlrt = new SweetAlert

  constructor(
    private router: Router,
    private authServices: AuthService,
    private _toastService: ToastrService
  ) { }

  ngOnInit(): void {
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
