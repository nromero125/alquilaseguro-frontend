import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CountHome } from 'src/app/interfaces/home-count-interface';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private homeService : HomeService,
              private authService: AuthService) {
                this.current_user = authService.user
    }
  
  current_user: any;
  count!: CountHome;

  ngOnInit(): void {
    console.log( this.current_user);
    this.homeService.getCountsHome().subscribe({
      next:(res)=>{
         this.count = res
      },
      error:(res)=>{
        console.log(res);
      }
    })
  }

}
