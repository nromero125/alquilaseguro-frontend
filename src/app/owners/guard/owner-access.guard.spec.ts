import { TestBed } from '@angular/core/testing';

import { OwnerAccessGuard } from './owner-access.guard';

describe('OwnerAccessGuard', () => {
  let guard: OwnerAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OwnerAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
