import { TestBed } from '@angular/core/testing';

import { VerificarSessionGuard } from './verificar-session.guard';

describe('VerificarSessionGuard', () => {
  let guard: VerificarSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerificarSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
