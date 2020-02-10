function max(a, b) {
  return a > b ? a : b;
}

function knapsack(capacity, size, value, n) {
  if (n == 0 || capacity == 0) {
    return 0;
  }

  if (size[n - 1] > capacity) {
    return knapsack(capacity, size, value, n - 1);
  } else {
    return max(
      value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1),
      knapsack(capacity, size, value, n - 1)
    );
  }
}

function dKnapsack(capacity, size, value, n) {
  const K = [];
  for (let i = 0; i <= n; i++) {
    K[i] = [];
  }

  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i == 0 || w == 0) {
        K[i][w] = 0;
      } else if (size[i - 1] <= w) {
        K[i][w] = max(value[i - 1] + K[i - 1][w - size[i - 1]], K[i - 1][w]);
      } else {
        K[i][w] = K[i - 1][w];
      }
    }
  }
  console.log(K);
  return K[n][capacity];
}

const value = [4, 5, 10, 11, 13];
const size = [3, 4, 7, 8, 9];

const capacity = 16;
const n = 5;

console.log(knapsack(capacity, size, value, n));
console.log(dKnapsack(capacity, size, value, n));
