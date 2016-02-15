define(function(require) {
  var $ = require("jquery");
  var templates = require("get-templates");
  var moment = require("moment");

  var myDataArray =[];
  
  var now = moment().format();
  console.log("now moments:",now);

  var date = new Date();
  var hours = date.getHours();
  var time = date.getTime();
  
    console.log("date:",date);
    console.log("time:",time);
    console.log("hours:",hours);
  
  
// var theyear = date.getFullYear();
// var themonth = date.getMonth()+1;
// var thetoday = date.getDate();
// console.log("The time is:", time);
// console.log("The year is:", theyear);
// console.log("The month is:", themonth);
// console.log("The day is:", thetoday);
  return {
    showWeather: function(data) {
      console.log(data);
      var fixedTemp = data.main.temp.toFixed(0);
      var fixedTempMin = data.main.temp_min.toFixed(0);
      var fixedTempMax = data.main.temp_max.toFixed(0);
      var fixedWind = data.wind.speed.toFixed(0);
      var id = data.weather[0].id;

      var myData = {
        "name": data.name,
        "conditions": data.weather[0].description,
        "temp": fixedTemp,
        "tempMin": fixedTempMin,
        "tempMax": fixedTempMax,
        "humidity": data.main.humidity,
        "pressure": data.main.pressure,
        "wind": fixedWind,
        "icon": id
     };
          myDataArray.push(myData);
          $('.todayInfo').html(templates.dayWeatherTpl(myData));
          icon();
    }
   
  }; //end return

    function icon(){
      var wIcon = myDataArray[0].icon;
        if(wIcon >= 200 && wIcon <= 299){
            $('#icon').addClass('wi wi-thunderstorm');
            console.log("true 200");
          }
          else if(wIcon >= 300 && wIcon <= 399){
            $('#icon').addClass('wi wi-sprinkle');
            console.log("true 300");
          }
          else if(wIcon >= 500 && wIcon <= 599){
            $('#icon').addClass('wi wi-showers');
          }
          else if(wIcon >= 600 && wIcon <= 699){
            $('#icon').addClass('wi wi-snow');
            console.log("true 600");
          }
          else if(wIcon === 800){
            $('#icon').addClass('wi wi-day-sunny');
            console.log("true 800");
          }
          else if (wIcon > 800 && wIcon < 806){
            $('#icon').addClass('wi wi-cloudy');
            console.log("true over 800");
          }
    } //end icon()

}); //end module