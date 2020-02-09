const { TestArray } = require("./test_array.js");

function quick_sort(arr) {
  if (arr.length === 0) {
    return [];
  }

  const left = [];
  const right = [];
  const pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quick_sort(left).concat(pivot, quick_sort(right));
}

const arr = new TestArray(10);
arr.toString();
console.log(quick_sort(arr.dataStore));
