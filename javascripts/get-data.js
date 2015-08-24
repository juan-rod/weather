define(function(require) { 
  var $ = require("jquery");

  return {
    getWeather: function(zip, count, callback) {
       var queryURL = "http://api.openweathermap.org/data/2.5/forecast/daily?zip=" + zip + ",us&cnt=" + count + "&units=imperial&mode=json&id=524901&APPID={08e00df822e2ee0464d41f6ead5993a2}";
      $.ajax({
        url: queryURL
      }).done(function(data) {
        callback.call(this, data);
      });              
    }
  };
});