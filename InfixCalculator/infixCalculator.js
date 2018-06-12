// In this exercise, you’ll build a “polish notation calculator”.

// create two stacks FIFO 
  // number
  // operation

function calculator(str){
  let numbers = []
  let operation = []
  for(let i = str.length; i>= 0; i--){
    if(str.charCodeAt(i) > 41 && str.charCodeAt(i) <= 47){
      operation.push(str[i])
    } else {
      numbers.push(str[i])
    }
  }
  return {"numbers": numbers, "operations": operation}
}

function create(numbers, operations){
  let total = +numbers[0]
    while(numbers.length !== 0){
      if(numbers[0] === " "){
        total = total operations.shift() +numbers.shift()
      }
    }
  }
}

function calculator()
