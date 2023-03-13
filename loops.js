var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

for (let i = 0; i < todos.length; i++) {
	console.log("Todos for loop", todos[i])
}

let i = 0;
// In while loop it checks the conditions before executing the command
while (i < todos.length) {
	console.log("todos while loop", todos[i])
	i++;
}

i = 0;
// In do while loop it execute the command first before checking conditions
do {
	console.log("todos do while loop", todos[i]);
	i++;
} while (i < todos.length)

// forEach
/* todos.forEach(function(todo, i) {
	console.log(todo, i)
}) */

const logTodos = (todo, i) => {
	console.log(todo, i)
}

todos.forEach(logTodos)
