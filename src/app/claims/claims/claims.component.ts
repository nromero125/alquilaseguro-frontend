import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Claims } from 'src/app/interfaces/claims-interfaces';
import { ClaimsService } from 'src/app/services/claims.service';
import { CreateClaimModalComponent } from '../create-claim-modal/create-claim-modal.component';
@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {

  current_user:any

  constructor(private claimsServices: ClaimsService, private _dialog: MatDialog, private _authService: AuthService) { 
    this.current_user = this._authService.user
  }

  claimsList: Claims[] = [];
  paginatedClaimsList: Claims[] = [];


  ngOnInit(): void {
    this.getClaimsData()
  }

  getClaimsData() {
      this.claimsServices.getClaims(this.current_user?.user_type)?.subscribe({
        next: (res: any) => {
          this.claimsList = res
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
