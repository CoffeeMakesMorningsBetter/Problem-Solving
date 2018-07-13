function spiral(n) {
  let start = 1
  
  let startRow = 0
  let startCol = 0
  let endRow = n - 1 // matrix length - 1 need index position
  let endCol = n - 1 

  // create an array 
  let array = []

  for(let o = 0; o < n; o++){
    array.push([])
  }

  while(startCol <= endCol && startRow <= endRow){
    for(let i = startCol; i <= endCol; i++){
      array[startRow][i] = start 
      start++
    }
    startRow++

    for(let j = startRow; j <= endRow; j++){
      array[j][endCol] = start
      start++
    }
    endCol--

    for(let k = endCol; k >= startCol; k--){
      array[endRow][k] = start 
      start++
    }
    endRow--

    for(let l = endRow; l >= startRow; l--){
      array[l][startCol] = start 
      start++
    }
    startCol++
    
  }
  return array 
}