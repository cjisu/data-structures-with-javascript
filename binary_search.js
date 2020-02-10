function binarySearch(arr, data) {
  let upperBound = arr.length - 1;
  let lowerBound = 0;
  while (lowerBound <= upperBound) {
    let mid = Math.floor((upperBound + lowerBound) / 2);
    if (arr[mid] < data) {
      lowerBound = mid + 1;
    } else if (arr[mid] > data) {
      upperBound = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 5));
