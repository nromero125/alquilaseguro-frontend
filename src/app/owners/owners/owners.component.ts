import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BrokersService } from 'src/app/services/brokers.service';
@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit, AfterContentChecked {

  
  propertiesList:any []=[];
  paginatedPropertyList:any []=[];

  constructor(private brokerService:BrokersService,
              private ref: ChangeDetectorRef) { }

  ngAfterContentChecked() {
  this.ref.detectChanges();
  }
            
  
  ngOnInit(): void {
    this.getClaimsData()
  }

  
  getClaimsData(){
    this.brokerService.getTenantProperties().subscribe({
      next: (res: any) => {
        this.propertiesList= res.data
      }
    })
  }

  getPaginatedRecords(paginatedRecords: any) {
    this.paginatedPropertyList = paginatedRecords
  }



}
