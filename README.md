# car-rental-ui

The web application aims to simulate a car rental. The user can view a list of available cars. The rental and return dates as well as a currency can be selected. Afterwards the car can be booked and is no longer in the list.
The booking can be viewed at any time by logging in with booking number and last name.
The booking can be viewed and edited by an admin in the admin portal. Also, an admin can manage the cars and create new ones.
Via Google Places API it is possible to see the locations of the car rental.

The purpose of the application is to present the previously taught contents of the course Service Engineering. The basic requirements are:
- The creation of a car rental application.
  - REST style, user management, list, book and return cars.
  - Support different currencies.
  - Store prices in USD.
  - Authentication.
- To create and use a currency calculator.
  - gRPC as technology
  - Cross-rate calculation
  - Authentication
- The integration of the Google Maps web service.

### Further documentation
[Auto generated documentation in the repository](https://github.com/dduh96/car-rental-ui/tree/main/documentation/index.html)

## Quickstart

### Frontend

Use the code below to clone the repository and install all necessary dependencies.
```
git clone git@github.com:dduh96/car-rental-ui.git
cd car-rental-ui
npm install 
```
Open and start the project with the IDE of your choice.
The application will start by default on [http://localhost:4200](http://localhost:4200)

### Backend

Use the code below to clone the repository and start the provided docker containers.
```
git clone git@github.com:davidschedler/car-rental-app.git
cd car-rental-app/.docker-compose-ui && docker-compose rm -f && docker-compose up -d 
```
The application will start by default and be reachable on [http://localhost:8080](http://localhost:8080)

Ready to use login data:

Admin - admin/admin123
Order - 14aa3925-312c-462e-acf8-279d18e9a9c8/Strasser

## Used technologies
- JavaScript/TypeScript
- Angular
- Angular Material
- Jasmine
- Karma
- RxJS
- Google geocoding API

## Application flow diagram

![application flow diagram](https://github.com/dduh96/car-rental-ui/blob/main/src/assets/applicationFlow.png?raw=true)

## Use cases
### admin
- [x] admin-login
- [x] view-all-cars
- [x] add-car
- [x] view-orders
- [x] view-order-detail
- [x] change-order-status

### user
- [x] view-order
- [x] book-car
