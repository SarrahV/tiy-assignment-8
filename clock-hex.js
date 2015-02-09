


  var counter = function() {
  
    var date = new Date();

    var hours = date.getHours();
      if (hours > 12) {
          hours -= 12;
      } else if (hours === 0) {
         hours = 12;
      }
    
    var time = hours + ":" + date.getMinutes() + ":" + date.getSeconds(); 
 
    $(".place").text(time);
 }


$(function(){
  

 setInterval(counter, 1000); //this kicks off timer when DOM loads
  
  
});
  

