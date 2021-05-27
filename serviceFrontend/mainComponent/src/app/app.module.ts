import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

import { DataTablesModule } from "angular-datatables";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    DataTablesModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'employee-list', component: EmployeesListComponent},
      {path: 'service-list', component: ServiceComponentComponent},
      {path: '', redirectTo: '/employee-list', pathMatch: 'full'}
    ])
  ],
  providers: [],
  declarations: [AppComponent, EmployeesListComponent, ServiceComponentComponent],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class EmployeesListModule { }
export class ServiceComponentModule { }
