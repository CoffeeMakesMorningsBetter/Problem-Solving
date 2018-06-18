// https://leetcode.com/problems/group-anagrams/description/
// Given an array of strings, group anagrams together.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {};
  if (strs.length === 0) return [""];
  for (var word of strs) {
    let sortedArr = word
      .split("")
      .sort()
      .join("");
    if (!map[sortedArr]) {
      map[sortedArr] = [word];
    } else {
      map[sortedArr].push(word);
    }
  }
  return Object.values(map).sort((a, b) => a.length - b.length);
};

var cool = ["eat", "tea", "tan", "ate", "nat", "bat"];

groupAnagrams(cool);
