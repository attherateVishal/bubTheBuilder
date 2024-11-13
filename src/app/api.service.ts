import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  aggregate : any = {"type":"aggregate",
                        "details":[{
                        "name":"10-mm",
                        "filePath":"../../assets/images/10mm-Aggregate.jpg",
                        },{ 
                          "name":"12-mm",
                          "filePath":"../../assets/images/12-mm-crusher-aggregate-stone-500x500.jpg",
                        },{ 
                          "name":"20-mm",
                          "filePath":"../../assets/images/20mmaggregate.jpg",
                        },{
                          "name":"40-mm",
                          "filePath":"../../assets/images/40-mm-construction-aggregate-500x500.jpg",
                        }]}
  sand : any = {"type":"sand",
                "details":[{
                        "name":"aggregate-sand",
                        "filePath":"../../assets/images/aggregate-sand.jpeg",
                        },{ 
                          "name":"river-sand",
                          "filePath":"../../assets/images/river-sand.jpg",
                        },{ 
                          "name":"river-sand-yellow-type-1",
                          "filePath":"../../assets/images/river-sand-500x500-e1573411329410.jpeg",
                        },{ 
                          "name":"river-sand-yellow-type-2",
                          "filePath":"../../assets/images/SAND-2.jpg",
                        },{ 
                          "name":"river-sand-yellow-type-3",
                          "filePath":"../../assets/images/sandType1.jpeg",
                         }]
                        }

 brick : any = {"type":"brick",
                "details":[{
                    "name":"brick",
                    "filePath":"../../assets/images/chamber-brick-500x500.jpg"
                }]}
cartDetails:any;


  constructor() { }
  getProducts(data:any){
    switch(data){
      case this.aggregate.type:
          return this.aggregate;
      case this.sand.type:
          return this.sand;
      case this.brick.type:
          return this.brick;
      default :
        return this.aggregate;
    }
  }
  addToCart(data:any){
    this.cartDetails = data;
  }
  getCartData(){
    return this.cartDetails;
  }
}
