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

  constructor( private homeService : HomeService)
  {}
  

  count!: CountHome;

  ngOnInit(): void {
    this.homeService.getCountsHome().subscribe({
      next:(res)=>{
         this.count = res
      },
      error:(res)=>{
        this.count={
          count_claims:0,
          count_late_payments:0,
          count_payments:0,
          count_properties:0,
          count_received_payments: 0
        }
      }
    })
  }

}
