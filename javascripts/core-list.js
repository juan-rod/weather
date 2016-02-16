define(function(require) {
  var $ = require("jquery");
  var timeSlider = require("time-slider");
  var get = require("get-data");




return function () {

  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude.toFixed(3);
    var long = position.coords.longitude.toFixed(3);

    get.getWeather(lat,long);
     $(".loader").fadeOut("slow");
    });

};



});
