## My Solution 

Time: O(n)
Complexity: O(n)

```js
function mergeArrays(myArray, alicesArray) {

  // Combine the sorted arrays into one large sorted array
  let combined = []

  while(myArray.length && alicesArray.length) {
    if(myArray[0] < alicesArray[0]) {
      combined.push(myArray.shift())
    } else {
      combined.push(alicesArray.shift())
    }
  }
  while(myArray.length) {
    combined.push(myArray.shift())
  }
  while(alicesArray.length) {
    combined.push(alicesArray.shift())
  }
  return combined
}
```