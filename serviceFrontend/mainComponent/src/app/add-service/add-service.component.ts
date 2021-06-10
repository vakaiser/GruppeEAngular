import { Component, OnInit } from '@angular/core';
import {LocationIQService, Lonlat} from "../location-iq.service";
import {Service, ServiceService} from "../service.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {Employee, EmployeeService} from "../employee.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  public latitude : number = 0;
  public longitude : number = 0;
  employees : Employee[] = [];

  constructor(
    private locationIQService : LocationIQService,
    private serviceService: ServiceService,
    private employeeService: EmployeeService,
    private router : Router,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Add service");
    this.employeeService.getEmployees().subscribe(data => {
      console.log(data);
      this.employees = data;
    })
  }

  onSave(f: NgForm): void {
    var service = {serviceName: "", date: new Date(), longitude: 0, latitude: 0, employeeId: 0}

    if (f.value.serviceName !== "")
      service.serviceName = f.value.serviceName as string;
    if (f.value.date !== "")
      service.date = f.value.date as Date;
    if (f.value.lon !== "")
      service.longitude = f.value.lon as number;
    else
      service.longitude = this.longitude;
    if (f.value.lat !== "")
      service.latitude = f.value.lat as number;
    else
      service.latitude = this.latitude;
    if (f.value.employee !== null)
      service.employeeId = f.value.employee.id as number;

    console.log(service);

    this.serviceService.postServiceInfo(service).subscribe(data => {
      this.router.navigate(['/service-list']);
    });
  }

  addressButtonEvent(address: string) : void {
    this.locationIQService.getGps({address: address}, (data: Lonlat) => {
      console.log(data);
      this.latitude=data.lat;
      this.longitude=data.lon;
    })
  }

}
