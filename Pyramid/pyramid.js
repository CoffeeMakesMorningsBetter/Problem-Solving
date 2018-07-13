function pyramid(n) {
  let col = n + (n-1)
  let middle = Math.floor(col/2)
  let str = ""
  for(let i = 0; i < n; i++){
    for(let j = 0; j < col; j++){
      if(j >= middle - i && j <= middle + i){
        str+="#"
      } else {
        str+=" "
      }
    }
    console.log(str)
    str = ""
  }
}

function pyramid(n, row=0, str=''){
  if(row === n){
    return 
  } 
  if(str.length === (n+(n-1))){
    console.log(str)
    return pyramid(n, row + 1)
  }
  const midPoint = Math.floor((n+(n-1))/2)
  let strAdd 
  if(midPoint - row <= str.length &&  midPoint + row >= str.length){
    strAdd = "#"
  } else {
    strAdd = " "
  }
  pyramid(n, row, str+strAdd)
}

/* 
SUDO CODE 

find row length n + (n-1)
find middle of row

outer loop controls rows i 
  inner loop controls position in row j
  CONDITION 
    j must be between middle - i and middle + i 

n=1 r=1 diff = 0
n=2 r=3 diff = 1
n=3 r=5 diff = 2
n=4 r=7 diff = 3
n=5 r=9 diff = 4
*/