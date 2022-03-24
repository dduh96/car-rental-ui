import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { LocationsComponent } from './locations/locations.component';

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
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
