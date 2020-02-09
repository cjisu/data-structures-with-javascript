const { TestArray } = require("./test_array.js");

function shellSort(tArr) {
  const gaps = [5, 3, 1];
  let j;
  for (let g = 0; g < gaps.length; g++) {
    for (let i = gaps[g]; i < tArr.dataStore.length; i++) {
      let tmp = tArr.dataStore[i];
      for (
        j = i;
        j >= gaps[g] && tArr.dataStore[j - gaps[g]] > tmp;
        j -= gaps[g]
      ) {
        tArr.dataStore[j] = tArr.dataStore[j - gaps[g]];
      }
      tArr.dataStore[j] = tmp;
    }
  }
}

function shellSortWithDynamicGap(tArr) {
  let size = tArr.dataStore.length;
  let g = 1;

  while (g < parseInt(size / 3)) {
    g = g * 3 + 1;
  }

  while (g >= 1) {
    for (let i = g; i < size; i++) {
      for (
        let j = i;
        j >= g && tArr.dataStore[j] < tArr.dataStore[j - g];
        j -= g
      ) {
        tArr.swap(tArr.dataStore, j, j - g);
      }
    }
    g = (g - 1) / 3;
  }
}

const arr = new TestArray(100);
arr.toString();
shellSort(arr);
arr.toString();

const arr2 = new TestArray(100);
arr2.toString();
shellSortWithDynamicGap(arr2);
arr2.toString();
