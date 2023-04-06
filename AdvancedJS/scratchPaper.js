const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
];

/* const getData = async() => {
	try {
		const [ users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(res => res.json())))
		console.log("users", users);
		console.log("posts", posts);
		console.log("albums", albums);
	} catch (error) {
		console.log(error)
	}
}; */

const loopThroughUrls = url => {
	for (url of urls) {
		console.log(url)
	}
}

const getData2 = async() => {
	const arrayOfPromises = urls.map(url => fetch(url));
	for await (let req of arrayOfPromises) {
		const data = await req.json();
		console.log(data);
	}
};

getData2()