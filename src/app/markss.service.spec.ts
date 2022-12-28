import { TestBed } from '@angular/core/testing';

import { MarkssService } from './markss.service';

describe('MarkssService', () => {
  let service: MarkssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
