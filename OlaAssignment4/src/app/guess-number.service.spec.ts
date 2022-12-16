import { TestBed } from '@angular/core/testing';

import { GuessNumberService } from './guess-number.service';

describe('GuessNumberService', () => {
  let service: GuessNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuessNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
