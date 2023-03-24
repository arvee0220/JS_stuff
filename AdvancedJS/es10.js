// .flat() => used for arrays
// .flatMap(obj => {})

const array = [1, 2, 3, 4, 5];

array.flat(); // [1, 2, 3, 4, 5]

const array2 = [1, [2, 3], [4, 5]];

array2.flat(); // [1, 2, 3, 4, 5]

const array3 = [1, 2, [3, 4, [5]]];

array3.flat(); // [1, 2, 3, 4, [5]]

array3.flat(2); // [1, 2, 3, 4, 5]

const entries = ['bob', 'sally',,,,,,'cindy']

entries.flat(); // ['bob', 'sally', 'cindy']

const userEmail = '           eddytheeagle@gmail.com'
const userEmail2 = 'jonnydangerous@gmail.com        '

console.log(userEmail.trimStart()); // eddytheeagle@gmail.com
console.log(userEmail2.trimEnd()); // jonnydangerous@gmail.com

const userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['jimmy', 18]];

// Convert array into object
Object.fromEntries(userProfiles);

// Convert object into array
Object.entries(userProfiles);

// try & catch
try {
	true + 'hi'
} catch {
	console.log('you messed up')
};

try {
	bob + 'hi'
} catch (error) {
	console.log('you messed up' + error)
};