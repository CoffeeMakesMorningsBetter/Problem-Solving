# Reverse a string with recursion

```js
function reverseStr(str){
  if(str.length === 0) return str
  return str.slice(-1) + reverseStr(str.slice(0,-1))
}

reverseStr("cowbell") // llebwoc
reverseStr('fart') // traf
reverseStr('twix') // xiwt
```