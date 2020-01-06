import { TestBed } from '@angular/core/testing';

import { StatusCheckService } from './status-check.service';

describe('StatusCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusCheckService = TestBed.get(StatusCheckService);
    expect(service).toBeTruthy();
  });
});
