import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Payment, Properties } from 'src/app/interfaces/property-interfaces';
import { BrokersService } from 'src/app/services/brokers.service';

@Component({
  selector: 'app-properties-details',
  templateUrl: './properties-details.component.html',
  styleUrls: ['./properties-details.component.css']
})
export class PropertiesDetailsComponent implements OnInit, AfterContentChecked {

  current_user: any

  constructor(
    private brokersService: BrokersService,
    private routeActive: ActivatedRoute,
    private _toastService: ToastrService,
    private ref: ChangeDetectorRef,
    private authService: AuthService) {
    this.current_user = authService.user
  }

  propertyDetails!: Properties;
  paymentsDetails: Payment[] = [];
  paginatedPaymentsDetails: Payment[] = [];
  idProperty!: number;

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }

  ngOnInit() {
    this.idProperty = this.routeActive.snapshot.params['id'];

    this.brokersService.getPropertyDetails(this.current_user?.user_type, this.idProperty).subscribe({
      next: (res) => {
        if (res) {
          this.propertyDetails = res;
          this.paymentsDetails = res.payments
        }
      },
      error: (err) => {
        this._toastService.error('Ha ocurrido un error')
        return
      }
    })
  }

  getPaginatedRecords(paginatedRecords: any) {
    this.paginatedPaymentsDetails = paginatedRecords
  }

}
