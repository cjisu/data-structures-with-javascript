const { TestArray } = require("./test_array.js");

function bubbleSort(tArr) {
  for (let outer = tArr.dataStore.length; outer >= 2; --outer) {
    for (let inner = 0; inner <= outer; ++inner) {
      if (tArr.dataStore[inner] > tArr.dataStore[inner + 1]) {
        tArr.swap(tArr.dataStore, inner, inner + 1);
      }
    }
  }
}

const arr = new TestArray(100);
arr.toString();
bubbleSort(arr);
console.log("sorted !!");
arr.toString();
