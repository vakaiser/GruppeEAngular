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
import { DeleteLinkComponent } from './delete-link/delete-link.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    DataTablesModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'employee-list', component: EmployeesListComponent},
      {path: 'service-list', component: ServiceListComponent},
      {path: 'edit-employee', component: EditEmployeeComponent},
      {path: 'edit-service', component: EditServiceComponent},
      {path: '', redirectTo: '/employee-list', pathMatch: 'full'}
    ])
  ],
  providers: [],
  declarations: [AppComponent, EmployeesListComponent, ServiceListComponent, EditEmployeeComponent, EditServiceComponent, DeleteLinkComponent, MapComponent],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class EmployeesListModule { }
export class ServiceComponentModule { }
