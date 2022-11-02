import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Payment, Properties } from 'src/app/interfaces/property-interfaces';
import { BrokersService } from 'src/app/services/brokers.service';

@Component({
  selector: 'app-properties-details',
  templateUrl: './properties-details.component.html',
  styleUrls: ['./properties-details.component.css']
})
export class PropertiesDetailsComponent implements OnInit, AfterContentChecked {

  constructor(private brokersService: BrokersService,
            private routeActive: ActivatedRoute,
            private _toastService: ToastrService,
            private ref: ChangeDetectorRef) { }

  propertyDetails!: Properties;
  paymentsDetails: Payment[] = []; 
  paginatedPaymentsDetails: Payment[] = []; 
  idPropertie!: number ;

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }

  ngOnInit() {
    this.idPropertie = this.routeActive.snapshot.params['id'];

    this.brokersService.getPropertiesDetails(this.idPropertie).subscribe({
      next:(res)=>{
        if(res){
          this.propertyDetails = res;
          this.paymentsDetails = res.payments
        }
      },
      error:(err)=>{
        this._toastService.error('Ha ocurrido un error')
      return
      }
    })
  }

  getPaginatedRecords(paginatedRecords: any) {
    this.paginatedPaymentsDetails = paginatedRecords
  }

}
