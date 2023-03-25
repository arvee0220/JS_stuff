// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const cleanRoom = (arr) => {
	// Separation of variable types
	let numArr = [];
	let strArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			numArr.push(arr[i]);
		} else if (typeof arr[i] === 'string') {
			strArr.push(arr[i]);
		};
	};

	// Sorting values in ascending order. If the result of a - b is negative, a is sorted first before b, if the result is positive, b is sorted first before a. No sorting is performed if the result of a - b is 0.
	numArr.sort((a, b) => {
		return a - b;
	});

	// For sorting string
	strArr.sort();

	// Grouping numbers into sub-arrays
	let result = [];
	let temp = [];

	for (let i = 0; i < numArr.length; i++) {
		// if current value is the same from the previous value add it to the temp array
		if (numArr[i] === numArr[i-1]) {
			temp.push(numArr[i]);
		}
		// if temp is not empty and the current value differs from the previous value push the exisiting value/array from temp into result and empty the temp and push the current value.
		else if (temp.length) {
			result.push(temp);
			temp = [];
			temp.push(numArr[i]);
		}
		// if temp is empty push the current value
		else {
			temp.push(numArr[i]);
		}
	}

	// if temp is not empty push it to the result
	if (temp.length) {
		result.push(temp);
	};

	// Combine the sub-array of numbers and string array
	if (strArr.length) {
		result.push(strArr);
	}

	return result;

}

console.log(cleanRoom(array));

// Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]
const target = (a, b) => {
	for (let num = 0; num < a.length; num++) {
		for (let num2 = num + 1; num2 < a.length; num2++) {
			if (a[num] + a[num2] === b) {
				return [a[num], a[num2]];
			};
		};
	};

	return null;
};

// Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

const hexToRgb = (hex) => {
	
	if (/^rgb\(/i.test(hex)) {
	  return hex;
	};
	
	let r = parseInt(hex.substring(1, 3), 16);
	let g = parseInt(hex.substring(3, 5), 16);
	let b = parseInt(hex.substring(5, 7), 16);
	return `rgb(${r}, ${g}, ${b})`;
};