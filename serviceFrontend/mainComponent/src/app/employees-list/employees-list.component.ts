import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html'
})
export class EmployeesListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

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
        render: function(data, type, row, meta) {return "<a href=\"/services?employeeId="+row.id+"\">"+row.services.length+"</a>";}
      }]
    };
  }
}
