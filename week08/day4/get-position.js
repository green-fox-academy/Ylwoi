/**
 * Created by cw on 2017-05-11.
 */
'use strict';
//lat: parseInt(arr.Results[0].lat), lng: parseInt(arr.Results[0].lon)


var httpRequest = new XMLHttpRequest();
var button = document.querySelector('button');
var input =  document.querySelector('input');
var lat = -34;
var lon = 150;

function engine() {
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var arr = JSON.parse(httpRequest.response);
            lat = parseInt(arr.Results[0].lat);
            lon = parseInt(arr.Results[0].lon);
            console.log(parseInt(arr.Results[0].lat));
            initMap();

        }
    };
    httpRequest.open('GET', "https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=" + input.value );
    httpRequest.setRequestHeader("X-Mashape-Key", "mHgKaw43rSmshT0JkbzcnwXH0vc4p15mIGGjsnIS8YAkj3WB9b");
    httpRequest.send();
}

function initMap() {
    console.log(lat);
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lon},
        scrollwheel: false,
        zoom: 8
    })
}

button.addEventListener('click', function () {
    engine();
});