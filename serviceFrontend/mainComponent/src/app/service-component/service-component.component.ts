import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {

  employeeId: number = -1;
  dtOptions: DataTables.Settings = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.employeeId = params['employeeId'];
      this.dtOptions = {
        ajax: {
          url: 'http://localhost:8080/serviceBackend/employees/'+this.employeeId,
          dataSrc: "services"
        },
        columns: [{
          title: "ID",
          data: 'id'
        }, {
          title: 'Name',
          data: 'serviceName'
        }, {
          title: 'Lat',
          data: 'latitude'
        }, {
          title: 'Lon',
          data: 'longitude'
        }, {
          title: "Date",
          data: "date"
        }]
      };
    });
  }

}
