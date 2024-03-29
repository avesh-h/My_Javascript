//1)Palindrome numbers

//So in below answer +val we use it for convert the whole string into the number it's also new trick to convert string to number
// const isPalindrome = (val) => {
//   return val === +val.toString().split("").reverse().join("");
// };

// console.log(isPalindrome(120021));

//FIbonacci INdex

// const fibo = (n) => {
//   let newArr = [];
//   for (let i = 0; i <= n; i++) {
//     if (i > 1) {
//       newArr.push(newArr[i - 2] + newArr[i - 1]);
//     } else {
//       newArr.push(i);
//     }
//   }
//   return newArr[n];
// };

//WIth recursion
// const fibo = (n) => {
//   if (n <= 1) return n;

//   return fibo(n - 2) + fibo(n - 1);
// };

// with one liner code

// const fibo = (n) => (n <= 1 ? n : fibo(n - 2) + fibo(n - 1));

// console.log(fibo(12));

// 3) check both strings are the same charcters or not

const checkStr = (s, t) => {
  // 1st
  // const checkFullStr = [];
  // for (let i in s) {
  //   if (t.includes(s[i])) {
  //     checkFullStr.push(true);
  //   } else {
  //     checkFullStr.push(false);
  //   }
  // }
  // return checkFullStr.every((val) => val);
  // --------------------------------------------------------------------
  // 2nd  => one liner
  // return s.split("").sort().join("") === t.split("").sort().join("");
  // ------------------------------------------------------------
  // 3rd => what if they have same repeated characters
  // if (s.length !== t.length) return false;
  // let obj1 = {};
  // let obj2 = {};
  // for (let i = 0; i < s.length; i++) {
  //   obj1[s[i]] = (obj1[s[i]] || 0) + 1;
  //   obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  // }
  // for (let j in obj1) {
  //   if (obj1[j] !== obj2[j]) return false;
  // }
  // return true;
};

// console.log(checkStr("qwertyuiop", "poiuytrewq"));

//3)Two sum number

//Worst solution
// const twoSum = (target, arr) => {
// const finalObj = arr.reduce((acc, curr, ind, array) => {
//   if (!Object.keys(acc).length) {
//     acc[ind] = curr;
//     for (let i in array) {
//       if (ind !== Number(i) && curr + array[i] === target) {
//         acc[i] = array[i];
//         break;
//       } else if (Number(i) === array.length - 1) {
//         delete acc[ind];
//       }
//     }
//   }
//   return acc;
// }, {});
// return Object.keys(finalObj).map((e) => Number(e));
// const finalObj = {};
// for (let i in arr) {
//   let exist = target - arr[i];
//   if (arr.includes(exist) && arr.indexOf(exist) !== Number(i)) {
//     let secondVal = arr.indexOf(exist);
//     finalObj[i] = arr[i];
//     finalObj[secondVal] = arr[secondVal];
//   }
// }
// return Object.keys(finalObj).map((e) => +e);
//3rd solution
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === target) {
//       return [i, j];
//     }
//   }
// }
// 4th
// const obj = {};
// for (let i = 0; i < arr.length; i++) {
//   let n = arr[i];
//   if (obj[target - n] >= 0) {
//     return [obj[target - n], i];
//   } else {
//     obj[n] = i;
//   }
// }
// return obj;
// };
// console.log(twoSum(0, [0, 4, 3, 0]));
// console.log(twoSum(6, [3, 2, 4]));
// console.log(twoSum(9, [2, 7, 11, 15]));
// console.log(twoSum(9, [12, 8, 2, 15, 7]));
// console.log(twoSum(6, [3, 3]));

//Stock example
const buyStock = (arr) => {
  //First approach
  // let profit = 0;
  // let currVal;
  // for (let i = 0; i < arr.length; i++) {
  //   if (currVal < arr[i + 1]) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[j] - currVal > profit) {
  //         profit = arr[j] - currVal;
  //       }
  //     }
  //   } else {
  //     currVal = arr[i];
  //   }
  // }
  // return profit;

  //optimized

  let minStockPrize;
  for (let i = 0; i < arr.length; i++) {
    if (minStockPrize > arr[i + 1]) {
      minStockPrize = arr[i + 1];
    }
  }
  return minStockPrize;
};

console.log(buyStock([7, 1, 5, 3, 6, 4]));
// console.log(buyStock([1, 2]));
// console.log(buyStock([7, 6, 4, 3, 1]));

const secondLarge = (arr) => {
  // approach 1:--------------------------------------------------------------
  // const maxNum = Math.max(...arr);
  // let secondLarge;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] < maxNum && arr[i] > arr[i - 1]) {
  //     secondLarge = arr[i];
  //   }
  // }
  // return secondLarge;
  // app:2-----------------------------------------------------------------
  // const uniquArr = [...new Set(arr)].sort((a, b) => b - a);
  // return uniquArr[1];
  //app:3------------------------------------------------------------------
  // let largestNumber = Number.NEGATIVE_INFINITY;
  // let secondLargest = Number.NEGATIVE_INFINITY;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > largestNumber) {
  //     secondLargest = largestNumber;
  //     largestNumber = arr[i];
  //   } else if (arr[i] !== largestNumber && arr[i] > secondLargest) {
  //     secondLargest = arr[i];
  //   }
  // }
  // return secondLargest;
};

// console.log(secondLarge([1, 1, 10, 12, 34, 35, 35]));

//Kadanes Algorithm

// find maximum total of the subarray from the array

const maxSubArr = (arr) => {
  // let maxSum = arr[0];
  // let startInd = 0;
  // let endInd = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   let currentSum = 0;
  //   for (let j = i; j < arr.length; j++) {
  //     currentSum += arr[j];
  //     if (currentSum > maxSum) {
  //       maxSum = currentSum;
  //       startInd = i;
  //       endInd = j;
  //     }
  //   }
  // }
  // return {
  //   maxSum,
  //   arr: arr.slice(startInd, endInd + 1),
  // };
  //Optimized approach (kadane)
  // let sum = 0;
  // let maxSum = arr[0];
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  //   if (sum > maxSum) {
  //     maxSum = sum;
  //   } else if (sum < 0) {
  //     sum = 0;
  //   }
  // }
  // return maxSum;
};

console.log(maxSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArr([5, 4, -1, 7, 8]));

//The main differnce between of if else if and if and if

const checkFunc = (bool) => {
  // IF AND ELSE IF
  // if (bool) {
  //   console.log("check 1");
  // } else if (bool) {
  //   console.log("check 2");
  // }
  //IF AND IF
  // if (bool) {
  //   console.log("check 1");
  // }
  // if (bool) {
  //   console.log("check 2");
  // }
};

checkFunc(true);

//after run this we can see if else if the value is true it will go to the first if and it will get true then it will never go inside to check for else if.
//BUt in the case of if and if it will go the check for first if then gets true and then go to the second if the check the condition so that's the main difference here.
