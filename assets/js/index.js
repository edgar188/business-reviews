var bool = false;
var navList = document.getElementById("nav-list");
var btnNav = document.getElementById("btn-nav");
var btnClose = document.getElementById("btn-close");
var body = document.body;

function onNavBtn() {
    bool = !bool;

    if(bool) {
        navList.className += "show";
        btnNav.className = "btn-clear nav hidden";
        btnClose.className = "btn-clear close visible";
        body.style.overflowY = "hidden";
    } else {
        navList.className = "";
        btnNav.className = "btn-clear nav visible";
        btnClose.className = "btn-clear close hidden";
        body.style.overflowY = "visible";
    }
}

function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4, 
            center: uluru,
            mapTypeId: 'hybrid',
            disableDefaultUI: true
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
    marker.setMap(null);
}