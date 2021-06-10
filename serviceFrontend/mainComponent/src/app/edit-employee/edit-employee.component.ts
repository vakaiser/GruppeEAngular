import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Employee, EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {LocationIQService, Lonlat} from "../location-iq.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee | undefined;
  employeeId: number = -1;
  address: string = "";
  constructor(private route : ActivatedRoute,
              private router : Router,
              private employeeService: EmployeeService,
              private http: HttpClient,
              private locationIQService : LocationIQService,
              private titleService: Title
  ) { }

  onSave(f: NgForm): void {
    if (this.employeeId == -1)
      return;

    console.log(f.value);

    var employee = this.employee as Employee;
    if (f.value.name !== "")
      employee.name = f.value.name as string;
    if (f.value.latitude !== "")
      employee.latitude = f.value.latitude as number;
    if (f.value.longitude !== "")
      employee.longitude = f.value.longitude as number;
    console.log(employee)

    const body = employee;
    this.employeeService.putEmployeeInfo(this.employeeId, employee).subscribe(data => {
      this.router.navigate(['/employee-list']);
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("Edit employee");

    this.route.queryParams.subscribe(params => {
      this.employeeId = params['employeeId'];
      this.employeeService.getEmployeeInfo(this.employeeId).subscribe((data: Employee)=>{
        this.locationIQService.getAddress({lat: data.latitude, lon: data.longitude}, x => {
          this.address=x.address;
          this.employee = data;
        });
      })
    });
  }

  addressButtonEvent(address: string) : void {
    if(this.employee == undefined) return;
    this.locationIQService.getGps({address: address}, ((data: Lonlat) => {(this.employee as Employee).latitude=data.lat; (this.employee as Employee).longitude=data.lon}));
  }

}
