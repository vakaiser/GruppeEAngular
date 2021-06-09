package at.htlgkr.dto2;

import at.htlgkr.dto2.LocationIQ.LocationIQParser;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Dto2Application {

    public static void main(String[] args) {
        SpringApplication.run(Dto2Application.class, args);
//        LocationIQParser lamo = new LocationIQParser();
//        String lonlat = lamo.getLonAndLat("Empire State Building");
//        System.out.println(lonlat);
//        String address = lamo.getAddress(lonlat.split(",")[0], lonlat.split(",")[1]);
//        System.out.println(address);
    }

}
