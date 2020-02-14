console.log('test');

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1Ijoicm5vcmFzYWsiLCJhIjoiY2s2bGs1MGl0MGR2dTNkbzducmNicnVmaCJ9.aLeE6n_Ri7RUQ65fbRgFsA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], //FSA Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});
