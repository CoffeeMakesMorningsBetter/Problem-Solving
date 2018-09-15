/*
Write a recursive function called minimizeZeroes which reduces 
a series of zeroes to a single 0 in a given list. The order of 
the list should remain unchanged.
*/ 

// PURE RECURSION 
function minimizeZeroes(list, num=0) {
  if(num > list.length-1) return list 
  if(list[num] === 0 && list[num-1] === 0) {
    list.splice(num,1)
    num--
    minimizeZeroes(list, num)
  }
  minimizeZeroes(list, ++num)
  return list 
}

minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

// HELPER RECURSION
function minimizeZeroesHelper(list) {
  let count = 1
  function helper(arr) {
    if(count > arr.length-1) return 
    if(arr[count] === 0 && arr[count-1] === 0) {
      arr.splice(count, 1)
      count-- 
      helper(arr)
    }
    count++
    helper(arr)
  }
  helper(list)
  return list
}

minimizeZeroesHelper([2,0,0,0,1,4]) // [2,0,1,4]
minimizeZeroesHelper([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]