// Write a recurisve function to count number of items in a list

// Input a List

// Output Integer

function countItemsInList(list) {
  var count = 0;
  if (list.length === 0) return count;
  return (count += 1 + countItemsInList(list.slice(1)));
}

countItemsInList([1, 2, 3, 4, 5]);
countItemsInList([]);
countItemsInList(["bob", "joe", "karen"]);
