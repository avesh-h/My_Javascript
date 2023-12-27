// let a = [1, 2];
// let b = [3, 4, 5];

// const cartesianBasic = (a, b) => {
//   const finalArr = [];
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       finalArr.push([a[i], b[j]]);
//     }
//   }
//   return finalArr;
// };

// console.log(cartesianBasic(a, b));

//------------------------------------------ Climbing staircase problem------------------------------

const countSteps = (n) => {
  const noWaysToMove = [1, 2];
  for (let i = 2; i <= n; i++) {
    noWaysToMove[i] = noWaysToMove[i - 1] + noWaysToMove[i - 2];
  }
  return noWaysToMove[n - 1];
};

// console.log(countSteps(1)); //(1) = 1 step
// console.log(countSteps(2)); //(1,1),(2) = 2 steps
console.log(countSteps(4)); //(1,1,1,1),(1,2,1),(1,1,2)(2,1,1),(2,2) = 5 steps
// console.log(countSteps(3)); //(1,1,1),(1,2),(2,1) = 3 steps
