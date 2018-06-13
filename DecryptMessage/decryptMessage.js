/*
Convert every letter to its ASCII value. Add 1 to the first letter, and then for every letter from the second one to the last one, add the value of the previous letter. Subtract 26 from every letter until it is in the range of lowercase letters a-z in ASCII. Convert the values back to letters.


For instance, to encrypt the word “crime”

Decrypted message:    c    r    i    m    e
Step 1:    99    114    105    109    101
Step 2:    100    214    319    428    529
Step 3:    100    110    111    116    113
Encrypted message:    d    n    o    t    q

input:  word = "dnotq"
output: "crime"

input:  word = "flgxswdliefy"
output: "encyclopedia"
*/

function encrypt(latin) {
  let acc = [];
  let prev = 1;
  for (var i = 0; i < latin.length; i++) {
    let char = latin.charCodeAt(i);
    char += prev;
    prev += latin.charCodeAt(i);

    while (char > 122) {
      char -= 26;
    }

    acc.push(char);
  }
  return String.fromCharCode(...acc);
}

// encrypt("crime")

function decrypt(latin) {
  let acc = [];
  let prev = 1;
  for (var i = 0; i < latin.length; i++) {
    let char = latin.charCodeAt(i);
    char -= prev;

    while (char < 97) {
      char += 26;
    }
    prev += char;
    acc.push(char);
  }
  return String.fromCharCode(...acc);
}

// decrypt("flgxswdliefy") // encyclopedia
