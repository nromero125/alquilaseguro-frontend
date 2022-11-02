import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClamisDetailsComponent } from './clamis-details.component';

describe('ClamisDetailsComponent', () => {
  let component: ClamisDetailsComponent;
  let fixture: ComponentFixture<ClamisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClamisDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClamisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
