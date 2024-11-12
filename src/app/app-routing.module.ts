import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { CarsComponent } from './components/cars/cars.component';
import { BikeComponent } from './components/bike/bike.component';
import { VieworderComponent } from './components/vieworder/vieworder.component';
import { ViewvehiclesComponent } from './components/viewvehicles/viewvehicles.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BookingComponent } from './components/booking/booking.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { ManagevehiclesComponent } from './components/managevehicles/managevehicles.component';
import { AddvehiclesComponent } from './components/addvehicles/addvehicles.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'cars',component:CarsComponent},
      {path:'bikes',component:BikeComponent},
      {path:'view',component:VieworderComponent},
      {path:'order',component:ViewvehiclesComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'booking',component:BookingComponent}
      
    ]
  },
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'cars',component:CarsComponent},
      {path:'bikes',component:BikeComponent},
      {path:'orders',component:VieworderComponent},
      {path:'manage',component:ManagevehiclesComponent},
      {path:'add',component:AddvehiclesComponent}
    ]

  }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
