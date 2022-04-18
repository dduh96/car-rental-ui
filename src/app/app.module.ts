import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CarsComponent} from './customer-portal/cars/cars.component';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {LocationsComponent} from './customer-portal/locations/locations.component';
import {CarsItemComponent} from './customer-portal/cars/cars-item/cars-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MDBRootModule} from "angular-bootstrap-md";
import {AgmCoreModule} from "@agm/core";
import {environment} from "../environments/environment";
import {CustomerServiceComponent} from './customer-portal/customer-service/customer-service.component';
import {MatNativeDateModule} from "@angular/material/core";
import {BookCarComponent} from './customer-portal/cars/book-car/book-car.component';
import {MatDialogModule} from "@angular/material/dialog";
import { OrderLoginComponent } from './customer-portal/order-login/order-login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { BookingConfirmationComponent } from './customer-portal/cars/booking-confirmation/booking-confirmation.component';
import {MatRadioModule} from "@angular/material/radio";
import { AdminLoginComponent } from './admin-portal/admin-login/admin-login.component';


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
    path: 'booking/:id/:inputSearch',
    component: BookCarComponent
  },
  {
    path: 'confirmation/:orderId',
    component: BookingConfirmationComponent
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
    BookCarComponent,
    CustomerServiceComponent,
    OrderLoginComponent,
    BookingConfirmationComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GAPI_KEY,
      libraries: ['places']
    }),
    MDBRootModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
