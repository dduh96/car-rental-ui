import {AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {MapsAPILoader} from "@agm/core";
import {CarService} from "../../api/car.service";
import {Car} from "../../model/car";
import {LocationService} from "../../api/location.service";
import {Location} from "../../model/location";


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit, AfterViewInit {
  @ViewChild('map', {static: false}) public mapElement: ElementRef |undefined ;
  public gMap: google.maps.Map | undefined;

  public address = "Favoritenstraße 226, 1100 Wien";
  private geoCoder = new google.maps.Geocoder;
  private locationList: Array<Location> | undefined;

  constructor(private mapsApiLoader: MapsAPILoader, private locationService: LocationService, private ngZone: NgZone) {
    locationService.getLocations().subscribe( res => this.locationList = res);
  }

  ngOnInit(): void {
    this.mapsApiLoader.load().then(() => {
      this
    })
  }

  /**
   * Cars Service -> get all cars
   * Google Service -> get pins
   */

  ngAfterViewInit() {
    const mapProperties = {
      center: new google.maps.LatLng(48.1580571048588, 16.382420055526538),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // @ts-ignore
    this.gMap = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }

  public getAdress(latitude: number, longitude: number) {
    this.geoCoder.geocode({'location': {lat: latitude, lng: longitude}}, (results, status) => {
      if (status == "OK") {
        console.log("OK")
      } else {
        console.log(status)
      }
    });
  }
}
