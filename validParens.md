#validParens

Given a string containing just the characters '(',  ')', '{', '}', '[' and ']', write a function called **validParens** to determine if the input string is valid.

An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

```js
validParens("")  // true
validParens("()")  // true
validParens("()[]{}")  // true
validParens("(]")  // false
validParens("([)]")  // false
validParens("{[]}")  // true
```

##My Solution 

```js
function validParens(str){
  let stack = []
  
  if(str.length === 0) return true 
  
  if(str.length % 2 !== 0) return false 
  
  let map = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  
  for(let i = 0; i < str.length; i++){
    if(str[i] in map){
      stack.push(map[str[i]])
    } else if(str[i] === stack[stack.length-1]) {
      stack.pop()
    } else {
      return false
    }
  }
  return true
}
```