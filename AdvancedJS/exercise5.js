// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

const userNameArray = []

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const feMethod = array.forEach((property) => {
  userNameArray.push(property.username + "!");
});

console.log('forEach', userNameArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapMethod = array.map(objNames => objNames.username + "?")

console.log('mapMethod', mapMethod);

//Filter the array to only include users who are on team: red
const filterMethod = array.filter(objProp => objProp.team === "red").map(objProp => objProp.username);

console.log('filterMethod', filterMethod)

//Find out the total score of all users using reduce
const reduceMethod = array.reduce((acc, i) => {
  return acc + i.score;
}, 0);

console.log('reduce', reduceMethod);

// (1), what is the value of i? 71
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];

const newArray = arrayNum.map((num) => num * 2);

console.log(newArray)

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newObjArray = array.map(objProp => {
  return {
    ...objProp,
    items: objProp.items.map(item => item + "!")
  }
});

console.log(newObjArray);

/*
  The spread operator ...objProp is used to create a new object that has all the properties of objProp. This means that the new object will have the same username, team, score, and items properties as the original object. By using the spread operator, we avoid having to manually list out all the properties of the object.

Then, the items property is modified using the map() method to add "!" to the end of each item.

So, the code is essentially creating a new object with all the properties of the original object, except for the items property which is being modified.
*/