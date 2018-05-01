function rotateLeftOptimal(num, rotations) {
  let arrCreate = createArray(num)
  let arr = new Array(arr.length)
  for (var z = 0; z <= rotations; z++) {
    let idx = (z + rotations) % arr.length
    arr[z] = arrCreate[idx]
  }
  return arr
}

function createArray(a) {
  let array = []
  for (var i = 1; i <= a; i++) {
    array.push(i)
  }
  return array
}