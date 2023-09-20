//So from below simple function like if we have function that do very heavy work and it create the array and store the value 5000 times inside it and also if there is any condition that we need to call it again and again that it means it always create new array for that and store values inside array again and again

// const heavyFunc = (item) => {
//   const calcArr = new Array(5000).fill("$");
//   console.log("created!");
//   return calcArr[item];
// };

// heavyFunc(590);
// heavyFunc(590);
// heavyFunc(590);

// //Closure function that can store the reference for you for later use
// const heavyFunc2 = () => {
//   const calcArr = new Array(5000).fill("$");
//   console.log("created Again!");
//   return (item) => {
//     return calcArr[item];
//   };
// };

// const getReferenceOfHeavyFunc2 = heavyFunc2();

// getReferenceOfHeavyFunc2(590);
// getReferenceOfHeavyFunc2(590);
// getReferenceOfHeavyFunc2(590);

//And we can see with closure function it will not create the array for the process and again and again it will just store the calcArr reference and it will give it to from it , it doesn't matter how many times you want and call it will create only one time.

// function theNewFunc() {
//   let called = 0;

//   return () => {
//     if (called > 0) {
//       console.log("more than once");
//       return;
//     } else {
//       called++;
//       console.log("set done!");
//     }
//   };
// }

// let soCalled = theNewFunc();
// soCalled();
// soCalled();
// soCalled();

// const arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log("i", i);
//   }, 3000);
// }

// it is because the var is the the functional scope so it creates the i for once so for all iteration of the loop it will consider same one i instead of create new i for each loop

// like example in javasctipt it is possible to do this :-

// var i = 0
// var i= 2

// but not this possible
// let i = 2
// let i = 5
