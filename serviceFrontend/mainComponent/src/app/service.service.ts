import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "./employee.service";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(serviceId : Number) {
    return this.httpClient.get<Service>("http://localhost:8080/serviceBackend/services/"+serviceId)
  }
}

export interface Service {
  id: Number;
  serviceName: string;
  date: Date;
  longitude: Number;
  latitude: Number;
}
