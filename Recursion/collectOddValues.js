//Pure Recursion

function collectOddValues(arr, odd = []){
  if(arr.length === 0) return odd
  if(arr[0] % 2 !== 0){
    odd.push(arr[0])
    return collectOddValues(arr.slice(1), odd)
  }
  return collectOddValues(arr.slice(1), odd)
}

collectOddValues([1,2,3,4,5,6,7]) // [1,3,5,7]
collectOddValues([-2,1,-11,3,9,16,17]) // [1,-11,3,9,17]

//Helper Recursion
function collectOddValuesHelp(arr) {
  let odds = []
  function helper(list) {
    if(list.length === 0){
      return odds
    } 
    if(arr[0] % 2 !== 0) {
      odds.push(list[0])
    }
    helper(list.slice(1))
  }
  helper(arr)
  return odds
}

collectOddValuesHelp([1,2,3,4,5,6,7])