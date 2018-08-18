require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/layers/TileLayer",  // Require the TileLayer module
    "dojo/dom",  // require dojo/dom for getting the DOM element
    "dojo/on",   // require dojo/on for listening to events on the DOM
    "dojo/domReady!"
  ],
  function(
    Map, SceneView, TileLayer, dom, on
  ) {  // Create the Map
    var map = new Map({
      basemap: "oceans",
      layers: [housingLayer]  // layers can be added as an array to the map's constructor
    });
  
  
    // Create the SceneView
    var view = new SceneView({
        container: "viewDiv",
        map: map
    });

    var transportationLayer = new TileLayer({
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer",
      id: "streets",
      opacity: 0.7
});
    });

    var housingLayer = new TileLayer({
      url: "https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/New_York_Housing_Density/MapServer", 
      id: "ny-housing",
});

  map.layers.add(transportationLayer);

   // Create a variable referencing the checkbox node
   var streetsLayerToggle = dom.byId("streetsLayer");

   // Listen to the onchange event for the checkbox
   on(streetsLayerToggle, "change", function(){
     // When the checkbox is checked (true), set the layer's visibility to true
     transportationLayer.visible = streetsLayerToggle.checked;
   });

   // This event fires each time a layer's LayerView is created for the
    // specified view instance
    view.on("layerview-create", function(event) {
        if (event.layer.id === "ny-housing") {
          // Explore the properties of the housing layer's layer view here
          console.log("LayerView for New York housing density created!", event.layerView);
        }
        if (event.layer.id === "streets") {
          // Explore the properties of the transportation layer's layer view here
          console.log("LayerView for streets created!", event.layerView);
        }
      });

      // When the layer's promise resolves, animate the view to the layer's fullExtent
        housingLayer.when(function() {
        view.goTo(housingLayer.fullExtent);
  });

      



