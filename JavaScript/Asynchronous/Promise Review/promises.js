// var p1 = new Promise(executor);

// function executor(resolved, reject){
    
// }

var getLocationPromise = getGeoLocation();

getLocationPromise.then(displayLocation);

function displayLocation(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    document.getElementById('lat').innerText = lat;
    document.getElementById('lng').innerText = lng;
}

// get geo location - promise

    // get golf courses nearby - promise 

        // populate dropdown with courses - add this to a promise (register) 

// locationservice.js
function getGeoLocation() {
    return new Promise(executor);
    function executor(resolve, reject) {
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(
                function(position){// successs
                    resolve(position);
                },
                function (error) {
                    reject({message: error.message});
                });
        }else {
            reject({message: "no geo location"})
        }
    }
}

