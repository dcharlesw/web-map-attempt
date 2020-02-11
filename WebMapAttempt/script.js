function initMap() {
    var location = {lat: 39.930, lng: -75.175};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4, 
        center: location,
    });
    var marker = new google.maps.marker({
        position: location,
        map: map,
    });
}