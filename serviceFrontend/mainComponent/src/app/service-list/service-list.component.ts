import {Component, ElementRef, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {DatePipe} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  pipe: DatePipe = new DatePipe('en-US');
  dtOptions: any = {};
  employeeId: Number = -1;

  constructor(private route : ActivatedRoute, private http: HttpClient, private elRef: ElementRef, private titleService: Title) { }


  ngOnInit(): void {
    this.titleService.setTitle("Service list");

    this.route.queryParams.subscribe(params => {
      this.employeeId = params['employeeId'];
      this.dtOptions = {
        "initComplete": (settings:any,json:any)=>{
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
          render: (data:any) => this.pipe.transform(data)
        },{
          title: 'Long',
          data: 'longitude'
        },{
          title: 'Lat',
          data: 'latitude'
        },{
          title: "Edit",
          render: function(data:any, type:any, row:any, meta:any) {return "<a href=\"/edit-service?serviceId="+row.id+"\">Edit</a>";}
        }, {
          title: "Delete",
          render: function(data:any, type:any, row:any, meta:any) {return "<a attr-id='"+ row.id +"' class='delete' href='javascript:void(0)'>Delete</a>";}
        }, {
          title: "Map",
          render: function(data:any, type:any, row:any, meta:any) {return "<a href=\"/map?lat="+row.latitude+"&long="+row.longitude+"&label="+row.serviceName+"\">Map</a>";}
        }],
        dom: 'Bfrtip',
        buttons: [
          'copy', 'excel', 'csv', 'print'
        ]
      };
    });
  }

  deleteService(id: number){
    this.http.delete("http://localhost:8080/serviceBackend/services/"+id).subscribe(data => window.location.reload());
  }
}
