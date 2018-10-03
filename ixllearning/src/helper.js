function createPosition(word) {
  let position = []
  for(let i = 0; i < word.length; i++){
    let value = (90 + word.charCodeAt(i) + 1) % 26
    position.push({letter: word[i], value}) 
  }
  return position
}

function createAlphabet(value = null) {
  let shiftValue = value === null ? 0: value
  let arr = []
  for(let i = 65; i <= 90; i++) {
    let name = String.fromCharCode(i)
    let encoded = String.fromCharCode(((i-65)+shiftValue)% 26 + 65)
    arr.push({name:name, encoded: encoded})
  }
  return arr
}

function checkValidInput(str) {
  let regex = /^[^a-z]*$/
  return regex.test(str) && str.length>= 3 && str.length <= 8
}

export {
  createPosition,
  createAlphabet,
  checkValidInput
}