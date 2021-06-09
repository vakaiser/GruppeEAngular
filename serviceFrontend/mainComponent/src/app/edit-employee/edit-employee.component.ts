import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Address, Employee, EmployeeService, Lonlat} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee | undefined;
  employeeId: Number = -1;
  address: String = "";
  constructor(private route : ActivatedRoute,
              private router : Router,
              private employeeService: EmployeeService, private http: HttpClient) { }

  onSave(f: NgForm): void {
    if (this.employeeId == -1)
      return;

    console.log(f.value);

    var employee = this.employee as Employee;
    if (f.value.name !== "")
      employee.name = f.value.name as String;
    if (f.value.latitude !== "")
      employee.latitude = f.value.latitude as Number;
    if (f.value.longitude !== "")
      employee.longitude = f.value.longitude as Number;
    console.log(employee)

    const body = employee;
    this.employeeService.putEmployeeInfo(this.employeeId, employee).subscribe(data => {
      this.router.navigate(['/employee-list']);
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.employeeId = params['employeeId'];
      this.employeeService.getEmployeeInfo(this.employeeId).subscribe((data: Employee)=>{
         this.getAddress(data);
      })
    });
  }

  getAddress(data: Employee) : void {
    this.http.get<Address>("http://localhost:8081/Location/getAddress?lon="+ data.longitude+"&lat="+data.latitude).subscribe((x:Address) =>{
      this.address=x.address; this.employee = data;});
  }

  addressButtonEvent(address: string) : void {
    if(this.employee == undefined) return;
    this.http.get<Lonlat>("http://localhost:8081/Location/getGPS?address="+ address).subscribe((data: Lonlat) => {(this.employee as Employee).latitude=data.lat; (this.employee as Employee).longitude=data.lon})
  }

}
