import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, ActivatedRoute, RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { DataTablesModule } from "angular-datatables";
import { FormsModule, NgModel } from "@angular/forms";
import { ServiceListComponent } from './service-list/service-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';
import {AgmCoreModule} from "@agm/core";
import {environment} from "../environments/environment";
import { AddServiceComponent } from './add-service/add-service.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  imports: [
    DataTablesModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GM_API_KEY
    }),
    RouterModule.forRoot([
      {path: 'employee-list', component: EmployeesListComponent},
      {path: 'service-list', component: ServiceListComponent},
      {path: 'add-employee', component: AddEmployeeComponent},
      {path: 'add-service', component: AddServiceComponent},
      {path: 'edit-employee', component: EditEmployeeComponent},
      {path: 'edit-service', component: EditServiceComponent},
      {path: 'map', component: MapComponent},
      {path: '', redirectTo: '/employee-list', pathMatch: 'full'}
    ]),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [],
  declarations: [AppComponent, EmployeesListComponent, ServiceListComponent, EditEmployeeComponent, EditServiceComponent, MapComponent, AddServiceComponent, AddEmployeeComponent],

  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class EmployeesListModule { }
export class ServiceComponentModule { }
