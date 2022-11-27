import { TestBed } from '@angular/core/testing';

import { ClaimsAccessGuard } from './claims-access.guard';

describe('ClaimsAccessGuard', () => {
  let guard: ClaimsAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClaimsAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
