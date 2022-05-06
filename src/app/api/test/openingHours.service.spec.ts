import {TestBed} from "@angular/core/testing";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Configuration} from "../../configuration";
import {OpeningHoursService} from "../openingHours.service";


describe('OpeningHoursService', () => {
  let service: OpeningHoursService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let configuration: Configuration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    configuration = new Configuration({});
    service = new OpeningHoursService(httpClientSpy, configuration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
