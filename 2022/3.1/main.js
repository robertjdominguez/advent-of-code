import data from './input.js';

// Split the guide into rounds; each round is a pair of strategies for each player
const rucksacks = data.split('\n');

// Alphabet, ranked
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Placeholder for weight
let weight = 0;

rucksacks.map((ruck) => {
  let firstCompartment = ruck.slice(0, ruck.length / 2);
  let secondCompartment = ruck.slice(ruck.length / 2);
  // Remove duplicates
  firstCompartment = firstCompartment
    .split('')
    .filter((item, index) => {
      return firstCompartment.indexOf(item) === index;
    })
    .join('');
  // Remove duplicates
  secondCompartment = secondCompartment
    .split('')
    .filter((item, index) => {
      return secondCompartment.indexOf(item) === index;
    })
    .join('');
  // Any matches?
  firstCompartment.split('').map((item) => {
    if (secondCompartment.includes(item)) {
      weight += alphabet.indexOf(item) + 1;
    }
  });
});

console.log(weight);
