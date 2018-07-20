#Fibonacci 

```js
function fibonacci(num){
  if(num <= 1) return num 
  return fibonacci(num-2) + fibonacci(num-1)
}

fibonacci(5) // 5
fibonacci(10) // 55
fibonacci(15) // 610

```

