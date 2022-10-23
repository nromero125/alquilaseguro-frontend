import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPaymenComponent } from './report-paymen.component';

describe('ReportPaymenComponent', () => {
  let component: ReportPaymenComponent;
  let fixture: ComponentFixture<ReportPaymenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPaymenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportPaymenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
