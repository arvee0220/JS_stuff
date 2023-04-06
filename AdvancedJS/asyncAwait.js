// From
/* movePlayer(100, 'Left')
	.then(() => movePlayer(400, 'Left'))
	.then(() => movePlayer(10, 'Right'))
	.then(() => movePlayer(330, 'Left')) */

// (ES8 update) To
/* const playerStart = async() => {
	const firstMove = await movePlayer(100, "Left");
	const secondMove = await movePlayer(400, "Left");
	const thirdMove = await movePlayer(10, "Right");
	const fourthMove = await movePlayer(330, "Left");
}; */


// From
fetch('https://jsonplaceholder.typicode.com/users')
	.then(res => res.json())
	.then(console.log)

// To
const fetchUsers = async() => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	console.log("test", data[0]);
};

fetchUsers();


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


const getData = async() => {
	try {
		const [ users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(res => res.json())))
		console.log("users", users);
		console.log("posts", posts);
		console.log("albums", albums);
	} catch (error) {
		console.log(error)
	}
};

getData();

// finally()
const swUrls = [
	'https://swapi.co/api/people/1',
	'https://swapi.co/api/people/2',
	'https://swapi.co/api/people/3',
	'https://swapi.co/api/people/4'
];

Promise.all(swUrls.map(url => {
	return fetch(url).then(people => people.json())
}))
	.then(array => {
		console.log("1", array[0])
		console.log("2", array[1])
		console.log("3", array[2])
		console.log("4", array[3])
})
	.catch(error => console.log(error))
	.finally(() => console.log("extra"))

// for await of
const getData1 = async() => {
	try {
		const [ users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(res => res.json())))
		console.log("users", users);
		console.log("posts", posts);
		console.log("albums", albums);
	} catch (error) {
		console.log(error)
	}
};

const loopThroughUrls = url => {
	for (url of urls) {
		console.log(url)
	}
};

const getData2 = async() => {
	const arrayOfPromises = urls.map(url => fetch(url));
	for await (let req of arrayOfPromises) {
		const data = await req.json();
	}
};

getData2();