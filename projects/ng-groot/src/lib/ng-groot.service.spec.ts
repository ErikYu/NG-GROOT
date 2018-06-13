import { TestBed, inject } from '@angular/core/testing';

import { NgGrootService } from './ng-groot.service';

describe('NgGrootService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgGrootService]
    });
  });

  it('should be created', inject([NgGrootService], (service: NgGrootService) => {
    expect(service).toBeTruthy();
  }));
});
