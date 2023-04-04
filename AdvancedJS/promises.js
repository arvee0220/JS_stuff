// A promise is an object that may produce a single value some time in the future either a resolved value or reason that is not resolved(rejected).

// const el = document.querySelector("h1");

// el.addEventListener("click", submitForm);

// callback pyramid of doom
/* movePlayer(100, 'Left', () => {
	movePlayer(400, 'Left', () => {
		movePlayer(10, 'Right', () => {
			movePlayer(330, 'Left', () => {
			});
		});
	});
}); */

// Promise
/* movePlayer(100, 'Left')
	.then(() => movePlayer(400, 'Left'))
	.then(() => movePlayer(10, 'Left'))
	.then(() => movePlayer(330, 'Left')); */

const promise = new Promise((resolve, reject) => {
	if (true) {
		resolve('Stuff Worked');
	} else {
		reject('Error, it broke')
	}
})

promise
	.then(result => result + '!')
	.then(result2 => result2 + '?')
	.catch(() => console.log('error!'))
	.then(result3 => {
		console.log(result3 + '!');
	})


const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
	return fetch(url).then(res => res.json())
})).then(result => {
		console.log(result[0])
		console.log(result[1])
		console.log(result[2])
	}).catch(() => console.log('error'))