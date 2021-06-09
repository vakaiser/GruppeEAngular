This microservice parses the address to longitude and latitude and vise versa.


Endpoint for getting the address:
/Location/getAddress?lon=[LONGITUDE]&lat=[LATITUDE]
Response is a Json:
`{"address":"RESULT"}`

Endpoint for getting the longitude and latitude
/Location/getGPS?address=[SEARCH_ADDRESS]
Response is a Json:
`{"lon":"LONGITUDE","lat":"LATITUDE"}`
