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

  getWeatherForCity('New York, New York');

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

  function getWeatherForCityInSpan(cityName, cityWeatherSpan) {
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&APPID=0eadf9a9141e80aed512ae6360edf643";
    $.get(weatherUrl, function(response) {
      var outputTemp = Math.ceil(response.main.temp);
      cityWeatherSpan.innerHTML = outputTemp;
    })
  }

  function getWeatherForAllCities() {
    var citiesContainer = document.getElementById('cities');
    var cities = citiesContainer.children; // grab all the children, the <li>, within #cities 'ul'
    var i;
    for (i = 0; i < cities.length; i++) { // looping through all cities
      var cityLi = cities[i]; // saving one city in the 'cityLi' var
      var cityKids = cityLi.children;
      var cityNameSpan = cityKids[0]; // city name is in first span
      var cityWeatherSpan = cityKids[1]; // city weather is in second span
      var cityName = cityNameSpan.innerHTML;
      getWeatherForCityInSpan(cityName, cityWeatherSpan);
    }
  }

  getWeatherForAllCities();

});

// Look into .try{}, .catch{}, and .finally{}