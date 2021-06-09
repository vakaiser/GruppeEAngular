import { Component, OnInit } from '@angular/core';
import {LocationIQService, Lonlat} from "../location-iq.service";
import {ServiceService} from "../service.service";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  latitude : number = 0;
  longitude : number = 0;

  constructor(
    private locationIQService : LocationIQService,
    private employeeService: EmployeeService,
    private router : Router) { }

  ngOnInit(): void {
  }

  onSave(f: NgForm): void {
    var employee = {name: "", longitude: 0, latitude: 0}

    if (f.value.name !== "")
      employee.name = f.value.name as string;
    if (f.value.longitude !== "")
      employee.longitude = f.value.longitude as number;
    if (f.value.latitude !== "")
      employee.latitude = f.value.latitude as number;

    this.employeeService.postEmployeeInfo(employee).subscribe(data => {
      this.router.navigate(['/employee-list']);
    });
  }

  addressButtonEvent(address: string) : void {
    this.locationIQService.getGps({address: address}, (data: Lonlat) => {this.latitude=data.lat; this.longitude=data.lon})
  }

}
