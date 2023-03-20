// reference type
[] === [];

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

object1 === object2; // true
object1 === object3; //false

// context vs scope

const object4 = {
	a: () => {
		console.log(this);
	}
}

// instantiation
class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type)
	}

	play() {
		console.log(`WEEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Fire Wizard');
const wizard2 = new Wizard('Shawn', 'Dark Wizard');

// Classical Inheritance
/* 
	var Player = (name, type) => {
		this.name = name;
		this.type = type;
	}

	Player.prototype.introduce = () {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}

	var wizard1 = new Wizard('Shelly', 'Fire Wizard');
	var wizard2 = new Wizard('Shawn', 'Dark Wizard');

	wizard1.play = () {
		console.log(`WEEEEE I'm a ${this.type}`);
	}

	wizard2.play = () {
		console.log(`WEEEEE I'm a ${this.type}`);
	}
*/
