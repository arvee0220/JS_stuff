const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
	console.log('inside', wizardLevel); //true
};

console.log('outside', wizardLevel); //false

const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false,
};

const first = () => {
	const greet = 'Hi';
	const second = () => {
		const name = 'bobby';
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

/* Closures - a function ran. The  function executed. It's never going to execute again. BUT it's going to remember that there are references to those variables so that child scope always has access to the parent scope. */

// Currying = process of converting a function that takes  multiple arguments into a function that takes them one at a time.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

curriedMultiply(1); // (b) => a * b;
curriedMultiply()(5); // NaN;
curriedMultiply(2)(2); // 4;

// Compose = The act of putting two functions together to form a third function where the output of one function is the input of the other.
const compose = (f, g) => (a) => f(g(a));

const sum = (number) => number + 1;

compose(sum, sum)(5); // 7

/* 
	compose(sum, sum)(5) breakdown

	1. g(a) = sum(5);
		sum(5) = 6;
	2. f(g(a)) = sum(sum(5));
		sum(6) = 7;

*/

/* 
	Two elements of a pure function
		* Avoiding Side Effects = always produces the same results given the same inputs
		* functional purity/deterministic = It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.
*/


// Advanced Arrays
const array = [1, 2, 10, 16];

const double = [];

const newArray = array.forEach(element => {
	double.push(element * 2);
	console.log('element',element);
});

console.log('forEach', double);

// map, filter, reduce

// map
const mapArray = array.map(num => num * 2)

console.log('map', mapArray); // 2, 4, 20, 32

// filter
const filterArray = array.filter(num => num > 5
);

console.log('filter', filterArray);

// reduce
const reduceArray = array.reduce((accumulator, num) => {
	console.log('accumulator', accumulator)
	console.log('num', num)
	return accumulator + num
}, 0);

