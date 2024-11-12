import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  Vehicles:Vehicle[]=[
      // Cars
      {
        vehicleId: 1,
        vehicleName: "Swift",
        vehicleCompany: "Maruti Suzuki",
        vehiclePrice: 600000,
        availableTime: "9:00 AM - 6:00 PM",
        fuelType: "Petrol",
        seatingCapacity: 5,
        vehicleType: "Car",
        vehicleImage: "images/swift.jpg",
        rating: 4.5
      },
      {
        vehicleId: 2,
        vehicleName: "City",
        vehicleCompany: "Honda",
        vehiclePrice: 1000000,
        availableTime: "8:00 AM - 5:00 PM",
        fuelType: "Diesel",
        seatingCapacity: 5,
        vehicleType: "Car",
        vehicleImage: "images/city.jpg",
        rating: 4.7
      },
      {
        vehicleId: 3,
        vehicleName: "Creta",
        vehicleCompany: "Hyundai",
        vehiclePrice: 1200000,
        availableTime: "7:00 AM - 7:00 PM",
        fuelType: "Petrol",
        seatingCapacity: 7,
        vehicleType: "Car",
        vehicleImage: "images/creta.jpg",
        rating: 4.6
      },
      {
        vehicleId: 4,
        vehicleName: "Fortuner",
    vehicleCompany: "Toyota",
    vehiclePrice: 3000000,
    availableTime: "9:00 AM - 8:00 PM",
    fuelType: "Diesel",
    seatingCapacity: 7,
    vehicleType: "Car",
    vehicleImage: "images/fortuner.jpg",
    rating: 4.8
  },
  {
    vehicleId: 5,
    vehicleName: "Kwid",
    vehicleCompany: "Renault",
    vehiclePrice: 500000,
    availableTime: "8:00 AM - 6:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 5,
    vehicleType: "Car",
    vehicleImage: "images/kwid.jpg",
    rating: 4.3
  },
  {
    vehicleId: 6,
    vehicleName: "Thar",
    vehicleCompany: "Mahindra",
    vehiclePrice: 1500000,
    availableTime: "10:00 AM - 5:00 PM",
    fuelType: "Diesel",
    seatingCapacity: 5,
    vehicleType: "Car",
    vehicleImage: "images/thar.jpg",
    rating: 4.9
  },

  // Bikes
  {
    vehicleId: 7,
    vehicleName: "Splendor Plus",
    vehicleCompany: "Hero",
    vehiclePrice: 70000,
    availableTime: "7:00 AM - 9:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "images/splendor.jpg",
    rating: 4.2
  },
  {
    vehicleId: 8,
    vehicleName: "Pulsar 150",
    vehicleCompany: "Bajaj",
    vehiclePrice: 90000,
    availableTime: "6:00 AM - 10:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "images/pulsar.jpg",
    rating: 4.5
  },
  {
    vehicleId: 9,
    vehicleName: "FZ S V3",
    vehicleCompany: "Yamaha",
    vehiclePrice: 110000,
    availableTime: "8:00 AM - 8:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "images/fz.jpg",
    rating: 4.6
  },
  {
    vehicleId: 10,
    vehicleName: "Duke 250",
    vehicleCompany: "KTM",
    vehiclePrice: 200000,
    availableTime: "9:00 AM - 6:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "images/duke.jpg",
    rating: 4.7
  },
  {
    vehicleId: 11,
    vehicleName: "Bullet 350",
    vehicleCompany: "Royal Enfield",
    vehiclePrice: 160000,
    availableTime: "10:00 AM - 7:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "images/bullet.jpg",
    rating: 4.8
  },
  {
    vehicleId: 12,
    vehicleName: "Apache RTR 160",
    vehicleCompany: "TVS",
    vehiclePrice: 95000,
    availableTime: "8:00 AM - 6:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "images/apache.jpg",
    rating: 4.4
  }


    
  ];
  getAllVehicles(){
    return of(this.Vehicles);

  }
  addnewVehicle(newvehicle:Vehicle){
    this.Vehicles.push(newvehicle);
    return "product added successfully";
  }
  updateVehicle(vid:any,veh:any){
    let index=this.Vehicles.findIndex((e)=>e.vehicleId==vid);
        this.Vehicles.splice(index,1,veh);
        return "updated";
    }
  deleteVehicle(vid:any){
    let index=this.Vehicles.findIndex((e)=>e.vehicleId==vid);
        this.Vehicles.splice(index,1);
        return "deleted";

  }
  getVehicleId(vid:any){
    return(this.Vehicles.find(p=>p.vehicleId==vid))
  }
  getBikes(){
    return of(this.Vehicles.filter((e)=>e.vehicleType=="Byke"));
  }
  getCars(){
    return of(this.Vehicles.filter(e=>e.vehicleType=="car"));
  }


  

  constructor() { }
}

