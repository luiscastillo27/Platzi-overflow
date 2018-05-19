import { TestBed, inject } from '@angular/core/testing';

import { QustionsService } from './qustions.service';

describe('QustionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QustionsService]
    });
  });

  it('should be created', inject([QustionsService], (service: QustionsService) => {
    expect(service).toBeTruthy();
  }));
});
