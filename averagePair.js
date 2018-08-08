/*
Write a function called averagePair. Given a sorted array of integers and 
a target average, determine if there is a pair of values in the array where the 
average of the pair equals the target average. There may be more than one pair 
that matches the average target.

Bonus Constraints:

Time: O(N)
Space: O(1)

Sample Input:

*/

// SUDO CODE
/* 
  Start with a two pointer method
    start is 0
    end is list length - 1
      if start + end equal to avg return true
    if start plus end greater then avg decrement end
    else increment start
*/

function averagePair(list, avg) {
  let start = 0
  let end = list.length-1
  if(list.length === 0) return false 
  while(start < end) {
    if((list[start] + list[end])/2 === avg) return true 
    else if((list[start] + list[end])/2 > avg){
      end--
    } else {
      start++
    }
  }
  return false 
}

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false