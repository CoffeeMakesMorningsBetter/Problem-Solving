/*
Write a recursive function called numToText, which accepts a string
and returns a string with digits converted to their word equivalent.

Assume all numbers are single digits (less than 10) and greater than 0.
*/ 

let map = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine"
}

function numToText(str, newStr = "") {
  if(str.length === 0) return newStr // starts building back newStr
  if(str[0] in map) {
    // Build up string on callstack
    newStr = map[str[0]] + numToText(str.slice(1))
  } else {
    newStr = str[0] + numToText(str.slice(1))   
  }
  return newStr
}

numToText("My 2 favorite numbers are 4 and 1"); // "My two favorite numbers are four and one"
numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"