function recurFib(n) {
  if (n < 2) {
    return n;
  }

  return recurFib(n - 1) + recurFib(n - 2);
}

function dynFib(n) {
  const val = [];
  for (let i = 0; i <= n; i++) {
    val[i] = 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  } else {
    val[1] = 1;
    val[2] = 2;
    for (let j = 3; j <= n; j++) {
      val[j] = val[j - 1] + val[j - 2];
    }
    return val[n - 1];
  }
}

console.log(recurFib(10));
console.log(dynFib(10));
