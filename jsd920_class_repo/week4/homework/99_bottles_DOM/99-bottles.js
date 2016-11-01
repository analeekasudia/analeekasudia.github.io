// INDEPENDENT PRACTICE
// Making a favorites list: DOM manipulation


function addToList(list, newThing) {
	var newThingLi = document.createElement('li');
	var newThingText = document.createTextNode(newThing);
	newThingLi.appendChild(newThingText);
	list.appendChild(newThingLi);
}

window.onload = function() {

	var thingList = document.getElementById('fav-list');

	var bottlesOfBeer = 'bottles of beer';
	for (var i = 99; i > 0; i--) {
		if (i == 1) {
			bottlesOfBeer = 'bottle of beer';
		};
		addToList(thingList, i + " "+ bottlesOfBeer +" on the wall, " + i + " bottles of beer. Take one down, pass it around, " + (i-1) + " bottles of beer on the wall." + "\n");
	};
};