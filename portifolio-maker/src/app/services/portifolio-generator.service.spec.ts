import { TestBed } from '@angular/core/testing';

import { PortifolioGeneratorService } from './portifolio-generator.service';

describe('PortifolioGeneratorService', () => {
  let service: PortifolioGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortifolioGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
