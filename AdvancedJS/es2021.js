const str = "ZTM is the best of the best";

// .replaceAll(tobereplaced, replacedby) => replaces all character that is equal to the input
// .replace(tobereplaced, replacedby) => replace the first character to be found

str.replaceAll('best', 'coolest'); // "ZTM is the coolest of the coolest"

str.replace('best', 'coolest'); // "ZTM is the coolest of the best"