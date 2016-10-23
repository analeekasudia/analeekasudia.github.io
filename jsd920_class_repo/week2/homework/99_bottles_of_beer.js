// 99 BOTTLES OF BEER
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer")
// Hint: you will want to use a for loop that starts at 99 and counts down to 0

var bottlesOfBeer = 'bottles of beer';
for (var i = 99; i > 0; i--) {
	if (i == 1) {
		bottlesOfBeer = 'bottle of beer';
	}
	console.log(i + " "+ bottlesOfBeer +" on the wall, " + i + " bottles of beer. Take one down, pass it around, " + (i-1) + " bottles of beer on the wall." + "\n");
}

// Note on ++/-- placement:

/*
var j = 100;
console.log(j);
var k = j++ // first assigns j to k, then makes j's value 101
console.log(k,j);
j = 100;
console.log(j);
var z = ++j; // first makes j's value 101, then assigns to z
console.log(z,j);
