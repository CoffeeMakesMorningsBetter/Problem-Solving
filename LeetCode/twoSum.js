// Leet Code
// https://leetcode.com/problems/two-sum/description/

var twoSum = function(nums, target) {
  var mapper = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (mapper.has(target - nums[i])) {
      return [mapper.get(target - nums[i]), i];
    } else {
      mapper.set(nums[i], i);
    }
  }
  return mapper;
};

//Time O(n)
//Space O(1)
