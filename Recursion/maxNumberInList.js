// Find the maximum number in a list

// Input: Array
// Output: Max Number

function recursiveMaxNumber(list, maxNumber = 0) {
  let max = maxNumber;
  if (list.length === 0) return max;
  if (max <= list[0]) {
    max = list[0];
  }
  return recursiveMaxNumber(list.slice(1), max);
}

recursiveMaxNumber([2, 3, 8, 1, 2, 100]); //100
recursiveMaxNumber([]); // 0
recursiveMaxNumber([99, 1, 2, 3]);
recursiveMaxNumber([99, 1, 2, 101, 3]);
