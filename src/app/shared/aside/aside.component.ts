import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  get user(){
    return this.authServices.user
  }


  constructor( private authServices : AuthService) { }

  ngOnInit(): void {
  }

}
