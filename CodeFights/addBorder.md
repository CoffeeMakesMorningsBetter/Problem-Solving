[Codefights: Add Border](https://codefights.com/arcade/intro/level-4/ZCD7NQnED724bJtjN)

Given a rectangular matrix of characters, add a border of asterisks(*) to it.

###Example

For

```js
picture = ["abc",
           "ded"]
```

the output should be

```js
addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
```

###Input/Output

* **[execution time limit] 4 seconds (js)**

* **[input] array.string picture**

* A non-empty array of non-empty equal-length strings.

* Guaranteed constraints:
`1 ≤ picture.length ≤ 100,`
`1 ≤ picture[i].length ≤ 100.`

* **[output] array.string**

The same matrix of characters, framed with a border of asterisks of width 1.

###My Solution 

```js
function addBorder(picture) {
    let len = picture[0].length
    let border = "*".repeat(len+2)
    for(var i = 0; i < picture.length; i++){
        picture[i] = "*"+picture[i]+"*"
    }
    picture.unshift(border)
    picture.push(border)
    return picture
}
```