
function getWeather()
{       if(navigator.geolocation)
    {  navigator.geolocation.getCurrentPosition(getPosition);  }
    else {   $('#result').append("Geolocation not supported");}
}
 function getPosition(position){ 
     $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat='+ position.coords.latitude +'&lon='+ position.coords.longitude +'&units=metric&appid=a1d817d2684f29127cf0353e37c7d4b6' , function(data){
               
   $('#result').append( "  Name location:"+ data.name );
     $('#result1').append( "  Temperature :"+ data.main.temp +"°C");
         $('#result2').append( "  Humidity :"+ data.main.humidity+" %");
     $('#result3').append( "  Wind:"+ data.wind.speed + " meter/sec");
     $('#result4').append("   Weather: "+data.weather[0].description);}          
);  
}



