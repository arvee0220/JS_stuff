// Arrays

var animals = ["tiger", "cat", "bear", "bird"];
/* 
	.pop => removes the last index in the array (doesn't need to create a new list for the result to reflect)
	.shift => remove the first index in the array (doesn't need to create a new list for the result to reflect)
	.push => add item(s) at the end part of the array's index (doesn't need to create a new list for the result to reflect)
	.concat => add item(s) at the end of the array (need to create a new variable in order for the concatenated item to reflect.)

	Other array methods in W3schools website

*/

var newAnimalList = animals.concat(["horse", "snake"])

// Objects
	// Object = keys/properties: "values"
var user = {
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMarried: false,
	spells: ["crucio", "imperio", "avada kadavra"],
	shout: function() {
		alert("Fus Ro Da!");
	}
};

var list = [
	{
		username: "andy",
		password: "secret"
	},
	{
		username: "jess",
		password: "123"
	}
];

