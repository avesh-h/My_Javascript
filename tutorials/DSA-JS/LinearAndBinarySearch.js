const arr = [-5, 2, 10, 4, 6];

//-------------------------------------Linear Search------------------------------------
// 1)t = 10;
// const searchElement = (t) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === t) {
//       return i;
//     }
//   }
//   return -1;
// };
// // BigO = O(n)
// console.log(searchElement(10));

//---------------------------------------BInary Search---------------------------------------

//Binary seach always work on the sorted array so first do sorting.
// 1)first get the middle element of the array

const binarySearchFunc = (t) => {
  //First sort the array
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  const newArr = [...arr];
  newArr.sort((a, b) => a - b); // [-5,2,4,6,10]

  //Main solution
  while (leftIndex <= rightIndex) {
    let middleElementIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (newArr[middleElementIndex] === t) {
      return middleElementIndex;
    }
    if (t > newArr[middleElementIndex]) {
      leftIndex = middleElementIndex + 1;
    } else {
      rightIndex = middleElementIndex - 1;
    }
  }
  return -1;
};
// console.log(binarySearchFunc(6));

//Recursive solution

//My approach

// let newArr = [...arr];
// newArr.sort((a, b) => a - b);

// const recursiveBinary = (leftInd, rightInd, t) => {
//   if (leftInd > rightInd) {
//     return -1;
//   }
//   let middleElementIndex = Math.floor((leftInd + rightInd) / 2);
//   if (newArr[middleElementIndex] === t) {
//     //Base case
//     return middleElementIndex;
//   } else if (t > newArr[middleElementIndex]) {
//     return recursiveBinary(middleElementIndex + 1, rightInd, t);
//   } else if (t < newArr[middleElementIndex]) {
//     return recursiveBinary(leftInd, middleElementIndex - 1, t);
//   }
// };

// console.log(recursiveBinary(0, newArr.length - 1, 10));

//Video Approach

// const recursiveBinarySearch = (arr, t) => {
//   return searchElem(arr, 0, arr.length - 1, t);
// };
// const searchElem = (sortedArr, leftIndex, rightIndex, target) => {
//   if (leftIndex > rightIndex) {
//     return -1;
//   }
//   let middleElementIndex = Math.floor((leftIndex + rightIndex) / 2);
//   if (target === sortedArr[middleElementIndex]) {
//     return middleElementIndex;
//   } else if (target > sortedArr[middleElementIndex]) {
//     return searchElem(sortedArr, middleElementIndex + 1, rightIndex, target);
//   } else {
//     return searchElem(sortedArr, leftIndex, middleElementIndex - 1, target);
//   }
// };
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
