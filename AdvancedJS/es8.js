// .padStart();
// ex.
'Turtle'.padStart(10);

// .padEnd();
// ex.
'Turtle'.padEnd(10);

// Object.values, Object.entries & Object.keys
Object.keys
Object.values
Object.entries

let obj = {
	username0: 'Santa',
	username2: 'Rudolf',
	username3: 'Mr.Grinch'
};

Object.keys(obj).forEach((keys, index) => {
	console.log(keys, obj[keys]);
	console.log('index', index);
});

Object.values(obj).forEach(values => {
	console.log(values);
});

Object.entries(obj).map(values => {
	return values[1] + values[0].replace('username', '');
});