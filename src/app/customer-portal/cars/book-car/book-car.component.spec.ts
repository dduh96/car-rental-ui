import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCarComponent } from './book-car.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('BookCarComponent', () => {
  let component: BookCarComponent;
  let fixture: ComponentFixture<BookCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCarComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close view when button clicked', function (){
    component.cancel();
    expect(component.visibility).toBeFalsy();
  });

 /* it('', function ()){

  }*/

});









