#Binary Search 


##Recursive Binary Search
```js
function recursiveBinarySearch(arr, target, setLow, setHigh){
    let low = setLow === undefined ? 0 : setLow;
    let high = setHigh === undefined ? arr.length - 1 : setHigh;
    let mid = Math.floor((low+high)/2)
    if(low > high){
        return -1
    }
    if(arr[mid] === target){
        return mid
    }
    if(arr[mid] < target){
        low = mid+1
        return recursiveBinarySearch(arr, target, low, high)
    }
    if(arr[mid] > target){
        high = mid-1
        return recursiveBinarySearch(arr, target,low, high)
    }
}

arr = [1,2,3,4,5,6,7,8]

recursiveBinarySearch(arr, 2) // return index of 1
recursiveBinarySearch(arr, 7) // return index of 6
```

##Iterative Binary Search

```js
function binarySearch(arr, num){
  let low = 0
  let high = arr.length-1
  let mid
  while(low <= high){
    mid = Math.floor((low + high) / 2)
    if(arr[mid] === num){
      return num 
    } else if(arr[mid] > num){
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}

binarySearch([1,2,3,4,5,6,7,8,9,10], 99) // -1
```