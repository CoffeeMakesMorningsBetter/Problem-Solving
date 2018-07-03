[CodeFights: palindromeRearrange](https://codefights.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico/description)

Given a string, find out if its characters can be rearranged to form a palindrome.

###Example

For `inputString = "aabb"`, the output should be
`palindromeRearranging(inputString) = true`.

We can rearrange `"aabb"` to make `"abba"`, which is a palindrome.

###Input/Output

* **[execution time limit] 4 seconds (js)**

* **[input] string inputString**

* A string consisting of lowercase English letters.

* Guaranteed constraints:
`1 ≤ inputString.length ≤ 50`.

* **[output] boolean**

true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

###My Solution 
```js
function palindromeRearranging(inputString) {
    let odd = 0
    let map = inputString.split("").reduce((acc, letter) => {
        acc[letter] = (acc[letter] || 0) + 1
        return acc
    },{})
    for(let num in map){
      if(map[num] % 2 !== 0) odd++
    }
    if(inputString.length % 2 === 0 && odd === 0 || inputString.length % 2 !== 0 && odd === 1){
      return true 
    } else {
      return false 
    }
}

palindromeRearranging("aabb") //true
palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc") //false
palindromeRearranging("abbcabb") //true
palindromeRearranging("zyyzzzzz") //true
palindromeRearranging("z") // true
palindromeRearranging("zaa") // true
palindromeRearranging("abca") // false

// create a map 
  // check string length 
    // if odd only one item in map can be odd
    // if even all must be even values
```