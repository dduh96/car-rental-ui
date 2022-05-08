import {InjectionToken} from "@angular/core";

export const environment = {
  production: true,
  GAPI_KEY: "AIzaSyCI6Lh4SP_YcEmC444sEbpHI3Gnsdi4NIg",
  BASE_PATH: "/api/v1",
  COLLECTION_FORMATS: {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
  }
};
