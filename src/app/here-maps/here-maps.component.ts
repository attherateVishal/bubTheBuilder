import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
declare var H: any;
@Component({
  selector: 'app-here-maps',
  templateUrl: './here-maps.component.html',
  styleUrls: ['./here-maps.component.css']
})
export class HereMapsComponent implements OnInit {
/**
  * 
  *appid= JH0RyQAfBTe1OPYhgChS
  *apikey = Mhr09OniLRdibRC_lEFdZnLR10nrlGEOJj0wUsknIgE 
  */

  title = 'HereMapDemo';  
    

    @ViewChild("map", { static: true }) public mapElement!: ElementRef;  
    public lat: any = '22.5726';  
    public lng: any = '88.3639';  
    
    public width: any = '1000px';  
    public height: any = '600px';  
    
    private platform: any;  
    private map: any;  
    
    private _appId: string = 'JH0RyQAfBTe1OPYhgChS';  
    private _appCode: string = 'Mhr09OniLRdibRC_lEFdZnLR10nrlGEOJj0wUsknIgE';  
    
    public query: string;  
    private search: any;  
    private ui: any;  

  constructor() { 
    this.query = "";  
  //   this.platform = new H.service.Platform({
  //     "apikey": "Mhr09OniLRdibRC_lEFdZnLR10nrlGEOJj0wUsknIgE"
  // });
  // this.platform = new H.service.Platform({  
  //   // "app_id": this._appId,  
  //   "apikey": "Mhr09OniLRdibRC_lEFdZnLR10nrlGEOJj0wUsknIgE"  
  //   // useHTTPS: true  
  // });
  }

  ngOnInit(): void {
    this.platform = new H.service.Platform({  
    //   "app_id": this._appId,  
      "apikey": this._appCode,  
    //   useHTTPS: true  
    });  
    this.search = new H.places.Search(this.platform.getPlacesService());  
  }

  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    let map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.vector.normal.map,
        {
            zoom: 10,
            center: { lat: 37.7397, lng: -121.4252 }
        }
    );
}
// public ngAfterViewInit() {  
//   let pixelRatio = window.devicePixelRatio || 1;  
//   let defaultLayers = this.platform.createDefaultLayers({  
//     tileSize: pixelRatio === 1 ? 256 : 512,  
//     ppi: pixelRatio === 1 ? undefined : 320  
//   });  

//   this.map = new H.Map(this.mapElement.nativeElement,  
//     defaultLayers.normal.map, { pixelRatio: pixelRatio });  

//   var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));  
//   var ui = H.ui.UI.createDefault(this.map, defaultLayers);  

//   this.map.setCenter({ lat: this.lat, lng: this.lng });  
//   this.map.setZoom(14);  

    
// }  

public places(query: string) {  
  console.log(this.map);
  this.map.removeObjects(this.map.getObjects());  
  this.search.request({ "q": query, "at": this.lat + "," + this.lng }, {}, (data:any) => {  
    for (let i = 0; i < data.results.items.length; i++) {  
      this.dropMarker({ "lat": data.results.items[i].position[0], "lng": data.results.items[i].position[1] }, data.results.items[i]);  
      if (i == 0)  
        this.map.setCenter({ lat: data.results.items[i].position[0], lng: data.results.items[i].position[1] })  
    }  
  }, (error:any) => {  
    console.error(error);  
  });  
}  

private dropMarker(coordinates: any, data: any) {  
  let marker = new H.map.Marker(coordinates);  
  marker.setData("<p>" + data.title + "<br>" + data.vicinity + "</p>");  
  marker.addEventListener('tap', (event:any) => {  
    let bubble = new H.ui.InfoBubble(event.target.getPosition(), {  
      content: event.target.getData()  
    });  
    this.ui.addBubble(bubble);  
  }, false);  
  this.map.addObject(marker);  
} 

}
