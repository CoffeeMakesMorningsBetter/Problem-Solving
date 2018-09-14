# [Implement strStr()](https://leetcode.com/problems/implement-strstr/description/)

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

```js
Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
```
```js
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
```

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

My Solution
```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle) return 0
    for(let i = 0; i < haystack.length; i++){
        if(haystack[i] === needle[0]){
            if(haystack.slice(i, needle.length + i) === needle){
                return i
            }
        }
    }
    return -1
};
```
