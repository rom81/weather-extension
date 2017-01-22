var jsonData;
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Pittsburgh,us&appid=c3ec46e0a4c33ca46821a76492688dcc", function(json) {
	jsonData = json;
    //alert(jsonData.weather[0].main);
});

var temp = (9/5)*(parseInt(jsonData.main.temp) - 273) + 32;		// convert temp data from kelvin to fahrenheit
var main = jsonData.weather[0].main;							// main weather description, i.e. "Clouds"
var humidity = jsonData.main.humidity;
var percentCloudiness = jsonData.clouds.all;

document.getElementById("temperature").innerHTML = temp;


