// pass by value
let a = 5;
let b = a;

b++;

console.log(a, b);

// pass by reference
let obj1 = {
	username: 'RV',
	password: '12345'
}

let obj2 = obj1;

obj2.password = '1234'

console.log(obj1, obj2)

//  copy obj to diff memory
let objct = {
	a: 'a',
	b: 'b',
	c: 'c'
}

let clone = Object.assign({}, objct);
let clone2 = {...objct}

objct.c = 5;
console.log(objct);
console.log(clone);
console.log(clone2);

// Shallow clone (only clones the first layer of object)
let objct1 = {
	a: 'a',
	b: 'b',
	c: {
		deep: 'try and copy me'
	}
}

let cloneX = Object.assign({}, objct1);
let cloneY = {...objct1};

// Deep clone
let superClone = JSON.parse(JSON.stringify(objct1));

objct1.c.deep = 'Hahaha';
console.log(objct1); // {a: 'a', b: 'b', c: {deep: 'Hahaha'}}
console.log(cloneX); // {a: 'a', b: 'b', c: {deep: 'Hahaha'}}
console.log(cloneY); // {a: 'a', b: 'b', c: {deep: 'Hahaha'}}
console.log(superClone);