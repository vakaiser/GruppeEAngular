import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Employee, EmployeeService} from "../employee.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee | undefined;
  employeeId: Number = -1;
  constructor(private route : ActivatedRoute, private employeeService: EmployeeService) { }

  onSave(f: NgForm): void {
    if (this.employeeId == -1)
      return;

    console.log(f.value);

    var employee = this.employee as Employee;
    employee.name = f.value.name as String;
    employee.latitude = f.value.latitude as Number;
    employee.longitude = f.value.longitude as Number;

    const body = employee;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.employeeId = params['employeeId'];
      this.employeeService.getEmployeeInfo(this.employeeId).subscribe((data: Employee)=>{
        this.employee = data;
      })
    });
  }

}
