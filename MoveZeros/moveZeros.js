function moveZeroes(list){
  let start = 0
  let end = 0
  while(end < list.length){
    console.log(list[start], list[end])
    if(list[start] === 0 && list[end] === 0){
      end++
    }
    if(list[start] === 0 && list[end] !== 0 && list[end] !== undefined){
      [list[start], list[end]] = [list[end], list[start]]
      start++
      end++
    }
    if(list[start] !== 0 && list[end] === 0){
      start++
    }
    if(list[start] !== 0 && list[end] !== 0){
      start++ 
      end++ 
    } 
    
  }
  return list 
}

// ALTERNATIVE SOLUTION
/**
 * Strategy:
 * - keep pointer, `insertIdx`, at first zero
 * - loop over each num in nums
 *   - at val that isn't zero, place it at `insertIdx`
 *     - then increment `inesertPos` and repeat
 * - after loop, `insertIdx` is at index where all zeroes should go
 */

function moveZeroes(nums) {
  let insertIdx = 0;

  // iterate thru arr, swapping out zeroes for other numbers
  for (let num of nums) {
    if (num !== 0) {
      nums[insertIdx] = num;
      insertIdx++;
    }
  }

  // put zeroes back in, starting at insert position until end
  while (insertIdx < nums.length) {
    nums[insertIdx] = 0;
    insertIdx++;
  }

  return nums;
}

moveZeroes([0,1,0,3,12]) // [1,3,12,0,0]
moveZeroes([1,3,10,2]) // [1,3,10,2]
moveZeroes([4,1,2,0,0,1,2,1,0]) // [4,1,2,1,2,1,0,0,0]
moveZeroes([6,1,2,3,5,1,0]) // [6,1,2,3,5,1,0]
moveZeroes([0,6,1,2,3,5,1,0]) // [6,1,2,3,5,1,0,0]
moveZeroes([12,2,0,0,2,1]) // [12,2,2,1,0,0]