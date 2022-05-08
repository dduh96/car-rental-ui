// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  GAPI_KEY: "AIzaSyCI6Lh4SP_YcEmC444sEbpHI3Gnsdi4NIg",
  BASE_PATH: 'http://localhost:8080/api/v1',
  LOCATION_PATH: 'http://localhost:8079/location-service/api/v1',
  ORDER_PATH: 'http://localhost:8079/order-service/api/v1',
  CAR_PATH: 'http://localhost:8079/car-service/api/v1',
  CURRENCY_PATH: 'http://localhost:8079/currency-service/api/v1',
  AUTH_PATH: 'http://localhost:8079/authentication-service/api/v1',
  OPENING_HOURS_PATH: 'http://localhost:8079/opening-hours-service/api/v1',
  COLLECTION_FORMATS: {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
