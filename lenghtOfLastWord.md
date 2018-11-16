# Length of Last Word
[LeetCode](https://leetcode.com/problems/length-of-last-word/)

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

```js
Input: "Hello World"
Output: 5
```

```js 
/**
 * @param {string} s
 * @return {number}
 */

// EDGE CASES:
// what if space or double space is the last index
var lengthOfLastWord = function(s) {
    let stringLength = s.length
    if(!stringLength) return 0;
    return s.trim().match(/\S*$/)[0].length
};
```
