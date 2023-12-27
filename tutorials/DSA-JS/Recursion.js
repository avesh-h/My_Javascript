//simple multiply function

//Basic understanding example
// const multiply = (num) => {
//   if (num === 0) {
//     return 1;
//   }
//   return num * multiply(num - 1);
// };

// console.log(multiply(5));

// const multiplyArr = (arr) => {
//   if (arr.length <= 0) {
//     return 1;
//   }

//   return arr[arr.length - 1] * multiplyArr(arr.slice(0, arr.length - 1));
// };

// console.log(multiplyArr([1, 2, 3, 4, 5]));

//---------------------------Recursive solution of binary search------------------------------

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

//-----------------------Get range between two numbers-------------------
// let range = [];
// const getIntegersRange = (start, end) => {
//   if (start >= end) {
//     return range;
//   } else {
//     start++;
//     if (start < end) {
//       range.push(start);
//     }
//     return getIntegersRange(start, end);
//   }
// };
// console.log(getIntegersRange(12, 21));

//solution 2
// const getRange = (start, end) => {
//   if (start === end) {
//     return [];
//   } else if (start < end) {
//     end--;
//     return getRange(start, end).concat(end);
//   }
// };

// console.log(getRange(2, 11));

// ------------------------------Summation with recursion-----------------------

// const recursiveSum = (arr) => {
//   return !arr.length ? 0 : arr.pop() + recursiveSum(arr);
// };

// console.log(recursiveSum([5, 5, 5, 5, 5]));

// ---------------------------Exponent-----------------------

// const getExponentNumber = (base, expo) => {
//   if (!expo) {
//     return 1;
//   }
//   expo--;
//   return base * getExponentNumber(base, expo);
// };

// console.log(getExponentNumber(5, 4));

// ------------------------Binary number-------------------------------

// const convertToBinary = (num) => {
//   if (num === 0 || num === 1) {
//     return num + "";
//   }
//   return convertToBinary(Math.floor(num / 2)) + (num % 2);
// };
// console.log(convertToBinary(25));

// -------------------------------Quick SOrt with recursion-------------------------
// const quickSort = (arr) => {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const subRight = [];
//   const subLeft = [];
//   const pivotElement = arr[arr.length - 1];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < pivotElement) {
//       subLeft.push(arr[i]);
//     } else if (arr[i] > pivotElement) {
//       subRight.push(arr[i]);
//     }
//   }
//   return [...quickSort(subLeft), pivotElement, ...quickSort(subRight)];
// };

// console.log(quickSort([-6, 20, 8, -2, 4]));
