import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html'
})
export class EmployeesListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      ajax: {
        url: 'http://localhost:8080/serviceBackend/employees',
        dataSrc: ""
      },
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'Name',
        data: 'name'
      }, {
        title: 'Lat',
        data: 'latitude'
      }, {
        title: 'Lon',
        data: 'longitude'
      }, {
        title: "Services",
        data: "services",
        render: function(data, type, row, meta) {return "<a href=\"/service-list?employeeId="+row.id+"\">"+row.services.length+"</a>";}
      }, {
        title: "Edit",
        render: function(data, type, row, meta) {return "<a href=\"/edit-employee?employeeId="+row.id+"\">Edit</a>";}
      }, {
        title: "Delete",
        render: function(data, type, row, meta) {return "<a href='#' [routerLink]=\"\" (click)=\"deleteEmployee("+row.id+")\">Delete</a>";}
      }]
    };
  }

  deleteEmployee(id: number){
    this.http.delete("http://localhost:8080/serviceBackend/employees/"+id);
  }
}
