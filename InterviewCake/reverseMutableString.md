# Reverse Mutable String

Write a function that takes an array of characters and reverses the letters in place.

## My Solution

Time: O(n)
Space: O(n)

```js
function reverse(arrayOfChars) {

  // Reverse the input array of characters in place
  let start = 0
  let end = arrayOfChars.length - 1
  while (start < end) {
    [arrayOfChars[start], arrayOfChars[end]] = [arrayOfChars[end], arrayOfChars[start]]
    start++
    end--
  }
  return arrayOfChars
}
```

TEST
```js
let desc = 'empty string';
let input = ''.split('');
reverse(input);
let actual = input.join('');
let expected = '';
assertEqual(actual, expected, desc);

desc = 'single character string';
input = 'A'.split('');
reverse(input);
actual = input.join('');
expected = 'A';
assertEqual(actual, expected, desc);

desc = 'longer string';
input = 'ABCDE'.split('');
reverse(input);
actual = input.join('');
expected = 'EDCBA';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
```
