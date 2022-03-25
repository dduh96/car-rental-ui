import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-item',
  templateUrl: './cars-item.component.html',
  styleUrls: ['./cars-item.component.css']
})
export class CarsItemComponent implements OnInit {
  public test = "some string";

  constructor() { }

  ngOnInit(): void {
  }

  public bookCar(){
    this.test = this.test + " add";
  }

}
