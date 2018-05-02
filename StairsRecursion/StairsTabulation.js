//Davis' Staircase Tabulation
//https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem

function stairs(n) {
  const arr = [0, 1, 2, 4]
  if (n < 4) return arr[n];
  for (let i = 4; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  return arr[n]
}