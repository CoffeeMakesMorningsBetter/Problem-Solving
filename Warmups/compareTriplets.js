// Compare the Triplets
// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function solve(a0, a1, a2, b0, b1, b2) {
  var arr = [a0, a1, a2]
  var arr2 = [b0, b1, b2]
  var value = [0, 0]
  for (var i = 0; i < 3; i++) {
    if (arr[i] === arr2[i]) {
      continue
    } else if (arr[i] > arr2[i]) {
      value[0] += 1
    } else if (arr[i] < arr2[i]) {
      value[1] += 1
    }
  }
  return value
}