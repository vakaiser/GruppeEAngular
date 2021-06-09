import {Component, ElementRef, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {DatePipe} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  pipe: DatePipe = new DatePipe('en-US');
  dtOptions: DataTables.Settings = {};
  employeeId: Number = -1;

  constructor(private route : ActivatedRoute, private http: HttpClient, private elRef: ElementRef) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.employeeId = params['employeeId'];
      this.dtOptions = {
        "initComplete": (settings,json)=>{
          console.log(this.elRef.nativeElement.querySelectorAll(".delete"));
          this.elRef.nativeElement.querySelectorAll(".delete").forEach( (x:any) =>
            x.addEventListener("click", this.deleteService.bind( this, (x.getAttribute("attr-id") ))));    },
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
        }, {
          title: "Delete",
          render: function(data, type, row, meta) {return "<a attr-id='"+ row.id +"' class='delete' href='javascript:void(0)'>Delete</a>";}
        }]
      };
    });
  }

  deleteService(id: number){
    this.http.delete("http://localhost:8080/serviceBackend/services/"+id).subscribe(data => window.location.reload());
  }
}
