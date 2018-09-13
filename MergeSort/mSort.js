function mSort(list) {
  if(list.length < 2) return list 

  let mid = Math.floor(list.length/2)
  let left = mSort(list.slice(0,mid))
  let right = mSort(list.slice(mid))

  return merge(left, right)
}