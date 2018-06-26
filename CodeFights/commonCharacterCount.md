[Codefights: commonCharacterCount](https://codefights.com/arcade/intro/level-3/JKKuHJknZNj4YGL32)

Given two strings, find the number of common characters between them.

Example:
For `s1 = "aabcc"` and `s2 = "adcaa"`, the output should be
`commonCharacterCount(s1, s2) = 3`.

Strings have `3` common characters - `2` "a"s and `1` "c".

```js
function commonCharacterCount(s1, s2) {
    let count = 0
    let mapS1 = s1.split("").reduce((acc,letter) => {
       acc[letter] = (acc[letter] || 0) + 1
       return acc 
    },{})
    let arr = s2.split("")
    while(arr.length > 0){
        if(arr[0] in mapS1 && mapS1[arr[0]]>0){
            count++
            mapS1[arr.splice(0,1)[0]]--
        } else {
            arr.splice(0,1)
        }
    }
    return count 
}
```