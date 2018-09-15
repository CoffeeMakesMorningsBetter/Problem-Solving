/*
Write a recursive function called compress which eliminates consecutive duplicates in a list. If the list contains repeated elements, they should be replaced with a single copy of the element. The order of the elements should not be changed.
*/ 

// PURE RECURSION 
function compress(list, num = 1) {
  if(num > list.length-1) return list
  if(list[num] === list[num-1]) {
    list.splice(num,1)
    compress(list, num-1)
  } 
  compress(list,++num)
  return list
}

compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]

// HELPER RECURSION 

function compressHelper(list) {
  let count = 1
  function helper(arr) {
    if(count > arr.length-1) return 
    if(arr[count] === arr[count-1]) {
      arr.splice(count,1)
      count--
      helper(arr)
    }
    count++
    helper(arr)
  }
  helper(list)
  return list
}

compressHelper([1,2,2,3,4,4,5,5,5])
compressHelper([1,2,2,3,4,4,2,5,5,5,4,4])