import {TestBed} from "@angular/core/testing";
import {AuthService} from "../auth.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Configuration} from "../../configuration";
import {of} from "rxjs";
import {CarService} from "../car.service";
import {Car} from "../../model/car";

describe('CarService', () => {
  let service: CarService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let configuration: Configuration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    configuration = new Configuration({});
    service = new CarService(httpClientSpy, configuration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(of(errorResponse));

    service.getCars(Car.CurrencySymbolEnum.Usd).subscribe({
      next: (_: any) => done.fail('expected an error, not heroes'),
      error: (error: { message: any; })  => {
        expect(error.message).toContain('test 404 error');
        done();
      }
    });
  });
*/
});
