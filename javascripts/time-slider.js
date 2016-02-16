define(function(require) {
  var $ = require("jquery");
  var templates = require("get-templates");
  var moment = require("moment");


  var amPm = moment().format("A");
  var hour = moment().format("H");
  var dblHour = moment().format("HH");
  var context = {};

    if (amPm === "AM"){
      context.greeting = "Morning";
    }
    else if(amPm === "PM" && hour >= 12 && hour <= 18){
      context.greeting = "Afternoon";
    }
    else if(amPm === "PM" && hour >= 19){
      context.greeting = "Evening";
    }

      $('.greeting').html(templates.greeting(context));

      $('body').addClass('sky-gradient-'+ dblHour);

});  



