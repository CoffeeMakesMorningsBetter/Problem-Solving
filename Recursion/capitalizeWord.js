// PURE RECURSION
function capitalizedWords(arr, cap=[]) {
  if(arr.length === 0) return cap 
  cap.push(arr[0].toUpperCase())
  return capitalizedWords(arr.slice(1), cap)
}

// HELPER RECURSION
function capitalizedWordsHelper(arr) {
  let cap = []
  function helper(list){
    if(list.length === 0) return cap 
    cap.push(list[0].toUpperCase())
    helper(list.slice(1))
  }
  helper(arr)
  return cap
}

var words = ['i', 'am', 'learning', 'recursion'];
capitalizedWords(words) //[ 'I', 'AM', 'LEARNING', 'RECURSION' ]

capitalizedWordsHelper(words) //[ 'I', 'AM', 'LEARNING', 'RECURSION' ]