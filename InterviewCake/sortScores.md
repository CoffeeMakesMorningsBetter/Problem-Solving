# sortedScores

You created a game that is more popular than Angry Birds.

Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in O(n\lg{n})O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

Write a function that takes:

an array of unsortedScores
the highestPossibleScore in the game
and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.

## My Solution


Time: O(n)<br/>
Space: O(n)

```js
function sortScores(unorderedScores, highestPossibleScore) {

  // Sort the scores in O(n) time
  let sortedMap = new Array(highestPossibleScore + 1).fill(0)
  
  
  unorderedScores.forEach(val => {
    sortedMap[val]++
  })


  var sortedArr = []
  

  for(var i = sortedMap.length; i >=0; i--){
    if(sortedMap[i] && sortedMap[i] < 2){
      sortedArr.push(i)
    } else if(sortedMap[i] > 1) {
      for(var j = 0 ; j < sortedMap[i];j++) {
        sortedArr.push(i)
      }
    }
  }
  return sortedArr
}
```