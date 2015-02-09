


  var counter = function() {
  
    var date = new Date();

    var min = date.getMinutes();

    var sec = date.getSeconds(); 

    var hours = date.getHours();
      if (hours > 12) {
         hours -= 12;
        } else if (hours === 0) {
         hours = 12;
        };

            if(hours.toString().length <2){
                hours = "0" + hours;
              }
            
             if(min.toString().length <2){
                min = "0" + min;
              }

             if(sec.toString().length <2){
                sec = "0" + sec;
              };


    var time = "#" + hours + min + sec; 

    var colors = time;

    console.log(colors);
 
    $(".place").text(time);
    
    $(".myClock").css("background-color", colors);
 }


$(function(){
  

 setInterval(counter, 1000); //this kicks off timer when DOM loads
  
  
});
  

