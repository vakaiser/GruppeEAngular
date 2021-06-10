import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee, EmployeeService} from "../employee.service";
import {Service, ServiceService} from "../service.service";
import {NgForm} from "@angular/forms";
import {Address, LocationIQService, Lonlat} from "../location-iq.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  service: Service | undefined;
  serviceId: number = -1;
  address: string = "";
  constructor(private route : ActivatedRoute,
              private router : Router,
              private serviceService: ServiceService,
              private http: HttpClient,
              private locationIQService : LocationIQService,
              private titleService: Title) { }

  onSave(f: NgForm): void {
    if (this.serviceId == -1)
      return;

    console.log(f.value);

    var service = this.service as Service;
    if (f.value.serviceName !== "")
      service.serviceName = f.value.serviceName as string;
    if (f.value.date !== "")
      service.date = f.value.date as Date;
    if (f.value.longitude !== "")
      service.longitude = f.value.longitude as number;
    if (f.value.latitude !== "")
      service.latitude = f.value.latitude as number;
    console.log(service)

    const body = service;
    this.serviceService.putServiceInfo(this.serviceId, service).subscribe(data => {
      this.router.navigate(['/service-list', {serviceId: service.employeeId}]);
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("Edit service");

    this.route.queryParams.subscribe(params => {
      this.serviceId = params['serviceId'];
      this.serviceService.getServiceInfo(this.serviceId).subscribe((data: Service)=>{
        this.locationIQService.getAddress({lat: data.latitude, lon: data.longitude}, (x:Address) =>{
          this.address=x.address;
          this.service = data;
        })
      })
    });
  }

  addressButtonEvent(address: string) : void {
    if(this.service == undefined) return;
    this.locationIQService.getGps({address: address}, (data: Lonlat) => {(this.service as Service).latitude=data.lat; (this.service as Service).longitude=data.lon})
  }
}
