function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var uluru2 = {lat: -25, lng: 131};
    var test = {lat: -20, lng: 120};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        label: {text: 'T'}
    });
    var hole = new google.maps.Marker({
        position: uluru2,
        map: map,
        label: {text: 'H'}
    })

}

