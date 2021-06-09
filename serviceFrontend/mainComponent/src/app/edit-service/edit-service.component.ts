import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Employee, EmployeeService} from "../employee.service";
import {Service, ServiceService} from "../service.service";

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  service: Service | undefined;
  serviceId: Number | undefined;
  constructor(private route : ActivatedRoute, private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.serviceId = params['serviceId'];
      this.serviceService.sendGetRequest(this.serviceId as Number).subscribe((data: Service)=>{
        this.service = data;
      })
    });
  }

}
