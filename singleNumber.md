# [Single Number](https://leetcode.com/problems/single-number/description/)

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

```js
Example 1:

Input: [2,2,1]
Output: 1
```
```js
Example 2:

Input: [4,1,2,1,2]
Output: 4
```

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result = 0
  for(let i = 0; i < nums.length; i++) {
    result = result ^ nums[i]
  }
  return result
}
```

NOTES: Learned what the bitwise operator is
