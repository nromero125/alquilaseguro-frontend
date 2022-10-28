import { ChangeDetectorRef, Component, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentsService } from 'src/app/services/payments.service';
import { ReportPaymenComponent } from '../reportPaymen/report-paymen/report-paymen.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit, AfterContentInit,AfterContentChecked {
  paymentsList: any[] = []
  paginatedPaymentsList: any[] = []

  constructor(private _dialog: MatDialog, private _paymentsService: PaymentsService, private _changeDet: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getData()

  }
  ngAfterViewChecked(): void {
    this._changeDet.detectChanges()
  }

  ngAfterContentInit(): void {
    this._changeDet.detectChanges()
  }
  ngAfterContentChecked(): void {
    this._changeDet.detectChanges()
  }

  getData() {
    this._paymentsService.getTenantPayments().subscribe({
      next: (res: any) => {
        this.paymentsList = res.data
      }
    })
  }

  openReportModal() {
    this._dialog.open(ReportPaymenComponent,
      {
        width: '500px'
      })
  }


  getPaginatedRecords(paginatedRecords: any) {
    this.paginatedPaymentsList = paginatedRecords
  }

}
