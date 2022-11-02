import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Claims } from 'src/app/interfaces/claims-interfaces';
import { ClaimsService } from 'src/app/services/claims.service';

@Component({
  selector: 'app-clamis-details',
  templateUrl: './clamis-details.component.html',
  styleUrls: ['./clamis-details.component.css']
})
export class ClamisDetailsComponent implements OnInit {

  claimDetails: any
  claimId: number = 0

  constructor(
    private activatedRoute: ActivatedRoute,
    private _claimsService: ClaimsService,
    private _toastService: ToastrService
  ) {
    this.claimId = activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this._claimsService.getDetails(this.claimId).subscribe({
      next: (res: any) => {
        this.claimDetails = res
        console.log(this.claimDetails)
      },
      error: (err: any) => {
        this._toastService.error('Ha ocurrido un error tratando de obtener la reclamación')
        console.log(err)
      }
    })
  }

}
