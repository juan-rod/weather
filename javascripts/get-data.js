define(function(require) { 
  var $ = require("jquery");
  var pop = require("populate-dom");

  return {
    getWeather: function(lat, long) {
      var queryURL = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=imperial&APPID=94ff938d3c72cbd79d1a03626d7c462a";
      
      $.ajax({
        url: queryURL,
        dataType : "jsonp"
      })
      .done(function(data) {
        pop.showWeather(data);
      });    
    }
  };

});