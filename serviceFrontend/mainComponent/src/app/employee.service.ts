import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Service} from "./service.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  public getEmployeeInfo(employeeId : Number) {
    return this.httpClient.get<Employee>("http://localhost:8080/serviceBackend/employees/"+employeeId)
  }

  public putEmployeeInfo(employeeId : Number, employee : Employee) {
    return this.httpClient.put<Employee>("http://localhost:8080/serviceBackend/employees/"+employeeId, employee);
  }
}

export interface Employee {
  id: Number;
  name: String;
  longitude: Number;
  latitude: Number;
  services: Service[];
}

export interface Address {
  address: String;
}

export interface Lonlat {
  lon: Number;
  lat: Number;
}
