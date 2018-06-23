// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/*
Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
  let longest = 0
  let current = 0
  let map = {}
  let start = 0
  let end = 0
  while(end !== s.length){
      if(s[end] in map){
          longest = Math.max(longest, current)
          start = map[s[end]]
          end = start
          current = 0
          Object.keys(map).forEach(k => delete map[k])
      } else {
          map[s[end]] = end + 1
          end++
          current++
      }
  }
  longest = Math.max(longest, current)
  return longest
};

