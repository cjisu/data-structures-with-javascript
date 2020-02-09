const { TestArray } = require("./test_array.js");

function mergeSort(arr, low, high) {
  if (low < high && high - low > 1) {
    const mid = Math.round((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid, high);
    mergeArrays(arr, low, mid, high);
  }
}

function mergeArrays(arr, left, mid, right) {
  const leftArr = new Array(mid - left + 1);
  const rigthArr = new Array(right - mid + 1);

  let k = mid;
  for (let i = 0; i < rigthArr.length - 1; i++) {
    rigthArr[i] = arr[k];
    k++;
  }

  k = left;
  for (let i = 0; i < leftArr.length - 1; i++) {
    leftArr[i] = arr[k];
    k++;
  }

  rigthArr[rigthArr.length - 1] = Infinity;
  leftArr[leftArr.length - 1] = Infinity;

  let m = 0;
  let n = 0;
  for (let k = left; k < right; k++) {
    if (leftArr[m] <= rigthArr[n]) {
      arr[k] = leftArr[m];
      m++;
    } else {
      arr[k] = rigthArr[n];
      n++;
    }
  }
}

const arr = new TestArray(10);
arr.toString();
mergeSort(arr.dataStore, 0, arr.dataStore.length);
arr.toString();
