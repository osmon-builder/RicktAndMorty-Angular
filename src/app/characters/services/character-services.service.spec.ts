import { TestBed } from '@angular/core/testing';

import { CharacterServicesService } from './character-services.service';

describe('CharacterServicesService', () => {
  let service: CharacterServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
