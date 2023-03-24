const basket = ['apples', 'oranges', 'bananas'];
const detailedBaskets = {
	apples: 5,
	oranges: 10,
	grapes: 1000
};

// 1
for (let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
};

// 2
basket.forEach(item => console.log(item));

// for of
// Iterating => go one by one in each item/iterables of the array or strings
for (item of basket) {
	console.log(item);
};

// for in
// Enumerating => go one by one in each properties/enumerables of the object
for (item in detailedBaskets) {
	console.log(item);
};