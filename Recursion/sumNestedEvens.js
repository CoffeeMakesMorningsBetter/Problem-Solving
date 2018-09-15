// PURE RECURSION
function nestedEvenSum(obj, sum=0){
  for(let value in obj) {
    if(typeof obj[value] === 'number' && obj[value] % 2 === 0){
      sum += obj[value]
    } else if(typeof obj[value] === 'object' && typeof !Array.isArray(obj[value])) {
      // NOTE TOSELF DONT RETURN WHEN YOU NEED TO GO OUT, think of flat=flat.concat(fn) 
      sum = nestedEvenSum(obj[value], sum)
    }
  }
  return sum
}

// HELPER RECURSION 
function nestedEvenSum(object){
  var eSum = 0
  function eSumHelp(obj){
      for(var key in obj){
          if(typeof obj[key] === 'number' && obj[key] % 2 === 0){
              eSum += obj[key]
          }
          else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
              eSumHelp(obj[key])
          }
      }
  }
  eSumHelp(object)
  return eSum 
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10