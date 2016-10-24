// FIZZBUZZ
// Using loops, boolean logic, and if/else statements, incrementally build the common fizzbuzz loop.
// - In the loop, every time a number is divisible by *3*, instead of logging the number itself, the word "fizz" should appear.
// - If the number is divisible by *5*, the word "buzz" should be logged.
// - If the number is divisible by both *3* and  *5*, then the word "fizzbuzz" should be logged.

// Step 1: Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100.
// Step 2: Add an `if/else` statement that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value.
// Step 3: Add an `else if` clause that logs the string `"buzz"` if the value being iterated over is divisible by `5`.
// Step 4: Add an additional `else if` clause that logs the string `"fizzbuzz"` if the value being iterated over is divisible by both `3` and `5`.

for(var i = 0; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(i, "fizzbuzz");
	} else if (i % 3 === 0) {
		console.log(i, "- fizz");
		// (i % 3 === 0) asks: When I divide 'i' by 3, do I get 0 as a remainder, i.e. is 'i' fully divisible by 3? (i % 3) asks: Do I get any remainder at all?
	} else if (i % 5 === 0) {
		console.log(i, "- buzz");
	} else {
		console.log(i, '- ');
	}
}

// Note on printing numbers:
/*

Print all even numbers between 0 and 100, inclusively (i.e. including 0):

for (i = 0l i <= 100; i++) {
	if (i % 2 === 0)
	console.log(i);
}

...but a simpler way is...
for (i = 0; i <= 100; i +=2) {
	console.log(i);
}

*/
