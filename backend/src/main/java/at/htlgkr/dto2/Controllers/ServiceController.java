package at.htlgkr.dto2.Controllers;

import at.htlgkr.dto2.Entities.Service;
import at.htlgkr.dto2.Exceptions.Dto2BadRequestException;
import at.htlgkr.dto2.Exceptions.Dto2InternalServerErrorException;
import at.htlgkr.dto2.Exceptions.Dto2ResourceNotFoundException;
import at.htlgkr.dto2.Repositories.ServiceRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class ServiceController {
    private final ServiceRepository serviceRepository;

    public ServiceController(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    @GetMapping("/serviceBackend/services")
    @ResponseBody List<Service> getServices() {
        return serviceRepository.findAll();
    }

    @PostMapping("/serviceBackend/services")
    @ResponseBody Service postService(Service service) {
        return serviceRepository.save(service);
    }

    @DeleteMapping("/serviceBackend/services/{serviceId}")
    void deleteService(@PathVariable Integer serviceId) {
        if (!serviceRepository.findById(serviceId).isPresent())
            throw new Dto2BadRequestException("Service cannot be deleted");
        serviceRepository.deleteById(serviceId);
    }

    @GetMapping("/serviceBackend/services/{serviceId}")
    @ResponseBody Service getService(@PathVariable Integer serviceId) {
        return serviceRepository.findById(serviceId).orElseThrow(() -> new Dto2ResourceNotFoundException("Service " + serviceId + " not found"));
    }

    @PutMapping("/serviceBackend/services/{serviceId}")
    @ResponseBody Service putService(Service service, @PathVariable Integer serviceId) {
        return serviceRepository.findById(serviceId)
                .map(oldService -> {
                    oldService.setDate(service.getDate());
                    oldService.setLatitude(service.getLatitude());
                    oldService.setLongitude(service.getLongitude());
                    oldService.setEmployee(service.getEmployee());
                    oldService.setServiceName(service.getServiceName());
                    return serviceRepository.save(oldService);
                }).orElseThrow(() -> new Dto2ResourceNotFoundException("Service not found"));
    }

    @GetMapping("/serviceBackend/services/{serviceId}/address")
    @ResponseBody String getServiceAddress(@PathVariable Integer serviceId)
    {
        throw new Dto2InternalServerErrorException("Not implemented");
    }
}
