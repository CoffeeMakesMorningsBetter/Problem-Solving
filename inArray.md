#inArray 

Write a function called  **inArray**. Given two arrays of strings a1 and a2, return a sorted array in alphabetical order of the strings of a1 which are substrings of strings of a2.  Examples: 

```js
const a1 = ["arp", "live", "strong", "sharper"]
const a2 = ["lively", "harp", "sharp", "armstrong", "ham"]
const a3 = ["hammer", "olive", "string"]
const a4 = ["sharper", "live", "strong", "arp"]

inArray(a1, a2) // ["arp", "live", "strong"]
inArray(a2, a1) // ["harp", "sharp"]
inArray(a1, a3) // ["live"]
inArray(a2, a3) // ["ham"]
inArray(a3, a2) // []
inArray(a4, a2) // ["arp", "live", "strong"]
```

##My Solution 

```js
function inArray(arr1, arr2){
  let arr = []
  for(var i = 0; i < arr1.length; i++){
    for(var j = 0; j < arr2.length; j++){
      if(arr2[j].indexOf(arr1[i]) >= 0){
        arr.push(arr1[i])
        break
      }
    }
  }
  return arr.sort()
}

// Alternate Solution 
function inArray(a1, a2) {
  const result = [];
  const a2String = a2.toString();

  a1.forEach(str => {
    if (a2String.includes(str) && !result.includes(str)) {
      result.push(str);
    }
  });

  return result.sort();
}
```