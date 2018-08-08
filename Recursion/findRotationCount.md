Write a function called **findRotationCount** which accepts an array of distinct numbers sorted in increasing order. 

The array has been rotated n number of times. Given such an array, find the value of n, with a Time Complexity - O(log n)

```js
findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0
```

###My Solution
```js

function findRotationCount(list){
  if(list[0] < list[list.length-1]) return 0
  let left = findRotationLeft(list)
  let right = findRotationRight(list)
  if(right > 0 && left > 0) {
    return Math.min(left, right)
  } else if(right === 0){
    return left
  } 
  return right
}

function findRotationLeft(list, start = 0, end = Math.floor(start+list.length-1)/2){
  if(start > end) return 0
  let mid = Math.floor((start+end)/2)
  if(list[mid] > list[start] && list[mid] < list[end]) return 0
  else if(list[mid] < list[mid-1]) return mid
  else if(list[mid] > list[mid+1]) return mid+1
  else if(list[mid] > list[end]) return findRotationLeft(list,start, end=mid-1)
  return findRotationLeft(list, start=mid+1, end)
}

function findRotationRight(list, start=Math.floor((0 + list.length-1)/2), end = list.length-1) {
  let mid = Math.floor((start+end)/2)
  if(list[mid] > list[start] && list[mid] < list[end]) return 0
  else if(list[mid] > list[mid+1]) return mid+1
  else if(list[mid] < list[mid-1]) return mid
  else if(list[mid] > list[end]) return findRotationRight(list,start, end=mid-1)
  return findRotationRight(list, start=mid+1, end)
}

findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0
```

Use a binary search left and binary search right to find starting index where it has been rotated