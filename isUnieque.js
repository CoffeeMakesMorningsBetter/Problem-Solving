// Cracking the Code Interview Problem 1.1 Arrays and Strings
/*
Is Unique: Implement an algorithm that determines if a string has all unique charachers
What if we cannot use another data strcture
*/ 

//Using a Map

function isUnique(str){
  let map = {}
  for(let i = 0; i < str.length; i++){
    if(map.hasOwnProperty(str[i])){
      return false
    } else {
      map[str[i]] = 1
    }
  }
  return true 
}

isUnique('max') // true 
isUnique("Sunny") // false 

//No data Structures
function isUnique2(str){
  for(var i = 0; i < str.length; i++){
    for(var j = 0; j < str.length; j++){
      if(str[i] === str[j] && i !==j){
        return false
      }
    }
  }
  return true 
}

isUnique2("max")
isUnique2("apple")

//Using ASCII 

function isUnique3(str){
  let acc = new Array(128).fill(null)
  for(let i = 0; i < str.length; i++){
    let idx = str.charCodeAt(i)
    if(acc[idx-1] === idx){
      return false
    } else {
      acc[idx-1] = idx
    }
  }
  return true 
}

isUnique3("max")
isUnique3("apple")