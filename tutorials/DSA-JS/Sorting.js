// Recursive solutions

// --------------Bubble Sort----------------------------------------

//Ascending order
// const bubbleSort = (arr) => {
//   let isSwap = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       isSwap = true;
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
//   if (isSwap) {
//     bubbleSort(arr);
//   }
//   return arr;
// };
// console.log(bubbleSort([8, 20, -2, 4, -6]));

//Descending with do while and for loop

// const descendingSort = (arr) => {
//   do {
//     let swapped = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return arr;
// };

// console.log(descendingSort([8, 20, -24, -6]));

// ------------------------------Insertion sorting---------------------------

// const insertionSort = (arr) => {
//   let isSwap = false;
//   for (let i = 0; i < arr.length; i++) {
//     // let sortedElement = arr[i];
//     let notSortedElement = arr[i + 1];
//     for (let j = i; j > 0; j--) {
//       let sortedElement = arr[j];
//       if (sortedElement > notSortedElement) {
//         let temp = sortedElement;
//         sortedElement = notSortedElement;
//         notSortedElement = temp;
//         isSwap = true;
//       }
//     }
//   }
//   if (isSwap) {
//     insertionSort(arr);
//   }
//   return arr;
// };

// console.log(insertionSort([-6, 20, 8, -2, 4]));

// const quickSort = (arr) => {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const subRight = [];
//   const subLeft = [];
//   const pivotElement = arr[arr.length - 1];
//   for (let i = 0; i < arr.length-1; i++) {
//     if (arr[i] < pivotElement) {
//       subLeft.push(arr[i]);
//     } else if (arr[i] > pivotElement) {
//       subRight.push(arr[i]);
//     }
//   }
//   return [...quickSort(subLeft), pivotElement, ...quickSort(subRight)];
// };

// console.log(quickSort([-6, 20, 8, -2, 4]));

// -----Descending order of quick sort
// const quickSortDescending = (arr) => {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const pivotElement = arr[arr.length - 1];
//   const subRight = [];
//   const subLeft = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > pivotElement) {
//       subLeft.push(arr[i]);
//     } else {
//       subRight.push(arr[i]);
//     }
//   }
//   return [
//     ...quickSortDescending(subLeft),
//     pivotElement,
//     ...quickSortDescending(subRight),
//   ];
// };

// console.log(quickSortDescending([8, 20, -2, 4, -6]));

// --------------------------------Merge Sort-------------------------------------------------

//Ascending order

const mergerSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);
  return merge(mergerSort(leftArr), mergerSort(rightArr));
};

const merge = (left, right) => {
  let tempSortedArr = [];

  while (left?.length && right?.length) {
    if (left[0] <= right[0]) {
      tempSortedArr.push(left.shift());
    } else {
      tempSortedArr.push(right.shift());
    }
  }
  return [...tempSortedArr, ...left, ...right];
};

console.log(mergerSort([-6, 20, 8, -2, 4]));

//Descending order

// const mergerSortDescending = (arr) => {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const middleIndex = Math.floor(arr.length / 2);
//   const leftArr = arr.slice(0, middleIndex);
//   const rightArr = arr.slice(middleIndex);
//   return mergeDesc(
//     mergerSortDescending(leftArr),
//     mergerSortDescending(rightArr)
//   );
// };

// const mergeDesc = (left, right) => {
//   const tempSortedArr = [];
//   while (left.length && right.length) {
//     if (left[0] >= right[0]) {
//       tempSortedArr.push(left.shift());
//     } else {
//       tempSortedArr.push(right.shift());
//     }
//   }
//   return [...tempSortedArr, ...left, ...right];
// };

// console.log(mergerSortDescending([-6, 20, 8, -2, 4]));
