//DP: Coin Change
// https://www.hackerrank.com/challenges/ctci-coin-change/problem

function change(amount, coinArr) {
  let arr = Array(amount + 1).fill(0)
  arr[0] = 1
  for (let j = 0; j < coinArr.length; j++) {
    for (let k = coinArr[j]; k < arr.length; k++) {
      arr[k] += arr[k - coinArr[j]]
    }
  }
  return arr[amount]
}