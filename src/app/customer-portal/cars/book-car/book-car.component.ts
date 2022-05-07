import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {InputSearch} from "../InputSearch";
import {MyErrorStateMatcher} from "../../../services/MyErrorStateMatcher";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {LocationService} from "../../../api/location.service";
import {Location} from "../../../model/location";
import {Order} from "../../../model/order";
import {OrderService} from "../../../api/order.service";
import {OrderRequest} from "../../../model/orderRequest";
import {CarService} from "../../../api/car.service";
import {formatDate, formatNumber} from "@angular/common";
import {WhiteSpaceValidator} from "../../../services/WhiteSpaceValidator";

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.css']
})
export class BookCarComponent implements OnInit {
  public id: string | undefined;
  public carForm: FormGroup;

  @Input('inputSearch') public inputSearch!: InputSearch;
  @Input('visibilityBookCar') visibility!: boolean;
  @Output('visibilityBookCarChange') visibilityChange = new EventEmitter<boolean>();


  matcher = new MyErrorStateMatcher();

  public locations: Location[] | undefined;
  public yearList = ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'];
  public monthList = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];


  public selectedLocation = "";
  public paymentList = Object.values(Order.MethodOfPaymentEnum);
  public cardNr = "";
  public cvv = "";
  public email = "";
  public firstname = "";
  public lastname = "";

  public selectedPayment = Order.MethodOfPaymentEnum.AmericanExpress;
  public selectedYear = "";
  public selectedMonth = "";

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private locationService: LocationService,
              private orderService: OrderService,
              private carService: CarService) {
    locationService.getLocations().subscribe(res => this.locations = res);


    this.carForm = new FormGroup({
      firstnameFormControl: new FormControl('', [Validators.required, Validators.minLength(2), WhiteSpaceValidator.noWhiteSpace]),
      lastnameFormControl: new FormControl('', [Validators.required, Validators.minLength(2), WhiteSpaceValidator.noWhiteSpace]),
      paymentmethFormControl: new FormControl('', [Validators.required, WhiteSpaceValidator.noWhiteSpace]),
      cardnrFormControl: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(16), WhiteSpaceValidator.noWhiteSpace]),
      cvvFormControl: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3), WhiteSpaceValidator.noWhiteSpace]),
      validYearFormControl: new FormControl('', [Validators.required, WhiteSpaceValidator.noWhiteSpace]),
      validMonthFormControl: new FormControl('', [Validators.required, WhiteSpaceValidator.noWhiteSpace]),
      emailFormControl: new FormControl('', [Validators.required, Validators.email, WhiteSpaceValidator.noWhiteSpace])
    });


  }

  ngOnInit(): void {
  }

  public cancel() {
    this.visibility = false;
    this.visibilityChange.emit(this.visibility);
  }

  public bookCar() {
    if (true) {
      //todo: check if number is int
      let dateInput = new Date(parseInt(this.selectedYear), parseInt(this.selectedMonth));
      let valid = formatDate(dateInput, 'yyyy-MM-dd', 'en');

      if (this.inputSearch.car_id != undefined && this.locations != undefined && this.selectedLocation != undefined) {
        const orderRequest: OrderRequest = {
          car_id: this.inputSearch.car_id,
          location_of_rental_id: this.locations.find(sym => sym.location_name == this.selectedLocation)?.location_id!,
          location_of_return_id: this.locations.find(sym => sym.location_name == this.selectedLocation)?.location_id!,
          date_of_booking: formatDate(Date.now(), 'yyyy-MM-dd', 'en'),
          date_of_rental: this.inputSearch.selectedDateFrom,
          date_of_return: this.inputSearch.selectedDateTo,
          method_of_payment: this.selectedPayment,
          card_number: this.cardNr,
          card_security_code: this.cvv,
          valid_until: valid,
          first_name: this.firstname,
          last_name: this.lastname,
          email: this.email,
          order_status: OrderRequest.OrderStatusEnum.Created
        };

        this.orderService.createOrderUpdateCar(orderRequest).subscribe(
          res => {
            if (res != undefined) {
              if (res.saga_status == Order.SagaStatusEnum.CarRejected
                || res.saga_status == Order.SagaStatusEnum.LocationRejected
              ) {
                alert("Could not create order. Please try again or verify the car is still available.")
              } else {
                this.router.navigate(["../confirmation", res.orderId], {
                  relativeTo: this.activatedRoute
                })
              }
            }
          },
          err => alert('Error: could not create order, please try again with correct inputs!'),
          () => console.log('HTTP request completed.')
        );
      }
    }
  }
}


