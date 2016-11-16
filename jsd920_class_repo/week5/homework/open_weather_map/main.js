// Refer to 'solutions' folder for final .js file & compare

// put everything in document.ready()
$(document).ready(function () {

  function processWeather(response) {
    var outputWeather = "<p>Temperature (&#176;F)<strong>" + Math.ceil(response.main.temp) + "</strong></p><p>Humidity (%)<strong>" + response.main.humidity + "</strong></p><p>Wind (mph)<strong> " + Math.ceil(response.wind.speed) + "</strong></p>"; // Math.ceil will round the temperature and wind speed *up*, so it doesn't display a decimal.
    var weatherDiv = document.getElementById('nyc-weather');
    weatherDiv.innerHTML = outputWeather
    document.body.style.background = temperatureToColor(response.main.temp);
  }

  // var apiKey = '0eadf9a9141e80aed512ae6360edf643'; ..redundant if already in the URL after APPID=___
  function getWeatherForCity(city) {
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=0eadf9a9141e80aed512ae6360edf643";
    $.get(weatherUrl, processWeather);
    // .done(function(response){}) (don't put *all* of your code in here)
    // .fail(function(xhr){}) (acronym means XML HTTP Request)
    var cityNameSpan = document.getElementById('city-name');
    cityNameSpan.innerHTML = city;
  }

  getWeatherForCity('New York');
  $('#city-form').submit(function(event){
    event.preventDefault();
    var input = $('#city-input')
    getWeatherForCity(input.val());
  });

  function clampToRange(v, min, max) {
    return Math.max(min, Math.min(max, v))
  }

  function temperatureToColor(temperature) {
    var minTemp = 0;
    var maxTemp = 120;
    var t = clampToRange(temperature, minTemp, maxTemp)
    var red = Math.ceil((255 / maxTemp) * t);
    var blue = Math.ceil((-255 / maxTemp) * t + 255)
    console.log(red, blue);
    return "rgb(" + red + ", 0, " + blue + ")"
  }

});

// Look into .try{}, .catch{}, and .finally{}