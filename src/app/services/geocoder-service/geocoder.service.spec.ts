import { TestBed } from '@angular/core/testing';

import { GeocoderService } from './geocoder.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('GeocoderService', () => {
  let service: GeocoderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GeocoderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
