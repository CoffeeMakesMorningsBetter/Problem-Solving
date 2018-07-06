You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

###Example

For `inputArray = [5, 3, 6, 7, 9]`, the output should be
`avoidObstacles(inputArray) = 4`.

###Input/Output

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer inputArray**

* **Non-empty array of positive integers.**

* **Guaranteed constraints:**
`2 ≤ inputArray.length ≤ 1000`,
`1 ≤ inputArray[i] ≤ 1000`.

* [output] integer
  The desired length.

###My Solution
```js
function avoidObstacles(inputArray) {
    let start = 1
    let len = inputArray.length
    let count = 0
    while(start !== inputArray[len]){
        if(inputArray[count] % start === 0){
            start++
            count = 0
        } else if(count === inputArray.length){
            return start 
        } else {
            count++
        }
    }
}

// Find first number(divisor) starting from one that can make that returns false for num % divisor

avoidObstacles([1, 4, 10, 6, 2]) // 7
avoidObstacles([5, 3, 6, 7, 9]) // 4
avoidObstacles([2, 3]) // 4
```