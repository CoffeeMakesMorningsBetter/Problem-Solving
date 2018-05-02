//Recursion: Davis' Staircase Memoization
//https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem
function stairs(n, memo = []) {
  if (n <= 0) return 0;
  if (n <= 2) return n;
  if (n <= 3) return n + 1
  if (memo[n] > 0) return memo[n];
  memo[n] = stairs(n - 1, memo) + stairs(n - 2, memo) + stairs(n - 3, memo)
  return memo[n];
}