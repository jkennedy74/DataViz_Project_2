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
 -https://catalog.data.gov/dataset/proportion-of-population-aged-65-or-older
 demonstrates links between the condition of natural areas and human concerns and that quantifies dependencies on resources.
 
### Utility API
 - Redlist only has 2 char ISO Codes.  Research indicates Leaflet doesn't play very well with the two codes.  API below can be used to augment the country data.
 -  http://restcountries.eu/#api-endpoints-response-example

  
## Libraries Used
 - Flask
 - Leaflet
 - D3
 - etc


