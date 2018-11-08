# findAllDuplicates

Given an array of posiitive integers, some elements appear **twice** others appear **once**. Find all the elements that appear **twice** in this array. 

```js
function findAllDuplicates(arr){
  let counter = createMap(arr)
  let two = []
  for(let value in counter) {
      if(counter[value] === 2) {
          two.push(+value)
      }
  }
  return two
}

function createMap(arr) {
    return arr.reduce((acc,value) => {
        acc[value] = (acc[value] || 0) + 1 
        return acc
    },{})
}
```

