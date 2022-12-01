import data from './input.js';

// Split the data variable into an array of strings
const dataArray = data.split('\n');

// For every set of items before an empty string, group them together
const groupedData = dataArray.reduce(
  (groupedData, item) => {
    if (item === '') {
      groupedData.push([]);
    } else {
      groupedData[groupedData.length - 1].push(item);
    }
    return groupedData;
  },
  [[]]
);

// For each group, convert the array items to integers and then sum them together
const totals = groupedData.map((elf) => {
  const sum = elf.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  return sum;
});

// Above is from the 1.1 solution and below builds on it

// Order them from highest to lowest and grab only the top three elves
const topThree = totals.sort((a, b) => b - a).slice(0, 3);

// Add 'em up
const topThreeTotal = topThree.reduce((acc, curr) => acc + parseInt(curr, 10), 0);

console.log(topThreeTotal);
