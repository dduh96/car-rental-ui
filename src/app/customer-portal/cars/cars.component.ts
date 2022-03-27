import {Component, OnInit} from '@angular/core';
import {CarService} from "../../api/car.service";
import {Car} from "../../model/car";


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  public nrItems = [1, 2, 3, 4];
  public locations = [
    {value: 'v', viewValue: 'Vienna'},
    {value: 's', viewValue: 'Salzburg'}];

  public selectedLocation = "";
  public cars: Car[] | undefined;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
  }

  /* public getCars(){
     this.carService.getAllCars().subscribe(resCars => {
       this.cars = resCars;
     })
   }*/

}
