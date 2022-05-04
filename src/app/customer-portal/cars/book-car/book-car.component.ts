import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Car} from "../../../model/car";
import {InputSearch} from "../InputSearch";
import {MyErrorStateMatcher} from "../../../services/MyErrorStateMatcher";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {LocationService} from "../../../api/location.service";
import {Location} from "../../../model/location";
import {OpeningHours} from "../../../model/openingHours";
import {Order} from "../../../model/order";
import {OrderService} from "../../../api/order.service";
import {OrderRequest} from "../../../model/orderRequest";
import {Currency} from "../../../model/currency";
import {CarService} from "../../../api/car.service";
import {formatDate, formatNumber} from "@angular/common";
import {Observable} from "rxjs";
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
  public paymentList = Object.keys(Order.MethodOfPaymentEnum);
  public cardNr = "";
  public cvv = "";
  public validMonth = ""; //todo löschen?
  public validYear = "";//todo löschen?
  public email = "";
  public firstname = "";
  public lastname = "";

  public selectedPayment = "";
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
      let valid = formatDate(dateInput, 'yyyy-MM-dd', 'en'); //todo: mit dem gehts machmal nicht
      console.log(valid);

      if (this.inputSearch.car_id != undefined && this.locations != undefined && this.selectedLocation != undefined) {
        const orderRequest: OrderRequest = {
          car_id: this.inputSearch.car_id,
          location_of_rental_id: this.locations.find(sym => sym.location_name == this.selectedLocation)?.location_id!,
          location_of_return_id: this.locations.find(sym => sym.location_name == this.selectedLocation)?.location_id!,
          date_of_booking: formatDate(Date.now(), 'yyyy-MM-dd', 'en'),
          date_of_rental: this.inputSearch.selectedDateFrom,
          date_of_return: this.inputSearch.selectedDateTo,
          //method_of_payment: this.paymentList.find(pay => pay == this.selectedPayment),//TODO oida.........Dani findet sicher eine Lösung
          method_of_payment: Order.MethodOfPaymentEnum.AmericanExpress,
          card_number: this.cardNr,
          card_security_code: this.cvv,
          valid_until: valid,
          first_name: this.firstname,
          last_name: this.lastname,
          email: this.email,
          order_status: OrderRequest.OrderStatusEnum.Created
        };

        this.orderService.createOrder(orderRequest).subscribe(order => {
          if (order.orderId != undefined) {
            this.router.navigate(["../confirmation", order.orderId], {
              relativeTo: this.activatedRoute
            });
          }
        });
      }
    }
  }
}


