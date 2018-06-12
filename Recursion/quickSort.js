// QuickSort

function quickSort(list, low = 0, high = list.length - 1) {
  if (low < high) {
    let pi = partition(list, low, high);

    quickSort(list, low, pi - 1); // before pi
    quickSort(list, pi + 1, high); // after pi
  }
  return list;
}

// Pivot starting at End
function partition(list, low = 0, high = list.length - 1) {
  let pivot = list[high];
  let i = low - 1;
  // stop one before the end because the end index is the pivot
  for (let j = low; j <= high - 1; j++) {
    if (list[j] <= pivot) {
      i++;
      [list[j], list[i]] = [list[i], list[j]];
    }
  }
  [list[i + 1], list[high]] = [list[high], list[i + 1]];
  return i + 1;
}

quickSort([10, 3, 4, 7, 100, 99, 8]); // [ 3, 4, 7, 8, 10, 99, 100 ]
quickSort([1, 1, 2, 3, 0]); // [ 0, 1, 1, 2, 3 ]
quickSort([]); //[]
