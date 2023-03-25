// What is a program?

// -allocate memory
// -parse and execute
// 	* parse = read
// 	* execute = run

// JS Engine

// Two parts
// 	Memory Heap => Where memory allocation occurs
		// ex.
		const a = 1;
		const b = 10;
		const c = 100;
	// Call Stack => Where the code is read and executed
		// ex.
		console.log('1');
		console.log('2');
		console.log('3');

// JavaScript is a single threaded language that can be non-blocking.
	// single threaded => one call stack (first in last out)

// Stack Overflow = memory leaks
	// ex. Recursion => a function that calls itself

		const foo = () => foo()
		foo();

// Asynchronous programming
	console.log('1');
	setTimeout(() => {
		console.log('2sec delay');
	}, 2000);
	console.log('3');

// Synchronous
	// Phone call => wait for the teacher to answer the call and ask the teacher your question where you don't do anything else but wait for the call to be answered.

// Asynchronous
	// Text msg => will respond once teacher got the time while student on the other hand can do other task in between.