/*
Write a function called longestFall, which accepts an array of integers, 
and returns  the length of the longest consecutive decrease of integers.
*/ 

function longestFall(list){
  if(list.length === 0) return 0
  let max = 0
  // current always starts at 1
  let current = 1
  for(let i = 0; i < list.length; i++) {
    if(list[i] > list[i+1]) {
      current++
    } else {
      max = Math.max(max, current)
      current = 1
    }
  }
  // check to see if max once outside loop
  return max = Math.max(max, current)
}

longestFall([5, 3, 1, 3, 0]) // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
longestFall([2, 2, 1]) // 2, 2-1 is the longest consecutive sequence of decreasing integers
longestFall([2, 2, 2]) // 1, 2 is the longest consecutive sequence of decreasing integers 
longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest
longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]) // 5, 9-8-7-6-5 is the longest
longestFall([]) // 0