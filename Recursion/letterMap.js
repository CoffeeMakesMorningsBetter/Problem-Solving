/*
Write a recursive function called letterTally which accepts a 
string and returns an object containing tallies of each letter. 
The keys of the object are the letters and the values are the 
counts.
*/ 

// PURE RECURSION 
function letterTally(str, obj = {}) {
  if(str.length === 0) return obj
  if (str[0] in obj) {
    obj[str[0]]++
  } else {
    obj[str[0]] = 1
  }
  return letterTally(str.slice(1), obj)
}

letterTally('maarrkk') //  { m: 1, a: 2, r: 2, k: 2 }

// HELPER RECURSION - DON'T use IN 
function letterTallyHelper(str) {
  let map = {}
  function helper(word) {
    if(word.length === 0) return map 
    if(map.hasOwnProperty(word[0])) map[word[0]]++
    if(!map.hasOwnProperty(word[0])) map[word[0]] = 1
    helper(word.slice(1))
  }
  helper(str)
  return map 
}

letterTallyHelper("maarrkk")