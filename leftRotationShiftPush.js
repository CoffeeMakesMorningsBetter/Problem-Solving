function rotateLeft(num, rotations) {
  let arr = createArray(num)
  for (var k = 0; k < rotations; k++) {
    arr.push(arr.shift())
  }
  return arr
}

// Helper Function
function createArray(a) {
  let array = []
  for (var i = 1; i <= a; i++) {
    array.push(i)
  }
  return array
}