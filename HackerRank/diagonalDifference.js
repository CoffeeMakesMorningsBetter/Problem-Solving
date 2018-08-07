// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  let left = 0
  let right = 0

  if(arr.length === 0) return 0

  for(let i = 0; i < arr.length; i++){
      left += arr[i][i]
      right += arr[i][arr.length - 1 - i]
  }

  return Math.abs(left-right)

}