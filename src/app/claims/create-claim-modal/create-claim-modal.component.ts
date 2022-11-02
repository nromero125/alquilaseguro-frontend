import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ClaimsService } from 'src/app/services/claims.service';

@Component({
  selector: 'app-create-claim-modal',
  templateUrl: './create-claim-modal.component.html',
  styleUrls: ['./create-claim-modal.component.css']
})
export class CreateClaimModalComponent implements OnInit {

  claimForm: FormGroup = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    voucher: new FormControl('', Validators.required)
  })

  claimDTO = new FormData();

  constructor(
    public dialogRef: MatDialogRef<CreateClaimModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toastService: ToastrService,
    private _claimsService: ClaimsService,
    private autService: AuthService) {
    dialogRef.disableClose = true
  }


  ngOnInit(): void {
    console.log(this.autService.user)
  }

  onImageSelected(image: any) {
    let imagesList: any[] = []
    imagesList.push(image.files)
    this.claimForm.get('voucher')?.setValue(image.files[0])
    console.log(this.claimForm.get('voucher')?.value)
  }

  closeModal(created: boolean) {
    this.dialogRef.close(created)
  }

  createClaim() {
    if (this.claimForm.invalid) {
      this._toastService.warning('Debe llenar todos los campos requeridos')
      return
    }
    this.claimDTO.append('description', this.claimForm.get('description')?.value)
    this.claimDTO.append('amount_to_claim', this.claimForm.get('amount')?.value)
    this.claimDTO.append('evidence', this.claimForm.get('voucher')?.value)
    this.claimDTO.append('property_id', '1')

    this._claimsService.createClaim(this.claimDTO).subscribe({
      next: (res: any) => {
        this.claimDTO = new FormData()
        this._toastService.success('Reclamación creada satisfactoriamente')
        // this.closeModal(true)
      },
      error: (err: any) => {
        this.claimDTO = new FormData()
        this._toastService.error('Ocurrio un error tratando crear esta reclamación')
        console.log(err)
      }
    })
  }

}
