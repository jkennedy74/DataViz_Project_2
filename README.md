# Planet Deforestation over Time and Species Density

In this project we will demonstrate the relationships between global deforestation and species density over time.

## Dimensions to Explore
 - Time
 - Geo
 


## APIs Used

### Tree Cover Gain and Tree Cover Loss
 - http://data.globalforestwatch.org/ 
 -  API Documentation:  http://gis-treecover.wri.org/arcgis/rest/services/ForestCover_lossyear_density/ImageServer/
### RedList Endangered Species Data
 - http://apiv3.iucnredlist.org/api/v3/docs
###  Human Population Density 
 - http://data.globalforestwatch.org/datasets/resource-rights
 API Documentation : http://gis-gfw.wri.org/arcgis/rest/services/people/MapServer/0/query?outFields=*&where=1%3D1
 
### Utility API
 - Redlist only has 2 char ISO Codes.  Research indicates Leaflet doesn't play very well with the two codes.  API below can be used to augment the country data.
 -  http://restcountries.eu/#api-endpoints-response-example

  
## Libraries Used
 - Flask
 - Leaflet
 - D3
 - etc


