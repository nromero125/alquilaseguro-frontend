import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailPattern: string = "^[a-z A-Z 0-9._%+-]+@[a-z0-9.-]+\\.[a-z A-Z]{2,4}$";



  frm: FormGroup = this.fb.group({
    email:[,[Validators.required, Validators.email, Validators.pattern(this.emailPattern)] ],
    password:[,[Validators.required, Validators.minLength(6)]]
  })

  constructor( private fb : FormBuilder,
               private router: Router,
               private authServices: AuthService) { }

  ngOnInit(): void {
  }

  validators(control : string ){

   return this.frm.get(control)?.invalid && this.frm.get(control)?.touched

  }
 

  login(){
    if(this.frm.invalid){
      this.frm.markAllAsTouched();
      return
    }
  
  const {email, password} = this.frm.value

  this.authServices.login( email, password ).subscribe({
    next:( resp )=> {
     if(resp.hasOwnProperty('token')){
      this.router.navigateByUrl('/home')
     }else{
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: resp
      });
     }
    }
  })
  }

}
