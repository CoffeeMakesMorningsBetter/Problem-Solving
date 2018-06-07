// A circular array is defined by having a start and indexes (be sure to think about optimizing runtime for indexing, since we’ll do this so much more often than adding items to it):

// create an array
function CircularArray() {
  let circular = new Array();
  return circular;
}

// add to Array
// will always add to the end no matter what
function addToCircularArray(Array, data) {
  Array.push(data);
  return Array;
}

// given an index returns index value
function getItemAtIndex(Array, idx) {
  return idx > Array.length - 1 ? Array[idx] : "None";
}

// rotate array
function rotate(Array, value) {
  if (value > 0) {
    for (let i = 0; i <= value; i++) {
      let idx = (i + (Array.length - value)) % Array.length;
      [Array[i], Array[idx]] = [Array[idx], Array[i]];
    }
    return Array;
  }
}
