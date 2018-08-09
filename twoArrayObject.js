/*
Write a function called twoArrayObject which accepts to arrays of varying lengths.
The first array consists of keys and the second one consists of values. 
Your function should return an object created from the keys and values. 
If there are not enough values, the rest of keys should have a value of null. 
If there not enough keys, just ignore the rest of values.
*/ 

function twoArrayObject(keys, values) {
  var obj = {};
  for (var i = 0; i < keys.length; i++) {
    obj[keys[i]] = i < values.length ? values[i] : null;
  }
  return obj;
}


twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])
twoArrayObject(['a', 'b', 'c']  , [1, 2, 3, 4])
twoArrayObject(['x', 'y', 'z']  , [1,2])