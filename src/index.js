function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.round((left + right) / 2);
  while (val !== arr[middle]) {
    middle = Math.round((left + right) / 2);
    if (left === right) {
      return -1;
    } else if (val === arr[middle]) {
      return middle;
    } else if (val > arr[middle]) {
      left = middle;
    } else if (val < arr[middle]) {
      right = middle;
    }
  }
  return middle;
}

// i'm not sliding the window or splitting my array in half. I'm only using pointer
// console.log(binarySearch([1,2,3,4,5], 2))  //1
// console.log(binarySearch([1,2,3,4,5], 5))  // 4
// console.log(binarySearch([1,2,3,4,5], 6))  // -1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
