import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private service:ApiService,private ActivatedRoute:ActivatedRoute, private Router:Router) { }
  products:any;
  ngOnInit(): void {
    this.products = [];
    this.ActivatedRoute.params.subscribe(data=>{
      console.log(data)
      this.products = this.service.getProducts(data['type'])
      console.log(this.products);
    })
    
  }

  addToCartFnc(data:any,type:any){
    let item = data;
    item['type'] = type;
    this.service.addToCart(item);
    this.Router.navigate(["/cart"])
  }

}
