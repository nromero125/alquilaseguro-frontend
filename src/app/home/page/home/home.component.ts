import { Component, OnInit } from '@angular/core';
import { CountHome } from 'src/app/interfaces/home-count-interface';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private homeService : HomeService) { }

  count!: CountHome;

  ngOnInit(): void {
    this.homeService.getCountsHome().subscribe({
      next:(res)=>{
         this.count = res
      }
    })
  }

}
