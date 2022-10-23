import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReportPaymenComponent } from '../reportPaymen/report-paymen/report-paymen.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
 
  }

  openReportModal(){
    this._dialog.open(ReportPaymenComponent,
      {
        width: '500px'
      })
  }

}
