package at.htlgkr.dto2.LocationIQ;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

public class LocationIQParser {
    private RestTemplate restTemplate;
    private static final String accessToken = "c2185716076e66";

    public LocationIQParser() {
        this.restTemplate = new RestTemplate();
    }

    public String getAddress(String lon, String lat)
    {
        String address =restTemplate.getForObject("https://eu1.locationiq.com/v1/reverse.php?key="+ accessToken +"&lat="+ lat +"&lon="+ lon +"&format=json", String.class);
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            JsonNode jsonNode = objectMapper.readTree(address);
            address = jsonNode.get("display_name").asText();
            return address;
        } catch (IOException e) {
            e.printStackTrace();
        }
       return null;
    }

    public String getLonAndLat(String address)
    {
        String location =restTemplate.getForObject("https://eu1.locationiq.com/v1/search.php?key="+ accessToken +"&q="+ address +"&format=json", String.class);
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            JsonNode jsonNode = objectMapper.readTree(location);
            location = jsonNode.get(0).get("lon").asText() + "," + jsonNode.get(0).get("lat").asText();
            return location;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
