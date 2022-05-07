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
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    configuration = new Configuration({});
    service = new AuthService(httpClientSpy, configuration);
    sessionStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return undefined if no admin token saved', function () {
    let credentials = service.getAdminCredentials();
    expect(credentials == undefined).toBeTruthy();
  });

  it('should return credentials if admin token set', function () {
    sessionStorage.setItem('admin_token', 'token');
    let actual = service.getAdminCredentials();
    let expected = 'token';
    expect(actual.bearerAuth == expected).toBeTruthy();
  });


  it('should return credentials json', function () {
    let token = "token"
    let credentials = service.getCredentialsForToken(token);
    expect(credentials.bearerAuth = token);
  });

 /* it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.post.and.returnValue(of(errorResponse));

    service.loginAdmin({email: 'admin', password: 'admin123'}).subscribe({
      next: admin => {
        expect(admin.token == undefined);
        done();
      },
      error: error  => {
        expect(error.message).toContain('test 404 error');
        done();
      }
    });
  });*/

  /*it('should dings', function () {
    httpClientSpy.post.and.returnValue()

    service.loginAdmin({email:})
  });*/


});
