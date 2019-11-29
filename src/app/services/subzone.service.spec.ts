import { TestBed } from '@angular/core/testing';

import { SubzoneService } from './subzone.service';

describe('SubzoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubzoneService = TestBed.get(SubzoneService);
    expect(service).toBeTruthy();
  });
});
