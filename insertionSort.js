const { TestArray } = require("./test_array.js");

function insertionSort(tArr) {
  let tmp;
  let inner;
  for (let outer = 1; outer <= tArr.dataStore.length - 1; ++outer) {
    tmp = tArr.dataStore[outer];
    inner = outer;
    while (inner > 0 && tArr.dataStore[inner - 1] >= tmp) {
      tArr.dataStore[inner] = tArr.dataStore[inner - 1];
      --inner;
    }
    tArr.dataStore[inner] = tmp;
  }
}
const arr = new TestArray(100);
arr.toString();
insertionSort(arr);
console.log("sorted !!");
arr.toString();
