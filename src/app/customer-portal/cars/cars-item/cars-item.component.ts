import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Car} from "../../../model/car";

@Component({
  selector: 'app-cars-item',
  templateUrl: './cars-item.component.html',
  styleUrls: ['./cars-item.component.css']
})
export class CarsItemComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  public car: Car = {
    id: "123456",
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

  ngOnInit(): void {
  }

  //userInput: UserInput statt einzelne Vars
  public bookCar(id: string, selectedLocation: string, selectedTimeFrom: string, selectedDateFrom: string, selectedTimeTo: string, selectedDateTo: string) {
    this.router.navigate(["../booking", id, selectedLocation,selectedTimeFrom,selectedDateFrom,selectedTimeTo,selectedDateTo], {
      relativeTo: this.activatedRoute
    });
  }

}
