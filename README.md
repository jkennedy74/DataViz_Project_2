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
###  Human Population- looking at the impact of disease
-https://catalog.data.gov/dataset/u-s-chronic-disease-indicators-cdi name of dataset. UsChronic.csv demonstrates links between the condition of medicine and deforestation.
### Utility API
 - Redlist only has 2 char ISO Codes.  Research indicates Leaflet doesn't play very well with the two codes.  API below can be used to augment the country data.
 -  http://restcountries.eu/#api-endpoints-response-example

  
## Libraries Used
 - Flask
 - Leaflet
 - D3
 - etc


