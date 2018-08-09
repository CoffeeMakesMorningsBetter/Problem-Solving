/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/ 

function fearNotLetter(str) {
  for(let i = 1; i < str.length; i++) {
    console.log(str[i].charCodeAt(0) - str[i-1].charCodeAt(0))
    console.log(str[i].charCodeAt(0))
    if(str[i].charCodeAt(0) - str[i-1].charCodeAt(0) !== 1) return String.fromCharCode(str[i].charCodeAt(0)-1)
  }
  return undefined
}


fearNotLetter("abce") //should return "d".
fearNotLetter("abcdefghjklmno") //should return "i".
fearNotLetter("stvwx") //should return "u".
fearNotLetter("bcdf") //should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") //should return undefined.