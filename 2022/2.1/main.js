import data from './input.js';

// Split the guide into rounds; each round is a pair of strategies for each player
const pairedData = data.split('\n');

// For each player
const strategies = {
  A: { X: 0, Y: -1, Z: 1 },
  B: { X: 1, Y: 0, Z: -1 },
  C: { X: -1, Y: 1, Z: 0 },
  X: { A: 0, B: -1, C: 1 },
  Y: { A: 1, B: 0, C: -1 },
  Z: { A: -1, B: 1, C: 0 },
};

// For each round, determine if the first or second player wins
const results = pairedData.map((round) => {
  const [elf, me] = round.split(' ');
  const elfStrategy = strategies[elf][me];
  const meStrategy = strategies[me][elf];
  if (elfStrategy > meStrategy) {
    return 0 + (Object.keys(strategies).indexOf(me) - 2);
  }
  if (elfStrategy < meStrategy) {
    return 6 + (Object.keys(strategies).indexOf(me) - 2);
  }
  return 3 + (Object.keys(strategies).indexOf(me) - 2);
});

const sum = results.reduce((acc, curr) => acc + parseInt(curr, 10), 0);

console.log(sum);
