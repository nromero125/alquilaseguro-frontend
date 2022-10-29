import { Component, Input, OnInit, Output, EventEmitter, AfterViewChecked, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() records: any[] = []
  @Output() sendPaginatedRecords = new EventEmitter<Array<any>>();

  pageSlice:any

  constructor( private _changeDet: ChangeDetectorRef) {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pageSlice = this.records.slice(0, 5)
    this.sendPaginatedRecords.emit(this.pageSlice)
    this._changeDet.detectChanges()
  }

  onPageChange(event: PageEvent) {
    console.log(event)
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.records.length) {
      endIndex = this.records.length
    }
    this.pageSlice = this.records.slice(startIndex, endIndex)
    this.sendPaginatedRecords.emit(this.pageSlice)
  }

}
