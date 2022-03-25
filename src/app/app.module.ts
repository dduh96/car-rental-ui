import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './customer-portal/cars/cars.component';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { LocationsComponent } from './customer-portal/locations/locations.component';
import { CarsItemComponent } from './customer-portal/cars/cars-item/cars-item.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatGridListModule} from "@angular/material/grid-list";

const routes = [
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    LocationsComponent,
    CarsItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
