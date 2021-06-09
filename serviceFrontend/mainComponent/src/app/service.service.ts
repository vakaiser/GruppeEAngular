import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "./employee.service";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  public getServiceInfo(serviceId : Number) {
    return this.httpClient.get<Service>("http://localhost:8080/serviceBackend/services/"+serviceId)
  }

  public puServiceInfo(serviceId : Number, service : Service) {
    return this.httpClient.put<Employee>("http://localhost:8080/serviceBackend/services/"+serviceId, service);
  }
}

export interface Service {
  id: Number;
  serviceName: String;
  date: Date;
  address: String;
  longitude: Number;
  latitude: Number;
  employeeId: Number;
}
