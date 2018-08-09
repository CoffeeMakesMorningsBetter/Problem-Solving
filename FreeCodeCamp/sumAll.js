/*
We'll pass you an array of two numbers. Return the sum of those two numbers 
plus the sum of all the numbers between them. The lowest number will not always 
come first.
*/

function sumAll(arr) {
  let acc = 0
  let start 
  let end
  if(arr[0] < arr[1]) {
    start = arr[0]
    end = arr[1]
  } else {
    start = arr[1]
    end = arr[0]
  }
  console.log(start)
  while(start <= end) {
    acc += start 
    start++
  }
  return acc
}

sumAll([1, 4]) // 10
sumAll([4, 1]) // 10
sumAll([5, 10]) // 45
sumAll([10, 5]) // 45