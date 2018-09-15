/*
Write a recursive function called augmentElements, which takes an 
array of arrays and a value. The function should return a
 NEW array of arrays with the value appended to each subarray. 
 The function should not mutate the original input!
*/ 

// PURE RECURISON
function argumentElements(arr, add, num = 0, newArr = []) {
  if(num > arr.length-1) return newArr 
  newArr.push([...arr[num],add])
  argumentElements(arr,add, ++num, newArr)
  return newArr
} 

let arr1 = [[1, 2], [3, 4, 5]];
let arr2 = [[],[3],[7]];

argumentElements(arr1, 6); // [[1,2,6],[3,4,5,6]]
argumentElements(arr2, 5); // [[5],[3,5],[7,5]]

// HELPER RECURISON
function argumentElementsHelper(arr, add) {
  let newArr = []
  let count = 0
  function helper(list, nAdd) {
    if(count > list.length-1) return newArr
    newArr.push([...list[count], nAdd])
    count++
    helper(list, nAdd)
  }
  helper(arr, add)
  return newArr
}

argumentElementsHelper(arr1, 6)
argumentElementsHelper(arr2, 5) 
