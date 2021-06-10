package at.htlgkr.dto2.LocationIQ;

import at.htlgkr.dto2.clazzes.Address;
import at.htlgkr.dto2.clazzes.Lonlat;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

public class LocationIQParser {
    private RestTemplate restTemplate;
    private static final String accessToken = LocationIQAccessToken.access_token;

    public LocationIQParser() {
        this.restTemplate = new RestTemplate();
    }

    public Address getAddress(String lon, String lat)
    {
        String address =restTemplate.getForObject("https://eu1.locationiq.com/v1/reverse.php?key="+ accessToken +"&lat="+ lat +"&lon="+ lon +"&format=json", String.class);
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            JsonNode jsonNode = objectMapper.readTree(address);
            Address a = new Address();
            a.address = jsonNode.get("display_name").asText();
            return a;
        } catch (IOException e) {
            e.printStackTrace();
        }
       return null;
    }

    public Lonlat getLonAndLat(String address)
    {
        String location =restTemplate.getForObject("https://eu1.locationiq.com/v1/search.php?key="+ accessToken +"&q="+ address +"&format=json", String.class);
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            JsonNode jsonNode = objectMapper.readTree(location);
            Lonlat l = new Lonlat();
            l.lon = jsonNode.get(0).get("lon").asText();
            l.lat = jsonNode.get(0).get("lat").asText();
            return l;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
