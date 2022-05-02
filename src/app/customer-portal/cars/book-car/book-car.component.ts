import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Car} from "../../../model/car";
import {InputSearch} from "../InputSearch";
import {MyErrorStateMatcher} from "../../../services/MyErrorStateMatcher";
import {FormControl, Validators} from "@angular/forms";
import {LocationService} from "../../../api/location.service";
import {Location} from "../../../model/location";
import {OpeningHours} from "../../../model/openingHours";
import {Order} from "../../../model/order";
import {OrderService} from "../../../api/order.service";
import {OrderRequest} from "../../../model/orderRequest";
import {Currency} from "../../../model/currency";
import {CarService} from "../../../api/car.service";
import {formatDate} from "@angular/common";
import {Observable} from "rxjs";

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.css']
})
export class BookCarComponent implements OnInit {
  public id: string | undefined;

  @Input('inputSearch') public inputSearch!: InputSearch;
  @Input('visibilityBookCar') visibility!: boolean;
  @Output('visibilityBookCarChange') visibilityChange = new EventEmitter<boolean>();

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  public locations: Location[] | undefined;

  public selectedLocation = "";
  public paymentList = Object.keys(Order.MethodOfPaymentEnum);
  public cardNr = "";
  public cvv = "";
  public validUntil = "";
  public email = "";
  public firstname = "";
  public lastname = "";

  public selectedPayment = "";

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private locationService: LocationService,
              private orderService: OrderService,
              private carService: CarService) {
    locationService.getLocations().subscribe(res => this.locations = res);

  }

  ngOnInit(): void {
  }

  public cancel() {
    this.visibility = false;
    this.visibilityChange.emit(this.visibility);

  }

  public bookCar() {
    //todo erst weiter, wenn alle required erfüllt

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
        valid_until: this.validUntil,
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
