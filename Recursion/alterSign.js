/*
Write a recursive function called alternateSign, which 
alternates the numbers in an array between positive and 
negative regardless of their original sign. The first number 
in the index should always be positive.
*/

// PURE RECURSION
function alternateSign(arr, num = 0) {
  if (num > arr.length - 1) return arr
  if (num % 2 === 0) {
    arr[num] = Math.abs(arr[num])
    alternateSign(arr, ++num)
  } else {
    arr[num] = Math.abs(arr[num]) * -1
    alternateSign(arr, ++num)
  }
  return arr
}

alternateSign([2, 7, 8, 3, 1, 4]) // [2,-7,8,-3,1,-4]
alternateSign([-2, -7, 8, 3, -1, 4]) // [2,-7, 8,-3,1,-4]

// HELPER RECURSION
function alternateSignHelper(list) {
  let num = 0
  function helper(arr) {
    if (num > arr.length - 1) return arr
    if (num % 2 === 0) {
      arr[num] = Math.abs(arr[num])
    } else {
      arr[num] = Math.abs(arr[num]) * -1
       
    }
    num++  
    helper(arr)
  }
  helper(list)
  return list
}

alternateSignHelper([2, 7, 8, 3, 1, 4]) // [2,-7,8,-3,1,-4]
alternateSignHelper([-2, -7, 8, 3, -1, 4]) // [2,-7, 8,-3,1,-4]