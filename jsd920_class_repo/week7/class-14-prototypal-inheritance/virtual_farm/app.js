/*

Virtual Farm

Goal: You'll be creating a virtual farm whose animals can be clicked on to get an alert displaying their name and what sound they make

Instructions:

1) Create a top-level "FarmAnimal" object that all the other farm animals will inherit from
2) FarmAnimal must have "name", "sound", and "image" instance props, and a "talk" instance method (talk should alert the animal's name and its sound)
3) Create at least three different animals for your farm (remember to inherit from "FarmAnimal" by changing the "prototype" of your animals)

	- Give each animal a name, a sound, and an image (use the web and copy an image path)

4) Once you build your animal constructors, create an instance of each animal and push that instance into the "farmAnimals" array

	ex:

	new rooter = new Rooster('Roger');
	farmAnimals.push(rooster);

5) Lastly, iterate over the "farmAnimals" array and append each of your animals to the DOM
	- You will have to create a new DOM element (a <div> is recommended)
	- This new <div> needs to have the CSS class "animal"
	- Assign this <div> random "bottom" and "left" attributes (this is so animals do not overlap each other in the DOM)

		Hint: use %-based values (bottom: 50%; left: 25%)

	- This <div>'s background should be the animal's image

		Hint: background-image: url('http://some-url-here.com')

	- Each <div> should have a click event that alerts the name of the animal and the sound that it makes
	- Append each new <div> to the body

		Hint: $('body').append(yourElement)
*/


$(document).ready(function () {

	// push all animal instances here
	var farmAnimals = [];

	function FarmAnimal(name, sound, image) {
		this.name = name;
		this.sound = sound;
		this.image = image;
		/* this is fine, but ALL of the animals will make a sound
		this.talk = function() {
			alert(this.name + ' says: ' + this.sound);
		}
		*/
	} // FarmAnimals

	farmAnimal.prototype.talk = function() {
		alert(this.name + ' says: ' + this.sound);
	}

	// create a dog
	function Dog(name, sound, image) {
		FarmAnimal.call(this, name, 'dog.jpg', 'woof')
	}

	// will inherit all properties of the prototype, including .talk
	Dog.prototype = new FarmAnimal();

	// create a new type of dog
	var dog = new Dog('Roger');

	// push the new dog into the array
	farmAnimals.push(dog) // ...or is it singular farmAnimal??

	farmAnimals.forEach(function(animal){
		// print the animal
		var elem = $('<div>').addClass('animal').css('background-image', 'url(' + animal.image + ')')
		// add animal to <body>
		$('body').append(elem).click(function(el){
			alert(animal.sound + ', ' + animal.name);
		});
	})

/*
	console.log(cow);
	console.log(dog);
	console.log(rooster);

	var makeFarm = document.getElementById('farm');
	makeFarm.innerHTML = ;

	$('.cow').click(function() {
		alert("My name is " + this.name + " and I say " + this.sound)
	});
	$('.dog').click(function() {
		alert("My name is " + this.name + " and I say " + this.sound)
	});
	$('.rooster').click(function() {
		alert("My name is " + this.name + " and I say " + this.sound)
	});
*/

})
