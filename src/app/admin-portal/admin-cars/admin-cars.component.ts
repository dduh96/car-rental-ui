import { Component, OnInit } from '@angular/core';
import {Car} from "../../model/car";
import {CarService} from "../../api/car.service";

@Component({
  selector: 'app-admin-cars',
  templateUrl: './admin-cars.component.html',
  styleUrls: ['./admin-cars.component.css']
})
export class AdminCarsComponent implements OnInit {
  public carList: Car[] = [];
  displayedColumns: string[] = ['car_id',
    'car_status',
    'chassis_number',
    'manufacturer',
    'construction_year',
    'color',
    'model',
    'model_series',
    'engine_fuel',
    'engine_fuel_consumption',
    'engine_performance',
    'engine_type',
    'gear_type',
    'adblue',
    'seats',
    'price',
  ];
  public ELEMENT_DATA = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];


  constructor(private carService: CarService) {
    carService.getCars(Car.CurrencySymbolEnum.Usd).subscribe( res =>
      this.carList = res);
  }

  ngOnInit(): void {
  }

}
