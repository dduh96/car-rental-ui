import {InjectionToken} from "@angular/core";

export const environment = {
  production: true,
  GAPI_KEY: "AIzaSyCI6Lh4SP_YcEmC444sEbpHI3Gnsdi4NIg",
  LOCATION_PATH: '/location-service/api/v1',
  ORDER_PATH: '/order-service/api/v1',
  CAR_PATH: '/car-service/api/v1',
  CURRENCY_PATH: '/currency-service/api/v1',
  AUTH_PATH: '/authentication-service/api/v1',
  OPENING_HOURS_PATH: '/opening-hours-service/api/v1',
  COLLECTION_FORMATS: {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
  }
};
