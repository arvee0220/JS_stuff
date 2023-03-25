const flattened = [[0,1], [2,3], [4,5]].reduce(
	(acc, arr) => {
		console.log('array', arr);
		console.log('accumulator', acc);
		return acc.concat(arr);
	}, []);


// debugger
const flattened2 = [[0,1], [2,3], [4,5]].reduce(
	(acc, arr) => {
		debugger;
		return acc.concat(arr);
	}, []);