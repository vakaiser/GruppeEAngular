package at.htlgkr.dto2.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
public class Service implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "service_name")
    private String serviceName;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;
    private Date date;
    private String longitude;
    private String latitude;

    public Integer getEmployeeId() {
        return employee.getId();
    }
}
