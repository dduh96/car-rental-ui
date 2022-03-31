import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Car} from "../../../model/car";
import {inputSearch} from "../inputSearch";

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.css']
})
export class BookCarComponent implements OnInit {
  public id: string | undefined;
  /*public inputSearch: inputSearch = {
    selectedLocation: "empty",
    selectedTimeFrom:  "empty",
    selectedDateFrom: "1900-01-01",
    selectedTimeTo: "empty",
    selectedDateTo: "1900-01-01",
  }*/

  @Input('inputSearch') inputSearch!: inputSearch ;

  /*public selectedLocation: string | undefined;
  public selectedTimeFrom : string | undefined;
  public selectedDateFrom: string | undefined;
  public selectedTimeTo: string | undefined;
  public selectedDateTo: string | undefined;*/

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


  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    //this.id = this.activatedRoute.snapshot.params["id"];
    //this.inputSearch = this.activatedRoute.snapshot.params["inputSearch"];
    //this.selectedLocation="tststst"
    /*this.selectedLocation = this.activatedRoute.snapshot.params["selectedLocation"];
    this.selectedTimeFrom= this.activatedRoute.snapshot.params["selectedTimeFrom"];
    this.selectedDateFrom= this.activatedRoute.snapshot.params["selectedDateFrom"];
    this.selectedTimeTo= this.activatedRoute.snapshot.params["selectedTimeTo"];
    this.selectedDateTo= this.activatedRoute.snapshot.params["selectedDateTo"];*/
  }

  public bookCar(){

  }

}
