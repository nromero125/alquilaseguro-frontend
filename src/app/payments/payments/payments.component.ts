import { ChangeDetectorRef, Component, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PaymentsService } from 'src/app/services/payments.service';
import { ReportPaymenComponent } from '../reportPaymen/report-paymen/report-paymen.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit, AfterContentInit, AfterContentChecked {
  paymentsList: any[] = []
  paginatedPaymentsList: any[] = []
  fileUrl: string = ''
  current_user:any

  constructor(private _dialog: MatDialog,
    private _paymentsService: PaymentsService,
    private _changeDet: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private _toastService: ToastrService,
    private authService: AuthService) 
    {
      this.current_user = authService.user
     }

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

    this._paymentsService.getPayments(this.current_user?.user_type).subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.paymentsList = res.data
      }
    })
  }

  openReportModal() {
    this._dialog.open(ReportPaymenComponent,
      {
        width: '500px'
      }).afterClosed().subscribe({
        next: (res: any) => {
          if (res) {
            this.getData()
          }
        },
        error: (err: any) => {

        }
      })
  }

  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  setUrl(url: string) {
    if (!url) {
      this._toastService.warning('No existe un comprobante para mostrar')
      return
    }
    this.fileUrl = url
    window.open(url, '_blank');
  }



  getPaginatedRecords(paginatedRecords: any) {
    this.paginatedPaymentsList = paginatedRecords
  }

}
