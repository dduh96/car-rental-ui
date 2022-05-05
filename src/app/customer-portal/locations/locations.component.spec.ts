import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsComponent } from './locations.component';
import {AgmCoreModule, MapsAPILoader} from "@agm/core";
import {environment} from "../../../environments/environment";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('LocationsComponent', () => {
  let component: LocationsComponent;
  let fixture: ComponentFixture<LocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsComponent ],
      imports: [
        AgmCoreModule.forRoot({
        apiKey: environment.GAPI_KEY,
        libraries: ['places']
      }),
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  /*it('should be positive number', () => {
    expect(component.parseToNumber("5")).toBe(5);
  });*/
});
