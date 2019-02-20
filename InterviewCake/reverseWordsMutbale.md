# Reverse Words In Place

Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.

## My Solution

Time: O(n ^ 2)
Space: O(n)

```js
function reverseWords(message) {

  let start = 0
  let end = message.length
  
  // Reverse Words Into Place
  while(start < end) {
    [message[start], message[end]] = [message[end], message[start]]
    start++
    end--
  }
  
  // Map idx positon where blanks are located
  let blanks = []
  for(let i = 0; i < message.length; i++) {
    if(message[i] === " ") blanks.push(i)
  }
  
  blanks.push(message.length)
  
  let startWord = 0
  let endWord = blanks[0] - 1
  
  while(blanks.length) {
    while(startWord < endWord) {
      [message[startWord], message[endWord]] = [message[endWord], message[startWord]]
      startWord++
      endWord--
    }
    startWord = blanks.shift() + 1
    endWord = blanks[0] - 1
  }
  return message
}
```

## Optimal Solution

Time: O(n)
Space: O(1)

```js
function reverseWords(message) {

  // First we reverse all the characters in the entire message
  reverseCharacters(message, 0, message.length - 1);
  // This gives us the right word order
  // but with each word backward

  // Now we'll make the words forward again
  // by reversing each word's characters

  // We hold the index of the *start* of the current word
  // as we look for the *end* of the current word
  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {

    // Found the end of the current word!
    if (i === message.length || message[i] === ' ') {

      // If we haven't exhausted the string our
      // next word's start is one character ahead
      reverseCharacters(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
}

function reverseCharacters(message, leftIndex, rightIndex) {

  // Walk towards the middle, from both sides
  while (leftIndex < rightIndex) {

    // Swap the left char and right char
    const temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}
```