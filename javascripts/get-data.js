define(function(require) { 
  var $ = require("jquery");

return {
    getWeather: function(zip, callback) {
       var queryURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip +",us&id=524901&APPID={08e00df822e2ee0464d41f6ead5993a2}";
      $.ajax({
        url: queryURL
        }).done(function(data) {
             callback.call(this,data);
          });        
    }
  };
});