import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocationIQService {

  constructor(private http: HttpClient) { }

  getAddress(pos:Lonlat, callback: (x:Address) => void) : void {
    this.http.get<Address>("http://localhost:8081/Location/getAddress?lon="+ pos.lon+"&lat="+pos.lat).subscribe(callback);
  }

  getGps(addr:Address, callback: (x:Lonlat) => void) : void {
    this.http.get<Lonlat>("http://localhost:8081/Location/getGPS?address="+ addr.address).subscribe(callback);
  }
}

export interface Address {
  address: string;
}

export interface Lonlat {
  lon: number;
  lat: number;
}
