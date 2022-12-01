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

// return the index of which item is the highest
const highest = totals.indexOf(Math.max(...totals));

console.log(totals[highest]);
