import { TestBed } from '@angular/core/testing';

import { PlantingService } from './planting.service';

describe('Plantingservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlantingService = TestBed.get(PlantingService);
    expect(service).toBeTruthy();
  });
});
