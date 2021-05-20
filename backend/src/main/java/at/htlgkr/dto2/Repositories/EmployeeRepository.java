package at.htlgkr.dto2.Repositories;

import at.htlgkr.dto2.Entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
