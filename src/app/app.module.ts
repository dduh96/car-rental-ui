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
import {MDBRootModule} from "angular-bootstrap-md";
import {ApiModule} from "./api/api.module";
import {AgmCoreModule} from "@agm/core";
import {environment} from "../environments/environment";
import { CustomerServiceComponent } from './customer-portal/customer-service/customer-service.component';

const routes = [
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'services',
    component: CustomerServiceComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    LocationsComponent,
    CarsItemComponent,
    CustomerServiceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: environment.GAPI_KEY,
      libraries: ['places']
    }),
    ApiModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MDBRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
