function lcs(word1, word2) {
  let max = 0;
  let index = 0;
  const lcsarr = [];

  for (let i = 0; i <= word1.length + 1; i++) {
    lcsarr[i] = [];
    for (let j = 0; j <= word2.length + 1; j++) {
      lcsarr[i][j] = 0;
    }
  }

  for (let i = 0; i <= word1.length; i++) {
    for (let j = 0; j <= word2.length; j++) {
      if (i === 0 || j === 0) {
        lcsarr[i][j] = 0;
      } else {
        if (word1[i - 1] === word2[j - 1]) {
          lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
        } else {
          lcsarr[i][j] = 0;
        }
      }
      if (max < lcsarr[i][j]) {
        max = lcsarr[i][j];
        index = i;
      }
    }
  }

  let str = "";
  if (max === 0) {
    return "";
  } else {
    for (let i = index - max; i <= max; i++) {
      str += word2[i];
    }
    return str;
  }
}
const w1 = "abbcc";
const w2 = "dbbcc";

console.log(lcs(w1, w2));
