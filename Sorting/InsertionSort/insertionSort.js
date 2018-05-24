//Insertion Sort
// Must be sorted already
// Added new value to end of Array (RIGHT)

// Three Steps

/*
        Step 1:
        If there is not left return x since we already have a sorted array
        
        Step 2: 
        If x >= x-1 we have a sorted array return 

        Step 3: 
        If x is smaller(<) then x-1 swap places    
    */

function insertionSort(array, value) {
  array.push(value);
  if (array.length === 1) return array;
  var arrLength = array.length - 1;
  while (array[arrLength] < array[arrLength - 1]) {
    [array[arrLength - 1], array[arrLength]] = [
      array[arrLength],
      array[arrLength - 1]
    ];
    arrLength--;
  }
  return array;
}

insertionSort([1, 2, 3, 4, 5], 1);
insertionSort([1, 2, 3, 4, 5], 2);
insertionSort([1, 2, 3, 4, 5], 3);
insertionSort([1, 2, 3, 4, 5], 4);
insertionSort([1, 2, 3, 4, 5], 5);
insertionSort([1, 2, 3, 4, 5], 10);
