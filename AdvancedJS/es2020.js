// ES2020!
/*
	BigInt
	Nullish Coalescing Operator ??
	Optional Chaining Operator ?.
*/

typeof 1n; // BigInt

9007199254740991 + 10; // 9007199254741000
9007199254740991n + 10n; // 9007199254741001n



// Optional Chaining Operator ?
let will_pokemon = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.4,
		weight: 6,
		power: ''
	}
}

let andrei_pokemon = {
	raichu: {
		species: 'Mouse Pokemon',
		height: 0.8,
		weight: 30,
		power: ''
	}
}

let weight = will_pokemon.pikachu.weight;

let weight2 = andrei_pokemon?.pickachu?.weight;

let weight3 = andrei_pokemon?.raichu?.weight;

let powah = will_pokemon?.pikachu?.power || 'no power'

console.log('weight2', weight2);
console.log('power', powah);