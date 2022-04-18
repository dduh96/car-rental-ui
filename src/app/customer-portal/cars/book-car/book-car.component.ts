import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Car} from "../../../model/car";
import {InputSearch} from "../InputSearch";
import {MyErrorStateMatcher} from "../../../services/MyErrorStateMatcher";
import {FormControl, Validators} from "@angular/forms";
import {LocationService} from "../../../api/location.service";
import {Location} from "../../../model/location";
import {OpeningHours} from "../../../model/openingHours";

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

  public openingHoursTest: OpeningHours[] = [
    {
      opening_hours_id: 1,
      monday: "07:00-17:00",
      tuesday: "07:00-17:00",
      wednesday: "07:00-17:00",
      thursday: "07:00-17:00",
      friday: "07:00-17:00",
      saturday: "07:00-17:00",
      sunday: "07:00-17:00",
    }, {
      opening_hours_id: 2,
      monday: "04:00-23:00",
      tuesday: "04:00-23:00",
      wednesday: "04:00-23:00",
      thursday: "04:00-23:00",
      friday: "04:00-23:00",
      saturday: "04:00-23:00",
      sunday: "07:00-17:00",
    }];


  public locations: Location[] | undefined;
  public locationsTest: Location[] = [
    {
      location_id: 1,
      opening_hours: this.openingHoursTest[0],
      location_name:"Stephansplatz",
      street_name:"bla",
      street_number:"12",
      city_name: "Vienna",
      postal_code:1010,
      email:"email",
      phone:"phonenr",
      latitude:"10298314",
      longitude:"1245678"
    },
    {
      location_id: 2,
      opening_hours: this.openingHoursTest[1],
      location_name:"Flughafen",
      street_name:"bla",
      street_number:"12",
      city_name: "Lower Austria",
      postal_code:1010,
      email:"email",
      phone:"phonenr",
      latitude:"10298314",
      longitude:"1245678"
    }
  ]


  public paymentList = [
    {viewValue: 'Diners Club'},
    {viewValue: 'Visa'},
    {viewValue: 'Mastercard'},
    {viewValue: 'American Express'}
  ]

  public selectedPayment = "";

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private locationService: LocationService) {
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

    let orderId = "123order123";
    this.router.navigate(["../confirmation", orderId], {
      relativeTo: this.activatedRoute
    });
  }

}
