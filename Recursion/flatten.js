function flatten(list){
  let newArr = []
  for(let i  = 0; i < list.length;i++){
    if(!Array.isArray(list[i])){
      newArr.push(list[i])
    } else {
      newArr = newArr.concat(flatten(list[i]))
    }
  }
  return newArr
}

flatten([1,2,[23,5,[6,[6]]]])