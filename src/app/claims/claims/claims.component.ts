import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Claims } from 'src/app/interfaces/claims-interfaces';
import { ClaimsService } from 'src/app/services/claims.service';
import { CreateClaimModalComponent } from '../create-claim-modal/create-claim-modal.component';
declare var $: any;
@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {

  constructor(private claimsServices: ClaimsService, private _dialog: MatDialog) { }

  claimsList: Claims[] = [];
  paginatedClaimsList: Claims[] = [];


  ngOnInit(): void {
    this.getClaimsData()

    $(document).ready(function () {
      $('.js-gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
 
        // other options
      });
    });
  }

  getClaimsData() {
   
    this.claimsServices.getTenantClaims().subscribe({
      next: (res: any) => {
        this.claimsList = res.data
      }
    })
  }

  openCreationModal() {
    this._dialog.open(CreateClaimModalComponent).afterClosed().subscribe({
      next: (res: any) => {
        if (res) {
          this.getClaimsData()
        }
      },
      error: (err: any) => {

      }
    })
  }


  getPaginatedRecords(paginatedRecords: any) {
    this.paginatedClaimsList = paginatedRecords
  }

}
