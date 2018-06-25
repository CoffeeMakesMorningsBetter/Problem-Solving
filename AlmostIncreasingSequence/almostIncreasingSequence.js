// Code Fights

function almostIncreasingSequence(sequence) {
  let count = 0
  for(let num = 0; num < sequence.length; num++){
    if(sequence[num] <= sequence[num-1]){
      count++
      if(sequence[num] <= sequence[num-2] && sequence[num+1] <= sequence[num - 1]) {
        return false 
      }
    }
  }
  return count <= 1
}

almostIncreasingSequence([10, 1, 2, 3, 4, 5, 6, 1]) // false 
almostIncreasingSequence([1, 2, 5, 5, 5])// false
almostIncreasingSequence([1, 1]) // true
almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6]) // false
almostIncreasingSequence([40, 50, 60, 10, 20, 30]) // false
almostIncreasingSequence([1, 1, 1, 2, 3]) // false
almostIncreasingSequence([1, 4, 10, 4, 2]) // false
almostIncreasingSequence([1, 2, 1, 2]) // false 
almostIncreasingSequence([1, 3, 2]) // true
almostIncreasingSequence([1, 3, 2, 1]) // false
almostIncreasingSequence([10, 1, 2, 3, 4, 5]) // true
almostIncreasingSequence([0, -2, 5, 6]) // true
almostIncreasingSequence([1, 2, 5, 3, 5]) // true
almostIncreasingSequence([1, 2, 3, 4, 3, 6]) // true
almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6]) // true 
almostIncreasingSequence([123, -17, -5, 1, 2, 3, 12, 43, 45]) // true
almostIncreasingSequence([3, 5, 67, 98, 3]) // true 