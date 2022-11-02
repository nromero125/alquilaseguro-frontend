import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  get user() {
    return this.authServices.user
  }

  constructor(private router: Router,
    private authServices: AuthService) { }

  ngOnInit(): void {
  }


  logout() {
    this.router.navigateByUrl('/auth/login')
    this.authServices.logout();
  }


}
