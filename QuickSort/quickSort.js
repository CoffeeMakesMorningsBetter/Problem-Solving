function pivot(list, start=0, end=list.length-1) {
  let pivotIdx = 0 // keeps track of where "pivot Value needs to end up at once we get to the end"
  let check = start // list[check] is the pivot value that is to compare all values against
  for(let i = 1; i < list.length; i++) {
    if(list[check] > list[i]) { // check if current value is less the "pivot value"
      pivotIdx++ // increment(pivotIdx) first before swaping otherwise you'll swap pivotValue which is last to get swapped 
      [list[i], list[pivotIdx]] = [list[pivotIdx],list[i]]
    }
  }
  // SWAP pivot value with pivotIdx now its in the correct order on the list
  [list[check], list[pivotIdx]] = [list[pivotIdx], list[check]]
  console.log(list)
  return pivotIdx
}