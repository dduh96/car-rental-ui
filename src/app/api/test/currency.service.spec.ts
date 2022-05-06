import {TestBed} from "@angular/core/testing";
import {AuthService} from "../auth.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Configuration} from "../../configuration";
import {of} from "rxjs";
import {CurrencyService} from "../currency.service";

describe('CurrencyService', () => {
  let service: CurrencyService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let configuration: Configuration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    configuration = new Configuration({});
    service = new CurrencyService(httpClientSpy, configuration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
