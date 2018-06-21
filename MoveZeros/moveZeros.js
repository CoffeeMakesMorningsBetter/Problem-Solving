function moveZeroes(list){
  let start = 0
  let end = 0
  while(end < list.length){
    console.log(list[start], list[end])
    if(list[start] === 0 && list[end] === 0){
      end++
    }
    if(list[start] === 0 && list[end] !== 0 && list[end] !== undefined){
      [list[start], list[end]] = [list[end], list[start]]
      start++
      end++
    }
    if(list[start] !== 0 && list[end] === 0){
      start++
    }
    if(list[start] !== 0 && list[end] !== 0){
      start++ 
      end++ 
    } 
    
  }
  return list 
}

moveZeroes([0,1,0,3,12]) // [1,3,12,0,0]
moveZeroes([1,3,10,2]) // [1,3,10,2]
moveZeroes([4,1,2,0,0,1,2,1,0]) // [4,1,2,1,2,1,0,0,0]
moveZeroes([6,1,2,3,5,1,0]) // [6,1,2,3,5,1,0]
moveZeroes([0,6,1,2,3,5,1,0]) // [6,1,2,3,5,1,0,0]
moveZeroes([12,2,0,0,2,1]) // [12,2,2,1,0,0]