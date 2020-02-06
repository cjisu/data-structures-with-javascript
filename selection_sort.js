const { TestArray } = require("./test_array.js");

function selectionSort(tArr) {
  for (let outer = 0; outer <= tArr.dataStore.length - 2; ++outer) {
    minIdx = outer;
    for (let inner = outer + 1; inner <= tArr.dataStore.length - 1; ++inner) {
      if (tArr.dataStore[inner] < tArr.dataStore[minIdx]) {
        minIdx = inner;
      }
    }
    tArr.swap(tArr.dataStore, outer, minIdx);
  }
}
const arr = new TestArray(100);
arr.toString();
selectionSort(arr);
console.log("sorted !!");
arr.toString();
