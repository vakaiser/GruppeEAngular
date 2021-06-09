# GruppeEAngular

GruppeEAngular is an Angular frontend to out Employee and Service backend.


## Points
https://docs.google.com/spreadsheets/d/13k7bH3qoG0o3ax97cJgvIRwSAuGld6BLAXFGSyPvN3Y/edit?usp=sharing

## Frontend
The frontend has been made with Angular. We have used the following major dependencies:
- DataTables
- Angular Google Maps

It has the following pages and features:
- A list of all employees
- A list of all services
- A list of services of a specific employee
- Adding an employee
- Adding a service
- Editing an employee
- Editing a service
- Showing a map to all features

## Google API Key
To set up your Google Maps JS API key, rename the [environment.ts.example](https://github.com/vakaiser/GruppeEAngular/blob/main/serviceFrontend/mainComponent/src/environments/environment.ts.example) to `environment.ts` and set up your API key in there.

## Microservices
### LocationIQ
The service can communicate with the LocationIQ API to handle GPS-Coordinates better. The default port for the LocationIQ-Microservice is 8081

### EmployeeService Backend
The main backend of the site. Uses 8080 as the default port.
