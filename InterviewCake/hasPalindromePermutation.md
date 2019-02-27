# hasPalindromePermutation

Write an efficient function that checks whether any permutation of an input string is a palindrome.

## My Solution

Time: O(n)
Space: O(n)

```js
function hasPalindromePermutation(theString) {
  if(theString.length <= 1) return true 

  let mapString = mapWord(theString);
  let evenOrOdd = theString.length % 2 === 0 ? "even": "odd";
  
  if(evenOrOdd === "even") {
    for(let [key, val] of mapString) {
      if(val % 2 !== 0) return false
    }
    return true
  }

  if(evenOrOdd === "odd") {
    let addOnce = 0;
    for(let [key, val] of mapString) {
      if(val % 2 !== 0 && addOnce++ > 1) return false
    }
    return true 
  }
}

function mapWord(str) {
  let star = new Map()
  for(let i = 0; i < str.length;i++) {
    if(star.has(str[i])){
      let val = star.get(str[i])
      val++
      star.set(str[i],val)
    } else {
      star.set(str[i], 1)
    }
  }
  return star
}
```

## Alternate Solution

```js 
  function hasPalindromePermutation(theString) {

  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set();

  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}
```