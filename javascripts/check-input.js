define(function(require) {
  return {
    chkinput: function(){   
      var zipInput = $("#zipInput").val();
      var count = zipInput.length;
      if (count === 5 ){  
        document.getElementById("msg").innerHTML=("&#x2713; OK ");
        msg.style.color="white";
      } else {  
        msg.innerHTML=(" &#33; Please enter 5 digits");
        msg.style.color="white";
      } 
      return zipInput;   
    }
  };
});  



