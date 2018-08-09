/*
Write a function called isSubsequence which takes in two strings and checks whether 
the characters in the first string form a subsequence of the characters in the 
second string. In other words, the function should check whether the characters 
in the first string appear somewhere in the second string, without their order changing.
Your solution MUST have the following complexities: 
Time Complexity - O(N + M)
Space Complexity - O(1)
*/ 

function isSubsequence(sub, word) {
  let j = 0
  let count = 0
  for(let i = 0; i < word.length; i++) {
    if(sub[j] === word[i]){
      count++
      j++
    }
  }
  return count === sub.length
} 

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)