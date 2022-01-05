function initMap() {
  var location = { lat: 41.48131, lng: -71.31041 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: location,
  });
}
