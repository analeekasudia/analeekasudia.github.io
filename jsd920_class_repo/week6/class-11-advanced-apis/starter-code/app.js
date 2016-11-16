$(function() {
  // DOM is now ready

  // Configure the SDK and initialize it
  _500px.init({
  	sdk_key: 'a67bdaeba70f2d7b71966211fbadafa31612e78c';
  });

  // When a user clicks the "Login..." button, init the auth process using the 500px library.
  // Use jQuery to add a click-event handler for the #login button.
  // The login() method will authorize a user and redirect them back to our site with their authorization token.
  // Refresh your app and click the button to login.
  $('#login').click(function() {
  	_500px.login();
  });

  // When a successful login to 500px is made, they fire off the 'authorization_obtained' event. 
  _500px.on('authorization_obtained', function() {
  	// Successful OAuth login!

  	// After the 'authorization_obtained' event fires, use jQuery to hide .sign-in-view and show .image-results-view.
  	$('.sign-in-view').hide();
  	$('.image-results-view').show();
  });

  // Goal is to find images based on the user's location.
  // Leverage the search endpoint: https://github.com/500px/api-documentation/blob/master/endpoints/photo/GET_photos_search.md
  /* Note the 'geo' parameter in the docs:
		'geo' - A geo-location point of the format latitude, longitude, radius. Acceptable units are km or mi.
  */

  // ...But first, get the user's location.

  // Check if navigator geolocation is available from the browser.
  if (navigator.geolocation) {
  	// If it is, use the 'getCurrentPosition' method to retrieve the window's location.
  	navigator.geolocation.getCurrentPosition(function(position) {
  		var lat = position.coords.latitude;
  		var long = position.coords.longitude;
  		console.log('lat: ', lat);
  		console.log('long: ', long);
  	})
  } else {
  	$('.images').append('Sorry, the browser does not support geolocation.');
  }

  // Use the 500px.js library to make API requests...

  var radius = '25mi'; // Adjust the search radius as you see fit.

  var searchOptions = {
  	geo: lat + ', ' + long + ', ' + radius,
  	only: 'Landscapes', // Only grab landscape photos
  	image_size: 3 // This isn't necessary, but by default the images are thumbnail-sized.
  };

  _500px.api('/photos/search', searchOptions, function(response) {
  	if (response.data.photos.length == 0) {
  		alert('No photos found!');
  	} else {
  		// Handle the successful response here; i.e. custom function
  		console.log(response);
  	}
  });

  // FOR YOU TO DO:
  // Write code to handle the 'response' from 500px.
  // Your function should iterate through the 'photos' array.
  // In each iteration, append the image to the .images DOM element.
  // Make sure the appended image has a class of 'image' for styling purposes.

  // Update the API query to:
  // - Sort photos results by highest rated first.
  // - Return 28 photos instead of the default 20.
  // Read the docs! https://github.com/500px/api-documentation/blob/master/endpoints/photo/GET_photos_search.md

  // CHALLENGE:
  /*
  	Display the current user's information on the site after a successful login.
  	You'll need to look into the Users API (https://github.com/500px/api-documentation#user-resources) or Javascript SDK documentation to accomplish this.
  */

  // 500px.on
  function handleResponseSuccess(response) {
    // response is an array of objects
    // allPics.forEach(function(d) {
    $.each(allPics, function(i,d) {
      // create the dom element using jquery
      var element = $('<img>').attr("src", d.image_url).addClass('image')
      // grab the dom element and append the image
      $('.images').append(element)
    })
  }

});
