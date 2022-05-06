import {TestBed} from "@angular/core/testing";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Configuration} from "../../configuration";
import {OrderService} from "../order.service";
import {AuthService} from "../auth.service";

describe('CurrencyService', () => {
  let service: OrderService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let configuration: Configuration;
  let mockAuthService: AuthService

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    configuration = new Configuration({});
    mockAuthService = new AuthService(httpClientSpy, configuration);
    service = new OrderService(httpClientSpy, mockAuthService, configuration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
