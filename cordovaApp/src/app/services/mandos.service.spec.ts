import { TestBed } from '@angular/core/testing';

import { MandosService } from './mandos.service';

describe('MandosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MandosService = TestBed.get(MandosService);
    expect(service).toBeTruthy();
  });
});
