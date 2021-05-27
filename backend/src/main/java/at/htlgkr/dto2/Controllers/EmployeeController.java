package at.htlgkr.dto2.Controllers;

import at.htlgkr.dto2.Entities.Employee;
import at.htlgkr.dto2.Exceptions.Dto2ResourceNotFoundException;
import at.htlgkr.dto2.Repositories.EmployeeRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@Controller
public class EmployeeController {
    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @GetMapping("/serviceBackend/employees")
    @ResponseBody
    List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    @GetMapping("/serviceBackend/employees/{employeeId}")
    @ResponseBody
    Employee getEmployees(@PathVariable Integer employeeId) {
        return employeeRepository.findById(employeeId).orElseThrow(() -> new Dto2ResourceNotFoundException("Employee " + employeeId + " not found"));
    }

    @PostMapping("/serviceBackend/employees")
    @ResponseBody Employee postEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
}
