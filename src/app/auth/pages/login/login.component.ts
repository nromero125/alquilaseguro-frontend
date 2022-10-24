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

  frm: FormGroup = this.fb.group({
    email:[,[Validators.required]],
    password:[,[Validators.required]]
  })

  constructor( private fb : FormBuilder,
               private router: Router,
               private authServices: AuthService) { }

  ngOnInit(): void {
  }


  login(){
    if(this.frm.invalid){
      this.frm.markAllAsTouched();
      return
    }
  
  const {email, password} = this.frm.value

  this.authServices.login( email, password ).subscribe({
    next:( value )=> {
    this.router.navigateByUrl('/payments/list')
    },
    error:( err )=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.error.message
      });
    }
  })
  console.log(this.frm.value);
  }

}
