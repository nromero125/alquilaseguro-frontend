import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Claims } from 'src/app/interfaces/claims-interfaces';
import { ClaimsService } from 'src/app/services/claims.service';
declare var $: any;

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

  loadGalleryPlugin() {
    $(document).ready(function () {
      $('.js-gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
          // options for gallery
          enabled: true
        },
        // other options
      });
    });
  }

  getData() {
    this._claimsService.getDetails(this.claimId).subscribe({
      next: (res: any) => {
        this.claimDetails = res
        this.loadGalleryPlugin()
      },
      error: (err: any) => {
        this._toastService.error('Ha ocurrido un error tratando de obtener la reclamación')
        console.log(err)
      }
    })
  }

}
