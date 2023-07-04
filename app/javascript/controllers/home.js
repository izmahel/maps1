import "google-maps"

let map, sitios;
var markers = [];
const rq = new XMLHttpRequest;
const icon = "<%= image_path 'pin-signs.svg' %>"

function setMarker(map, lat, lng, site) {
  var content = "<p>Nombre: " + site.name + 
            "<br>Institución: " + site.institution + 
            "<br>ID: " + site.identificator + 
            "<br>Máximo: " + site.max +
            "<br>Minimo: " + site.min + 
            "<br>Lat: " + site.lat + 
            "<br>Long: " + site.long + 
            "</p>";
  const info = new google.maps.InfoWindow({
    content: content
  });
  const marker = new google.maps.Marker({
    position: {lat, lng},
    icon: icon,
    map
  });  
  marker.addListener("click", () => {
    info.open({
      anchor: marker,
      map
    });
  });
  markers.push(marker);
}

function set_datos() {
  if (window.location.pathname == "/") {
    rq.open("GET", `${window.location}/sitios`);
    rq.responseType = "json";
    rq.send();
    rq.onreadystatechange = function (e) {
      if (rq.readyState === 4 && rq.status === 200) {
      sitios = rq.response;
      setMarkers();
      console.log(":)");
      } else if (rq.readyState === 4 && rq.status === 401) {
      consoloe.log("Error al solicitar datos");
      }
    };
  }
}

function setMarkers() {
  for(var i=0;i<sitios.length;i++) {
    setMarker(map, parseFloat(sitios[i].lat), parseFloat(sitios[i].long), sitios[i]);
  }
  var markerCluster = new markerClusterer.MarkerClusterer({markers, map});
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 24.0226983, lng: -104.6477248 },
    zoom: 13,
    mapId: "5e321b8c3351c819",
    streetViewControl: false,
    fullscreenControl: false
  });
  set_datos();
}

window.initMap = initMap;