import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SweetAlert } from '../utils/Sweet-Alert';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private authServices : AuthService,
              private router: Router,
              private _toastService: ToastrService) { }
  get user(){
    return this.authServices.user
  }
  sweetAlrt = new SweetAlert
  
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
