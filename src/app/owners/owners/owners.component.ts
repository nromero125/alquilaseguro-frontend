import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BrokersService } from 'src/app/services/brokers.service';
@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit, AfterContentChecked {


  propertiesList: any[] = [];
  paginatedPropertyList: any[] = [];
  current_user: any

  constructor(
    private brokerService: BrokersService,
    private ref: ChangeDetectorRef,
    private authService: AuthService) 
    {
      this.current_user = authService.user
     }

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }


  ngOnInit(): void {
    this.getPropertiesData()
  }


  getPropertiesData() {
    this.brokerService.getProperties()?.subscribe({
      next: (res: any) => {
        console.log(res);
        this.propertiesList = res;
      }
    })
  }

  getPaginatedRecords(paginatedRecords: any) {
    this.paginatedPropertyList = paginatedRecords
  }



}
