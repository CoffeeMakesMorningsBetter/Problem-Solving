// Write a recursive sum function
// Input: Array
// Output: Integer that is the sum of all items in array

// using slice()
function sumRecursive(list) {
  let acc = 0;
  if (list.length === 0) return acc;
  return (acc += list[0] + sumRecursive(list.slice(1)));
}

// Using pop()
function sumRecursive(list) {
  let acc = 0;
  if (list.length === 0) return acc;
  return (acc += list.pop() + sumRecursive(list));
}

sumRecursive([1, 2, 3, 4]);
sumRecursive([]);
