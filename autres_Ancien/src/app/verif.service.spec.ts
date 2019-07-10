import { TestBed } from '@angular/core/testing';

import { VerifService } from './verif.service';

describe('VerifService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerifService = TestBed.get(VerifService);
    expect(service).toBeTruthy();
  });
});
