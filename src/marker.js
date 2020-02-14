const mapboxgl = require('mapbox-gl');

const createMarker = function (markerType = "Activity", location){
    //let markerImageURL = "url(http://i.imgur.com/WbMOfMl.png)";
    //if (markerType === "Hotel") markerImageURL = "url(http://i.imgur.com/D9574Cu.png)";
    //if (markerType === "Restaurant") markerImageURL = "url(http://i.imgur.com/cqR6pUI.png)";
    
    const marker = document.createElement("h1");
    //marker.style.width = "32px";
    //marker.style.height = "39px";
    //marker.style.backgroundImage = markerImageURL;
    if (markerType ===  "Activity") marker.innerText = "A";
    if (markerType ===  "Hotel") marker.innerText = "H";
    if (markerType ===  "Restaurant") marker.innerText = "R";

    console.log(new mapboxgl.Marker(marker).setLngLat(location));
    return new mapboxgl.Marker(marker).setLngLat(location);
};

module.exports = createMarker; 