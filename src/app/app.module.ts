import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from  '@angular/material/Toolbar';
import {  MatIconModule } from  '@angular/material/Icon';
import {  MatSidenavModule } from  '@angular/material/Sidenav';
import {  MatListModule } from  '@angular/material/list';
import {MatButtonModule } from  '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HereMapsComponent } from './here-maps/here-maps.component';
import { HereMapComponent } from './here-map/here-map.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { MatSnackBarModule } from '@angular/material/snack-bar';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    OrderComponent,
    ProductsComponent,
    ProductDetailsComponent,
    HereMapsComponent,
    HereMapComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatSnackBarModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig, 'budthebuilder-8b6e9'),
    // AngularFireDatabaseModule,
    // AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: environment.gmap,
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
