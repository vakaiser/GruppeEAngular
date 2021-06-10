import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataTableDirective} from "angular-datatables";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html'
})
export class EmployeesListComponent implements OnInit{


  dtOptions: DataTables.Settings = {};

  constructor(private http: HttpClient, private elRef: ElementRef, private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle("Employees list");

    this.dtOptions = {
      "initComplete": (settings,json)=>{
        console.log(this.elRef.nativeElement.querySelectorAll(".delete"));
        this.elRef.nativeElement.querySelectorAll(".delete").forEach( (x:any) =>
          x.addEventListener("click", this.deleteEmployee.bind( this, (x.getAttribute("attr-id") ))));    },
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
        render: function(data, type, row, meta) {return "<a attr-id='"+ row.id +"' class='delete' href='javascript:void(0)'>Delete</a>";}
      }, {
        title: "Map",
        render: function(data, type, row, meta) {return "<a href=\"/map?lat="+row.latitude+"&long="+row.longitude+"&label="+row.name+"\">Map</a>";}
      }]
    };
  }


  deleteEmployee(id: number){
    this.http.delete("http://localhost:8080/serviceBackend/employees/"+id).subscribe(data => window.location.reload());
  }
}
