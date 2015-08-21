$("#searchBtn").on("click", function(){
  var zipInput = $("#zipInput").val();
  var count = zipInput.length;
  console.log(zipInput.length);

    if (count === 5 ) {  
      document.getElementById("msg").innerHTML=("OK &#x2713;");
      msg.style.color="white";
    }  
    else
    {  
      msg.innerHTML=("Please enter 5 digits &#x2717;");
      msg.style.color="white";
    } 

                
  });