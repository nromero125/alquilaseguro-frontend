import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PaymentsService } from 'src/app/services/payments.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-report-paymen',
  templateUrl: './report-paymen.component.html',
  styleUrls: ['./report-paymen.component.css']
})

export class ReportPaymenComponent implements OnInit {

  paymentForm: FormGroup = new FormGroup({
    date: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    voucher: new FormControl('', Validators.required),
    property_id: new FormControl('',Validators.required)
  })

  paymentDTO = new FormData();

  constructor(private _paymentService: PaymentsService,
    public dialogRef: MatDialogRef<ReportPaymenComponent>,
    public userService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any, private _toastService: ToastrService) { 
      dialogRef.disableClose = true;
    
    }

  userPropertyData:any

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next:(res:any)=>{
       this.userPropertyData = res.tenant
         this.paymentForm.patchValue({
          property_id: this.userPropertyData.property.id
        });
        this.paymentForm.get('property_id')?.disable();
      }
    })
  }
  

  onImageSelected(image: any) {
    this.paymentForm.get('voucher')?.setValue(image.files[0])
  }

  reportPayment() {


    if (this.paymentForm.invalid) {
      this._toastService.warning('Debe llenar todos los campos requeridos')
      return
    }
    this.paymentDTO.append('paid_at', this.paymentForm.get('date')?.value)
    this.paymentDTO.append('amount', this.paymentForm.get('amount')?.value)
    this.paymentDTO.append('voucher', this.paymentForm.get('voucher')?.value)
    this.paymentDTO.append('property_id', this.paymentForm.get('property_id')?.value)

    this._paymentService.createPayment(this.paymentDTO).subscribe({
      next: (res: any) => {
        this.paymentDTO = new FormData()
        this._toastService.success('Pago reportado satisfactoriamente')
        this.closeModal(true)
      },
      error: (err: any) => {
        this.paymentDTO = new FormData()
        this._toastService.error('Ocurrio un error tratando de reportar este pago')
        console.log(err)
      }
    }) 
  }
 
  closeModal(created: boolean) {
    this.dialogRef.close(created)
  }
}
