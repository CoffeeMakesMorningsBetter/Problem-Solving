function mergeSort(list){
  if(list.length < 2) return list

  let length = list.length
  let mid = Math.floor(length/2)
  let leftList = list.slice(0,mid)
  let rightList = list.slice(mid,length)

  let left = mergeSort(leftList)
  let right = mergeSort(rightList)

  return merge(left, right)
}

function merge(left, right){
  let newArray = []

  while(left.length && right.length){
    if(left[0] <= right[0]){
      newArray.push(left.shift())
    } else {
      newArray.push(right.shift())
    }
  }
  return [...newArray,...left,...right]
}

mergeSort([4, 2, 5, 3, 6, 1, 9, 300, 0, -7, -9, 0.5, 9])