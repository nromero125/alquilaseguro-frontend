import { TestBed } from '@angular/core/testing';

import { UsersAccessGuard } from './users-access.guard';

describe('UsersAccessGuard', () => {
  let guard: UsersAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsersAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
