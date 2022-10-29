import { Component, OnInit } from '@angular/core';
import { Claims } from 'src/app/interfaces/claims-interfaces';
import { ClaimsService } from 'src/app/services/claims.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {

  constructor(private claimsServices: ClaimsService) { }

  claimsList:Claims []=[];
  paginatedClaimsList:Claims []=[];


  ngOnInit(): void {
    this.getClaimsData()
  }

  getClaimsData(){
    this.claimsServices.getTenantClaims().subscribe({
      next: (res: any) => {
        this.claimsList= res.data
      }
    })
  }


  getPaginatedRecords(paginatedRecords: any) {
    this.paginatedClaimsList = paginatedRecords
  }

}
