import { TestBed } from '@angular/core/testing';

import { PaymentsAccessGuard } from './payments-access.guard';

describe('PaymentsAccessGuard', () => {
  let guard: PaymentsAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PaymentsAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
