package at.htlgkr.dto2.Controllers;

import at.htlgkr.dto2.Entities.Service;
import at.htlgkr.dto2.Exceptions.Dto2BadRequestException;
import at.htlgkr.dto2.Exceptions.Dto2InternalServerErrorException;
import at.htlgkr.dto2.Exceptions.Dto2ResourceNotFoundException;
import at.htlgkr.dto2.Repositories.ServiceRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
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
    ResponseEntity deleteService(@PathVariable Integer serviceId) {
        Optional<Service> semp = serviceRepository.findById(serviceId);
        if(semp.isPresent()) {
            serviceRepository.delete(semp.get());
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/serviceBackend/services/{serviceId}")
    @ResponseBody Service getService(@PathVariable Integer serviceId) {
        return serviceRepository.findById(serviceId).orElseThrow(() -> new Dto2ResourceNotFoundException("Service " + serviceId + " not found"));
    }

    @PutMapping("/serviceBackend/services/{serviceId}")
    @ResponseBody Service putService(@RequestBody Service service, @PathVariable Integer serviceId) {
        return serviceRepository.findById(serviceId)
                .map(oldService -> {
                    oldService.setDate(service.getDate());
                    oldService.setLatitude(service.getLatitude());
                    oldService.setLongitude(service.getLongitude());
                    if(service.getEmployee()!=null) oldService.setEmployee(service.getEmployee());
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
