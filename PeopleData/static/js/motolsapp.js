 console.log("EnvironmentalData");

// Set up our chart
//= ================================
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

//  Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
// =================================
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);


// Import data from the Environmentaldata.csv file
// =================================

  d3.csv("/DSCBC/Project_DBSC/Project 2/Proj2/DataViz_Project_2/PeopleData/data/Environmentaldata.csv", function(error, data) {
    if (error) throw (error);

  // Format the data
  data.forEach(function(data) {
    data.HUC= +data.HUC;
    data.FORPCT = +data.FORPCT;
    data.POPGROWTH = +data.POPGROWTH;
    data.POPDENS= +data.POPDENS;
  });

//  Create Scales
  //= ============================================
  var xTimeScale = d3.scaleTime()
    .domain(d3.extent(data, d => d.HUC))
    .range([0, width]);

  var yLinearScale1 = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.FORPCT)])
    .range([height, 0]);

  // var yLinearScale2 = d3.scaleLinear()
  //   .domain([0, d3.max(data, d => d.POPGROWTH)])
  //   .range([height, 0]);
  
  var yLinearScale3 = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.POPDENS)])
    .range([height, 0]);
  
    //Create Axes
  // =============================================
  var bottomAxis = d3.axisBottom(xTimeScale);
  var leftAxis = d3.axisLeft(yLinearScale1);
  var rightAxis = d3.axisRight(yLinearScale3);
  // var rightAxis2= d3.axisRight(yLinearScale3);

  // Append the axes to the chartGroup - ADD STYLING
  // ==============================================
  // Add bottomAxis
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // CHANGE THE TEXT TO THE CORRECT COLOR
  chartGroup.append("g")
    .attr("stroke", "blue") // NEW!
    .call(leftAxis);

  // CHANGE THE TEXT TO THE CORRECT COLOR
  chartGroup.append("g")
    .attr("transform", `translate(${width}, 0)`)
    .attr("stroke", "brown") // NEW!
    .call(rightAxis);

    //Step 8: Set up two line generators and append two SVG paths
    // ==============================================
    // Line generators for each line
    var line1 = d3
      .line()
      .x(d => xTimeScale(d.HUC))
      .y(d => yLinearScale1(d.FORPCT));
  
    var line2 = d3
      .line()
      .x(d => xTimeScale(d.HUC))
      .y(d => yLinearScale3(d.POPDENS));

  // Append a path for line1
  chartGroup.append("path")
  .data([data])
  .attr("d", line1)
  .classed("line blue", true);

// Append a path for line2
chartGroup.append("path")
  .data([data])
  .attr("d", line2)
  .classed("line brown", true);
});
