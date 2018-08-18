// Tree loss from 2000-2012
var lossUrl = "http://gis-treecover.wri.org/arcgis/rest/services/ForestCover_lossyear_density/ImageServer/";
// Tree gain from 2000-2012
var gainUrl = "http://ec2-50-18-182-188.us-west-1.compute.amazonaws.com:6080/arcgis/rest/services/ForestGain_2000_2012/ImageServer/"
// Tree coverage in 2000
var coverUrl = "http://ec2-50-18-182-188.us-west-1.compute.amazonaws.com:6080/arcgis/rest/services/TreeCover2000/ImageServer/"

// Topographic base layer
var base = L.esri.basemapLayer("Topographic");

// Tree loss overlay
var lossLayer = L.esri.imageMapLayer({
  url: lossUrl,
  opacity : 0.8,
});

// Tree gain overlay
var gainLayer = L.esri.imageMapLayer({
  url: gainUrl,
  opacity : 0.9,
});

// Tree coverage overlay
var coverLayer = L.esri.imageMapLayer({
  url: coverUrl,
  opacity : 0.5,
});

// Create map object and set default layers
var map = L.map("map-id", {
    center: [28.0339, 1.6596],
    zoom: 3,
    layers: [base, coverLayer]
  });

// base layer group
var baseLayers = {
    "Topographic": base,
    "Streetmap": L.esri.basemapLayer("Streets")
};

// overlay group
var overlays = {
  "Tree cover (2000)": coverLayer,
  "Tree Loss (00-12)": lossLayer,
  "Tree gain (00-12)": gainLayer  
};

// layer control for the map
L.control.layers(baseLayers, overlays).addTo(map);

function buildMetadata(s_class) {

  var url = `/metadata/${s_class}`

  console.log("---- buildMetadata initiated ----")

  // Use `d3.json` to fetch the metadata for a sample
  d3.json(url).then(function(response) {
   
    // Creating a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through our data...
  for (var i = 0; i < response.length; i++) {
    // set the data location property to a variable
    var Latitude = parseInt(response[i].Latitude);
    var Longitude = parseInt(response[i].Longitude);

    // Add a new marker to the cluster group and bind a pop-up
    markers.addLayer(L.marker([Latitude, Longitude])
      .bindPopup(response[i].Class));

  }
  // Add our marker cluster layer to the map
  map.addLayer(markers);

  });
}

// var s_class = "Amphibia";

// buildMetadata(s_class);