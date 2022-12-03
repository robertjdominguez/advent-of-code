import data from './input.js';

// Split the guide into rounds; each round is a pair of strategies for each player
const rucksacks = data.split('\n');

// Make groups
const groups = [];
for (let i = 0; i < rucksacks.length; i += 3) {
  groups.push(rucksacks.slice(i, i + 3));
}

// Alphabet, ranked
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Placeholder for weight
let weight = 0;

groups.map((group) =>
  alphabet.map((item) => {
    if (group[0].includes(item) && group[1].includes(item) && group[2].includes(item)) {
      weight += alphabet.indexOf(item) + 1;
    }
  })
);

console.log(weight);
