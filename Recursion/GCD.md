#Greatest Common Divisor between two integers

```js 
function gcd(a,b){
  if(a % b === 0) return b
  let update = a % b
  return gcd(a = b, b = update)
}

gcd(1112, 695) // 139
```