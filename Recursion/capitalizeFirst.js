// PURE RECURSION
function capitalizeFirst(arr, num=0){
  if(num === arr.length) return arr
  console.log(arr[num])
  arr[num] = arr[num].charAt(0).toUpperCase() + arr[num].slice(1)
  console.log(arr[num])
  return capitalizeFirst(arr, ++num)
}

// HELPER RECURSION
capitalizeFirst(['max', 'mark', 'elie', 'joel'])

function capitalizeFirstHelper(arr) {
  let newArr = []
  function helper(list) {
    if(!list.length) return newArr 
    newArr.push(list[0].charAt(0).toUpperCase() + list[0].slice(1))
    helper(list.slice(1))
  }
  helper(arr)
  return newArr
}

capitalizeFirstHelper(['max', 'mark', 'elie', 'joel'])