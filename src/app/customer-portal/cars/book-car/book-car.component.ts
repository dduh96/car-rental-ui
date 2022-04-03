import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Car} from "../../../model/car";
import {inputSearch} from "../inputSearch";
import {MyErrorStateMatcher} from "../../../services/MyErrorStateMatcher";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.css']
})
export class BookCarComponent implements OnInit {
  public id: string | undefined;

  @Input('inputSearch') inputSearch!: inputSearch ;
  @Input('visibilityBookCar') visibility!: boolean;
  @Output('visibilityBookCarChange') visibilityChange = new EventEmitter<boolean>();

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  public car: Car = {
    id: "1234",
    chassis_number: "28djq012831",
    manufacturer: "VW",
    construction_year: "2012",
    color: "black",
    model: "Golf",
    model_series: "6",
    engine_fuel: "Diesel",
    engine_fuel_consumption: 12,
    engine_performance: 6,
    engine_type: "oida keine ahnung",
    gear_type: "shift",
    adblue: true,
    seats: 5,
    price_in_doller_cent: 169.06,
    location_id: "Vienna"
  };


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  public cancel(){
    this.visibility=false;
    this.visibilityChange.emit(this.visibility);
  }

  public bookCar(){
    //todo erst weiter, wenn alle required erfüllt

    this.router.navigate(["../confirmation"], {
      relativeTo: this.activatedRoute
    });
  }

}
