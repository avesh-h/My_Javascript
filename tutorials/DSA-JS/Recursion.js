//simple multiply function

//Basic understanding example
// const multiply = (num) => {
//   if (num === 0) {
//     return 1;
//   }
//   return num * multiply(num - 1);
// };

// console.log(multiply(5));

const multiplyArr = (arr) => {
  if (arr.length <= 0) {
    return 1;
  }

  return arr[arr.length - 1] * multiplyArr(arr.slice(0, arr.length - 1));
};

console.log(multiplyArr([1, 2, 3, 4, 5]));
