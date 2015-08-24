define(function(require) {
  var $ = require("jquery");
  var templates = require("get-templates");

  return {
    showWeather: function(data) {
      console.log(data);
      var myData = {
        "name": data.city.name,
        "conditions": data.list[0].weather[0].main,
        "temp": data.list[0].temp.day,
        "pressure": data.list[0].pressure,
        "wind": data.list[0].speed,
        "icon": data.list[0].weather[0].icon
     };
     console.log(myData);
      require(['hbs!../templates/dayWeather'], function(dayWeather) {
        $('.todayInfo').html(dayWeather(myData));
      });
    },
    show3DayWeather: function(data) {

     var allData = [];

      for (var i = 1; i < data.list.length; i++) {
      var obj = {
        "name": data.city.name,
        "conditions": data.list[i].weather[0].main,
        "temp": data.list[i].temp.day,
        "pressure": data.list[i].pressure,
        "wind": data.list[i].speed,
        "icon": data.list[i].weather[0].icon
        };
        allData.push(obj);
      }

      require(['hbs!../templates/threeDayWeather'], function(dayWeather) {
        $('.multipleDay').html(dayWeather(allData));
      });
    },
    
    show7DayWeather: function(data) {

     var allData = [];

      for (var i = 1; i < data.list.length; i++) {
      var obj = {
        "name": data.city.name,
        "conditions": data.list[i].weather[0].main,
        "temp": data.list[i].temp.day,
        "pressure": data.list[i].pressure,
        "wind": data.list[i].speed,
        "icon": data.list[i].weather[0].icon
        };
        allData.push(obj);
      }

      require(['hbs!../templates/threeDayWeather'], function(dayWeather) {
        $('.multipleDay').html(dayWeather(allData));
      });
    }
  }; //end return
}); //end module