import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  pipe: DatePipe = new DatePipe('en-US');
  dtOptions: DataTables.Settings = {};
  employeeId: Number = -1;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.employeeId = params['employeeId'];
      this.dtOptions = {
        ajax: {
          url: this.employeeId ? 'http://localhost:8080/serviceBackend/employees/'+this.employeeId : 'http://localhost:8080/serviceBackend/services/',
            dataSrc: this.employeeId ? "services" : ""
        },
        columns: [{
          title: 'ID',
          data: 'id'
        },{
          title: 'Service Name',
          data: 'serviceName'
        },{
          title: 'Date',
          data: 'date',
          render: data => this.pipe.transform(data)
        },{
          title: 'Long',
          data: 'longitude'
        },{
          title: 'Lat',
          data: 'latitude'
        },{
          title: "Edit",
          render: function(data, type, row, meta) {return "<a href=\"/edit-service?serviceId="+row.id+"\">Edit</a>";}
        }]
      };
    });
  }

}
