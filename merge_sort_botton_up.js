const { TestArray } = require("./test_array.js");

function mergeSort(tArr) {
  if (tArr.dataStore.length < 2) {
    return;
  }

  let step = 1;
  let left, right;

  while (step < tArr.dataStore.length) {
    left = 0;
    right = step;

    while (right + step <= arr.dataStore.length) {
      mergeArrays(tArr.dataStore, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
    }

    if (right < tArr.dataStore.length) {
      mergeArrays(
        tArr.dataStore,
        left,
        left + step,
        right,
        tArr.dataStore.length
      );
    }

    step *= 2;
  }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  const leftArr = new Array(stopLeft - startLeft + 1);
  const rigthArr = new Array(stopRight - startRight + 1);

  let k = startRight;
  for (let i = 0; i < rigthArr.length - 1; i++) {
    rigthArr[i] = arr[k];
    k++;
  }

  k = startLeft;
  for (let i = 0; i < leftArr.length - 1; i++) {
    leftArr[i] = arr[k];
    k++;
  }

  rigthArr[rigthArr.length - 1] = Infinity;
  leftArr[leftArr.length - 1] = Infinity;

  let m = 0;
  let n = 0;
  for (let k = startLeft; k < stopRight; k++) {
    if (leftArr[m] <= rigthArr[n]) {
      arr[k] = leftArr[m];
      m++;
    } else {
      arr[k] = rigthArr[n];
      n++;
    }
  }
}

const arr = new TestArray(100);
arr.toString();
mergeSort(arr);
arr.toString();
