import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "./employee.service";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  public getServiceInfo(serviceId : number) {
    return this.httpClient.get<Service>("http://localhost:8080/serviceBackend/services/"+serviceId)
  }

  public putServiceInfo(serviceId : number, service : Service) {
    return this.httpClient.put<Employee>("http://localhost:8080/serviceBackend/services/"+serviceId, service);
  }

  public postServiceInfo(service : ServiceDto) {
    return this.httpClient.post<Employee>("http://localhost:8080/serviceBackend/services/", service);
  }
}

export interface Service {
  id: number;
  serviceName: string;
  date: Date;
  longitude: number;
  latitude: number;
  employeeId: number;
}

export interface ServiceDto {
  serviceName: string;
  date: Date;
  longitude: number;
  latitude: number;
  employeeId: number;
}
