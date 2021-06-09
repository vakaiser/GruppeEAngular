package at.htlgkr.dto2.Dtos;

import at.htlgkr.dto2.Entities.Employee;
import at.htlgkr.dto2.Entities.Service;
import at.htlgkr.dto2.Repositories.EmployeeRepository;
import lombok.Data;

import java.util.ArrayList;

@Data
public class EmployeeDto {
    private String name;
    private String longitude;
    private String latitude;

    public Employee toEmployee() {
        var employee = new Employee();
        employee.setName(getName());
        employee.setLatitude(getLatitude());
        employee.setLongitude(getLongitude());
        employee.setServices(new ArrayList<>());
        return employee;
    }
}
