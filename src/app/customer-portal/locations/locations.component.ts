import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {MapsAPILoader} from "@agm/core";
import {LocationService} from "../../api/location.service";
import {Location} from "../../model/location"


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  public address = "Favoritenstraße 226, 1100 Wien";
  public locationList: Location[] = [];
  public filteredLocationList: Location[] = [];
  public postalCode = "";

  public defaultLocation = new google.maps.LatLng(48.20896222751492, 16.37060765814223); // Vienna City Center

  constructor(private mapsApiLoader: MapsAPILoader, private locationService: LocationService, private ngZone: NgZone) {
    locationService.getLocations().subscribe(res => {
      this.locationList = res;
      this.filteredLocationList = res;
    });
  }

  ngOnInit(): void {

  }


  public filterByPostalCode(postalCodeString: string) {
    const postalCode: number = +postalCodeString;
    if (postalCodeString != "") {
      this.filteredLocationList = this.locationList.filter(location =>
        location.postal_code != undefined && location.postal_code === postalCode);
    } else {
      this.filteredLocationList = this.locationList
    }

  }

  public parseToNumber(input: string): number {
    return +input;
  }


}
