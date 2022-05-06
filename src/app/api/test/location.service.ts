import {TestBed} from "@angular/core/testing";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Configuration} from "../../configuration";
import {CurrencyService} from "../currency.service";
import {LocationService} from "../location.service";

describe('LocationService', () => {
  let service: LocationService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let configuration: Configuration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    configuration = new Configuration({});
    service = new LocationService(httpClientSpy, configuration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
