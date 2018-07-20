#Remove duplicate words in a string 

Using recursion, go through a string and remove characters that occur more than once. E.g. passing in "troll" should return "trol". Passing in "abracadabra" should return "abrcd".

```js
function removeDuplicateLetters(str, newStr = '') {
  if(str.length === 0) return newStr
  if(newStr.indexOf(str[0]) < 0){
    return removeDuplicateLetters(str.slice(1), newStr+=str.slice(0,1))
  } else {
    return removeDuplicateLetters(str.slice(1), newStr)
  }
}

removeDuplicateLetters('ffart') // fart 
removeDuplicateLetters('maxx') // max 
removeDuplicateLetters('troll') // troll 
removeDuplicateLetters('abracadabra') // abrcd
```