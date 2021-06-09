import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee, EmployeeService} from "../employee.service";
import {Service, ServiceService} from "../service.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  service: Service | undefined;
  serviceId: Number = -1;
  constructor(private route : ActivatedRoute,
              private router : Router,
              private serviceService: ServiceService) { }

  onSave(f: NgForm): void {
    if (this.serviceId == -1)
      return;

    console.log(f.value);

    var service = this.service as Service;
    if (f.value.serviceName !== "")
      service.serviceName = f.value.serviceName as String;
    if (f.value.date !== "")
      service.date = f.value.date as Date;
    if (f.value.longitude !== "")
      service.longitude = f.value.longitude as Number;
    if (f.value.latitude !== "")
      service.latitude = f.value.latitude as Number;
    console.log(service)

    const body = service;
    this.serviceService.puServiceInfo(this.serviceId, service).subscribe(data => {
      this.router.navigate(['/service-list', service.employeeId]);
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.serviceId = params['serviceId'];
      this.serviceService.getServiceInfo(this.serviceId).subscribe((data: Service)=>{
        this.service = data;
      })
    });
  }

}
