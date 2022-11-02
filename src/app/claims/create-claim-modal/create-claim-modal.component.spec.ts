import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClaimModalComponent } from './create-claim-modal.component';

describe('CreateClaimModalComponent', () => {
  let component: CreateClaimModalComponent;
  let fixture: ComponentFixture<CreateClaimModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClaimModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClaimModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
