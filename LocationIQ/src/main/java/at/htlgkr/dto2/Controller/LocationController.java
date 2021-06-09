package at.htlgkr.dto2.Controller;

import at.htlgkr.dto2.LocationIQ.LocationIQParser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
public class LocationController {

    LocationIQParser location;

    public LocationController() {
        location = new LocationIQParser();
    }

    @GetMapping("/Location/getAddress")
    @ResponseBody
    public String getAddress(@RequestParam float lon, @RequestParam float lat)
    {
        return location.getAddress(lon + "", lat + "");
    }

    @GetMapping("/Location/getGPS")
    @ResponseBody
    public String getLonLan(@RequestParam String address)
    {
        return location.getLonAndLat(address);
    }
}
