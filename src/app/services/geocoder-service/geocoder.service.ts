import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GeocoderService {
  constructor(private http: HttpClient) {}

  geocodeLatLng(location: google.maps.LatLng): Promise<any> {
    let geocoder = new google.maps.Geocoder();

    return new Promise((resolve, reject) => {
      geocoder.geocode({ 'location': location }, (results, status) => {
        const response = results
        resolve(response);
      });
    });
  }

  getLocation(term: string): Observable<any> {
    const url = `https://maps.google.com/maps/api/geocode/json?address=${term}&sensor=false&key=${environment.GAPI_KEY}`;
    return this.http.get<any>(url);
  }
}
