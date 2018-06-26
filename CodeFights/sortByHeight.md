[Codefights: SortByHeight](https://codefights.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM)

Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

###Example

For `a = [-1, 150, 190, 170, -1, -1, 160, 180]`, the output should be
`sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]`.

###Input/Output

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

* If `a[i] = -1`, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

* Guaranteed constraints:
`5 ≤ a.length ≤ 15,
-1 ≤ a[i] ≤ 200` .

* **[output] array.integer**

* Sorted array a with all the trees untouched.

###My Solution

```js
function sortByHeight(a) {
    let people = a.filter((value) => value !== -1).sort((a,b)=>a-b)
    console.log(people)
    for(let i = 0; i < a.length; i++){
      if(a[i] === -1){
        continue
      } else {
        a[i] = people.splice(0,1)[0]
      }
    }
    return a
}
```