#fixedPoint

A *fixed point* in an array arr is an index i such that arr[i] === i.

Given an array of unique sorted integers, write a function called **findFixedPoint** that returns a  fixed point in the array, if a fixed point exists. Otherwise, it returns -1. 

You can assume that the input array will have at most one fixed point.

Time Complexity: O(log n), where n is the array length.

```js
findFixedPoint([-3,1,5]) // 1
findFixedPoint([-10, -5, 0, 3, 7]) // 3
findFixedPoint([0, 2, 5, 8, 17]) // 0

findFixedPoint([-10, -5, 3, 4, 7, 9]) // -1
findFixedPoint([1,2,3,4,5,6]) // -1
findFixedPoint([-3,0,3,6,10]) // -1
```

##My Solution 

```js
function findFixedPoint(arr){
  let low = 0
  let high = arr.length-1
  while(low <= high){
    let mid = Math.floor((low+high)/2)
    if(arr[mid] === mid) return mid
    if(arr[mid] > mid) {
      high = mid-1
    } else {
      low = mid + 1
    }
  }
  return -1
}

// Recursively BS

function findFixedPoint(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if (mid === arr[mid]) {
      return mid;
    }
    if (mid > arr[mid]) {
      return findFixedPoint(arr, mid + 1, high);
    } else {
      return findFixedPoint(arr, low, mid - 1);
    }
  }
  return -1;
}
```