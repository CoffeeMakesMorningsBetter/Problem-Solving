/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/ 

function spinalCase(str) {
  let s = str.replace(/([a-z])([A-Z])/g, "$1 $2")
  return s.replace(/(:?_|\s+)/g, '-').toLowerCase()
}


spinalCase("This Is Spinal Tap") //should return "this-is-spinal-tap"
spinalCase("thisIsSpinalTap") //should return "this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show") //should return "the-andy-griffith-show"
spinalCase("Teletubbies say Eh-oh") //should return "teletubbies-say-eh-oh"
spinalCase("AllThe-small Things") //should return "all-the-small-things"

// put a space between lowercase and capital letters only
// https://stackoverflow.com/questions/4819829/space-between-lowercase-and-uppercase-letters-in-a-string-in-javascript
// replace dashes OR spaces with - 
// https://stackoverflow.com/questions/3378773/can-i-use-an-or-in-regex-without-capturing-whats-enclosed
