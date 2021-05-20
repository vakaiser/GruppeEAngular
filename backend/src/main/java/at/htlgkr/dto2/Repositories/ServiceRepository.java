package at.htlgkr.dto2.Repositories;

import at.htlgkr.dto2.Entities.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, Integer> {
}
