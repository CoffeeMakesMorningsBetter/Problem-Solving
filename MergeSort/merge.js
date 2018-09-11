// Works Only For Sorted Arrays
function merge(arr1, arr2) {
  let mergedArr = []
  while(arr1.length && arr2.length){
      if(arr1[0] <= arr2[0]){
          mergedArr.push(arr1.shift())
      } else {
          mergedArr.push(arr2.shift())
      }
  }
  while(arr1.length){
      mergedArr.push(arr1.shift())
  }
  while(arr2.length){
      mergedArr.push(arr2.shift())
  }
  return mergedArr
}

let list1 = [0,2,4,6,8]
let list2 = [1,3,4,7,9]
let list3 = [3, 4, 6, 10, 11, 15, 25];
let list4 = [1, 5, 8, 12, 14, 19, 20];

merge(list1, list2) // [ 0, 1, 2, 3, 4, 4, 6, 7, 8, 9 ]
merge(list1, list3) // [ 0, 2, 3, 4, 4, 6, 6, 8, 10, 11, 15, 25 ]
merge(list1, list4) // [ 0, 1, 2, 4, 5, 6, 8, 8, 12, 14, 19, 20 ]
merge(list2, list3) // [ 1, 3, 3, 4, 4, 6, 7, 9, 10, 11, 15, 25 ]
merge(list2,list4) // [ 1, 1, 3, 4, 5, 7, 8, 9, 12, 14, 19, 20 ]
merge([], list1) //[ 0, 2, 4, 6, 8 ]