import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ClaimsService } from 'src/app/services/claims.service';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-create-claim-modal',
  templateUrl: './create-claim-modal.component.html',
  styleUrls: ['./create-claim-modal.component.css']
})
export class CreateClaimModalComponent implements OnInit {

  claimForm: FormGroup = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    voucher: new FormControl('', Validators.required),
    property_id: new FormControl(null, Validators.required)
  })

  claimDTO = new FormData();
  properties: any[] = []

  constructor(
    public dialogRef: MatDialogRef<CreateClaimModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toastService: ToastrService,
    private _claimsService: ClaimsService,
    private _propertiesService: PropertiesService,
    private autService: AuthService) {
    dialogRef.disableClose = true
  }


  ngOnInit(): void {
    this.getProperties()
  
  }

  getProperties() {
    this._propertiesService.getProperties().subscribe({
      next: (res: any) => {
        this.properties = res
      },
      error: (err: any) => {
        this._toastService.error('Ocurrio un error tratando de cargar las propiedades de este usuario')
        console.log(err)
      }
    })
  }

  onImageSelected(images: any) {
    if (images.files.length > 6) {
      this._toastService.warning('Solo puede seleccionar un maximo de 6 imagenes')
      this.claimForm.get('voucher')?.reset()
      return
    }
    let imagesList = Object.entries(images.files)
    let evidences = imagesList.map((images: any) => {
      return images[1]
    })
    evidences.forEach(evidence => {
      if (!evidence.type.includes('image')) {
        this._toastService.warning('Este campo solo acepta imagenes')
        this.claimForm.get('voucher')?.reset()
        return
      }
      this.claimDTO.append('evidence[]', evidence)
    });
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

    this.claimDTO.append('property_id', this.claimForm.get('property_id')?.value)

    this._claimsService.createClaim(this.claimDTO).subscribe({
      next: (res: any) => {
        this.claimDTO = new FormData()
        this._toastService.success('Reclamación creada satisfactoriamente')
        this.closeModal(true)
      },
      error: (err: any) => {
        this.claimDTO = new FormData()
        this._toastService.error('Ocurrio un error tratando de crear esta reclamación')
        console.log(err)
      }
    })
  }

}
