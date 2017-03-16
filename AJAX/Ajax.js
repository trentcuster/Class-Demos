var httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200){
        var data = JSON.parse(httpRequest.responseText);
    }
};

httpRequest.open('POST','https://golf-courses-api.herokuapp.com/courses/',true)
httpRequest.setRequestHeader('Content-type', 'application/json');

var body = {
    latitude : 40.4196,
    longitude: -111.8866,
    radius: 10
}

httpRequest.send(JSON.stringify(body));
