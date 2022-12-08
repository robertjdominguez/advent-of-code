import data from './input.js';

// Make pairs
const pairs = data.split('\n');
const arrayPairs = pairs.map((pair) => pair.split(','));

// create array of numbers from range
const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
};

let overlappingPairs = 0;

arrayPairs.map((pair) => {
  // first elf
  let firstScope = pair[0].split('-');
  let firstRange = range(parseInt(firstScope[0]), parseInt(firstScope[firstScope.length - 1]));
  // second elf
  let secondScope = pair[1].split('-');
  let secondRange = range(parseInt(secondScope[0]), parseInt(secondScope[secondScope.length - 1]));
  // check 'em
  firstRange.some((el) => secondRange.includes(el)) && overlappingPairs++;
});

console.log(overlappingPairs);
