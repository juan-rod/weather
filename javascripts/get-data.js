define(function(require) { 
  var $ = require("jquery");

return {
    getWeather: function() {
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}id=524901&APPID={08e00df822e2ee0464d41f6ead5993a2}",
        }).done(function() {
            
          var weatherObj = {
          
          "city": name,
          "temp": main.temp,
          "conditions": weather.main,
          "wind": wind.speed,
          "air": main.pressure,
          "icon": weather.icon,

         };

          });

        
    }
  };














});