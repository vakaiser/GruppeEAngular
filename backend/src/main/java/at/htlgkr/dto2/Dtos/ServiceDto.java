package at.htlgkr.dto2.Dtos;

import at.htlgkr.dto2.Entities.Service;
import at.htlgkr.dto2.Repositories.EmployeeRepository;
import lombok.Data;
import java.util.Date;

@Data
public class ServiceDto {
    private String serviceName;
    private Integer employeeId;
    private Date date;
    private String longitude;
    private String latitude;

    public Service toService(EmployeeRepository er) {
        var service = new Service();
        service.setServiceName(getServiceName());
        service.setEmployee(er.findById(getEmployeeId()).get());
        service.setDate(getDate());
        service.setLatitude(getLatitude());
        service.setLongitude(getLongitude());
        return service;
    }
}
