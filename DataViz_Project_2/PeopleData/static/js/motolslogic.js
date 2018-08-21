 console.log("working");

 // Define streetmap and satellite layers
 var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.pirates",
  accessToken: API_KEY
});

//create the map objects with options.
var map = L.map("map-id", {
  center: [
    40.7, -94.5
  ],
  zoom: 3,
  layers: [streetmap]
});

//Then we add our streepmap tile layer to the map

streetmap.addTo(map);

//create layers for the data 


