import {InjectionToken} from "@angular/core";

export const environment = {
  production: true,
  GAPI_KEY: "AIzaSyCI6Lh4SP_YcEmC444sEbpHI3Gnsdi4NIg"
};

export const BASE_PATH = new InjectionToken<string>('basePath');
export const COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
}
