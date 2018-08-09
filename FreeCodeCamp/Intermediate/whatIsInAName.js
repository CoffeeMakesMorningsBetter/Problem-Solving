/*
Make a function that looks through an array of objects (first argument) and returns 
an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from 
the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, 
then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on as the second argument.
*/ 

function whatIsInAName(collection, source) {
  var arr = [];
  var map = new Map()

  for(let i = 0; i < collection.length; i++) {
    for(let key in source){
      map.set(key, source[key])
    }
    for(let key in collection[i]){
      if(map.has(key) && map.get(key) === collection[i][key]){
        map.delete(key)
      }
    }
    if(map.size === 0) {
      arr.push(collection[i])
      map.clear()
    } else {
      map.clear()
    }
  }

  return arr;
}

/*
  NOTES:
  Use/Create a Map for the second argument 'source'
    line 19
  iterrate over the object and its values and check that its key exists(Map.has(key)) 
  in the Map AND the values match (Map.get(key))
    delete key from Map
  If Map.size === 0 add to array && reset MAP 
  else reset Map meaning that the collection[i] does not have all keys and corresponding values to Map
*/ 

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) //should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) // should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) // should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

