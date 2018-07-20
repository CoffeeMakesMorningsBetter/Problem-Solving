#Lowest Common Multiple 

```js
function lcm(a,b) {
  return (a*b)/gcd(a,b)
}

function gcd(a,b){
  if(a % b === 0) return b
  let update = a % b
  return gcd(a = b, b = update)
}

lcm(25,30) // 150
```

Googled LCM is easest when you have a*b/gcd of a b 