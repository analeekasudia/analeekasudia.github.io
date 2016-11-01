/*
Open Weather Map Instructions:

1)
- Use either $.ajax or $.get to GET the current weather data for New York City
- Use the API docs to figure out how to properly structure the weatherUrl below (http://openweathermap.org/current)
	- Hint: search the docs for "city name"
- Be sure to include in the weatherUrl the option to receive data in your units of choice (imperial, metric, etc.)
	- Hint: search the docs for "units format"
- First, print the response to the console, then, using the API's response, print the following data to #nyc-weather:
	- The current "temp"
	- The current "hummidity"
	- The current wind "speed"

2)
- Add a form to to the index.html page that allows the user to enter a city and a state
- Capture this form's submit event and dynamically create the weatherUrl below from the user's input
- Print this result to the DOM

3) Bonus:
- Change the background color based on the temperature; ie colder temps should be blue, and hotter temps red

4) Intermediate Bonus:
- Implement handlebars.js templates :)

5) Legendary Bonus:
- Sign up for the flicker API: https://www.flickr.com/services/api/
- Use the flicker search photo library: https://www.flickr.com/services/api/flickr.photos.search.html
- Hint: you will have to convert the responses from the search API into images: https://www.flickr.com/services/api/misc.urls.html
- Instead of changing the background color based on temperature, change the background to first result the flicker API returns for the city
- Ex: user enters "Brooklyn" - search flicker API for "Brooklyn" and use the first image

*/

function processWeather(response) {
  /*
  Two ways to write the same console.log:
  console.log(response.main);
  console.log(response["main"]["temp"])
  */
  var outputWeather = "<p>Temperature (&#176;F)<strong>" + Math.ceil(response.main.temp) + "</strong></p><p>Humidity (%)<strong>" + response.main.humidity + "</strong></p><p>Wind (mph)<strong> " + Math.ceil(response.wind.speed) + "</strong></p>"; // Math.ceil will round the temperature and wind speed *up*, so it doesn't display a decimal.
  var weatherDiv = document.getElementById('nyc-weather');
  weatherDiv.innerHTML = outputWeather  // Don't do .appendChild if you're not creating a new HTML tag (?)
  document.body.style.background = temperatureToColor(response.main.temp);
}

function clampToRange(v, min, max) {
  return Math.max(min, Math.min(max, v))
}

function temperatureToColor(temperature) {
  var minTemp = 0;
  var maxTemp = 120;
  var t = clampToRange(temperature, minTemp, maxTemp)
  // clampToRange -- If 'temperature' is 100, then background color will change based on 100. If 'temperature' is 130, then background color will change based on 120.
  var red = Math.ceil((255 / maxTemp) * t);
  var blue = Math.ceil((-255 / maxTemp) * t + 255)
  console.log(red, blue); // Just curious...
  return "rgb(" + red + ", 0, " + blue + ")" // String concactination
}

// Another way to structure the above function: var processWeather = function(response){}

$(document).ready(function () {
  var apiKey = '0eadf9a9141e80aed512ae6360edf643'; // via analeekasudia.github@gmail.com
  function getWeatherForCity(city) {
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=0eadf9a9141e80aed512ae6360edf643";
    $.get(weatherUrl, processWeather);
    var cityNameSpan = document.getElementById('city-name');
    cityNameSpan.innerHTML = city;
  }
  getWeatherForCity('New York'); // Default city stats; if you want to change the default city, you only need to change it here.
  $('#city-form').submit(function(event){
    event.preventDefault();
    var input = $('#city-input')
    getWeatherForCity(input.val());
  });
  // Another way to structure the above:
  // function onCityFormSubmit(event) {
  //   event.preventDefault();
  //   console.log(input.val())
  // }
  //$('#city-form').submit(onCityFormSubmit);
});
