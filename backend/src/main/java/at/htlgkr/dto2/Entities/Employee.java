package at.htlgkr.dto2.Entities;

import at.htlgkr.dto2.Exceptions.Dto2BadRequestException;
import lombok.Data;

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
    @OneToMany
    private List<Service> services;
}
