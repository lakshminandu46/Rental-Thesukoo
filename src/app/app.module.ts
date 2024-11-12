import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { CarsComponent } from './components/cars/cars.component';
import { BikeComponent } from './components/bike/bike.component';
import { ViewvehiclesComponent } from './components/viewvehicles/viewvehicles.component';
import { VieworderComponent } from './components/vieworder/vieworder.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BookingComponent } from './components/booking/booking.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { ManagevehiclesComponent } from './components/managevehicles/managevehicles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddvehiclesComponent } from './components/addvehicles/addvehicles.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdashboardComponent,
    CarsComponent,
    BikeComponent,
    ViewvehiclesComponent,
    VieworderComponent,
    WishlistComponent,
    BookingComponent,
    AdmindashboardComponent,
    ManagevehiclesComponent,
    AddvehiclesComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
