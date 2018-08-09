/*
Write a function called constructNote, which accepts two strings, a message and some letters. 
The function should return true if the message can be built with the letters that you are given, 
or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the 
message and the letters.

Bonus Constraints: 
If M is the length of message and N is the length of letters:

Time Complexity: O(M+N) 
Space Complexity: O(N) 

*/ 

function constructNote(str1, str2) {
  if(str1.length === 0) return true 
  if(str2.length === 0) return false 
  let message = str1.split('').reduce((acc,value) => {
    acc[value] = (acc[value] || 0) + 1
    return acc
  },{})
  let letters = str2.split('').reduce((acc,value) => {
    acc[value] = (acc[value] || 0) + 1
    return acc
  },{})

  for(let key in message) {
    if(message[key] > letters[key]) return false 
  }
  return true 
}

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true