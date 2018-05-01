//Dynamic Programing Solution
function fibonacciMemo(n, memo = []) {
  if (n <= 1) return n
  if (memo[n]) return memo[n]
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo)
  return memo[n]
}