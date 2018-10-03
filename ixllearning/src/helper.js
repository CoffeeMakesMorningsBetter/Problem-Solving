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
    arr.push({name:String.fromCharCode(i), encoded: String.fromCharCode(((i-65)+shiftValue)% 26 + 65)})
  }
  return arr
}

export {
  createPosition,
  createAlphabet
}