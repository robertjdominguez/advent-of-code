import data from './input.js';

// Make pairs
const pairs = data.split('\n');
const arrayPairs = pairs.map((pair) => pair.split(','));

// create array of numbers from range
const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
};

// For checking
const isSubset = (parentArray, subsetArray) => {
  return subsetArray.every((el) => {
    return parentArray.includes(el);
  });
};

let consumedPairs = 0;

arrayPairs.map((pair) => {
  // first elf
  let firstScope = pair[0].split('-');
  let firstRange = range(parseInt(firstScope[0]), parseInt(firstScope[firstScope.length - 1]));
  // second elf
  let secondScope = pair[1].split('-');
  let secondRange = range(parseInt(secondScope[0]), parseInt(secondScope[secondScope.length - 1]));
  // check 'em
  isSubset(firstRange, secondRange) || isSubset(secondRange, firstRange) ? consumedPairs++ : null;
});

console.log(consumedPairs);
