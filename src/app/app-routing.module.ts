import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HereMapsComponent } from './here-maps/here-maps.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
                        { path: 'home', component: HomeComponent },
                        { path: 'about', component: AboutComponent },
                        { path: 'contact', component: ContactComponent },
                        { path: 'products', component: ProductsComponent },
                        { path: 'product-details/:type', component: ProductDetailsComponent},
                        { path: 'cart', component :CartComponent },
                        { path: 'order', component :OrderComponent },
                        { path: 'heremaps', component : HereMapsComponent},
                        { path: '',   redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
