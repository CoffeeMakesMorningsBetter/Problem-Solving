//https://leetcode.com/submissions/detail/160335607/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let numString = String(x)
  let low = 0
  let high = numString.length-1
  while(low <= high){
      if(numString[low] !== numString[high]) {
          return false
      } else {
          low++
          high--
      }
  }
  return true
};