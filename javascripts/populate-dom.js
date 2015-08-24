define(function(require) {
  var $ = require("jquery");
  var templates = require("get-templates");

  return {
    showWeather: function(data) {
      var myData = {
        "name": data.name,
        "conditions": data.weather[0].main,
        "temp": data.main.temp,
        "pressure": data.main.pressure,
        "wind": data.wind.speed
     };
     console.log(data);
     console.log(myData);
      require(['hbs!../templates/dayWeather'], function(dayWeather) {
        $('.todayInfo').html(dayWeather(myData));
      });
    }
  };//end return
});//end module