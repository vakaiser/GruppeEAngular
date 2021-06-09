import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Service} from "./service.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  public getEmployees() {
    return this.httpClient.get<Employee[]>("http://localhost:8080/serviceBackend/employees/")
  }

  public getEmployeeInfo(employeeId : number) {
    return this.httpClient.get<Employee>("http://localhost:8080/serviceBackend/employees/"+employeeId)
  }

  public putEmployeeInfo(employeeId : number, employee : Employee) {
    return this.httpClient.put<Employee>("http://localhost:8080/serviceBackend/employees/"+employeeId, employee);
  }

  public postEmployeeInfo(employee : EmployeeDto) {
    return this.httpClient.post<Employee>("http://localhost:8080/serviceBackend/employees/", employee);
  }
}

export interface Employee {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
  services: Service[];
}

export interface EmployeeDto {
  name: string;
  longitude: number;
  latitude: number;
}

