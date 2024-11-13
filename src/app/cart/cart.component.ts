import { Component, OnInit,ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  @ViewChild('search')
  public searchElementRef ?: ElementRef;

  constructor(private service:ApiService,private router:Router,private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }
  cartData:any;
  title: string = 'AGM project';
  latitude: any = 24.131079; //24.131079,75.0956554
  longitude: any = 75.0956554;
  zoom:any = 12;
  address: any;
  distanceInKM: any = 0;
  priceWithFare:any = 0;
  deliveryTime:any;
  loadTimeInMinutes = 30;
  private geoCoder:any;
  p1 = {lat:24.131079,lng:75.0956554}
  p2 = {lat:23.334169,lng:75.037636}
  
 
  
  ngOnInit(): void {
    // this.setCurrentLocation();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
     // this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef?.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          console.log("--set new location---", this.latitude, this.longitude);
          this.distanceInKM = (this.getDistance(this.p1, {lat : this.latitude, lng : this.longitude}))/1000 ;
          this.priceWithFare = this.distanceInKM * 20 + 1200;
          this.deliveryTime = `${Math.ceil((this.distanceInKM * 20 + this.loadTimeInMinutes)/60)} hrs`;  
          this.zoom = 12;
        });
      });
    });


    this.cartData = this.service.getCartData()
    console.log(this.cartData)
    if(!this.cartData){
      this.router.navigate(['/home']);
    }
  }
  // private setCurrentLocation() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 15;
  //     });
  //   }
  // }

  // Get Current Location Coordinates
 
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log("this.longitude--",this.latitude,this.longitude);
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }


  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude:any, longitude:any) {
    console.log("longitude--",latitude,longitude);

    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results:any, status:any) => {
      console.log(results);
      console.log(status);
    
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
          console.log("this.address---",this.address);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }
  
 rad (x:any) {
    return x * Math.PI / 180;
  };
  
getDistance (p1: any, p2: any) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = this.rad(p2.lat - p1.lat);
  var dLong = this.rad(p2.lng - p1.lng);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(this.rad(p1.lat)) * Math.cos(this.rad(p2.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d; // returns the distance in meter
};
  

}
