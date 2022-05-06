import {TestBed} from "@angular/core/testing";
import {AuthService} from "../auth.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Configuration} from "../../configuration";
import {of} from "rxjs";

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let configuration: Configuration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    configuration = new Configuration({});
    service = new AuthService(httpClientSpy, configuration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
