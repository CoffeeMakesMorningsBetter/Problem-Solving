[Codefights: isLucky](https://codefights.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ)

Ticket numbers usually consist of an even number of digits. A ticket number is considered *lucky* if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number `n`, determine if it's *lucky* or not.

###Example

* For `n = 1230`, the output should be
`isLucky(n) = true`;
* For `n = 239017`, the output should be
`isLucky(n) = false`.

###Input/Output

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

* A ticket number represented as a positive integer with an even number of digits.

* Guaranteed constraints:
10 ≤ n < 106.

* **[output] boolean**

* true if n is a lucky ticket number, false otherwise.

###My Solution

```js
function isLucky(n) {
  let arr = n.toString().split("")
  let pivot = Math.floor(arr.length/2)
  let firstHalf = arr.slice(0,pivot).reduce((acc,value) => {
       return acc+=Number(value)
    },0)
  let secondHalf = arr.slice(pivot).reduce((acc,value) => {
      return acc+=Number(value)
    },0)
  return secondHalf === firstHalf
}
```