define(function(require) {
  var $ = require("jquery");
  var templates = require("get-templates");

  return {
    showWeather: function(data) {
      require(['hbs!../templates/dayWeatherTpl'], function(dayWeatherTpl) {
        $('.todayInfo').html(dayWeatherTpl(data));
      });
    }
  };//end return
});//end module