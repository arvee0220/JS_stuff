var database = [
	{
		username: "JSVirtuoso",
		password: "12345"
	},
	{
		username: "ReactSavant",
		password: "1234"
	},
	{
		username: "MERNExpert",
		password: "123"
	}
];

var newsfeed = [
	{
		username: "JSVirtuoso",
		timeline: "Life gets easier when you reach the pinnacle of success."
	},
	{
		username: "ReactSavant",
		timeline: "React is such a childsplay."
	},
	{
		username: "MERNExpert",
		timeline: "I eat MERN for breakfast."
	}
];

function isUserValid(user, pass) {
	for (let i = 0; i < database.length - 1; i++) {
		if (database[i].username === user && database[i].password === pass) {
			return true;
		}
	}
	return alert("Sorry, wrong username and password");
}

function signIn(user, pass) {
	for (let i = 0; i < database.length; i++) {
		if (isUserValid(user, pass) && newsfeed[i].username != user) {
			console.log(newsfeed[i].timeline);
		}
	}
};

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(userNamePrompt, passwordPrompt);