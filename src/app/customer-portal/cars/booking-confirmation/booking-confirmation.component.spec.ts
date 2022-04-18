import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingConfirmationComponent } from './booking-confirmation.component';
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('BookingConfirmationComponent', () => {
  let component: BookingConfirmationComponent;
  let fixture: ComponentFixture<BookingConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingConfirmationComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
