import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit, AfterViewInit {
  @ViewChild('map', {static: false}) public mapElement: ElementRef |undefined ;
  public gMap: google.maps.Map | undefined;

  public address = "Favoritenstraße 226, 1100 Wien";

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    const mapProperties = {
      center: new google.maps.LatLng(48.1580571048588, 16.382420055526538),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // @ts-ignore
    this.gMap = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }
}
