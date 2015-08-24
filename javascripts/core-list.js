define(function(require) {
  var $ = require("jquery");
  var bootstrap = require("bootstrap");
  var hbs = require("hbs");
  var _ = require("lodash");
  var fb = require("firebase");
  var chkinput = require("check-input");
  var get = require("get-data");
  var pop = require("populate-dom");
  var templates = require("get-templates");

  var test = function(data){
    console.log("jesse - data from server", data);
  };

  $("#getWeather").on("click", function(){
    var zipCode = chkinput.chkinput();
    console.log(zipCode);
    get.getWeather(zipCode, pop.showWeather);
  });
});
