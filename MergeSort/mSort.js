function mSort(list) {
  if(list.length < 2) return list 

  let mid = Math.floor(list.length/2)
  let left = sort(list.slice(0,mid))
  let right = sort(list.slice(mid))

  return merge(left, right)
}