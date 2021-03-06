package at.htlgkr.dto2.Entities;

import at.htlgkr.dto2.Exceptions.Dto2BadRequestException;
import lombok.Data;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
public class Employee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;

    private String longitude;
    private String latitude;
    @OneToMany (mappedBy = "employee", cascade = CascadeType.REMOVE)
    private List<Service> services;
}
