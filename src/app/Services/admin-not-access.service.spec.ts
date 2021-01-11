import { TestBed } from '@angular/core/testing';

import { AdminNotAccessService } from './admin-not-access.service';

describe('AdminNotAccessService', () => {
  let service: AdminNotAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminNotAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
