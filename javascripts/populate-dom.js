define(function(require) {
  var $ = require("jquery");
  var templates = require("get-templates");

  return {
    showWeather: function(data) {
      console.log(data);
      var fixedTemp = data.main.temp.toFixed(0);
      var fixedTempMin = data.main.temp_min.toFixed(0);
      var fixedTempMax = data.main.temp_max.toFixed(0);
      var fixedWind = data.wind.speed.toFixed(0);
      var myData = {
        "name": data.name,
        "conditions": data.weather[0].description,
        "temp": fixedTemp,
        "tempMin": fixedTempMin,
        "tempMax": fixedTempMax,
        "humidity": data.main.humidity,
        "pressure": data.main.pressure,
        "wind": fixedWind,
        "icon": data.weather[0].icon
     };
     console.log(myData);
      $('.todayInfo').html(templates.dayWeatherTpl(myData));
    }
    // show3DayWeather: function(data) {
    //  var allData = [];
    //   for (var i = 1; i < data.list.length; i++) {
    //   var obj = {
    //     "name": data.city.name,
    //     "conditions": data.list[i].weather[0].main,
    //     "temp": data.list[i].temp.day,
    //     "pressure": data.list[i].pressure,
    //     "wind": data.list[i].speed,
    //     "icon": data.list[i].weather[0].icon
    //     };
    //     allData.push(obj);
    //   }
    //   $('.multipleDay').html(templates.threeDayWeatherTpl(allData));
    // },
    
    // show7DayWeather: function(data) {
    //  var allData = [];
    //   for (var i = 1; i < data.list.length; i++) {
    //   var obj = {
    //     "name": data.city.name,
    //     "conditions": data.list[i].weather[0].main,
    //     "temp": data.list[i].temp.day,
    //     "pressure": data.list[i].pressure,
    //     "wind": data.list[i].speed,
    //     "icon": data.list[i].weather[0].icon
    //     };
    //     allData.push(obj);
    //   }
    //   $('.multipleDay').html(templates.threeDayWeatherTpl(allData));
    // }
  }; //end return
}); //end module