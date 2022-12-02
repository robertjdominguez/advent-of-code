import data from './input.js';

// Split the guide into rounds; each round is a pair of strategies for each player
const pairedData = data.split('\n');

// For each player
const strategies = {
  A: { A: 0, B: -1, C: 1 },
  B: { A: 1, B: 0, C: -1 },
  C: { A: -1, B: 1, C: 0 },
};

// POV of the elf
const elfOutcomes = {
  X: 1,
  Y: 0,
  Z: -1,
};

// Using the round's outcome, determine my move
const findStrat = (obj, value) => Object.keys(obj).find((key) => obj[key] === value);

// What do I need to choose to reach the outcome listed as the second element of each array?
const results = pairedData.map((round) => {
  const [elf, outcome] = round.split(' ');
  const myStrategy = findStrat(strategies[elf], elfOutcomes[outcome]);
  if (outcome === 'X') {
    return 0 + (Object.keys(strategies).indexOf(myStrategy) + 1);
  }
  if (outcome === 'Y') {
    return 3 + (Object.keys(strategies).indexOf(myStrategy) + 1);
  }
  if (outcome === 'Z') {
    return 6 + (Object.keys(strategies).indexOf(myStrategy) + 1);
  }
});

const sum = results.reduce((acc, curr) => acc + parseInt(curr, 10), 0);

console.log(sum);
